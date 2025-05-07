import React, { useState } from "react";

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

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">
        <div className="text-green-700 font-bold text-xl">Campo Verde</div>
        <ul className="flex space-x-6 text-gray-700">
          {Object.keys(menu).map((item) => (
            <li
              key={item}
              className="relative group"
              onMouseEnter={() => setActive(item)}
              onMouseLeave={() => setActive(null)}
            >
              <button className="hover:text-green-700 font-medium">{item}</button>
              {active === item && (
                <ul className="absolute top-8 left-0 bg-white shadow-md rounded-md py-2 px-4 space-y-1 min-w-[180px] z-50">
                  {menu[item].map((subItem) => (
                    <li key={subItem}>
                      <a
                        href={`#${normalizeId(subItem)}`}
                        className="block hover:text-green-600 transition-colors duration-200"
                      >
                        {subItem}
                      </a>
                    </li>
                  ))}
                </ul>
              )}
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
