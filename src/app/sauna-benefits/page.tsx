import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Heart, Zap, Brain, Shield, RefreshCw, Users, ArrowRight, Flame, Sparkles } from 'lucide-react';
import Image from 'next/image';

export default function SaunaBenefits() {
  const benefits = [
    {
      icon: Heart,
      title: "Cardiovascular Health",
      description: "Regular sauna use can improve heart health by increasing heart rate and blood circulation, similar to moderate exercise.",
      color: "bg-burnt-orange"
    },
    {
      icon: Zap,
      title: "Detoxification",
      description: "Sweating in the heat helps eliminate toxins from your body, promoting natural detoxification and skin health.",
      color: "bg-burnt-orange"
    },
    {
      icon: Brain,
      title: "Mental Clarity",
      description: "The heat therapy helps reduce stress hormones and promotes relaxation, leading to improved mental focus and clarity.",
      color: "bg-burnt-orange"
    },
    {
      icon: Shield,
      title: "Immune Boost",
      description: "Heat therapy sessions can strengthen your immune system by increasing white blood cell production and improving overall immunity.",
      color: "bg-burnt-orange"
    },
    {
      icon: RefreshCw,
      title: "Muscle Recovery",
      description: "Heat therapy helps relax muscles, reduce inflammation, and accelerate recovery after physical activity.",
      color: "bg-burnt-orange"
    },
    {
      icon: Users,
      title: "Social Wellness",
      description: "Our heat therapy sessions provide a unique social experience, fostering connections and community wellness.",
      color: "bg-burnt-orange"
    }
  ];

  return (
    <main className="min-h-screen bg-white">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-20 pb-12 bg-burnt-orange relative overflow-hidden">
        {/* Fun background decorations */}
        <div className="absolute inset-0 bg-black/5"></div>
        <div className="absolute top-10 right-10 w-32 h-32 bg-white/15 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-10 left-10 w-24 h-24 bg-white/10 rounded-full blur-2xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-white/8 rounded-full blur-xl animate-pulse delay-500"></div>
        <div className="absolute top-1/3 right-1/3 w-12 h-12 bg-white/12 rounded-full blur-lg animate-pulse delay-700"></div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="flex items-center justify-center space-x-2 mb-4">
              <Sparkles className="w-6 h-6 text-white animate-pulse" />
              <span className="text-white/90 text-sm font-medium tracking-[0.2em] uppercase">FIRE UP YOUR LIFE</span>
              <Sparkles className="w-6 h-6 text-white animate-pulse delay-500" />
            </div>
            <h1 className="font-heading font-bold text-4xl md:text-5xl lg:text-6xl text-white mb-6">
              HEAT THERAPY
            </h1>
            <p className="text-white/90 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
              Step into the heat. Experience the transformative power of fire therapy that has been used for centuries 
              to promote wellness, detoxification, and rejuvenation.
            </p>
          </div>
        </div>
      </section>

      {/* Image & Intro Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="mb-6">
                <div className="inline-flex items-center space-x-2 mb-4">
                  <Flame className="w-6 h-6 text-burnt-orange animate-pulse" />
                  <span className="text-burnt-orange text-sm font-medium tracking-[0.2em] uppercase">TRADITIONAL HEAT</span>
                </div>
                <h2 className="font-heading font-bold text-3xl md:text-4xl lg:text-5xl text-earth-green mb-6">
                  Experience Our Heat Therapy
                </h2>
              </div>
              <p className="text-gray-600 text-lg md:text-xl mb-8 leading-relaxed">
                Step into our traditional heat therapy chamber and experience the ancient practice of sauna therapy. 
                Our carefully controlled environment provides the perfect conditions for optimal wellness benefits.
              </p>
              <div className="space-y-4 mb-8">
                <div className="flex items-center text-gray-600 group">
                  <div className="w-2 h-2 bg-burnt-orange rounded-full mr-4 group-hover:scale-150 transition-transform"></div>
                  Traditional heat therapy techniques
                </div>
                <div className="flex items-center text-gray-600 group">
                  <div className="w-2 h-2 bg-burnt-orange rounded-full mr-4 group-hover:scale-150 transition-transform"></div>
                  Controlled temperature environment
                </div>
                <div className="flex items-center text-gray-600 group">
                  <div className="w-2 h-2 bg-burnt-orange rounded-full mr-4 group-hover:scale-150 transition-transform"></div>
                  Detoxification and relaxation
                </div>
              </div>
              <a
                href="/contact"
                className="inline-flex items-center bg-burnt-orange text-white px-8 py-4 rounded-full font-semibold hover:bg-earth-green transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105 hover:-translate-y-1"
              >
                <Flame className="w-5 h-5 mr-2 animate-pulse" />
                Book Your Heat Therapy Session
                <ArrowRight className="ml-3 group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
            <div className="relative overflow-hidden rounded-3xl shadow-2xl group">
              <Image
                src="/Hot Box.png"
                alt="HOTBOX Heat Therapy Chamber"
                width={600}
                height={400}
                className="w-full h-auto transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-burnt-orange/20 via-transparent to-transparent"></div>
              <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full">
                <span className="text-burnt-orange font-bold text-sm">🔥 HOT</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Grid */}
      <section className="py-16 bg-gradient-to-b from-white to-nude/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="flex items-center justify-center space-x-2 mb-4">
              <Sparkles className="w-5 h-5 text-burnt-orange" />
              <span className="text-burnt-orange text-sm font-medium tracking-[0.2em] uppercase">WHY IT&apos;S AMAZING</span>
              <Sparkles className="w-5 h-5 text-burnt-orange" />
            </div>
            <h2 className="font-heading font-bold text-3xl md:text-4xl lg:text-5xl text-earth-green mb-6">
              Health & Wellness Benefits
            </h2>
            <p className="text-gray-600 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
              Our heat therapy sessions offer a comprehensive approach to wellness, 
              addressing both physical and mental health needs through proven therapeutic techniques.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit) => (
              <div
                key={benefit.title}
                className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 group border border-nude/20 hover:-translate-y-2"
              >
                <div className={`w-16 h-16 ${benefit.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                  <benefit.icon className="w-8 h-8 text-white group-hover:animate-pulse" />
                </div>
                <h3 className="font-heading font-bold text-xl text-earth-green mb-4 group-hover:text-burnt-orange transition-colors">
                  {benefit.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="flex items-center justify-center space-x-2 mb-4">
              <Sparkles className="w-5 h-5 text-burnt-orange" />
              <span className="text-burnt-orange text-sm font-medium tracking-[0.2em] uppercase">HOW IT WORKS</span>
              <Sparkles className="w-5 h-5 text-burnt-orange" />
            </div>
            <h2 className="font-heading font-bold text-3xl md:text-4xl lg:text-5xl text-earth-green mb-6">
              Your Heat Therapy Experience
            </h2>
            <p className="text-gray-600 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
              Step into our carefully designed heat therapy space and embark on a journey of wellness and relaxation.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center group">
              <div className="w-20 h-20 bg-burnt-orange rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg group-hover:shadow-xl">
                <span className="text-white font-bold text-2xl group-hover:animate-pulse">1</span>
              </div>
              <h3 className="font-heading font-bold text-xl text-earth-green mb-4 group-hover:text-burnt-orange transition-colors">
                Arrive & Prepare
              </h3>
                              <p className="text-gray-600 leading-relaxed">
                  Welcome to our wellness space. We&apos;ll guide you through preparation and ensure you&apos;re comfortable for your session.
                </p>
            </div>

            <div className="text-center group">
              <div className="w-20 h-20 bg-burnt-orange rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg group-hover:shadow-xl">
                <span className="text-white font-bold text-2xl group-hover:animate-pulse">2</span>
              </div>
              <h3 className="font-heading font-bold text-xl text-earth-green mb-4 group-hover:text-burnt-orange transition-colors">
                Heat Therapy Session
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Enjoy 15-20 minutes of therapeutic heat in our traditional heat therapy space, designed for optimal wellness benefits.
              </p>
            </div>

            <div className="text-center group">
              <div className="w-20 h-20 bg-burnt-orange rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg group-hover:shadow-xl">
                <span className="text-white font-bold text-2xl group-hover:animate-pulse">3</span>
              </div>
              <h3 className="font-heading font-bold text-xl text-earth-green mb-4 group-hover:text-burnt-orange transition-colors">
                Cool Down & Refresh
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Complete your session with a refreshing cool-down period and hydration to maximize benefits and recovery.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-burnt-orange relative overflow-hidden">
        {/* Fun background decorations */}
        <div className="absolute inset-0 bg-black/5"></div>
        <div className="absolute top-10 right-10 w-32 h-32 bg-white/15 rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 left-10 w-24 h-24 bg-white/10 rounded-full blur-2xl"></div>
        <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-white/8 rounded-full blur-xl"></div>
        <div className="absolute top-1/3 right-1/3 w-12 h-12 bg-white/12 rounded-full blur-lg"></div>
        
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div>
            <div className="flex items-center justify-center space-x-2 mb-4">
              <Sparkles className="w-6 h-6 text-white animate-pulse" />
              <span className="text-white/90 text-sm font-medium tracking-[0.2em] uppercase">READY TO LEVEL UP?</span>
              <Sparkles className="w-6 h-6 text-white animate-pulse delay-500" />
            </div>
            <h2 className="font-heading font-bold text-3xl md:text-4xl lg:text-5xl text-white mb-6">
              Ready to Experience the Benefits?
            </h2>
            <p className="text-white/90 text-lg md:text-xl mb-8 max-w-3xl mx-auto leading-relaxed">
              Book your heat therapy session today and start your journey towards better health,
              relaxation, and overall wellness.
            </p>
            <a
              href="/contact"
              className="inline-flex items-center bg-white text-burnt-orange px-8 py-4 rounded-full font-bold text-lg hover:bg-earth-green hover:text-white transition-all duration-300 shadow-xl hover:shadow-2xl transform hover:scale-105 hover:-translate-y-1"
            >
              <Flame className="w-5 h-5 mr-2 animate-pulse" />
              Book Your Heat Therapy Session
              <ArrowRight className="ml-3 group-hover:translate-x-1 transition-transform" />
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
