import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Mail, Phone, MapPin, Send, Check, AlertCircle } from 'lucide-react';
import emailjs from '@emailjs/browser';
import { EMAILJS_CONFIG, EmailTemplateParams } from '../config/emailjs';

const Contact = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    service: '',
    message: '',
    needDemo: false
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError('');

    try {
      // Prepare email template parameters
      const templateParams: EmailTemplateParams = {
        from_name: formData.name,
        from_email: formData.phone, // Using phone field for email
        company: formData.company,
        instagram: formData.email, // Using email field for Instagram
        service: formData.service,
        message: formData.message,
        need_demo: formData.needDemo ? 'Oui' : 'Non',
        to_email: 'glowsite.contact@gmail.com'
      };

      // Debug: Log the parameters being sent
      console.log('EmailJS Config:', EMAILJS_CONFIG);
      console.log('Template Params:', templateParams);

      // Send email using EmailJS
      const result = await emailjs.send(
        EMAILJS_CONFIG.SERVICE_ID,
        EMAILJS_CONFIG.TEMPLATE_ID,
        templateParams,
        EMAILJS_CONFIG.PUBLIC_KEY
      );
      
      console.log('Email sent successfully:', result);

      setIsSubmitted(true);
      // Reset form after successful submission
      setFormData({
        name: '',
        email: '',
        company: '',
        phone: '',
        service: '',
        message: '',
        needDemo: false
      });
      
      // Reset success message after 5 seconds
      setTimeout(() => setIsSubmitted(false), 5000);
      
    } catch (error) {
      console.error('Error sending email:', error);
      
      // More specific error messages
      if (error instanceof Error) {
        if (error.message.includes('Invalid template')) {
          setError('Erreur de configuration du template. Vérifiez votre template EmailJS.');
        } else if (error.message.includes('Invalid service')) {
          setError('Erreur de configuration du service. Vérifiez votre service EmailJS.');
        } else if (error.message.includes('Invalid public key')) {
          setError('Erreur de clé publique. Vérifiez votre clé EmailJS.');
        } else {
          setError(`Erreur: ${error.message}`);
        }
      } else {
        setError('Une erreur est survenue lors de l\'envoi du message. Veuillez réessayer.');
      }
    } finally {
      setIsLoading(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? (e.target as HTMLInputElement).checked : value
    }));
  };

  const contactInfo = [
    {
      icon: Mail,
      title: 'Écrivez-nous',
      info: 'glowsite.contact@gmail.com',
      link: 'mailto:glowsite.contact@gmail.com'
    },
    {
      icon: Phone,
      title: 'Appelez-nous',
      info: '0540363847',
      link: 'tel:+213540363847'
    },
    {
      icon: MapPin,
      title: 'Visitez-nous',
      info: 'Algérie',
      link: '#'
    }
  ];

  return (
    <section id="contact" className="py-20 bg-gray-50 w-full overflow-x-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Obtenez Votre <span className="text-blue-600">Démo Gratuite</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            GlowSite Agency vous propose une démo gratuite pour vous montrer à quoi pourrait ressembler votre futur site web professionnel.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100"
          >
            <div className="mb-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Démo Gratuite
              </h3>
              <p className="text-gray-600">
                Pour vous montrer à quoi pourrait ressembler votre futur site : Design professionnel, Navigation intuitive, 
                Gestion simplifiée des produits et commandes. Remplissez le formulaire ci-dessous !
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <motion.div whileFocus={{ scale: 1.02 }}>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Nom Complet *
                  </label>
                  <input
                    type="text"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                    placeholder="Jean Dupont"
                  />
                </motion.div>

                <motion.div whileFocus={{ scale: 1.02 }}>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Nom d'utilisateur Instagram *
                  </label>
                  <input
                    type="text"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                    placeholder="@votre_nom_instagram"
                  />
                </motion.div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <motion.div whileFocus={{ scale: 1.02 }}>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Nom de l'Entreprise
                  </label>
                  <input
                    type="text"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                    placeholder="Votre Entreprise"
                  />
                </motion.div>

                <motion.div whileFocus={{ scale: 1.02 }}>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Adresse Email
                  </label>
                  <input
                    type="email"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                    placeholder="jean@exemple.com"
                  />
                </motion.div>
              </div>

              <motion.div whileFocus={{ scale: 1.02 }}>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Service Nécessaire
                </label>
                <select
                  name="service"
                  value={formData.service}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                >
                  <option value="">Sélectionnez un service</option>
                  <option value="website">Développement de Site Web Personnalisé</option>
                  <option value="ecommerce">Solution E-commerce</option>
                  <option value="mobile">Design Mobile-First</option>
                  <option value="uiux">Design UI/UX</option>
                  <option value="webapp">Application Web</option>
                  <option value="optimization">Optimisation de Site Web</option>
                </select>
              </motion.div>

              <motion.div whileFocus={{ scale: 1.02 }}>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Détails du Projet
                </label>
                <textarea
                  name="message"
                  rows={4}
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all resize-none"
                  placeholder="Parlez-nous de vos exigences de projet..."
                />
              </motion.div>

              <div className="flex items-center">
                <input
                  type="checkbox"
                  name="needDemo"
                  id="needDemo"
                  checked={formData.needDemo}
                  onChange={handleChange}
                  className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                />
                <label htmlFor="needDemo" className="ml-2 block text-sm text-gray-700">
                  Je souhaite recevoir un <strong>APERÇU PERSONNALISÉ</strong> de mon futur site web
                </label>
              </div>

              {/* Error Message */}
              {error && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="flex items-center gap-2 p-3 bg-red-50 border border-red-200 rounded-lg text-red-700"
                >
                  <AlertCircle size={20} />
                  <span className="text-sm">{error}</span>
                </motion.div>
              )}

              <motion.button
                type="submit"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                disabled={isSubmitted || isLoading}
                className="w-full py-4 bg-gradient-to-r from-blue-500 to-blue-600 text-white rounded-lg font-semibold text-lg flex items-center justify-center gap-2 hover:shadow-lg transition-all disabled:opacity-50"
              >
                {isLoading ? (
                  <>
                    <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                    Envoi en cours...
                  </>
                ) : isSubmitted ? (
                  <>
                    <Check size={20} />
                    Message Envoyé !
                  </>
                ) : (
                  <>
                    <Send size={20} />
                    Recevoir Mon Aperçu Personnalisé
                  </>
                )}
              </motion.button>
            </form>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="space-y-8"
          >
            {/* Contact Cards */}
            {contactInfo.map((item, index) => {
              const Icon = item.icon;
              return (
                <motion.a
                  key={index}
                  href={item.link}
                  whileHover={{ x: 10, scale: 1.02 }}
                  className="group flex items-center p-6 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all border border-gray-100"
                >
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center mr-4 group-hover:scale-110 transition-transform">
                    <Icon className="text-white" size={24} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">{item.title}</h4>
                    <p className="text-gray-600">{item.info}</p>
                  </div>
                </motion.a>
              );
            })}

            {/* Free Demo CTA */}
            <motion.div
              whileHover={{ scale: 1.02 }}
              className="bg-gradient-to-r from-blue-500 to-blue-600 rounded-2xl p-8 text-white"
            >
              <h3 className="text-2xl font-bold mb-4">Votre Aperçu Personnalisé Inclut :</h3>
              <ul className="space-y-3">
                {[
                  'Design professionnel adapté à votre marque',
                  'Navigation intuitive pour vos clientes',
                  'Gestion simplifiée des produits et commandes',
                  'Aperçu mobile et desktop',
                  'Aucun engagement requis - 100% gratuit'
                ].map((benefit, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                    transition={{ duration: 0.5, delay: 0.8 + index * 0.1 }}
                    className="flex items-center"
                  >
                    <Check className="text-green-300 mr-3 flex-shrink-0" size={16} />
                    {benefit}
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;