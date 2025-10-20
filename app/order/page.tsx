'use client'

import React from 'react'
import { OrderFlow } from '@/components/flows/OrderFlow'
import { QueryProvider } from '@/components/providers/QueryProvider'

export default function OrderPage() {
  return (
    <QueryProvider>
      <div className="min-h-screen bg-black text-white">
        {/* Header */}
        <header className="border-b border-white/10 bg-black/50 backdrop-blur-sm">
          <div className="max-w-6xl mx-auto px-4 py-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-4">
                <button
                  onClick={() => window.history.back()}
                  className="p-2 hover:bg-white/10 rounded-lg transition-colors"
                  aria-label="Back"
                >
                  <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                  </svg>
                </button>
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-[var(--brand)] rounded-lg flex items-center justify-center">
                    <span className="text-black font-bold text-sm">H</span>
                  </div>
                  <div>
                    <h1 className="text-xl font-bold text-white">
                      HerbSpot.fi
                    </h1>
                    <p className="text-sm text-white/60">
                      Europe's Botanical Wellness Marketplace
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="flex items-center space-x-4">
                <button
                  onClick={() => window.location.href = '/account'}
                  className="p-2 hover:bg-white/10 rounded-lg transition-colors"
                  aria-label="Account"
                >
                  <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </header>

        {/* Shipping SLA Banner */}
        <div className="bg-gradient-to-r from-[var(--brand)]/20 to-green-400/20 border-b border-[var(--brand)]/30">
          <div className="max-w-6xl mx-auto px-4 py-3">
            <div className="flex items-center justify-center space-x-4 text-sm">
              <div className="flex items-center space-x-2">
                <svg className="w-4 h-4 text-[var(--brand)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
                </svg>
                <span className="text-white font-medium">EU Shipping</span>
              </div>
              <div className="w-px h-4 bg-white/20"></div>
              <div className="flex items-center space-x-2">
                <svg className="w-4 h-4 text-[var(--brand)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span className="text-white font-medium">2-5 Business Days</span>
              </div>
              <div className="w-px h-4 bg-white/20"></div>
              <div className="flex items-center space-x-2">
                <svg className="w-4 h-4 text-[var(--brand)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span className="text-white font-medium">Tracked Delivery</span>
              </div>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <main className="max-w-6xl mx-auto px-4 py-8">
          <OrderFlow
            onComplete={(orderId) => {
              console.log('Order completed:', orderId)
              // Redirect to order tracking with AfterShip integration
              window.location.href = `/order/tracking/${orderId}`
            }}
          />
        </main>

        {/* Footer */}
        <footer className="border-t border-white/10 bg-black/50 backdrop-blur-sm mt-16">
          <div className="max-w-6xl mx-auto px-4 py-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div>
                <div className="flex items-center space-x-3 mb-3">
                  <div className="w-6 h-6 bg-[var(--brand)] rounded flex items-center justify-center">
                    <span className="text-black font-bold text-xs">H</span>
                  </div>
                  <h3 className="font-semibold text-white">
                    HerbSpot.fi
                  </h3>
                </div>
                <p className="text-sm text-white/60">
                  Europe's trusted destination for botanical wellness devices. 
                  Premium quality products delivered to your doorstep.
                </p>
              </div>
              
              <div>
                <h3 className="font-semibold text-white mb-3">
                  Support
                </h3>
                <div className="space-y-2 text-sm text-white/60">
                  <a href="/help" className="block hover:text-[var(--brand)] transition-colors">
                    Frequently Asked Questions
                  </a>
                  <a href="/contact" className="block hover:text-[var(--brand)] transition-colors">
                    Contact Us
                  </a>
                  <a href="/shipping" className="block hover:text-[var(--brand)] transition-colors">
                    Shipping Information
                  </a>
                  <a href="/tracking" className="block hover:text-[var(--brand)] transition-colors">
                    Track Your Order
                  </a>
                </div>
              </div>
              
              <div>
                <h3 className="font-semibold text-white mb-3">
                  Company
                </h3>
                <div className="space-y-2 text-sm text-white/60">
                  <a href="/about" className="block hover:text-[var(--brand)] transition-colors">
                    About Us
                  </a>
                  <a href="/terms" className="block hover:text-[var(--brand)] transition-colors">
                    Terms of Service
                  </a>
                  <a href="/privacy" className="block hover:text-[var(--brand)] transition-colors">
                    Privacy Policy
                  </a>
                  <a href="/b2b" className="block hover:text-[var(--brand)] transition-colors">
                    B2B Partnerships
                  </a>
                </div>
              </div>
            </div>
            
            <div className="border-t border-white/10 mt-8 pt-8 text-center">
              <p className="text-sm text-white/40">
                © 2024 HerbSpot.fi. All rights reserved. | Powered by AfterShip Tracking
              </p>
            </div>
          </div>
        </footer>
      </div>
    </QueryProvider>
  )
}
