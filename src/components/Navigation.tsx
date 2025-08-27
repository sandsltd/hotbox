'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Menu, X } from 'lucide-react';

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const navItems = [
    { name: 'Home', href: '/' },
    { name: 'Sauna Benefits', href: '/sauna-benefits' },
    { name: 'Cold Plunge Benefits', href: '/cold-plunge-benefits' },
    { name: 'Special Events', href: '/events' },
    { name: 'Contact', href: '/contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 bg-nude shadow-sm h-16 sm:h-20 md:h-24 lg:h-32`}>
      <div className="max-w-7xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8 h-full">
        {/* Mobile Layout */}
        <div className="flex h-full items-center justify-between lg:hidden">
          {/* Logo */}
          <div className="flex items-center flex-shrink-0">
            <Link href="/" className="flex items-center group">
              <Image
                src="/logos/Hotbox Social - Logo 2.png"
                alt="HOTBOX Social"
                width={160}
                height={50}
                className="h-10 sm:h-12 md:h-16 w-auto transition-transform duration-300 group-hover:scale-105"
                priority
              />
            </Link>
          </div>

          {/* Right side - Contact and Book Now */}
          <div className="flex items-center space-x-2 sm:space-x-3 md:space-x-4">
            {/* Contact number - visible on tablet and desktop */}
            <div className="hidden sm:flex items-center">
              <div className="text-sm md:text-base text-earth-green font-semibold">
                0117 123 4567
              </div>
            </div>
            
            {/* Book Now button */}
            <Link
              href="/contact"
              className="bg-black text-white px-3 sm:px-4 md:px-6 py-2 md:py-3 rounded-full font-semibold hover:bg-earth-green transition-all duration-300 text-xs md:text-sm whitespace-nowrap"
            >
              Book Now
            </Link>

            {/* Mobile menu button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-1.5 sm:p-2 rounded-lg text-earth-green hover:text-burnt-orange hover:bg-nude/10 transition-all duration-200"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X size={18} className="sm:w-5 sm:h-5" /> : <Menu size={18} className="sm:w-5 sm:h-5" />}
            </button>
          </div>
        </div>

        {/* Desktop Layout */}
        <div className="hidden lg:flex h-full">
          {/* Logo - Full height */}
          <div className="flex items-center">
            <Link href="/" className="flex items-center group">
              <Image
                src="/logos/Hotbox Social - Logo 2.png"
                alt="HOTBOX Social"
                width={160}
                height={50}
                className="h-24 w-auto transition-transform duration-300 group-hover:scale-105"
                priority
              />
            </Link>
          </div>

          {/* Navigation Menu - Centered */}
          <div className="flex items-center justify-center flex-1">
            <div className="flex items-center space-x-6">
              {navItems.map((item, index) => (
                <div key={item.name} className="flex items-center">
                  <Link
                    href={item.href}
                    className="relative px-4 py-2 text-earth-green hover:text-burnt-orange transition-colors duration-200 font-medium rounded-lg hover:bg-nude/10 group"
                  >
                    {item.name}
                    <span className="absolute bottom-0 left-1/2 w-0 h-0.5 bg-burnt-orange transition-all duration-300 group-hover:w-full group-hover:left-0"></span>
                  </Link>
                  {index < navItems.length - 1 && (
                    <div className="w-1.5 h-1.5 bg-earth-green/40 rounded-full mx-3"></div>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Right side - Contact and Book Now */}
          <div className="flex flex-col justify-center items-end space-y-2">
            <div className="flex items-center">
              <div className="text-lg text-earth-green font-semibold">
                0117 123 4567
              </div>
            </div>
            <div className="flex items-center">
              <Link
                href="/contact"
                className="bg-black text-white px-6 py-4 rounded-full font-semibold hover:bg-earth-green transition-all duration-300 text-sm"
              >
                Book Now
              </Link>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden absolute top-full left-0 right-0 bg-nude/95 backdrop-blur-md border-t border-nude/20 shadow-lg">
            <div className="px-4 py-4 space-y-2">
              {/* Contact number in mobile menu */}
              <div className="px-4 py-3 text-earth-green font-semibold border-b border-nude/20">
                <div className="text-sm">Call us:</div>
                <div className="text-lg">0117 123 4567</div>
              </div>
              
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="block px-4 py-3 text-earth-green hover:text-burnt-orange hover:bg-nude/10 transition-all duration-200 font-medium rounded-lg"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              <div className="pt-2">
                <Link
                  href="/contact"
                  className="block w-full bg-black text-white px-6 py-3 rounded-full font-semibold text-center hover:bg-earth-green transition-all duration-200"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Book Now
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
