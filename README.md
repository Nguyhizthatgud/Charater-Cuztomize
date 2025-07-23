# Character Customization App 🎨👤

**⚠️ PORTFOLIO & EDUCATIONAL PROJECT ONLY ⚠️**

_This project is created solely for portfolio demonstration and educational purposes. Not intended for commercial use._

## 📋 Project Overview

A React-based character customization application that allows users to create and customize virtual characters by mixing and matching different body parts, clothing layers, and accessories. Built with modern web technologies including React, Vite, and TailwindCSS.

## ✨ Features

- **🎯 Interactive Character Builder**: Mix and match various character assets
- **👕 Layered Clothing System**: Multiple clothing layers (vests, shirts, jackets)
- **💎 Accessories Support**: Earrings, glasses, hats, and neckwear
- **🎲 Random Generator**: One-click random character generation
- **📱 Responsive Design**: Works on desktop and mobile devices
- **⚡ Real-time Preview**: See changes instantly as you customize

## 🛠️ Tech Stack

- **Frontend**: React 19.1.0
- **Build Tool**: Vite 7.0.4
- **Styling**: TailwindCSS 4.1.11
- **Code Quality**: ESLint
- **Package Manager**: npm

## 🚀 Getting Started

### Prerequisites

- Node.js (version 16 or higher)
- npm

### Installation

1. **Clone the repository**

   ```bash
   git clone <repository-url>
   cd Character-customization-app
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Start development server**

   ```bash
   npm run dev
   ```

4. **Open in browser**
   Navigate to `http://localhost:5173`

### Available Scripts

```bash
npm run dev      # Start development server
npm run build    # Build for production
npm run preview  # Preview production build
npm run lint     # Run ESLint
```

## 📁 Project Structure

```
Character-customization-app/
├── public/
│   └── character/          # Character asset images
│       ├── accessories/
│       ├── body/
│       ├── clothes/
│       ├── eyes/
│       ├── hair/
│       └── ...
├── src/
│   ├── components/         # React components
│   │   ├── CharacterCustomizer.jsx
│   │   ├── CharacterPreview.jsx
│   │   └── CustomizationPanel.jsx
│   ├── config/
│   │   └── characterAssets.js  # Asset configuration
│   ├── App.jsx
│   └── main.jsx
└── package.json
```

## 🎮 How to Use

1. **Preview Panel**: View your character in real-time on the left side
2. **Customization Panel**: Select different options from various categories:
   - 💪 Body types
   - 👀 Eyes
   - 💇 Hair styles
   - 👄 Mouths
   - 🤨 Eyebrows
   - 👃 Noses
   - 🧔 Facial hair
   - 👕 Clothing layers
   - 💎 Accessories
3. **Random Generator**: Click "🎲 Lựa đại" for random character generation

## 🏗️ Architecture Highlights

### Component Structure

- **CharacterCustomizer**: Main container component managing state
- **CharacterPreview**: Renders the character with layered images
- **CustomizationPanel**: Provides selection interface for all assets

### Asset Management

- Centralized asset configuration in [`characterAssets.js`](src/config/characterAssets.js)
- Support for both flat and layered asset categories
- Helper functions for asset retrieval and random selection

### Layering System

- Proper z-index management for character rendering
- Support for multiple clothing layers
- Accessories rendered in correct order

## 🎨 Customization Categories

- **Body Parts**: 17 different body types
- **Eyes**: 24 eye variations
- **Hair**: 20 hairstyles
- **Facial Features**: Mouths, eyebrows, noses, facial hair
- **Clothing**: 3-layer system (vests, shirts, jackets)
- **Accessories**: Earrings, glasses, hats, neckwear

## 📝 Educational Value

This project demonstrates:

- **React Hooks**: useState for state management
- **Component Architecture**: Modular, reusable components
- **Asset Management**: Organized asset loading and configuration
- **CSS-in-JS**: TailwindCSS utility classes
- **Build Tools**: Modern Vite setup
- **Code Quality**: ESLint configuration
- **Responsive Design**: Mobile-first approach

## 🎓 Learning Outcomes

- Understanding React component lifecycle and state management
- Working with complex data structures and asset management
- Implementing layered rendering systems
- Building responsive user interfaces
- Managing project configuration and build tools

## ⚠️ Important Notice

**This project is created exclusively for:**

- Portfolio demonstration
- Educational purposes
- Learning React and modern web development
- Showcasing coding skills and project structure

**NOT intended for:**

- Commercial use
- Production deployment
- Revenue generation
- Distribution as a commercial product

## 📄 License

This project is for educational and portfolio purposes only. All assets and code are intended for learning and demonstration.

## 🤝 Contributing

This is a portfolio project. If you're using this for educational purposes, feel free to fork and experiment!

---

\*Built with ❤️ for learning
