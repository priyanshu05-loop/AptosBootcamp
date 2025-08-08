'use client'

import { useState } from 'react'
import { Navbar } from '@/components/layout/navbar'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Input } from '@/components/ui/input'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { BarChart3, Users, Package, CheckCircle, X, Search, Eye } from 'lucide-react'
import { useAuth } from '@/hooks/use-auth'
import { redirect } from 'next/navigation'

export default function AdminPage() {
  const { user, isLoading } = useAuth()
  const [searchTerm, setSearchTerm] = useState('')
  
  const [stats] = useState({
    totalUsers: 1250,
    pendingReturns: 45,
    completedReturns: 890,
    totalCashback: 125000.50
  })

  const [pendingReturns] = useState([
    {
      id: 'RET001',
      userName: 'John Doe',
      userEmail: 'john@example.com',
      medicineName: 'Paracetamol 500mg',
      quantity: 2,
      expiryDate: '2025-06-15',
      submittedDate: '2024-01-16',
      estimatedCashback: 45.50,
      medicineImage: '/placeholder-dopjt.png',
      billImage: '/pharmacy-bill.png',
      status: 'pending'
    },
    {
      id: 'RET002',
      userName: 'Jane Smith',
      userEmail: 'jane@example.com',
      medicineName: 'Amoxicillin 250mg',
      quantity: 1,
      expiryDate: '2025-08-20',
      submittedDate: '2024-01-15',
      estimatedCashback: 32.25,
      medicineImage: '/antibiotic-strip.png',
      billImage: '/medical-receipt.png',
      status: 'pending'
    }
  ])

  const [users] = useState([
    {
      id: '1',
      name: 'John Doe',
      email: 'john@example.com',
      phone: '+91 98765 43210',
      joinDate: '2024-01-10',
      totalReturns: 5,
      totalEarned: 245.75,
      status: 'active'
    },
    {
      id: '2',
      name: 'Jane Smith',
      email: 'jane@example.com',
      phone: '+91 87654 32109',
      joinDate: '2024-01-08',
      totalReturns: 3,
      totalEarned: 156.50,
      status: 'active'
    }
  ])

  if (isLoading) {
    return <div>Loading...</div>
  }

  if (!user || user.role !== 'admin') {
    redirect('/login')
  }

  const handleApprove = (returnId: string) => {
    console.log('Approving return:', returnId)
    // Implement approval logic
  }

  const handleReject = (returnId: string) => {
    console.log('Rejecting return:', returnId)
    // Implement rejection logic
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900">Admin Dashboard</h1>
          <p className="text-gray-600 mt-2">Manage medicine returns and user accounts</p>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Total Users</CardTitle>
              <Users className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{stats.totalUsers}</div>
              <p className="text-xs text-muted-foreground">+12% from last month</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Pending Returns</CardTitle>
              <Package className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{stats.pendingReturns}</div>
              <p className="text-xs text-muted-foreground">Awaiting review</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Completed Returns</CardTitle>
              <CheckCircle className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{stats.completedReturns}</div>
              <p className="text-xs text-muted-foreground">+8% from last month</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Total Cashback</CardTitle>
              <BarChart3 className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">₹{stats.totalCashback.toFixed(2)}</div>
              <p className="text-xs text-muted-foreground">Distributed to users</p>
            </CardContent>
          </Card>
        </div>

        <Tabs defaultValue="returns" className="space-y-6">
          <TabsList>
            <TabsTrigger value="returns">Pending Returns</TabsTrigger>
            <TabsTrigger value="users">User Management</TabsTrigger>
            <TabsTrigger value="analytics">Analytics</TabsTrigger>
          </TabsList>

          <TabsContent value="returns">
            <Card>
              <CardHeader>
                <CardTitle>Pending Medicine Returns</CardTitle>
                <CardDescription>Review and approve medicine return requests</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  {pendingReturns.map((return_item) => (
                    <div key={return_item.id} className="border rounded-lg p-6">
                      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                        <div className="space-y-4">
                          <div>
                            <h3 className="font-semibold text-lg">{return_item.medicineName}</h3>
                            <p className="text-gray-600">Return ID: {return_item.id}</p>
                          </div>
                          
                          <div className="space-y-2 text-sm">
                            <div className="flex justify-between">
                              <span className="text-gray-600">User:</span>
                              <span>{return_item.userName}</span>
                            </div>
                            <div className="flex justify-between">
                              <span className="text-gray-600">Email:</span>
                              <span>{return_item.userEmail}</span>
                            </div>
                            <div className="flex justify-between">
                              <span className="text-gray-600">Quantity:</span>
                              <span>{return_item.quantity} strips</span>
                            </div>
                            <div className="flex justify-between">
                              <span className="text-gray-600">Expiry Date:</span>
                              <span>{return_item.expiryDate}</span>
                            </div>
                            <div className="flex justify-between">
                              <span className="text-gray-600">Submitted:</span>
                              <span>{return_item.submittedDate}</span>
                            </div>
                            <div className="flex justify-between">
                              <span className="text-gray-600">Est. Cashback:</span>
                              <span className="font-medium">₹{return_item.estimatedCashback.toFixed(2)}</span>
                            </div>
                          </div>
                        </div>

                        <div className="space-y-4">
                          <div>
                            <h4 className="font-medium mb-2">Medicine Image</h4>
                            <img 
                              src={return_item.medicineImage || "/placeholder.svg"} 
                              alt="Medicine strip"
                              className="w-full h-40 object-cover rounded border"
                            />
                          </div>
                        </div>

                        <div className="space-y-4">
                          <div>
                            <h4 className="font-medium mb-2">Purchase Bill</h4>
                            <img 
                              src={return_item.billImage || "/placeholder.svg"} 
                              alt="Purchase bill"
                              className="w-full h-40 object-cover rounded border"
                            />
                          </div>
                        </div>
                      </div>

                      <div className="flex justify-end space-x-4 mt-6 pt-4 border-t">
                        <Button 
                          variant="outline" 
                          size="sm"
                          onClick={() => handleReject(return_item.id)}
                        >
                          <X className="h-4 w-4 mr-2" />
                          Reject
                        </Button>
                        <Button 
                          size="sm"
                          onClick={() => handleApprove(return_item.id)}
                        >
                          <CheckCircle className="h-4 w-4 mr-2" />
                          Approve
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="users">
            <Card>
              <CardHeader>
                <div className="flex justify-between items-center">
                  <div>
                    <CardTitle>User Management</CardTitle>
                    <CardDescription>Manage registered users and their activities</CardDescription>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Search className="h-4 w-4 text-gray-400" />
                    <Input
                      placeholder="Search users..."
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                      className="w-64"
                    />
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {users.map((user) => (
                    <div key={user.id} className="flex items-center justify-between p-4 border rounded-lg">
                      <div className="space-y-1">
                        <div className="flex items-center space-x-2">
                          <h3 className="font-medium">{user.name}</h3>
                          <Badge variant={user.status === 'active' ? 'default' : 'secondary'}>
                            {user.status}
                          </Badge>
                        </div>
                        <p className="text-sm text-gray-600">{user.email}</p>
                        <p className="text-sm text-gray-600">{user.phone}</p>
                      </div>
                      
                      <div className="text-right space-y-1">
                        <p className="text-sm">
                          <span className="text-gray-600">Returns:</span> {user.totalReturns}
                        </p>
                        <p className="text-sm">
                          <span className="text-gray-600">Earned:</span> ₹{user.totalEarned.toFixed(2)}
                        </p>
                        <p className="text-sm text-gray-600">Joined: {user.joinDate}</p>
                      </div>
                      
                      <Button variant="outline" size="sm">
                        <Eye className="h-4 w-4 mr-2" />
                        View Details
                      </Button>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="analytics">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle>Monthly Returns</CardTitle>
                  <CardDescription>Medicine returns over the past 6 months</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="h-64 flex items-center justify-center text-gray-500">
                    Chart placeholder - Integration with charting library needed
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Top Medicines</CardTitle>
                  <CardDescription>Most frequently returned medicines</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex justify-between items-center">
                      <span>Paracetamol 500mg</span>
                      <Badge>145 returns</Badge>
                    </div>
                    <div className="flex justify-between items-center">
                      <span>Amoxicillin 250mg</span>
                      <Badge>98 returns</Badge>
                    </div>
                    <div className="flex justify-between items-center">
                      <span>Cetirizine 10mg</span>
                      <Badge>76 returns</Badge>
                    </div>
                    <div className="flex justify-between items-center">
                      <span>Ibuprofen 400mg</span>
                      <Badge>54 returns</Badge>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}
