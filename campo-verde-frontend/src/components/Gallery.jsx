import { motion } from "framer-motion";

const images = [
  "images/gallery/1.jpg", "images/gallery/2.jpg", "images/gallery/3.jpg", "images/gallery/4.jpg",
  "images/gallery/5.jpg", "images/gallery/6.jpg", "images/gallery/7.jpg", "images/gallery/8.jpg",
  "images/gallery/9.jpg", "images/gallery/10.jpg", "images/gallery/11.jpg", "images/gallery/12.jpg"
];

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, scale: 0.9, y: 20 },
  show: { 
    opacity: 1, 
    scale: 1, 
    y: 0,
    transition: { 
      duration: 0.6,
      ease: [0.16, 1, 0.3, 1]
    }
  },
  hover: {
    scale: 1.05,
    boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.2)",
    transition: {
      duration: 0.3,
      ease: "easeOut"
    }
  }
};

const Gallery = () => {
  return (
    <section id="galeria" className="py-24 px-6 bg-white">
      <motion.h2
        className="text-3xl md:text-4xl font-bold text-verde mb-12 text-center"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true, amount: 0.5 }}
      >
        Galería de Eventos
      </motion.h2>

      <motion.div
        className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 max-w-6xl mx-auto"
        variants={containerVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "0px 0px -100px 0px" }}
      >
        {images.map((src, index) => (
          <motion.div
            key={index}
            className="relative overflow-hidden rounded-xl shadow-md bg-gray-100"
            variants={itemVariants}
            whileHover="hover"
          >
            <img
              src={src}
              alt={`Evento ${index + 1}`}
              className="w-full h-48 object-cover"
            />
            <div className="absolute inset-0 bg-black/10 opacity-0 hover:opacity-100 transition-opacity duration-300" />
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default Gallery;