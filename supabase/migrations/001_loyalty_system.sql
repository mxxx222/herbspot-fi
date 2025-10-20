-- Supabase Loyalty Points System
-- Migration: 001_loyalty_system.sql

-- Create loyalty_points table
CREATE TABLE IF NOT EXISTS loyalty_points (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  user_id UUID NOT NULL,
  order_id TEXT NOT NULL,
  points INTEGER NOT NULL DEFAULT 0,
  points_type TEXT NOT NULL DEFAULT 'purchase', -- 'purchase', 'bonus', 'referral', 'review'
  description TEXT,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  expires_at TIMESTAMP WITH TIME ZONE DEFAULT (NOW() + INTERVAL '1 year'),
  is_active BOOLEAN DEFAULT TRUE,
  
  -- Indexes for performance
  CONSTRAINT loyalty_points_user_id_fkey FOREIGN KEY (user_id) REFERENCES auth.users(id) ON DELETE CASCADE
);

-- Create index for faster queries
CREATE INDEX IF NOT EXISTS idx_loyalty_points_user_id ON loyalty_points(user_id);
CREATE INDEX IF NOT EXISTS idx_loyalty_points_order_id ON loyalty_points(order_id);
CREATE INDEX IF NOT EXISTS idx_loyalty_points_created_at ON loyalty_points(created_at);
CREATE INDEX IF NOT EXISTS idx_loyalty_points_active ON loyalty_points(is_active) WHERE is_active = TRUE;

-- Create orders table for trigger
CREATE TABLE IF NOT EXISTS orders (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  order_id TEXT UNIQUE NOT NULL,
  user_id UUID NOT NULL,
  total_amount DECIMAL(10,2) NOT NULL,
  currency TEXT DEFAULT 'EUR',
  status TEXT DEFAULT 'pending', -- 'pending', 'paid', 'shipped', 'delivered', 'cancelled'
  stripe_session_id TEXT,
  stripe_payment_intent_id TEXT,
  metadata JSONB DEFAULT '{}',
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  
  CONSTRAINT orders_user_id_fkey FOREIGN KEY (user_id) REFERENCES auth.users(id) ON DELETE CASCADE
);

-- Create index for orders
CREATE INDEX IF NOT EXISTS idx_orders_user_id ON orders(user_id);
CREATE INDEX IF NOT EXISTS idx_orders_order_id ON orders(order_id);
CREATE INDEX IF NOT EXISTS idx_orders_status ON orders(status);

-- Function to add loyalty points
CREATE OR REPLACE FUNCTION add_loyalty_points(
  p_user_id UUID,
  p_order_id TEXT,
  p_points INTEGER,
  p_points_type TEXT DEFAULT 'purchase',
  p_description TEXT DEFAULT NULL
)
RETURNS UUID AS $$
DECLARE
  v_loyalty_id UUID;
BEGIN
  INSERT INTO loyalty_points (
    user_id,
    order_id,
    points,
    points_type,
    description
  ) VALUES (
    p_user_id,
    p_order_id,
    p_points,
    p_points_type,
    p_description
  ) RETURNING id INTO v_loyalty_id;
  
  RETURN v_loyalty_id;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

-- Function to get user's total loyalty points
CREATE OR REPLACE FUNCTION get_user_loyalty_points(p_user_id UUID)
RETURNS INTEGER AS $$
DECLARE
  v_total_points INTEGER;
BEGIN
  SELECT COALESCE(SUM(points), 0)
  INTO v_total_points
  FROM loyalty_points
  WHERE user_id = p_user_id
    AND is_active = TRUE
    AND expires_at > NOW();
  
  RETURN v_total_points;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

-- Trigger function to automatically add loyalty points when order is created
CREATE OR REPLACE FUNCTION trigger_add_loyalty_points()
RETURNS TRIGGER AS $$
DECLARE
  v_points INTEGER;
  v_user_id UUID;
BEGIN
  -- Calculate points based on order total (2 points per euro)
  v_points := FLOOR(NEW.total_amount * 2);
  
  -- Get user_id from metadata if available
  IF NEW.metadata ? 'user_id' THEN
    v_user_id := (NEW.metadata->>'user_id')::UUID;
  ELSE
    v_user_id := NEW.user_id;
  END IF;
  
  -- Add loyalty points
  PERFORM add_loyalty_points(
    v_user_id,
    NEW.order_id,
    v_points,
    'purchase',
    'Points earned from order ' || NEW.order_id
  );
  
  RETURN NEW;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

-- Create trigger
DROP TRIGGER IF EXISTS trg_add_loyalty_points ON orders;
CREATE TRIGGER trg_add_loyalty_points
  AFTER INSERT ON orders
  FOR EACH ROW
  EXECUTE FUNCTION trigger_add_loyalty_points();

-- Function to redeem loyalty points
CREATE OR REPLACE FUNCTION redeem_loyalty_points(
  p_user_id UUID,
  p_points_to_redeem INTEGER,
  p_description TEXT DEFAULT 'Points redeemed'
)
RETURNS BOOLEAN AS $$
DECLARE
  v_current_points INTEGER;
BEGIN
  -- Get current points
  SELECT get_user_loyalty_points(p_user_id) INTO v_current_points;
  
  -- Check if user has enough points
  IF v_current_points < p_points_to_redeem THEN
    RETURN FALSE;
  END IF;
  
  -- Add negative points (redemption)
  INSERT INTO loyalty_points (
    user_id,
    order_id,
    points,
    points_type,
    description
  ) VALUES (
    p_user_id,
    'REDEMPTION-' || EXTRACT(EPOCH FROM NOW())::TEXT,
    -p_points_to_redeem,
    'redemption',
    p_description
  );
  
  RETURN TRUE;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

-- Row Level Security (RLS) policies
ALTER TABLE loyalty_points ENABLE ROW LEVEL SECURITY;
ALTER TABLE orders ENABLE ROW LEVEL SECURITY;

-- Policy for loyalty_points: users can only see their own points
CREATE POLICY "Users can view their own loyalty points" ON loyalty_points
  FOR SELECT USING (auth.uid() = user_id);

-- Policy for orders: users can only see their own orders
CREATE POLICY "Users can view their own orders" ON orders
  FOR SELECT USING (auth.uid() = user_id);

-- Policy for orders: users can insert their own orders
CREATE POLICY "Users can create their own orders" ON orders
  FOR INSERT WITH CHECK (auth.uid() = user_id);

-- Grant necessary permissions
GRANT USAGE ON SCHEMA public TO authenticated;
GRANT SELECT, INSERT ON loyalty_points TO authenticated;
GRANT SELECT, INSERT ON orders TO authenticated;
GRANT EXECUTE ON FUNCTION add_loyalty_points TO authenticated;
GRANT EXECUTE ON FUNCTION get_user_loyalty_points TO authenticated;
GRANT EXECUTE ON FUNCTION redeem_loyalty_points TO authenticated;
