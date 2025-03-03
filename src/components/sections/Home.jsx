import { Element, Link } from "react-scroll";
import { motion, useReducedMotion } from "framer-motion";
import { useMemo, useEffect, useState } from "react";
import AnimatedType from "../shared/AnimatedType";
import SocialLinks from "../shared/SocialLinks";
import { FaArrowRight } from "react-icons/fa6";

const animationConfig = {
  staggerChildren: 0.15,
  delayChildren: 0.2,
  duration: 0.6,
  ease: [0.42, 0, 0.58, 1],
};

const Home = () => {
  const shouldReduceMotion = useReducedMotion();
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

  const containerVariants = useMemo(
    () =>
      shouldReduceMotion
        ? { hidden: {}, visible: {} }
        : {
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: {
                staggerChildren: animationConfig.staggerChildren,
                delayChildren: animationConfig.delayChildren,
              },
            },
          },
    [shouldReduceMotion]
  );

  const itemVariants = useMemo(
    () =>
      shouldReduceMotion
        ? { hidden: {}, visible: {} }
        : {
            hidden: { opacity: 0, y: 20 },
            visible: {
              opacity: 1,
              y: 0,
              transition: {
                duration: animationConfig.duration,
                ease: animationConfig.ease,
              },
            },
          },
    [shouldReduceMotion]
  );

  const buttonVariants = useMemo(
    () =>
      shouldReduceMotion
        ? { hidden: {}, visible: {} }
        : {
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: {
                duration: animationConfig.duration,
                ease: animationConfig.ease,
              },
            },
          },
    [shouldReduceMotion]
  );

  const buttonClass = `bg-gradient-to-r from-red-500 to-amber-400 text-primary px-6 py-2.5 max-[425px]:px-5 max-[425px]:py-2.5 max-[425px]:text-sm md:px-8 md:py-3 rounded-lg font-semibold text-base md:text-lg transition-all duration-300 shadow-md focus:outline-none focus:ring-2 focus:ring-amber-400 inline-flex items-center justify-center cursor-pointer ${
    isTouchDevice ? "" : "hover:shadow-lg hover:brightness-90"
  }`;

  return (
    <Element name="home" id="home">
      <section className="min-h-screen flex items-center justify-center px-4 py-20 md:py-24">
        <motion.div
          className="text-center w-full max-w-6xl"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Added Hi, I am tagline */}
          <motion.div 
            variants={itemVariants}
            className="mb-2 md:mb-3"
          >
            <span className="inline-block text-lg md:text-xl lg:text-2xl font-medium text-gray-200 tracking-wide">
              Hi, I am
            </span>
          </motion.div>
          
          <motion.h1
            variants={itemVariants}
            className="md:mb-6 max-[425px]:mb-3 font-heading"
          >
            <span className="max-[425px]:text-5xl max-[320px]:text-4xl bg-gradient-to-r from-red-500 to-amber-400 text-transparent bg-clip-text text-5xl md:text-6xl lg:text-7xl font-bold">
              Muhammad <br className="sm:hidden" /> Shahzeel
            </span>
          </motion.h1>
          <AnimatedType />
          <motion.p
            variants={itemVariants}
            className="w-full max-[425px]:text-sm max-[425px]:px-2 text-gray-300 mx-auto mb-8 md:mb-12 text-base md:text-lg lg:text-xl leading-relaxed font-body px-4 text-center max-w-3xl"
          >
            A Passionate MERN Stack Developer continuously expanding skills to
            build modern web applications and deliver cutting-edge solutions.
          </motion.p>
          <motion.div variants={itemVariants} className="mb-8 md:mb-12">
            <SocialLinks
              containerClassName="flex gap-4 max-[425px]:gap-3 justify-center"
              linkClassName={`rounded-full backdrop-blur-lg bg-white/5 transition-colors p-3.5 max-[425px]:p-3 max-[320px]:p-2 border-2 border-amber-400/60 text-white ${
                isTouchDevice ? "" : "hover:text-amber-400"
              }`}
              iconClassName="max-[425px]:text-2xl text-2xl sm:text-3xl md:text-4xl"
              isTouchDevice={isTouchDevice}
            />
          </motion.div>
          <Link to="contact" smooth={true} duration={500}>
            <motion.div variants={buttonVariants} className={buttonClass}>
              Let&apos;s Connect <FaArrowRight className="ml-2" />
            </motion.div>
          </Link>
        </motion.div>
      </section>
    </Element>
  );
};

export default Home;