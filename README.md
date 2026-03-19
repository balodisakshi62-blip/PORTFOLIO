# Portfolio Website

Personal portfolio website for Sakshi Patwal. The site highlights skills, projects, experience, and a contact section with smooth navigation and interactive UI elements.

## Features
- **Full-Stack Portfolio**: Frontend with backend API for contact form functionality
- **Multi-page Portfolio**: Separate pages for Home, About, Projects, Testimonials, and Contact
- **Dark/Light Mode Toggle**: Switch between themes with smooth transitions
- **Animated Particle Background**: Interactive floating particles that respond to theme changes
- **GSAP Animations**: Professional scroll-triggered animations and transitions
- **Responsive navigation** with hamburger menu and active page highlighting
- **Hero section** with animated metrics and circular profile image
- **Skills section** with animated progress bars
- **Projects section** with expandable details and hover animations
- **Testimonials section** with customer reviews
- **Contact form** with backend email sending functionality
- **Scroll reveal animations** and back-to-top button
- **Loading screen** with spinner animation

## Tech Stack
### Frontend
- HTML5
- CSS3 with CSS Variables for theming
- JavaScript (vanilla) with modern ES6+ features
- GSAP (GreenSock Animation Platform) for advanced animations
- Google Fonts (Playfair Display, Space Grotesk)
- Font Awesome icons

### Backend
- Node.js with Express.js
- Nodemailer for email functionality
- CORS for cross-origin requests
- Environment variables for configuration

## Project Structure
- `index.html` — Home page with hero section and navigation
- `about.html` — About page with skills and experience
- `projects.html` — Projects page with portfolio showcase
- `testimonials.html` — Testimonials page with client reviews
- `contact.html` — Contact page with contact form
- `styles.css` — Shared styles for all pages
- `script.js` — Shared JavaScript functionality with form handling
- `server.js` — Express server for backend API
- `package.json` — Node.js dependencies and scripts
- `.env` — Environment variables (email configuration)
- `ex.jpg` — Profile image
- `sakshi patwal.docx` — Resume download

## Setup and Installation

### Prerequisites
- Node.js (v14 or higher)
- npm or yarn
- Gmail account (for email functionality)

### Backend Setup

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Configure environment variables:**
   - Copy `.env.example` to `.env`
   - Replace `your-email@gmail.com` with your Gmail address
   - Replace `your-app-password` with your Gmail App Password

   **Important Gmail Setup:**
   - Enable 2-factor authentication on your Google account
   - Generate an App Password: Go to [Google Account Settings](https://myaccount.google.com/) > Security > App passwords
   - Use the generated 16-character app password (not your regular password)
   - If you don't want to use Gmail, you can modify `server.js` to use another email service

3. **Start the server:**
   ```bash
   # Development mode (with auto-restart)
   npm run dev

   # Production mode
   npm start
   ```

4. **Access the website:**
   - Frontend: `http://localhost:3001`
   - API Health Check: `http://localhost:3001/api/health`

5. **Test the contact form:**
   - Fill out the contact form on the website
   - Submit it to verify email functionality
   - Check your email for the received message

### Frontend Only (Static)
If you prefer to run only the frontend without backend functionality:

1. Open `index.html` in a browser
2. Or use a local static server:

```bash
# from the project folder
python -m http.server 8000
```
Then visit `http://localhost:8000`.

**Note:** Contact form won't work without the backend running.

## Customize
- Update your name, hero text, and section content in `index.html`.
- Replace `myimg.jpg` with your own photo (keep the same filename or update the `src`).
- Replace `sakshi patwal.docx` with your resume file and update the link text if needed.
- Edit colors, typography, and spacing in `styles.css`.
- Add or remove projects inside the `.projects-grid` in `index.html`.

## Notes
- The contact form is currently client-side only and does not send emails. Connect it to a backend or form service to make it functional.

