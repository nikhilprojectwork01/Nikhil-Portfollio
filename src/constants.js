// Skills Section Logo's
import htmlLogo from './assets/tech_logo/html.png';
import cssLogo from './assets/tech_logo/css.png';
import sassLogo from './assets/tech_logo/sass.png';
import javascriptLogo from './assets/tech_logo/javascript.png';
import reactjsLogo from './assets/tech_logo/reactjs.png';
import angularLogo from './assets/tech_logo/angular.png';
import reduxLogo from './assets/tech_logo/redux.png';
import tailwindcssLogo from './assets/tech_logo/tailwindcss.png';
import materialuiLogo from './assets/tech_logo/materialui.png';
import bootstrapLogo from './assets/tech_logo/bootstrap.png';
import springbootLogo from './assets/tech_logo/springboot.png';
import nodejsLogo from './assets/tech_logo/nodejs.png';
import expressjsLogo from './assets/tech_logo/express.png';
import mysqlLogo from './assets/tech_logo/mysql.png';
import mongodbLogo from './assets/tech_logo/mongodb.png';
import firebaseLogo from './assets/tech_logo/firebase.png';
import javaLogo from './assets/tech_logo/java.png';
import typescriptLogo from './assets/tech_logo/typescript.png';
import gitLogo from './assets/tech_logo/git.png';
import githubLogo from './assets/tech_logo/github.png';
import vscodeLogo from './assets/tech_logo/vscode.png';
import postmanLogo from './assets/tech_logo/postman.png';
import mcLogo from './assets/tech_logo/mc.png';
import figmaLogo from './assets/tech_logo/figma.png';
import netlifyLogo from './assets/tech_logo/netlify.png';
import vercelLogo from './assets/tech_logo/vercel.png';
import postgreLogo from './assets/tech_logo/postgre.png';
import redis from "./assets/tech_logo/redis.png"
import kafka from "./assets/tech_logo/kafka.png"

// Experience Section Logo's
import mindgate from './assets/company_logo/mindgate.jpg';
import apnacolege from './assets/company_logo/ac.png';

// Education Section Logo's
import Ccsu from './assets/education_logo/universitylogo.jpg';
import jagran from './assets/education_logo/jagran.jpg';

// Project Section Logo's
import shopify from "./assets/work_logo/Shopify.png"
import instagram from "./assets/work_logo/Instagram.png"
import Doctor from "./assets/work_logo/Doctor.png"
import workInp from "./assets/tech_logo/WorkinPorgress.png"
import jenkins from "./assets/tech_logo/jenkins.png";
import Kuber from "./assets/tech_logo/kuber.png"
import docker from "./assets/tech_logo/docker.png"
import linux from "./assets/tech_logo/linux.png"
import chat from "./assets/work_logo/Chat.png"
import Recruitment from "./assets/work_logo/image.png"
import taskremLogo from "./assets/work_logo/task_rem.png"
export const SkillsInfo = [
  {
    title: 'Frontend',
    skills: [
      { name: 'HTML', logo: htmlLogo },
      { name: 'CSS', logo: cssLogo },
      { name: 'SASS', logo: sassLogo },
      { name: 'JavaScript', logo: javascriptLogo },
      { name: 'React JS', logo: reactjsLogo },
      { name: 'Angular', logo: angularLogo },
      { name: 'Redux', logo: reduxLogo },
      { name: 'Tailwind CSS', logo: tailwindcssLogo },
      { name: 'Material UI', logo: materialuiLogo },
      { name: 'Bootstrap', logo: bootstrapLogo },
    ],
  },
  {
    title: 'Backend',
    skills: [
      { name: 'Springboot', logo: springbootLogo },
      { name: 'Node JS', logo: nodejsLogo },
      { name: 'Express JS', logo: expressjsLogo },
      { name: 'MySQL', logo: mysqlLogo },
      { name: 'MongoDB', logo: mongodbLogo },
      { name: 'Firebase', logo: firebaseLogo },
      { name: 'PostgreSQL', logo: postgreLogo },
    ],
  },
  {
    title: 'Languages',
    skills: [
      { name: 'Java', logo: javaLogo },
      { name: 'JavaScript', logo: javascriptLogo },
      { name: 'TypeScript', logo: typescriptLogo },
    ],
  },
  {
    title: 'Tools',
    skills: [
      { name: 'Git', logo: gitLogo },
      { name: 'GitHub', logo: githubLogo },
      { name: 'VS Code', logo: vscodeLogo },
      { name: 'Postman', logo: postmanLogo },
      { name: 'Compass', logo: mcLogo },
      { name: 'Vercel', logo: vercelLogo },
      { name: 'Netlify', logo: netlifyLogo },
      { name: 'Figma', logo: figmaLogo },
      { name: 'Redis', logo: redis },
      { name: 'Kafka', logo: kafka },
      { name: 'Docker', logo: docker },
      { name: 'Kubernetes', logo: Kuber },
      { name: 'Jenkins', logo: jenkins },
      { name: 'Linux', logo: linux }
    ],
  },
];

export const experiences = [
  {
    id: 0,
    img: apnacolege,
    role: "Full Stack Teaching Assistant Intern",
    company: "Jainemo private limited",
    date: "Feb 2024 - July 2024",
    desc: "I specialize in addressing the complex challenges faced by students through our expertise in the MERN , provide robust technical support and contribute to the deployment and maintenance of web applications.",
    skills: [
      "HTML",
      "CSS",
      "JavaScript",
      "React JS",
      "TypeScript",
      "Node JS",
      "Tailwind CSS",
      "MongoDb",
      "Redux",
    ],
  },
  {
    id: 1,
    img: mindgate,
    role: "Fullstack Engineer",
    company: "Mindgate Solutions",
    date: "Sept 2024 - Oct 2024",
    desc: "Developed a Recruitment Website using the MERN stack MongoDB, Express.js, React, Node Worked in an agile environment, collaborating with a team to enhance the functionality of the system",
    skills: [
      "ReactJS",
      "Redux",
      "JavaScript",
      "Tailwind CSS",
      "HTML",
      "CSS",
      "MongoDb",
      "Angular"
    ],
  },
];

export const education = [
  {
    id: 0,
    img: Ccsu,
    school: "Chaudhary Charan  Singh University, Meerut",
    date: "Sept 2021 - Spet 2025",
    grade: "8.1  CGPA",
    desc: "I have completed my Bachelor of Technology (B.Tech) in Computer Science from Chaudhary Charan Singh University, formerly known as Meerut University. During my academic journey, I developed a strong foundation in core subjects such as Object-Oriented Programming (OOPs), Database Management Systems (DBMS), Computer Networks (CN), Operating Systems (OS), and Web Technologies. These courses helped me build essential problem-solving, analytical, and programming skills. I actively participated in technical workshops and events, which enhanced my practical understanding and teamwork abilities. My B.Tech experience laid the groundwork for my career in software development and sparked my interest in building real-world technology solutions.",
  },
  {
    id: 1,
    img: jagran,
    school: "Jagran Public School , Varanasi",
    date: "Sept 2018 - Aug 2021",
    grade: "84% , 74.5%",
    desc: "I completed my 10th and 12th grade from Jagran Public School under the CBSE board, scoring 84% and 74% respectively. In 12th, I studied Physics, Chemistry, and Mathematics, which helped build my analytical and problem-solving skills early in my academic journey. ",
  },

];

export const projects = [
  {
    id: 0,
    title: "Recruitment Website",
    description:
      "Developed a job portal allowing job seekers to create profiles, upload resumes, and apply for jobs. Employers can post openings, review applications, and manage recruitment. Built using MongoDB, Express.js, React, Node.js, with Multer for file uploads and Cloudinary for cloud-based image storage.",
    image: Recruitment,
    tags: ["HTML", "CSS", "JavaScript", "React JS", "API", "Redux", "MongoDb", "Express.js"],
    github: "https://github.com/nikhilprojectwork01/Employment",
  },
  {
    id: 1,
    title: "Instagram Clone",
    description:
      "Built a fully functional web application replicating Instagram’s core features, including posts, likes, comments, real-time notifications, and messaging. Implemented using the MERN stack (MongoDB, Express.js, React, Node.js) with Socket.io for seamless real-time communication, delivering an interactive and dynamic user experience.",
    image: instagram,
    tags: ["React JS", "Node.js", "MongoDB", "Express", "HTML", "CSS", "JavaScript", "Socket.io"],
    github: "https://github.com/nikhilprojectwork01/ideoGram-Social-Media-",
  },
  {
    id: 2,
    title: "Doctor Appointment Booking Application ",
    description:
      "Developed a full-stack web application enabling patients to book doctor appointments and securely pay consultation fees via Razorpay. The system includes an Admin Panel for managing doctors and appointments, and a Patient Panel for booking and payments. Built with React, Tailwind CSS, Node.js, Express.js, and MongoDB.",
    image: Doctor,
    tags: ["React JS", "API", "HTML", "CSS", "JavaScript", "Context Api", "MongoDb", "ExpressJs"],
    github: "https://github.com/nikhilprojectwork01/Doctor-Appointment-App",
  },
  {
    id: 3,
    title: "Real Time Chat Application",
    description:
      "Developed a real-time chat application allowing users to send and receive instant messages. Features include private and group chats, message notifications, and user presence indicators. Built using technologies like React, Node.js, Express.js, MongoDB, and Socket.io to ensure seamless and interactive communication.",
    image: chat,
    tags: ["React JS", "Node.js", "MongoDb", "Express.js", "Socket.Io"],
    github: "https://github.com/nikhilprojectwork01/realTimeChatApplication.git",
  },
  {
    id: 4,
    title: "Task Reminder Chrome Extension Tool",
    description:
      "A productivity-boosting Chrome extension designed to help users manage and remember their daily tasks. Built using JavaScript, it offers a simple interface with reminders and task notifications to keep users on track.",
    image: taskremLogo,
    tags: ["JavaScript", "Chrome Extension", "HTML", "CSS"],
    github: "https://github.com/nikhilprojectwork01/Crome-Extension.git",
  },
  {
    id: 5,
    title: "Shopify Shopping Application ",
    description: "Developed a fully functional e-commerce website integrated with Shopify and Firebase for seamless product management and authentication. Built using the MERN stack with Redux Toolkit for state management and Socket.io for real-time features, delivering a responsive and scalable online shopping experience.",
    image: shopify,
    tags: ["HTML", "CSS", "JavaScript", "React", "NodeJs", "ExpressJs", "MongoDb", "Redux"],
    github: "https://github.com/nikhilprojectwork01/shopify.git",
  },
  {
    id: 6,
    title: "E-Commerce",
    description:
      "Developed a fully functional e-commerce website featuring a product catalog, shopping cart, and secure checkout with Razorpay integration. Built using Java, Spring Boot, Spring Data JPA, MySQL, and Vanilla JavaScript, ensuring smooth user experience, reliable data handling, and seamless end-to-end online shopping functionality.",
    image: workInp,
    tags: ["Spring Boot ", "JPA", "Spring Secutiy", "Patment Gateway Integration", "JDBC", "My-Sql"],
    github: "https://github.com/nikhilprojectwork01/E-Commerce-Web-Application.git",
  },
  {
    id: 7,
    title: "Google Drive",
    description: "Built a Google Drive-like file management system using Java, enabling users to upload, download, delete, and share files securely. Implemented with Core Java, JDBC, Spring Boot, JPA, and MySQL for efficient backend processing, database interaction, and seamless user experience.",
    image: workInp,
    tags: ["Spring Boot", "JPA", "JDBC", "My-sql"],
    github: "https://github.com/nikhilprojectwork01/Google-Drive.git",
  },
];  