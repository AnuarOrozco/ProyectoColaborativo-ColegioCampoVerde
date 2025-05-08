import { motion } from "framer-motion";

const campuses = [
  {
    name: "Colima",
    image: "/images/campus/colima.jpg",
    link: "/campus/colima",
    founding: "Sede fundadora (1978)"
  },
  {
    name: "Tecomán",
    image: "/images/campus/tecoman.jpg",
    link: "/campus/tecoman",
    founding: "Desde 1998"
  },
  {
    name: "Manzanillo",
    image: "/images/campus/manzanillo.jpg",
    link: "/campus/manzanillo",
    founding: "Desde 2002"
  },
  {
    name: "Vallarta",
    image: "/images/campus/vallarta.jpg",
    link: "/campus/vallarta",
    founding: "Desde 2012"
  }
];

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.3
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, scale: 0.95 },
  show: { 
    opacity: 1, 
    scale: 1,
    transition: { 
      duration: 0.6,
      ease: [0.16, 1, 0.3, 1]
    }
  }
};

const hoverVariants = {
  hover: {
    scale: 1.03,
    transition: {
      duration: 0.4,
      ease: "easeOut"
    }
  }
};

const Campuses = () => {
  return (
    <section id="campus" className="py-24 px-6 bg-white text-center">
      <motion.h2
        className="text-3xl md:text-4xl font-bold text-verde mb-16"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true, amount: 0.5 }}
      >
        Nuestros Campus
      </motion.h2>

      <motion.div
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-1 max-w-6xl mx-auto overflow-hidden rounded-2xl"
        variants={containerVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "0px 0px -100px 0px" }}
      >
        {campuses.map((campus) => (
          <motion.a
            key={campus.name}
            href={campus.link}
            className="relative block h-64 w-full overflow-hidden group"
            variants={itemVariants}
            whileHover="hover"
          >
            <motion.img 
              src={campus.image}
              alt={`Campus ${campus.name}`}
              className="absolute inset-0 w-full h-full object-cover"
              variants={hoverVariants}
            />
            
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent flex flex-col justify-end p-6 text-left">
              <motion.h3 
                className="text-2xl font-bold text-white mb-1"
                initial={{ x: -10 }}
                whileHover={{ x: 0 }}
              >
                {campus.name}
              </motion.h3>
              <motion.p 
                className="text-verde-claro text-sm font-medium"
                initial={{ x: -10 }}
                whileHover={{ x: 0 }}
                transition={{ delay: 0.1 }}
              >
                {campus.founding}
              </motion.p>
            </div>
            
            <div className="absolute inset-0 border-2 border-transparent group-hover:border-verde transition-all duration-300 pointer-events-none" />
          </motion.a>
        ))}
      </motion.div>

      <motion.div
        className="mt-16"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.8 }}
        viewport={{ once: true }}
      >
        <a 
          href="/todos-los-campus" 
          className="inline-flex items-center px-6 py-3 border border-verde text-verde rounded-full hover:bg-verde hover:text-white transition-colors duration-300"
        >
          Ver todos los campus
          <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
          </svg>
        </a>
      </motion.div>
    </section>
  );
};

export default Campuses;