import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

const slides = [
  {
    image: "/images/hero1.jpg",
    title: "Bienvenido al Colegio Campo Verde",
    subtitle: "Educación de excelencia desde 1978"
  },
  {
    image: "/images/hero2.jpg",
    title: "Formando líderes del mañana",
    subtitle: "Programas académicos de vanguardia"
  },
  {
    image: "/images/hero3.jpg",
    title: "Espacios para crecer",
    subtitle: "Infraestructura diseñada para el aprendizaje"
  }
];

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 10000); // Cambia cada 5 segundos

    return () => clearInterval(interval);
  }, []);

  return (
    <section id="inicio" className="relative h-[90vh] overflow-hidden">
      <AnimatePresence mode="wait">
        <motion.div
          key={currentSlide}
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${slides[currentSlide].image})` }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.5 }}
        >
          <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
            <div className="text-center px-6 max-w-4xl mx-auto">
              <motion.h1
                className="text-white text-4xl md:text-6xl lg:text-7xl font-bold mb-4 drop-shadow-lg"
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
              >
                {slides[currentSlide].title}
              </motion.h1>
              
              <motion.p
                className="text-white text-xl md:text-2xl mb-8 drop-shadow-md"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.5 }}
              >
                {slides[currentSlide].subtitle}
              </motion.p>
              
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.8 }}
              >
                <a 
                  href="#conocenos" 
                  className="inline-block bg-verde hover:bg-verde-claro text-white font-medium px-8 py-3 rounded-lg text-lg transition-colors duration-300 shadow-lg"
                >
                  Conoce más
                </a>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </AnimatePresence>

      {/* Indicadores de posición (puntos) */}
      <div className="absolute bottom-8 left-0 right-0 flex justify-center gap-2">
        {slides.map((_, index) => (
          <button 
            key={index}
            className={`w-3 h-3 rounded-full transition-all ${currentSlide === index ? 'bg-white w-6' : 'bg-white/50'}`}
            aria-label={`Ir a slide ${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
};

export default Hero;