# 🗨️ NeoCha - Simple, Secure Chat

![NeoCha Logo](public/logo.png)

A modern chat application with real-time messaging, end-to-end encryption, and beautiful dark/light mode.

---

## ✨ Features

- **Real-time messaging** — Instant message delivery
- **End-to-end encryption** — Secure your conversations
- **Dark/light mode** — Automatic system preference or manual toggle
- **Modern UI** — Clean, responsive interface
- **User authentication** — Powered by Clerk

---

## 🚀 Quick Start

### 🔧 Prerequisites

- Node.js v18+
- Stream & Clerk accounts

### 📦 Installation

\`\`\`bash
git clone https://github.com/yourusername/neocha.git
cd neocha
npm install
\`\`\`

### ⚙️ Environment Setup

Create a \`.env.local\` file with the following content:

\`\`\`env
# Clerk Authentication
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY="your_publishable_key"
CLERK_SECRET_KEY="your_secret_key"
NEXT_PUBLIC_CLERK_SIGN_IN_URL="/sign-in"
NEXT_PUBLIC_CLERK_SIGN_UP_URL="/sign-up"

# Stream Chat
NEXT_PUBLIC_STREAM_API_KEY="your_stream_key"
STREAM_API_SECRET="your_stream_secret"
\`\`\`

### ▶️ Running the App

\`\`\`bash
npm run dev
\`\`\`

Open your browser at: [http://localhost:3000](http://localhost:3000)

---

## 🛠 Technical Details

### 🧱 Tech Stack

- **Frontend:** Next.js 14
- **Styling:** Tailwind CSS
- **Authentication:** Clerk
- **Chat API:** Stream Chat
- **Loading States:** Built-in Next.js Suspense

### ⏳ Loading Component

This component respects dark/light mode automatically:

\`\`\`tsx
// app/loading.tsx
'use client'

export default function Loading() {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm z-50">
      <div className="flex flex-col items-center gap-4">
        <div className="h-12 w-12 border-4 border-emerald-600 dark:border-emerald-500 border-t-transparent rounded-full animate-spin"></div>
        <p className="text-lg font-medium text-gray-700 dark:text-gray-300">
          Loading NeoCha...
        </p>
      </div>
    </div>
  )
}
\`\`\`

---

## 📂 Project Structure

\`\`\`
neocha/
├── app/
│   ├── (auth)/             # Auth routes
│   ├── chat/               # Chat interface
│   ├── layout.tsx          # Root layout
│   ├── loading.tsx         # Global loading UI
│   └── page.tsx            # Landing page
├── components/             # Reusable components
├── lib/                    # Utilities
├── public/                 # Static assets
└── styles/                 # Global styles
\`\`\`

---

## 🌈 Theming

NeoCha supports automatic dark/light theming.

Customize theme colors in \`tailwind.config.js\`:

\`\`\`js
module.exports = {
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#059669', // Emerald-600
          dark: '#10B981',    // Emerald-500
        }
      }
    }
  }
}
\`\`\`

---

## 🚀 Deployment

### ✅ Vercel (Recommended)

1. Push the project to GitHub.
2. Create a new project on [Vercel](https://vercel.com).
3. Add your environment variables.
4. Deploy instantly!

---
