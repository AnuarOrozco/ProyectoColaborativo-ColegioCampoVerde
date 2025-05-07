import { motion } from "framer-motion";

const About = () => {
  return (
    <section id="acerca" className="py-20 px-6 bg-gray-50 text-center">
      <motion.h2
        className="text-3xl md:text-4xl font-bold text-green-700 mb-6"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true, amount: 0.5 }}
      >
        Acerca del Colegio
      </motion.h2>

      <motion.p
        className="max-w-3xl mx-auto text-gray-700 text-lg"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        viewport={{ once: true, amount: 0.5 }}
      >
        En el Colegio Campo Verde formamos seres humanos íntegros, comprometidos con su comunidad y su entorno.
        Nuestros programas están diseñados para promover el pensamiento crítico, la creatividad y los valores humanos.
      </motion.p>
    </section>
  );
};

export default About;
