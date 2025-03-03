import { Element } from "react-scroll";
import { motion, useReducedMotion } from "framer-motion";
import { Code, BookOpen, Database } from "lucide-react";
import { FiMonitor } from "react-icons/fi";
import { useMemo } from "react";

const educationData = [
  {
    degree: "Bachelor of Science in Computer Science",
    institution: "University of Karachi",
    year: "2022 - present",
  },
];

const journeyData = [
  { Icon: Code, title: "Full Stack Development", color: "text-red-400" },
  { Icon: FiMonitor, title: "Frontend Mastery", color: "text-amber-400" },
  { Icon: Database, title: "Backend Expertise", color: "text-green-400" },
  { Icon: BookOpen, title: "Continuous Learning", color: "text-purple-400" },
];

const About = () => {
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

  return (
    <Element name="about" id="about">
      <section className="min-h-screen flex items-center justify-center px-4 py-20 md:py-24">
        <motion.div
          className="text-center w-full max-w-full md:max-w-3xl lg:max-w-6xl mx-auto"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          <motion.h2
            variants={itemVariants}
            className=" custom-size text-5xl  md:text-6xl font-bold mb-16 md:mb-20 font-heading bg-clip-text text-transparent bg-gradient-to-r from-red-500 to-amber-400"
          >
            About Me
          </motion.h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12">
            <motion.div
              variants={itemVariants}
              className="space-y-6 max-[425px]:space-y-4 backdrop-blur-lg bg-white/5 transition-colors rounded-2xl max-[425px]:p-4 p-6 md:p-8 border border-gray-700/30"
            >
              <h3 className="max-[344px]:text-lg max-[540px]:text-2xl max-[387px]:text-xl text-3xl font-semibold text-white  text-left font-heading">
                Professional Journey
              </h3>
              <p className="max-[425px]:text-sm text-gray-300 leading-relaxed text-left font-body  text-base md:text-lg lg:text-xl">
                I'm a dedicated full-stack developer building robust, scalable
                web apps with MongoDB, Express, React, and Node. I excel in
                every stage of development and thrive on continuous innovation.
              </p>
              <div className="grid max-[550px]:grid-cols-1 grid-cols-2 md:grid-cols-2 gap-4 md:gap-6">
                {journeyData.map(({ Icon, title, color }, index) => (
                  <motion.div
                    key={index}
                    variants={itemVariants}
                    className="flex items-center px-3 py-3 bg-gray-700/30 rounded-xl"
                  >
                    <Icon
                      className={`w-7 h-7 max-[387px]:w-5 max-[387px]:h-5 ${color} mr-3 max-[1113px]:w-6 max-[1113px]:h-6`}
                    />
                    <span className="text-sm font-medium max-[387px]:text-xs text-gray-200 max-[1113px]:text-[0.75rem]">
                      {title}
                    </span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
            <motion.div
              variants={itemVariants}
              className="space-y-6 max-[425px]:space-y-4 backdrop-blur-lg bg-white/5 transition-colors rounded-2xl max-[425px]:p-4 p-6 md:p-8 border border-gray-700/30"
            >
              <h3 className="max-[344px]:text-lg max-[540px]:text-2xl max-[387px]:text-xl text-3xl font-semibold text-white text-left font-heading">
                Education & Expertise
              </h3>
              <div className="space-y-6">
                {educationData.map((edu, index) => (
                  <motion.div
                    key={index}
                    variants={itemVariants}
                    className="border-l-4 border-amber-600 pl-4 relative group text-left"
                  >
                    <h4 className="max-[387px]:text-base max-[344px]:text-sm max-[425px]:text-lg max-[387px]:text-l text-xl font-semibold text-white mb-2">
                      {edu.degree}
                    </h4>
                    <p className="max-[344px]:text-xs text-gray-300 mb-1 max-[425px]:text-sm">
                      {edu.institution}
                    </p>
                    <p className="max-[344px]:text-xs text-gray-400 text-sm">
                      {edu.year}
                    </p>
                  </motion.div>
                ))}
              </div>
              <motion.p
                variants={itemVariants}
                className="max-[425px]:text-sm text-gray-300 leading-relaxed text-left font-body  text-base md:text-lg lg:text-xl"
              >
                My computer science foundation provides deep insights into
                software engineering principles, enhanced by practical MERN
                stack expertise. This synergy enables me to architect solutions
                that balance technical excellence with real-world applicability.
              </motion.p>
            </motion.div>
          </div>
        </motion.div>
      </section>
    </Element>
  );
};

export default About;
