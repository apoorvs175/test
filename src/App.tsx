import React, { useState, useEffect } from 'react';
import { Home, Phone, Mail, MapPin, Wifi, Coffee, Utensils, Users, Clock, Shield, Menu, X, Bed, Star, DollarSign } from 'lucide-react';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-[#f5f2ef]">
      {/* Navigation */}
      <nav className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white shadow-md' : 'bg-transparent'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16 items-center">
            <div className="flex items-center">
              <span className={`text-2xl font-bold ${isScrolled ? 'text-[#ff6b24]' : 'text-white'}`}>Clanza In</span>
            </div>
            <div className="hidden md:flex space-x-8">
              {['Home', 'Rooms', 'Amenities', 'Contact'].map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className={`${isScrolled ? 'text-gray-700' : 'text-white'} hover:text-[#4caf50] transition duration-300`}
                >
                  {item}
                </a>
              ))}
            </div>
            <div className="md:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className={`${isScrolled ? 'text-gray-700' : 'text-white'}`}
              >
                {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>
          </div>
        </div>
        
        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-white">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {['Home', 'Rooms', 'Amenities', 'Contact'].map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className="block px-3 py-2 text-gray-700 hover:text-[#4caf50]"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item}
                </a>
              ))}
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="home" className="relative h-screen bg-gradient-overlay flex items-center justify-center">
        <div className="text-center text-white z-10 animate-fade-in">
          <h1 className="text-5xl md:text-7xl font-bold mb-4 text-shadow">Welcome to Clanza Inn</h1>
          <p className="text-xl md:text-2xl mb-8 text-shadow">Your Home Away From Home</p>
          <div className="space-x-4">
            <button className="bg-[#ff6b24] text-white px-8 py-3 rounded-full font-semibold hover:bg-[#4caf50] transition duration-300">
              Book Now
            </button>
            <button className="bg-transparent border-2 border-white text-white px-8 py-3 rounded-full font-semibold hover:bg-white hover:text-[#ff6b24] transition duration-300">
              Take a Tour
            </button>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center mb-16">Why Choose Us?</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: <Shield className="w-12 h-12 text-[#4caf50]" />,
                title: 'Safe & Secure',
                description: '24/7 security and CCTV surveillance for your peace of mind'
              },
              {
                icon: <Wifi className="w-12 h-12 text-[#4caf50]" />,
                title: 'High-Speed WiFi',
                description: 'Stay connected with our premium internet service'
              },
              {
                icon: <Clock className="w-12 h-12 text-[#4caf50]" />,
                title: '24/7 Support',
                description: 'Our friendly staff is always here to assist you'
              }
            ].map((feature, index) => (
              <div key={index} className="text-center p-8 rounded-xl shadow-lg hover-scale bg-white">
                <div className="inline-block p-4 rounded-full bg-[#4caf50]/10 mb-6">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold mb-4">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Rooms */}
      <section id="rooms" className="py-20 bg-[#f5f2ef]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center mb-16">Our Rooms</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                type: 'Single Room',
                price: '49',
                image: 'https://images.pexels.com/photos/271618/pexels-photo-271618.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
                features: ['Single Bed', 'Private Bathroom', 'Work Desk']
              },
              {
                type: 'Double Room',
                price: '79',
                image: 'https://images.pexels.com/photos/271619/pexels-photo-271619.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
                features: ['Queen Bed', 'Private Bathroom', 'Balcony']
              },
              {
                type: 'Dormitory',
                price: '29',
                image: 'https://images.pexels.com/photos/271624/pexels-photo-271624.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
                features: ['Bunk Bed', 'Shared Bathroom', 'Lockers']
              }
            ].map((room, index) => (
              <div key={index} className="bg-white rounded-xl overflow-hidden shadow-lg hover-scale">
                <div 
                  className="h-64 bg-cover bg-center"
                  style={{ backgroundImage: `url(${room.image})` }}
                ></div>
                <div className="p-6">
                  <div className="flex justify-between items-center mb-4">
                    <h3 className="text-xl font-semibold">{room.type}</h3>
                    <div className="flex items-center">
                      <DollarSign className="w-4 h-4 text-[#4caf50]" />
                      <span className="font-bold text-xl">{room.price}</span>
                      <span className="text-gray-500">/night</span>
                    </div>
                  </div>
                  <ul className="space-y-2 mb-6">
                    {room.features.map((feature, i) => (
                      <li key={i} className="flex items-center">
                        <Star className="w-4 h-4 text-[#ff6b24] mr-2" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <button className="w-full bg-[#ff6b24] text-white px-6 py-3 rounded-full hover:bg-[#4caf50] transition duration-300">
                    Book Now
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Amenities */}
      <section id="amenities" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center mb-16">Our Amenities</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { icon: <Wifi className="w-8 h-8" />, name: 'Free Wi-Fi' },
              { icon: <Coffee className="w-8 h-8" />, name: 'Coffee Bar' },
              { icon: <Utensils className="w-8 h-8" />, name: 'Kitchen' },
              { icon: <Users className="w-8 h-8" />, name: 'Common Room' },
              { icon: <Bed className="w-8 h-8" />, name: 'Clean Bedding' },
              { icon: <Shield className="w-8 h-8" />, name: 'Lockers' },
              { icon: <Clock className="w-8 h-8" />, name: '24/7 Access' },
              { icon: <Home className="w-8 h-8" />, name: 'Laundry' }
            ].map((amenity, index) => (
              <div key={index} className="p-6 text-center rounded-xl shadow-lg hover-scale bg-white">
                <div className="inline-block p-4 rounded-full bg-[#4caf50]/10 mb-4">
                  <span className="text-[#4caf50]">{amenity.icon}</span>
                </div>
                <h3 className="font-semibold">{amenity.name}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="py-20 bg-[#f5f2ef]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center mb-16">Contact Us</h2>
          <div className="grid md:grid-cols-2 gap-12">
            <div className="space-y-8">
              <h3 className="text-2xl font-semibold mb-6">Get in Touch</h3>
              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <div className="p-3 rounded-full bg-[#4caf50]/10">
                    <MapPin className="w-6 h-6 text-[#4caf50]" />
                  </div>
                  <span>123 Hostel Street, City, Country</span>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="p-3 rounded-full bg-[#4caf50]/10">
                    <Phone className="w-6 h-6 text-[#4caf50]" />
                  </div>
                  <span>+1 234 567 890</span>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="p-3 rounded-full bg-[#4caf50]/10">
                    <Mail className="w-6 h-6 text-[#4caf50]" />
                  </div>
                  <span>info@clanzainn.com</span>
                </div>
              </div>
            </div>
            <form className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <input
                  type="text"
                  placeholder="Your Name"
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#4caf50] focus:border-transparent"
                />
                <input
                  type="email"
                  placeholder="Your Email"
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#4caf50] focus:border-transparent"
                />
              </div>
              <input
                type="text"
                placeholder="Subject"
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#4caf50] focus:border-transparent"
              />
              <textarea
                placeholder="Your Message"
                rows={4}
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#4caf50] focus:border-transparent"
              ></textarea>
              <button className="w-full bg-[#ff6b24] text-white px-8 py-3 rounded-full hover:bg-[#4caf50] transition duration-300">
                Send Message
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4">Clanza Inn</h3>
              <p className="text-gray-400">Your perfect home away from home. Experience comfort and community in our modern hostel.</p>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2">
                <li><a href="#home" className="text-gray-400 hover:text-white">Home</a></li>
                <li><a href="#rooms" className="text-gray-400 hover:text-white">Rooms</a></li>
                <li><a href="#amenities" className="text-gray-400 hover:text-white">Amenities</a></li>
                <li><a href="#contact" className="text-gray-400 hover:text-white">Contact</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Policies</h4>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-400 hover:text-white">Privacy Policy</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white">Terms of Service</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white">Cancellation Policy</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white">House Rules</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Newsletter</h4>
              <p className="text-gray-400 mb-4">Subscribe to get special offers and updates.</p>
              <div className="flex">
                <input
                  type="email"
                  placeholder="Your email"
                  className="flex-1 px-4 py-2 rounded-l-full focus:outline-none"
                />
                <button className="bg-[#ff6b24] px-6 py-2 rounded-r-full hover:bg-[#4caf50] transition duration-300">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-12 pt-8 text-center">
            <p>&copy; 2024 Clanza Inn. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;