import { Element } from "react-scroll";
import { motion, useReducedMotion } from "framer-motion";
import { useMemo } from "react";
import skillsData from "../../data/SkillsData";

const Skills = () => {
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
    <Element name="skills" id="skills">
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
            Skills
          </motion.h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12">
            {skillsData.map((category, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="space-y-6 max-[425px]:space-y-4 backdrop-blur-lg bg-white/5 transition-colors rounded-2xl max-[425px]:p-4 p-6 md:p-8 border border-gray-700/30"
              >
                <div className="flex items-center space-x-4">
                  <h3 className="max-[344px]:text-lg max-[540px]:text-2xl max-[387px]:text-xl text-3xl font-semibold text-white text-left font-heading">
                    {category.category}
                  </h3>
                </div>
                <div className="flex flex-wrap gap-3 max-[425px]:gap-2">
                  {category.skills.map((skill, skillIndex) => (
                    <motion.div
                      key={skillIndex}
                      className="max-[387px]:text-sm max-[1065px]:px-[0.8rem] flex items-center max-[425px]:px-3 max-[425px]:py-1 px-4 py-2 bg-gray-700/30 rounded-full text-sm font-medium text-gray-200"
                    >
                      <skill.icon
                        className={`max-[425px]:w-4 max-[425px]:h-4 w-5 h-5 ${skill.color} mr-2`}
                      />
                      <span>{skill.name}</span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>
    </Element>
  );
};

export default Skills;
