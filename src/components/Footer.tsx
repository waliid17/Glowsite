import React from 'react';
import { motion } from 'framer-motion';
import { Heart, Mail, Phone, MapPin, Twitter, Facebook, Instagram, Linkedin } from 'lucide-react';

const Footer = () => {
  const socialLinks = [
    { icon: Twitter, href: '#', label: 'Twitter' },
    { icon: Facebook, href: '#', label: 'Facebook' },
    { icon: Instagram, href: 'https://www.instagram.com/glowsite.agency', label: 'Instagram' },
    { icon: Linkedin, href: '#', label: 'LinkedIn' }
  ];

  const quickLinks = [
    { name: 'À Propos', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Portfolio', href: '#portfolio' },
    { name: 'Contact', href: '#contact' }
  ];

  const services = [
    'Développement de Sites Web Personnalisés',
    'Solutions E-commerce',
    'Design Mobile-First',
    'Design UI/UX',
    'Applications Web',
    'Optimisation de Sites Web'
  ];

  return (
    <footer className="bg-gray-900 text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Company Info */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            <motion.h3
              whileHover={{ scale: 1.05 }}
              className="text-2xl font-bold"
            >
              Glow<span className="text-blue-400">Site</span>
            </motion.h3>
            <p className="text-gray-300 leading-relaxed">
              Nous créons des sites web époustouflants qui captivent, engagent et convertissent. 
              Votre transformation numérique commence ici.
            </p>
            
            {/* Contact Info */}
            <div className="space-y-2">
              <div className="flex items-center text-gray-300">
                <Mail size={16} className="mr-2 text-blue-400" />
                glowsite.contact@gmail.com
              </div>
              <div className="flex items-center text-gray-300">
                <Phone size={16} className="mr-2 text-blue-400" />
                0540363847
              </div>
              <div className="flex items-center text-gray-300">
                <MapPin size={16} className="mr-2 text-blue-400" />
                Algérie
              </div>
            </div>

            {/* Social Links */}
            <div className="flex space-x-4 pt-4">
              {socialLinks.map((social, index) => {
                const Icon = social.icon;
                return (
                  <motion.a
                    key={index}
                    href={social.href}
                    whileHover={{ scale: 1.2, y: -2 }}
                    whileTap={{ scale: 0.9 }}
                    className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-blue-600 transition-colors"
                    aria-label={social.label}
                  >
                    <Icon size={18} />
                  </motion.a>
                );
              })}
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <h4 className="text-lg font-semibold mb-6">Liens Rapides</h4>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <motion.a
                    href={link.href}
                    whileHover={{ x: 5 }}
                    className="text-gray-300 hover:text-white transition-colors flex items-center"
                  >
                    <span className="w-2 h-2 bg-blue-400 rounded-full mr-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                    {link.name}
                  </motion.a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Services */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h4 className="text-lg font-semibold mb-6">Nos Services</h4>
            <ul className="space-y-3">
              {services.slice(0, 6).map((service, index) => (
                <li key={index} className="text-gray-300 text-sm">
                  {service}
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Newsletter */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <h4 className="text-lg font-semibold mb-6">Obtenez une Démo Gratuite</h4>
            <p className="text-gray-300 mb-4 text-sm">
              Prêt à voir votre site web prendre vie ? Obtenez votre démo gratuite aujourd'hui !
            </p>
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="w-full py-3 bg-white text-blue-600 rounded-lg font-semibold hover:shadow-lg transition-all inline-block text-center hover:bg-blue-50"
            >
              Commencer Maintenant
            </motion.a>
            
            <div className="mt-6 p-4 bg-gray-800 rounded-lg">
              <h5 className="font-semibold text-sm mb-2">💡 Démo Gratuite Inclut :</h5>
              <ul className="text-xs text-gray-300 space-y-1">
                <li>• Maquette de design personnalisée</li>
                <li>• Consultation technique</li>
                <li>• Aucun engagement requis</li>
                <li>• Livraison en 48 heures</li>
              </ul>
            </div>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="border-t border-gray-800 pt-8"
        >
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-gray-300 text-sm mb-4 md:mb-0">
              © 2025 Agence GlowSite. Tous droits réservés.
            </div>
            
            <div className="flex items-center text-gray-300 text-sm">
              Fait avec <Heart className="text-red-500 mx-1" size={16} /> pour des entreprises incroyables
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;