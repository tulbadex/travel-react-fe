function Flight() {
    const destinations = [
      { name: "The Iconic Bangkok", price: "$300", img: "shanghai.svg" },
      { name: "Experience Kyoto", price: "$400", img: "sydney.svg" },
      { name: "Discover Taipei", price: "$350", img: "kodaji.svg" }
    ];
  
    return (
      <section className="p-4">
        <h2 className="text-2xl font-bold mb-4">Find your next adventure</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {destinations.map((dest, index) => (
            <div key={index} className="bg-white shadow-lg rounded-lg overflow-hidden">
              <img src={`../../../../src/assets/img/flight/${dest.img}`} alt={dest.name} className="w-full h-48 object-cover" />
              <div className="p-4">
                <h3 className="text-lg font-semibold">{dest.name}</h3>
                <p className="text-gray-600">{dest.price}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-6">
            <img src={`../../../../src/assets/img/flight/kenya.svg`} alt='Kenya Flight' className="w-full h-48 object-cover" />
              <div className="p-4">
                <h3 className="text-lg font-semibold">Tsavo East National Park, Kenya</h3>
                <p className="text-gray-600">Named after the Tsavo River, and opened in April 1984, Tsavo East National Park is one of the oldest parks in Kenya. It is located in the semi-arid Taru Desert</p>
              </div>
        </div>
      </section>
    );
  }
  
  export default Flight;
  