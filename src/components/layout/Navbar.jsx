import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import { X } from "lucide-react";
import { Link } from "react-scroll";
import { HiMenuAlt4 } from "react-icons/hi";

const menuVariants = {
  hidden: { x: "-100%" },
  visible: {
    x: 0,
    transition: { type: "tween", duration: 0.4, staggerChildren: 0.1 },
  },
  exit: { x: "-100%", transition: { type: "tween", duration: 0.4 } },
};

const navItemVariants = {
  hidden: { opacity: 0, x: -20 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.3 } },
};

const navItems = ["Home", "About", "Skills", "Projects", "Contact"];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("Home");

  const handleSectionChange = (item) => {
    setActiveSection(item);
    setIsOpen(false);
  };

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
  }, [isOpen]);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        isOpen &&
        event.target.closest(".mobile-menu") === null &&
        !event.target.closest('button[aria-label="Open navigation menu"]')
      ) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [isOpen]);

  useEffect(() => {
    const handleScroll = () => {
      const sections = navItems
        .map((item) => document.getElementById(item.toLowerCase()))
        .filter(Boolean);
      if (!sections.length) return;
      const offset = window.innerWidth < 768 ? 100 : 150;
      const scrollPosition = window.scrollY + offset;
      for (let i = sections.length - 1; i >= 0; i--) {
        if (scrollPosition >= sections[i].offsetTop) {
          if (activeSection !== navItems[i]) {
            setActiveSection(navItems[i]);
          }
          break;
        }
      }
    };
    window.addEventListener("scroll", handleScroll);
    setTimeout(handleScroll, 200);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [activeSection]);

  return (
    <nav className="fixed top-0 left-0 w-full flex items-center justify-between py-4 px-6 sm:px-12 backdrop-blur-lg bg-white/5 border-b border-gray-700/30 z-50 shadow-lg">
      <motion.div className="max-[540px]:text-2xl select-none text-3xl font-bold cursor-pointer">
        <Link
          to="home"
          smooth
          duration={500}
          className="no-hover flex items-center cursor-pointer select-none"
        >
          <span className="bg-gradient-to-r from-red-500 to-amber-400 bg-clip-text text-transparent">
            Portfolio
          </span>
        </Link>
      </motion.div>
      <ul className="hidden min-[900px]:flex gap-6 sm:gap-8 text-white text-base sm:text-lg">
        {navItems.map((item) => (
          <motion.li key={item} className="px-2 py-1 pointer-events-none">
            <Link
              to={item.toLowerCase()}
              smooth
              duration={500}
              onClick={() => handleSectionChange(item)}
              className={`font-semibold transition-all duration-300 cursor-pointer pointer-events-auto ${
                activeSection === item
                  ? "text-amber-400"
                  : "text-gray-300 hover:text-amber-400"
              }`}
            >
              {item}
            </Link>
          </motion.li>
        ))}
      </ul>
      {!isOpen && (
        <motion.button
          onClick={() => setIsOpen(true)}
          className="min-[900px]:hidden text-white focus:outline-none"
          aria-label="Open navigation menu"
          whileTap={{ scale: 0.95 }}
        >
          <HiMenuAlt4 className="w-7 h-7 " />
        </motion.button>
      )}
      <AnimatePresence>
        {isOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40"
              onClick={() => setIsOpen(false)}
            />
            <motion.div
              variants={menuVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              className="mobile-menu fixed top-0 left-0 w-[250px] sm:w-[300px] h-screen z-50 bg-primary border-gray-700/30 shadow-2xl rounded-r-md flex flex-col overflow-y-auto"
            >
              <div className="flex items-center justify-between py-4 px-6 border-b border-gray-700/30">
                <Link
                  to="home"
                  smooth
                  duration={500}
                  onClick={() => handleSectionChange("Home")}
                  className=" no-hover max-[540px]:text-2xl select-none text-3xl font-bold bg-gradient-to-r from-red-500 to-amber-400 bg-clip-text text-transparent cursor-pointer"
                >
                  Portfolio
                </Link>
                <button
                  onClick={() => setIsOpen(false)}
                  className="text-white focus:outline-none"
                  aria-label="Close navigation menu"
                >
                  <X className="w-7 h-7" />
                </button>
              </div>
              <ul className="mt-8">
                {navItems.map((item) => (
                  <motion.li
                    key={item}
                    variants={navItemVariants}
                    className="px-6 py-4 pointer-events-none"
                  >
                    <Link
                      to={item.toLowerCase()}
                      smooth
                      duration={500}
                      onClick={() => handleSectionChange(item)}
                      className={`text-xl font-semibold transition-colors cursor-pointer select-none pointer-events-auto ${
                        activeSection === item
                          ? "text-amber-400"
                          : "text-gray-300"
                      }`}
                    >
                      {item}
                    </Link>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
