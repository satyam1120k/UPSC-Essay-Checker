import React, { useState } from 'react';
import EssayInput from './components/EssayInput';
import FeedbackDisplay from './components/FeedbackDisplay';
import ScoreCard from './components/ScoreCard';
import LoadingSpinner from './components/LoadingSpinner';
import { motion } from 'framer-motion';
import './App.css';

function App() {
  const [essay, setEssay] = useState('');
  const [feedback, setFeedback] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleSubmit = async (essayText) => {
    setLoading(true);
    setError(null);
    setFeedback(null);

    try {
      const apiBase = process.env.REACT_APP_API_BASE_URL || 'http://localhost:5000'; // set to your Vercel URL in production
      const response = await fetch(`${apiBase}/evaluate`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ essay: essayText }),
      });

      if (!response.ok) {
        throw new Error('Failed to evaluate essay');
      }

      const data = await response.json();
      setFeedback(data);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  const handleReset = () => {
    setEssay('');
    setFeedback(null);
    setError(null);
  };

  return (
    <div className="app">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="app-container"
      >
        <header className="app-header">
          <h1 className="app-title">UPSC Essay Rating System</h1>
          <p className="app-subtitle">
            AI-powered essay evaluation with detailed feedback
          </p>
        </header>

        <main className="app-main">
          {!feedback && !loading && (
            <EssayInput
              essay={essay}
              setEssay={setEssay}
              onSubmit={handleSubmit}
            />
          )}

          {loading && <LoadingSpinner />}

          {error && (
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="error-message"
            >
              <h3>Error</h3>
              <p>{error}</p>
              <button onClick={handleReset} className="retry-button">
                Try Again
              </button>
            </motion.div>
          )}

          {feedback && !loading && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="results-container"
            >
              <ScoreCard score={feedback.avg_score} />
              <FeedbackDisplay feedback={feedback} />
              <button onClick={handleReset} className="new-essay-button">
                Evaluate Another Essay
              </button>
            </motion.div>
          )}
        </main>
      </motion.div>
    </div>
  );
}

export default App;
