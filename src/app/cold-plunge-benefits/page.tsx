import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Zap, Brain, Heart, Shield, RefreshCw, Thermometer, ArrowRight, Snowflake, Sparkles } from 'lucide-react';
import Image from 'next/image';

export default function ColdPlungeBenefits() {
  const benefits = [
    {
      icon: Zap,
      title: "Energy Boost",
      description: "Cold exposure triggers the release of norepinephrine, providing an immediate and lasting energy boost.",
      color: "bg-earth-green"
    },
    {
      icon: Brain,
      title: "Mental Clarity",
      description: "Cold therapy improves focus, reduces brain fog, and enhances cognitive function through increased blood flow.",
      color: "bg-earth-green"
    },
    {
      icon: Heart,
      title: "Circulation",
      description: "Cold exposure improves blood circulation and cardiovascular health by constricting and then dilating blood vessels.",
      color: "bg-earth-green"
    },
    {
      icon: Shield,
      title: "Immune Support",
      description: "Regular cold exposure can strengthen your immune system and increase resistance to illness.",
      color: "bg-earth-green"
    },
    {
      icon: RefreshCw,
      title: "Recovery",
      description: "Cold therapy reduces inflammation, muscle soreness, and accelerates post-workout recovery.",
      color: "bg-earth-green"
    },
    {
      icon: Thermometer,
      title: "Temperature Regulation",
      description: "Improves your body's ability to regulate temperature and adapt to environmental changes.",
      color: "bg-earth-green"
    }
  ];

  return (
    <main className="min-h-screen bg-white">
      <Navigation />

      {/* Hero Section */}
      <section className="pt-20 pb-12 bg-earth-green relative overflow-hidden">
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
              <span className="text-white/90 text-sm font-medium tracking-[0.2em] uppercase">CHILL OUT & LEVEL UP</span>
              <Sparkles className="w-6 h-6 text-white animate-pulse delay-500" />
            </div>
            <h1 className="font-heading font-bold text-4xl md:text-5xl lg:text-6xl text-white mb-6">
              ICE BATHS
            </h1>
            <p className="text-white/90 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
              Embrace the cold. Experience the invigorating benefits of cold plunge therapy. From improved circulation
              to enhanced mental clarity, discover why cold exposure is becoming a wellness essential.
            </p>
          </div>
        </div>
      </section>

      {/* Image & Intro Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
              <div className="relative overflow-hidden rounded-3xl shadow-2xl group">
                <Image
                  src="/Ice Water-3.png"
                  alt="HOTBOX Ice Bath"
                  width={600}
                  height={400}
                  className="w-full h-auto transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-earth-green/20 via-transparent to-transparent"></div>
                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full">
                  <span className="text-earth-green font-bold text-sm">❄️ COLD</span>
                </div>
              </div>
            </div>
            <div className="order-1 lg:order-2">
              <div className="mb-6">
                <div className="inline-flex items-center space-x-2 mb-4">
                  <Snowflake className="w-6 h-6 text-earth-green animate-pulse" />
                  <span className="text-earth-green text-sm font-medium tracking-[0.2em] uppercase">COLD THERAPY</span>
                </div>
                <h2 className="font-heading font-bold text-3xl md:text-4xl lg:text-5xl text-earth-green mb-6">
                  Experience Our Cold Plunge
                </h2>
              </div>
              <p className="text-gray-600 text-lg md:text-xl mb-8 leading-relaxed">
                Embrace the invigorating power of cold therapy in our specially designed ice baths. 
                Our controlled environment ensures a safe and effective cold exposure experience.
              </p>
              <div className="space-y-4 mb-8">
                <div className="flex items-center text-gray-600 group">
                  <div className="w-2 h-2 bg-earth-green rounded-full mr-4 group-hover:scale-150 transition-transform"></div>
                  Controlled cold therapy sessions
                </div>
                <div className="flex items-center text-gray-600 group">
                  <div className="w-2 h-2 bg-earth-green rounded-full mr-4 group-hover:scale-150 transition-transform"></div>
                  Enhanced circulation and recovery
                </div>
                <div className="flex items-center text-gray-600 group">
                  <div className="w-2 h-2 bg-earth-green rounded-full mr-4 group-hover:scale-150 transition-transform"></div>
                  Energy and vitality boost
                </div>
              </div>
              <a
                href="/contact"
                className="inline-flex items-center bg-earth-green text-white px-8 py-4 rounded-full font-semibold hover:bg-burnt-orange transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105 hover:-translate-y-1"
              >
                <Snowflake className="w-5 h-5 mr-2 animate-pulse" />
                Book Your Cold Plunge Session
                <ArrowRight className="ml-3 group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Grid */}
      <section className="py-16 bg-gradient-to-b from-white to-nude/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="flex items-center justify-center space-x-2 mb-4">
              <Sparkles className="w-5 h-5 text-earth-green" />
              <span className="text-earth-green text-sm font-medium tracking-[0.2em] uppercase">WHY IT'S INCREDIBLE</span>
              <Sparkles className="w-5 h-5 text-earth-green" />
            </div>
            <h2 className="font-heading font-bold text-3xl md:text-4xl lg:text-5xl text-earth-green mb-6">
              Cold Therapy Benefits
            </h2>
            <p className="text-gray-600 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
              Our cold plunge sessions offer a powerful approach to wellness,
              combining ancient wisdom with modern science for optimal health benefits.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
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

      {/* Science Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="flex items-center justify-center space-x-2 mb-4">
              <Sparkles className="w-5 h-5 text-earth-green" />
              <span className="text-earth-green text-sm font-medium tracking-[0.2em] uppercase">THE SCIENCE</span>
              <Sparkles className="w-5 h-5 text-earth-green" />
            </div>
            <h2 className="font-heading font-bold text-3xl md:text-4xl lg:text-5xl text-earth-green mb-6">
              The Science Behind Cold Therapy
            </h2>
            <p className="text-gray-600 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
              Cold exposure triggers powerful physiological responses that benefit your entire body.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="font-heading font-bold text-2xl text-earth-green mb-8">
                Physiological Response
              </h3>
              <div className="space-y-6">
                <div className="flex items-start space-x-4 group">
                  <div className="w-10 h-10 bg-earth-green rounded-full flex items-center justify-center flex-shrink-0 mt-1 group-hover:scale-110 transition-transform">
                    <span className="text-white font-bold text-lg group-hover:animate-pulse">1</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-earth-green mb-3 text-lg group-hover:text-burnt-orange transition-colors">Vasoconstriction</h4>
                    <p className="text-gray-600 leading-relaxed">Blood vessels constrict, redirecting blood to vital organs and increasing blood pressure.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4 group">
                  <div className="w-10 h-10 bg-earth-green rounded-full flex items-center justify-center flex-shrink-0 mt-1 group-hover:scale-110 transition-transform">
                    <span className="text-white font-bold text-lg group-hover:animate-pulse">2</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-earth-green mb-3 text-lg group-hover:text-burnt-orange transition-colors">Hormone Release</h4>
                    <p className="text-gray-600 leading-relaxed">Norepinephrine and other beneficial hormones are released, improving mood and energy.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4 group">
                  <div className="w-10 h-10 bg-earth-green rounded-full flex items-center justify-center flex-shrink-0 mt-1 group-hover:scale-110 transition-transform">
                    <span className="text-white font-bold text-lg group-hover:animate-pulse">3</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-earth-green mb-3 text-lg group-hover:text-burnt-orange transition-colors">Recovery Activation</h4>
                    <p className="text-gray-600 leading-relaxed">Inflammation is reduced and the body's natural recovery processes are activated.</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-earth-green rounded-3xl p-8 text-white shadow-xl group hover:shadow-2xl transition-all duration-300">
              <h3 className="font-heading font-bold text-2xl mb-8 group-hover:text-nude transition-colors">Safety First</h3>
              <ul className="space-y-4">
                <li className="flex items-start space-x-3 group">
                  <span className="text-nude font-bold text-lg group-hover:scale-125 transition-transform">•</span>
                  <span className="leading-relaxed">Always start with shorter sessions and gradually increase duration</span>
                </li>
                <li className="flex items-start space-x-3 group">
                  <span className="text-nude font-bold text-lg group-hover:scale-125 transition-transform">•</span>
                  <span className="leading-relaxed">Listen to your body and never push beyond your comfort level</span>
                </li>
                <li className="flex items-start space-x-3 group">
                  <span className="text-nude font-bold text-lg group-hover:scale-125 transition-transform">•</span>
                  <span className="leading-relaxed">Our trained staff will guide you through your first experience</span>
                </li>
                <li className="flex items-start space-x-3 group">
                  <span className="text-nude font-bold text-lg group-hover:scale-125 transition-transform">•</span>
                  <span className="leading-relaxed">Proper warm-up and cool-down protocols are essential</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section className="py-16 bg-gradient-to-b from-white to-nude/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="flex items-center justify-center space-x-2 mb-4">
              <Sparkles className="w-5 h-5 text-earth-green" />
              <span className="text-earth-green text-sm font-medium tracking-[0.2em] uppercase">HOW IT WORKS</span>
              <Sparkles className="w-5 h-5 text-earth-green" />
            </div>
            <h2 className="font-heading font-bold text-3xl md:text-4xl lg:text-5xl text-earth-green mb-6">
              Your Cold Plunge Experience
            </h2>
            <p className="text-gray-600 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
              Experience the invigorating power of cold therapy in our carefully controlled environment.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center group">
              <div className="w-20 h-20 bg-earth-green rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg group-hover:shadow-xl">
                <span className="text-white font-bold text-2xl group-hover:animate-pulse">1</span>
              </div>
              <h3 className="font-heading font-bold text-xl text-earth-green mb-4 group-hover:text-burnt-orange transition-colors">
                Preparation
              </h3>
              <p className="text-gray-600 leading-relaxed">
                We'll guide you through proper preparation and ensure you're ready for the cold exposure experience.
              </p>
            </div>

            <div className="text-center group">
              <div className="w-20 h-20 bg-earth-green rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg group-hover:shadow-xl">
                <span className="text-white font-bold text-2xl group-hover:animate-pulse">2</span>
              </div>
              <h3 className="font-heading font-bold text-xl text-earth-green mb-4 group-hover:text-burnt-orange transition-colors">
                Cold Plunge Session
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Experience 2-5 minutes of controlled cold exposure in our specially designed plunge pool.
              </p>
            </div>

            <div className="text-center group">
              <div className="w-20 h-20 bg-earth-green rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg group-hover:shadow-xl">
                <span className="text-white font-bold text-2xl group-hover:animate-pulse">3</span>
              </div>
              <h3 className="font-heading font-bold text-xl text-earth-green mb-4 group-hover:text-burnt-orange transition-colors">
                Recovery & Warm-up
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Complete your session with proper warm-up and recovery protocols to maximize benefits and recovery.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-earth-green relative overflow-hidden">
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
              <span className="text-white/90 text-sm font-medium tracking-[0.2em] uppercase">READY TO TAKE THE PLUNGE?</span>
              <Sparkles className="w-6 h-6 text-white animate-pulse delay-500" />
            </div>
            <h2 className="font-heading font-bold text-3xl md:text-4xl lg:text-5xl text-white mb-6">
              Ready to Take the Plunge?
            </h2>
            <p className="text-white/90 text-lg md:text-xl mb-8 max-w-3xl mx-auto leading-relaxed">
              Book your cold plunge session today and experience the invigorating benefits
              of cold therapy for yourself.
            </p>
            <a
              href="/contact"
              className="inline-flex items-center bg-white text-earth-green px-8 py-4 rounded-full font-bold text-lg hover:bg-burnt-orange hover:text-white transition-all duration-300 shadow-xl hover:shadow-2xl transform hover:scale-105 hover:-translate-y-1"
            >
              <Snowflake className="w-5 h-5 mr-2 animate-pulse" />
              Book Your Cold Plunge Session
              <ArrowRight className="ml-3 group-hover:translate-x-1 transition-transform" />
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
