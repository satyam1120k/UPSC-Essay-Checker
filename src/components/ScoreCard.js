import React from 'react';
import { motion } from 'framer-motion';
import { Star, TrendingUp } from 'lucide-react';
import './ScoreCard.css';

const ScoreCard = ({ score }) => {
  const getScoreColor = (score) => {
    if (score >= 8) return '#10b981'; // Green
    if (score >= 6) return '#f59e0b'; // Yellow
    if (score >= 4) return '#f97316'; // Orange
    return '#ef4444'; // Red
  };

  const getScoreLabel = (score) => {
    if (score >= 8) return 'Excellent';
    if (score >= 6) return 'Good';
    if (score >= 4) return 'Average';
    return 'Needs Improvement';
  };

  const getScoreDescription = (score) => {
    if (score >= 8) return 'Outstanding work! Your essay demonstrates excellent understanding and presentation.';
    if (score >= 6) return 'Good effort! Your essay shows solid understanding with room for minor improvements.';
    if (score >= 4) return 'Decent work! Focus on strengthening your arguments and examples.';
    return 'Keep practicing! Focus on structure, clarity, and depth of analysis.';
  };

  const scoreColor = getScoreColor(score);
  const scoreLabel = getScoreLabel(score);
  const scoreDescription = getScoreDescription(score);

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.6, delay: 0.1 }}
      className="score-card"
    >
      <div className="score-header">
        <div className="score-icon">
          <Star className="star-icon" />
        </div>
        <div className="score-title">
          <h2>Overall Score</h2>
          <p>Based on comprehensive evaluation</p>
        </div>
      </div>

      <div className="score-display">
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.8, delay: 0.3, type: "spring" }}
          className="score-circle"
          style={{ '--score-color': scoreColor }}
        >
          <div className="score-number">
            {score.toFixed(1)}
          </div>
          <div className="score-out-of">/ 10</div>
        </motion.div>

        <div className="score-details">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="score-label"
            style={{ color: scoreColor }}
          >
            {scoreLabel}
          </motion.div>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="score-description"
          >
            {scoreDescription}
          </motion.p>
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.7 }}
        className="score-progress"
      >
        <div className="progress-bar">
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: `${(score / 10) * 100}%` }}
            transition={{ duration: 1, delay: 0.8, ease: "easeOut" }}
            className="progress-fill"
            style={{ backgroundColor: scoreColor }}
          />
        </div>
        <div className="progress-labels">
          <span>0</span>
          <span>5</span>
          <span>10</span>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.9 }}
        className="score-trend"
      >
        <TrendingUp className="trend-icon" />
        <span>Keep up the great work!</span>
      </motion.div>
    </motion.div>
  );
};

export default ScoreCard;
