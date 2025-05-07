import { motion } from "framer-motion";

const Awards = () => {
  return (
    <section id="premios" className="py-20 px-6 bg-gray-50 text-center">
      <motion.h2
        className="text-3xl md:text-4xl font-bold text-green-700 mb-6"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true, amount: 0.5 }}
      >
        Premios y Reconocimientos
      </motion.h2>
      <motion.p
        className="max-w-3xl mx-auto text-gray-700 text-lg"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        viewport={{ once: true, amount: 0.5 }}
      >
        A lo largo de los años, hemos sido reconocidos por instituciones nacionales e internacionales por nuestra excelencia académica,
        innovación educativa y compromiso social.
      </motion.p>
    </section>
  );
};

export default Awards;
