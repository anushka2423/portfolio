import {
  backend,
  web,
  javascript,
  typescript,
  linkedin,
  css,
  reactjs,
  nodejs,
  mongodb,
  github1,
  starbucks,
  tesla,
  certificatejs,
  // certificatereactb,
  certificatefcc,
  vibeclub,
  // tripguide,
  expensetracker,
  dashboard,
  ecommerceR,
  pokemon,
  ecommerce
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "experience",
    title: "Experience",
  },
  {
    id: "projects",
    title: "Projects",
  },
  {
    id: "certifications",
    title: "Certifications",
  },
  {
    id: "contact",
    title: "Contact",
  },
  
];

const services = [
  {
    title: "Mern Stack Developer ",
    icon: web,
    link: "#"
  },
  {
    title: "Mobile App Developer",
    icon: backend,
    link: "#"
  },
  {
    title: "My Github",
    icon: github1,
    link: "https://github.com/anushka2423/",
  },
  {
    title: "My LinkedIn",
    icon: linkedin,
    link: "https://www.linkedin.com/in/anushka2423/",
  },
];

const technologies = [
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },


];

const experiences = [
  {
    title: "Fullstack Intern",
    company_name: "WebNinjaz",
    icon: tesla,
    iconBg: "#E6DEDD",
    date: "June 2024 - current",
    points: [
      "Contributed to the development of a Ed-Tech Platform",
      "Implemented interactive features and dynamic elements with React.js to enhance user engagement.:",
      "Ensured a responsive design across various devices using antd's grid system and components.",
      "Collaborated with the development team, participating in code reviews and addressing bugs for optimization.",
    ],
  },
  {
    title: "Frontend Developer",
    company_name: "Self Employed",
    icon: starbucks,
    iconBg: "#383E56",
    date: "April 2024 - June 2024",
    points: [
      "Developing and maintaining web applications using React.js, antdesign and other related technologies.",
      "Collaborating with client and content creator to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Working on SEO and other user-traffic factors.",
    ],
  },
 
];

const testimonials = [
  {
    testimonial:
      "As an engineering student juggling coursework and web development gigs, I've mastered the art of coding efficiency. Discover shortcuts and code snippets to speed up your development process and boost productivity. ",
    name: "Efficient Coding with Shortcuts & Snippets",
    designation: "#CodingShortcuts #WebDevHacks",
    company: "",
    image: "",
  },
  {
    testimonial:
      "Being both a web developer and an engineering student, I understand the importance of choosing the right JavaScript framework. Dive into this brief comparison of React, Angular, and Vue to find the best fit for your next project. ",
    name: "JavaScript Frameworks: A Quick Comparison",
    designation: "#JavaScript #WebDevelopment",
    company: "",
    image: "",
  },
  {
    testimonial:
      "As a freelancer and engineering student, I've found that optimizing the user experience (UX) is crucial. From intuitive navigation to responsive design, Good UX  will ensure your website leaves a lasting impression.",
    name: "Streamlining UX: Crucial and impressive",
    designation: "#WebDevTips #UXDesign",
    company: "",
    image: "",
  },
];

const projects = [
  {
    name: "Aora",
    description:
      "This app showcases impressive design and functionality, enabling seamless sharing of AI videos within the community providing a efficient srcolling.",
    
      tags: [
      {
        name: "React_Native",
        color: "blue-text-gradient",
      },
      {
        name: "nodeJs",
        color: "pink-text-gradient",
      },
      {
        name: "Appwrite",
        color: "green-text-gradient",
      },
    ],
    image: vibeclub,
    source_code_link: "https://github.com/anushka2423/Aora",
  },
  {
    name: "Expense Tracker",
    description:
      "Developed a responsive expense tracker using Next.js, Tailwind CSS, and Firebase for real-time data management, user authentication, and seamless performance.",
    tags: [
      {
        name: "Next.js",
        color: "green-text-gradient",
      },
      {
        name: "Tailwind CSS",
        color: "pink-text-gradient",
      },
      {
        name: "firebase",
        color: "blue-text-gradient",
      }
    ],
    image: expensetracker,
    source_code_link: "https://youtube-finance-tracker.vercel.app/",
  },
  {
    name: "Ecommerce",
    description:
      "Web-based platform that allows users to search, book, and manage products from various providers, providing a convenient and efficient solution for Products needs.",
    
      tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "expressJs",
        color: "orange-text-gradient",
      },
      {
        name: "nodeJs",
        color: "pink-text-gradient",
      },
    ],
    image: ecommerce,
    source_code_link: "https://mern-ecommerce-frontend-2024.vercel.app/",
  },
  {
    name: "Admin Dashboard",
    description:
      "Created an admin dashboard using React and React Router, implementing lazy loading for optimized performance. Integrated Chart.js for dynamic data visualization, enhancing user interaction and decision-making capabilities.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "Typescript",
        color: "green-text-gradient",
      },
      {
        name: "chart-js",
        color: "orange-text-gradient",
      },
    ],
    image: dashboard,
    source_code_link: "https://react-typescript-admin-dashboard-dkxa.vercel.app/",
  },
  {
    name: "Rapid Retail Ecommerce",
    description:
      "Employed React for modular UI development, emphasizing component reusability and maintainability. Utilized Tailwind to implement responsive components.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "Tailwind",
        color: "green-text-gradient",
      },
      {
        name: "JavaScript",
        color: "orange-text-gradient",
      },
    ],
    image: ecommerceR,
    source_code_link: "ecommercehttps://ecomzyshoponline.netlify.app/",
  },
  {
    name: "PokeApp",
    description:
      "Dive into the world of Pokémon with random facts and trivia! Discover hidden gems about your favorite Pokémon. Perfect for fans eager to learn more about the Pokémon universe.",
    tags: [
      {
        name: "html",
        color: "orange-text-gradient",
      },
      {
        name: "css",
        color: "blue-text-gradient",
      },
      {
        name: "javascript",
        color: "pink-text-gradient",
      },
    ],
    image: pokemon,
    source_code_link: "https://pokemon-six-black.vercel.app/",
  },
];
const certificates = [
  // {
  //   name: "Coursera",
  //   description:
  //     "React Basics -Meta",
  //   tags: [
  //     {
  //       name: "",
  //       color: "",
  //     },
  //     {
  //       name: "",
  //       color: "",
  //     },
  //     {
  //       name: "",
  //       color: "",
  //     },
      
  //   ],
  //   image: certificatereactb,
  //   source_code_link: "https://coursera.org/verify/VNEXQTQEGCBX",
  // },
  {
    name: "udemy",
    description:
      "Web Development bootcamp",
    tags: [
      {
        name: "",
        color: "blue-text-gradient",
      },
      {
        name: "",
        color: "green-text-gradient",
      },
      {
        name: "",
        color: "orange-text-gradient",
      },
    ],
    image: certificatefcc,
    source_code_link: "https://drive.google.com/file/d/16Sr-IzA4MHkIeAt9KTlLPvzOqIck_Ixw/view?usp=sharing",
  },
  {
    name: "CodeIn",
    description:
      "Coding with Java",
    tags: [
      {
        name: "",
        color: "blue-text-gradient",
      },
      {
        name: "",
        color: "green-text-gradient",
      },
      {
        name: "",
        color: "orange-text-gradient",
      },
    ],
    image: certificatejs,
    source_code_link: "https://certificate.givemycertificate.com/c/31cbba93-ae6f-4b94-a460-7d4e8c0ce3f9",
  },
];

export { services, technologies, experiences, testimonials, projects, certificates };
