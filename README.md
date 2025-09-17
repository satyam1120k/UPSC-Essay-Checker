# UPSC Essay Rating System

A beautiful React-based web application for AI-powered essay evaluation, designed specifically for UPSC essay practice. The system provides comprehensive feedback across multiple dimensions including language quality, depth of analysis, and clarity of thought.

## Features

- **Beautiful Modern UI**: Clean, responsive design with beautiful typography using Inter and Playfair Display fonts
- **AI-Powered Evaluation**: Uses Google's Gemini AI model for comprehensive essay analysis
- **Multi-Dimensional Feedback**:
  - Language Quality (grammar, vocabulary, writing style)
  - Depth of Analysis (critical thinking, argumentation)
  - Clarity of Thought (structure, logical flow)
- **Real-time Scoring**: Overall score out of 10 with detailed breakdown
- **Interactive Experience**: Smooth animations and loading states
- **Responsive Design**: Works perfectly on desktop and mobile devices

## Technology Stack

### Frontend

- React 18
- Framer Motion (animations)
- Lucide React (icons)
- CSS3 with modern features
- Axios (API calls)

### Backend

- Python Flask
- LangGraph (workflow management)
- LangChain (AI integration)
- Google Generative AI (Gemini 2.5 Flash)

## Setup Instructions

### Prerequisites

- Node.js (v14 or higher)
- Python 3.8 or higher
- Google AI API key

### Backend Setup

#### Deploy on Vercel (free)

1. Create a Vercel account and install the Vercel CLI (optional).
2. Ensure `vercel.json` exists in the repo (already added).
3. Push the repo to GitHub.
4. Import the repo in Vercel → Framework Preset: Others → root is project root.
5. Add Environment Variables:
   - `GOOGLE_API_KEY` (required)
6. Deploy. Your API base URL will be `https://<project>.vercel.app`.

   - Endpoints: `POST /evaluate`, `GET /health`.

7. **Install Python dependencies:**

   ```bash
   pip install -r requirements.txt
   ```

8. **Set up environment variables:**
   Create a `.env` file in the root directory:

   ```
   GOOGLE_API_KEY=your_google_api_key_here
   ```

9. **Run the Flask backend:**
   ```bash
   python app.py
   ```
   The backend will run on `http://localhost:5000`

#### Production environment variables

Set these on your hosting platform (Vercel or similar):

- `GOOGLE_API_KEY` (required)
- `FRONTEND_ORIGIN` (e.g., `https://your-frontend-domain`)
- `PORT` (provided by platform)
- `FLASK_DEBUG=false`

### Frontend Setup

1. **Install Node.js dependencies:**

   ```bash
   npm install
   ```

2. **Start the React development server:**
   ```bash
   npm start
   ```
   The frontend will run on `http://localhost:3000`

For production set `REACT_APP_API_BASE_URL` at build time (use your Vercel backend URL):

```bash
REACT_APP_API_BASE_URL=https://<your-vercel-project>.vercel.app npm run build
```

## Usage

1. Open your browser and navigate to `http://localhost:3000`
2. Write your essay in the text area (minimum 100 words)
3. Click "Evaluate Essay" to submit
4. View your detailed feedback and score across different dimensions
5. Use the feedback to improve your writing

## Project Structure

```
├── src/
│   ├── components/
│   │   ├── EssayInput.js          # Essay input form
│   │   ├── EssayInput.css
│   │   ├── FeedbackDisplay.js     # Feedback display component
│   │   ├── FeedbackDisplay.css
│   │   ├── ScoreCard.js          # Score display component
│   │   ├── ScoreCard.css
│   │   ├── LoadingSpinner.js     # Loading animation
│   │   └── LoadingSpinner.css
│   ├── App.js                     # Main application component
│   ├── App.css                    # Main application styles
│   ├── index.js                   # React entry point
│   └── index.css                  # Global styles
├── public/
│   └── index.html                 # HTML template
├── app.py                         # Flask backend API
├── EssayRating.py                 # AI evaluation logic
├── requirements.txt               # Python dependencies
├── package.json                   # Node.js dependencies
└── README.md                      # This file
```

## API Endpoints

- `POST /evaluate` - Evaluate an essay and return feedback
- `GET /health` - Health check endpoint

## Customization

### Styling

The application uses CSS custom properties for easy theming. Main colors can be changed by modifying the CSS variables in the component files.

### AI Model

The AI model can be changed by modifying the `model` variable in `EssayRating.py`. Currently using `gemini-2.5-flash`.

### Evaluation Criteria

The evaluation prompts can be customized in the individual evaluation functions in `EssayRating.py`.

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## License

This project is open source and available under the MIT License.
