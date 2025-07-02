'use client'
import React from 'react';
import { motion } from 'framer-motion';
import { ChevronRight } from 'lucide-react';

export default function IronKingTV() {
  return (
    <div className="min-h-screen bg-black relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900/80 via-black/90 to-gray-800/80"></div>

      {/* Header */}
      <motion.header
        className="relative z-10 flex flex-col md:flex-row items-center justify-between px-4 sm:px-8 md:px-12 py-4 gap-4 md:gap-0"
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6 }}
      >
        <div className="text-white text-xl font-bold tracking-wide">
          IRON KING<span className="text-red-500">TV</span>
        </div>
        <nav className="flex flex-wrap justify-center gap-4 md:gap-8 text-sm text-gray-300">
          {['Accueil', 'Nos forfaits', 'Plateformes', 'Tournois', 'Contact'].map((link, i) => (
            <motion.a
              key={i}
              href="#"
              className="hover:text-white transition-colors"
              whileHover={{ scale: 1.1 }}
            >
              {link}
            </motion.a>
          ))}
        </nav>
      </motion.header>

      {/* Main Content */}
      <div className="relative z-10 px-4 sm:px-8 md:px-12">

        {/* Hero Section */}
        <motion.section
          className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center min-h-[600px] text-center md:text-left"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <motion.div
            className="space-y-8"
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl sm:text-5xl md:text-7xl font-black text-white leading-tight tracking-tight">
              IRON KINGTV<br />
              ABONNEMENTS<br />
              <span className="text-white">OFFICIELS</span>
            </h1>
            <p className="text-base sm:text-lg text-gray-300 leading-relaxed max-w-md mx-auto md:mx-0">
              Sans bugs ni coupures, large choix de films et series ,<br />
              mises á jour quofidiennes
            </p>
          </motion.div>
          <motion.div
            className="flex justify-center"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <img src="https://i.pinimg.com/474x/20/48/87/2048874a8573fb83acc085dbe9284d42.jpg" alt="Gaming Hero" className="rounded-lg shadow-xl" />
          </motion.div>
        </motion.section>

        {/* Pricing Section */}
        <section className="py-16 space-y-12">
          <motion.div
            className="text-center md:text-left"
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              Pourquoi choisir IRON KINGTV ?
            </h2>
            <p className="text-lg text-gray-300">
              Obtenez le meilleur rapport qualite-prix pour votre abonnement de streaming
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
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
                features: ["5200 chaines ", "9700 films"]
              },
              {
                name: "Gold Full 4K TV",
                price: "69,90",
                color: "yellow",
                features: ["7300 chaines ", "11500 films"]
              }
            ].map((plan, i) => (
              <motion.div
                key={i}
                className={`bg-gradient-to-b from-${plan.color}-500 to-${plan.color}-600 rounded-xl p-8 text-white relative hover:scale-105 transition-transform`}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.2 }}
              >
                <div className="text-center space-y-6">
                  <h3 className="text-2xl font-bold">{plan.name}</h3>
                  <div>
                    <span className="text-5xl font-bold">{plan.price}</span>
                    <span className="text-lg font-medium"> /mois</span>
                  </div>
                  <div className="space-y-3 text-left">
                    {plan.features.map((f, j) => (
                      <div key={j} className="flex items-center space-x-3">
                        <div className={`w-2 h-2 bg-${plan.color}-200 rounded-full`}></div>
                        <span>{f}</span>
                      </div>
                    ))}
                  </div>
                  <button className={`w-full bg-${plan.color}-700 hover:bg-${plan.color}-800 py-3 rounded-lg font-semibold transition-colors`}>
                    Choisir
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Features Section */}
        <motion.section
          className="py-16"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <motion.div
              className="space-y-8 text-center md:text-left"
              initial={{ x: -50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl sm:text-4xl font-bold text-white">
                Famille & Divertissement
              </h2>
              <div className="space-y-4">
                {[
                  "Compatible PC, PS5, Xbox, Mobile",
                  "Serveurs optimisés pour le ping bas",
                  "Support technique dédié 24/7",
                ].map((text, i) => (
                  <div key={i} className="flex items-center justify-center md:justify-start space-x-3">
                    <div className="w-2 h-2 bg-yellow-500 rounded-full"></div>
                    <span className="text-gray-300">{text}</span>
                  </div>
                ))}
              </div>
              <button className="text-white hover:text-yellow-500 transition-colors font-semibold underline">
                En savoir plus
              </button>
            </motion.div>
            <motion.div
              className="flex justify-center md:justify-end"
              initial={{ scale: 0.8, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              <div className="w-72 sm:w-80 h-48 bg-yellow-100 rounded-lg shadow-2xl relative overflow-hidden">
                <img
                  src="https://wallpapercave.com/wp/wp11115633.jpg"
                  alt="Gaming Feature"
                  className="w-full h-full object-cover rounded-lg"
                />
              </div>
            </motion.div>
          </div>
        </motion.section>

        {/* Games Section */}
        <motion.section
          className="py-16"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="flex flex-col sm:flex-row items-center justify-between mb-8 gap-4">
            <h2 className="text-3xl sm:text-4xl font-bold text-white text-center sm:text-left">
              Films et séries à jour
            </h2>
            <ChevronRight className="w-8 h-8 text-white bg-gray-700 rounded-full p-1" />
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
            {[
              { name: "Movie 1", image: "/images/p1.jpg" },
              { name: "Movie 2", image: "/images/p2.jpg" },
              { name: "Movie 3", image: "/images/p3.jpg" },
              { name: "Movie 4", image: "/images/p4.jpg" },
              { name: "Movie 5", image: "/images/p5.jpg" },
            ].map((game, index) => (
              <motion.div
                key={index}
                className="aspect-[3/4] bg-gradient-to-b from-gray-700 to-gray-900 rounded-lg shadow-xl relative overflow-hidden hover:scale-105 transition-transform"
                whileHover={{ scale: 1.1 }}
              >
                <img
                  src={game.image}
                  alt={game.name}
                  className="absolute inset-0 w-full h-full object-cover opacity-80"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent"></div>
                <div className="absolute bottom-2 left-2 right-2 text-white text-sm font-semibold text-center">
                  {game.name}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.section>

      </div>

      {/* Footer */}
      <footer className="bg-black border-t border-gray-800 py-10 px-4 sm:px-8 md:px-12  text-sm text-white">
        <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-white text-lg font-bold mb-2">IRON KING<span className="text-red-500">TV</span></h3>
            <p className="text-gray-400">
              Streaming de qualité supérieure<br />
              pour toute la famille.
            </p>
          </div>
          <div>
            <h4 className="text-white font-semibold mb-2">Navigation</h4>
            <ul className="space-y-1">
              {['Accueil', 'Nos abonnements', 'Téléchargements', 'Revendeurs IPTV'].map((nav, i) => (
                <li key={i}><a href="#" className="hover:text-white">{nav}</a></li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="text-white font-semibold mb-2">Contact</h4>
            <p>Email : <a href="mailto:support@ironkingtv.com" className="hover:text-white">support@ironkingtv.com</a></p>
            <p>Téléphone : <span className="text-gray-300">+213 5xx xx xx xx</span></p>
          </div>
          <div>
            <h4 className="text-white font-semibold mb-2">Informations</h4>
            <ul className="space-y-1">
              {['CGU', 'Politique de confidentialité', 'Support'].map((info, i) => (
                <li key={i}><a href="#" className="hover:text-white">{info}</a></li>
              ))}
            </ul>
          </div>
        </div>
        <div className="mt-10 text-center text-white text-xs">
          © {new Date().getFullYear()} IRON KINGTV. Tous droits réservés.
        </div>
      </footer>

    </div>
  );
}

