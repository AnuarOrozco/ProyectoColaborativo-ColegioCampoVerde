const images = ["/gallery/1.jpg", "/gallery/2.jpg", "/gallery/3.jpg", "/gallery/4.jpg"];

const Gallery = () => {
  return (
    <section id="galeria" className="py-20 px-6 bg-white text-center">
      <h2 className="text-3xl md:text-4xl font-bold text-green-700 mb-10">Galería de Eventos</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 max-w-6xl mx-auto">
        {images.map((src, index) => (
          <img key={index} src={src} alt={`Evento ${index + 1}`} className="rounded-lg shadow-md object-cover h-48 w-full" />
        ))}
      </div>
    </section>
  );
};

export default Gallery;
