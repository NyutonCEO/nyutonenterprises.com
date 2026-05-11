import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const Services = () => {
  const [currentSlide, setCurrentSlide] = useState(0)

  const slides = [
    {
      title: "Smart Vending Solutions",
      description: "Cashless machines with real-time analytics and optimized product mix for maximum revenue.",
      stats: [
        { number: "24/7", label: "Monitoring" },
        { number: "95%", label: "Uptime" }
      ],
      gradient: "from-blue-600 via-blue-500 to-cyan-400"
    },
    {
      title: "Gaming & Interactive",
      description: "Original HTML5 games and brand activations that drive engagement and conversions.",
      stats: [
        { number: "10K+", label: "Players" },
        { number: "85%", label: "Retention" }
      ],
      gradient: "from-purple-600 via-purple-500 to-pink-400"
    },
    {
      title: "Cybersecurity",
      description: "Pragmatic security solutions that protect without slowing down your operations.",
      stats: [
        { number: "99.9%", label: "Security" },
        { number: "24h", label: "Response" }
      ],
      gradient: "from-green-600 via-green-500 to-emerald-400"
    }
  ]

  const serviceCards = [
    {
      title: "Vending & Micro‑Markets",
      description: "Smart, cashless machines with product mix tuned to your traffic. We handle placement, restock, and support.",
      features: ["Card & mobile payments", "Healthy snacks + local favorites", "24/7 monitoring & refill"],
      icon: "🏪",
      href: "/vending.html"
    },
    {
      title: "Gaming & Interactive",
      description: "Original HTML5 games and brand activations. From quick plays to sticky engagement loops.",
      features: ["Web & mobile ready", "Analytics & A/B testing", "Licensing & white‑label"],
      icon: "🎮",
      href: "/gaming.html"
    },
    {
      title: "Cybersecurity",
      description: "Pragmatic security for small orgs. Policies, training, and protections that don't slow you down.",
      features: ["Risk & compliance (HIPAA/CARF aware)", "Device hardening & backups", "Incident response runbooks (Coming Soon)"],
      icon: "🔒",
      href: "/cybersecurity.html"
    },
    {
      title: "Online Advertising",
      description: "Performance marketing with discipline. Crisp landing pages, clean data, steady iteration.",
      features: ["SEO/Local SEO", "Paid search & social", "Conversion tracking"],
      icon: "📈",
      href: "/online-ads.html"
    }
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  }

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  }

  return (
    <div className="py-20 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Hero Slider */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="relative mb-20"
        >
          <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-xl border border-white/10">
            <div className="relative h-[500px] md:h-[600px]">
              {/* Background Gradient */}
              <div className={`absolute inset-0 bg-gradient-to-br ${slides[currentSlide].gradient} opacity-90`} />
              
              {/* Content */}
              <div className="relative z-10 flex items-center justify-center h-full text-center px-8">
                <motion.div
                  key={currentSlide}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                  className="max-w-4xl"
                >
                  <h3 className="text-4xl md:text-6xl font-bold text-white mb-6">
                    {slides[currentSlide].title}
                  </h3>
                  <p className="text-xl md:text-2xl text-white/90 mb-8 leading-relaxed">
                    {slides[currentSlide].description}
                  </p>
                  
                  <div className="flex justify-center gap-8 flex-wrap">
                    {slides[currentSlide].stats.map((stat, index) => (
                      <motion.div
                        key={stat.label}
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.3 + index * 0.1 }}
                        className="text-center"
                      >
                        <div className="text-3xl md:text-4xl font-black text-white mb-2">
                          {stat.number}
                        </div>
                        <div className="text-white/80 text-sm uppercase tracking-wide">
                          {stat.label}
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              </div>

              {/* Navigation */}
              <button
                onClick={() => setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length)}
                className="absolute left-6 top-1/2 -translate-y-1/2 w-12 h-12 bg-black/30 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-black/50 transition-all duration-300"
              >
                ‹
              </button>
              <button
                onClick={() => setCurrentSlide((prev) => (prev + 1) % slides.length)}
                className="absolute right-6 top-1/2 -translate-y-1/2 w-12 h-12 bg-black/30 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-black/50 transition-all duration-300"
              >
                ›
              </button>

              {/* Dots */}
              <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-3">
                {slides.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentSlide(index)}
                    className={`w-3 h-3 rounded-full transition-all duration-300 ${
                      index === currentSlide ? 'bg-white' : 'bg-white/30'
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>
        </motion.div>

        {/* Service Cards */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20"
        >
          {serviceCards.map((service, index) => (
            <motion.div
              key={service.title}
              variants={itemVariants}
              whileHover={{ y: -8, scale: 1.02 }}
              className="premium-card p-8 group cursor-pointer"
            >
              <div className="flex items-start space-x-4 mb-6">
                <motion.div
                  whileHover={{ rotate: 10, scale: 1.1 }}
                  className="text-4xl"
                >
                  {service.icon}
                </motion.div>
                <h3 className="text-2xl font-bold text-white group-hover:text-primary-400 transition-colors">
                  <a href={service.href}>{service.title}</a>
                </h3>
              </div>
              
              <p className="text-slate-300 mb-6 leading-relaxed">
                {service.description}
              </p>
              
              <ul className="space-y-3">
                {service.features.map((feature, featureIndex) => (
                  <motion.li
                    key={feature}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: featureIndex * 0.1 }}
                    className="flex items-center text-slate-400"
                  >
                    <div className="w-2 h-2 bg-primary-500 rounded-full mr-3" />
                    {feature}
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          ))}
        </motion.div>

        {/* Why Choose Us */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold gradient-text mb-8">
            Why Nyuton Enterprises?
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <motion.div
              whileHover={{ y: -5 }}
              className="premium-card p-8 text-center"
            >
              <motion.div
                whileHover={{ rotate: 15, scale: 1.2 }}
                className="text-5xl mb-4"
              >
                🎯
              </motion.div>
              <h3 className="text-2xl font-bold text-white mb-4">Skin in the game</h3>
              <p className="text-slate-300">
                We operate what we sell. No fluff — just systems that print receipts.
              </p>
            </motion.div>
            
            <motion.div
              whileHover={{ y: -5 }}
              className="premium-card p-8 text-center"
            >
              <motion.div
                whileHover={{ rotate: 15, scale: 1.2 }}
                className="text-5xl mb-4"
              >
                ⚡
              </motion.div>
              <h3 className="text-2xl font-bold text-white mb-4">Lean & fast</h3>
              <p className="text-slate-300">
                Small team, tight feedback loops, shipping weekly.
              </p>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </div>
  )
}

export default Services
