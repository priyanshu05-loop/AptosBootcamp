'use client'

import { useState } from 'react'
import { Navbar } from '@/components/layout/navbar'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Wallet, TrendingUp, Gift, ExternalLink, Plus, Minus } from 'lucide-react'
import { useAuth } from '@/hooks/use-auth'
import { redirect } from 'next/navigation'

export default function WalletPage() {
  const { user, isLoading } = useAuth()
  
  const [walletBalance] = useState(1250.50)
  const [transactions] = useState([
    {
      id: '1',
      type: 'credit',
      amount: 45.50,
      description: 'Cashback for Paracetamol return',
      date: '2024-01-15',
      status: 'completed'
    },
    {
      id: '2',
      type: 'debit',
      amount: 120.00,
      description: 'Redeemed at Apollo Pharmacy',
      date: '2024-01-14',
      status: 'completed'
    },
    {
      id: '3',
      type: 'credit',
      amount: 32.25,
      description: 'Cashback for Cetirizine return',
      date: '2024-01-12',
      status: 'completed'
    },
    {
      id: '4',
      type: 'credit',
      amount: 78.90,
      description: 'Cashback for Amoxicillin return',
      date: '2024-01-10',
      status: 'completed'
    },
    {
      id: '5',
      type: 'debit',
      amount: 250.00,
      description: 'Redeemed at Netmeds',
      date: '2024-01-08',
      status: 'completed'
    }
  ])

  const [partners] = useState([
    {
      name: 'Apollo Pharmacy',
      logo: '/generic-pharmacy-logo.png',
      discount: '10% Extra',
      minRedemption: 100
    },
    {
      name: 'Netmeds',
      logo: '/generic-online-pharmacy-logo.png',
      discount: '15% Extra',
      minRedemption: 150
    },
    {
      name: '1mg',
      logo: '/1mg-logo.png',
      discount: '12% Extra',
      minRedemption: 200
    },
    {
      name: 'PharmEasy',
      logo: '/generic-pharmacy-logo.png',
      discount: '8% Extra',
      minRedemption: 100
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
          <h1 className="text-3xl font-bold text-gray-900">My Wallet</h1>
          <p className="text-gray-600 mt-2">Manage your cashback and redeem at partner pharmacies</p>
        </div>

        {/* Wallet Balance Card */}
        <Card className="mb-8 bg-gradient-to-r from-primary to-green-600 text-white">
          <CardHeader>
            <CardTitle className="flex items-center text-white">
              <Wallet className="h-6 w-6 mr-2" />
              Wallet Balance
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-4xl font-bold mb-2">₹{walletBalance.toFixed(2)}</div>
            <p className="text-green-100 mb-4">Available for redemption</p>
            <div className="flex space-x-4">
              <Button variant="secondary" size="sm">
                <TrendingUp className="h-4 w-4 mr-2" />
                View Analytics
              </Button>
              <Button variant="outline" size="sm" className="text-white border-white hover:bg-white hover:text-primary">
                <Gift className="h-4 w-4 mr-2" />
                Redeem Now
              </Button>
            </div>
          </CardContent>
        </Card>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Transaction History */}
          <div className="lg:col-span-2">
            <Card>
              <CardHeader>
                <CardTitle>Transaction History</CardTitle>
                <CardDescription>Your recent wallet transactions</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {transactions.map((transaction) => (
                    <div key={transaction.id} className="flex items-center justify-between p-4 border rounded-lg">
                      <div className="flex items-center space-x-4">
                        <div className={`w-10 h-10 rounded-full flex items-center justify-center ${
                          transaction.type === 'credit' ? 'bg-green-100' : 'bg-red-100'
                        }`}>
                          {transaction.type === 'credit' ? 
                            <Plus className="h-5 w-5 text-green-600" /> : 
                            <Minus className="h-5 w-5 text-red-600" />
                          }
                        </div>
                        <div>
                          <p className="font-medium">{transaction.description}</p>
                          <p className="text-sm text-gray-600">{transaction.date}</p>
                        </div>
                      </div>
                      <div className="text-right">
                        <p className={`font-medium ${
                          transaction.type === 'credit' ? 'text-green-600' : 'text-red-600'
                        }`}>
                          {transaction.type === 'credit' ? '+' : '-'}₹{transaction.amount.toFixed(2)}
                        </p>
                        <Badge variant={transaction.status === 'completed' ? 'default' : 'secondary'}>
                          {transaction.status}
                        </Badge>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Partner Redemption */}
          <div>
            <Card>
              <CardHeader>
                <CardTitle>Redeem at Partners</CardTitle>
                <CardDescription>Use your cashback at these e-pharmacy partners</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {partners.map((partner, index) => (
                    <div key={index} className="border rounded-lg p-4">
                      <div className="flex items-center justify-between mb-2">
                        <img 
                          src={partner.logo || "/placeholder.svg"} 
                          alt={partner.name}
                          className="h-8 w-20 object-contain"
                        />
                        <Badge variant="secondary">{partner.discount}</Badge>
                      </div>
                      <p className="text-sm text-gray-600 mb-3">
                        Min. redemption: ₹{partner.minRedemption}
                      </p>
                      <Button 
                        size="sm" 
                        className="w-full"
                        disabled={walletBalance < partner.minRedemption}
                      >
                        Redeem Now
                        <ExternalLink className="h-4 w-4 ml-2" />
                      </Button>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Quick Stats */}
            <Card className="mt-6">
              <CardHeader>
                <CardTitle>Quick Stats</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Total Earned</span>
                    <span className="font-medium">₹2,100.75</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Total Redeemed</span>
                    <span className="font-medium">₹850.25</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">This Month</span>
                    <span className="font-medium text-green-600">+₹156.65</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}
