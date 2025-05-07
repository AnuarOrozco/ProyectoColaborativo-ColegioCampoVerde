import { motion } from "framer-motion";
import { Link } from "react-router-dom";

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
          <Link to="/campus/colima" className="text-verde hover:text-verde-claro font-medium transition-colors">Colima</Link>,{" "}
          <Link to="/campus/tecoman" className="text-verde hover:text-verde-claro font-medium transition-colors">Tecomán</Link>,{" "}
          <Link to="/campus/manzanillo" className="text-verde hover:text-verde-claro font-medium transition-colors">Manzanillo</Link>{" "}
          y{" "}
          <Link to="/campus/vallarta" className="text-verde hover:text-verde-claro font-medium transition-colors">Vallarta</Link>, con el mismo sello de excelencia que ha distinguido a nuestra institución a lo largo de los años.
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.4 }}
        viewport={{ once: true }}
      >
        <Link
          to="/nosotros"
          className="inline-block px-6 py-3 bg-verde text-white font-medium rounded-lg hover:bg-verde-claro transition-colors shadow-md hover:shadow-lg"
        >
          Conocer Más
        </Link>
      </motion.div>
    </section>
  );
};

export default About;