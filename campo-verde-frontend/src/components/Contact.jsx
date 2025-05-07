import { motion } from "framer-motion";

const Contact = () => {
  return (
    <section id="contacto" className="py-20 px-6 bg-white text-center">
      <motion.h2
        className="text-3xl md:text-4xl font-bold text-green-700 mb-6"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true, amount: 0.5 }}
      >
        Contáctanos
      </motion.h2>

      <motion.p
        className="text-gray-700 mb-4"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.6 }}
        viewport={{ once: true }}
      >
        ¿Tienes dudas? Escríbenos o visítanos.
      </motion.p>

      <motion.p
        className="text-gray-600"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4, duration: 0.6 }}
        viewport={{ once: true }}
      >
        📍 Colima, México
      </motion.p>

      <motion.p
        className="text-gray-600"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6, duration: 0.6 }}
        viewport={{ once: true }}
      >
        📞 (312) 123 4567
      </motion.p>

      <motion.p
        className="text-gray-600"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8, duration: 0.6 }}
        viewport={{ once: true }}
      >
        ✉️ informes@campoverde.edu.mx
      </motion.p>
    </section>
  );
};

export default Contact;
