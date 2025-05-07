import { motion } from "framer-motion";

const campuses = ["Colima", "Tecomán", "Manzanillo", "Vallarta"];

const containerVariants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 },
};

const Campuses = () => {
  return (
    <section id="campus" className="py-20 px-6 bg-gray-100 text-center">
      <motion.h2
        className="text-3xl md:text-4xl font-bold text-green-700 mb-8"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true, amount: 0.5 }}
      >
        Nuestros Campus
      </motion.h2>

      <motion.div
        className="flex flex-wrap justify-center gap-6"
        variants={containerVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.3 }}
      >
        {campuses.map((campus) => (
          <motion.div
            key={campus}
            className="bg-white px-6 py-4 rounded-lg shadow-md text-gray-800 text-lg font-medium"
            variants={itemVariants}
            transition={{ duration: 0.5 }}
          >
            {campus}
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default Campuses;
