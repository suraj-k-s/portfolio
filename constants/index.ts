import { FaYoutube, FaFacebook } from "react-icons/fa";
import {
  RxDiscordLogo,
  RxGithubLogo,
  RxInstagramLogo,
  RxTwitterLogo,
  RxLinkedinLogo,
} from "react-icons/rx";

export const SOCIALS = [
  {
    name: "Instagram",
    icon: RxInstagramLogo,
    link: "https://instagram.com/surajks_official",
  },
  {
    name: "Facebook",
    icon: FaFacebook,
    link: "https://facebook.com",
  },
  {
    name: "Twitter",
    icon: RxTwitterLogo,
    link: "https://twitter.com",
  },
] as const;


export const PROGRAMMING_LANGUAGES = [
  { skill_name: "C", image: "c.png", width: 60, height: 60 },
  { skill_name: "C++", image: "cpp.png", width: 60, height: 60 },
  { skill_name: "C#", image: "csharp.png", width: 60, height: 60 },
  { skill_name: "Java", image: "java.png", width: 60, height: 60 },
  { skill_name: "Python", image: "python.png", width: 60, height: 60 },
  { skill_name: "JavaScript", image: "js.png", width: 65, height: 65 },
  { skill_name: "Dart", image: "dart.png", width: 60, height: 60 },
  { skill_name: "Kotlin", image: "kotlin.png", width: 60, height: 60 },
  { skill_name: "PHP", image: "php.png", width: 60, height: 60 },
] as const;

export const FRONTEND_TECHNOLOGIES = [
  { skill_name: "HTML5", image: "html.png", width: 80, height: 80 },
  { skill_name: "CSS3", image: "css.png", width: 80, height: 80 },
  { skill_name: "SCSS", image: "scss.png", width: 60, height: 60 },
  { skill_name: "Bootstrap", image: "bootstrap.png", width: 70, height: 70 },
  { skill_name: "Tailwind CSS", image: "tailwind.png", width: 80, height: 80 },
  { skill_name: "React JS", image: "react.png", width: 80, height: 80 },
  { skill_name: "Material-UI", image: "mui.png", width: 80, height: 80 },
  { skill_name: "Flutter (Web)", image: "flutter.png", width: 60, height: 60 },
] as const;

export const BACKEND_TECHNOLOGIES = [
  { skill_name: "Node.js", image: "node.png", width: 80, height: 80 },
  { skill_name: "Express.js", image: "express.png", width: 80, height: 80 },
  { skill_name: "Spring", image: "spring.png", width: 60, height: 60 },
  { skill_name: "Spring Boot", image: "springboot.png", width: 60, height: 60 },
  { skill_name: "JSP", image: "jsp.png", width: 60, height: 60 },
  { skill_name: "ASP.NET", image: "aspnet.png", width: 60, height: 60 },
  { skill_name: "Django", image: "django.png", width: 60, height: 60 },
  { skill_name: "Laravel", image: "laravel.png", width: 60, height: 60 },
  { skill_name: "Kotlin", image: "kotlin.png", width: 60, height: 60 },
  { skill_name: "C#", image: "csharp.png", width: 60, height: 60 },
] as const;

export const DATABASE_TECHNOLOGIES = [
  { skill_name: "MySQL", image: "mysql.png", width: 70, height: 70 },
  { skill_name: "PostgreSQL", image: "postgresql.png", width: 70, height: 70 },
  { skill_name: "MongoDB", image: "mongodb.png", width: 40, height: 40 },
  { skill_name: "SQLite", image: "sqlite.png", width: 60, height: 60 },
  { skill_name: "Firebase", image: "firebase.png", width: 55, height: 55 },
  { skill_name: "Oracle DB", image: "oracle.png", width: 60, height: 60 },
  { skill_name: "SQL Server", image: "sqlserver.png", width: 60, height: 60 },
] as const;

export const CLOUD_HOSTING = [
  { skill_name: "Firebase", image: "firebase.png", width: 55, height: 55 },
  { skill_name: "Netlify", image: "netlify.png", width: 60, height: 60 },
  { skill_name: "Vercel", image: "vercel.png", width: 60, height: 60 },
] as const;

export const VERSION_CONTROL = [
  { skill_name: "Git", image: "git.png", width: 60, height: 60 },
  { skill_name: "GitHub", image: "github.png", width: 60, height: 60 },
] as const;

export const DEVOPS_TOOLS = [
  { skill_name: "Figma", image: "figma.png", width: 50, height: 50 },
  { skill_name: "Jira", image: "jira.png", width: 50, height: 50 },
] as const;

export const IDE_TOOLS = [
  { skill_name: "VS Code", image: "vscode.png", width: 50, height: 50 },
  { skill_name: "Visual Studio", image: "visualstudio.png", width: 50, height: 50 },
  { skill_name: "Android Studio", image: "androidstudio.png", width: 50, height: 50 },
  { skill_name: "IntelliJ IDEA", image: "intellij.png", width: 50, height: 50 },
  { skill_name: "Eclipse", image: "eclipse.png", width: 50, height: 50 },
  { skill_name: "NetBeans", image: "netbeans.png", width: 50, height: 50 },
  { skill_name: "Postman", image: "postman.png", width: 50, height: 50 },
  { skill_name: "Adobe XD", image: "adobe.png", width: 50, height: 50 },
] as const;


export const PROJECTS = [
  {
    title: "CIAL Prepaid Taxi Booking",
    description:
      "An online prepaid taxi booking system for Cochin International Airport (CIAL), built to streamline passenger transportation. The platform allows passengers to pre-book taxis, ensuring a seamless travel experience right from the airport. It features real-time availability, secure payment options, and user-friendly interfaces.",
    image: "/projects/project-1.png",
    link: "https://prepaid.cial.aero/",
  },
  {
    title: "Smylabs",
    description:
      "A comprehensive digital solution designed for dental labs and clinics. Smylabs enables efficient case tracking, communication between labs and dentists, digital prescription submission, and real-time updates. The platform enhances workflow efficiency and helps reduce manual processes in dental healthcare.",
    image: "/projects/project-2.png",
    link: "https://smylabs.com/", 
  },
  {
    title: "e-Live Campus",
    description:
      "A modern education management system that supports online learning, exam management, student-teacher interaction, and institutional administration. e-Live Campus offers a unified platform for schools and colleges to digitize operations, enhance classroom experiences, and ensure uninterrupted academic activities.",
    image: "/projects/project-3.png",
    link: "https://elivecampus.com/",
  },
] as const;


export const FOOTER_DATA = [
  {
    title: "Community",
    data: [
      {
        name: "YouTube",
        icon: FaYoutube,
        link: "https://youtube.com",
      },
      {
        name: "GitHub",
        icon: RxGithubLogo,
        link: "https://github.com/suraj-k-s",
      },
      {
        name: "Discord",
        icon: RxDiscordLogo,
        link: "https://discord.com",
      },
    ],
  },
  {
    title: "Social Media",
    data: [
      {
        name: "Instagram",
        icon: RxInstagramLogo,
        link: "https://instagram.com/surajks_official",
      },
      {
        name: "Twitter",
        icon: RxTwitterLogo,
        link: "https://twitter.com",
      },
      {
        name: "Linkedin",
        icon: RxLinkedinLogo,
        link: "https://linkedin.com/in/suraj-k-s",
      },
    ],
  },
  {
    title: "About",
    data: [
      {
        name: "Become Sponsor",
        icon: null,
        link: "https://youtube.com",
      },
      {
        name: "Learning about me",
        icon: null,
        link: "https://surajks.com",
      },
      {
        name: "Contact Me",
        icon: null,
        link: "mailto:surajks28101999@gmail.com",
      },
    ],
  },
] as const;

export const NAV_LINKS = [
  {
    title: "About me",
    link: "#about-me",
  },
  {
    title: "Skills",
    link: "#skills",
  },
  {
    title: "Projects",
    link: "#projects",
  },
] as const;

export const LINKS = {
  sourceCode: "https://github.com/suraj-k-s/portfolio",
};
