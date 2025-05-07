const campuses = ["Colima", "Tecomán", "Manzanillo", "Vallarta"];

const Campuses = () => {
  return (
    <section className="py-20 px-6 bg-gray-100 text-center">
      <h2 className="text-3xl md:text-4xl font-bold text-green-700 mb-8">Nuestros Campus</h2>
      <div className="flex flex-wrap justify-center gap-6">
        {campuses.map((campus) => (
          <div key={campus} className="bg-white px-6 py-4 rounded-lg shadow-md text-gray-800 text-lg font-medium">
            {campus}
          </div>
        ))}
      </div>
    </section>
  );
};

export default Campuses;
