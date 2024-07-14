import React from 'react';

const HeroSection = () => (
  <section className="relative bg-cover bg-center h-screen" style={{ backgroundImage: "url('/path/to/hero-image.jpg')" }}>
    <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-lg">
        <h1 className="text-3xl font-bold text-center mb-4 text-white">Find Your Perfect Hotel</h1>
        <form className="space-y-4">
          <input type="text" placeholder="Destination" className="w-full p-2 border rounded" />
          <div className="flex space-x-4">
            <input type="date" placeholder="Check-in" className="w-1/2 p-2 border rounded" />
            <input type="date" placeholder="Check-out" className="w-1/2 p-2 border rounded" />
          </div>
          <input type="number" placeholder="Guests" className="w-full p-2 border rounded" />
          <button type="submit" className="w-full bg-[#605DEC] text-white py-2 rounded">Search</button>
        </form>
      </div>
    </div>
  </section>
);

export default HeroSection;