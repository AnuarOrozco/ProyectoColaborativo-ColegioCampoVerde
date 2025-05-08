import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export default function Secundaria() {
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
          src="/images/secundaria-banner.jpg" 
          alt="Secundaria Campoverde" 
          className="w-full h-full object-cover opacity-70"
        />
        <div className="absolute inset-0 flex items-center justify-center">
          <motion.h1
            className="text-4xl md:text-6xl font-bold text-white drop-shadow-lg text-center px-4"
            initial={{ y: -20 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            Secundaria
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
          "En donde aprenderás a descubrirte a ti mismo, y a emprender con éxito el camino hacia la madurez"
        </motion.blockquote>

        <div className="prose prose-lg max-w-none text-gray-700">
          <p className="mb-6">
            En la Sección Secundaria de Campoverde consideramos que el aprendizaje debe resultar significativo, divertido y útil para nuestros alumnos/as, por eso nuestro enfoque educativo está centrado en el desarrollo de sus competencias, para que integren habilidades, conocimientos, actitudes y valores que usarán para resolver problemas.
          </p>
          <p className="mb-6">
            Para lograrlo, se tienen diseñadas diferentes actividades que propician además el fortalecimiento de la autodisciplina, el trabajo en equipo, la seguridad personal, etc. Los objetivos que integran el Perfil de Egreso Campoverde están perfectamente definidos, y los alumnos, maestros y padres de familia trabajan de manera intencionada, planeada y sistemática, para que se cumplan cada uno de ellos.
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
              src="/images/secundaria-1.jpg" 
              alt="Aula de secundaria" 
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
              src="/images/secundaria-2.jpg" 
              alt="Estudiantes de secundaria" 
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
              src="/images/secundaria-3.jpg" 
              alt="Actividades en secundaria" 
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
              src="/images/secundaria-4.jpg" 
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
              Campoverde proporciona al alumnado de Secundaria las habilidades de comunicación requeridas para el dominio de los idiomas inglés y francés: escuchar, leer, hablar y escribir, hasta lograr la certificación internacional que avala ese dominio.
            </p>
          </div>
        </div>
      </motion.section>

      {/* Sección Currícula Interna */}
      <section className="max-w-6xl mx-auto px-6 py-16">
        <h2 className="text-3xl font-bold text-verde mb-8 text-center">Currícula interna</h2>
        <p className="text-lg text-gray-700 mb-12 text-center max-w-4xl mx-auto">
          Para garantizar una formación integral de nuestros alumnos/as, y lograr que el Perfil de Egreso Campoverde se haga realidad, la currícula oficial de la SEP es complementada y enriquecida con otros programas:
        </p>
        
        <div className="flex justify-center">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl">
            {[
              'Robótica',
              'Valores',
              'Tecnologías de la Información',
              'Materias académicas en inglés'
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

        <motion.div 
          className="mt-12 bg-white p-6 rounded-xl shadow-md"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          viewport={{ once: true }}
        >
          <p className="text-center text-gray-700 italic">
            "Diversas materias académicas se imparten en inglés, para fortalecer el dominio de ese idioma."
          </p>
        </motion.div>
      </section>
    </div>
  );
}