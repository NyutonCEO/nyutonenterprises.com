import React from 'react'
import { motion } from 'framer-motion'

const Testimonials = () => {
  const testimonials = [
    {
      quote: "Nyuton transformed our vending operations. Revenue increased 300% in just 6 months.",
      author: "Michael Chen",
      role: "CEO, TechCorp",
      avatar: "👨‍💼"
    },
    {
      quote: "Their cybersecurity approach is pragmatic and effective. No unnecessary complexity.",
      author: "Sarah Johnson",
      role: "CTO, StartupXYZ",
      avatar: "👩‍💻"
    },
    {
      quote: "The gaming solutions drove incredible engagement. Our retention rates doubled.",
      author: "Alex Rodriguez",
      role: "Product Manager, GameStudio",
      avatar: "🎮"
    }
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
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
    <motion.section
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      className="py-20 px-6"
    >
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold gradient-text mb-4">
            What Our Partners Say
          </h2>
          <p className="text-xl text-slate-400">
            Real results from real partnerships
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ y: -8, scale: 1.02 }}
              className="premium-card p-8 group"
            >
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.2 + index * 0.1 }}
                className="mb-6"
              >
                <div className="text-6xl mb-4 opacity-80 group-hover:opacity-100 transition-opacity">
                  {testimonial.avatar}
                </div>
                <blockquote className="text-lg text-slate-300 italic leading-relaxed">
                  "{testimonial.quote}"
                </blockquote>
              </motion.div>
              
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-gradient-to-r from-primary-500 to-secondary-500 rounded-full flex items-center justify-center text-white font-bold">
                  {testimonial.author.charAt(0)}
                </div>
                <div>
                  <h4 className="font-semibold text-white">{testimonial.author}</h4>
                  <p className="text-sm text-slate-400">{testimonial.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-20 premium-card p-12 text-center"
        >
          <h3 className="text-3xl font-bold text-white mb-8">
            Trusted by Industry Leaders
          </h3>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { number: "500+", label: "Happy Clients" },
              { number: "$10M+", label: "Revenue Generated" },
              { number: "99.9%", label: "Uptime" },
              { number: "24/7", label: "Support" }
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.6 + index * 0.1 }}
                className="text-center"
              >
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  className="text-4xl font-black gradient-text mb-2"
                >
                  {stat.number}
                </motion.div>
                <div className="text-slate-400 font-medium">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </motion.section>
  )
}

export default Testimonials
