import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Award, Users, Lightbulb, Zap } from 'lucide-react';

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const features = [
    {
      icon: Award,
      title: 'Design Professionnel',
      description: 'Sites web élégants et modernes qui reflètent parfaitement l\'identité de votre marque.'
    },
    {
      icon: Zap,
      title: 'Navigation Intuitive',
      description: 'Vos clientes trouvent facilement vos produits et passent commande en quelques clics.'
    },
    {
      icon: Users,
      title: 'Gestion Simplifiée',
      description: 'Gérez vos produits, commandes et clients depuis un tableau de bord simple et efficace.'
    },
    {
      icon: Lightbulb,
      title: 'Aperçu Personnalisé',
      description: 'Recevez une démo gratuite personnalisée pour voir votre futur site avant de décider.'
    }
  ];

  return (
    <section id="about" className="py-20 bg-white w-full overflow-x-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Pourquoi Choisir <span className="text-blue-600">GlowSite</span> ?
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Spécialisés dans la création de sites web modernes, élégants et performants pour les marques et boutiques en ligne. 
            Nous transformons vos idées en boutiques numériques qui vendent 24h/24.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                whileHover={{ y: -10, scale: 1.02 }}
                className="group bg-white p-6 sm:p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100"
              >
                <motion.div
                  whileHover={{ rotate: 360, scale: 1.1 }}
                  transition={{ duration: 0.6 }}
                  className="w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center mb-4 sm:mb-6 mx-auto group-hover:shadow-lg"
                >
                  <Icon className="text-white w-6 h-6 sm:w-8 sm:h-8" />
                </motion.div>

                <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-3 sm:mb-4 text-center">
                  {feature.title}
                </h3>
                <p className="text-gray-600 text-center leading-relaxed text-sm sm:text-base">
                  {feature.description}
                </p>
              </motion.div>
            );
          })}
        </div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-16 sm:mt-20 bg-gradient-to-r from-blue-500 to-blue-600 rounded-3xl p-8 sm:p-12 text-center text-white"
        >
          <h3 className="text-2xl sm:text-3xl font-bold mb-6 sm:mb-8">Notre Impact en Chiffres</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-8">
            {[
              { number: '100+', label: 'Boutiques Créées' },
              { number: '98%', label: 'Clientes Satisfaites' },
              { number: '50+', label: 'Marques Accompagnées' },
              { number: '3+', label: 'Années d\'Expérience' }
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ scale: 0 }}
                animate={isInView ? { scale: 1 } : { scale: 0 }}
                transition={{ duration: 0.5, delay: 0.8 + index * 0.1 }}
                className="text-center"
              >
                <div className="text-2xl sm:text-4xl font-bold mb-1 sm:mb-2">{stat.number}</div>
                <div className="text-blue-100 text-sm sm:text-base">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;