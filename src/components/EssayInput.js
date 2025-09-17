import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FileText, Send } from 'lucide-react';
import './EssayInput.css';

const EssayInput = ({ essay, setEssay, onSubmit }) => {
  const [wordCount, setWordCount] = useState(0);

  const handleTextChange = (e) => {
    const text = e.target.value;
    setEssay(text);
    setWordCount(text.trim().split(/\s+/).filter(word => word.length > 0).length);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (essay.trim().length < 100) {
      alert('Please write at least 100 words for a meaningful evaluation.');
      return;
    }
    onSubmit(essay);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="essay-input-container"
    >
      <div className="input-header">
        <div className="input-title">
          <FileText className="title-icon" />
          <h2>Write Your Essay</h2>
        </div>
        <div className="word-count">
          {wordCount} words
        </div>
      </div>

      <form onSubmit={handleSubmit} className="essay-form">
        <div className="textarea-container">
          <textarea
            value={essay}
            onChange={handleTextChange}
            placeholder="Write your UPSC essay here... Be sure to include a clear introduction, well-structured body paragraphs with examples and analysis, and a strong conclusion. Aim for at least 100 words for a meaningful evaluation."
            className="essay-textarea"
            rows={12}
          />
          <div className="textarea-footer">
            <div className="min-words">
              Minimum 100 words required
            </div>
          </div>
        </div>

        <motion.button
          type="submit"
          className="submit-button"
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          disabled={essay.trim().length < 100}
        >
          <Send className="submit-icon" />
          Evaluate Essay
        </motion.button>
      </form>

      <div className="tips-section">
        <h3>Tips for a Great Essay</h3>
        <ul>
          <li>Start with a clear thesis statement</li>
          <li>Use specific examples and evidence</li>
          <li>Maintain logical flow between paragraphs</li>
          <li>End with a strong conclusion</li>
          <li>Use varied vocabulary and sentence structure</li>
        </ul>
      </div>
    </motion.div>
  );
};

export default EssayInput;
