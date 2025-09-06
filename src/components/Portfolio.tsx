import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { ExternalLink } from 'lucide-react';

const Portfolio = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  
  const projects = [
    {
      id: 1,
      title: 'SHEY\'S STORE',
      category: 'E-commerce',
      image: '/p1.mp4',
      description: 'Site e-commerce élégant pour boutique avec catalogue produits, panier et dashboard.',
      technologies: ['React', 'TypeScript', 'Tailwind CSS'],
      liveUrl: 'https://sheys-store.wuaze.com',
      githubUrl: '#'
    },
    {
      id: 2,
      title: 'SAMRAE DRESS',
      category: 'E-commerce',
      image: '/SAMRAE DRESS.mp4',
      description: 'Site e-commerce moderne pour boutique de vêtements avec catalogue élégant et expérience utilisateur optimisée.',
      technologies: ['React', 'TypeScript', 'Tailwind CSS'],
      liveUrl: 'https://samrae-dress.wuaze.com',
      githubUrl: '#'
    },
    {
      id: 3,
      title: 'MAGGIE FITWEAR',
      category: 'E-commerce',
      image: '/MAGGIE FITWEAR.mp4',
      description: 'Site e-commerce moderne pour boutique de vêtements de sport avec design responsive et expérience utilisateur optimisée.',
      technologies: ['React', 'TypeScript', 'Tailwind CSS'],
      liveUrl: 'https://maggie-fitwear.wuaze.com',
      githubUrl: '#'
    },
    {
      id: 4,
      title: 'LAYAL',
      category: 'E-commerce',
      image: '/LAYAL.mp4',
      description: 'Site e-commerce élégant pour boutique de mode avec interface moderne et expérience utilisateur exceptionnelle.',
      technologies: ['React', 'TypeScript', 'Tailwind CSS'],
      liveUrl: 'https://layal.free.nf',
      githubUrl: '#'
    },
    {
      id: 5,
      title: 'BEAM JOURNALS',
      category: 'E-commerce',
      image: '/BEAM JOURNALS.mp4',
      description: 'Plateforme e-commerce innovante pour boutique de journaux et accessoires avec design moderne et fonctionnalités avancées.',
      technologies: ['React', 'TypeScript', 'Tailwind CSS'],
      liveUrl: 'https://beam-journals.wuaze.com',
      githubUrl: '#'
    }
  ];

  const filteredProjects = projects;

  return (
    <section id="portfolio" className="py-20 bg-white w-full overflow-x-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Nos <span className="text-blue-600">Projets</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Explorez nos projets récents et voyez comment nous avons aidé les entreprises à transformer leur présence numérique.
          </p>
        </motion.div>


        {/* Projects Grid */}
        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {filteredProjects.map((project, index) => {
            const cardRef = useRef(null);
            const cardInView = useInView(cardRef, { 
              once: true, 
              margin: "-100px 0px",
              amount: 0.3
            });
            
            return (
            <motion.div
              key={project.id}
              ref={cardRef}
              layout
              initial={{ opacity: 0, y: 80, scale: 0.9 }}
              animate={cardInView ? { 
                opacity: 1, 
                y: 0, 
                scale: 1 
              } : { 
                opacity: 0, 
                y: 80, 
                scale: 0.9 
              }}
              transition={{ 
                duration: 0.8, 
                delay: index * 0.15,
                ease: [0.25, 0.46, 0.45, 0.94]
              }}
              whileHover={{ 
                y: -15,
                scale: 1.02,
                transition: { duration: 0.3 }
              }}
              className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 relative h-[800px] md:h-80 lg:h-80"
            >
              {/* Fallback background gradient */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500"></div>
              
              {project.id <= 5 ? (
                <motion.video
                  initial={{ scale: 1.1, opacity: 0 }}
                  animate={cardInView ? { scale: 1, opacity: 1 } : { scale: 1.1, opacity: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.15 + 0.2 }}
                  whileHover={{ scale: 1.05 }}
                  src={project.image}
                  className="w-full h-full object-cover"
                  autoPlay
                  loop
                  muted
                  playsInline
                  onError={(e) => {
                    console.error(`Error loading video: ${project.image}`, e);
                    // Fallback to a placeholder or hide the video
                    e.currentTarget.style.display = 'none';
                  }}
                  onLoadStart={() => console.log(`Loading video: ${project.image}`)}
                />
              ) : (
                <motion.img
                  initial={{ scale: 1.1, opacity: 0 }}
                  animate={cardInView ? { scale: 1, opacity: 1 } : { scale: 1.1, opacity: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.15 + 0.2 }}
                  whileHover={{ scale: 1.05 }}
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    console.error(`Error loading image: ${project.image}`, e);
                    e.currentTarget.style.display = 'none';
                  }}
                />
              )}
              
              {/* Simple Overlay Actions */}
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300" />
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <motion.a
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  href={project.liveUrl}
                  className="p-3 bg-white/90 backdrop-blur-sm rounded-full text-gray-800 hover:bg-white transition-colors shadow-lg"
                >
                  <ExternalLink size={20} />
                </motion.a>
              </div>

              {/* Content Overlay */}
              <motion.div 
                initial={{ y: 50, opacity: 0 }}
                animate={cardInView ? { y: 0, opacity: 1 } : { y: 50, opacity: 0 }}
                transition={{ duration: 0.6, delay: index * 0.15 + 0.4 }}
                className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent p-6"
              >
                <div className="flex items-center justify-between mb-3">
                  <h3 className="text-xl font-bold text-white">
                    {project.title}
                  </h3>
                  <span className="px-3 py-1 bg-blue-500/90 text-white rounded-full text-xs font-semibold">
                    {project.category}
                  </span>
                </div>
                
                <p className="text-white/90 mb-4 leading-relaxed text-sm">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-2 py-1 bg-white/20 text-white rounded text-xs"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </motion.div>
            </motion.div>
            );
          })}
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-16 text-center"
        >
          <div className="bg-gradient-to-r from-blue-500 to-blue-600 rounded-2xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">
              Prêt à Commencer Votre Projet ?
            </h3>
            <p className="mb-6 max-w-2xl mx-auto">
              Discutons de votre vision et créons quelque chose d'incroyable ensemble. Obtenez votre démo gratuite dès aujourd'hui !
            </p>
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-white text-blue-600 rounded-full font-semibold text-lg hover:shadow-lg transition-all inline-block"
            >
              Obtenez Votre Démo Gratuite Maintenant
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Portfolio;