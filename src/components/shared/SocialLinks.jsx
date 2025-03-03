import { motion } from "framer-motion";
import { VscGithubAlt } from "react-icons/vsc";
import { FaLinkedinIn, FaWhatsapp } from "react-icons/fa";

const socialLinks = [
  {
    Icon: VscGithubAlt,
    href: "https://github.com/MuhammadShahzeel",
    label: "GitHub profile",
  },
  {
    Icon: FaLinkedinIn,
    href: "https://www.linkedin.com/in/muhammad-shahzeel-b06a8822a/",
    label: "LinkedIn profile",
  },
  {
    Icon: FaWhatsapp,
    href: "https://wa.me/+923112107533?text=Hello%20there!",
    label: "Contact via WhatsApp",
  },
];

const SocialLinks = ({
  containerClassName = "",
  linkClassName = "",
  iconClassName = "",
}) => {
  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: "spring", stiffness: 120, damping: 12 },
    },
    hover: {
      y: -8,
      scale: 1.05,
      transition: { type: "spring", stiffness: 300 },
    },
    tap: { scale: 0.95 },
  };

  return (
    <motion.div
      className={containerClassName}
      initial="hidden"
      animate="visible"
      variants={{
        visible: { transition: { staggerChildren: 0.15 } },
      }}
    >
      {socialLinks.map(({ Icon, href, label }, index) => (
        <motion.a
          key={index}
          variants={itemVariants}
          whileHover="hover"
          whileTap="tap"
          className={linkClassName}
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={label}
        >
          <Icon className={iconClassName} />
        </motion.a>
      ))}
    </motion.div>
  );
};

export default SocialLinks;
