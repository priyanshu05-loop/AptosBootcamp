import { Shield, Clock, Smartphone, Users } from 'lucide-react'

export function FeaturesSection() {
  const features = [
    {
      icon: Shield,
      title: 'Secure & Verified',
      description: 'AI-powered verification ensures only sealed, unexpired medicines are accepted'
    },
    {
      icon: Clock,
      title: 'Quick Pickup',
      description: 'Schedule convenient pickup times that work with your schedule'
    },
    {
      icon: Smartphone,
      title: 'Easy Mobile App',
      description: 'Simple interface to upload, track, and manage your medicine returns'
    },
    {
      icon: Users,
      title: 'Trusted Partners',
      description: 'Redeem cashback at leading e-pharmacy partners like Apollo and Netmeds'
    }
  ]

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Why Choose MedCycle?
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            We make it easy, safe, and rewarding to return your unused medicines
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="text-center">
              <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <feature.icon className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-4">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
