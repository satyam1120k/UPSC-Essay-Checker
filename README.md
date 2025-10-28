# UPSC Essay Rating System

AI-powered essay evaluation for UPSC practice. Enter an essay, the backend calls Google's Gemini model, and you get detailed feedback plus a score.

## Live Links

- Frontend (GitHub Pages): https://satyam1120k.github.io/UPSC-Essay-Checker
- Backend (Vercel): https://essay-checker-backend.vercel.app
- Repository: [UPSC-Essay-Checker on GitHub](https://github.com/satyam1120k/UPSC-Essay-Checker)

## How It Works

1. You submit an essay from the React UI.
2. The frontend sends `POST /evaluate` to the Flask backend on Vercel.
3. Backend workflow calls Gemini to analyze writing, depth of analysis, and clarity.
4. Backend returns scored results and feedback JSON.
5. Frontend renders the scorecard and section-wise feedback.

## Features

**Language Quality Evaluation**:This is a workflow for LangGraph to evaluate essays for rating and feedback

<img width="591" height="333" alt="Image" src="https://github.com/user-attachments/assets/d943a1c6-ab6d-4e3e-a961-0784dcbbc073" />

- **AI-Powered Evaluation**: Uses Google Gemini for analysis.
- **Multi-Dimensional Feedback**:
  - Language quality (grammar, vocabulary, style)
  - Depth of analysis (argumentation, critical thinking)
  - Clarity of thought (structure, logical flow)
- **Scoring**: Individual scores and average score out of 10.
- **Beautiful UI**: Smooth animations, responsive layout.

## Architecture

- **Frontend**: React 18, Framer Motion, Lucide, CSS.
- **Backend**: Flask + workflow (`EssayRating.py`) that calls Gemini.
- **Hosting**:
  - Frontend on GitHub Pages (gh-pages branch)
  - Backend on Vercel (`/evaluate`, `/health`)

## API

- `POST /evaluate`
  - Request JSON: `{ "essay": "..." }`
  - Response JSON: `{ language_feedback, analysis_feedback, clarity_feedback, overall_feedback, individual_score, avg_score }`
- `GET /health`
  - Response JSON: `{ status: "healthy", message: "UPSC Essay Rating API is running" }`

## Frontend Configuration

The frontend is preconfigured to call the Vercel backend by default.

- Default base URL in `src/App.js`: `https://essay-checker-backend.vercel.app`
- You can override with `REACT_APP_API_BASE_URL` at build/runtime.

Examples:

```bash
# Use Vercel backend (default)
npm start

# Explicit override
$env:REACT_APP_API_BASE_URL="https://essay-checker-backend.vercel.app"; npm start

# Use local backend (only if running Flask locally on 5000)
$env:REACT_APP_API_BASE_URL="http://localhost:5000"; npm start
```

## Deployments

### Backend (Vercel)

Prereqs: Google AI API key.

1. Add env var in Vercel Project Settings:
   - `GOOGLE_API_KEY`
2. Deploy. Your API becomes `https://<project>.vercel.app`.
3. Health check: `GET /health`
4. Evaluate: `POST /evaluate`

### Frontend (GitHub Pages)

Already configured with `gh-pages`.

Commands:

```bash
npm install
npm run deploy
```

This publishes the production build to the `gh-pages` branch and hosts it at `https://satyam1120k.github.io/UPSC-Essay-Checker`.

If needed, set in GitHub → Settings → Pages → Source: `Deploy from a branch`, Branch: `gh-pages`.

## Local Development

Backend:

```bash
pip install -r requirements.txt
python app.py  # http://localhost:5000
```

Frontend:

```bash
npm install
# Default hits Vercel. To use local backend instead:
$env:REACT_APP_API_BASE_URL="http://localhost:5000"; npm start
```

## Project Structure

```
├── src/
│   ├── components/
│   │   ├── EssayInput.js
│   │   ├── EssayInput.css
│   │   ├── FeedbackDisplay.js
│   │   ├── FeedbackDisplay.css
│   │   ├── ScoreCard.js
│   │   ├── ScoreCard.css
│   │   ├── LoadingSpinner.js
│   │   └── LoadingSpinner.css
│   ├── App.js
│   ├── App.css
│   ├── index.js
│   └── index.css
├── public/
│   └── index.html
├── app.py
├── EssayRating.py
├── requirements.txt
├── package.json
└── README.md
```

## Notes

- Ensure `GOOGLE_API_KEY` is set in the backend environment.
- CORS is enabled; restrict origins in production if needed.
- The frontend shows backend error messages when available.

## License

MIT
