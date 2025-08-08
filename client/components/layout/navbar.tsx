'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Menu, X, Pill, Wallet, Package, BarChart3 } from 'lucide-react'
import { useAuth } from '@/hooks/use-auth'

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const { user, logout } = useAuth()

  return (
    <nav className="bg-white shadow-sm border-b">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link href="/" className="flex items-center space-x-2">
              <Pill className="h-8 w-8 text-primary" />
              <span className="text-xl font-bold text-gray-900">MedCycle</span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {user ? (
              <>
                <Link href="/dashboard" className="text-gray-700 hover:text-primary">
                  Dashboard
                </Link>
                <Link href="/return-medicine" className="text-gray-700 hover:text-primary">
                  Return Medicine
                </Link>
                <Link href="/wallet" className="text-gray-700 hover:text-primary">
                  <Wallet className="h-4 w-4 inline mr-1" />
                  Wallet
                </Link>
                <Link href="/track-pickup" className="text-gray-700 hover:text-primary">
                  <Package className="h-4 w-4 inline mr-1" />
                  Track Pickup
                </Link>
                {user.role === 'admin' && (
                  <Link href="/admin" className="text-gray-700 hover:text-primary">
                    <BarChart3 className="h-4 w-4 inline mr-1" />
                    Admin
                  </Link>
                )}
                <Button onClick={logout} variant="outline">
                  Logout
                </Button>
              </>
            ) : (
              <>
                <Link href="/login">
                  <Button variant="ghost">Login</Button>
                </Link>
                <Link href="/signup">
                  <Button>Sign Up</Button>
                </Link>
              </>
            )}
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-700 hover:text-primary"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white border-t">
            {user ? (
              <>
                <Link href="/dashboard" className="block px-3 py-2 text-gray-700">
                  Dashboard
                </Link>
                <Link href="/return-medicine" className="block px-3 py-2 text-gray-700">
                  Return Medicine
                </Link>
                <Link href="/wallet" className="block px-3 py-2 text-gray-700">
                  Wallet
                </Link>
                <Link href="/track-pickup" className="block px-3 py-2 text-gray-700">
                  Track Pickup
                </Link>
                {user.role === 'admin' && (
                  <Link href="/admin" className="block px-3 py-2 text-gray-700">
                    Admin
                  </Link>
                )}
                <button onClick={logout} className="block w-full text-left px-3 py-2 text-gray-700">
                  Logout
                </button>
              </>
            ) : (
              <>
                <Link href="/login" className="block px-3 py-2 text-gray-700">
                  Login
                </Link>
                <Link href="/signup" className="block px-3 py-2 text-gray-700">
                  Sign Up
                </Link>
              </>
            )}
          </div>
        </div>
      )}
    </nav>
  )
}
