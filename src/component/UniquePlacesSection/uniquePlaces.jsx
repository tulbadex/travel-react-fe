import React from 'react';
import maldivesPics from '../../assets/img/uniquePlaces/maldives.png'

const UniquePlacesSection = () => {

  return (
    <>
      <section className="py-12">
        <div className="container mx-auto">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-2xl md:text-3xl font-bold text-left">
              Explore unique <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#5CD6C0] to-[#22C3A6]">places to stay</span>
            </h2>
            <a href="#" className="text-gray-300 text-lg">All &rarr;</a>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="relative">
              {/* ../../../../src/assets/img/uniquePlaces/maldives.svg */}
              <img src={maldivesPics} alt="Stay among the atolls in Maldives" className="w-full h-48 object-cover rounded-t-lg" />
              <div className="p-4 bg-white bg-opacity-75 shadow-lg rounded-b-lg">
                <h4 className="font-semibold text-left text-lg">Stay among the atolls in <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#5CD6C0] to-[#22C3A6]">Maldives</span></h4>
                <p className="text-gray-600 text-left font-normal text-base">From the 2nd century AD, the islands were known as the 'Money Isles' due to the abundance of cowry shells, a currency of the early ages.</p>
              </div>
            </div>
            <div className="relative">
              <img src="../../../../src/assets/img/uniquePlaces/moroco.svg" alt="Experience the Ourika Valley in Morocco" className="w-full h-48 object-cover rounded-t-lg" />
              <div className="p-4 bg-white bg-opacity-75 shadow-lg rounded-b-lg">
                <h4 className="font-semibold text-left text-lg">Experience the Ourika Valley in <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#5CD6C0] to-[#22C3A6]">Morocco</span></h4>
                <p className="text-gray-600 text-left font-normal text-base">Morocco’s Hispano-Moorish architecture blends influences from Berber culture, Spain, and contemporary artistic currents in the Middle East.</p>
              </div>
            </div>
            <div className="relative">
              <img src="../../../../src/assets/img/uniquePlaces/mongolia.svg" alt="Live traditionally in Mongolia" className="w-full h-48 object-cover rounded-t-lg" />
              <div className="p-4 bg-white bg-opacity-75 shadow-lg rounded-b-lg">
                <h4 className="font-semibold text-left text-lg">Live traditionally in <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#5CD6C0] to-[#22C3A6]">Mongolia</span></h4>
                <p className="text-gray-600 text-left font-normal text-base">Traditional Mongolian yurts consist of an angled latticework of wood or bamboo for walls, ribs, and a wheel.</p>
              </div>
            </div>
          </div>
          <div className="text-center mt-8">
            <button className="bg-[#605DEC] text-white px-6 py-2 rounded">Explore more stays</button>
          </div>
        </div>
      </section>
    </>
  );
};

export default UniquePlacesSection;