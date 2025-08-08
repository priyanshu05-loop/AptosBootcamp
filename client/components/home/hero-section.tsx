import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { ArrowRight, Recycle, Wallet, Heart } from 'lucide-react'

export function HeroSection() {
  return (
    <section className="bg-gradient-to-br from-green-50 to-blue-50 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            Turn Your Unused Medicines Into{' '}
            <span className="text-primary">Cashback</span>
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Don't throw away your sealed, unexpired medicines. Return them through MedCycle 
            and earn 10-15% cashback while helping reduce medical waste and supporting those in need.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Link href="/return-medicine">
              <Button size="lg" className="w-full sm:w-auto">
                Return Medicine Now
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
            <Link href="/signup">
              <Button size="lg" variant="outline" className="w-full sm:w-auto">
                Get Started Free
              </Button>
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
            <div className="text-center">
              <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Recycle className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Reduce Waste</h3>
              <p className="text-gray-600">Help reduce medical waste by returning unused medicines</p>
            </div>
            <div className="text-center">
              <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Wallet className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Earn Cashback</h3>
              <p className="text-gray-600">Get 10-15% cashback in your wallet for every return</p>
            </div>
            <div className="text-center">
              <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Heart className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Help Others</h3>
              <p className="text-gray-600">Your returned medicines help NGOs support those in need</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
