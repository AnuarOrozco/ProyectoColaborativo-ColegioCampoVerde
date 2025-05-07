import { motion } from "framer-motion";

const About = () => {
  return (
    <section id="acerca" className="py-20 px-6 bg-gray-50 text-center">
      <motion.h2
        className="text-3xl md:text-4xl font-bold text-verde mb-6"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true, amount: 0.5 }}
      >
        Acerca del Colegio
      </motion.h2>

      <motion.div
        className="max-w-3xl mx-auto text-gray-700 text-lg mb-8"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        viewport={{ once: true, amount: 0.5 }}
      >
        <p className="mb-4">
          El Colegio Campoverde fue fundado en 1978 en la ciudad de Colima. A lo largo de nuestra historia, nos hemos esforzado por cumplir a cabalidad nuestra misión: <strong>Formar hombres y mujeres felices, exitosos y de bien.</strong>
        </p>
        
        <p>
          Actualmente, nuestra institución cuenta con 4 Campus:{" "}
          <a href="#colima" className="text-verde hover:text-verde-claro font-medium transition-colors">Colima</a>,{" "}
          <a href="#tecoman" className="text-verde hover:text-verde-claro font-medium transition-colors">Tecomán</a>,{" "}
          <a href="#manzanillo" className="text-verde hover:text-verde-claro font-medium transition-colors">Manzanillo</a>{" "}
          y{" "}
          <a href="#vallarta" className="text-verde hover:text-verde-claro font-medium transition-colors">Vallarta</a>, con el mismo sello de excelencia que ha distinguido a nuestra institución a lo largo de los años.
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.4 }}
        viewport={{ once: true }}
      >
        <a
          href="#conocer-mas"
          className="inline-block px-6 py-3 bg-verde text-white font-medium rounded-lg hover:bg-verde-claro transition-colors shadow-md hover:shadow-lg"
        >
          Conocer Más
        </a>
      </motion.div>
    </section>
  );
};

export default About;