'use client'

import { useState } from 'react'
import { Navbar } from '@/components/layout/navbar'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Package, Clock, CheckCircle, Truck, MapPin, Phone } from 'lucide-react'
import { useAuth } from '@/hooks/use-auth'
import { redirect } from 'next/navigation'

export default function TrackPickupPage() {
  const { user, isLoading } = useAuth()
  
  const [pickups] = useState([
    {
      id: 'PU001',
      medicineName: 'Paracetamol 500mg',
      quantity: 2,
      status: 'completed',
      requestDate: '2024-01-10',
      pickupDate: '2024-01-15',
      estimatedCashback: 45.50,
      actualCashback: 45.50,
      address: '123 Main Street, Mumbai',
      timeline: [
        { status: 'requested', date: '2024-01-10', time: '10:30 AM', completed: true },
        { status: 'scheduled', date: '2024-01-12', time: '02:15 PM', completed: true },
        { status: 'picked', date: '2024-01-15', time: '11:45 AM', completed: true },
        { status: 'verified', date: '2024-01-15', time: '04:20 PM', completed: true },
        { status: 'cashback_added', date: '2024-01-15', time: '06:30 PM', completed: true }
      ]
    },
    {
      id: 'PU002',
      medicineName: 'Amoxicillin 250mg',
      quantity: 1,
      status: 'picked',
      requestDate: '2024-01-14',
      pickupDate: '2024-01-16',
      estimatedCashback: 32.25,
      actualCashback: 0,
      address: '123 Main Street, Mumbai',
      timeline: [
        { status: 'requested', date: '2024-01-14', time: '09:15 AM', completed: true },
        { status: 'scheduled', date: '2024-01-15', time: '03:30 PM', completed: true },
        { status: 'picked', date: '2024-01-16', time: '10:20 AM', completed: true },
        { status: 'verified', date: '', time: '', completed: false },
        { status: 'cashback_added', date: '', time: '', completed: false }
      ]
    },
    {
      id: 'PU003',
      medicineName: 'Cetirizine 10mg',
      quantity: 3,
      status: 'scheduled',
      requestDate: '2024-01-16',
      pickupDate: '2024-01-18',
      estimatedCashback: 28.75,
      actualCashback: 0,
      address: '123 Main Street, Mumbai',
      timeline: [
        { status: 'requested', date: '2024-01-16', time: '02:45 PM', completed: true },
        { status: 'scheduled', date: '2024-01-17', time: '11:00 AM', completed: true },
        { status: 'picked', date: '', time: '', completed: false },
        { status: 'verified', date: '', time: '', completed: false },
        { status: 'cashback_added', date: '', time: '', completed: false }
      ]
    }
  ])

  if (isLoading) {
    return <div>Loading...</div>
  }

  if (!user) {
    redirect('/login')
  }

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'completed': return 'bg-green-500'
      case 'picked': return 'bg-blue-500'
      case 'scheduled': return 'bg-yellow-500'
      case 'requested': return 'bg-gray-500'
      default: return 'bg-gray-300'
    }
  }

  const getStatusText = (status: string) => {
    switch (status) {
      case 'requested': return 'Requested'
      case 'scheduled': return 'Scheduled'
      case 'picked': return 'Picked Up'
      case 'verified': return 'Verified'
      case 'cashback_added': return 'Cashback Added'
      case 'completed': return 'Completed'
      default: return status
    }
  }

  const getTimelineIcon = (status: string, completed: boolean) => {
    if (!completed) return <Clock className="h-4 w-4 text-gray-400" />
    
    switch (status) {
      case 'requested': return <Package className="h-4 w-4 text-white" />
      case 'scheduled': return <Clock className="h-4 w-4 text-white" />
      case 'picked': return <Truck className="h-4 w-4 text-white" />
      case 'verified': return <CheckCircle className="h-4 w-4 text-white" />
      case 'cashback_added': return <CheckCircle className="h-4 w-4 text-white" />
      default: return <CheckCircle className="h-4 w-4 text-white" />
    }
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900">Track Pickup</h1>
          <p className="text-gray-600 mt-2">Monitor the status of your medicine returns</p>
        </div>

        <div className="space-y-6">
          {pickups.map((pickup) => (
            <Card key={pickup.id}>
              <CardHeader>
                <div className="flex justify-between items-start">
                  <div>
                    <CardTitle className="flex items-center">
                      <Package className="h-5 w-5 mr-2" />
                      {pickup.medicineName}
                    </CardTitle>
                    <CardDescription>
                      Pickup ID: {pickup.id} • Quantity: {pickup.quantity} strips
                    </CardDescription>
                  </div>
                  <Badge className={getStatusColor(pickup.status)}>
                    {getStatusText(pickup.status)}
                  </Badge>
                </div>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                  {/* Pickup Details */}
                  <div className="space-y-4">
                    <h3 className="font-semibold">Pickup Details</h3>
                    <div className="space-y-2 text-sm">
                      <div className="flex items-center">
                        <MapPin className="h-4 w-4 mr-2 text-gray-400" />
                        <span>{pickup.address}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">Requested:</span>
                        <span>{pickup.requestDate}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">Pickup Date:</span>
                        <span>{pickup.pickupDate || 'TBD'}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">Est. Cashback:</span>
                        <span className="font-medium">₹{pickup.estimatedCashback.toFixed(2)}</span>
                      </div>
                      {pickup.actualCashback > 0 && (
                        <div className="flex justify-between">
                          <span className="text-gray-600">Actual Cashback:</span>
                          <span className="font-medium text-green-600">₹{pickup.actualCashback.toFixed(2)}</span>
                        </div>
                      )}
                    </div>
                    
                    {pickup.status === 'scheduled' && (
                      <div className="mt-4 p-3 bg-blue-50 rounded-lg">
                        <div className="flex items-center text-blue-800">
                          <Phone className="h-4 w-4 mr-2" />
                          <span className="text-sm font-medium">Pickup Agent: +91 98765 43210</span>
                        </div>
                      </div>
                    )}
                  </div>

                  {/* Timeline */}
                  <div className="lg:col-span-2">
                    <h3 className="font-semibold mb-4">Pickup Timeline</h3>
                    <div className="space-y-4">
                      {pickup.timeline.map((step, index) => (
                        <div key={index} className="flex items-center">
                          <div className={`w-8 h-8 rounded-full flex items-center justify-center ${
                            step.completed ? getStatusColor(step.status) : 'bg-gray-200'
                          }`}>
                            {getTimelineIcon(step.status, step.completed)}
                          </div>
                          <div className="ml-4 flex-1">
                            <div className="flex justify-between items-center">
                              <span className={`font-medium ${step.completed ? 'text-gray-900' : 'text-gray-500'}`}>
                                {getStatusText(step.status)}
                              </span>
                              {step.completed && (
                                <span className="text-sm text-gray-500">
                                  {step.date} at {step.time}
                                </span>
                              )}
                            </div>
                            {index < pickup.timeline.length - 1 && (
                              <div className={`w-0.5 h-6 ml-4 mt-2 ${
                                pickup.timeline[index + 1].completed ? 'bg-green-300' : 'bg-gray-200'
                              }`} />
                            )}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {pickup.status === 'scheduled' && (
                  <div className="mt-6 pt-4 border-t">
                    <div className="flex space-x-4">
                      <Button variant="outline" size="sm">
                        Reschedule Pickup
                      </Button>
                      <Button variant="outline" size="sm">
                        Cancel Request
                      </Button>
                    </div>
                  </div>
                )}
              </CardContent>
            </Card>
          ))}
        </div>

        {pickups.length === 0 && (
          <Card>
            <CardContent className="text-center py-12">
              <Package className="h-12 w-12 mx-auto text-gray-400 mb-4" />
              <h3 className="text-lg font-medium text-gray-900 mb-2">No pickups yet</h3>
              <p className="text-gray-600 mb-4">You haven't requested any medicine pickups yet.</p>
              <Button>Return Your First Medicine</Button>
            </CardContent>
          </Card>
        )}
      </div>
    </div>
  )
}
