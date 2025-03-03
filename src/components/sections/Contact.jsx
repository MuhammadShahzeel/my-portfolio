import { Element } from "react-scroll";
import { motion, useReducedMotion } from "framer-motion";
import { Phone, MapPin, Send } from "lucide-react";
import { useState, useMemo, useEffect } from "react";
import TextField from "@mui/material/TextField";
import { styled } from "@mui/material/styles";
import emailjs from "@emailjs/browser"; 
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { LuMail } from "react-icons/lu";
import SocialLinks from "../shared/SocialLinks";

const CustomTextField = styled(TextField)(() => ({
  "& .MuiFilledInput-root": {
    backgroundColor: "rgba(55, 65, 81, 0.3)",
    borderRadius: "0.5rem",
    color: "#E5E7EB",
    "&:before, &:after": { display: "none" },
    "&:hover": { backgroundColor: "rgba(55, 65, 81, 0.3)" },
    "&.Mui-focused": {
      backgroundColor: "rgba(55, 65, 81, 0.3)",
      boxShadow: "inset 0 -2px 0 0 #D97706",
    },
    // Add autofill styles
    "& .MuiFilledInput-input:-webkit-autofill": {
      WebkitBoxShadow: "0 0 0px 1000px rgba(55, 65, 81, 0.3) inset",
      WebkitTextFillColor: "#E5E7EB",
      borderRadius: "0.5rem",
    },
    "& .MuiFilledInput-input:-webkit-autofill:hover, & .MuiFilledInput-input:-webkit-autofill:focus, & .MuiFilledInput-input:-webkit-autofill:active": {
      WebkitBoxShadow: "0 0 0px 1000px rgba(55, 65, 81, 0.3) inset",
      WebkitTextFillColor: "#E5E7EB",
    },
  },
  "& .MuiFilledInput-input": { 
    color: "#E5E7EB",
    // Add transition for autofill
    transition: "background-color 5000s ease-in-out 0s",
  },
  "& .MuiInputLabel-root": {
    color: "#9CA3AF",
    "@media (max-width: 425px)": { fontSize: "0.875rem" },
  },
  "& .MuiInputLabel-root.Mui-focused": { color: "#D97706" },
}));

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [isSending, setIsSending] = useState(false);
  const [isTouchDevice, setIsTouchDevice] = useState(false);
  const shouldReduceMotion = useReducedMotion();

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
            hidden: { opacity: 0, y: 30 },
            visible: {
              opacity: 1,
              y: 0,
              transition: { type: "spring", stiffness: 120, damping: 20 },
            },
          },
    [shouldReduceMotion]
  );

  // Add hover variants for touch/non-touch devices
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

  const noTransform = useMemo(
    () => ({
      hover: { y: 0, scale: 1 },
      tap: { y: 0, scale: 1 },
    }),
    []
  );

  const sendEmail = async (e) => {
    e.preventDefault();
    if (!name || !email || !message) {
      toast.error("Please fill in all fields.");
      return;
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      toast.error("Please enter a valid email address.");
      return;
    }
    setIsSending(true);
    const templateParams = {
      from_name: name,
      from_email: email,
      message,
      reply_to: email,
    };

    try {
      await emailjs.send(
        "service_y4pg9ws",     // Your Service ID
        "template_ywv6wcm",    // Your Template ID
        templateParams,
        "sLo4GuKX-GrSAmcgd"    // Your Public Key
      );
      toast.success("Message sent successfully!");
      setName("");
      setEmail("");
      setMessage("");
    } catch (error) {
      console.error("Email sending error:", error);
      toast.error("Failed to send message. Please try again later.");
    } finally {
      setIsSending(false);
    }
  };

  return (
    <Element name="contact" id="contact">
      <section className="min-h-screen flex items-center justify-center px-4 py-20 md:py-24">
        <motion.div
          className="w-full max-w-full md:max-w-3xl lg:max-w-6xl mx-auto"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          <div className="text-center mb-12 md:mb-16">
            <motion.h2
              variants={itemVariants}
              className="custom-size text-5xl md:text-6xl font-bold font-heading bg-clip-text text-transparent bg-gradient-to-r from-red-500 to-amber-400"
            >
              Contact Me
            </motion.h2>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12">
            <motion.div
              variants={itemVariants}
              className="backdrop-blur-lg bg-white/5 rounded-2xl max-[425px]:p-4 p-6 md:p-8 border border-gray-700/30"
            >
              <div className="space-y-2">
                <h3 className="max-[344px]:text-lg max-[540px]:text-2xl max-[387px]:text-xl text-3xl font-semibold text-white text-left font-heading">
                  Contact Information
                </h3>
                <p className="max-[425px]:text-sm text-md text-gray-300">
                  I&apos;m available via phone, email, and social media. Let&apos;s get in touch!
                </p>
              </div>
              <div className="mt-4 space-y-6">
                <motion.div
                  className="flex items-start space-x-4"
                  whileHover={isTouchDevice ? undefined : "hover"}
                  whileTap={isTouchDevice ? undefined : "tap"}
                  variants={noTransform}
                >
                  <LuMail className="max-[425px]:w-5 max-[425px]:h-5 w-6 h-6 text-red-400 mt-1" />
                  <div>
                    <p className="text-lg max-[387px]:text-sm font-medium text-gray-200">
                      Email
                    </p>
                    <p
                      className={`text-gray-400 max-[387px]:text-sm ${
                        !isTouchDevice ? "hover:text-amber-400" : ""
                      } transition-colors`}
                    >
                      shazeelarain786@gmail.com
                    </p>
                  </div>
                </motion.div>
                <motion.div
                  className="flex items-start space-x-4"
                  whileHover={isTouchDevice ? undefined : "hover"}
                  whileTap={isTouchDevice ? undefined : "tap"}
                  variants={noTransform}
                >
                  <Phone className="max-[425px]:w-5 max-[425px]:h-5 w-6 h-6 text-amber-400 mt-1" />
                  <div>
                    <p className="text-lg max-[387px]:text-sm font-medium text-gray-200">
                      Phone
                    </p>
                    <p
                      className={`text-gray-400 max-[387px]:text-sm ${
                        !isTouchDevice ? "hover:text-amber-400" : ""
                      } transition-colors`}
                    >
                      +92 311 2107533
                    </p>
                  </div>
                </motion.div>
                <motion.div
                  className="flex items-start space-x-4"
                  whileHover={isTouchDevice ? undefined : "hover"}
                  whileTap={isTouchDevice ? undefined : "tap"}
                  variants={noTransform}
                >
                  <MapPin className="max-[425px]:w-5 max-[425px]:h-5 w-6 h-6 text-green-400 mt-1" />
                  <div>
                    <p className="text-lg max-[387px]:text-sm font-medium text-gray-200">
                      Location
                    </p>
                    <p
                      className={`text-gray-400 max-[387px]:text-sm ${
                        !isTouchDevice ? "hover:text-amber-400" : ""
                      } transition-colors`}
                    >
                      Karachi, Pakistan
                    </p>
                  </div>
                </motion.div>
                <div className="mt-6 pt-6 border-t border-gray-700/30">
                  <h4 className="max-[425px]:text-lg text-xl font-semibold text-gray-200 mb-4">
                    Connect With Me
                  </h4>
                  <SocialLinks
                    containerClassName="flex gap-4 max-[425px]:gap-2 justify-start"
                    linkClassName={`rounded-full backdrop-blur-lg bg-white/5 transition-colors max-[425px]:p-2 p-3 border-2 border-amber-400/60 text-white ${
                      !isTouchDevice ? "hover:text-amber-400" : ""
                    }`}
                    iconClassName="max-[425px]:w-5 max-[425px]:h-5 w-6 h-6"
                    isTouchDevice={isTouchDevice}
                    iconVariants={iconVariants}
                  />
                </div>
              </div>
            </motion.div>
            <motion.div
              variants={itemVariants}
              className="backdrop-blur-lg bg-white/5 rounded-2xl max-[425px]:p-4 p-6 md:p-8 border border-gray-700/30"
            >
              <div className="space-y-2">
                <h3 className="max-[344px]:text-lg max-[540px]:text-2xl max-[387px]:text-xl text-3xl font-semibold text-white text-left font-heading">
                  Send a Message
                </h3>
                <p className="max-[425px]:text-sm text-md text-gray-300">
                  Your message is important to me. I&apos;ll respond as soon as possible!
                </p>
              </div>
              <div className="mt-4 space-y-6">
                <form
                  className="space-y-6"
                  name="contact-form"
                  noValidate
                  onSubmit={sendEmail}
                >
                  <CustomTextField
                    id="name"
                    name="name"
                    label="Full Name"
                    variant="filled"
                    fullWidth
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    autoComplete="name"
                  />
                  <CustomTextField
                    id="email"
                    name="email"
                    label="Email Address"
                    variant="filled"
                    fullWidth
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    autoComplete="email"
                  />
                  <CustomTextField
                    id="message"
                    name="message"
                    label="Message"
                    variant="filled"
                    fullWidth
                    multiline
                    rows={5}
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    autoComplete="off"
                  />
                  <motion.button
                    type="submit"
                    name="submit"
                    className={`no-hover w-full flex items-center justify-center max-[425px]:px-4 max-[425px]:py-2 max-[425px]:text-sm px-6 py-3.5 bg-gradient-to-r from-red-500 to-amber-400 text-primary font-semibold rounded-lg cursor-pointer transition-all duration-300 shadow-md ${
                      !isTouchDevice
                        ? "hover:shadow-lg hover:brightness-90"
                        : ""
                    } focus:outline-none`}
                    disabled={isSending}
                    whileHover={isTouchDevice ? undefined : "hover"}
                    whileTap={isTouchDevice ? undefined : "tap"}
                    variants={iconVariants}
                  >
                    <div className="flex items-center">
                      <Send className="max-[425px]:w-4 max-[425px]:h-4 w-5 h-5 mr-2" />
                      <span>{isSending ? "Sending..." : "Send Message"}</span>
                    </div>
                  </motion.button>
                </form>
              </div>
            </motion.div>
          </div>
        </motion.div>
        <ToastContainer
          theme="dark"
          position="bottom-right"
          autoClose={1000}
          hideProgressBar={true}
          newestOnTop={true}
          closeOnClick
          rtl={false}
          toastStyle={{ background: "#141414", color: "#fff" }}
        />
      </section>
    </Element>
  );
};

export default Contact;
