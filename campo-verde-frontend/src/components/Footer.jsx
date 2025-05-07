import { motion } from "framer-motion";

const Footer = () => {
  const campuses = [
    { name: "Colima", phone: "312 316 0700" },
    { name: "Tecomán", phone: "313 324 1122" },
    { name: "Manzanillo", phone: "314 334 01 00" },
    { name: "Vallarta", phone: "322 290 21 00" }
  ];

  const links = [
    { text: "Bolsa de trabajo", url: "/bolsa-trabajo" },
    { text: "Aviso de privacidad", url: "/privacidad" },
    { text: "Contacto", url: "/contacto" }
  ];

  return (
    <motion.footer
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      className="bg-verde text-white py-8"
    >
      <div className="max-w-6xl mx-auto px-4">
        {/* Primera fila: Logo y campus */}
        <div className="flex flex-col md:flex-row justify-between items-center md:items-start mb-6">
          <div className="mb-4 md:mb-0">
            <img 
              src="/images/logo-white.svg" 
              alt="Colegio Campoverde" 
              className="h-12"
            />
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center md:text-left">
            {campuses.map((campus, index) => (
              <div key={index}>
                <h3 className="font-medium mb-1">
                  <a href={`/campus/${campus.name.toLowerCase()}`} className="hover:text-verde-claro transition-colors">
                    {campus.name}
                  </a>
                </h3>
                <p className="text-verde-claro text-sm">
                  <a href={`tel:${campus.phone.replace(/ /g, '')}`} className="hover:text-white">
                    {campus.phone}
                  </a>
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Segunda fila: Enlaces y copyright */}
        <div className="flex flex-col md:flex-row justify-between items-center pt-4 border-t border-verde-claro/20">
          <div className="flex gap-4 mb-3 md:mb-0">
            {links.map((link, index) => (
              <a
                key={index}
                href={link.url}
                className="text-sm hover:text-verde-claro transition-colors"
              >
                {link.text}
              </a>
            ))}
          </div>

          <p className="text-verde-claro text-xs md:text-sm">
            © {new Date().getFullYear()} Colegio Campoverde - Todos los derechos reservados
          </p>
        </div>
      </div>
    </motion.footer>
  );
};

export default Footer;