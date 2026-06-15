# 💼 JobPortal - Revenio Next.js Assessment Task

A modern, fully responsive Job Portal application built with **Next.js 14 (App Router)** and **Tailwind CSS**, integrated with **Firebase Authentication** and a custom backend API server. This project satisfies all required public, dynamic, and protected routing parameters defined in the Revenio Assessment Doc.

🖥️ **Live Demo:** [job-portal-client-ashen-phi.vercel.app](https://job-portal-client-ashen-phi.vercel.app/)  
🌐 **Backend Repository:** [Job-Portal-servers](https://github.com/md-tahmid-hasan-golap/Job-Portal-servers)

---

## 🚀 Key Features

### 1. Landing Page (`/`) — 7 Complete Sections

- **Sticky & Responsive Navbar:** Features a professional branding logo, 4+ core navigations, dynamic Auth action triggers (Login/Register hooks or a rich Dropdown menu for Authenticated users).
- **Dynamic User Dropdown:** Authenticated profiles toggle high-priority workflows: User Profile Info, Add Product/Job, and Manage Products/Jobs.
- **Hero Banner:** Catchy headline built with a professional, polished visual layer, supporting micro-interactions and explicit Call-to-Actions (CTAs).
- **4 Custom Theme Sections:** Integrated grid highlights showcasing job categories, featured open listings, user testimonials, and a promotional structural banner.
- **Footer:** Semantic bottom layer supporting core routing maps, dynamic social hooks, and standard legal licensing blocks.

### 2. Job Showcase and Advanced Discovery Filters (`/items`)

- Full-text dynamic client/server data query tracking via a centralized Search box.
- Two-way compound array filters covering Job Categories, Location models, and Salary ranges.
- Uniform hover/focus tracking responsive grids presenting descriptive job overview asset blocks.

### 3. Dynamic Structural Overviews (`/items/[id]`)

- Fully customized static/server rendering architecture using Next.js App Router dynamic paths (`/items/[id]`).
- Clean visual segregation of complete roles, operational checklists, specific functional tools, structural business data models, and an explicit quick browser back trigger.

### 4. Authentication Architecture (Firebase Ecosystem)

- Strict standard email-password structure and single-tap OAuth workflows (Google Sign-In integration).
- Centralized Auth context framework ensuring smooth runtime synchronization across client components.

### 5. Multi-Layer Protected Flows (`/items/add` & `/items/manage`)

- **Add Items Route:** Inline validation, reactive UI tracking, instant submission payloads, and rich reactive confirmation status modals.
- **Manage Items Route:** Administrative data-grid table tracking current active postings alongside responsive View/Delete structural action keys.

---

## 🛠️ Tech Stack Used

- **Frontend Core:** Next.js (App Router), React.js, JavaScript (ES6+)
- **Styling Architecture:** Tailwind CSS, Lucide React (Icons)
- **Data Query Framework:** TanStack Query (`@tanstack/react-query`), Axios Secure Layer
- **Identity & Auth Control:** Firebase Authentication Ecosystem
- **Database Backend:** Node.js, Express.js, MongoDB Integration

---

## 🗺️ Route Summary

| Route                  | Accessibility    | Description                                                                   |
| :--------------------- | :--------------- | :---------------------------------------------------------------------------- |
| `/`                    | **Public**       | Core landing pad including the 7 required sections & dynamic nav layouts.     |
| `/items`               | **Public**       | Advanced discovery grid featuring compound filters and query search blocks.   |
| `/items/[id]`          | **Public**       | Dynamic Next.js details route rendering comprehensive specifications.         |
| `/about`               | **Public**       | Minimal clean structural roadmap outlining platform infrastructure.           |
| `/login` / `/register` | **Public**       | Firebase Identity provider gates supporting dynamic state caching.            |
| `/items/add`           | 🔒 **Protected** | Secure operational form layout restricted to active authentic profile states. |
| `/items/manage`        | 🔒 **Protected** | Advanced data tracking dashboard supporting administrative actions.           |

---

## ⚙️ Setup & Installation Instructions

Follow these instructions to run the frontend client application locally:

### 1. Clone the Repository

```bash
git clone [https://github.com/md-tahmid-hasan-golap/job-portal-client.git](https://github.com/md-tahmid-hasan-golap/job-portal-client.git)
cd job-portal-client
```
