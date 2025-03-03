import { motion } from "framer-motion";
import { useEffect, useState, useMemo } from "react";

const CustomCursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  const [isVisible, setIsVisible] = useState(true);

  const isTouchDevice = useMemo(() => {
    return "ontouchstart" in window || navigator.maxTouchPoints > 0;
  }, []);

  useEffect(() => {
    if (isTouchDevice) return;

    const updateCursorPosition = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
      setIsVisible(true); // Ensure visibility when mouse moves inside window
    };

    const handleMouseEnter = () => setIsHovering(true);
    const handleMouseLeave = () => setIsHovering(false);
    
    // Check if mouse is outside window
    const checkMouseBoundary = (e) => {
      const { clientX, clientY } = e;
      if (
        clientX <= 0 || 
        clientY <= 0 || 
        clientX >= window.innerWidth || 
        clientY >= window.innerHeight
      ) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }
    };

    window.addEventListener("mousemove", updateCursorPosition);
    window.addEventListener("mousemove", checkMouseBoundary);
    
    // Handle when mouse leaves the document entirely
    document.addEventListener("mouseleave", () => setIsVisible(false));
    document.addEventListener("mouseenter", () => setIsVisible(true));

    // Store interactive elements for efficient cleanup
    const interactiveElements = document.querySelectorAll("a, button, .interactive");
    interactiveElements.forEach((el) => {
      el.addEventListener("mouseenter", handleMouseEnter);
      el.addEventListener("mouseleave", handleMouseLeave);
    });

    return () => {
      window.removeEventListener("mousemove", updateCursorPosition);
      window.removeEventListener("mousemove", checkMouseBoundary);
      document.removeEventListener("mouseleave", () => setIsVisible(false));
      document.removeEventListener("mouseenter", () => setIsVisible(true));
      
      interactiveElements.forEach((el) => {
        el.removeEventListener("mouseenter", handleMouseEnter);
        el.removeEventListener("mouseleave", handleMouseLeave);
      });
    };
  }, [isTouchDevice]);

  if (isTouchDevice) return null;

  return (
    <motion.div
      className="fixed pointer-events-none z-[9999]"
      animate={{
        x: position.x - 16,
        y: position.y - 16,
        scale: isHovering ? 1.8 : 1,
        opacity: isVisible ? (isHovering ? 0.9 : 0.6) : 0,
      }}
      transition={{
        type: "spring",
        mass: 0.1,
        stiffness: 200,
        damping: 15,
      }}
      style={{
        width: "32px",
        height: "32px",
        background: "radial-gradient(circle, #F79631 0%, #6A1B9A 100%)",
        borderRadius: "50%",
        filter: "blur(2px)",
        mixBlendMode: "screen",
        willChange: "transform",
      }}
    >
      <div className="absolute inset-0 bg-white/10 rounded-full animate-ping" />
    </motion.div>
  );
};

export default CustomCursor;