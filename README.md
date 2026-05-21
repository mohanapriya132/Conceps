# CONCEPS — React + Tailwind CSS Web App

A multi-page frontend web application built with **React.js**, **Tailwind CSS**, and **Vite**. Includes authentication flow, a full dashboard, registration form, data list, and a store with product details modal — all pixel-matched to the provided Figma design.

---

## 🚀 Tech Stack

| Technology | Version | Purpose |
|---|---|---|
| React.js | ^18.2.0 | UI framework |
| React Router DOM | ^6.22.0 | Client-side routing |
| Tailwind CSS | ^3.4.1 | Utility-first styling |
| Vite | ^5.1.0 | Build tool & dev server |
| Lucide React | ^0.383.0 | Icon library |
| PostCSS + Autoprefixer | latest | CSS processing |

---

## 📁 Project Structure

```
conceps/
├── public/
├── src/
│   ├── components/
│   │   ├── Layout.jsx        # Shared layout wrapper (Sidebar + Topbar)
│   │   ├── Sidebar.jsx       # Collapsible sidebar navigation
│   │   ├── Topbar.jsx        # Top header bar with breadcrumb & icons
│   │   └── PageHeader.jsx    # Reusable page title + subtitle component
│   ├── pages/
│   │   ├── SignIn.jsx         # Sign In page
│   │   ├── SignUp.jsx         # Sign Up page
│   │   ├── OTPVerify.jsx      # OTP verification with countdown timer
│   │   ├── Dashboard.jsx      # Main dashboard with stats, charts & teams
│   │   ├── RegistrationForm.jsx # User registration form
│   │   ├── List.jsx           # Data list with search & pagination
│   │   └── StoreGrid.jsx      # Product grid + Product Details modal
│   ├── App.jsx                # Root component with all routes
│   ├── main.jsx               # React DOM entry point
│   └── index.css              # Global styles + Tailwind directives
├── index.html
├── vite.config.js
├── tailwind.config.js
├── postcss.config.js
└── package.json
```

---

## 📄 Pages & Routes

| Page | Route | Description |
|---|---|---|
| Sign In | `/signin` | Login with email/password, Google & Apple SSO buttons |
| Sign Up | `/signup` | Register with email, password, confirm password & T&C |
| OTP Verify | `/verify` | 6-digit OTP input with countdown resend timer |
| Dashboard | `/dashboard` | Social stats, highlights, earnings chart, team meeting & teams table |
| Registration Form | `/registration` | Full user form — name, email, contact, department, state, city, address, radio & checkbox fields |
| List | `/list` | Searchable, paginated table of registered users |
| Store Grid | `/store` | Product grid with filters; click any card to open Product Details modal |

---

## ⚙️ Getting Started

### Prerequisites

Make sure you have the following installed:

- [Node.js](https://nodejs.org/) — v18 or higher
- npm — v9 or higher (comes with Node.js)

### Installation

**1. Clone the repository**

```bash
git clone https://github.com/your-username/conceps-app.git
cd conceps-app
```

**2. Install dependencies**

```bash
npm install
```

**3. Start the development server**

```bash
npm run dev
```

The app will be running at **http://localhost:5173**

---

## 🛠️ Available Scripts

| Command | Description |
|---|---|
| `npm run dev` | Start development server with hot reload |
| `npm run build` | Build for production (outputs to `/dist`) |
| `npm run preview` | Preview the production build locally |

---

## 🗺️ App Flow

```
/signin  ──→  /verify (OTP)  ──→  /dashboard
                                      │
                    ┌─────────────────┼──────────────────┐
                    ↓                 ↓                  ↓
              /registration        /list             /store
                                                      (Product Details Modal)
```

---

## ✨ Features

- **Authentication Pages** — Sign In, Sign Up with Google/Apple buttons, OTP verification with live countdown timer
- **Collapsible Sidebar** — Fully collapsible sidebar with USER and APPS sections, active route highlighting
- **Dashboard** — Social media stats cards, sales highlights with progress bars, earnings bar chart, team meeting card, teams table with star ratings and pagination
- **Registration Form** — Controlled form with dropdowns (Department, State, City), radio buttons (Currently Working), checkboxes (Years of Experience), and full validation-ready structure
- **List Page** — Searchable table showing registered users with department, contact, location, working status, and experience; includes pagination controls
- **Store Grid** — 4-column product grid with save badges, star ratings, price display, filter bar, and a Product Details modal with Add to Cart
- **Responsive Layout** — Built with Tailwind CSS utility classes throughout
- **Clean Routing** — React Router v6 with nested routes for the dashboard layout

---

## 🎨 Design Reference

This project is a code implementation of the **CONCEPS Web Assignment** Figma design, covering 8 screens:

1. Sign In
2. Sign Up
3. OTP Verification
4. Dashboard
5. Registration Form
6. List
7. Store — Search Results Grid
8. Store — Product Details Modal

---

## 📦 Dependencies

```json
{
  "dependencies": {
    "react": "^18.2.0",
    "react-dom": "^18.2.0",
    "react-router-dom": "^6.22.0",
    "lucide-react": "^0.383.0"
  },
  "devDependencies": {
    "@vitejs/plugin-react": "^4.2.0",
    "autoprefixer": "^10.4.17",
    "postcss": "^8.4.35",
    "tailwindcss": "^3.4.1",
    "vite": "^5.1.0"
  }
}
```

---

## 🚢 Deployment

### Deploy to Vercel

```bash
npm run build
# Upload the /dist folder to Vercel, or connect your GitHub repo directly
```

### Deploy to Netlify

```bash
npm run build
# Drag and drop the /dist folder to Netlify, or connect your GitHub repo
```

> **Build output directory:** `dist`  
> **Build command:** `npm run build`

---

## 👩‍💻 Author

Built by **Priya** — Frontend Developer  
YouTube: [@Preedi_beyond](https://youtube.com/@Preedi_beyond)

---

## 📝 License

This project is for assignment/portfolio purposes.