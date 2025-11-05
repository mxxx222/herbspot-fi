#!/bin/bash

# HerbSpot.fi Domain Setup Script for Vercel
# Usage: ./vercel-domain-setup.sh

set -e

echo "🚀 HerbSpot.fi Domain Setup for Vercel"
echo "========================================"
echo ""

# Check if vercel CLI is installed
if ! command -v vercel &> /dev/null; then
    echo "❌ Vercel CLI not found. Installing..."
    npm install -g vercel
fi

echo "✅ Vercel CLI found"
echo ""

# Login check
echo "🔐 Checking Vercel authentication..."
if ! vercel whoami &> /dev/null; then
    echo "⚠️  Not logged in. Please login:"
    vercel login
fi

echo "✅ Authenticated"
echo ""

# Project info
echo "📊 Current project status:"
vercel project ls | grep herbspot-fi || echo "Project not found"
echo ""

# Domain setup instructions
echo "🌐 Domain Configuration Steps:"
echo ""
echo "OPTION 1: Vercel Dashboard (Recommended)"
echo "=========================================="
echo "1. Open: https://vercel.com/maxs-projects-149851b4/herbspot-fi/settings/domains"
echo "2. Click 'Add Domain'"
echo "3. Enter: herbspot.fi"
echo "4. Click 'Add'"
echo "5. Repeat for: www.herbspot.fi"
echo ""
echo "OPTION 2: CLI (If you have domain access)"
echo "=========================================="
echo "Run these commands:"
echo ""
echo "  vercel domains add herbspot.fi"
echo "  vercel domains add www.herbspot.fi"
echo ""

# DNS Configuration
echo "📝 DNS Configuration Required:"
echo "==============================="
echo ""
echo "Add these records to your DNS provider:"
echo ""
echo "Record 1 (Root Domain):"
echo "  Type:  A"
echo "  Name:  @"
echo "  Value: 76.76.21.21"
echo "  TTL:   3600"
echo ""
echo "Record 2 (WWW Subdomain):"
echo "  Type:  CNAME"
echo "  Name:  www"
echo "  Value: cname.vercel-dns.com"
echo "  TTL:   3600"
echo ""

# Check current DNS
echo "🔍 Current DNS Status:"
echo "======================"
echo ""
echo "Checking herbspot.fi DNS..."
dig +short herbspot.fi A || echo "No A record found"
echo ""
echo "Checking www.herbspot.fi DNS..."
dig +short www.herbspot.fi CNAME || echo "No CNAME record found"
echo ""

# Deployment status
echo "🚀 Current Deployment:"
echo "======================"
vercel ls --scope maxs-projects-149851b4 2>/dev/null | grep herbspot-fi || echo "No deployments found"
echo ""

echo "✅ Setup script complete!"
echo ""
echo "Next steps:"
echo "1. Configure domain in Vercel Dashboard"
echo "2. Update DNS records"
echo "3. Wait for DNS propagation (1-2 hours)"
echo "4. Test: https://herbspot.fi"
echo ""
echo "📖 Full documentation: DOMAIN_SETUP.md"

