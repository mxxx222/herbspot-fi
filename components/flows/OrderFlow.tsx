'use client'

import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Button } from '@/components/ui/Button'
import { Skeleton, ProductCardSkeleton } from '@/components/ui/Skeleton'
import { ErrorBoundary } from '@/components/ui/ErrorBoundary'
import { OrderForm } from '@/components/forms/OrderForm'
import { useProducts, useAddPoints } from '@/lib/queries'
import { formatCurrency, calculatePoints } from '@/lib/utils'

// Flow steps
type FlowStep = 'products' | 'order' | 'payment' | 'confirmation'

interface OrderFlowProps {
  initialStep?: FlowStep
  onComplete?: (orderId: string) => void
  className?: string
}

export function OrderFlow({ initialStep = 'products', onComplete, className }: OrderFlowProps) {
  const [currentStep, setCurrentStep] = useState<FlowStep>(initialStep)
  const [selectedItems, setSelectedItems] = useState<Array<{
    productId: string
    quantity: number
    price: number
  }>>([])
  const [qrCode, setQrCode] = useState<string>('')
  const [completedOrderId, setCompletedOrderId] = useState<string>('')

  const productsQuery = useProducts(20)
  const addPointsMutation = useAddPoints()

  // Calculate total amount
  const totalAmount = selectedItems.reduce((sum, item) => sum + (item.price * item.quantity), 0)

  // Calculate estimated points
  const estimatedPoints = calculatePoints(totalAmount, 'Bronze', !!qrCode)

  const handleProductSelect = (productId: string, price: number) => {
    setSelectedItems(prev => {
      const existing = prev.find(item => item.productId === productId)
      if (existing) {
        return prev.map(item =>
          item.productId === productId
            ? { ...item, quantity: item.quantity + 1 }
            : item
        )
      }
      return [...prev, { productId, quantity: 1, price }]
    })
  }

  const handleQuantityChange = (productId: string, quantity: number) => {
    if (quantity <= 0) {
      setSelectedItems(prev => prev.filter(item => item.productId !== productId))
    } else {
      setSelectedItems(prev =>
        prev.map(item =>
          item.productId === productId ? { ...item, quantity } : item
        )
      )
    }
  }

  const handleOrderSubmit = async (orderData: any) => {
    try {
      // Simulate order creation (in real app, this would call your API)
      const mockOrderId = `ORD-${Date.now()}`
      
      // Add loyalty points if QR code provided
      if (qrCode) {
        await addPointsMutation.mutateAsync({
          orderId: mockOrderId,
          email: orderData.email,
          amount: totalAmount,
          qrCode: qrCode,
          source: 'qr'
        })
      }

      setCompletedOrderId(mockOrderId)
      setCurrentStep('confirmation')
      onComplete?.(mockOrderId)
    } catch (error) {
      console.error('Order submission error:', error)
    }
  }

  const handleQRScan = () => {
    // Simulate QR code scanning
    const mockQRCode = `herbspot://qr/${Math.random().toString(36).substr(2, 9)}`
    setQrCode(mockQRCode)
  }

  const flowSteps = [
    { id: 'products', title: 'Valitse tuotteet', progress: 25 },
    { id: 'order', title: 'Tilaa', progress: 50 },
    { id: 'payment', title: 'Maksa', progress: 75 },
    { id: 'confirmation', title: 'Vahvistus', progress: 100 }
  ]

  const currentStepIndex = flowSteps.findIndex(step => step.id === currentStep)
  const currentProgress = flowSteps[currentStepIndex]?.progress || 0

  return (
    <ErrorBoundary>
      <div className={className}>
        {/* Progress Bar */}
        <div className="mb-8">
          <div className="flex items-center justify-between mb-2">
            {flowSteps.map((step, index) => (
              <div
                key={step.id}
                className={`flex items-center space-x-2 ${
                  index <= currentStepIndex ? 'text-[var(--color-accent)]' : 'text-[var(--color-fg-muted)]'
                }`}
              >
                <div
                  className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-medium ${
                    index < currentStepIndex
                      ? 'bg-[var(--color-accent)] text-black'
                      : index === currentStepIndex
                      ? 'bg-[var(--color-accent-muted)] text-[var(--color-accent)] border-2 border-[var(--color-accent)]'
                      : 'bg-[var(--color-bg-tertiary)] text-[var(--color-fg-muted)]'
                  }`}
                >
                  {index < currentStepIndex ? '✓' : index + 1}
                </div>
                <span className="hidden sm:block text-sm font-medium">
                  {step.title}
                </span>
              </div>
            ))}
          </div>
          <div className="w-full bg-[var(--color-bg-tertiary)] rounded-full h-2">
            <motion.div
              className="bg-[var(--color-accent)] h-2 rounded-full"
              initial={{ width: 0 }}
              animate={{ width: `${currentProgress}%` }}
              transition={{ duration: 0.5, ease: 'easeOut' }}
            />
          </div>
        </div>

        {/* Step Content */}
        <AnimatePresence mode="wait">
          <motion.div
            key={currentStep}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.3 }}
          >
            {currentStep === 'products' && (
              <ProductsStep
                products={productsQuery.data}
                isLoading={productsQuery.isLoading}
                error={productsQuery.error}
                selectedItems={selectedItems}
                onProductSelect={handleProductSelect}
                onQuantityChange={handleQuantityChange}
                onNext={() => setCurrentStep('order')}
                totalAmount={totalAmount}
              />
            )}

            {currentStep === 'order' && (
              <OrderStep
                selectedItems={selectedItems}
                totalAmount={totalAmount}
                qrCode={qrCode}
                onQRScan={handleQRScan}
                onOrderSubmit={handleOrderSubmit}
                onBack={() => setCurrentStep('products')}
                estimatedPoints={estimatedPoints}
              />
            )}

            {currentStep === 'payment' && (
              <PaymentStep
                totalAmount={totalAmount}
                onPaymentComplete={() => setCurrentStep('confirmation')}
                onBack={() => setCurrentStep('order')}
              />
            )}

            {currentStep === 'confirmation' && (
              <ConfirmationStep
                orderId={completedOrderId}
                totalAmount={totalAmount}
                pointsEarned={estimatedPoints}
                qrCode={qrCode}
                onNewOrder={() => {
                  setCurrentStep('products')
                  setSelectedItems([])
                  setQrCode('')
                  setCompletedOrderId('')
                }}
              />
            )}
          </motion.div>
        </AnimatePresence>
      </div>
    </ErrorBoundary>
  )
}

// Products Selection Step
interface ProductsStepProps {
  products?: any[]
  isLoading: boolean
  error: any
  selectedItems: Array<{ productId: string; quantity: number; price: number }>
  onProductSelect: (productId: string, price: number) => void
  onQuantityChange: (productId: string, quantity: number) => void
  onNext: () => void
  totalAmount: number
}

function ProductsStep({
  products,
  isLoading,
  error,
  selectedItems,
  onProductSelect,
  onQuantityChange,
  onNext,
  totalAmount
}: ProductsStepProps) {
  if (isLoading) {
    return (
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {Array.from({ length: 6 }).map((_, i) => (
          <ProductCardSkeleton key={i} />
        ))}
      </div>
    )
  }

  if (error) {
    return (
      <div className="text-center py-12">
        <p className="text-[var(--color-error)] mb-4">
          Tuotteiden lataaminen epäonnistui
        </p>
        <Button onClick={() => window.location.reload()}>
          Yritä uudelleen
        </Button>
      </div>
    )
  }

  return (
    <div className="space-y-8">
      <div>
        <h2 className="text-2xl font-bold text-[var(--color-fg)] mb-2">
          Valitse tuotteet
        </h2>
        <p className="text-[var(--color-fg-secondary)]">
          Valitse haluamasi tuotteet ja määrät
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {products?.map((product) => {
          const selectedItem = selectedItems.find(item => item.productId === product.id)
          const isSelected = !!selectedItem

          return (
            <motion.div
              key={product.id}
              className={`card-base p-4 cursor-pointer transition-all ${
                isSelected ? 'ring-2 ring-[var(--color-accent)]' : ''
              }`}
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => onProductSelect(product.id, parseFloat(product.priceRange.minVariantPrice.amount))}
            >
              {product.featuredImage && (
                <img
                  src={product.featuredImage.url}
                  alt={product.title}
                  className="w-full h-48 object-cover rounded-lg mb-4"
                />
              )}
              
              <h3 className="font-semibold text-[var(--color-fg)] mb-2">
                {product.title}
              </h3>
              
              <p className="text-[var(--color-accent)] font-bold mb-4">
                {formatCurrency(parseFloat(product.priceRange.minVariantPrice.amount))}
              </p>

              {isSelected && (
                <div className="flex items-center justify-between">
                  <Button
                    size="sm"
                    variant="secondary"
                    onClick={(e) => {
                      e.stopPropagation()
                      onQuantityChange(product.id, selectedItem.quantity - 1)
                    }}
                  >
                    -
                  </Button>
                  
                  <span className="font-medium text-[var(--color-fg)]">
                    {selectedItem.quantity}
                  </span>
                  
                  <Button
                    size="sm"
                    variant="secondary"
                    onClick={(e) => {
                      e.stopPropagation()
                      onQuantityChange(product.id, selectedItem.quantity + 1)
                    }}
                  >
                    +
                  </Button>
                </div>
              )}
            </motion.div>
          )
        })}
      </div>

      {selectedItems.length > 0 && (
        <motion.div
          className="fixed bottom-0 left-0 right-0 bg-[var(--color-bg)] border-t border-[var(--color-border)] p-4"
          initial={{ y: 100 }}
          animate={{ y: 0 }}
        >
          <div className="max-w-4xl mx-auto flex items-center justify-between">
            <div>
              <p className="text-[var(--color-fg)] font-medium">
                {selectedItems.length} tuote{selectedItems.length !== 1 ? 'tta' : ''} valittu
              </p>
              <p className="text-[var(--color-accent)] font-bold text-lg">
                Yhteensä: {formatCurrency(totalAmount)}
              </p>
            </div>
            <Button onClick={onNext} size="lg">
              Jatka tilaukseen
            </Button>
          </div>
        </motion.div>
      )}
    </div>
  )
}

// Order Form Step
interface OrderStepProps {
  selectedItems: Array<{ productId: string; quantity: number; price: number }>
  totalAmount: number
  qrCode: string
  onQRScan: () => void
  onOrderSubmit: (data: any) => void
  onBack: () => void
  estimatedPoints: number
}

function OrderStep({
  selectedItems,
  totalAmount,
  qrCode,
  onQRScan,
  onOrderSubmit,
  onBack,
  estimatedPoints
}: OrderStepProps) {
  return (
    <div className="space-y-8">
      <div>
        <h2 className="text-2xl font-bold text-[var(--color-fg)] mb-2">
          Täytä tilauksen tiedot
        </h2>
        <p className="text-[var(--color-fg-secondary)]">
          Anna tiedot tilauksen käsittelyä varten
        </p>
      </div>

      {/* QR Code Section */}
      <div className="card-base p-6">
        <div className="flex items-center justify-between mb-4">
          <div>
            <h3 className="font-semibold text-[var(--color-fg)]">
              Skannaa QR-koodi bonus-pisteitä varten
            </h3>
            <p className="text-sm text-[var(--color-fg-secondary)]">
              Saat 1.5x bonus-pisteitä QR-koodin skannaamalla
            </p>
          </div>
          <Button
            variant={qrCode ? 'primary' : 'outline'}
            onClick={onQRScan}
          >
            {qrCode ? 'QR-koodi skannattu ✓' : 'Skannaa QR-koodi'}
          </Button>
        </div>
        
        {qrCode && (
          <div className="p-3 bg-[var(--color-accent-muted)] rounded-lg">
            <p className="text-sm text-[var(--color-accent)] font-medium">
              🎉 Saat {estimatedPoints} bonus-pistettä! (normaali: {Math.floor(totalAmount * 2)})
            </p>
          </div>
        )}
      </div>

      {/* Order Summary */}
      <div className="card-base p-6">
        <h3 className="font-semibold text-[var(--color-fg)] mb-4">
          Tilauksen yhteenveto
        </h3>
        <div className="space-y-2">
          {selectedItems.map((item, index) => (
            <div key={index} className="flex justify-between text-sm">
              <span className="text-[var(--color-fg-secondary)]">
                Tuote {index + 1} × {item.quantity}
              </span>
              <span className="text-[var(--color-fg)]">
                {formatCurrency(item.price * item.quantity)}
              </span>
            </div>
          ))}
          <div className="border-t border-[var(--color-border)] pt-2 flex justify-between font-semibold">
            <span className="text-[var(--color-fg)]">Yhteensä</span>
            <span className="text-[var(--color-accent)]">
              {formatCurrency(totalAmount)}
            </span>
          </div>
        </div>
      </div>

      {/* Order Form */}
      <OrderForm
        initialData={{
          items: selectedItems,
          qrCode: qrCode
        }}
        onSubmit={onOrderSubmit}
        onSuccess={(orderId) => {
          console.log('Order created:', orderId)
        }}
      />

      <div className="flex justify-between">
        <Button variant="outline" onClick={onBack}>
          Takaisin tuotteisiin
        </Button>
      </div>
    </div>
  )
}

// Payment Step (Mock)
interface PaymentStepProps {
  totalAmount: number
  onPaymentComplete: () => void
  onBack: () => void
}

function PaymentStep({ totalAmount, onPaymentComplete, onBack }: PaymentStepProps) {
  const [isProcessing, setIsProcessing] = useState(false)

  const handlePayment = async () => {
    setIsProcessing(true)
    // Simulate payment processing
    setTimeout(() => {
      setIsProcessing(false)
      onPaymentComplete()
    }, 2000)
  }

  return (
    <div className="max-w-md mx-auto text-center space-y-6">
      <div>
        <h2 className="text-2xl font-bold text-[var(--color-fg)] mb-2">
          Maksa tilaus
        </h2>
        <p className="text-[var(--color-fg-secondary)]">
          Maksumäärä: {formatCurrency(totalAmount)}
        </p>
        <p className="text-sm text-[var(--color-accent)] mt-2">
          📦 Toimitusarvio: 2-4 arkipäivää
        </p>
      </div>

      <div className="card-base p-8">
        <div className="space-y-4">
          {/* Apple Pay & Google Pay */}
          <div className="space-y-3">
            <button className="w-full bg-black text-white py-3 px-4 rounded-lg flex items-center justify-center gap-3 hover:bg-gray-800 transition-colors">
              <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
                <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
              </svg>
              Apple Pay
            </button>
            
            <button className="w-full bg-white text-black py-3 px-4 rounded-lg flex items-center justify-center gap-3 hover:bg-gray-100 transition-colors border border-gray-300">
              <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
                <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
              </svg>
              Google Pay
            </button>
          </div>
          
          <div className="relative">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-[var(--color-border)]" />
            </div>
            <div className="relative flex justify-center text-sm">
              <span className="px-2 bg-[var(--color-bg)] text-[var(--color-fg-muted)]">tai</span>
            </div>
          </div>
          
          <div className="w-16 h-16 mx-auto bg-[var(--color-bg-tertiary)] rounded-full flex items-center justify-center">
            <svg className="w-8 h-8 text-[var(--color-fg-muted)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
            </svg>
          </div>
          
          <div>
            <h3 className="font-semibold text-[var(--color-fg)] mb-2">
              Mock-maksu
            </h3>
            <p className="text-sm text-[var(--color-fg-secondary)]">
              Tämä on kehitysversio. Maksu simuloidaan.
            </p>
          </div>

          <Button
            onClick={handlePayment}
            loading={isProcessing}
            size="lg"
            fullWidth
            className="mt-6"
          >
            {isProcessing ? 'Käsitellään maksua...' : `Maksa ${formatCurrency(totalAmount)}`}
          </Button>
        </div>
      </div>

      <Button variant="outline" onClick={onBack}>
        Takaisin tilaukseen
      </Button>
    </div>
  )
}

// Confirmation Step
interface ConfirmationStepProps {
  orderId: string
  totalAmount: number
  pointsEarned: number
  qrCode: string
  onNewOrder: () => void
}

function ConfirmationStep({
  orderId,
  totalAmount,
  pointsEarned,
  qrCode,
  onNewOrder
}: ConfirmationStepProps) {
  return (
    <div className="max-w-lg mx-auto text-center space-y-6">
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: 0.2, type: 'spring', stiffness: 200 }}
        className="w-20 h-20 mx-auto bg-[var(--color-success)] rounded-full flex items-center justify-center"
      >
        <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
        </svg>
      </motion.div>

      <div>
        <h2 className="text-2xl font-bold text-[var(--color-fg)] mb-2">
          Tilaus vahvistettu!
        </h2>
        <p className="text-[var(--color-fg-secondary)]">
          Tilausnumero: <span className="font-mono text-[var(--color-accent)]">{orderId}</span>
        </p>
      </div>

      <div className="card-base p-6 space-y-4">
        <div className="flex justify-between">
          <span className="text-[var(--color-fg-secondary)]">Maksettu</span>
          <span className="font-semibold text-[var(--color-fg)]">
            {formatCurrency(totalAmount)}
          </span>
        </div>
        
        <div className="flex justify-between">
          <span className="text-[var(--color-fg-secondary)]">Ansaitut pisteet</span>
          <span className="font-semibold text-[var(--color-accent)]">
            {pointsEarned} pts
          </span>
        </div>

        {qrCode && (
          <div className="p-3 bg-[var(--color-accent-muted)] rounded-lg">
            <p className="text-sm text-[var(--color-accent)] font-medium">
              ✨ QR-bonus aktivoitu! Saat 1.5x pisteitä
            </p>
          </div>
        )}
      </div>

      <div className="space-y-3">
        <Button onClick={onNewOrder} size="lg" fullWidth>
          Tee uusi tilaus
        </Button>
        
        <Button variant="outline" onClick={() => window.location.href = '/account'}>
          Siirry tilille
        </Button>
      </div>

      <p className="text-xs text-[var(--color-fg-muted)]">
        Saat sähköpostin tilauksen vahvistuksesta ja seurantakoodin toimituksen aikana.
      </p>
    </div>
  )
}
