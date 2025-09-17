import React from 'react';
import { motion } from 'framer-motion';
import { FileText, Brain, MessageSquare, Lightbulb } from 'lucide-react';
import './LoadingSpinner.css';

const LoadingSpinner = () => {
  const icons = [FileText, Brain, MessageSquare, Lightbulb];
  
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="loading-container"
    >
      <div className="loading-content">
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
          className="loading-spinner"
        >
          <div className="spinner-ring"></div>
          <div className="spinner-ring"></div>
          <div className="spinner-ring"></div>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="loading-text"
        >
          <h3>Analyzing Your Essay</h3>
          <p>Our AI is evaluating your essay across multiple dimensions...</p>
        </motion.div>

        <div className="loading-steps">
          {icons.map((Icon, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ 
                delay: 0.5 + index * 0.2,
                duration: 0.5
              }}
              className="loading-step"
            >
              <Icon className="step-icon" />
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="loading-dots"
        >
          <motion.span
            animate={{ opacity: [0.3, 1, 0.3] }}
            transition={{ duration: 1.5, repeat: Infinity, delay: 0 }}
          />
          <motion.span
            animate={{ opacity: [0.3, 1, 0.3] }}
            transition={{ duration: 1.5, repeat: Infinity, delay: 0.2 }}
          />
          <motion.span
            animate={{ opacity: [0.3, 1, 0.3] }}
            transition={{ duration: 1.5, repeat: Infinity, delay: 0.4 }}
          />
        </motion.div>
      </div>
    </motion.div>
  );
};

export default LoadingSpinner;
