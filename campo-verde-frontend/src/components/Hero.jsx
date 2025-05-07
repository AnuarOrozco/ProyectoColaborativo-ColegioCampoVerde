
const Hero = () => {
    return (
      <section id="inicio" className="relative h-[90vh] bg-cover bg-center" style={{ backgroundImage: "url('/hero.jpg')" }}>
        <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
          <h1 className="text-white text-4xl md:text-6xl font-bold text-center px-4">
            Bienvenido al Colegio Campo Verde
          </h1>
        </div>
      </section>
    );
  };
  
  export default Hero;
  