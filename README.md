# Modern Developer Portfolio

A stunning, modern portfolio template built with React, Vite, and Tailwind CSS v4. Designed for developers who want to showcase their skills, projects, volunteer work, and professional journey with style and elegance.

## ✨ Features

- 🎨 **Modern Design System** - Clean, professional aesthetic with smooth animations
- 🚀 **Lightning Fast** - Built with Vite for optimal performance
- 📱 **Fully Responsive** - Looks great on all devices
- 🎭 **Interactive Elements** - Engaging hover effects and smooth transitions
- 📸 **Photo Gallery** - Beautiful masonry gallery for volunteer activities with lightbox
- 🎯 **Easy Configuration** - Single config file to customize everything
- 🌈 **Customizable Theme** - Change accent color site-wide
- ♿ **Accessible** - Built with accessibility best practices

## 🛠️ Built With

- **[React](https://react.dev/)** - UI library for building interactive interfaces
- **[Vite](https://vitejs.dev/)** - Next-generation frontend tooling
- **[Tailwind CSS v4](https://tailwindcss.com/)** - Utility-first CSS framework
- **JavaScript** - For dynamic functionality

## 🚀 Quick Start

### Prerequisites

- Node.js 18+ installed
- npm or yarn package manager

### Installation

1. Clone the repository:
```bash
git clone https://github.com/yourusername/your-portfolio.git
cd your-portfolio
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and visit `http://localhost:5173`

## 📝 Configuration

The entire portfolio is controlled through a single `src/config.js` file. Here's what you can customize:

### Basic Information
```javascript
{
  name: "Your Name",
  title: "Your Job Title",
  description: "Your portfolio description",
  profileImage: "/images/profile.jpg",
  accentColor: "#1d4ed8", // Changes theme color site-wide
  resume: "/files/your-resume.pdf"
}
```

### Social Links
```javascript
social: {
  email: "your.email@example.com",
  linkedin: "https://linkedin.com/in/yourprofile",
  github: "https://github.com/yourusername",
  twitter: "https://twitter.com/yourhandle" // Optional
}
```

### About Section
```javascript
aboutMe: "Your bio and background. Talk about your experience, interests, and what drives you as a developer."
```

### Skills
```javascript
skills: [
  "JavaScript",
  "React",
  "Node.js",
  "Go",
  "Python",
  // Add as many as you want
]
```

### Projects
```javascript
projects: [
  {
    name: "Project Name",
    description: "What the project does and its impact",
    link: "https://github.com/yourusername/project",
    skills: ["React", "TypeScript", "Node.js"]
  }
]
```

### Experience
```javascript
experience: [
  {
    company: "Company Name",
    title: "Your Position",
    dateRange: "Jan 2023 - Present",
    bullets: [
      "Achievement or responsibility 1",
      "Achievement or responsibility 2",
      "Achievement or responsibility 3"
    ]
  }
]
```

### Education
```javascript
education: [
  {
    school: "University Name",
    degree: "Your Degree",
    dateRange: "2018 - 2022",
    achievements: [
      "CGPA: 3.5/4.0",
      "Dean's List",
      "Relevant achievement"
    ]
  }
]
```

### Activities (Volunteer Work)
```javascript
activities: [
  {
    id: 1,
    image: "/images/activity-1.jpg",
    title: "Event or Activity Name",
    date: "Month Year",
    description: "What you did and its impact",
    category: "Category Name" // e.g., "Education", "Social Work"
  }
]
```

## 📁 Project Structure

```
portfolio/
├── public/
│   ├── images/           # Profile and activity images
│   └── files/            # Resume and other files
├── src/
│   ├── components/       # React components
│   │   ├── About.jsx
│   │   ├── Activity.jsx
│   │   ├── Education.jsx
│   │   ├── Experience.jsx
│   │   ├── Footer.jsx
│   │   ├── Header.jsx
│   │   ├── Hero.jsx
│   │   └── Projects.jsx
│   ├── App.jsx          # Main app component
│   ├── main.jsx         # Entry point
│   ├── index.css        # Global styles
│   └── config.js        # Site configuration
├── index.html
├── package.json
├── vite.config.js
└── tailwind.config.js
```

## 🎨 Customization

### Changing the Accent Color

Simply update the `accentColor` in `config.js`:
```javascript
accentColor: "#1d4ed8" // Any valid hex color
```

This will automatically update:
- Headings and accent text
- Buttons and interactive elements
- Hover effects
- Badges and indicators

### Adding Images

1. Place your images in the `public/images/` folder
2. Reference them in config.js using `/images/filename.jpg`
3. For activities, make sure images are properly sized for best display

### Hiding Sections

Simply remove or comment out sections in `config.js`. If a section has no data, it won't be displayed.

## 🚀 Building for Production

Build the production-ready files:
```bash
npm run build
```

Preview the production build:
```bash
npm run preview
```

## 📦 Deployment

This portfolio can be deployed to any static hosting service:

### Netlify
1. Connect your GitHub repository
2. Set build command: `npm run build`
3. Set publish directory: `dist`
4. Deploy!

### Vercel
1. Import your GitHub repository
2. Vercel auto-detects Vite settings
3. Deploy!

### GitHub Pages
1. Install gh-pages: `npm install --save-dev gh-pages`
2. Add to package.json:
```json
"homepage": "https://yourusername.github.io/repo-name",
"scripts": {
  "predeploy": "npm run build",
  "deploy": "gh-pages -d dist"
}
```
3. Run: `npm run deploy`

### Other Platforms
Works with any static host: Cloudflare Pages, Render, Firebase Hosting, etc.

## 🎯 Key Sections

### Hero Section
- Eye-catching introduction
- Profile image with floating animation
- Quick stats badges
- Call-to-action buttons

### About Section
- Professional bio
- Feature cards (Clean Code, Performance, Problem Solving)
- Interactive skill pills
- Dynamic statistics

### Projects Section
- Numbered project cards
- External link indicators
- Technology stack badges
- Hover effects with accent line

### Experience Section
- Vertical timeline design
- Animated dots
- Company and role details
- Responsibilities and achievements

### Education Section
- Academic background
- Achievement highlights
- Decorative elements
- Date badges

### Activities Section
- Masonry photo gallery
- Lightbox for full-size viewing
- Category badges
- Image navigation
- Perfect for showcasing volunteer work

## 🤝 Contributing

Feel free to fork this project and customize it for your own use. If you make improvements, pull requests are welcome!

## 📄 License

This project is open source and available under the MIT License.

## 🙏 Acknowledgments

Built with passion for developers who want to make an impact through both code and community service.

## 📬 Questions?

Feel free to reach out if you have any questions or need help customizing your portfolio!

---

⭐ **Star this repo if you found it helpful!**