import { motion, useReducedMotion } from "framer-motion";
import { ChevronUp, Phone } from "lucide-react";
import { VscGithubAlt } from "react-icons/vsc";
import { FaLinkedinIn, FaWhatsapp } from "react-icons/fa";
import { IoHeartSharp } from "react-icons/io5";
import { Link } from "react-scroll";
import { LuMail } from "react-icons/lu";
import { useMemo, useState, useEffect } from "react";

const navLinks = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

const socialLinks = [
  {
    Icon: VscGithubAlt,
    label: "GitHub",
    href: "https://github.com/MuhammadShahzeel",
  },
  {
    Icon: FaLinkedinIn,
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/muhammad-shahzeel-b06a8822a/",
  },
  {
    Icon: FaWhatsapp,
    label: "WhatsApp",
    href: "https://wa.me/+923112107533?text=Hello%20there!",
  },
];

const Footer = () => {
  const shouldReduceMotion = useReducedMotion();
  const [isTouchDevice, setIsTouchDevice] = useState(false);

  // Detect touch device on component mount
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
            hidden: { opacity: 0, y: 20 },
            visible: {
              opacity: 1,
              y: 0,
              transition: { type: "spring", stiffness: 120, damping: 20 },
            },
          },
    [shouldReduceMotion]
  );

  const noTransform = useMemo(
    () => ({
      hover: { y: 0, scale: 1 },
      tap: { y: 0, scale: 1 },
    }),
    []
  );

  const flatItem = useMemo(
    () =>
      shouldReduceMotion
        ? { hidden: { opacity: 1, y: 0 }, visible: { opacity: 1, y: 0 } }
        : {
            hidden: { opacity: 0, y: 0 },
            visible: {
              opacity: 1,
              y: 0,
              transition: { type: "spring", stiffness: 120, damping: 20 },
            },
          },
    [shouldReduceMotion]
  );

  const iconVariants = useMemo(
    () =>
      isTouchDevice
        ? { hover: {}, tap: {} }
        : {
            hover: { y: -3, scale: 1.05 },
            tap: { scale: 0.95 },
          },
    [isTouchDevice]
  );

  return (
    <motion.footer
      className="w-full backdrop-blur-md bg-white/5 border-t border-gray-700/30"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      role="contentinfo"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-8 py-16 max-[425px]:py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
          <motion.div variants={itemVariants} className="space-y-4">
            <h3 className="max-[540px]:text-2xl text-3xl lg:text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-red-500 to-amber-400 font-heading">
              Muhammad Shahzeel
            </h3>
            <p className="max-[425px]:text-sm text-gray-300 text-base md:text-lg leading-relaxed">
              A Passionate MERN Stack Developer continuously expanding skills to
              build modern web applications and deliver cutting-edge solutions.
            </p>
          </motion.div>
          <motion.nav
            variants={itemVariants}
            className="space-y-4"
            aria-label="Quick Links"
          >
            <h4 className="max-[425px]:text-base text-white font-semibold text-lg mb-4">
              Quick Links
            </h4>
            <ul className="space-y-3">
              {navLinks.map((link, index) => (
                <motion.li
                  key={index}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.2 }}
                  whileHover={noTransform.hover}
                  whileTap={noTransform.tap}
                  variants={noTransform}
                >
                  <Link
                    to={link.href.slice(1)}
                    smooth={true}
                    duration={500}
                    className={`cursor-pointer max-[425px]:text-sm text-gray-300 ${
                      !isTouchDevice ? "hover:text-amber-400" : ""
                    } transition-colors text-sm md:text-base`}
                  >
                    {link.label}
                  </Link>
                </motion.li>
              ))}
            </ul>
          </motion.nav>
          <motion.div variants={itemVariants} className="space-y-6">
            <div>
              <h4 className="max-[425px]:text-base text-white font-semibold text-lg mb-4">
                Get in Touch
              </h4>
              <ul className="space-y-3">
                <motion.li
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.2 }}
                  whileHover={noTransform.hover}
                  whileTap={noTransform.tap}
                  variants={flatItem}
                >
                  <a
                    href="mailto:shazeelarain786@gmail.com"
                    className={`no-hover group select-none flex items-center max-[425px]:text-sm text-gray-300 ${
                      !isTouchDevice ? "hover:text-amber-400" : ""
                    } transition-colors text-sm md:text-base`}
                    aria-label="Email Muhammad Shahzeel"
                  >
                    <LuMail
                      className={`w-5 h-5 mr-2 text-gray-300 ${
                        !isTouchDevice ? "group-hover:text-amber-400" : ""
                      } transition-colors`}
                    />
                    <span>shazeelarain786@gmail.com</span>
                  </a>
                </motion.li>
                <motion.li
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.2 }}
                  whileHover={noTransform.hover}
                  whileTap={noTransform.tap}
                  variants={flatItem}
                >
                  <a
                    href="tel:+923112107533"
                    className={`no-hover group flex select-none items-center max-[425px]:text-sm text-gray-300 ${
                      !isTouchDevice ? "hover:text-amber-400" : ""
                    } transition-colors text-sm md:text-base`}
                    aria-label="Call Muhammad Shahzeel"
                  >
                    <Phone
                      className={`w-5 h-5 mr-2 text-gray-300 ${
                        !isTouchDevice ? "group-hover:text-amber-400" : ""
                      } transition-colors`}
                    />
                    <span>+92 311 2107533</span>
                  </a>
                </motion.li>
              </ul>
            </div>
            <div>
              <h4 className="max-[425px]:text-base text-white font-semibold text-lg mb-4">
                Social Connections
              </h4>
              <div className="flex space-x-4 max-[425px]:space-x-2">
                {socialLinks.map((link, index) => (
                  <motion.a
                    key={index}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={link.label}
                    className={`p-2 rounded-md bg-gray-700/30 border border-gray-700/50 text-gray-300 ${
                      !isTouchDevice ? "hover:text-amber-400" : ""
                    } transition-colors`}
                    whileHover={isTouchDevice ? undefined : "hover"}
                    whileTap={isTouchDevice ? undefined : "tap"}
                    variants={iconVariants}
                  >
                    <link.Icon className="max-[425px]:w-5 max-[425px]:h-5 w-5 h-5 md:w-6 md:h-6" />
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
        <motion.div
          className="pt-10 border-t border-gray-700/30 flex flex-col md:flex-row justify-between items-center mt-10"
          variants={itemVariants}
        >
          <motion.div className="flex items-center text-gray-300 max-[425px]:text-sm text-sm md:text-base">
            <span>Made with</span>
            <motion.span
              className="mx-2 inline-block"
              animate={{ scale: [1, 1.15, 1] }}
              transition={{
                duration: 1.2,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              aria-hidden="true"
            >
              <IoHeartSharp className="text-red-500 max-[425px]:w-4 max-[425px]:h-4 w-5 h-5" />
            </motion.span>
            <span>by Muhammad Shahzeel</span>
          </motion.div>
          <Link
            to="home"
            smooth={true}
            duration={500}
            className={`no-hover flex select-none items-center text-gray-300 ${
              !isTouchDevice ? "hover:text-amber-400" : ""
            } transition-colors mt-4 md:mt-0 cursor-pointer`}
            aria-label="Back to Top"
          >
            <motion.span style={{ display: "inline-block" }}>
              <ChevronUp className="max-[425px]:w-5 max-[425px]:h-5 w-5 h-5 mr-1" />
            </motion.span>
            <span className="max-[425px]:text-sm text-sm md:text-base">
              Back to Top
            </span>
          </Link>
        </motion.div>
      </div>
    </motion.footer>
  );
};

export default Footer;
