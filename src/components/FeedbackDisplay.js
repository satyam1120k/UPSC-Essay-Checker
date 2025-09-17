import React from 'react';
import { motion } from 'framer-motion';
import { MessageSquare, Brain, Lightbulb, FileText } from 'lucide-react';
import './FeedbackDisplay.css';

const FeedbackDisplay = ({ feedback }) => {
  const feedbackSections = [
    {
      id: 'language',
      title: 'Language Quality',
      icon: MessageSquare,
      feedback: feedback.language_feedback,
      color: '#667eea',
      description: 'Grammar, vocabulary, and writing style'
    },
    {
      id: 'analysis',
      title: 'Depth of Analysis',
      icon: Brain,
      feedback: feedback.analysis_feedback,
      color: '#f093fb',
      description: 'Critical thinking and argumentation'
    },
    {
      id: 'clarity',
      title: 'Clarity of Thought',
      icon: Lightbulb,
      feedback: feedback.clarity_feedback,
      color: '#4facfe',
      description: 'Structure and logical flow'
    }
  ];

  return (
    <div className="feedback-container">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="feedback-header"
      >
        <FileText className="feedback-title-icon" />
        <h2>Detailed Feedback</h2>
        <p>Comprehensive analysis of your essay across different dimensions</p>
      </motion.div>

      <div className="feedback-grid">
        {feedbackSections.map((section, index) => (
          <motion.div
            key={section.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
            className="feedback-card"
            style={{ '--accent-color': section.color }}
          >
            <div className="feedback-card-header">
              <div className="feedback-icon" style={{ backgroundColor: section.color }}>
                <section.icon className="icon" />
              </div>
              <div className="feedback-title-section">
                <h3>{section.title}</h3>
                <p>{section.description}</p>
              </div>
            </div>
            <div className="feedback-content">
              <p>{section.feedback}</p>
            </div>
          </motion.div>
        ))}
      </div>

      {null}
    </div>
  );
};

export default FeedbackDisplay;
