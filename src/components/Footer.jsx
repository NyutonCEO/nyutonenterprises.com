import React from 'react'
import { motion } from 'framer-motion'

const Footer = () => {
  const footerLinks = {
    main: [
      { name: 'Home', href: '/' },
      { name: 'Services', href: '/services.html' },
      { name: 'About', href: '/about.html' },
      { name: 'Contact', href: '/contact.html' }
    ],
    services: [
      { name: 'Vending', href: '/vending.html' },
      { name: 'Gaming', href: '/gaming.html' },
      { name: 'Cybersecurity', href: '/cybersecurity.html' },
      { name: 'Online Ads', href: '/online-ads.html' }
    ],
    resources: [
      { name: 'Bitcoin Strategies', href: '/bitcoin-strategies.html' },
      { name: 'Schedule', href: 'https://calendly.com/nyutonllc/30min', external: true },
      { name: 'Get a Quote', href: '/contact.html' },
      { name: 'Call (555) 123-4567', href: 'tel:5551234567' }
    ]
  }

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
    hidden: { y: 20, opacity: 0 },
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
    <motion.footer
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      className="bg-gradient-to-br from-slate-900/95 to-slate-800/95 backdrop-blur-xl border-t border-white/10"
    >
      <div className="max-w-7xl mx-auto px-6 py-16">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12"
        >
          {/* Brand */}
          <motion.div variants={itemVariants} className="lg:col-span-1">
            <div className="flex items-center space-x-3 mb-6">
              <motion.div
                whileHover={{ rotate: 10, scale: 1.1 }}
                className="w-12 h-12 bg-gradient-to-r from-primary-500 to-secondary-500 rounded-xl flex items-center justify-center"
              >
                <span className="text-white font-bold text-xl">N</span>
              </motion.div>
              <div>
                <h3 className="text-xl font-bold text-white">Nyuton Enterprises</h3>
                <p className="text-slate-400 text-sm">Building Tomorrow's Ventures</p>
              </div>
            </div>
            <p className="text-slate-400 mb-6 leading-relaxed">
              We operate and grow ventures in vending, gaming, cybersecurity, and online advertising — built for durability and scale.
            </p>
            <div className="text-slate-500 text-sm">
              © 2025 Nyuton Enterprises LLC • Raleigh • Durham • Garner
            </div>
          </motion.div>

          {/* Main Links */}
          <motion.div variants={itemVariants}>
            <h4 className="text-lg font-semibold text-white mb-6">Main</h4>
            <ul className="space-y-3">
              {footerLinks.main.map((link, index) => (
                <motion.li
                  key={link.name}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.3 + index * 0.1 }}
                >
                  <a
                    href={link.href}
                    className="text-slate-400 hover:text-white transition-colors duration-300"
                  >
                    {link.name}
                  </a>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Services */}
          <motion.div variants={itemVariants}>
            <h4 className="text-lg font-semibold text-white mb-6">Services</h4>
            <ul className="space-y-3">
              {footerLinks.services.map((link, index) => (
                <motion.li
                  key={link.name}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.4 + index * 0.1 }}
                >
                  <a
                    href={link.href}
                    className="text-slate-400 hover:text-white transition-colors duration-300"
                  >
                    {link.name}
                  </a>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Resources */}
          <motion.div variants={itemVariants}>
            <h4 className="text-lg font-semibold text-white mb-6">Resources</h4>
            <ul className="space-y-3">
              {footerLinks.resources.map((link, index) => (
                <motion.li
                  key={link.name}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.5 + index * 0.1 }}
                >
                  <a
                    href={link.href}
                    target={link.external ? "_blank" : undefined}
                    rel={link.external ? "noopener noreferrer" : undefined}
                    className="text-slate-400 hover:text-white transition-colors duration-300 flex items-center"
                  >
                    {link.name}
                    {link.external && (
                      <svg className="w-3 h-3 ml-1" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                      </svg>
                    )}
                  </a>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </motion.div>

        {/* Bottom Bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          viewport={{ once: true }}
          className="mt-16 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center"
        >
          <div className="text-slate-500 text-sm mb-4 md:mb-0">
            Built with ❤️ by Nyuton Enterprises
          </div>
          
          <div className="flex items-center space-x-6">
            <motion.a
              whileHover={{ scale: 1.1 }}
              href="https://calendly.com/nyutonllc/30min"
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-400 hover:text-white transition-colors"
            >
              Schedule Call
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.1 }}
              href="tel:5551234567"
              className="text-slate-400 hover:text-white transition-colors"
            >
              (555) 123-4567
            </motion.a>
          </div>
        </motion.div>
      </div>
    </motion.footer>
  )
}

export default Footer
