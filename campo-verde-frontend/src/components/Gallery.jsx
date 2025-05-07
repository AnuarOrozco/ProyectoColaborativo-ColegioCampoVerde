import { motion } from "framer-motion";

const images = ["images/gallery/1.jpg", "images/gallery/2.jpg", "images/gallery/3.jpg", "images/gallery/4.jpg"];

const containerVariants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, scale: 0.95 },
  show: { opacity: 1, scale: 1 },
};

const Gallery = () => {
  return (
    <section id="galeria" className="py-20 px-6 bg-white text-center">
      <motion.h2
        className="text-3xl md:text-4xl font-bold text-green-700 mb-10"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true, amount: 0.5 }}
      >
        Galería de Eventos
      </motion.h2>

      <motion.div
        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 max-w-6xl mx-auto"
        variants={containerVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.3 }}
      >
        {images.map((src, index) => (
          <motion.img
            key={index}
            src={src}
            alt={`Evento ${index + 1}`}
            className="rounded-lg shadow-md object-cover h-48 w-full"
            variants={itemVariants}
            transition={{ duration: 0.5 }}
          />
        ))}
      </motion.div>
    </section>
  );
};

export default Gallery;
