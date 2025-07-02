import { useState, useEffect } from 'react';
import { Check, Star, Tv, Film } from 'lucide-react';

export default function PricingSection() {
  const [isVisible, setIsVisible] = useState(false);

  const packs = [
    {
      name: "Iron Pro",
      price: "49,90",
      color: "orange",
      features: ["3900 chaines", "5700 films"]
    },
    {
      name: "King 365",
      price: "59,90",
      color: "red",
      features: ["5200 chaines", "9700 films"]
    },
    {
      name: "Gold Full 4K TV",
      price: "69,90",
      color: "yellow",
      features: ["7300 chaines", "11500 films"]
    }
  ];

  const getColorClasses = (color) => {
    const colorMap = {
      orange: {
        bg: 'from-orange-500 to-orange-600',
        hover: 'hover:from-orange-600 hover:to-orange-700',
        border: 'border-orange-500',
        text: 'text-orange-400',
        glow: 'shadow-orange-500/25'
      },
      red: {
        bg: 'from-red-500 to-red-600',
        hover: 'hover:from-red-600 hover:to-red-700',
        border: 'border-red-500',
        text: 'text-red-400',
        glow: 'shadow-red-500/25'
      },
      yellow: {
        bg: 'from-yellow-500 to-yellow-600',
        hover: 'hover:from-yellow-600 hover:to-yellow-700',
        border: 'border-yellow-500',
        text: 'text-yellow-400',
        glow: 'shadow-yellow-500/25'
      }
    };
    return colorMap[color] || colorMap.red;
  };

  // Intersection Observer for animations
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.target.id === 'pricing-content') {
            setIsVisible(entry.isIntersecting);
          }
        });
      },
      { threshold: 0.1 }
    );

    const element = document.getElementById('pricing-content');
    if (element) observer.observe(element);

    return () => observer.disconnect();
  }, []);

  return (
    <section id="pricing" className="py-20 bg-gradient-to-b from-gray-900 to-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div 
          id="pricing-content"
          className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
        >
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-red-400 to-purple-400 bg-clip-text text-transparent">
              Choose Your Plan
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Select the perfect package for your entertainment needs. All plans include premium streaming quality and 24/7 support.
            </p>
          </div>

          {/* Pricing Cards */}
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {packs.map((pack, index) => {
              const colors = getColorClasses(pack.color);
              const isPopular = pack.name === "King 365";
              
              return (
                <div 
                  key={index}
                  className={`relative bg-gray-800/50 backdrop-blur-sm rounded-2xl p-8 border-2 transition-all duration-500 hover:scale-105 hover:bg-gray-800/70 ${colors.border} ${colors.glow} hover:shadow-2xl ${
                    isPopular ? 'ring-2 ring-red-500 ring-opacity-50' : ''
                  }`}
                  style={{
                    animationDelay: `${index * 200}ms`
                  }}
                >
                  {/* Popular Badge */}
                  {isPopular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <div className="bg-gradient-to-r from-red-500 to-red-600 text-white px-6 py-2 rounded-full text-sm font-semibold flex items-center space-x-1">
                        <Star className="h-4 w-4 fill-current" />
                        <span>Most Popular</span>
                      </div>
                    </div>
                  )}

                  {/* Plan Name */}
                  <div className="text-center mb-8">
                    <h3 className="text-2xl font-bold text-white mb-2">{pack.name}</h3>
                    <div className="flex items-center justify-center">
                      <span className={`text-5xl font-bold ${colors.text}`}>{pack.price}</span>
                      <span className="text-gray-400 ml-2">/12 mois</span>
                    </div>
                  </div>

                  {/* Features */}
                  <div className="space-y-4 mb-8">
                    {pack.features.map((feature, featureIndex) => {
                      const isChannels = feature.includes('chaines');
                      const Icon = isChannels ? Tv : Film;
                      
                      return (
                        <div key={featureIndex} className="flex items-center space-x-3">
                          <div className={`w-8 h-8 rounded-full bg-gradient-to-r ${colors.bg} flex items-center justify-center flex-shrink-0`}>
                            <Icon className="h-4 w-4 text-white" />
                          </div>
                          <span className="text-gray-300 font-medium">{feature}</span>
                        </div>
                      );
                    })}
                    
                    {/* Additional features */}
                    <div className="flex items-center space-x-3">
                      <div className={`w-8 h-8 rounded-full bg-gradient-to-r ${colors.bg} flex items-center justify-center flex-shrink-0`}>
                        <Check className="h-4 w-4 text-white" />
                      </div>
                      <span className="text-gray-300 font-medium">Streaming 4K Ultra HD</span>
                    </div>
                    
                    <div className="flex items-center space-x-3">
                      <div className={`w-8 h-8 rounded-full bg-gradient-to-r ${colors.bg} flex items-center justify-center flex-shrink-0`}>
                        <Check className="h-4 w-4 text-white" />
                      </div>
                      <span className="text-gray-300 font-medium">Support 24/7</span>
                    </div>
                    
                    <div className="flex items-center space-x-3">
                      <div className={`w-8 h-8 rounded-full bg-gradient-to-r ${colors.bg} flex items-center justify-center flex-shrink-0`}>
                        <Check className="h-4 w-4 text-white" />
                      </div>
                      <span className="text-gray-300 font-medium">Accès multi-appareils</span>
                    </div>
                  </div>

                  {/* CTA Button */}
                  <button 
                    className={`w-full py-4 px-6 bg-gradient-to-r ${colors.bg} ${colors.hover} text-white font-semibold rounded-xl transition-all duration-300 transform hover:scale-105 ${colors.glow} hover:shadow-xl`}
                    onClick={() => alert(`Vous avez sélectionné le plan ${pack.name} pour ${pack.price}€/12 mois`)}
                  >
                    Choisir ce plan
                  </button>

                  {/* Decorative elements */}
                  <div className="absolute top-4 right-4 opacity-10">
                    <div className={`w-16 h-16 rounded-full bg-gradient-to-br ${colors.bg}`}></div>
                  </div>
                  <div className="absolute bottom-4 left-4 opacity-5">
                    <div className={`w-12 h-12 rounded-full bg-gradient-to-br ${colors.bg}`}></div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Bottom CTA */}
          <div className="text-center mt-12">
            <p className="text-gray-400 mb-4">
              Tous les plans incluent une garantie de remboursement de 30 jours
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-sm text-gray-500">
              <span>✓ Sans engagement</span>
              <span>✓ Annulation facile</span>
              <span>✓ Mise à jour automatique</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}