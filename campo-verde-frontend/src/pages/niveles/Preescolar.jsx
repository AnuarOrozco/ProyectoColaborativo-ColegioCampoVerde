import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export default function Preescolar() {
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
          src="/images/preescolar-banner.jpg" 
          alt="Preescolar Campoverde" 
          className="w-full h-full object-cover opacity-70"
        />
        <div className="absolute inset-0 flex items-center justify-center">
          <motion.h1
            className="text-4xl md:text-6xl font-bold text-white drop-shadow-lg text-center px-4"
            initial={{ y: -20 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            Preescolar
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
          "En donde serás muy feliz y aprenderás con una gran dosis de amor, cuidado, atención y paciencia"
        </motion.blockquote>

        <div className="prose prose-lg max-w-none text-gray-700">
          <p className="mb-6">
            En Preescolar se construyen los cimientos de la personalidad, y es compromiso de la familia y de la escuela el trabajar conjuntamente para lograr que estos sean fuertes y sólidos. Con esta convicción, en Campoverde le otorgamos a esta sección la más alta prioridad, cuidando con esmero y profesionalismo todos los detalles, inspirados en una filosofía institucional centrada en las necesidades de nuestros alumnos, que nos ha permitido desarrollar un modelo muy diferente, especial y efectivo.
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
              src="/images/preescolar-1.jpg" 
              alt="Aula de preescolar" 
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
              src="/images/preescolar-2.jpg" 
              alt="Actividades en preescolar" 
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
              src="/images/preescolar-3.jpg" 
              alt="Juegos en preescolar" 
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
              src="/images/preescolar-4.jpg" 
              alt="Clases especiales" 
              className="w-full h-64 md:h-80 object-cover"
            />
          </motion.div>
        </div>
      </div>

      {/* Sección Bilingüismo */}
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
            Bilingüismo
          </motion.h2>
          
          <div className="prose prose-lg max-w-none text-gray-700">
            <p className="mb-6">
              Nuestros alumnos aprenden con el sistema de inmersión al inglés, que los lleva a desarrollar habilidades comunicativas y a apropiarse de ese idioma de una manera natural.
            </p>
            
            <ul className="space-y-4 mb-8">
              <li className="flex items-start">
                <span className="bg-verde text-white rounded-full w-6 h-6 flex items-center justify-center mr-3 mt-1 flex-shrink-0">1</span>
                <span>En Kínder I, la jornada diaria se trabaja totalmente en inglés (inmersión total).</span>
              </li>
              <li className="flex items-start">
                <span className="bg-verde text-white rounded-full w-6 h-6 flex items-center justify-center mr-3 mt-1 flex-shrink-0">2</span>
                <span>En Kínder II y III, el tiempo se divide un 50% en español y un 50% en inglés (bilingüismo).</span>
              </li>
            </ul>
          </div>
        </div>
      </motion.section>

{/* Sección Clases Especiales */}
<section className="max-w-6xl mx-auto px-6 py-16">
  <h2 className="text-3xl font-bold text-verde mb-8 text-center">Clases especiales</h2>
  <p className="text-lg text-gray-700 mb-12 text-center max-w-4xl mx-auto">
    Además de cuidar con esmero las áreas propias de este nivel, nuestros alumnos cursan las siguientes clases especiales que son impartidas por especialistas, y siempre acompañados de sus maestras titulares.
  </p>
  
  <div className="flex justify-center">
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 max-w-5xl">
      {['Psicomotricidad', 'Computación', 'Lego Workshop', 'Valores', 'Música'].map((item, index) => (
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

      {/* Sección Instalaciones */}
      <section className="bg-gray-100 py-16">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-verde mb-8 text-center">Instalaciones</h2>
          <p className="text-lg text-gray-700 mb-12 text-center max-w-4xl mx-auto">
            Preescolar tiene instalaciones exclusivas e independientes del resto del Colegio, y fueron diseñadas de conformidad a las necesidades de las diferentes edades de los preescolares.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              'Gimnasio de Psicomotricidad',
              'Salón de Usos Múltiples',
              'Taller Lego Workshop',
              'Aula de Computación',
              'Salón de Música y Artes',
              'Área de Juegos Infantiles'
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
        </div>
      </section>
    </div>
  );
}