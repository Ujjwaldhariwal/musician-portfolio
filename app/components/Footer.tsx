import { motion } from "framer-motion";

const Footer = () => (
  <footer className="py-6 text-center text-gray-600 bg-gradient-to-t from-purple-100 to-transparent">
    <p>&copy; {new Date().getFullYear()} Ujjwal Dhariwal. All rights reserved.</p>
    <motion.a
      href="#"
      className="inline-block mt-4 text-purple-500 hover:text-purple-700 transition-colors"
      whileHover={{ scale: 1.1 }}
    >
      Back to Top
    </motion.a>
  </footer>
);

export default Footer;