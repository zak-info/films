"use client"

import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Play, Star, Users, Film, Mail, Phone, MapPin, Facebook, Twitter, Instagram, Youtube } from 'lucide-react';
import PricingSection from '@/components/Packs';

export default function MovieLandingPage() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isVisible, setIsVisible] = useState({});

  // Sample movie data
  const movies = [
    {
      id: 1,
      title: "Quantum Rebellion",
      genre: "Sci-Fi Action",
      year: "2024",
      rating: 8.9,
      price: "$12.99",
      image: "/images/p1.jpg",
      description: "In a dystopian future, rebels fight against quantum overlords using advanced technology."
    },
    {
      id: 2,
      title: "Shadow Nexus",
      genre: "Thriller",
      year: "2024",
      rating: 9.2,
      price: "$14.99",
      image: "/images/p2.jpg",
      description: "A psychological thriller that blurs the lines between reality and digital consciousness."
    },
    {
      id: 3,
      title: "Eternal Horizon",
      genre: "Adventure",
      year: "2024",
      rating: 8.7,
      price: "$11.99",
      image: "/images/p3.jpg",
      description: "An epic journey across unknown worlds in search of the ultimate truth."
    },
    {
      id: 4,
      title: "Neon Dreams",
      genre: "Cyberpunk",
      year: "2024",
      rating: 9.0,
      price: "$13.99",
      image: "/images/p4.jpg",
      description: "Navigate through a neon-lit cyberpunk world where dreams become reality."
    }
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % movies.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + movies.length) % movies.length);
  };

  // Auto-slide functionality
  useEffect(() => {
    const timer = setInterval(nextSlide, 5000);
    return () => clearInterval(timer);
  }, []);

  // Intersection Observer for animations
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          setIsVisible(prev => ({
            ...prev,
            [entry.target.id]: entry.isIntersecting
          }));
        });
      },
      { threshold: 0.1 }
    );

    const elements = document.querySelectorAll('[data-animate]');
    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <div className="bg-gray-900 text-white min-h-screen">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-gray-900/95 backdrop-blur-sm border-b border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-2">
              <Film className="h-8 w-8 text-red-500" />
              <span className="text-2xl font-bold bg-gradient-to-r from-red-500 to-purple-600 bg-clip-text text-transparent">
                Iron KingTV
              </span>
            </div>
            <div className="hidden md:flex space-x-8">
              <a href="#home" className="hover:text-red-400 transition-colors">Home</a>
              <a href="#about" className="hover:text-red-400 transition-colors">About</a>
              <a href="#movies" className="hover:text-red-400 transition-colors">Movies</a>
              <a href="#contact" className="hover:text-red-400 transition-colors">Contact</a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background with gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-purple-900/20 to-red-900/20"></div>
        
        {/* Animated background elements */}
        <div className="absolute inset-0">
          {[...Array(50)].map((_, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 bg-white rounded-full animate-pulse"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 3}s`,
                animationDuration: `${2 + Math.random() * 2}s`
              }}
            />
          ))}
        </div>

        <div className="relative z-10 text-center max-w-4xl mx-auto px-4">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-white via-red-200 to-purple-200 bg-clip-text text-transparent animate-pulse">
            PREMIUM MOVIES
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-gray-300 max-w-2xl mx-auto">
            Experience cinema like never before. Stream the latest blockbusters and timeless classics in stunning 4K quality.
          </p>
          <div className="space-y-4 sm:space-y-0 sm:space-x-4 sm:flex sm:justify-center">
            <button className="group relative px-8 py-4 bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-red-500/25">
              <div className="flex items-center space-x-2">
                <Play className="h-5 w-5" />
                <span>Start Watching Now</span>
              </div>
              <div className="absolute inset-0 bg-gradient-to-r from-red-400 to-red-600 rounded-lg opacity-0 group-hover:opacity-20 transition-opacity"></div>
            </button>
            <button className="px-8 py-4 border-2 border-gray-600 hover:border-red-500 rounded-lg font-semibold transition-all duration-300 hover:bg-red-500/10">
              Learn More
            </button>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-gray-400 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-gray-400 rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-gradient-to-b from-gray-900 to-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div 
            id="about-content"
            data-animate
            className={`transition-all duration-1000 ${isVisible['about-content'] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
          >
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-red-400 to-purple-400 bg-clip-text text-transparent">
                About Iron KingTV
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                We're revolutionizing the way you experience movies. With cutting-edge technology and an unparalleled collection of films, we bring the magic of cinema directly to your screen.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {[
                { icon: Film, title: "Premium Quality", desc: "4K Ultra HD streaming with Dolby Atmos sound for the ultimate viewing experience." },
                { icon: Users, title: "Global Community", desc: "Join millions of movie enthusiasts worldwide in our growing cinematic community." },
                { icon: Star, title: "Exclusive Content", desc: "Access to exclusive premieres and director's cuts not available anywhere else." }
              ].map((item, index) => (
                <div key={index} className="text-center group">
                  <div className="mx-auto w-16 h-16 bg-gradient-to-br from-red-500 to-purple-600 rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                    <item.icon className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold mb-4 text-white">{item.title}</h3>
                  <p className="text-gray-400">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Movies Section */}
      <PricingSection />
      <section id="movies" className="py-20 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div 
            id="movies-header"
            data-animate
            className={`text-center mb-16 transition-all duration-1000 ${isVisible['movies-header'] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-red-400 to-purple-400 bg-clip-text text-transparent">
              Featured Movies
            </h2>
            <p className="text-xl text-gray-300">Discover our handpicked collection of cinematic masterpieces</p>
          </div>

          {/* Movie Slider */}
          <div className="relative">
            <div className="overflow-hidden rounded-2xl">
              <div 
                className="flex transition-transform duration-500 ease-in-out"
                style={{ transform: `translateX(-${currentSlide * 100}%)` }}
              >
                {movies.map((movie, index) => (
                  <div key={movie.id} className="w-full flex-shrink-0">
                    <div className="grid md:grid-cols-2 gap-8 items-center bg-gradient-to-r from-gray-800 to-gray-700 p-8 md:p-12">
                      <div className="relative group">
                        <img 
                          src={movie.image} 
                          alt={movie.title}
                          className="w-full max-w-md mx-auto rounded-lg shadow-2xl group-hover:scale-105 transition-transform duration-300"
                        />
                        <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg flex items-center justify-center">
                          <Play className="h-16 w-16 text-white" />
                        </div>
                      </div>
                      <div className="text-center md:text-left">
                        <div className="flex items-center justify-center md:justify-start space-x-2 mb-4">
                          <Star className="h-5 w-5 text-yellow-400 fill-current" />
                          <span className="text-yellow-400 font-semibold">{movie.rating}</span>
                          <span className="text-gray-400">• {movie.year}</span>
                        </div>
                        <h3 className="text-3xl md:text-4xl font-bold mb-2 text-white">{movie.title}</h3>
                        <p className="text-red-400 font-semibold mb-4">{movie.genre}</p>
                        <p className="text-gray-300 mb-6 text-lg">{movie.description}</p>
                        <div className="flex items-center justify-center md:justify-start space-x-4">
                          {/* <span className="text-2xl font-bold text-green-400">{movie.price}</span> */}
                          <button className="px-6 py-3 bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105">
                            Discover
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Navigation buttons */}
            <button 
              onClick={prevSlide}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black/50 hover:bg-black/70 rounded-full p-3 transition-all duration-300"
            >
              <ChevronLeft className="h-6 w-6" />
            </button>
            <button 
              onClick={nextSlide}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black/50 hover:bg-black/70 rounded-full p-3 transition-all duration-300"
            >
              <ChevronRight className="h-6 w-6" />
            </button>

            {/* Dots indicator */}
            <div className="flex justify-center mt-6 space-x-2">
              {movies.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === currentSlide ? 'bg-red-500 w-8' : 'bg-gray-600 hover:bg-gray-500'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-gradient-to-b from-gray-800 to-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div 
            id="contact-content"
            data-animate
            className={`transition-all duration-1000 ${isVisible['contact-content'] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
          >
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-red-400 to-purple-400 bg-clip-text text-transparent">
                Get In Touch
              </h2>
              <p className="text-xl text-gray-300">Have questions? We'd love to hear from you.</p>
            </div>

            <div className="grid md:grid-cols-2 gap-12">
              <div>
                <h3 className="text-2xl font-semibold mb-8 text-white">Contact Information</h3>
                <div className="space-y-6">
                  {[
                    { icon: Mail, label: "Email", value: "hello@Iron KingTV.com" },
                    { icon: Phone, label: "Phone", value: "+1 (555) 123-4567" },
                    { icon: MapPin, label: "Address", value: "123 Cinema Street, Movie City, MC 12345" }
                  ].map((item, index) => (
                    <div key={index} className="flex items-center space-x-4">
                      <div className="w-12 h-12 bg-gradient-to-br from-red-500 to-purple-600 rounded-full flex items-center justify-center">
                        <item.icon className="h-6 w-6 text-white" />
                      </div>
                      <div>
                        <p className="text-gray-400">{item.label}</p>
                        <p className="text-white font-semibold">{item.value}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <div className="space-y-6">
                  <div>
                    <input 
                      type="text" 
                      placeholder="Your Name"
                      className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:border-red-500 focus:ring-1 focus:ring-red-500 outline-none transition-all duration-300"
                    />
                  </div>
                  <div>
                    <input 
                      type="email" 
                      placeholder="Your Email"
                      className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:border-red-500 focus:ring-1 focus:ring-red-500 outline-none transition-all duration-300"
                    />
                  </div>
                  <div>
                    <textarea 
                      rows={4}
                      placeholder="Your Message"
                      className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:border-red-500 focus:ring-1 focus:ring-red-500 outline-none transition-all duration-300 resize-none"
                    />
                  </div>
                  <button 
                    onClick={() => alert('Message sent! We\'ll get back to you soon.')}
                    className="w-full px-6 py-3 bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105"
                  >
                    Send Message
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 border-t border-gray-800 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="col-span-2">
              <div className="flex items-center space-x-2 mb-4">
                <Film className="h-8 w-8 text-red-500" />
                <span className="text-2xl font-bold bg-gradient-to-r from-red-500 to-purple-600 bg-clip-text text-transparent">
                  Iron KingTV
                </span>
              </div>
              <p className="text-gray-400 mb-6 max-w-md">
                Your ultimate destination for premium movie streaming. Experience cinema like never before with our cutting-edge platform.
              </p>
              <div className="flex space-x-4">
                {[Facebook, Twitter, Instagram, Youtube].map((Icon, index) => (
                  <button key={index} className="w-10 h-10 bg-gray-800 hover:bg-red-600 rounded-full flex items-center justify-center transition-colors duration-300">
                    <Icon className="h-5 w-5" />
                  </button>
                ))}
              </div>
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-4 text-white">Quick Links</h4>
              <ul className="space-y-2">
                {['Home', 'Movies', 'TV Shows', 'Pricing', 'About Us'].map((link, index) => (
                  <li key={index}>
                    <a href="#" className="text-gray-400 hover:text-red-400 transition-colors duration-300">{link}</a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-4 text-white">Support</h4>
              <ul className="space-y-2">
                {['Help Center', 'Contact Us', 'Privacy Policy', 'Terms of Service', 'FAQ'].map((link, index) => (
                  <li key={index}>
                    <a href="#" className="text-gray-400 hover:text-red-400 transition-colors duration-300">{link}</a>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-12 pt-8 text-center">
            <p className="text-gray-400">
              © 2024 Iron KingTV. All rights reserved. Made with ❤️ for movie lovers.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}