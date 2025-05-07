import { motion } from "framer-motion";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const sectionItems = [
  {
    title: "Historia",
    description: "La historia de Campoverde es la memoria de una visión apasionada y comprometida con la educación y la formación de niños y jóvenes.",
    image: "/images/historia.jpg",
    link: "/historia"
  },
  {
    title: "Documentos básicos",
    description: "Conoce los documentos que sustentan nuestra filosofía institucional.",
    image: "/images/documentos.jpg",
    link: "/documentos"
  },
  {
    title: "Premios y reconocimientos",
    description: "Nuestra institución tiene en su haber un gran número de galardones que dan fe de nuestra calidad académica.",
    image: "/images/premios.jpg",
    link: "/premios"
  },
  {
    title: "Símbolos y tradiciones",
    description: "Nuestros símbolos y tradiciones son una parte importante de la experiencia Campoverde. ¡Conócelos!",
    image: "/images/simbolos.jpg",
    link: "/simbolos"
  }
];

export default function Nosotros() {
  return (
    <div className="font-sans bg-gray-50">
      <Navbar />
      
      {/* Banner con animación */}
      <motion.div 
        className="relative h-64 md:h-96 w-full bg-gray-800 overflow-hidden"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <img 
          src="/images/nosotros-banner.jpg" 
          alt="Colegio Campoverde" 
          className="w-full h-full object-cover opacity-70"
        />
        <div className="absolute inset-0 flex items-center justify-center">
          <motion.h1
            className="text-4xl md:text-6xl font-bold text-white drop-shadow-lg"
            initial={{ y: -20 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            Nosotros
          </motion.h1>
        </div>
      </motion.div>

      {/* Texto introductorio con animación */}
      <motion.div 
        className="max-w-4xl mx-auto px-6 py-12 text-center"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4, duration: 0.6 }}
      >
        <p className="text-lg text-gray-700">
          El Colegio Campoverde fue fundado en 1978, con el fin de ofrecer servicios educativos 
          de excelencia a la niñez y juventud de Colima. Hemos sabido crecer a lo largo 
          de los años conservando siempre nuestra filosofía original.
        </p>
      </motion.div>

      {/* Menú de secciones con animaciones escalonadas */}
      <div className="max-w-6xl mx-auto px-6 pb-16">
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
          initial="hidden"
          animate="visible"
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: {
                staggerChildren: 0.15,
                delayChildren: 0.6
              }
            }
          }}
        >
          {sectionItems.map((item, index) => (
            <motion.a
              key={index}
              href={item.link}
              className="group block rounded-xl overflow-hidden bg-white shadow-lg hover:shadow-xl transition-shadow duration-300 cursor-pointer"
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { 
                  opacity: 1, 
                  y: 0,
                  transition: { duration: 0.5 }
                }
              }}
              whileHover={{
                y: -5,
                transition: { duration: 0.2 }
              }}
            >
              <div className="h-48 overflow-hidden">
                <motion.img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.4 }}
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-2">{item.title}</h3>
                <p className="text-gray-600">{item.description}</p>
              </div>
            </motion.a>
          ))}
        </motion.div>
      </div>
      
      <Footer />
    </div>
  );
}