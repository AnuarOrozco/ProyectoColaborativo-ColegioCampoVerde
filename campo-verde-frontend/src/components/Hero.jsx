import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section
      id="inicio"
      className="relative h-[90vh] bg-cover bg-center"
      style={{ backgroundImage: "url('/images/hero1.jpg')" }}
    >
      <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
        <motion.h1
          className="text-white text-4xl md:text-6xl font-bold text-center px-4"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          Bienvenido al Colegio Campo Verde
        </motion.h1>
      </div>
    </section>
  );
};

export default Hero;
