import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const levels = [
  { 
    name: "Preescolar", 
    image: "/images/levels/preescolar.jpg",
    link: "/niveles/preescolar"  // Ruta actualizada
  },
  { 
    name: "Primaria", 
    image: "/images/levels/primaria.jpg",
    link: "/niveles/primaria"  // Ruta actualizada
  },
  { 
    name: "Secundaria", 
    image: "/images/levels/secundaria.jpg",
    link: "/niveles/secundaria"  // Ruta actualizada
  },
  { 
    name: "Preparatoria", 
    image: "/images/levels/preparatoria.jpg",
    link: "/niveles/preparatoria"  // Ruta actualizada
  },
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
        className="text-3xl md:text-4xl font-bold text-verde mb-12"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true, amount: 0.5 }}
      >
        Niveles Educativos
      </motion.h2>

      <motion.div
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto"
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.3 }}
      >
        {levels.map((level) => (
          <motion.div
            key={level.name}
            className="rounded-xl overflow-hidden shadow-lg bg-white transform hover:scale-[1.03] transition duration-300 ease-in-out cursor-pointer hover:shadow-xl"
            variants={item}
            whileHover={{ y: -5 }}
          >
            <Link to={level.link} className="block">
              <div className="h-64 w-full overflow-hidden">
                <img
                  src={level.image}
                  alt={level.name}
                  className="w-full h-full object-cover hover:scale-105 transition duration-500"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-800">{level.name}</h3>
              </div>
            </Link>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default Levels;