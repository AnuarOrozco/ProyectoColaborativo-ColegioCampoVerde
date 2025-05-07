import { motion } from "framer-motion";

const Footer = () => {
  return (
    <motion.footer
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      viewport={{ once: true }}
      className="bg-green-700 text-white py-6 text-center"
    >
      <p>&copy; {new Date().getFullYear()} Colegio Campo Verde. Todos los derechos reservados.</p>
    </motion.footer>
  );
};

export default Footer;