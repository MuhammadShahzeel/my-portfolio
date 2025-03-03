import React, { memo } from "react";
import PropTypes from "prop-types";
import { motion } from "framer-motion";
import { Typewriter } from "react-simple-typewriter";

const typeAnimationVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { type: "spring", stiffness: 120, damping: 20 },
  },
};

const AnimatedType = ({
  words = [
    "MERN-Stack Developer",
    "Crafting Modern Web Apps",
    "Scaling Web Solutions",
  ],
  typeSpeed = 40,
  deleteSpeed = 18,
  delaySpeed = 1200,
  loop = 0,
  cursorStyle = "|",
  className = "",
}) => {
  return (
    <motion.div
      variants={typeAnimationVariants}
      className={`mb-6 md:mb-8 ${className}`}
      aria-live="polite"
    >
      <h2 className="text-lg md:text-xl lg:text-2xl xl:text-3xl font-medium text-white font-mono">
        <Typewriter
          words={words}
          loop={loop}
          cursor
          cursorStyle={cursorStyle}
          typeSpeed={typeSpeed}
          deleteSpeed={deleteSpeed}
          delaySpeed={delaySpeed}
        />
      </h2>
    </motion.div>
  );
};

AnimatedType.propTypes = {
  words: PropTypes.arrayOf(PropTypes.string),
  typeSpeed: PropTypes.number,
  deleteSpeed: PropTypes.number,
  delaySpeed: PropTypes.number,
  loop: PropTypes.number,
  cursorStyle: PropTypes.string,
  className: PropTypes.string,
};

export default memo(AnimatedType);
