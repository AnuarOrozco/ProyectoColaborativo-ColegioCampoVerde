import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export default function Primaria() {
  return (
    <div className="bg-gray-50">
      {/* Banner Hero */}
      <motion.div 
        className="relative h-64 md:h-96 w-full bg-gray-800 overflow-hidden"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <img 
          src="/images/primaria-banner.jpg" 
          alt="Primaria Campoverde" 
          className="w-full h-full object-cover opacity-70"
        />
        <div className="absolute inset-0 flex items-center justify-center">
          <motion.h1
            className="text-4xl md:text-6xl font-bold text-white drop-shadow-lg text-center px-4"
            initial={{ y: -20 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            Primaria
          </motion.h1>
        </div>
      </motion.div>

      {/* Sección Intro */}
      <motion.section 
        className="max-w-4xl mx-auto px-6 py-16"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <motion.blockquote 
          className="text-2xl md:text-3xl font-light text-verde mb-12 text-center italic"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          viewport={{ once: true }}
        >
          "En donde descubrirás todas tus potencialidades que harán de tu vida escolar una experiencia feliz y exitosa"
        </motion.blockquote>

        <div className="prose prose-lg max-w-none text-gray-700">
          <p className="mb-6">
            Los esfuerzos de nuestra Primaria están encaminados a formar alumnos autónomos, conscientes y capaces de dirigir su propio proceso y dispuestos a aprender constantemente, con un cuidado especial por los detalles y un acercamiento gozoso a la adquisición del conocimiento.
          </p>
          <p>
            Por ello, nuestro enfoque educativo está centrado en el desarrollo de las competencias de nuestros alumnos para que integren habilidades, conocimientos, actitudes y valores que usarán para resolver problemas, de forma individual y en equipo.
          </p>
        </div>
      </motion.section>

      {/* Galería de imágenes */}
      <div className="max-w-6xl mx-auto px-6 pb-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <motion.div
            className="rounded-xl overflow-hidden shadow-lg"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <img 
              src="/images/primaria-1.jpg" 
              alt="Aula de primaria" 
              className="w-full h-64 md:h-80 object-cover"
            />
          </motion.div>
          <motion.div
            className="rounded-xl overflow-hidden shadow-lg"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <img 
              src="/images/primaria-2.jpg" 
              alt="Estudiantes de primaria" 
              className="w-full h-64 md:h-80 object-cover"
            />
          </motion.div>
          <motion.div
            className="rounded-xl overflow-hidden shadow-lg"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <img 
              src="/images/primaria-3.jpg" 
              alt="Actividades en primaria" 
              className="w-full h-64 md:h-80 object-cover"
            />
          </motion.div>
          <motion.div
            className="rounded-xl overflow-hidden shadow-lg"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            viewport={{ once: true }}
          >
            <img 
              src="/images/primaria-4.jpg" 
              alt="Clases especiales" 
              className="w-full h-64 md:h-80 object-cover"
            />
          </motion.div>
        </div>
      </div>

      {/* Sección Trilingüismo */}
      <motion.section 
        className="bg-verde-claro/20 py-16"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <div className="max-w-4xl mx-auto px-6">
          <motion.h2
            className="text-3xl font-bold text-verde mb-8 text-center"
            initial={{ y: -20 }}
            whileInView={{ y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            Trilingüismo
          </motion.h2>
          
          <div className="prose prose-lg max-w-none text-gray-700">
            <p className="mb-6">
              En primaria hemos implementado un programa trilingüe, dedicado a desarrollar en nuestros alumnos las cuatro habilidades que les permitan comunicarse adecuadamente en los idiomas inglés y francés: escuchar, leer, hablar y escribir, con certificaciones internacionales que lo avalan.
            </p>
          </div>
        </div>
      </motion.section>

      {/* Sección de aspectos importantes */}
      <section className="max-w-6xl mx-auto px-6 py-16">
        <h2 className="text-3xl font-bold text-verde mb-8 text-center">
          Cuatro aspectos que cuidamos con esmero en Primaria
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            'La formación de hábitos para el trabajo escolar',
            'La convivencia pacífica',
            'El cuidado del entorno',
            'El desarrollo personal y social'
          ].map((item, index) => (
            <motion.div
              key={index}
              className="bg-white p-6 rounded-xl shadow-md"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <h3 className="font-semibold text-gray-800 flex items-center">
                <svg className="w-5 h-5 text-verde mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                {item}
              </h3>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Sección Clases Especiales */}
      <section className="max-w-6xl mx-auto px-6 py-16">
        <h2 className="text-3xl font-bold text-verde mb-8 text-center">Clases especiales</h2>
        <p className="text-lg text-gray-700 mb-12 text-center max-w-4xl mx-auto">
          Estas son las clases especiales que se imparten en Primaria:
        </p>
        
        <div className="flex justify-center">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 max-w-5xl">
            {[
              'Robótica Lego',
              'Tecnologías de la Información',
              'Valores',
              'Educación Física',
              'Artes Plásticas',
              'Laboratorio de Ciencias Naturales',
              'Música',
              'Teatro'
            ].map((item, index) => (
              <motion.div
                key={index}
                className="bg-white p-6 rounded-xl shadow-md text-center hover:shadow-lg transition-shadow"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="bg-verde/10 w-16 h-16 mx-auto rounded-full flex items-center justify-center mb-4">
                  <span className="text-verde text-2xl">{index + 1}</span>
                </div>
                <h3 className="font-semibold text-gray-800">{item}</h3>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}