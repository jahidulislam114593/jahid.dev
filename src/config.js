/**
 * @typedef {Object} Social
 * @property {string} email
 * @property {string} linkedin
 * @property {string} github
 * @property {string} [twitter]
 */

/**
 * @typedef {Object} Project
 * @property {string} name
 * @property {string} description
 * @property {string} link
 * @property {string[]} skills
 */

/**
 * @typedef {Object} Experience
 * @property {string} company
 * @property {string} title
 * @property {string} dateRange
 * @property {string[]} bullets
 */

/**
 * @typedef {Object} Education
 * @property {string} school
 * @property {string} degree
 * @property {string} dateRange
 * @property {string[]} achievements
 */

/**
 * @typedef {Object} Activity
 * @property {number} id
 * @property {string} image
 * @property {string} title
 * @property {string} date
 * @property {string} description
 * @property {string} category
 */

/**
 * @typedef {Object} SiteConfig
 * @property {string} name
 * @property {string} title
 * @property {string} description
 * @property {string} profileImage
 * @property {string} accentColor
 * @property {Social} social
 * @property {string} resume
 * @property {string} aboutMe
 * @property {string[]} skills
 * @property {Project[]} projects
 * @property {Experience[]} experience
 * @property {Education[]} education
 * @property {Activity[]} activities
 */

/** @type {SiteConfig} */
export const siteConfig = {
  name: "Jahidul Islam",
  title: "Software Engineer",
  description:
    "Portfolio website of Jahidul Islam",
  profileImage: "/images/profile.png",
  accentColor: "#1d4ed8",
  social: {
    email: "jahid.prog@gmail.com",
    linkedin: "https://linkedin.com/in/thisisjahid",
    github: "https://github.com/jahidulislam114593",
  },
  resume: "/files/jahidulislam_23_nov_25.pdf",
  aboutMe:
    "I'm a CS engineer who loves building fast, scalable backend systems with Golang, JavaScript, Node.js, and PostgreSQL. I enjoy shaping clean API architectures, automating things with CLI tools, and occasionally jumping into React.js when a project needs a polished UI. Lately, I've been exploring AI and Machine Learning to push my skills even further. Beyond tech, I'm into science, gaming, and creating content that helps others navigate the world of programming.",
  skills: [
    "C/C++",
    "Go", 
    "JavaScript",
    "React",
    "Node.js",
    "PostgreSQL",
    "CSS",
    "TailwindCSS",
    "Git",
  ],
  projects: [
    {
      name: "Drag-File",
      description:
        "A modern, interactive document uploader built with React, Framer Motion, and TailwindCSS. Upload, preview, and download files with a sleek drag-and-drop inspired card UI.",
      link: "https://drag-file.vercel.app/",
      skills: ["React", "JavaScript", "TailwindCSS", "Framer Motion"],
    },
    {
      name: "Go-Bookstore-API",
      description:
        "A Book Management System using Go and MySQL, implementing full CRUD operations with GORM and Gorilla Mux. Focused on clean API design, modular project structure, and real-world database interaction using ORM.",
      link: "https://github.com/jahidprog/go-bookstore-api.git",
      skills: ["Go", "MySQL", "GORM", "Gorilla Mux"],
    },
    {
      name: "Go-Checkmail",
      description:
        "A Go-based CLI tool that validates domain DNS configurations by checking for MX, SPF, and DMARC records. Designed for quick diagnostics of email readiness and security policies.",
      link: "https://github.com/jahidprog/go-checkMail.git",
      skills: ["Go", "CLI", "DNS"],
    },
    // {
    //   name: "FileOrganizer",
    //   description:
    //     "A simple and efficient CLI application written in Golang to automatically organize files in a directory based on their file types. Ideal for cleaning up messy 'Downloads' or 'Desktop' folder with a single command!",
    //   link: "https://github.com/jahidulislam114593/file-organizer.git",
    //   skills: ["Go", "CLI"],
    // },
    {
      name: "MusicWorld",
      description:
        "Developed a modern and intuitive music platform UI leveraging the Aceternity UI library, overcoming technical challenges to deliver a polished user experience.",
      link: "https://worldmusic.vercel.app/",
      skills: ["Next.js", "TypeScript", "TailwindCSS", "Aceternity UI"],
    },
    // {
    //   name: "DragonAuth",
    //   description:
    //     "Built a user authentication system with React, Firebase, and Tailwind CSS, featuring Firebase Authentication for user management, protected routes, role-based access, and secure token-based authentication.",
    //   link: "https://dragon-auth-9b745.web.app/",
    //   skills: ["React", "JavaScript", "TailwindCSS", "Firebase"],
    // },
    {
      name: "Glasses",
      description:
        "Built a responsive e-commerce platform using React and Tailwind CSS, featuring product listings, filtering, and shopping cart functionality, with a modern UI design.",
      link: "https://glasses-auth-39338.web.app/",
      skills: ["React", "TailwindCSS", "JavaScript", "Firebase"],
    },
  ],
  experience: [
    {
      company: "Programming Hero",
      title: "Digital Mavricks",
      dateRange: "Oct 2023 - Feb 2025",
      bullets: [
        "Developed educational content, including problem-solving reels and documentation for technical topics, which contributed to increasing engagement on the platform.",
        "Contributed to the research and writing of a JavaScript book aimed at beginners, focusing on simplifying complex programming concepts for readers.",
      ],
    },
  ],
  education: [
    {
      school: "Premier University Chittagong",
      degree: "BSc (Engg) in Computer Science & Engineering",
      dateRange: "2020 - 2024",
      achievements: [
        "CGPA: 3.22/4.00",
        // "Champion at NSU Inter-University Hackathon 2020",
        // "ICPC Asia Dhaka Regional Contestant (2020, 2021)",
      ],
    },
  ],
  activities: [
  // ঈদের ছোঁয়া Series (Eid Gift & Happiness Sharing for Underprivileged Children)
  {
    id: 1,
    image: "/images/1.jpg",
    title: "ঈদের ছোঁয়া ২",
    date: "March 2024",
    description:
      "Organized games, art activities, and joyful interactions with underprivileged children, culminating in distributing new Eid clothes and essential groceries to bring festive happiness to their families.",
    category: "Underprivileged",
  },
  {
    id: 2,
    image: "/images/2.jpg",
    title: "ঈদের ছোঁয়া ২",
    date: "March 2024",
    description:
      "Children lighting up with smiles during outdoor games and group activities at our Eid happiness-sharing event.",
    category: "Underprivileged",
  },
  {
    id: 3,
    image: "/images/3.jpg",
    title: "ঈদের ছোঁয়া ২",
    date: "March 2024",
    description:
      "Volunteers engaging kids in creative drawing and storytelling sessions to spread Eid joy.",
    category: "Underprivileged",
  },
  {
    id: 4,
    image: "/images/4.jpg",
    title: "ঈদের ছোঁয়া ২",
    date: "March 2024",
    description:
      "Distributing Eid gift packages containing clothes and household essentials to grateful families.",
    category: "Underprivileged",
  },
  {
    id: 5,
    image: "/images/5.jpg",
    title: "ঈদের ছোঁয়া ৩",
    date: "March 2025",
    description:
      "A heartwarming moment as children receive their Eid gifts with pure excitement and gratitude.",
    category: "Underprivileged",
  },
  {
    id: 6,
    image: "/images/6.jpg",
    title: "ঈদের ছোঁয়া ৩",
    date: "March 2025",
    description:
      "Volunteers and children celebrating together after a day full of games and laughter.",
    category: "Underprivileged",
  },
  {
    id: 7,
    image: "/images/7.jpg",
    title: "ঈদের ছোঁয়া ৩",
    date: "March 2025",
    description:
      "Group photo capturing the joy of underprivileged children during Eid celebrations.",
    category: "Underprivileged",
  },
  {
    id: 8,
    image: "/images/8.jpg",
    title: "ঈদের ছোঁয়া ৩",
    date: "March 2025",
    description:
      "Organizing indoor games and prize distribution to make Eid memorable for every child.",
    category: "Underprivileged",
  },
  {
    id: 9,
    image: "/images/9.jpg",
    title: "ঈদের ছোঁয়া ১",
    date: "March 2023",
    description:
      "Early edition of ঈদের ছোঁয়া – spending quality time and sharing happiness with children in need.",
    category: "Underprivileged",
  },
  {
    id: 10,
    image: "/images/10.jpg",
    title: "ঈদের ছোঁয়া ১",
    date: "March 2023",
    description:
      "Volunteers helping children try on their new Eid outfits with big smiles.",
    category: "Underprivileged",
  },
  {
    id: 11,
    image: "/images/11.jpg",
    title: "ঈদের ছোঁয়া ২",
    date: "March 2024",
    description:
      "Outdoor play and team-building games bringing children together in celebration.",
    category: "Underprivileged",
  },
  {
    id: 12,
    image: "/images/12.jpg",
    title: "ঈদের ছোঁয়া ৩",
    date: "March 2025",
    description:
      "Final gift distribution moment – families receiving Eid essentials with gratitude.",
    category: "Underprivileged",
  },
  {
    id: 13,
    image: "/images/13.jpg",
    title: "ঈদের ছোঁয়া ৩",
    date: "March 2025",
    description:
      "Volunteers and kids posing together after a successful day of joy and giving.",
    category: "Underprivileged",
  },

  // August 2024 Flood Relief by Responsible Gen
  {
    id: 14,
    image: "/images/111.jpg",
    title: "Flood Relief Mission – Feni",
    date: "August 2024",
    description:
      "Responsible Gen team distributing dry food and medicine to flood-affected families in Feni whose homes were submerged.",
    category: "Flood Relief",
  },
  {
    id: 15,
    image: "/images/112.jpg",
    title: "Flood Relief Mission – Feni",
    date: "August 2024",
    description:
      "Navigating flooded areas to deliver essential relief packages directly to stranded households.",
    category: "Flood Relief",
  },
  {
    id: 16,
    image: "/images/113.jpg",
    title: "Flood Relief Mission – Feni",
    date: "August 2024",
    description:
      "Volunteers carrying relief materials through knee-deep water to reach isolated families.",
    category: "Flood Relief",
  },
  {
    id: 17,
    image: "/images/114.jpg",
    title: "Flood Relief Mission – Feni",
    date: "August 2024",
    description:
      "Handing over emergency food and medicine kits to grateful flood victims.",
    category: "Flood Relief",
  },
  {
    id: 18,
    image: "/images/115.jpg",
    title: "Flood Relief Mission – Feni",
    date: "August 2024",
    description:
      "Team loading boats with relief items before heading into flooded zones.",
    category: "Flood Relief",
  },
  {
    id: 19,
    image: "/images/116.jpg",
    title: "Flood Relief Mission – Feni",
    date: "August 2024",
    description:
      "A moment of hope: a family receiving critical supplies amid devastation.",
    category: "Flood Relief",
  },
  {
    id: 20,
    image: "/images/117.jpg",
    title: "Flood Relief Mission – Feni",
    date: "August 2024",
    description:
      "Volunteers wading through water to ensure no family is left behind.",
    category: "Flood Relief",
  },
  {
    id: 21,
    image: "/images/118.jpg",
    title: "Flood Relief Mission – Feni",
    date: "August 2024",
    description:
      "Group effort in packing and organizing thousands of relief packets for rapid distribution.",
    category: "Flood Relief",
  },

  // Fight Against Winter (FAW) – Youth Voice
  {
    id: 22,
    image: "/images/221.JPG",
    title: "Fight Against Winter 2021",
    date: "December 2021",
    description:
      "Collecting funds and purchasing warm blankets and clothes for communities in colder rural regions.",
    category: "Winter Relief",
  },
  {
    id: 23,
    image: "/images/222.jpg",
    title: "Fight Against Winter 2021",
    date: "December 2021",
    description:
      "Distributing warm clothing to children living in extreme winter conditions outside cities.",
    category: "Winter Relief",
  },
  {
    id: 24,
    image: "/images/223.jpg",
    title: "Fight Against Winter 2021",
    date: "December 2021",
    description:
      "Smiles of warmth: a child receiving a new winter jacket during FAW 2021.",
    category: "Winter Relief",
  },
  {
    id: 25,
    image: "/images/224.jpg",
    title: "Fight Against Winter 2021",
    date: "December 2021",
    description:
      "Volunteers wrapping and preparing hundreds of winter clothing packages.",
    category: "Winter Relief",
  },
  {
    id: 26,
    image: "/images/225.jpg",
    title: "Fight Against Winter 2021",
    date: "December 2021",
    description:
      "Reaching remote villages to protect vulnerable families from harsh winter.",
    category: "Winter Relief",
  },
  {
    id: 27,
    image: "/images/226.JPG",
    title: "Fight Against Winter 2021",
    date: "December 2021",
    description:
      "Team photo after successful winter relief distribution in rural areas.",
    category: "Winter Relief",
  },

  // Fight Against Winter 2022
  {
    id: 28,
    image: "/images/331.jpg",
    title: "Fight Against Winter 2022",
    date: "December 2022",
    description:
      "Expanded winter relief drive providing blankets and jackets to northern communities.",
    category: "Winter Relief",
  },
  {
    id: 29,
    image: "/images/332.JPG",
    title: "Fight Against Winter 2022",
    date: "December 2022",
    description:
      "Volunteers personally handing warm clothes to elderly citizens in need.",
    category: "Winter Relief",
  },
  {
    id: 30,
    image: "/images/333.JPG",
    title: "Fight Against Winter 2022",
    date: "December 2022",
    description: "Children excitedly trying on their new winter outfits.",
    category: "Winter Relief",
  },
  {
    id: 31,
    image: "/images/334.JPG",
    title: "Fight Against Winter 2022",
    date: "December 2022",
    description:
      "Loading trucks with thousands of warm clothing items for distribution.",
    category: "Winter Relief",
  },
  {
    id: 32,
    image: "/images/335.JPG",
    title: "Fight Against Winter 2022",
    date: "December 2022",
    description:
      "Community gathering during winter clothing handover ceremony.",
    category: "Winter Relief",
  },
  {
    id: 33,
    image: "/images/336.JPG",
    title: "Fight Against Winter 2022",
    date: "December 2022",
    description: "Protecting the most vulnerable from freezing temperatures.",
    category: "Winter Relief",
  },
  {
    id: 34,
    image: "/images/337.JPG",
    title: "Fight Against Winter 2022",
    date: "December 2022",
    description:
      "Youth Voice members braving the cold to deliver warmth.",
    category: "Winter Relief",
  },
  {
    id: 35,
    image: "/images/338.JPG",
    title: "Fight Against Winter 2022",
    date: "December 2022",
    description:
      "A grandmother’s gratitude after receiving a warm shawl.",
    category: "Winter Relief",
  },
  {
    id: 36,
    image: "/images/339.JPG",
    title: "Fight Against Winter 2022",
    date: "December 2022",
    description:
      "Large-scale sorting and packing operation before dispatch.",
    category: "Winter Relief",
  },
  {
    id: 37,
    image: "/images/340.JPG",
    title: "Fight Against Winter 2022",
    date: "December 2022",
    description:
      "Final group photo of FAW 2022 volunteers and beneficiaries.",
    category: "Winter Relief",
  },
  {
    id: 38,
    image: "/images/441.JPG",
    title: "Fight Against Winter 2022",
    date: "December 2022",
    description:
      "Reaching tea garden workers with warm clothing and blankets.",
    category: "Winter Relief",
  },
  {
    id: 39,
    image: "/images/442.JPG",
    title: "Fight Against Winter 2022",
    date: "December 2022",
    description:
      "Bringing hope and warmth to forgotten communities.",
    category: "Winter Relief",
  },


// Project Chana Feyaju (PCB) – Youth Voice Eid Event for Children
  {
    id: 40,
    image: "/images/pcb1.jpg",
    title: "Project Chana Feyaju",
    date: "March 2023",
    description:
      "Children performing in a drama organized as part of PCB Eid celebration.",
    category: "Underprivileged",
  },
  {
    id: 41,
    image: "/images/pcb2.jpg",
    title: "Project Chana Feyaju",
    date: "March 2023",
    description:
      "Art and craft session where kids created Eid cards and drawings.",
    category: "Underprivileged",
  },
  {
    id: 42,
    image: "/images/pcb3.jpg",
    title: "Project Chana Feyaju",
    date: "March 2023",
    description:
      "Exciting outdoor games designed to spread laughter and joy.",
    category: "Underprivileged",
  },
  {
    id: 43,
    image: "/images/pcb4.jpg",
    title: "Project Chana Feyaju",
    date: "March 2023",
    description:
      "Children proudly showing off their new Eid clothes gifted by the project.",
    category: "Underprivileged",
  },
  {
    id: 44,
    image: "/images/pcb5.jpg",
    title: "Project Chana Feyaju",
    date: "March 2023",
    description:
      "Volunteers acting in a short play to entertain the children.",
    category: "Underprivileged",
  },
  {
    id: 45,
    image: "/images/pcb6.jpg",
    title: "Project Chana Feyaju",
    date: "March 2023",
    description:
      "Group singing and cultural performance by participating kids.",
    category: "Underprivileged",
  },
  {
    id: 46,
    image: "/images/pcb7.jpg",
    title: "Project Chana Feyaju",
    date: "March 2023",
    description:
      "Distributing grocery packages so families can celebrate Eid properly.",
    category: "Underprivileged",
  },
  {
    id: 47,
    image: "/images/pcb8.jpg",
    title: "Project Chana Feyaju",
    date: "March 2023",
    description:
      "Magic show performance that left children amazed and happy.",
    category: "Underprivileged",
  },
  {
    id: 48,
    image: "/images/pcb9.jpg",
    title: "Project Chana Feyaju",
    date: "March 2023",
    description:
      "Final group photo with all children, volunteers, and gifted items.",
    category: "Underprivileged",
  },
],
};