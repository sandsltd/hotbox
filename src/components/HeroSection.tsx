'use client';

import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, Flame, Snowflake, Calendar, Phone, Sparkles, Zap } from 'lucide-react';

export default function HeroSection() {
  return (
    <>
      <section className="relative min-h-screen overflow-hidden">
        {/* Gradient Fusion Background */}
        <div className="absolute inset-0 gradient-loop">
        </div>

        {/* Content overlay */}
        <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32">
          <div className="text-center min-h-screen flex flex-col justify-center items-center py-20">
            {/* Hero Tagline */}
            <div className="mb-8 flex items-center justify-center space-x-2">
              <Sparkles className="w-6 h-6 text-white animate-pulse" />
              <span className="text-white/90 text-sm font-medium tracking-[0.2em] uppercase">FIRE MEETS ICE</span>
              <Sparkles className="w-6 h-6 text-white animate-pulse delay-500" />
            </div>

            {/* Main Logo */}
            <div className="mb-8">
              <Image
                src="/logos/Hotbox Social - White Logo 1.png"
                alt="HOTBOX Social"
                width={400}
                height={120}
                className="w-auto h-20 md:h-28 lg:h-36 drop-shadow-lg"
              />
            </div>

            {/* Subtitle */}
            <p className="text-white/90 text-lg md:text-xl mb-12 max-w-3xl mx-auto leading-relaxed font-medium">
              Where heat meets cold. Experience the perfect balance of fire and ice therapy 
              for ultimate wellness, recovery, and transformation.
            </p>

            {/* Service Highlights */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12 max-w-4xl mx-auto">
              {/* Heat Therapy Highlight */}
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 group hover:bg-white/15 transition-all duration-300">
                <div className="flex items-center space-x-3 mb-4">
                  <div className="w-12 h-12 bg-burnt-orange rounded-full flex items-center justify-center">
                    <Flame className="w-6 h-6 text-white group-hover:animate-pulse" />
                  </div>
                  <div>
                    <h3 className="font-heading font-bold text-xl text-white">Heat Therapy</h3>
                    <p className="text-white/80 text-sm">Detoxify & Relax</p>
                  </div>
                </div>
                <p className="text-white/85 text-sm leading-relaxed">
                  Traditional sauna therapy for deep detoxification, muscle recovery, and stress relief.
                </p>
              </div>

              {/* Cold Therapy Highlight */}
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 group hover:bg-white/15 transition-all duration-300">
                <div className="flex items-center space-x-3 mb-4">
                  <div className="w-12 h-12 bg-earth-green rounded-full flex items-center justify-center">
                    <Snowflake className="w-6 h-6 text-white group-hover:animate-pulse" />
                  </div>
                  <div>
                    <h3 className="font-heading font-bold text-xl text-white">Cold Plunge</h3>
                    <p className="text-white/80 text-sm">Energize & Recover</p>
                  </div>
                </div>
                <p className="text-white/85 text-sm leading-relaxed">
                  Ice bath therapy for enhanced circulation, energy boost, and accelerated recovery.
                </p>
              </div>
            </div>

            {/* CTA Button */}
            <div className="flex justify-center items-center">
              <Link
                href="/contact"
                className="group inline-flex items-center bg-nude text-earth-green px-8 py-4 rounded-full font-semibold hover:bg-burnt-orange hover:text-white transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105 hover:-translate-y-1"
              >
                <Zap className="w-5 h-5 mr-2 group-hover:animate-pulse" />
                Book Your Session
                <ArrowRight className="ml-3 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>

            {/* Bottom Tagline */}
            <div className="mt-16 text-center">
              <div className="flex items-center justify-center space-x-4 mb-4">
                <div className="w-8 h-1 bg-white/30 rounded-full"></div>
                <h3 className="font-heading font-bold text-2xl md:text-3xl text-white">
                  ICE • FIRE • BREATH • MOVEMENT
                </h3>
                <div className="w-8 h-1 bg-white/30 rounded-full"></div>
              </div>
              <p className="text-white/80 text-lg font-medium">
                It's not luxury. It's necessary.
              </p>
            </div>
          </div>
        </div>
                     </section>

               

               {/* Enhanced Dedicated Services Section */}
      <section className="py-24 bg-gradient-to-b from-white to-nude/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <div className="inline-flex items-center space-x-2 mb-4">
              <Sparkles className="w-5 h-5 text-burnt-orange" />
              <span className="text-burnt-orange text-sm font-medium tracking-[0.2em] uppercase">EXPERIENCE THE MAGIC</span>
              <Sparkles className="w-5 h-5 text-burnt-orange" />
            </div>
            <h2 className="font-heading font-bold text-4xl md:text-5xl lg:text-6xl text-earth-green mb-6">
              Our Services
            </h2>
            <p className="text-gray-600 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
              Experience the transformative power of heat and cold therapy in our state-of-the-art facilities.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            {/* Heat Therapy Service */}
            <div className="order-2 lg:order-1 group">
              <div className="relative overflow-hidden rounded-3xl shadow-2xl">
                <Image
                  src="/Hot Box.png"
                  alt="HOTBOX Heat Therapy"
                  width={600}
                  height={400}
                  className="w-full h-auto transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-burnt-orange/30 via-transparent to-transparent"></div>
                <div className="absolute top-6 left-6">
                  <div className="bg-white/90 backdrop-blur-sm px-4 py-2 rounded-full">
                    <span className="text-burnt-orange font-semibold text-sm">🔥 HEAT THERAPY</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="order-1 lg:order-2">
              <div className="mb-6">
                <div className="inline-flex items-center space-x-2 mb-4">
                  <Flame className="w-6 h-6 text-burnt-orange animate-pulse" />
                  <span className="text-burnt-orange text-sm font-medium tracking-[0.2em] uppercase">TRADITIONAL HEAT</span>
                </div>
                <h3 className="font-heading font-bold text-3xl md:text-4xl lg:text-5xl text-earth-green mb-6">
                  HOTBOX Experience
                </h3>
              </div>
              <p className="text-gray-600 text-lg md:text-xl mb-8 leading-relaxed">
                Step into our traditional heat therapy chamber and experience the ancient practice of sauna therapy. 
                Detoxify your body, relax your mind, and rejuvenate your spirit in our carefully controlled environment.
              </p>
              <ul className="space-y-4 mb-8">
                <li className="flex items-center text-gray-600 group">
                  <div className="w-2 h-2 bg-burnt-orange rounded-full mr-4 group-hover:scale-150 transition-transform"></div>
                  Traditional heat therapy techniques
                </li>
                <li className="flex items-center text-gray-600 group">
                  <div className="w-2 h-2 bg-burnt-orange rounded-full mr-4 group-hover:scale-150 transition-transform"></div>
                  Controlled temperature environment
                </li>
                <li className="flex items-center text-gray-600 group">
                  <div className="w-2 h-2 bg-burnt-orange rounded-full mr-4 group-hover:scale-150 transition-transform"></div>
                  Detoxification and relaxation
                </li>
              </ul>
              <Link
                href="/sauna-benefits"
                className="group inline-flex items-center bg-burnt-orange text-white px-8 py-4 rounded-full font-semibold hover:bg-earth-green hover:shadow-lg transition-all duration-300 transform hover:scale-105 hover:-translate-y-1"
              >
                <Flame className="w-5 h-5 mr-2 group-hover:animate-pulse" />
                Learn More
                <ArrowRight className="ml-3 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>

            {/* Cold Plunge Service */}
            <div className="order-4 lg:order-3">
              <div className="mb-6">
                <div className="inline-flex items-center space-x-2 mb-4">
                  <Snowflake className="w-6 h-6 text-earth-green animate-pulse" />
                  <span className="text-earth-green text-sm font-medium tracking-[0.2em] uppercase">COLD THERAPY</span>
                </div>
                <h3 className="font-heading font-bold text-3xl md:text-4xl lg:text-5xl text-earth-green mb-6">
                  Ice Bath Experience
                </h3>
              </div>
              <p className="text-gray-600 text-lg md:text-xl mb-8 leading-relaxed">
                Embrace the invigorating power of cold therapy in our specially designed ice baths. 
                Boost your energy, improve circulation, and enhance recovery with this ancient wellness practice.
              </p>
              <ul className="space-y-4 mb-8">
                <li className="flex items-center text-gray-600 group">
                  <div className="w-2 h-2 bg-earth-green rounded-full mr-4 group-hover:scale-150 transition-transform"></div>
                  Controlled cold therapy sessions
                </li>
                <li className="flex items-center text-gray-600 group">
                  <div className="w-2 h-2 bg-earth-green rounded-full mr-4 group-hover:scale-150 transition-transform"></div>
                  Enhanced circulation and recovery
                </li>
                <li className="flex items-center text-gray-600 group">
                  <div className="w-2 h-2 bg-earth-green rounded-full mr-4 group-hover:scale-150 transition-transform"></div>
                  Energy and vitality boost
                </li>
              </ul>
              <Link
                href="/cold-plunge-benefits"
                className="group inline-flex items-center bg-earth-green text-white px-8 py-4 rounded-full font-semibold hover:bg-burnt-orange hover:shadow-lg transition-all duration-300 transform hover:scale-105 hover:-translate-y-1"
              >
                <Snowflake className="w-5 h-5 mr-2 group-hover:animate-pulse" />
                Learn More
                <ArrowRight className="ml-3 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
            <div className="order-3 lg:order-4 group">
              <div className="relative overflow-hidden rounded-3xl shadow-2xl">
                <Image
                  src="/Ice Water-3.png"
                  alt="HOTBOX Ice Bath"
                  width={600}
                  height={400}
                  className="w-full h-auto transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-earth-green/30 via-transparent to-transparent"></div>
                <div className="absolute top-6 left-6">
                  <div className="bg-white/90 backdrop-blur-sm px-4 py-2 rounded-full">
                    <span className="text-earth-green font-semibold text-sm">❄️ COLD PLUNGE</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced Page Snippets Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <div className="inline-flex items-center space-x-2 mb-4">
              <Sparkles className="w-5 h-5 text-burnt-orange" />
              <span className="text-burnt-orange text-sm font-medium tracking-[0.2em] uppercase">DISCOVER THE MAGIC</span>
              <Sparkles className="w-5 h-5 text-burnt-orange" />
            </div>
            <h2 className="font-heading font-bold text-4xl md:text-5xl lg:text-6xl text-earth-green mb-6">
              Experience HOTBOX Social
            </h2>
            <p className="text-gray-600 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
              Discover our comprehensive wellness offerings designed to transform your mind, body, and spirit.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Heat Therapy */}
            <div className="group">
              <div className="bg-burnt-orange rounded-3xl p-8 h-full shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2">
                <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Flame className="w-8 h-8 text-white group-hover:animate-pulse" />
                </div>
                <h3 className="font-heading font-bold text-2xl text-white mb-4">
                  Heat Therapy
                </h3>
                <p className="text-white/90 mb-6 leading-relaxed">
                  Experience the transformative power of traditional heat therapy. Detoxify, relax, and rejuvenate.
                </p>
                <Link
                  href="/sauna-benefits"
                  className="inline-flex items-center text-white font-semibold hover:underline group-hover:translate-x-1 transition-transform"
                >
                  Learn More
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Link>
              </div>
            </div>

            {/* Cold Plunge */}
            <div className="group">
              <div className="bg-earth-green rounded-3xl p-8 h-full shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2">
                <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Snowflake className="w-8 h-8 text-white group-hover:animate-pulse" />
                </div>
                <h3 className="font-heading font-bold text-2xl text-white mb-4">
                  Cold Plunge
                </h3>
                <p className="text-white/90 mb-6 leading-relaxed">
                  Embrace the invigorating benefits of cold therapy. Boost energy, improve circulation, and enhance recovery.
                </p>
                <Link
                  href="/cold-plunge-benefits"
                  className="inline-flex items-center text-white font-semibold hover:underline group-hover:translate-x-1 transition-transform"
                >
                  Learn More
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Link>
              </div>
            </div>

            {/* Special Events */}
            <div className="group">
              <div className="bg-burnt-orange rounded-3xl p-8 h-full shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2">
                <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Calendar className="w-8 h-8 text-white group-hover:animate-pulse" />
                </div>
                <h3 className="font-heading font-bold text-2xl text-white mb-4">
                  Special Events
                </h3>
                <p className="text-white/90 mb-6 leading-relaxed">
                  Join our community for workshops, social sessions, and wellness events. Connect with like-minded individuals.
                </p>
                <Link
                  href="/events"
                  className="inline-flex items-center text-white font-semibold hover:underline group-hover:translate-x-1 transition-transform"
                >
                  View Events
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Link>
              </div>
            </div>

            {/* Contact & Booking */}
            <div className="group">
              <div className="bg-earth-green rounded-3xl p-8 h-full shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2">
                <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Phone className="w-8 h-8 text-white group-hover:animate-pulse" />
                </div>
                <h3 className="font-heading font-bold text-2xl text-white mb-4">
                  Book Your Session
                </h3>
                <p className="text-white/90 mb-6 leading-relaxed">
                  Ready to transform your wellness journey? Book your session today and experience the HOTBOX difference.
                </p>
                <Link
                  href="/contact"
                  className="inline-flex items-center text-white font-semibold hover:underline group-hover:translate-x-1 transition-transform"
                >
                  Book Now
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

                     {/* About Us & Our Mission Section */}
               <section className="py-24 bg-gradient-to-br from-nude via-nude/80 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                                 {/* Shop Front Image */}
                     <div className="order-2 lg:order-1 group">
                       {/* Bristol Location Badge */}
                       <div className="mb-6 flex justify-center">
                         <div className="bg-white/90 backdrop-blur-sm px-6 py-3 rounded-full shadow-lg border border-black/10">
                           <span className="text-black font-semibold text-lg">📍 BRISTOL, UK</span>
                         </div>
                       </div>
                       
                       <div className="relative overflow-hidden rounded-3xl shadow-2xl">
                         <Image
                           src="/logos/Shop.png"
                           alt="HOTBOX Social Shop Front"
                           width={600}
                           height={400}
                           className="w-full h-auto transition-transform duration-700 group-hover:scale-105"
                         />
                         <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent"></div>
                       </div>
                     </div>

            {/* Mission Content */}
            <div className="order-1 lg:order-2">
              <div className="bg-white/60 backdrop-blur-sm rounded-3xl p-12 shadow-xl border border-black/5">
                <div className="inline-flex items-center space-x-2 mb-6">
                  <Sparkles className="w-5 h-5 text-gray-600" />
                  <span className="text-gray-600 text-sm font-medium tracking-[0.2em] uppercase">ABOUT US & OUR MISSION</span>
                  <Sparkles className="w-5 h-5 text-gray-600" />
                </div>
                <h2 className="font-heading font-bold text-3xl md:text-4xl lg:text-5xl text-black mb-8">
                  We bring primal recovery tools to a world that's forgotten how to feel.
                </h2>
                <p className="text-black text-lg md:text-xl leading-relaxed mb-8 max-w-3xl">
                  ICE, FIRE, BREATH, MOVEMENT. It's not luxury. It's necessary.
                </p>
                <p className="text-black/80 text-lg leading-relaxed mb-12">
                  Located in the heart of Bristol, HOTBOX Social is your destination for authentic heat and cold therapy experiences. 
                  We believe in the power of ancient wellness practices to transform modern lives.
                </p>
                <div className="flex flex-wrap justify-center gap-8 text-black">
                  <div className="flex items-center space-x-2 group">
                    <Snowflake className="w-5 h-5 text-gray-600 group-hover:animate-pulse" />
                    <span className="font-bold text-lg group-hover:text-black transition-colors">ICE</span>
                  </div>
                  <div className="flex items-center space-x-2 group">
                    <Flame className="w-5 h-5 text-gray-600 group-hover:animate-pulse" />
                    <span className="font-bold text-lg group-hover:text-black transition-colors">FIRE</span>
                  </div>
                  <div className="flex items-center space-x-2 group">
                    <div className="w-5 h-5 bg-gray-600 rounded-full group-hover:scale-125 transition-transform"></div>
                    <span className="font-bold text-lg group-hover:text-black transition-colors">BREATH</span>
                  </div>
                  <div className="flex items-center space-x-2 group">
                    <div className="w-5 h-5 bg-gray-600 rounded-full group-hover:scale-125 transition-transform"></div>
                    <span className="font-bold text-lg group-hover:text-black transition-colors">MOVEMENT</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
