# FlowPilot — SaaS Project Management Landing Page

FlowPilot is a responsive SaaS landing page for a fictional project management platform. It is designed to help teams organize projects, manage tasks, collaborate effectively, and track their progress through a simple workspace.

This project was developed as part of a frontend development assignment.

## 🌐 Live Demo

[View FlowPilot](https://flow-pilot-saas.netlify.app/)

## ✨ Features

- **Responsive Navigation:** Desktop navigation and mobile hamburger menu.
- **Hero Section:** Clear introduction with a visual project dashboard preview.
- **Features Section:** Highlights project management, team collaboration, and progress tracking.
- **How It Works:** Explains the platform through a simple three-step process.
- **Pricing Section:** Two pricing plans with an interactive monthly/yearly billing toggle.
- **Contact Form:** Controlled form inputs, browser validation, and a success message.
- **Footer:** Quick navigation links and copyright information.

## 🛠️ Tech Stack

- React.js
- JavaScript (ES6+)
- Vite
- Tailwind CSS
- Lucide React

## 📁 Project Structure

```text
flowpilot/
├── public/
├── src/
│   ├── components/
│   │   ├── Navbar.jsx
│   │   ├── Footer.jsx
│   │   ├── FeatureCard.jsx
│   │   ├── StepCard.jsx
│   │   └── PricingCard.jsx
│   ├── data/
│   │   ├── features.js
│   │   ├── steps.js
│   │   └── pricing.js
│   ├── sections/
│   │   ├── Hero.jsx
│   │   ├── Features.jsx
│   │   ├── HowItWorks.jsx
│   │   ├── Pricing.jsx
│   │   └── Contact.jsx
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── index.html
├── package.json
└── vite.config.js
```

## 🚀 Getting Started

Follow these steps to run the project locally.

### 1. Clone the repository

```bash
git clone https://github.com/Ritikraj551/flowpilot.git
```

### 2. Navigate to the project directory

```bash
cd flowpilot
```

### 3. Install dependencies

```bash
npm install
```

### 4. Start the development server

```bash
npm run dev
```

Open the local URL displayed in your terminal to view the application.

### 5. Create a production build

```bash
npm run build
```

## 📱 Responsive Design

The landing page is designed to work across desktop, tablet, and mobile screen sizes using Tailwind CSS responsive utilities.

## 📝 Implementation Notes

- Reusable React components are used to maintain a consistent structure.
- Feature cards, process steps, and pricing plans are rendered dynamically from separate data files.
- React `useState` manages the pricing toggle and contact form state.
- The contact form uses frontend validation and displays a success message. It does not send data to a backend.
- Pricing information is sample content for demonstration purposes.

## 👨‍💻 Author

Developed as a frontend development assignment using React and Tailwind CSS.