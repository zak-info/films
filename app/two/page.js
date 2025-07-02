"use client"

import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Play, Star, Users, Film, Mail, Phone, MapPin, Facebook, Twitter, Instagram, Youtube } from 'lucide-react';
import PricingSection from '@/components/Packs';

export default function MovieLandingPage() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isVisible, setIsVisible] = useState({});

  // Données d'exemple des films
  const movies = [
    {
      id: 1,
      title: "Rébellion Quantique",
      genre: "Action Sci-Fi",
      year: "2024",
      rating: 8.9,
      price: "12,99€",
      image: "/images/p1.jpg",
      description: "Dans un futur dystopique, des rebelles luttent contre les seigneurs quantiques en utilisant une technologie avancée."
    },
    {
      id: 2,
      title: "Nexus des Ombres",
      genre: "Thriller",
      year: "2024",
      rating: 9.2,
      price: "14,99€",
      image: "/images/p2.jpg",
      description: "Un thriller psychologique qui brouille les frontières entre réalité et conscience numérique."
    },
    {
      id: 3,
      title: "Horizon Éternel",
      genre: "Aventure",
      year: "2024",
      rating: 8.7,
      price: "11,99€",
      image: "/images/p3.jpg",
      description: "Un voyage épique à travers des mondes inconnus à la recherche de la vérité ultime."
    },
    {
      id: 4,
      title: "Rêves Néon",
      genre: "Cyberpunk",
      year: "2024",
      rating: 9.0,
      price: "13,99€",
      image: "/images/p4.jpg",
      description: "Naviguez dans un monde cyberpunk éclairé au néon où les rêves deviennent réalité."
    }
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % movies.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + movies.length) % movies.length);
  };

  // Fonctionnalité de défilement automatique
  useEffect(() => {
    const timer = setInterval(nextSlide, 5000);
    return () => clearInterval(timer);
  }, []);

  // Intersection Observer pour les animations
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
              <a href="#home" className="hover:text-red-400 transition-colors">Accueil</a>
              <a href="#about" className="hover:text-red-400 transition-colors">À Propos</a>
              <a href="#movies" className="hover:text-red-400 transition-colors">Films</a>
              <a href="#contact" className="hover:text-red-400 transition-colors">Contact</a>
            </div>
          </div>
        </div>
      </nav>

      {/* Section Héro */}
      <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Arrière-plan avec superposition de dégradé */}
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-purple-900/20 to-red-900/20"></div>
        
        {/* Éléments d'arrière-plan animés */}
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
            FILMS PREMIUM
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-gray-300 max-w-2xl mx-auto">
            Vivez le cinéma comme jamais auparavant. Regardez les derniers blockbusters et les classiques intemporels en qualité 4K époustouflante.
          </p>
          <div className="space-y-4 sm:space-y-0 sm:space-x-4 sm:flex sm:justify-center">
            <button className="group relative px-8 py-4 bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-red-500/25">
              <div className="flex items-center space-x-2">
                <Play className="h-5 w-5" />
                <span>Commencer à Regarder</span>
              </div>
              <div className="absolute inset-0 bg-gradient-to-r from-red-400 to-red-600 rounded-lg opacity-0 group-hover:opacity-20 transition-opacity"></div>
            </button>
            <button className="px-8 py-4 border-2 border-gray-600 hover:border-red-500 rounded-lg font-semibold transition-all duration-300 hover:bg-red-500/10">
              En Savoir Plus
            </button>
          </div>
        </div>

        {/* Indicateur de défilement */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-gray-400 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-gray-400 rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </section>

      {/* Section À Propos */}
      <section id="about" className="py-20 bg-gradient-to-b from-gray-900 to-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div 
            id="about-content"
            data-animate
            className={`transition-all duration-1000 ${isVisible['about-content'] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
          >
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-red-400 to-purple-400 bg-clip-text text-transparent">
                À Propos d'Iron KingTV
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Nous révolutionnons votre façon de vivre le cinéma. Avec une technologie de pointe et une collection inégalée de films, nous apportons la magie du cinéma directement sur votre écran.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {[
                { icon: Film, title: "Qualité Premium", desc: "Streaming 4K Ultra HD avec son Dolby Atmos pour une expérience de visionnage ultime." },
                { icon: Users, title: "Communauté Mondiale", desc: "Rejoignez des millions de passionnés de cinéma du monde entier dans notre communauté cinématographique croissante." },
                { icon: Star, title: "Contenu Exclusif", desc: "Accès aux premières exclusives et aux versions du réalisateur non disponibles ailleurs." }
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

      {/* Section Tarifs */}
      
      {/* <section className="py-20 bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-red-400 to-purple-400 bg-clip-text text-transparent">
              Nos Forfaits
            </h2>
            <p className="text-xl text-gray-300">Choisissez le plan parfait pour votre expérience cinématographique</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-gray-700 p-8 rounded-xl border border-gray-600">
              <h3 className="text-2xl font-bold mb-4 text-white">Basique</h3>
              <div className="text-4xl font-bold mb-6 text-red-400">9,99€<span className="text-lg text-gray-400">/mois</span></div>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center"><span className="text-green-400 mr-2">✓</span> Streaming HD</li>
                <li className="flex items-center"><span className="text-green-400 mr-2">✓</span> 1 écran simultané</li>
                <li className="flex items-center"><span className="text-green-400 mr-2">✓</span> Catalogue de base</li>
              </ul>
              <button className="w-full py-3 bg-gray-600 hover:bg-red-600 rounded-lg transition-colors">Choisir ce Plan</button>
            </div>
            
            <div className="bg-gradient-to-br from-red-600 to-purple-700 p-8 rounded-xl border-2 border-red-400 relative">
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-red-500 text-white px-4 py-1 rounded-full text-sm font-semibold">
                Populaire
              </div>
              <h3 className="text-2xl font-bold mb-4 text-white">Premium</h3>
              <div className="text-4xl font-bold mb-6 text-white">19,99€<span className="text-lg text-gray-200">/mois</span></div>
              <ul className="space-y-3 mb-8 text-white">
                <li className="flex items-center"><span className="text-green-300 mr-2">✓</span> Streaming 4K Ultra HD</li>
                <li className="flex items-center"><span className="text-green-300 mr-2">✓</span> 4 écrans simultanés</li>
                <li className="flex items-center"><span className="text-green-300 mr-2">✓</span> Catalogue complet</li>
                <li className="flex items-center"><span className="text-green-300 mr-2">✓</span> Contenu exclusif</li>
              </ul>
              <button className="w-full py-3 bg-white text-red-600 hover:bg-gray-100 rounded-lg transition-colors font-semibold">Choisir ce Plan</button>
            </div>
            
            <div className="bg-gray-700 p-8 rounded-xl border border-gray-600">
              <h3 className="text-2xl font-bold mb-4 text-white">Famille</h3>
              <div className="text-4xl font-bold mb-6 text-red-400">29,99€<span className="text-lg text-gray-400">/mois</span></div>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center"><span className="text-green-400 mr-2">✓</span> Streaming 4K Ultra HD</li>
                <li className="flex items-center"><span className="text-green-400 mr-2">✓</span> 6 écrans simultanés</li>
                <li className="flex items-center"><span className="text-green-400 mr-2">✓</span> Profils illimités</li>
                <li className="flex items-center"><span className="text-green-400 mr-2">✓</span> Contrôle parental</li>
              </ul>
              <button className="w-full py-3 bg-gray-600 hover:bg-red-600 rounded-lg transition-colors">Choisir ce Plan</button>
            </div>
          </div>
        </div>
      </section> */}

      <PricingSection />

      {/* Section Films */}
      <section id="movies" className="py-20 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div 
            id="movies-header"
            data-animate
            className={`text-center mb-16 transition-all duration-1000 ${isVisible['movies-header'] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-red-400 to-purple-400 bg-clip-text text-transparent">
              Films en Vedette
            </h2>
            <p className="text-xl text-gray-300">Découvrez notre collection soigneusement sélectionnée de chefs-d'œuvre cinématographiques</p>
          </div>

          {/* Carrousel de Films */}
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
                          <button className="px-6 py-3 bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105">
                            Découvrir
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Boutons de navigation */}
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

            {/* Indicateur de points */}
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

      {/* Section Contact */}
      <section id="contact" className="py-20 bg-gradient-to-b from-gray-800 to-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div 
            id="contact-content"
            data-animate
            className={`transition-all duration-1000 ${isVisible['contact-content'] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
          >
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-red-400 to-purple-400 bg-clip-text text-transparent">
                Contactez-Nous
              </h2>
              <p className="text-xl text-gray-300">Vous avez des questions ? Nous serions ravis de vous entendre.</p>
            </div>

            <div className="grid md:grid-cols-2 gap-12">
              <div>
                <h3 className="text-2xl font-semibold mb-8 text-white">Informations de Contact</h3>
                <div className="space-y-6">
                  {[
                    { icon: Mail, label: "Email", value: "ironking13000@gmail.com" },
                    { icon: Phone, label: "Téléphone", value: "0611496777" },
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
                      placeholder="Votre Nom"
                      className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:border-red-500 focus:ring-1 focus:ring-red-500 outline-none transition-all duration-300"
                    />
                  </div>
                  <div>
                    <input 
                      type="email" 
                      placeholder="Votre Email"
                      className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:border-red-500 focus:ring-1 focus:ring-red-500 outline-none transition-all duration-300"
                    />
                  </div>
                  <div>
                    <textarea 
                      rows={4}
                      placeholder="Votre Message"
                      className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:border-red-500 focus:ring-1 focus:ring-red-500 outline-none transition-all duration-300 resize-none"
                    />
                  </div>
                  <button 
                    onClick={() => alert('Message envoyé ! Nous vous répondrons bientôt.')}
                    className="w-full px-6 py-3 bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105"
                  >
                    Envoyer le Message
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pied de page */}
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
                Votre destination ultime pour le streaming de films premium. Vivez le cinéma comme jamais auparavant avec notre plateforme de pointe.
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
              <h4 className="text-lg font-semibold mb-4 text-white">Liens Rapides</h4>
              <ul className="space-y-2">
                {['Accueil', 'Films', 'Séries TV', 'Tarifs', 'À Propos'].map((link, index) => (
                  <li key={index}>
                    <a href="#" className="text-gray-400 hover:text-red-400 transition-colors duration-300">{link}</a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-4 text-white">Support</h4>
              <ul className="space-y-2">
                {['Centre d\'Aide', 'Contactez-Nous', 'Politique de Confidentialité', 'Conditions d\'Utilisation', 'FAQ'].map((link, index) => (
                  <li key={index}>
                    <a href="#" className="text-gray-400 hover:text-red-400 transition-colors duration-300">{link}</a>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-12 pt-8 text-center">
            <p className="text-gray-400">
              © 2024 Iron KingTV. Tous droits réservés. Fait avec ❤️ pour les amoureux du cinéma.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}