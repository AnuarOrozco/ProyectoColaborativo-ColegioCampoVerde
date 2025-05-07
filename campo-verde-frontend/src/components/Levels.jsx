import { motion } from "framer-motion";

const levels = [
  { name: "Preescolar", image: "/images/levels/preescolar.jpg" },
  { name: "Primaria", image: "/images/levels/primaria.jpg" },
  { name: "Secundaria", image: "/images/levels/secundaria.jpg" },
  { name: "Preparatoria", image: "/images/levels/preparatoria.jpg" },
];

const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const Levels = () => {
  return (
    <section id="niveles" className="py-20 px-6 bg-white text-center">
      <motion.h2
        className="text-3xl md:text-4xl font-bold text-green-700 mb-10"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true, amount: 0.5 }}
      >
        Niveles Educativos
      </motion.h2>

      <motion.div
        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 max-w-6xl mx-auto"
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.3 }}
      >
        {levels.map((level) => (
          <motion.div
            key={level.name}
            className="rounded-xl overflow-hidden shadow-lg bg-white transform hover:scale-105 transition duration-300 ease-in-out"
            variants={item}
          >
            <img
              src={level.image}
              alt={level.name}
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h3 className="text-xl font-semibold text-gray-800">{level.name}</h3>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default Levels;
