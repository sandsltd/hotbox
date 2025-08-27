'use client';

import { useState } from 'react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Mail, Phone, MapPin, Clock, Send, CheckCircle, Sparkles, Calendar, User, MessageSquare } from 'lucide-react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    preferredDate: '',
    preferredTime: '',
    sessionType: '',
    notes: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const sessionTypes = [
    'Sauna Session',
    'Cold Plunge Session',
    'Combined Sauna & Cold Plunge',
    'Special Event',
    'Group Session',
    'Other'
  ];

  const timeSlots = [
    '09:00 AM', '10:00 AM', '11:00 AM', '12:00 PM',
    '01:00 PM', '02:00 PM', '03:00 PM', '04:00 PM',
    '05:00 PM', '06:00 PM', '07:00 PM', '08:00 PM'
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 2000));

    // Here you would typically send the data to your backend/email service
    console.log('Form submitted:', formData);

    setIsSubmitting(false);
    setIsSubmitted(true);
    
    // Reset form after successful submission
    setTimeout(() => {
      setFormData({
        name: '',
        email: '',
        phone: '',
        preferredDate: '',
        preferredTime: '',
        sessionType: '',
        notes: ''
      });
      setIsSubmitted(false);
    }, 5000);
  };

  return (
    <main className="min-h-screen bg-gradient-to-b from-white to-nude/10">
      <Navigation />
      
      {/* Enhanced Hero Section */}
      <section className="pt-20 pb-16 bg-burnt-orange relative overflow-hidden">
        {/* Background decoration */}
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="absolute top-10 right-10 w-32 h-32 bg-white/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-10 left-10 w-24 h-24 bg-white/5 rounded-full blur-2xl animate-pulse delay-1000"></div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="inline-flex items-center space-x-2 mb-6">
              <Sparkles className="w-5 h-5 text-nude animate-pulse" />
              <span className="text-nude text-sm font-medium tracking-[0.2em] uppercase">GET STARTED</span>
              <Sparkles className="w-5 h-5 text-nude animate-pulse delay-500" />
            </div>
            <h1 className="font-heading font-bold text-4xl md:text-5xl lg:text-6xl text-white mb-6 drop-shadow-lg">
              Book Your Session
            </h1>
            <p className="text-white/90 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
              Ready to experience the transformative power of heat and cold therapy? 
              Get in touch with us to book your session or ask any questions.
            </p>
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Enhanced Contact Form */}
          <div className="bg-white rounded-3xl p-8 shadow-2xl border border-nude/20">
            <div className="flex items-center space-x-3 mb-8">
              <div className="w-12 h-12 bg-burnt-orange rounded-2xl flex items-center justify-center">
                <Calendar className="w-6 h-6 text-white" />
              </div>
              <div>
                <h2 className="font-heading font-bold text-3xl text-earth-green">
                  Book Your Session
                </h2>
                <p className="text-gray-600">Fill out the form below to get started</p>
              </div>
            </div>
            
            {isSubmitted ? (
              <div className="text-center py-12">
                <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <CheckCircle className="w-10 h-10 text-green-600" />
                </div>
                <h3 className="font-heading font-bold text-2xl text-earth-green mb-4">
                  Thank You!
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Your booking request has been submitted successfully. We'll get back to you within 24 hours to confirm your session.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="group">
                    <label htmlFor="name" className="block text-sm font-semibold text-earth-green mb-3 flex items-center">
                      <User className="w-4 h-4 mr-2" />
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-4 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-burnt-orange focus:border-burnt-orange transition-all duration-300 bg-gray-50 focus:bg-white"
                      placeholder="Your full name"
                    />
                  </div>
                  
                  <div className="group">
                    <label htmlFor="email" className="block text-sm font-semibold text-earth-green mb-3 flex items-center">
                      <Mail className="w-4 h-4 mr-2" />
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-4 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-burnt-orange focus:border-burnt-orange transition-all duration-300 bg-gray-50 focus:bg-white"
                      placeholder="your.email@example.com"
                    />
                  </div>
                </div>

                <div className="group">
                  <label htmlFor="phone" className="block text-sm font-semibold text-earth-green mb-3 flex items-center">
                    <Phone className="w-4 h-4 mr-2" />
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="w-full px-4 py-4 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-burnt-orange focus:border-burnt-orange transition-all duration-300 bg-gray-50 focus:bg-white"
                    placeholder="+44 123 456 7890"
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="group">
                    <label htmlFor="preferredDate" className="block text-sm font-semibold text-earth-green mb-3 flex items-center">
                      <Calendar className="w-4 h-4 mr-2" />
                      Preferred Date *
                    </label>
                    <input
                      type="date"
                      id="preferredDate"
                      name="preferredDate"
                      value={formData.preferredDate}
                      onChange={handleInputChange}
                      required
                      min={new Date().toISOString().split('T')[0]}
                      className="w-full px-4 py-4 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-burnt-orange focus:border-burnt-orange transition-all duration-300 bg-gray-50 focus:bg-white"
                    />
                  </div>
                  
                  <div className="group">
                    <label htmlFor="preferredTime" className="block text-sm font-semibold text-earth-green mb-3 flex items-center">
                      <Clock className="w-4 h-4 mr-2" />
                      Preferred Time *
                    </label>
                    <select
                      id="preferredTime"
                      name="preferredTime"
                      value={formData.preferredTime}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-4 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-burnt-orange focus:border-burnt-orange transition-all duration-300 bg-gray-50 focus:bg-white"
                    >
                      <option value="">Select a time</option>
                      {timeSlots.map(time => (
                        <option key={time} value={time}>{time}</option>
                      ))}
                    </select>
                  </div>
                </div>

                <div className="group">
                  <label htmlFor="sessionType" className="block text-sm font-semibold text-earth-green mb-3">
                    Type of Session/Event *
                  </label>
                  <select
                    id="sessionType"
                    name="sessionType"
                    value={formData.sessionType}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-4 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-burnt-orange focus:border-burnt-orange transition-all duration-300 bg-gray-50 focus:bg-white"
                  >
                    <option value="">Select session type</option>
                    {sessionTypes.map(type => (
                      <option key={type} value={type}>{type}</option>
                    ))}
                  </select>
                </div>

                <div className="group">
                  <label htmlFor="notes" className="block text-sm font-semibold text-earth-green mb-3 flex items-center">
                    <MessageSquare className="w-4 h-4 mr-2" />
                    Additional Notes
                  </label>
                  <textarea
                    id="notes"
                    name="notes"
                    value={formData.notes}
                    onChange={handleInputChange}
                    rows={4}
                    className="w-full px-4 py-4 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-burnt-orange focus:border-burnt-orange transition-all duration-300 bg-gray-50 focus:bg-white resize-none"
                    placeholder="Tell us about your wellness goals or any special requirements..."
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-burnt-orange text-white py-4 px-8 rounded-xl font-bold text-lg hover:bg-earth-green transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none flex items-center justify-center space-x-2"
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                      <span>Submitting...</span>
                    </>
                  ) : (
                    <>
                      <Send className="w-5 h-5" />
                      <span>Submit Booking Request</span>
                    </>
                  )}
                </button>
              </form>
            )}
          </div>

          {/* Enhanced Contact Information */}
          <div className="space-y-8">
            <div>
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-12 h-12 bg-earth-green rounded-2xl flex items-center justify-center">
                  <Sparkles className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h2 className="font-heading font-bold text-3xl text-earth-green">
                    Get in Touch
                  </h2>
                  <p className="text-gray-600">We're here to help you on your wellness journey</p>
                </div>
              </div>
              <p className="text-gray-600 text-lg leading-relaxed">
                Have questions about our services or want to learn more about the benefits of sauna and cold plunge therapy? 
                We're here to help you on your wellness journey.
              </p>
            </div>

            <div className="space-y-6">
              <div className="flex items-start space-x-4 group">
                <div className="w-12 h-12 bg-burnt-orange rounded-2xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                  <Mail className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="font-semibold text-earth-green mb-2">Email Us</h3>
                  <a href="mailto:hello@hotboxsocial.com" className="text-gray-600 hover:text-burnt-orange transition-all duration-300 font-medium">
                    hello@hotboxsocial.com
                  </a>
                </div>
              </div>

              <div className="flex items-start space-x-4 group">
                <div className="w-12 h-12 bg-earth-green rounded-2xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                  <Phone className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="font-semibold text-earth-green mb-2">Call Us</h3>
                  <a href="tel:+441234567890" className="text-gray-600 hover:text-earth-green transition-all duration-300 font-medium">
                    +44 123 456 7890
                  </a>
                </div>
              </div>

              <div className="flex items-start space-x-4 group">
                <div className="w-12 h-12 bg-burnt-orange rounded-2xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                  <MapPin className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="font-semibold text-earth-green mb-2">Location</h3>
                  <p className="text-gray-600 font-medium">Bristol, UK</p>
                  <p className="text-gray-500 text-sm">Exact location provided upon booking</p>
                </div>
              </div>

              <div className="flex items-start space-x-4 group">
                <div className="w-12 h-12 bg-earth-green rounded-2xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                  <Clock className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="font-semibold text-earth-green mb-2">Hours</h3>
                  <p className="text-gray-600 font-medium">By appointment only</p>
                  <p className="text-gray-500 text-sm">Flexible scheduling available</p>
                </div>
              </div>
            </div>

            {/* Enhanced FAQ Section */}
            <div className="bg-gradient-to-br from-nude/20 to-white rounded-3xl p-8 shadow-lg border border-nude/20">
              <h3 className="font-heading font-bold text-2xl text-earth-green mb-6 flex items-center">
                <Sparkles className="w-5 h-5 text-burnt-orange mr-2" />
                Frequently Asked Questions
              </h3>
              <div className="space-y-6">
                <div className="border-l-4 border-burnt-orange pl-4">
                  <h4 className="font-semibold text-earth-green mb-2">What should I bring?</h4>
                  <p className="text-gray-600 text-sm leading-relaxed">Just yourself! We provide towels, robes, and all necessary equipment.</p>
                </div>
                <div className="border-l-4 border-earth-green pl-4">
                  <h4 className="font-semibold text-earth-green mb-2">How long is a session?</h4>
                  <p className="text-gray-600 text-sm leading-relaxed">Sessions typically last 60-90 minutes, including preparation and recovery time.</p>
                </div>
                <div className="border-l-4 border-burnt-orange pl-4">
                  <h4 className="font-semibold text-earth-green mb-2">Is it safe for beginners?</h4>
                  <p className="text-gray-600 text-sm leading-relaxed">Absolutely! Our trained staff will guide you through your first experience safely.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </main>
  );
}
