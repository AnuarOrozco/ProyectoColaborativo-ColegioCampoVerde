import React, { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const menu = {
  "Conócenos": [
    { name: "Nosotros", path: "/nosotros" },
    { name: "Historia", path: "/historia" },
    { name: "Premios", path: "/premios" },
    { name: "Símbolos", path: "/simbolos" },
    { name: "Valores", path: "/valores" }
  ],
  "Campus": [
    { name: "Colima", path: "/campus/colima" },
    { name: "Tecomán", path: "/campus/tecoman" },
    { name: "Manzanillo", path: "/campus/manzanillo" },
    { name: "Vallarta", path: "/campus/vallarta" }
  ],
  "Academia": [
    { name: "Preescolar", path: "/niveles/preescolar" },
    { name: "Primaria", path: "/niveles/primaria" },
    { name: "Secundaria", path: "/niveles/secundaria" },
    { name: "Preparatoria", path: "/niveles/preparatoria" }
  ],
  "Contacto": [
    { name: "Informes", path: "/contacto/informes" },
    { name: "Contáctanos", path: "/contacto" }
  ]
};

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
    }, 300);
    setTimeoutId(id);
  };

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">
        <Link to="/" className="flex items-center">
          <img 
            src="/images/logoCV.png" 
            alt="Colegio Campo Verde" 
            className="h-10"
          />
        </Link>
        
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
                      key={subItem.name}
                      whileHover={{ x: 5 }}
                      transition={{ type: "spring", stiffness: 300 }}
                    >
                      <Link
                        to={subItem.path}
                        className="block py-1 hover:text-verde transition-colors duration-200"
                      >
                        {subItem.name}
                      </Link>
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