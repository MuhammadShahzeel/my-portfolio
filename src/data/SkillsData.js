import { IoLogoJavascript, IoLogoCss3 } from "react-icons/io";
import {
  FaJava,
  FaPython,
  FaHtml5,
  FaReact,
  FaBootstrap,
  FaNodeJs,
  FaGitAlt,
} from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";
import { FiGithub } from "react-icons/fi";
import {
  SiMui,
  SiRedux,
  SiExpress,
  SiMongodb,
  SiMongoose,
  SiFirebase,
  SiPostman,
  SiNetlify,
  SiVite,
} from "react-icons/si";
import { VscVscode } from "react-icons/vsc";
import { IoLogoVercel } from "react-icons/io5";
import ChatGptIcon from "../assets/icons/ChatGptIcon";
import JwtIcon from "../assets/icons/JwtIcon";

const skillsData = [
  {
    category: "Frontend Development",
    skills: [
      { name: "HTML", icon: FaHtml5, color: "text-orange-500" },
      { name: "CSS", icon: IoLogoCss3, color: "text-blue-500" },
      { name: "Tailwind", icon: RiTailwindCssFill, color: "text-cyan-400" },
      { name: "Bootstrap", icon: FaBootstrap, color: "text-purple-600" },
      { name: "MaterialUI", icon: SiMui, color: "text-blue-600" },
      { name: "React", icon: FaReact, color: "text-cyan-400" },
      { name: "Redux", icon: SiRedux, color: "text-purple-500" },
    ],
  },
  {
    category: "Backend Development",
    skills: [
      { name: "Node.js", icon: FaNodeJs, color: "text-lime-500" },
      { name: "Express", icon: SiExpress, color: "text-gray-300" },
      { name: "MongoDB", icon: SiMongodb, color: "text-green-500" },
      { name: "JWT", icon: JwtIcon, color: "text-white" },
      { name: "Mongoose", icon: SiMongoose, color: "text-red-500" },
      { name: "Firebase", icon: SiFirebase, color: "text-amber-500" },
    ],
  },
  {
    category: "Programming Languages",
    skills: [
      { name: "JavaScript", icon: IoLogoJavascript, color: "text-yellow-400" },
      { name: "Java", icon: FaJava, color: "text-red-600" },
      { name: "Python", icon: FaPython, color: "text-blue-400" },
    ],
  },
  {
    category: "Deployment & Tools",
    skills: [
      { name: "Git", icon: FaGitAlt, color: "text-orange-500" },
      { name: "GitHub", icon: FiGithub, color: "text-white" },
      { name: "Postman", icon: SiPostman, color: "text-orange-600" },
      { name: "Vite", icon: SiVite, color: "text-violet-500" },
      { name: "ChatGPT", icon: ChatGptIcon, color: "text-white" },
      { name: "VSCode", icon: VscVscode, color: "text-blue-500" },
      { name: "Vercel", icon: IoLogoVercel, color: "text-white" },
      { name: "Netlify", icon: SiNetlify, color: "text-teal-400" },
    ],
  },
];

export default skillsData;
