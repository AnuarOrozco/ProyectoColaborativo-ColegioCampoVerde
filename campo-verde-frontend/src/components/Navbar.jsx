import React, { useState } from "react";
import { motion } from "framer-motion";

const menu = {
  "Conócenos": ["Nosotros", "Historia", "Premios", "Símbolos", "Valores"],
  "Campus": ["Colima", "Tecomán", "Manzanillo", "Vallarta"],
  "Academia": ["Preescolar", "Primaria", "Secundaria", "Preparatoria"],
  "Familia CV": ["Alumnos", "Docentes", "Padres de familia"],
  "Servicios": ["Robótica", "Extraescolares", "Certificaciones"],
  "Noticias": ["Periódicos", "CVTips"],
  "Eventos": ["Eventos destacados"],
  "Contacto": ["Informes", "Contáctanos"]
};

const normalizeId = (text) =>
  text.toLowerCase().replace(/\s+/g, "-").normalize("NFD").replace(/[\u0300-\u036f]/g, "");

const Navbar = () => {
  const [active, setActive] = useState(null);
  const [timeoutId, setTimeoutId] = useState(null);

  const handleMouseEnter = (item) => {
    clearTimeout(timeoutId);
    setActive(item);
  };

  const handleMouseLeave = () => {
    const id = setTimeout(() => {
      setActive(null);
    }, 300); // Retraso de 300ms antes de ocultar
    setTimeoutId(id);
  };

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">
        <div className="flex items-center">
          <img 
            src="/images/logoCV.png" 
            alt="Colegio Campo Verde" 
            className="h-10" // Ajusta la altura según necesites
          />
        </div>
        <ul className="flex space-x-6 text-gray-700">
          {Object.keys(menu).map((item) => (
            <li
              key={item}
              className="relative group"
              onMouseEnter={() => handleMouseEnter(item)}
              onMouseLeave={handleMouseLeave}
            >
              <button className="hover:text-verde font-medium py-2 px-1 transition-colors duration-200">
                {item}
              </button>
              
              {active === item && (
                <motion.ul 
                  className="absolute top-full left-0 bg-white shadow-lg rounded-md py-2 px-4 space-y-2 min-w-[200px] z-50"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 10 }}
                  transition={{ duration: 0.2 }}
                  onMouseEnter={() => handleMouseEnter(item)}
                  onMouseLeave={handleMouseLeave}
                >
                  {menu[item].map((subItem) => (
                    <motion.li 
                      key={subItem}
                      whileHover={{ x: 5 }}
                      transition={{ type: "spring", stiffness: 300 }}
                    >
                      <a
                        href={`#${normalizeId(subItem)}`}
                        className="block py-1 hover:text-verde transition-colors duration-200"
                      >
                        {subItem}
                      </a>
                    </motion.li>
                  ))}
                </motion.ul>
              )}
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;