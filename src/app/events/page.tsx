import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Calendar, Clock, Users, MapPin, ArrowRight } from 'lucide-react';

export default function Events() {
  const upcomingEvents = [
    {
      id: 1,
      title: "Wellness Workshop: Sauna & Cold Plunge Basics",
      date: "2024-02-15",
      time: "10:00 AM - 12:00 PM",
      type: "Workshop",
      capacity: 12,
      price: "£45",
      description: "Learn the fundamentals of sauna and cold plunge therapy. Perfect for beginners looking to understand the science and benefits.",
      location: "HOTBOX Social Studio",
      image: "workshop"
    },
    {
      id: 2,
      title: "Social Sauna Session",
      date: "2024-02-18",
      time: "06:00 PM - 08:00 PM",
      type: "Social Event",
      capacity: 8,
      price: "£35",
      description: "Join our community for a relaxed evening of sauna therapy. Meet like-minded wellness enthusiasts in a social setting.",
      location: "HOTBOX Social Studio",
      image: "social"
    },
    {
      id: 3,
      title: "Advanced Cold Plunge Masterclass",
      date: "2024-02-22",
      time: "02:00 PM - 04:00 PM",
      type: "Masterclass",
      capacity: 6,
      price: "£60",
      description: "Take your cold therapy practice to the next level. Advanced techniques and extended sessions for experienced practitioners.",
      location: "HOTBOX Social Studio",
      image: "masterclass"
    },
    {
      id: 4,
      title: "Weekend Wellness Retreat",
      date: "2024-03-02",
      time: "10:00 AM - 04:00 PM",
      type: "Retreat",
      capacity: 15,
      price: "£120",
      description: "A full-day wellness experience combining multiple sauna and cold plunge sessions with guided meditation and nutrition guidance.",
      location: "HOTBOX Social Studio",
      image: "retreat"
    },
    {
      id: 5,
      title: "Corporate Wellness Day",
      date: "2024-03-08",
      time: "09:00 AM - 05:00 PM",
      type: "Corporate",
      capacity: 20,
      price: "£85",
      description: "Team building through wellness. Perfect for companies looking to boost employee health and morale.",
      location: "HOTBOX Social Studio",
      image: "corporate"
    },
    {
      id: 6,
      title: "Women's Wellness Circle",
      date: "2024-03-12",
      time: "07:00 PM - 09:00 PM",
      type: "Community",
      capacity: 10,
      price: "£40",
      description: "A supportive environment for women to explore wellness practices together. Sauna and cold plunge with guided discussion.",
      location: "HOTBOX Social Studio",
      image: "community"
    }
  ];

  const getEventImage = (imageType: string) => {
    const gradients = {
      workshop: "from-sauna-warm to-sauna-orange",
      social: "from-plunge-cool to-plunge-ice",
      masterclass: "from-sauna-gold to-sauna-warm",
      retreat: "from-plunge-ice to-plunge-fresh",
      corporate: "from-sauna-orange to-plunge-cool",
      community: "from-plunge-fresh to-sauna-gold"
    };
    return gradients[imageType as keyof typeof gradients] || "from-sauna-warm to-plunge-cool";
  };

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-GB', {
      weekday: 'long',
      day: 'numeric',
      month: 'long',
      year: 'numeric'
    });
  };

  return (
    <main className="min-h-screen bg-neutral-light">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-20 pb-16 bg-burnt-orange">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="font-heading font-bold text-4xl md:text-5xl lg:text-6xl text-white mb-6">
              Special Events
            </h1>
            <p className="text-white/90 text-lg md:text-xl max-w-3xl mx-auto">
              Join our community for exclusive workshops, social sessions, and wellness events. 
              Connect with like-minded individuals while experiencing the transformative power of heat and cold therapy.
            </p>
          </div>
        </div>
      </section>

      {/* Events Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-heading font-bold text-3xl md:text-4xl text-earth-green mb-4">
              Upcoming Events
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Discover our curated selection of wellness events designed to enhance your journey 
              and connect you with our vibrant community.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {upcomingEvents.map((event, index) => (
              <div
                key={event.id}
                className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 group overflow-hidden"
              >
                {/* Event Image */}
                <div className={`h-48 bg-gradient-to-br ${getEventImage(event.image)} relative overflow-hidden`}>
                  <div className="absolute inset-0 bg-black/20" />
                  <div className="absolute top-4 left-4">
                    <span className="bg-white/90 text-earth-green px-3 py-1 rounded-full text-sm font-semibold">
                      {event.type}
                    </span>
                  </div>
                  <div className="absolute bottom-4 right-4">
                    <span className="bg-white/90 text-earth-green px-3 py-1 rounded-full text-sm font-bold">
                      {event.price}
                    </span>
                  </div>
                </div>

                {/* Event Content */}
                <div className="p-6">
                  <h3 className="font-heading font-bold text-xl text-earth-green mb-3 group-hover:text-burnt-orange transition-colors">
                    {event.title}
                  </h3>
                  
                  <div className="space-y-2 mb-4">
                    <div className="flex items-center space-x-2 text-gray-600">
                      <Calendar className="w-4 h-4" />
                      <span className="text-sm">{formatDate(event.date)}</span>
                    </div>
                    <div className="flex items-center space-x-2 text-gray-600">
                      <Clock className="w-4 h-4" />
                      <span className="text-sm">{event.time}</span>
                    </div>
                    <div className="flex items-center space-x-2 text-gray-600">
                      <Users className="w-4 h-4" />
                      <span className="text-sm">{event.capacity} spots available</span>
                    </div>
                    <div className="flex items-center space-x-2 text-gray-600">
                      <MapPin className="w-4 h-4" />
                      <span className="text-sm">{event.location}</span>
                    </div>
                  </div>

                  <p className="text-gray-600 text-sm mb-6 leading-relaxed">
                    {event.description}
                  </p>

                  <a
                    href={`/contact?event=${event.id}`}
                    className="inline-flex items-center bg-burnt-orange text-white px-6 py-3 rounded-lg font-semibold hover:bg-earth-green transition-all duration-300 group-hover:scale-105"
                  >
                    Book This Event
                    <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Event Categories */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-heading font-bold text-3xl md:text-4xl text-earth-green mb-4">
              Event Types
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              We offer a variety of events to suit different interests and experience levels.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-20 h-20 bg-burnt-orange rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-white font-bold text-xl">W</span>
              </div>
              <h3 className="font-heading font-bold text-xl text-earth-green mb-4">
                Workshops
              </h3>
              <p className="text-gray-600">
                Educational sessions designed to teach you the fundamentals and advanced techniques of wellness practices.
              </p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-earth-green rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-white font-bold text-xl">S</span>
              </div>
              <h3 className="font-heading font-bold text-xl text-earth-green mb-4">
                Social Events
              </h3>
              <p className="text-gray-600">
                Community-focused sessions where you can connect with like-minded wellness enthusiasts.
              </p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-burnt-orange rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-white font-bold text-xl">R</span>
              </div>
              <h3 className="font-heading font-bold text-xl text-earth-green mb-4">
                Retreats
              </h3>
              <p className="text-gray-600">
                Extended wellness experiences combining multiple therapies for a comprehensive health boost.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-earth-green">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div>
            <h2 className="font-heading font-bold text-3xl md:text-4xl text-white mb-6">
              Want to Host a Private Event?
            </h2>
            <p className="text-white/90 text-lg mb-8 max-w-2xl mx-auto">
              We offer private bookings for groups, corporate events, and special occasions. 
              Create a unique wellness experience for your team or celebration.
            </p>
            <a
              href="/contact"
              className="inline-flex items-center bg-white text-earth-green px-8 py-4 rounded-full font-bold text-lg hover:bg-burnt-orange hover:text-white transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              Inquire About Private Events
              <ArrowRight className="ml-2" />
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
