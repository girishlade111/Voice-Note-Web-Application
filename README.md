# 🎙️ Voice Notes — Voice-Note Web Application

A client-side **voice note-taking web app**: press the mic button, speak, and your words are transcribed in real time into editable, searchable, taggable notes — all in the browser, with **no server, no login, and no build step**.

## ✨ Features

- **Speech-to-text notes** — one-tap microphone recording via the Web Speech API (`SpeechRecognition`), with live status feedback.
- **Offline support** — app shell and notes work offline; notes persist in the browser.
- **Note management** — create, edit, and delete notes; per-note timestamps and tag editing.
- **Search & filter** — full-text search across transcripts plus tag-based filters.
- **Clean responsive UI** — Google-style design system (blue/red/yellow/green palette), empty states, toasts, and a delete-confirmation modal.
- **Component design docs** — accompanying React (TSX) component layouts (`Main Interface Layout.tsx`, `Voice Interface.tsx`), a search-engine JS module (`Search Engine.js`), and a data-flow document (`Data Flow.txt`) for rebuilding the app in a modern stack.

## 🛠️ Tech Stack

- HTML5 / CSS3 / Vanilla JavaScript (zero dependencies)
- Web Speech API (`SpeechRecognition`) for voice input
- Browser localStorage for persistence
- React/TSX component specs + plain JS search engine (reference design material)

## 🚀 Quick Start

1. Clone the repo:
   ```bash
   git clone https://github.com/girishlade111/Voice-Note-Web-Application.git
   cd Voice-Note-Web-Application
   ```
2. Open `voice-notes-app.html` in a Chromium-based browser (Chrome/Edge) — speech recognition requires a browser that supports the Web Speech API.
3. Click the **microphone button**, speak, and your transcript appears as a new note. Use search and tags to organize.

> Note: the Web Speech API requires microphone permission and works best online (Chrome streams audio to Google's servers). All notes stay in your own browser's localStorage.

## 📁 Project Structure

| File | Purpose |
|---|---|
| `voice-notes-app.html` | The complete standalone app (UI + logic + styles) |
| `Main Interface Layout.tsx` | React component layout for the main interface |
| `Voice Interface.tsx` | React component spec for the voice-recording UI |
| `Search Engine.js` | Standalone search/filter engine (JS) |
| `Data Flow.txt` | Data-flow documentation for the app |
| `README.md` | This file |
| `LICENSE` | MIT License |

## 🌐 Live Demo

Hosted on GitHub Pages: https://girishlade111.github.io/Voice-Note-Web-Application/

## 👤 Author

*Built by Girish Lade — [ladestack.in](https://ladestack.in)*

## 📄 License

MIT — see [LICENSE](LICENSE).
