import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export default function Preparatoria() {
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
          src="/images/preparatoria-banner.jpg" 
          alt="Preparatoria Campoverde" 
          className="w-full h-full object-cover opacity-70"
        />
        <div className="absolute inset-0 flex items-center justify-center">
          <motion.h1
            className="text-4xl md:text-6xl font-bold text-white drop-shadow-lg text-center px-4"
            initial={{ y: -20 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            Preparatoria
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
          "En donde fortalecerás tus alas para volar hacia un horizonte de éxito profesional y personal"
        </motion.blockquote>

        <div className="prose prose-lg max-w-none text-gray-700">
          <p className="mb-6">
            En Campoverde concebimos la preparatoria como una de las mejores etapas en la vida de una persona, y nos esforzamos para que sea así en todos los aspectos. Nuestros jóvenes no necesitan ser personas excepcionales, porque en nuestra preparatoria los impulsamos a actuar de manera auténtica, con lo que logran forjar su propia personalidad y crear lazos de amistad que perduran para toda la vida.
          </p>
          <p>
            La libertad junto con la responsabilidad son consideradas la manera más equilibrada de integrar una personalidad y esto se refleja en nuestros reglamentos y niveles de exigencia, tanto en el ámbito académico como en los aspectos personales y morales de nuestros alumnos.
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
              src="/images/preparatoria-1.jpg" 
              alt="Aula de preparatoria" 
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
              src="/images/preparatoria-2.jpg" 
              alt="Estudiantes de preparatoria" 
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
              src="/images/preparatoria-3.jpg" 
              alt="Actividades en preparatoria" 
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
              src="/images/preparatoria-4.jpg" 
              alt="Clases especiales" 
              className="w-full h-64 md:h-80 object-cover"
            />
          </motion.div>
        </div>
      </div>

      {/* Sección Nivel Académico */}
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
            Nivel Académico
          </motion.h2>
          
          <div className="prose prose-lg max-w-none text-gray-700">
            <p>
              Nuestro elevado nivel académico permite que los jóvenes se desarrollen en un ambiente de trabajo divertido y dentro de un contexto que toma en cuenta sus intereses y apoya sus iniciativas, con lo que logramos egresar jóvenes orgullosos de sí mismos y de sus logros.
            </p>
          </div>
        </div>
      </motion.section>

      {/* Sección Cuatrilingüismo */}
      <section className="max-w-6xl mx-auto px-6 py-16">
        <h2 className="text-3xl font-bold text-verde mb-8 text-center">Cuatrilingüismo</h2>
        
        <div className="prose prose-lg max-w-4xl mx-auto text-gray-700 mb-12">
          <p className="mb-6">
            Campoverde proporciona las habilidades de comunicación requeridas para el dominio de los idiomas inglés, francés y alemán: escuchar, leer, hablar y escribir, con la intención de que sus estudiantes obtengan certificaciones internacionales que avalen su dominio.
          </p>
          <p>
            Varias materias se imparten totalmente en inglés. Adicionalmente, nuestros alumnos de tercero de Preparatoria tienen la opción de estudiar simultáneamente para certificarse como maestros de inglés, en un programa que cuenta con reconocimiento internacional.
          </p>
        </div>
      </section>

      {/* Sección Formación Integral */}
      <section className="bg-gray-100 py-16">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-verde mb-8 text-center">Formación integral</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="prose prose-lg text-gray-700">
              <p>
                Además del alto nivel de nuestro plan de estudios y del especial énfasis en la enseñanza de idiomas, Campoverde le otorga una gran importancia al área tecnológica, en donde se imparten Robótica y Tecnologías de la Información, y a la formación humanista, con un programa de Valores muy efectivo y reconocido.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-md">
              <h3 className="text-xl font-bold text-verde mb-4">Áreas de especialidad</h3>
              <ul className="space-y-3">
                {[
                  'Ciencias de la Salud',
                  'Ingeniería y Tecnología',
                  'Educación y Humanidades',
                  'Económico-Administrativo'
                ].map((item, index) => (
                  <li key={index} className="flex items-start">
                    <svg className="w-5 h-5 text-verde mr-2 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Sección Incorporación */}
      <section className="max-w-6xl mx-auto px-6 py-16">
        <div className="bg-white rounded-xl shadow-md p-8 md:p-12">
          <h2 className="text-3xl font-bold text-verde mb-6 text-center">Incorporación</h2>
          
          <div className="prose prose-lg max-w-4xl mx-auto text-gray-700">
            <p className="mb-6">
              Nuestras preparatorias están incorporadas a la Universidad de Colima, en el caso de Colima y Manzanillo, y a la Secretaría de Educación de Jalisco, en el caso de Vallarta. De esta manera, garantizamos a nuestros egresados que podrán continuar sus estudios en la institución de educación superior de su preferencia.
            </p>
            <p>
              Nuestro bachillerato es bivalente, ya que además de cubrir el programa de una preparatoria general, en los dos últimos semestres cada estudiante selecciona una de las 4 áreas de especialidad: Ciencias de la Salud, Ingeniería y Tecnología, Educación y Humanidades o Económico-Administrativo.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}