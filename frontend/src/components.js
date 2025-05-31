import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence, useScroll, useTransform } from 'framer-motion';
import { X, ChevronLeft, ChevronRight, Play, Users, Zap, Briefcase, Mail, Phone, ExternalLink, Star, Menu, ArrowRight } from 'lucide-react';

// Hero Section Component
const HeroSection = () => {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 500], [0, 150]);
  const opacity = useTransform(scrollY, [0, 300], [1, 0]);

  return (
    <motion.section 
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      style={{ y, opacity }}
    >
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-slate-800 to-gray-900">
        <motion.div 
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: `url('https://images.pexels.com/photos/1089438/pexels-photo-1089438.jpeg')`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
          animate={{
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        {/* Animated overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 via-transparent to-blue-500/10 animate-pulse" />
      </div>

      {/* Floating particles */}
      <div className="absolute inset-0">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-cyan-400 rounded-full opacity-70"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [-20, -100, -20],
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>

      {/* Hero Content */}
      <div className="relative z-10 text-center px-6 max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="mb-8"
        >
          <motion.h1 
            className="text-6xl md:text-8xl font-bold text-white mb-6 leading-tight"
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2, ease: "easeOut" }}
          >
            El Futuro de la{' '}
            <motion.span 
              className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent"
              animate={{ backgroundPosition: ['0%', '100%'] }}
              transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
            >
              Creación Digital
            </motion.span>
            , Hoy.
          </motion.h1>
          
          <motion.p 
            className="text-xl md:text-2xl text-gray-300 mb-10 max-w-4xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.8 }}
          >
            Implementa un ecosistema de soluciones con <span className="text-cyan-400 font-semibold">Inteligencia Artificial</span> para convertir tu marca en una <span className="text-blue-400 font-semibold">potencia creativa, de marketing y de ventas</span>.
          </motion.p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1.2 }}
          className="flex flex-col sm:flex-row gap-6 justify-center items-center"
        >
          <motion.button
            className="group relative px-12 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white text-lg font-semibold rounded-full overflow-hidden shadow-2xl"
            whileHover={{ scale: 1.05, boxShadow: "0 20px 40px rgba(34, 211, 238, 0.4)" }}
            whileTap={{ scale: 0.98 }}
            onClick={() => document.getElementById('portfolio').scrollIntoView({ behavior: 'smooth' })}
          >
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-blue-600 to-cyan-500"
              initial={{ x: "100%" }}
              whileHover={{ x: "0%" }}
              transition={{ duration: 0.3 }}
            />
            <span className="relative z-10 flex items-center gap-3">
              DESCUBRIR MI POTENCIAL
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </span>
          </motion.button>

          <motion.button
            className="group px-8 py-4 border-2 border-cyan-400 text-cyan-400 text-lg font-semibold rounded-full hover:bg-cyan-400 hover:text-gray-900 transition-all duration-300"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
            onClick={() => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })}
          >
            <span className="flex items-center gap-3">
              <Play className="w-5 h-5" />
              SESIÓN ESTRATÉGICA GRATIS
            </span>
          </motion.button>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <div className="w-6 h-10 border-2 border-cyan-400 rounded-full flex justify-center">
            <motion.div
              className="w-1 h-3 bg-cyan-400 rounded-full mt-2"
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
            />
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
};

// Navigation Component
const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { scrollY } = useScroll();
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const unsubscribe = scrollY.onChange((latest) => {
      setIsScrolled(latest > 100);
    });
    return () => unsubscribe();
  }, [scrollY]);

  const navItems = [
    { name: 'Inicio', href: '#home' },
    { name: 'Portfolio', href: '#portfolio' },
    { name: 'Servicios', href: '#services' },
    { name: 'Testimonios', href: '#testimonials' },
    { name: 'Contacto', href: '#contact' },
  ];

  return (
    <motion.nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-gray-900/95 backdrop-blur-lg shadow-2xl' : 'bg-transparent'
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8 }}
    >
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <motion.div
            className="text-2xl font-bold text-white"
            whileHover={{ scale: 1.05 }}
          >
            <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              AiLendra
            </span>
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item, index) => (
              <motion.a
                key={item.name}
                href={item.href}
                className="text-gray-300 hover:text-cyan-400 transition-colors duration-300 font-medium"
                whileHover={{ y: -2 }}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                onClick={(e) => {
                  e.preventDefault();
                  document.querySelector(item.href)?.scrollIntoView({ behavior: 'smooth' });
                }}
              >
                {item.name}
              </motion.a>
            ))}
            <motion.button
              className="px-6 py-2 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-full font-medium hover:shadow-lg transition-all duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })}
            >
              Agendar Sesión
            </motion.button>
          </div>

          {/* Mobile menu button */}
          <motion.button
            className="md:hidden text-white"
            whileTap={{ scale: 0.95 }}
            onClick={() => setIsOpen(!isOpen)}
          >
            <Menu className="w-6 h-6" />
          </motion.button>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              className="md:hidden mt-4 p-6 bg-gray-800/95 backdrop-blur-lg rounded-2xl"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
            >
              {navItems.map((item, index) => (
                <motion.a
                  key={item.name}
                  href={item.href}
                  className="block py-3 text-gray-300 hover:text-cyan-400 transition-colors duration-300"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                  onClick={(e) => {
                    e.preventDefault();
                    document.querySelector(item.href)?.scrollIntoView({ behavior: 'smooth' });
                    setIsOpen(false);
                  }}
                >
                  {item.name}
                </motion.a>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  );
};

// Interactive Portfolio Gallery Component
const PortfolioGallery = () => {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const portfolioCategories = [
    {
      id: 1,
      title: "E-commerce & Fotografía",
      description: "Imágenes hiperrealistas de producto",
      mainImage: "https://images.pexels.com/photos/3766180/pexels-photo-3766180.jpeg",
      images: [
        "https://images.pexels.com/photos/3766180/pexels-photo-3766180.jpeg",
        "https://images.pexels.com/photos/1089438/pexels-photo-1089438.jpeg",
        "https://images.pexels.com/photos/66134/pexels-photo-66134.jpeg"
      ],
      services: ["Fotografía de branding", "Retrato profesional", "Mockups comerciales"]
    },
    {
      id: 2,
      title: "Contenido Dinámico & Video",
      description: "Visualizers y motion graphics",
      mainImage: "https://images.pexels.com/photos/66134/pexels-photo-66134.jpeg",
      images: [
        "https://images.pexels.com/photos/66134/pexels-photo-66134.jpeg",
        "https://images.pexels.com/photos/1261820/pexels-photo-1261820.jpeg",
        "https://images.pexels.com/photos/3766180/pexels-photo-3766180.jpeg"
      ],
      services: ["PS Visualizer", "Reels y stories", "Animación 3D"]
    },
    {
      id: 3,
      title: "Marketing Digital",
      description: "Posts y campañas optimizadas",
      mainImage: "https://images.pexels.com/photos/267350/pexels-photo-267350.jpeg",
      images: [
        "https://images.pexels.com/photos/267350/pexels-photo-267350.jpeg",
        "https://images.pexels.com/photos/673648/pexels-photo-673648.jpeg",
        "https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg"
      ],
      services: ["Posts automatizados", "Identidad visual", "Miniaturas YouTube"]
    },
    {
      id: 4,
      title: "Automatización IA",
      description: "Soluciones personalizadas",
      mainImage: "https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg",
      images: [
        "https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg",
        "https://images.pexels.com/photos/1089438/pexels-photo-1089438.jpeg",
        "https://images.pexels.com/photos/267350/pexels-photo-267350.jpeg"
      ],
      services: ["GPTs personalizados", "Chatbots 24/7", "Avatares virtuales"]
    },
    {
      id: 5,
      title: "Branding Profesional",
      description: "Identidad visual coherente",
      mainImage: "https://images.pexels.com/photos/673648/pexels-photo-673648.jpeg",
      images: [
        "https://images.pexels.com/photos/673648/pexels-photo-673648.jpeg",
        "https://images.pexels.com/photos/3766180/pexels-photo-3766180.jpeg",
        "https://images.pexels.com/photos/1261820/pexels-photo-1261820.jpeg"
      ],
      services: ["Diseño de marca", "Material corporativo", "Estrategia visual"]
    },
    {
      id: 6,
      title: "Experiencias Inmersivas",
      description: "VR, AR y efectos visuales",
      mainImage: "https://images.pexels.com/photos/1261820/pexels-photo-1261820.jpeg",
      images: [
        "https://images.pexels.com/photos/1261820/pexels-photo-1261820.jpeg",
        "https://images.pexels.com/photos/66134/pexels-photo-66134.jpeg",
        "https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg"
      ],
      services: ["Filtros AR", "Experiencias VR", "Efectos visuales"]
    },
  ];

  const openGallery = (category) => {
    setSelectedCategory(category);
    setCurrentImageIndex(0);
  };

  const closeGallery = () => {
    setSelectedCategory(null);
  };

  const nextImage = () => {
    setCurrentImageIndex((prev) => 
      prev === selectedCategory.images.length - 1 ? 0 : prev + 1
    );
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => 
      prev === 0 ? selectedCategory.images.length - 1 : prev - 1
    );
  };

  return (
    <section id="portfolio" className="py-20 bg-gray-900">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-5xl md:text-6xl font-bold text-white mb-6">
            Nuestro <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">Portfolio</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Explora nuestros proyectos más destacados y descubre cómo transformamos ideas en realidades digitales extraordinarias
          </p>
        </motion.div>

        {/* Portfolio Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {portfolioCategories.map((category, index) => (
            <motion.div
              key={category.id}
              className="group relative bg-gray-800 rounded-2xl overflow-hidden cursor-pointer"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ 
                scale: 1.05,
                boxShadow: "0 25px 50px -12px rgba(34, 211, 238, 0.3)"
              }}
              onClick={() => openGallery(category)}
            >
              {/* Image Container */}
              <div className="relative h-64 overflow-hidden">
                <motion.img
                  src={category.mainImage}
                  alt={category.title}
                  className="w-full h-full object-cover"
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.6 }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-transparent to-transparent opacity-70" />
                
                {/* Hover overlay */}
                <motion.div
                  className="absolute inset-0 bg-cyan-500/20 flex items-center justify-center opacity-0 group-hover:opacity-100"
                  transition={{ duration: 0.3 }}
                >
                  <motion.div
                    className="text-white text-center"
                    initial={{ scale: 0.8, opacity: 0 }}
                    whileHover={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 0.3 }}
                  >
                    <ExternalLink className="w-8 h-8 mx-auto mb-2" />
                    <p className="font-semibold">Ver Galería</p>
                  </motion.div>
                </motion.div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors">
                  {category.title}
                </h3>
                <p className="text-gray-400 mb-4">{category.description}</p>
                <div className="flex flex-wrap gap-2">
                  {category.services.slice(0, 2).map((service, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1 bg-gray-700 text-gray-300 text-sm rounded-full"
                    >
                      {service}
                    </span>
                  ))}
                  {category.services.length > 2 && (
                    <span className="px-3 py-1 bg-cyan-500/20 text-cyan-400 text-sm rounded-full">
                      +{category.services.length - 2} más
                    </span>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Gallery Modal */}
        <AnimatePresence>
          {selectedCategory && (
            <motion.div
              className="fixed inset-0 z-50 bg-black/90 backdrop-blur-lg flex items-center justify-center p-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={closeGallery}
            >
              <motion.div
                className="relative max-w-4xl w-full bg-gray-800 rounded-2xl overflow-hidden"
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.8, opacity: 0 }}
                transition={{ duration: 0.3 }}
                onClick={(e) => e.stopPropagation()}
              >
                {/* Close button */}
                <button
                  className="absolute top-4 right-4 z-10 w-10 h-10 bg-gray-900/80 hover:bg-gray-700 rounded-full flex items-center justify-center text-white transition-colors"
                  onClick={closeGallery}
                >
                  <X className="w-5 h-5" />
                </button>

                {/* Navigation buttons */}
                <button
                  className="absolute left-4 top-1/2 transform -translate-y-1/2 z-10 w-12 h-12 bg-gray-900/80 hover:bg-gray-700 rounded-full flex items-center justify-center text-white transition-colors"
                  onClick={prevImage}
                >
                  <ChevronLeft className="w-6 h-6" />
                </button>
                <button
                  className="absolute right-4 top-1/2 transform -translate-y-1/2 z-10 w-12 h-12 bg-gray-900/80 hover:bg-gray-700 rounded-full flex items-center justify-center text-white transition-colors"
                  onClick={nextImage}
                >
                  <ChevronRight className="w-6 h-6" />
                </button>

                {/* Main image */}
                <div className="relative h-96 md:h-[500px]">
                  <motion.img
                    key={currentImageIndex}
                    src={selectedCategory.images[currentImageIndex]}
                    alt={selectedCategory.title}
                    className="w-full h-full object-cover"
                    initial={{ opacity: 0, x: 100 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3 }}
                  />
                  
                  {/* Image counter */}
                  <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-gray-900/80 px-3 py-1 rounded-full text-white text-sm">
                    {currentImageIndex + 1} / {selectedCategory.images.length}
                  </div>
                </div>

                {/* Gallery info */}
                <div className="p-6">
                  <h3 className="text-2xl font-bold text-white mb-2">{selectedCategory.title}</h3>
                  <p className="text-gray-300 mb-4">{selectedCategory.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {selectedCategory.services.map((service, idx) => (
                      <span
                        key={idx}
                        className="px-3 py-1 bg-cyan-500/20 text-cyan-400 text-sm rounded-full"
                      >
                        {service}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Thumbnail navigation */}
                <div className="p-6 pt-0">
                  <div className="flex gap-2 overflow-x-auto">
                    {selectedCategory.images.map((image, idx) => (
                      <motion.button
                        key={idx}
                        className={`flex-shrink-0 w-16 h-16 rounded-lg overflow-hidden border-2 transition-all ${
                          idx === currentImageIndex 
                            ? 'border-cyan-400 opacity-100' 
                            : 'border-gray-600 opacity-60 hover:opacity-80'
                        }`}
                        onClick={() => setCurrentImageIndex(idx)}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <img
                          src={image}
                          alt={`${selectedCategory.title} ${idx + 1}`}
                          className="w-full h-full object-cover"
                        />
                      </motion.button>
                    ))}
                  </div>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

// Services Section Component
const ServicesSection = () => {
  const services = [
    {
      icon: <Briefcase className="w-8 h-8" />,
      title: "E-commerce y Fotografía de Producto",
      description: "Creación de imágenes hiperrealistas que convierten",
      features: [
        "Fotografía de branding con dirección artística",
        "Retrato profesional asistido por IA",
        "Mockups comerciales: packaging, cartelería, señalética"
      ],
      color: "from-purple-500 to-pink-500"
    },
    {
      icon: <Play className="w-8 h-8" />,
      title: "Contenido Dinámico y Vídeo",
      description: "Visualizers y experiencias inmersivas de alta calidad",
      features: [
        "PS Visualizer: visuales sincronizados con audio",
        "Reels y stories con motion graphics generativos",
        "Animación 3D de producto fotorrealista"
      ],
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Marketing Digital y Redes Sociales",
      description: "Estrategias automatizadas que generan engagement",
      features: [
        "Posts y carruseles optimizados automáticamente",
        "Identidad visual coherente para feeds",
        "Variaciones A/B automáticas para campañas"
      ],
      color: "from-green-500 to-emerald-500"
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: "Automatización y Soluciones IA",
      description: "Tecnología de vanguardia personalizada",
      features: [
        "GPTs diseñados para flujos creativos",
        "Chatbots entrenados para atención 24/7",
        "Avatares y personajes virtuales para branding"
      ],
      color: "from-orange-500 to-red-500"
    },
  ];

  return (
    <section id="services" className="py-20 bg-gradient-to-br from-gray-900 via-slate-800 to-gray-900">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-5xl md:text-6xl font-bold text-white mb-6">
            Nuestros <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">Servicios</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Soluciones integrales con IA que transforman tu negocio y potencian tu presencia digital
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              className="group relative bg-gray-800/50 backdrop-blur-lg p-8 rounded-2xl border border-gray-700 hover:border-cyan-400/50 transition-all duration-300"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ 
                scale: 1.02,
                boxShadow: "0 25px 50px -12px rgba(34, 211, 238, 0.2)"
              }}
            >
              {/* Gradient background on hover */}
              <motion.div
                className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-5 rounded-2xl transition-opacity duration-300`}
              />
              
              {/* Service icon */}
              <motion.div
                className={`inline-flex p-4 bg-gradient-to-r ${service.color} rounded-xl text-white mb-6`}
                whileHover={{ scale: 1.1, rotate: 5 }}
                transition={{ duration: 0.3 }}
              >
                {service.icon}
              </motion.div>

              {/* Service content */}
              <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-cyan-400 transition-colors">
                {service.title}
              </h3>
              <p className="text-gray-300 mb-6 leading-relaxed">
                {service.description}
              </p>

              {/* Features list */}
              <ul className="space-y-3">
                {service.features.map((feature, idx) => (
                  <motion.li
                    key={idx}
                    className="flex items-start gap-3 text-gray-300"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4, delay: (index * 0.1) + (idx * 0.1) }}
                    viewport={{ once: true }}
                  >
                    <div className="w-2 h-2 bg-cyan-400 rounded-full mt-2 flex-shrink-0" />
                    <span>{feature}</span>
                  </motion.li>
                ))}
              </ul>

              {/* CTA button */}
              <motion.button
                className="mt-6 px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-full font-medium hover:shadow-lg transition-all duration-300 w-full"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })}
              >
                Comenzar Proyecto
              </motion.button>
            </motion.div>
          ))}
        </div>

        {/* Additional services */}
        <motion.div
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="bg-gradient-to-r from-gray-800 to-gray-700 p-8 rounded-2xl border border-gray-600">
            <h3 className="text-2xl font-bold text-white mb-4">
              ¿Necesitas algo específico?
            </h3>
            <p className="text-gray-300 mb-6">
              Ofrecemos consultoría estratégica personalizada y auditorías de monetización con IA
            </p>
            <motion.button
              className="px-8 py-3 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-full font-medium hover:shadow-lg transition-all duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })}
            >
              Consultoría Personalizada
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

// Testimonials Section Component
const TestimonialsSection = () => {
  const testimonials = [
    {
      name: "María González",
      role: "CEO, TechStart",
      avatar: "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg",
      content: "AiLendra transformó completamente nuestra presencia digital. Los resultados en ventas superaron todas nuestras expectativas en solo 3 meses.",
      rating: 5,
      company: "TechStart"
    },
    {
      name: "Carlos Mendoza",
      role: "Director de Marketing, InnovaLab",
      avatar: "https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg",
      content: "La automatización que implementaron nos ahorra 40 horas semanales. Su enfoque con IA es realmente innovador y efectivo.",
      rating: 5,
      company: "InnovaLab"
    },
    {
      name: "Ana Rodríguez",
      role: "Fundadora, CreativeStudio",
      avatar: "https://images.pexels.com/photos/1181690/pexels-photo-1181690.jpeg",
      content: "Los visualizers que crearon para nuestros eventos son espectaculares. Cada cliente queda impresionado con la calidad y creatividad.",
      rating: 5,
      company: "CreativeStudio"
    },
    {
      name: "Diego Silva",
      role: "E-commerce Manager, RetailMax",
      avatar: "https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg",
      content: "La fotografía de producto con IA que desarrollaron aumentó nuestras conversiones un 65%. Simplemente increíble.",
      rating: 5,
      company: "RetailMax"
    },
  ];

  return (
    <section id="testimonials" className="py-20 bg-gray-900">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-5xl md:text-6xl font-bold text-white mb-6">
            Lo que Dicen Nuestros <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">Clientes</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Resultados reales de empresas que confiaron en nuestras soluciones con IA
          </p>
        </motion.div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              className="bg-gradient-to-br from-gray-800 to-gray-700 p-8 rounded-2xl border border-gray-600 hover:border-cyan-400/50 transition-all duration-300"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ 
                scale: 1.02,
                boxShadow: "0 25px 50px -12px rgba(34, 211, 238, 0.2)"
              }}
            >
              {/* Rating stars */}
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                ))}
              </div>

              {/* Testimonial content */}
              <blockquote className="text-gray-300 text-lg leading-relaxed mb-6">
                "{testimonial.content}"
              </blockquote>

              {/* Author info */}
              <div className="flex items-center gap-4">
                <motion.img
                  src={testimonial.avatar}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full object-cover"
                  whileHover={{ scale: 1.1 }}
                />
                <div>
                  <h4 className="text-white font-semibold">{testimonial.name}</h4>
                  <p className="text-gray-400 text-sm">{testimonial.role}</p>
                  <p className="text-cyan-400 text-sm">{testimonial.company}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Stats section */}
        <motion.div
          className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          {[
            { number: "150+", label: "Proyectos Completados" },
            { number: "95%", label: "Clientes Satisfechos" },
            { number: "300%", label: "ROI Promedio" },
          ].map((stat, index) => (
            <motion.div
              key={index}
              className="text-center bg-gradient-to-br from-gray-800/50 to-gray-700/50 p-6 rounded-2xl border border-gray-600"
              whileHover={{ scale: 1.05 }}
            >
              <motion.h3
                className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent mb-2"
                initial={{ scale: 0.5 }}
                whileInView={{ scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                {stat.number}
              </motion.h3>
              <p className="text-gray-300">{stat.label}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

// Contact Section Component
const ContactSection = () => {
  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-gray-900 via-slate-800 to-gray-900">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-5xl md:text-6xl font-bold text-white mb-6">
            ¿Listo para <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">Transformar</span> tu Negocio?
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Agenda tu sesión estratégica gratuita y descubre cómo la IA puede revolucionar tu empresa
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Contact info */}
          <motion.div
            className="space-y-8"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div>
              <h3 className="text-3xl font-bold text-white mb-6">
                Conecta con Nosotros
              </h3>
              <p className="text-gray-300 text-lg leading-relaxed">
                Únete a la nueva era de los negocios digitales. Te ayudamos a implementar soluciones con IA que realmente generen resultados.
              </p>
            </div>

            {/* Contact methods */}
            <div className="space-y-6">
              <motion.a
                href="mailto:info@ailendra.com"
                className="flex items-center gap-4 p-4 bg-gray-800/50 rounded-xl hover:bg-gray-700/50 transition-all duration-300 group"
                whileHover={{ scale: 1.02, x: 10 }}
              >
                <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full flex items-center justify-center">
                  <Mail className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h4 className="text-white font-semibold group-hover:text-cyan-400 transition-colors">
                    Email Directo
                  </h4>
                  <p className="text-gray-400">info@ailendra.com</p>
                </div>
              </motion.a>

              <motion.a
                href="https://t.me/ai_lendra"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 p-4 bg-gray-800/50 rounded-xl hover:bg-gray-700/50 transition-all duration-300 group"
                whileHover={{ scale: 1.02, x: 10 }}
              >
                <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center">
                  <Phone className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h4 className="text-white font-semibold group-hover:text-cyan-400 transition-colors">
                    Telegram VIP
                  </h4>
                  <p className="text-gray-400">Comunidad privada de IA</p>
                </div>
              </motion.a>
            </div>

            {/* Social links */}
            <div>
              <h4 className="text-white font-semibold mb-4">Síguenos para tu dosis diaria de IA:</h4>
              <div className="flex gap-4">
                {[
                  { name: "YouTube", url: "https://www.youtube.com/@MarcosA_Gil", color: "from-red-500 to-red-600" },
                  { name: "Twitter/X", url: "https://x.com/MarcosA_Gil", color: "from-gray-600 to-gray-700" },
                  { name: "Instagram", url: "https://www.instagram.com/ai.lendra/", color: "from-pink-500 to-purple-600" },
                ].map((social, index) => (
                  <motion.a
                    key={index}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`px-4 py-2 bg-gradient-to-r ${social.color} text-white rounded-full text-sm font-medium hover:shadow-lg transition-all duration-300`}
                    whileHover={{ scale: 1.05, y: -2 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    {social.name}
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>

          {/* CTA Card */}
          <motion.div
            className="bg-gradient-to-br from-cyan-500/10 to-blue-600/10 p-8 rounded-2xl border border-cyan-500/30 backdrop-blur-lg"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="text-center">
              <motion.div
                className="w-20 h-20 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-6"
                animate={{
                  scale: [1, 1.1, 1],
                  rotate: [0, 360],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              >
                <Zap className="w-10 h-10 text-white" />
              </motion.div>
              
              <h3 className="text-2xl font-bold text-white mb-4">
                Sesión Estratégica GRATIS
              </h3>
              <p className="text-gray-300 mb-8 leading-relaxed">
                Analiza tu negocio actual y descubre oportunidades de crecimiento con IA. 
                Sin compromisos, solo valor puro.
              </p>

              <motion.button
                className="w-full py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white text-lg font-semibold rounded-full mb-4 hover:shadow-2xl transition-all duration-300"
                whileHover={{ 
                  scale: 1.05,
                  boxShadow: "0 25px 50px -12px rgba(34, 211, 238, 0.5)"
                }}
                whileTap={{ scale: 0.98 }}
                onClick={() => window.open('https://ailendra.com/contacto/contacto.html', '_blank')}
              >
                AGENDAR MI SESIÓN GRATIS
              </motion.button>

              <p className="text-gray-400 text-sm">
                🎯 Estrategia personalizada • 🚀 Plan de acción • 💡 Ideas innovadoras
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

// Footer Component
const Footer = () => {
  return (
    <footer className="bg-gray-900 border-t border-gray-800 py-12">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand */}
          <div>
            <h3 className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent mb-4">
              AiLendra
            </h3>
            <p className="text-gray-400 leading-relaxed">
              El futuro de la creación digital, hoy. Transformamos negocios con soluciones innovadoras de IA.
            </p>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-white font-semibold mb-4">Servicios</h4>
            <ul className="space-y-2 text-gray-400">
              <li>E-commerce & Fotografía</li>
              <li>Contenido Dinámico & Video</li>
              <li>Marketing Digital</li>
              <li>Automatización IA</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-semibold mb-4">Contacto</h4>
            <ul className="space-y-2 text-gray-400">
              <li>info@ailendra.com</li>
              <li>Telegram: @ai_lendra</li>
              <li>Consultoría estratégica gratuita</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
          <p>&copy; 2024 AiLendra. Todos los derechos reservados. Transformando el futuro digital.</p>
        </div>
      </div>
    </footer>
  );
};

// Main Portfolio Component
const Portfolio = () => {
  return (
    <div className="bg-gray-900 min-h-screen" id="home">
      <Navigation />
      <HeroSection />
      <PortfolioGallery />
      <ServicesSection />
      <TestimonialsSection />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default Portfolio;