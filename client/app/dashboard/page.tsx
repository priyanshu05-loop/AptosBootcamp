'use client'

import { useEffect, useState } from 'react'
import { Navbar } from '@/components/layout/navbar'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Wallet, Package, Plus, TrendingUp, Clock, CheckCircle } from 'lucide-react'
import Link from 'next/link'
import { useAuth } from '@/hooks/use-auth'
import { redirect } from 'next/navigation'

export default function DashboardPage() {
  const { user, isLoading } = useAuth()
  const [stats, setStats] = useState({
    walletBalance: 1250.50,
    totalReturns: 8,
    pendingPickups: 2,
    totalEarned: 2100.75
  })

  const [recentReturns, setRecentReturns] = useState([
    {
      id: '1',
      medicineName: 'Paracetamol 500mg',
      quantity: 2,
      status: 'completed',
      cashback: 45.50,
      date: '2024-01-15'
    },
    {
      id: '2',
      medicineName: 'Amoxicillin 250mg',
      quantity: 1,
      status: 'pending',
      cashback: 0,
      date: '2024-01-14'
    },
    {
      id: '3',
      medicineName: 'Cetirizine 10mg',
      quantity: 3,
      status: 'verified',
      cashback: 32.25,
      date: '2024-01-12'
    }
  ])

  if (isLoading) {
    return <div>Loading...</div>
  }

  if (!user) {
    redirect('/login')
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900">Welcome back, {user.name}!</h1>
          <p className="text-gray-600 mt-2">Here's your MedCycle dashboard overview</p>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Wallet Balance</CardTitle>
              <Wallet className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">₹{stats.walletBalance.toFixed(2)}</div>
              <p className="text-xs text-muted-foreground">Available for redemption</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Total Returns</CardTitle>
              <Package className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{stats.totalReturns}</div>
              <p className="text-xs text-muted-foreground">Medicines returned</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Pending Pickups</CardTitle>
              <Clock className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{stats.pendingPickups}</div>
              <p className="text-xs text-muted-foreground">Awaiting collection</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Total Earned</CardTitle>
              <TrendingUp className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">₹{stats.totalEarned.toFixed(2)}</div>
              <p className="text-xs text-muted-foreground">Lifetime earnings</p>
            </CardContent>
          </Card>
        </div>

        {/* Quick Actions */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <Link href="/return-medicine">
            <Card className="hover:shadow-lg transition-shadow cursor-pointer">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Plus className="h-5 w-5 mr-2 text-primary" />
                  Return Medicine
                </CardTitle>
                <CardDescription>
                  Upload your unused medicines and schedule a pickup
                </CardDescription>
              </CardHeader>
            </Card>
          </Link>

          <Link href="/wallet">
            <Card className="hover:shadow-lg transition-shadow cursor-pointer">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Wallet className="h-5 w-5 mr-2 text-primary" />
                  View Wallet
                </CardTitle>
                <CardDescription>
                  Check your balance and transaction history
                </CardDescription>
              </CardHeader>
            </Card>
          </Link>

          <Link href="/track-pickup">
            <Card className="hover:shadow-lg transition-shadow cursor-pointer">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Package className="h-5 w-5 mr-2 text-primary" />
                  Track Pickup
                </CardTitle>
                <CardDescription>
                  Monitor the status of your medicine returns
                </CardDescription>
              </CardHeader>
            </Card>
          </Link>
        </div>

        {/* Recent Returns */}
        <Card>
          <CardHeader>
            <CardTitle>Recent Returns</CardTitle>
            <CardDescription>Your latest medicine return activities</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {recentReturns.map((return_item) => (
                <div key={return_item.id} className="flex items-center justify-between p-4 border rounded-lg">
                  <div className="flex items-center space-x-4">
                    <div className={`w-3 h-3 rounded-full ${
                      return_item.status === 'completed' ? 'bg-green-500' :
                      return_item.status === 'verified' ? 'bg-blue-500' : 'bg-yellow-500'
                    }`} />
                    <div>
                      <p className="font-medium">{return_item.medicineName}</p>
                      <p className="text-sm text-gray-600">Quantity: {return_item.quantity} strips</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="font-medium">
                      {return_item.cashback > 0 ? `₹${return_item.cashback.toFixed(2)}` : 'Pending'}
                    </p>
                    <p className="text-sm text-gray-600 capitalize">{return_item.status}</p>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
