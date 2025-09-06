import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Globe, Smartphone, ShoppingCart, Palette, Code, Rocket, Server } from 'lucide-react';

const Services = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const services = [
    {
      icon: Globe,
      title: 'Boutique en Ligne Complète',
      description: 'Sites e-commerce modernes où vos clientes peuvent découvrir et acheter vos produits 24h/24.',
      features: ['Catalogue Produits', 'Panier & Paiement', 'Gestion Commandes', 'Mobile Optimisé']
    },
          {
        icon: Server,
        title: 'Hébergement & Maintenance',
        description: 'Hébergement sécurisé et rapide avec maintenance continue pour garantir les performances optimales de votre site.',
        features: ['Hébergement Sécurisé', 'Maintenance Continue', 'Sauvegardes Automatiques', 'Support Technique']
      },
          {
        icon: Smartphone,
        title: 'Design Responsive Mobile',
        description: 'Vos clientes achètent facilement depuis leur téléphone avec une expérience fluide et intuitive.',
        features: ['Navigation Tactile', 'Achat en 1-Clic', 'Paiement Mobile', 'Notifications Push']
      },
    {
      icon: Palette,
      title: 'Design de Marque',
      description: 'Identité visuelle et design qui reflètent parfaitement votre marque et attirent vos clientes.',
      features: ['Identité Visuelle', 'Design Personnalisé', 'Charte Graphique', 'Logo & Branding']
    },
    {
      icon: Code,
      title: 'Système de Gestion Avancé',
      description: 'Tableaux de bord complets pour gérer vos produits, commandes, clients et analytics en temps réel.',
      features: ['Gestion Produits', 'Suivi Commandes', 'Base Clients', 'Analytics Temps Réel']
    },
    {
      icon: Rocket,
      title: 'Optimisation des Ventes',
      description: 'Amélioration des performances, SEO et taux de conversion pour maximiser vos ventes en ligne.',
      features: ['Vitesse de Chargement', 'SEO E-commerce', 'Conversion Optimisée', 'Tests A/B']
    }
  ];

  return (
    <section id="services" className="py-20 bg-gray-50 w-full overflow-x-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Nos <span className="text-blue-600">Services</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Développez votre entreprise en ligne avec nous. Nous créons des solutions web sur mesure 
            qui transforment vos visiteurs en clients fidèles.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                whileHover={{ y: -10 }}
                className="group bg-white rounded-2xl p-6 sm:p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 relative overflow-hidden"
              >
                {/* Gradient Background on Hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-blue-600/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                
                <motion.div
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  transition={{ duration: 0.3 }}
                  className="w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center mb-4 sm:mb-6 relative z-10"
                >
                  <Icon className="text-white w-6 h-6 sm:w-8 sm:h-8" />
                </motion.div>

                <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-3 sm:mb-4 relative z-10">
                  {service.title}
                </h3>
                
                <p className="text-gray-600 mb-4 sm:mb-6 leading-relaxed relative z-10 text-sm sm:text-base">
                  {service.description}
                </p>

                <div className="mb-4 sm:mb-6 relative z-10">
                  <ul className="space-y-1 sm:space-y-2">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-xs sm:text-sm text-gray-600">
                        <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-green-500 rounded-full mr-2 sm:mr-3 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                <motion.a
                  href="#contact"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-full py-2.5 sm:py-3 bg-gradient-to-r from-blue-500 to-blue-600 text-white rounded-lg font-semibold hover:shadow-lg transition-all relative z-10 text-sm sm:text-base flex items-center justify-center"
                >
                  En Savoir Plus
                </motion.a>
              </motion.div>
            );
          })}
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mt-16 text-center"
        >
          <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Souhaitez-vous recevoir un aperçu personnalisé ?
            </h3>
            <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
              Je vous propose une démo gratuite pour vous montrer à quoi pourrait ressembler votre futur site : 
              Design professionnel, Navigation intuitive, Gestion simplifiée des produits et commandes.
            </p>
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-gradient-to-r from-blue-500 to-blue-600 text-white rounded-full font-semibold text-lg hover:shadow-lg transition-all inline-block"
            >
              Recevoir Mon Aperçu Gratuit
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Services;