import { Upload, Calendar, Package, Wallet } from 'lucide-react'

export function HowItWorksSection() {
  const steps = [
    {
      icon: Upload,
      title: 'Upload Medicine Details',
      description: 'Take photos of your sealed medicine strips and upload purchase bills'
    },
    {
      icon: Calendar,
      title: 'Schedule Pickup',
      description: 'Choose a convenient date and time for our team to collect your medicines'
    },
    {
      icon: Package,
      title: 'Verification & Processing',
      description: 'Our experts verify the medicines and process them for donation'
    },
    {
      icon: Wallet,
      title: 'Earn Cashback',
      description: 'Receive 10-15% cashback in your wallet to use at partner pharmacies'
    }
  ]

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            How It Works
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Simple steps to turn your unused medicines into cashback
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="text-center relative">
              <div className="bg-primary w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 text-white">
                <step.icon className="h-8 w-8" />
              </div>
              <div className="absolute top-8 left-1/2 transform -translate-x-1/2 w-8 h-8 bg-primary text-white rounded-full flex items-center justify-center text-sm font-bold -ml-8">
                {index + 1}
              </div>
              <h3 className="text-xl font-semibold mb-4 mt-4">{step.title}</h3>
              <p className="text-gray-600">{step.description}</p>
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-8 left-full w-full h-0.5 bg-gray-300 transform -translate-y-1/2"></div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
