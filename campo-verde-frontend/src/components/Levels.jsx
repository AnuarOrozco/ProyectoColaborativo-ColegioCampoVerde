const levels = [
    { name: "Preescolar", image: "/levels/preescolar.jpg" },
    { name: "Primaria", image: "/levels/primaria.jpg" },
    { name: "Secundaria", image: "/levels/secundaria.jpg" },
    { name: "Preparatoria", image: "/levels/preparatoria.jpg" },
  ];
  
  const Levels = () => {
    return (
      <section id="niveles" className="py-20 px-6 bg-white text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-green-700 mb-10">Niveles Educativos</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {levels.map((level) => (
            <div key={level.name} className="rounded-xl overflow-hidden shadow-lg">
              <img src={level.image} alt={level.name} className="w-full h-48 object-cover" />
              <div className="p-4">
                <h3 className="text-xl font-semibold text-gray-800">{level.name}</h3>
              </div>
            </div>
          ))}
        </div>
      </section>
    );
  };
  
  export default Levels;
  