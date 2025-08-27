'use client';

import Link from 'next/link';
import Image from 'next/image';
import { MapPin, Phone, Mail, Clock, Sparkles, ArrowUp } from 'lucide-react';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-nude text-black relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-black/5"></div>
      <div className="absolute top-10 right-10 w-32 h-32 bg-black/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-10 left-10 w-24 h-24 bg-black/5 rounded-full blur-2xl"></div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand Section */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-3 mb-6">
              <Image
                src="/logos/Hotbox Social - Logo 2.png"
                alt="HOTBOX Social"
                width={160}
                height={50}
                className="h-24 w-auto"
              />
            </div>

            <div className="flex space-x-4 mb-8">
              <a
                href="#"
                className="w-12 h-12 bg-black rounded-full flex items-center justify-center hover:bg-earth-green hover:text-white transition-all duration-300 transform hover:scale-110 shadow-lg"
                aria-label="Facebook"
              >
                <span className="text-white font-bold text-lg">f</span>
              </a>
              <a
                href="#"
                className="w-12 h-12 bg-black rounded-full flex items-center justify-center hover:bg-earth-green hover:text-white transition-all duration-300 transform hover:scale-110 shadow-lg"
                aria-label="Instagram"
              >
                <span className="text-white font-bold text-lg">ig</span>
              </a>
              <a
                href="#"
                className="w-12 h-12 bg-black rounded-full flex items-center justify-center hover:bg-earth-green hover:text-white transition-all duration-300 transform hover:scale-110 shadow-lg"
                aria-label="Twitter"
              >
                <span className="text-white font-bold text-lg">t</span>
              </a>
            </div>
            
            {/* Newsletter signup */}
            <div className="bg-black/10 backdrop-blur-sm rounded-2xl p-6">
              <h4 className="font-heading font-bold text-lg mb-3 text-black">Stay Connected</h4>
              <p className="text-black/80 text-sm mb-4">Get wellness tips and updates</p>
              <div className="flex space-x-2">
                <input
                  type="email"
                  placeholder="Your email"
                  className="flex-1 px-4 py-2 bg-white/80 border border-black/20 rounded-lg text-black placeholder-black/60 focus:outline-none focus:border-black"
                />
                <button className="px-4 py-2 bg-black text-white rounded-lg hover:bg-earth-green transition-all duration-300">
                  <Sparkles className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-heading font-bold text-xl mb-6 flex items-center text-black">
              <Sparkles className="w-5 h-5 text-black mr-2" />
              Quick Links
            </h3>
            <ul className="space-y-3">
              <li>
                <Link href="/" className="text-black hover:text-earth-green transition-all duration-300 flex items-center group">
                  <span className="w-1 h-1 bg-black rounded-full mr-3 group-hover:bg-earth-green transition-colors"></span>
                  Home
                </Link>
              </li>
              <li>
                <Link href="/sauna-benefits" className="text-black hover:text-earth-green transition-all duration-300 flex items-center group">
                  <span className="w-1 h-1 bg-black rounded-full mr-3 group-hover:bg-earth-green transition-colors"></span>
                  Sauna Benefits
                </Link>
              </li>
              <li>
                <Link href="/cold-plunge-benefits" className="text-black hover:text-earth-green transition-all duration-300 flex items-center group">
                  <span className="w-1 h-1 bg-black rounded-full mr-3 group-hover:bg-earth-green transition-colors"></span>
                  Cold Plunge Benefits
                </Link>
              </li>
              <li>
                <Link href="/events" className="text-black hover:text-earth-green transition-all duration-300 flex items-center group">
                  <span className="w-1 h-1 bg-black rounded-full mr-3 group-hover:bg-earth-green transition-colors"></span>
                  Special Events
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-black hover:text-earth-green transition-all duration-300 flex items-center group">
                  <span className="w-1 h-1 bg-black rounded-full mr-3 group-hover:bg-earth-green transition-colors"></span>
                  Contact & Booking
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-heading font-bold text-xl mb-6 flex items-center text-black">
              <Sparkles className="w-5 h-5 text-black mr-2" />
              Contact Info
            </h3>
            <div className="space-y-4">
              <div className="flex items-start space-x-4 group">
                <div className="w-10 h-10 bg-black rounded-full flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                  <MapPin className="w-5 h-5 text-white" />
                </div>
                <div>
                  <p className="text-black font-medium">Bristol, UK</p>
                  <p className="text-black/70 text-sm">Exact location provided upon booking</p>
                </div>
              </div>
              <div className="flex items-center space-x-4 group">
                <div className="w-10 h-10 bg-black rounded-full flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                  <Phone className="w-5 h-5 text-white" />
                </div>
                <a href="tel:+441234567890" className="text-black hover:text-earth-green transition-all duration-300 font-medium">
                  +44 123 456 7890
                </a>
              </div>
              <div className="flex items-center space-x-4 group">
                <div className="w-10 h-10 bg-black rounded-full flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                  <Mail className="w-5 h-5 text-white" />
                </div>
                <a href="mailto:hello@hotboxsocial.com" className="text-black hover:text-earth-green transition-all duration-300 font-medium">
                  hello@hotboxsocial.com
                </a>
              </div>
              <div className="flex items-start space-x-4 group">
                <div className="w-10 h-10 bg-black rounded-full flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                  <Clock className="w-5 h-5 text-white" />
                </div>
                <div>
                  <p className="text-black font-medium">By appointment only</p>
                  <p className="text-black/70 text-sm">Flexible scheduling available</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-black/20 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <div className="flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-8">
            <p className="text-black/70 text-sm">
              © 2024 HOTBOX Social. All rights reserved.
            </p>
            <div className="flex space-x-6">
              <Link href="/privacy" className="text-black/70 hover:text-earth-green text-sm transition-all duration-300">
                Privacy Policy
              </Link>
              <Link href="/terms" className="text-black/70 hover:text-earth-green text-sm transition-all duration-300">
                Terms of Service
              </Link>
            </div>
          </div>
          
          {/* Web Designer Credit */}
          <div className="flex items-center space-x-2 mt-4 md:mt-0">
            <span className="text-black/50 text-xs">Website by</span>
            <a 
              href="https://www.saunders-simmons.co.uk" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center space-x-2 hover:opacity-80 transition-opacity"
            >
              <Image
                src="https://www.saunders-simmons.co.uk/SANDSLOGO.png"
                alt="Saunders Simmons Ltd"
                width={240}
                height={60}
                className="h-12 w-auto"
              />
            </a>
          </div>
        </div>
      </div>

      {/* Scroll to top button */}
      <button
        onClick={scrollToTop}
        className="fixed bottom-8 right-8 w-12 h-12 bg-black text-white rounded-full flex items-center justify-center hover:bg-earth-green transition-all duration-300 transform hover:scale-110 shadow-lg z-40"
        aria-label="Scroll to top"
      >
        <ArrowUp className="w-5 h-5" />
      </button>
    </footer>
  );
}

