// MongoDB schemas for the application

export interface User {
  _id?: string
  name: string
  email: string
  phone: string
  password: string
  role: 'user' | 'admin'
  walletBalance: number
  createdAt: Date
  updatedAt: Date
}

export interface MedicineReturn {
  _id?: string
  userId: string
  medicineName: string
  quantity: number
  expiryDate: string
  batchNumber?: string
  description?: string
  medicineImageUrl: string
  billImageUrl: string
  pickupDate: string
  pickupTime: string
  address: string
  city: string
  pincode: string
  status: 'pending' | 'scheduled' | 'picked' | 'verified' | 'completed' | 'rejected'
  estimatedCashback: number
  actualCashback?: number
  adminNotes?: string
  createdAt: Date
  updatedAt: Date
}

export interface Transaction {
  _id?: string
  userId: string
  type: 'credit' | 'debit'
  amount: number
  description: string
  returnId?: string
  partnerName?: string
  status: 'pending' | 'completed' | 'failed'
  createdAt: Date
}

export interface Pickup {
  _id?: string
  returnId: string
  userId: string
  agentId?: string
  scheduledDate: string
  scheduledTime: string
  actualPickupDate?: string
  status: 'scheduled' | 'in_progress' | 'completed' | 'cancelled'
  notes?: string
  createdAt: Date
  updatedAt: Date
}

export interface Partner {
  _id?: string
  name: string
  logoUrl: string
  description: string
  discountPercentage: number
  minRedemptionAmount: number
  isActive: boolean
  createdAt: Date
}
