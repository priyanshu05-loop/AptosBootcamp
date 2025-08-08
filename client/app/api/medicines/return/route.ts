import { NextRequest, NextResponse } from 'next/server'

export async function POST(request: NextRequest) {
  try {
    const formData = await request.formData()
    
    const medicineReturn = {
      id: `RET${Date.now()}`,
      medicineName: formData.get('medicineName'),
      quantity: parseInt(formData.get('quantity') as string),
      expiryDate: formData.get('expiryDate'),
      batchNumber: formData.get('batchNumber'),
      description: formData.get('description'),
      pickupDate: formData.get('pickupDate'),
      pickupTime: formData.get('pickupTime'),
      address: formData.get('address'),
      city: formData.get('city'),
      pincode: formData.get('pincode'),
      medicineImage: formData.get('medicineImage'),
      billImage: formData.get('billImage'),
      status: 'pending',
      submittedAt: new Date().toISOString()
    }

    // In real app, save to database
    console.log('Medicine return submitted:', medicineReturn)

    return NextResponse.json({
      success: true,
      returnId: medicineReturn.id,
      message: 'Medicine return submitted successfully'
    })
  } catch (error) {
    console.error('Medicine return error:', error)
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
  }
}
