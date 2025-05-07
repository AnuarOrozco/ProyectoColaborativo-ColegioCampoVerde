import { motion } from "framer-motion";

const awards = [
  { 
    image: "/images/awards/1.png", 
    alt: "Premio Excelencia Educativa 2020" 
  },
  { 
    image: "/images/awards/2.png", 
    alt: "Reconocimiento Internacional de Innovación" 
  },
  { 
    image: "/images/awards/3.png", 
    alt: "Sello de Calidad Académica" 
  },
  { 
    image: "/images/awards/4.png", 
    alt: "Premio Sustentabilidad Escolar" 
  }
];

const Awards = () => {
  return (
    <section id="premios" className="py-24 px-6 bg-white text-center">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          className="text-3xl md:text-4xl font-bold text-verde mb-6"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, amount: 0.5 }}
        >
          Premios y Reconocimientos
        </motion.h2>
        
        <motion.p
          className="max-w-3xl mx-auto text-gray-600 text-lg mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true, amount: 0.5 }}
        >
          A lo largo de los años, hemos sido reconocidos por instituciones nacionales e internacionales por nuestra excelencia académica, innovación educativa y compromiso social.
        </motion.p>

        <motion.div 
          className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16 items-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: {
                staggerChildren: 0.2,
                delayChildren: 0.4
              }
            }
          }}
        >
          {awards.map((award, index) => (
            <motion.div
              key={index}
              className="p-6 hover:bg-gray-50 rounded-xl transition-colors duration-300"
              variants={{
                hidden: { opacity: 0, scale: 0.9 },
                visible: { 
                  opacity: 1, 
                  scale: 1,
                  transition: {
                    duration: 0.6,
                    ease: [0.16, 1, 0.3, 1]
                  }
                }
              }}
              whileHover={{
                y: -8,
                transition: { duration: 0.3 }
              }}
            >
              <img 
                src={award.image} 
                alt={award.alt} 
                className="mx-auto h-24 w-auto object-contain"
                title={award.alt}
              />
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          viewport={{ once: true }}
        >
          <a 
            href="/premios" 
            className="inline-flex items-center px-6 py-3 border border-verde text-verde rounded-full hover:bg-verde hover:text-white transition-colors duration-300"
          >
            Saber más
            <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Awards;