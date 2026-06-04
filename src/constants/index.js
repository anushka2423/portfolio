import {
  backend,
  web,
  javascript,
  linkedin,
  css,
  reactjs,
  nodejs,
  redux,
  tailwind,
  html,
  git,
  postgresql,
  aws,
  github1,
  starbucks,
  tesla,
  certificatejs,
  certificate,
  flowgenie,
  leetcode_extension,
  caclouddesk,
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
    title: "Backend & APIs",
    icon: backend,
    link: "#experience",
  },
  {
    title: "Frontend Development",
    icon: web,
    link: "#experience",
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
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "Git",
    icon: git,
  },
  {
    name: "PostgreSQL",
    icon: postgresql,
  },
  {
    name: "AWS",
    icon: aws,
  },
];

const experiences = [
  {
    title: "Software Developer",
    company_name: "Plutonic Services — Noida, UP",
    icon: tesla,
    iconBg: "#E6DEDD",
    date: "December 2024 – April 2026",
    points: [
      "Owned end-to-end delivery of production features across frontend and backend services used by real users.",
      "Designed backend systems for an e-Office platform (Chaitanya Projects), handling 20,000+ documents/month.",
      "Built the task management module end-to-end for CA Cloud Desk, supporting 1,45,000+ active tasks.",
      "Refactored legacy systems into modular code, improving performance by 25% and reducing bundle size.",
      "Mentored junior developers, led code reviews, and improved system reliability and delivery velocity.",
    ],
  },
  {
    title: "Frontend Developer",
    company_name: "Diggaj Coders — Remote",
    icon: starbucks,
    iconBg: "#383E56",
    date: "September 2024 – November 2024",
    points: [
      "Developed scalable React FAQ modules, improving information accessibility and reducing support tickets by 40%.",
      "Debugged and stabilized client applications, reducing runtime errors by 50%.",
      "Collaborated with designers and backend teams to deliver user-centric features within sprint timelines.",
    ],
  },
  {
    title: "B.Tech in Computer Science and Engineering",
    company_name: "BBD Institute of Technology and Management",
    icon: starbucks,
    iconBg: "#232631",
    date: "September 2020 – May 2024",
    points: [
      "GPA: 7.5",
      "Key coursework: Data Structures, Algorithms, Operating Systems, Database Management Systems",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "Maintained a 40+ day LeetCode Problem of the Day streak — consistent practice in data structures and algorithms.",
    name: "LeetCode POTD Streak",
    designation: "40+ days",
    company: "",
    image: "",
  },
  {
    testimonial:
      "Deconstructed a monolithic project into 5 modular sub-systems to improve scalability, isolation, and maintainability.",
    name: "Modular Architecture",
    designation: "5 sub-systems",
    company: "",
    image: "",
  },
  {
    testimonial:
      "Contributed to internal dev tools that improved code reusability and reduced debugging time by 30%.",
    name: "Internal Dev Tools",
    designation: "30% faster debugging",
    company: "",
    image: "",
  },
];

const projects = [
  {
    name: "TaskOrchestrationSystem — FlowGenie",
    description:
      "Workflow automation engine with dynamic task generation, least-load assignment, and an event-driven notification layer (AWS SES, in-app alerts, webhooks). Includes AI workflow generation with OpenAI, RAG context retrieval, and tenant-safe access. Deployed on AWS EC2 with Nginx, PostgreSQL, and environment-based cron scheduling.",
    tags: [
      {
        name: "Node.js",
        color: "green-text-gradient",
      },
      {
        name: "PostgreSQL",
        color: "blue-text-gradient",
      },
      {
        name: "React",
        color: "pink-text-gradient",
      },
      {
        name: "AWS",
        color: "orange-text-gradient",
      },
      {
        name: "OpenAI",
        color: "blue-text-gradient",
      },
    ],
    image: flowgenie,
    source_code_link: "http://flowgenie.live",
  },
  {
    name: "CA Cloud Desk",
    isCompanyProject: true,
    description:
      "Enterprise business management platform that integrates CRM, HRMS, task management, billing, workflow automation, and document management into a single solution. Contributed to core platform features, large-scale task and workflow data migrations, REST APIs, and business process automation.",
    tags: [
      {
        name: "Node.js",
        color: "green-text-gradient",
      },
      {
        name: "React",
        color: "pink-text-gradient",
      },
      {
        name: "PostgreSQL",
        color: "blue-text-gradient",
      },
      {
        name: "REST_APIs",
        color: "orange-text-gradient",
      },
    ],
    image: caclouddesk,
    source_code_link: "https://caclouddesk.com",
  },
  {
    name: "AI-Powered LeetCode Assistant",
    description:
      "Chrome extension that closes the gap between being stuck and actually learning: anti-spoiler mentoring on live code (4 escalating conceptual hints, concept-only RAG, spoiler guard), submission-quality revisit detection (auto-syncs a LeetCode \"need revisit\" list), and an in-page analytics dashboard — without handing you the algorithm upfront.",
    tags: [
      {
        name: "Chrome_Extension",
        color: "blue-text-gradient",
      },
      {
        name: "Gemini_API",
        color: "green-text-gradient",
      },
      {
        name: "LeetCode_GraphQL",
        color: "pink-text-gradient",
      },
      {
        name: "RAG",
        color: "orange-text-gradient",
      },
    ],
    image: leetcode_extension,
    source_code_link:
      "https://chromewebstore.google.com/detail/leetcode-assistant/lgmdpkifkfbockilgamhmkcaapkffcnb",
  },
];

const certificates = [
  {
    name: "NamasteDev",
    description: "Nodejs Course",
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
    image: certificate,
    source_code_link:
      "https://drive.google.com/file/d/1i8B5JcOWpANqYqZIAR2OXx_WUkn_x1pv/view?usp=sharing",
  },
  {
    name: "CodeIn",
    description: "Coding with Java",
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
    source_code_link:
      "https://certificate.givemycertificate.com/c/31cbba93-ae6f-4b94-a460-7d4e8c0ce3f9",
  },
];

export {
  services,
  technologies,
  experiences,
  testimonials,
  projects,
  certificates,
};
