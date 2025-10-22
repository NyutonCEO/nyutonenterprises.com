import React from 'react'
import { motion } from 'framer-motion'

const LoadingScreen = () => {
  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.8 }}
      className="fixed inset-0 z-50 flex items-center justify-center bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900"
    >
      <div className="text-center">
        <motion.div
          animate={{ 
            y: [-10, 10, -10],
            rotate: [0, 5, -5, 0]
          }}
          transition={{ 
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="mb-8"
        >
          <div className="w-20 h-20 mx-auto bg-gradient-to-r from-primary-500 to-secondary-500 rounded-2xl flex items-center justify-center">
            <span className="text-2xl font-bold text-white">N</span>
          </div>
        </motion.div>
        
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="text-xl font-semibold text-white mb-4"
        >
          Building Tomorrow's Ventures
        </motion.h2>
        
        <div className="w-64 h-1 bg-slate-700 rounded-full overflow-hidden">
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: "100%" }}
            transition={{ duration: 2.5, ease: "easeInOut" }}
            className="h-full bg-gradient-to-r from-primary-500 to-secondary-500"
          />
        </div>
        
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.5 }}
          className="mt-4 text-sm text-slate-400"
        >
          Loading premium experience...
        </motion.div>
      </div>
    </motion.div>
  )
}

export default LoadingScreen
