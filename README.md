# 🌟 Dynamic Portfolio Website

A full-featured **Dynamic Portfolio Web Application** that allows you to manage and showcase your personal or professional projects, blogs, and achievements.  
Built with **Next.js**, **TypeScript**, and **Tailwind CSS** on the client side, and powered by **Node.js**, **Express**, **Prisma ORM**, and **PostgreSQL** on the backend.  

This platform provides a **dashboard-based admin panel** where you can dynamically create, update, or delete portfolio items, blogs, and contact messages — all without editing code.

---

## 🚀 Project Overview

This dynamic portfolio enables users (especially developers or professionals) to:  

- ✨ Showcase projects with multiple images, technologies, and live/repo links.  
- 📝 Manage and publish blogs dynamically.  
- 📬 Receive contact messages directly from visitors.  
- 🧑‍💼 Admin dashboard for managing projects, blogs, and messages.  
- 🖼️ Upload and delete images securely using **Cloudinary**.  
- 🔐 Authentication for secure dashboard access (JWT-based).  
- 📊 View featured projects, blog details, and more on a clean, responsive UI.  

---

## 🧭 Dashboard Features

The **Admin Dashboard** provides full control over your portfolio content:  

- 📂 **Project Management:**  
  - Create, update, and delete projects.  
  - Upload multiple images and manage them individually.  
  - Add technologies, features, live demo links, and repository links.  
  - Mark projects as featured or unfeatured.  

- ✍️ **Blog Management:**  
  - Add, update, and delete blog posts.  
  - Upload thumbnails and write rich blog content using a text editor.  

- 💌 **Contact Management:**  
  - View messages sent by users through the contact form.  
  - Delete unwanted or spam messages.  

- 🧑‍💻 **User-Friendly Interface:**  
  - Simple and modern dashboard layout.  
  - Real-time form validation with **React Hook Form** and **Zod**.  
  - Toast notifications for all CRUD actions.  

---

## 🛠️ Technology Stack

### 🖥️ **Frontend (Client)**
- **Next.js (TypeScript)** — React framework for performance and SSR.  
- **Tailwind CSS + Shadcn UI** — Modern, clean, and responsive UI styling.  
- **React Hook Form + Zod** — Form validation and handling.  
- **React Hot Toast** — Toast notifications.  
- **Axios** — API communication.  
- **Framer Motion** — Smooth UI animations.  

### ⚙️ **Backend (Server)**
- **Node.js + Express.js (TypeScript)** — Scalable and modular REST API.  
- **Prisma ORM** — Type-safe database management with PostgreSQL.  
- **PostgreSQL** — Reliable relational database.  
- **Cloudinary** — Image hosting and management.  
- **JWT Authentication** — Secure route protection.  
- **Multer + Multer-Cloudinary Storage** — File uploads.  

---

## ⚙️ Setup Instructions

### 1️⃣ Clone the Repository

```bash
git clone https://github.com/sultanmahmud07/Dynamic-Portfolio-Client-NextJS.git
cd Dynamic-Portfolio-Client-NextJS
```

### 2️⃣ Install Dependencies

For both backend and frontend:

```bash
npm install
```

### 3️⃣ Configure Environment Variables

Create a `.env` file in both **client** and **server** folders.

#### Client `.env`
```
NEXT_PUBLIC_BASE_API=https://your-backend-domain.com/api/v1
```

### 4️⃣ Run Development Servers

#### Frontend
```bash
npm run dev
```

#### Backend
```bash
npm run dev
```

---

## 🌍 Live Links

- **Frontend (Live Demo):** [https://sultan-mahmud-portfolio.vercel.app](https://sultan-mahmud-portfolio.vercel.app)  
- **Backend (API):** [https://portfolio-api-brown-three.vercel.app/api/v1](https://portfolio-api-brown-three.vercel.app/api/v1)  

---

## 🧪 Test Credentials

For accessing the **Admin Dashboard**:

```
Email: owner@gmail.com
Password: W@123456
```

---

## 📁 Folder Structure

```
dynamic-portfolio/
│── public/                   # For Image/Assets
├── src/                      # Next.js Frontend
│   ├── app/                  # Pages & Routes
│   ├── components/           # Reusable UI components
│   ├── lib/                  # Utility functions
│   ├── hooks/                
│   ├── actions/              # Server action
│   └── public/     
│
└── README.md
```

---

## 💡 Highlights

- Dynamic, SEO-friendly portfolio website.  
- Modern dashboard with form validation and toast feedback.  
- Cloudinary image upload & delete integration.  
- Secure backend with Prisma and JWT.  
- Easy deployment on Vercel (frontend) and Render/Vercel (backend).  

---

