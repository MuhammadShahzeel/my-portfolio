import { Element } from "react-scroll";
import { motion, useReducedMotion, AnimatePresence } from "framer-motion";
import { useState, useEffect, useMemo } from "react";
import {
  FiExternalLink,
  FiGithub,
  FiChevronUp,
  FiChevronDown,
} from "react-icons/fi";
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
import {
  SiVite,
  SiMui,
  SiRedux,
  SiExpress,
  SiMongodb,
  SiMongoose,
  SiFirebase,
  SiPostman,
  SiNetlify,
} from "react-icons/si";
import { VscVscode } from "react-icons/vsc";
import { IoLogoVercel } from "react-icons/io5";
import ChatGptIcon from "../../assets/icons/ChatGptIcon";
import JwtIcon from "../../assets/icons/JwtIcon";
import projectsData from "../../data/ProjectsData";

const Projects = () => {
  const [isTouchDevice, setIsTouchDevice] = useState(false);

  useEffect(() => {
    const detectTouchDevice = () => {
      setIsTouchDevice(
        "ontouchstart" in window ||
          navigator.maxTouchPoints > 0 ||
          navigator.msMaxTouchPoints > 0
      );
    };
    detectTouchDevice();
  }, []);

  const getTechColor = (tech) => {
    const colorMap = {
      HTML: "text-orange-500",
      CSS: "text-blue-500",
      JavaScript: "text-yellow-400",
      React: "text-cyan-400",
      "Node.js": "text-lime-500",
      Express: "text-gray-300",
      MongoDB: "text-green-500",
      Mongoose: "text-red-500",
      Firebase: "text-amber-500",
      Tailwind: "text-cyan-400",
      Bootstrap: "text-purple-600",
      MaterialUI: "text-blue-600",
      Redux: "text-purple-500",
      Java: "text-red-600",
      Python: "text-blue-400",
      Git: "text-orange-500",
      Postman: "text-orange-600",
      ChatGPT: "text-white",
      JWT: "text-white",
      VSCode: "text-blue-500",
      Vercel: "text-white",
      Netlify: "text-teal-400",
      Vite: "text-violet-500",
    };
    return colorMap[tech] || "text-gray-200";
  };

  const iconMap = {
    JavaScript: IoLogoJavascript,
    CSS: IoLogoCss3,
    Java: FaJava,
    Python: FaPython,
    HTML: FaHtml5,
    React: FaReact,
    Bootstrap: FaBootstrap,
    "Node.js": FaNodeJs,
    Git: FaGitAlt,
    Tailwind: RiTailwindCssFill,
    MaterialUI: SiMui,
    Redux: SiRedux,
    Express: SiExpress,
    MongoDB: SiMongodb,
    Mongoose: SiMongoose,
    Firebase: SiFirebase,
    Postman: SiPostman,
    Netlify: SiNetlify,
    VSCode: VscVscode,
    Vercel: IoLogoVercel,
    ChatGPT: ChatGptIcon,
    JWT: JwtIcon,
    Vite: SiVite,
  };

  const [showAll, setShowAll] = useState(false);
  const visibleProjects = showAll ? projectsData : projectsData.slice(0, 2);
  const shouldReduceMotion = useReducedMotion();

  const containerVariants = useMemo(
    () => ({
      hidden: { opacity: 0 },
      visible: {
        opacity: 1,
        transition: { staggerChildren: 0.1, delayChildren: 0.1 },
      },
    }),
    []
  );

  const itemVariants = useMemo(
    () =>
      shouldReduceMotion
        ? { hidden: { opacity: 1, y: 0 }, visible: { opacity: 1, y: 0 } }
        : {
            hidden: { opacity: 0, y: 30 },
            visible: {
              opacity: 1,
              y: 0,
              transition: { type: "spring", stiffness: 120, damping: 20 },
            },
          },
    [shouldReduceMotion]
  );

  const buttonHoverVariants = useMemo(
    () =>
      isTouchDevice
        ? { hover: {}, tap: {} }
        : {
            hover: { scale: 1.05, shadow: "0px 5px 15px rgba(0,0,0,0.2)" },
            tap: { scale: 0.95 },
          },
    [isTouchDevice]
  );

  return (
    <Element name="projects" id="projects">
      <section className="min-h-screen px-4 py-20 md:py-24">
        <motion.div
          className="w-full max-w-full md:max-w-3xl lg:max-w-6xl mx-auto"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          <motion.h2
            variants={itemVariants}
            className="custom-size text-5xl md:text-6xl font-bold mb-16 md:mb-20 text-center font-heading bg-clip-text text-transparent bg-gradient-to-r from-red-500 to-amber-400"
          >
            Projects
          </motion.h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12">
            <AnimatePresence>
              {visibleProjects.map((project) => (
                <motion.div
                  key={project.title}
                  variants={itemVariants}
                  initial="hidden"
                  animate="visible"
                  exit="hidden"
                  className="backdrop-blur-lg bg-white/5 rounded-2xl p-6 border border-gray-700/30"
                >
                  <div className="flex flex-col h-full">
                    <div className="relative overflow-hidden rounded-xl mb-6 aspect-video">
                      <img
                        src={project.imageUrl}
                        alt={project.title}
                        className="absolute inset-0 w-full h-full object-cover object-center rounded-xl"
                      />
                    </div>
                    <div className="flex flex-col flex-grow">
                      <h3 className="text-2xl font-semibold text-white mb-2 font-heading">
                        {project.title}
                      </h3>
                      <p className="text-gray-300 mb-5 flex-grow font-body text-base md:text-lg lg:text-xl max-[425px]:text-sm leading-relaxed text-left">
                        {project.description}
                      </p>
                      <div className="flex flex-wrap gap-3 mb-6">
                        {project.technologies.map((tech, techIndex) => {
                          const IconComponent = iconMap[tech];
                          return (
                            <motion.div
                              key={techIndex}
                              className="max-[387px]:text-sm max-[1065px]:px-[0.8rem] flex items-center max-[425px]:px-3 max-[425px]:py-1 px-4 py-2 bg-gray-700/30 rounded-full text-sm font-medium text-gray-200"
                            >
                              {IconComponent && (
                                <IconComponent
                                  className={`max-[425px]:w-4 max-[425px]:h-4 w-5 h-5 ${getTechColor(
                                    tech
                                  )} mr-2`}
                                />
                              )}
                              <span>{tech}</span>
                            </motion.div>
                          );
                        })}
                      </div>
                      <div className="flex gap-4 mt-auto">
                        <motion.a
                          href={project.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className={`pdx max-[387px]:text-xs flex items-center gap-2 px-5 py-2.5 rounded-lg bg-gradient-to-r from-red-500 to-amber-400 text-primary font-semibold transition duration-200 text-sm ${
                            !isTouchDevice
                              ? "transform hover:scale-105 hover:shadow-xl hover:brightness-90"
                              : ""
                          }`}
                          whileHover={isTouchDevice ? undefined : "hover"}
                          whileTap={isTouchDevice ? undefined : "tap"}
                          variants={buttonHoverVariants}
                        >
                          <FiExternalLink className="w-5 h-5 max-[387px]:w-4 max-[387px]:h-4" />
                          Live Demo
                        </motion.a>
                        <motion.a
                          href={project.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className={`max-[387px]:text-xs font-semibold flex items-center gap-2 px-5 py-2.5 rounded-lg bg-gray-700/50 text-gray-200 transition duration-50 text-sm ${
                            !isTouchDevice
                              ? "transform hover:scale-105 hover:bg-gray-700 hover:text-white hover:shadow-xl"
                              : ""
                          }`}
                          whileHover={isTouchDevice ? undefined : "hover"}
                          whileTap={isTouchDevice ? undefined : "tap"}
                          variants={buttonHoverVariants}
                        >
                          <FiGithub className="w-5 h-5 max-[387px]:w-4 max-[387px]:h-4" />
                          GitHub
                        </motion.a>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
          <div className="flex justify-center mt-12">
            <motion.button
              onClick={() => setShowAll(!showAll)}
              className={`no-hover max-[387px]:text-xs flex items-center gap-2 px-5 py-2.5 rounded-lg bg-gradient-to-r from-red-500 to-amber-400 text-primary font-semibold transition duration-200 text-sm ${
                !isTouchDevice ? "hover:shadow-lg hover:brightness-90" : ""
              }`}
              aria-label="Toggle project visibility"
              whileTap={isTouchDevice ? undefined : "tap"}
              variants={buttonHoverVariants}
            >
              {showAll ? (
                <>
                  Show Less
                  <FiChevronUp className="max-[387px]:w-4 max-[387px]:h-4 w-5 h-5" />
                </>
              ) : (
                <>
                  Show More
                  <FiChevronDown className="max-[387px]:w-4 max-[387px]:h-4 w-5 h-5" />
                </>
              )}
            </motion.button>
          </div>
        </motion.div>
      </section>
    </Element>
  );
};

export default Projects;
