function UniquePlaces() {
    const places = [
      { name: "Unique Villa in Bali", img: "maldives.svg" },
      { name: "Historic House in Rome", img: "moroco.svg" },
      { name: "Beach House in Malibu", img: "mongolia.svg" }
    ];
  
    return (
      <section className="p-4">
        <h2 className="text-2xl font-bold mb-4">Explore unique places to stay</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {places.map((place, index) => (
            <div key={index} className="bg-white shadow-lg rounded-lg overflow-hidden">
              <img src={`../../../../src/assets/img/uniquePlaces/${place.img}`} alt={place.name} className="w-full h-48 object-cover" />
              <div className="p-4">
                <h3 className="text-lg font-semibold">{place.name}</h3>
              </div>
            </div>
          ))}
        </div>
        <div>
            <button>Explore more stays</button>
        </div>
      </section>
    );
  }
  
  export default UniquePlaces;
  