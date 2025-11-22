# Space-Themed Interactive Portfolio

Welcome to **Mission Control**. This is a revamped, high-fidelity personal portfolio designed with a futuristic space aesthetic. It features holographic interfaces, zero-gravity animations, and secure communication channels, all built on a modern React stack.

## 🚀 Features

- **🌌 The Void:** An immersive, procedurally generated HTML5 Canvas starfield background that tracks with the user.
- **🛸 HUD Navigation:** A floating, glassmorphism-styled "Head-Up Display" navigation bar.
- **👨‍🚀 Zero-G Hero Section:** Features a floating avatar with orbital rings and terminal-style typing effects.
- **🔮 Holographic Deck (Projects):** Project cards featuring 3D tilt effects (`react-parallax-tilt`) that respond to mouse movement.
- **📊 System Diagnostics (Skills):** Skills displayed as "Energy Levels" with neon scan-line animations.
- **📜 Captain's Log (Blog):** Custom CMS powered by Firebase Firestore to manage and display technical articles.
- **📡 Subspace Link (Contact):** A secure, terminal-styled contact form powered by **EmailJS** (hides personal contact info).
- **✨ Warp Speed Animations:** Smooth scroll reveal animations powered by **Framer Motion**.

## 🛠️ Tech Stack

- **Core:** React 19, Vite
- **Styling:** CSS3 (Custom Properties, Glassmorphism, Animations)
- **Animation:** Framer Motion, React Type Animation
- **Interactivity:** React Parallax Tilt
- **Backend Services:** Backend Services: Firebase Firestore (Content Management), Firebase Auth (Admin Access), EmailJS (Contact Form).
- **Icons:** React Icons (Font Awesome, Simple Icons)

## ⚙️ Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn

### Installation

1. **Clone the repository:**

   ```bash
   git clone [https://github.com/AshwaPuri24/personal-portfolio.git](https://github.com/AshwaPuri24/personal-portfolio.git)
   cd personal-portfolio
   ```

2. **Install dependencies:**
   _Note: Use `--legacy-peer-deps` due to React 19 compatibility with some animation libraries._

   ```bash
   npm install --legacy-peer-deps
   ```

3. **Start the development server:**

   ```bash
   npm run dev
   ```

4. Visit `http://localhost:5173` to view the mission control center.

## 🔧 Configuration

### 1. Setup Contact Form (EmailJS)

To make the contact form functional, you need to create an account at [EmailJS](https://www.emailjs.com/).

1. Create a **Service** (e.g., Gmail).
2. Create a **Template** (define how you want to receive the email).
3. Get your **Public Key**.
4. Open `src/components/Contact.jsx` and replace the placeholders:

   ```javascript
   emailjs.sendForm(
     "YOUR_SERVICE_ID",
     "YOUR_TEMPLATE_ID",
     formRef.current,
     "YOUR_PUBLIC_KEY"
   );
   ```

### 2. Setup Blog Feed

To fetch your own articles:

1. Open `src/components/Blog.jsx`.
2. Update the fetch URL with your Dev.to username:

   ```javascript
   // Replace 'yourusername' with your actual Dev.to handle
   fetch(
     "[https://dev.to/api/articles?username=yourusername&per_page=3](https://dev.to/api/articles?username=yourusername&per_page=3)"
   );
   ```

## 📂 Project Structure

```text
src/
├── components/
│   ├── AnimatedSection.jsx  # Wrapper for scroll animations
│   ├── StarBackground.jsx   # Canvas Starfield
│   ├── Navbar.jsx           # HUD Navigation
│   ├── Hero.jsx             # Zero-G Intro
│   ├── About.jsx            # Crew Profile
│   ├── Skills.jsx           # System Diagnostics
│   ├── Projects.jsx         # Holographic Deck
│   ├── Blog.jsx             # Captain's Log (Dev.to fetch)
│   ├── Contact.jsx          # Subspace Link (EmailJS)
│   └── Footer.jsx           # Mission Footer
├── Styles/                  # CSS Modules for specific themes
│   ├── index.css            # Global Vars (Deep Space Palette)
│   └── ...
├── App.jsx
└── main.jsx
```
