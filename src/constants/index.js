import {
  mobile,
  backend,
  creator,
  gamedev,
  student,
  web,

  python,
  cplus,
  csharp,
  unity,
  javascript,
  html,
  css,
  reactjs,
  tailwind,
  nodejs,
  git,
  threejs,

  meta,
  rmit,
  starbucks,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
  unpaid,
  portfolio,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "3D Game Developer",
    icon: gamedev,
  },
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Third Year Student",
    icon: student,
  },
];

const technologies = [
  {
    name: "Python",
    icon: python,
  },
  {
    name: "C++",
    icon: cplus,
  },
  {
    name: "C#",
    icon: csharp,
  },
  {
    name: "Unity",
    icon: unity,
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
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
];

const experiences = [
  {
    title: "Computer Science Student",
    company_name: "RMIT",
    icon: rmit,
    iconBg: "#020253",
    date: "March 2023 - Present",
    points: [
      "Studying a Bachelor of Computer Science (BP094P23) at RMIT. I am currently completing my third and final year.",
      "Focussing on areas of cyber security and game development with my chosen minors of: Cyber Assurance, Creative Computing.",
      "I have performed well academically and hold an above average GPA of 3.6",
      "I participate in many long term projects which require real world software development practices and communication skills with a large group.",
      "Through this course I have gained foundational skills in a variety of different technologies, which are shown below.",
    ],
  },


  /*
    title: "React.js Developer",
    company_name: "Starbucks",
    icon: starbucks,
    iconBg: "#383E56",
    date: "March 2020 - April 2021",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "React Native Developer",
    company_name: "Tesla",
    icon: tesla,
    iconBg: "#E6DEDD",
    date: "Jan 2021 - Feb 2022",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Web Developer",
    company_name: "Shopify",
    icon: shopify,
    iconBg: "#383E56",
    date: "Jan 2022 - Jan 2023",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Full stack Developer",
    company_name: "Meta",
    icon: meta,
    iconBg: "#E6DEDD",
    date: "Jan 2023 - Present",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  */
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "Unpaid Overtime",
    description:
      "A 12 week University project in which 5 other developers and I created a Horror/Puzzle virtual reality experience. The game was developed with the Unity engine and then deployed to Meta Quest 3 (Android) using Meta XR SDK",
    tags: [
      {
        name: "unity",
        color: "blue-text-gradient",
      },
      {
        name: "C#",
        color: "green-text-gradient",
      },
      {
        name: "meta XR SDK",
        color: "pink-text-gradient",
      },
    ],
    image: unpaid,
    source_code_link: "https://github.com/Mossata/Unpaid-Overtime-SSSS",
  },
  {
    name: "Personal Portfolio Website",
    description:
      "The website you are currently looking at! This portfolio is a react based web app utilising tailwindCSS for styling and threejs packages to import and show 3D models.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "tailwindCSS",
        color: "green-text-gradient",
      },
      {
        name: "threejs",
        color: "pink-text-gradient",
      },
    ],
    image: portfolio,
    source_code_link: "https://github.com/Mossata/Personal-Portfolio",
  },
];

export { services, technologies, experiences, testimonials, projects };