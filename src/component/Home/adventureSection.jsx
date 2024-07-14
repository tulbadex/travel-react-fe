import React from 'react';

const AdventureSection = () => {
  return (
    <section className="py-12">
      <div className="container mx-auto">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-2xl md:text-3xl font-bold">
            Find your next adventure with these <span className="text-[#605DEC]">flight deals</span>
          </h2>
          <a href="#" className="text-gray-300 text-lg">All &rarr;</a>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="relative">
            <img src="../../../../src/assets/img/flight/shanghai.svg" alt="The Bund, Shanghai" className="w-full h-48 object-cover rounded-t-lg" />
            <div className="p-3 bg-white rounded-b-lg shadow">
              <div className="flex justify-between">
                <h4 className="font-bold">The Bund, <span className="text-[#605DEC]">Shanghai</span></h4>
                <p className="font-bold">$598</p>
              </div>
              <div className='flex justify-between'>
                <p className="text-gray-600">China’s most international city</p>
              </div>
            </div>
          </div>
          <div className="relative">
            <img src="../../../../src/assets/img/flight/sydney.svg" alt="Sydney Opera House, Sydney" className="w-full h-48 object-cover rounded-t-lg" />
            <div className="p-3 bg-white rounded-b-lg shadow">
              <div className="flex justify-between">
                <h4 className="font-bold">Sydney Opera House, <span className="text-[#605DEC]">Sydney</span></h4>
                <p className="font-bold">$981</p>
              </div>
              <div className='flex justify-between'>
                <p className="text-gray-600">Take a stroll along the famous harbor</p>
              </div>
            </div>
          </div>
          <div className="relative">
            <img src="../../../../src/assets/img/flight/kyoto.svg" alt="Kōdai-ji Temple, Kyoto" className="w-full h-48 object-cover rounded-t-lg" />
            <div className="p-3 bg-white rounded-b-lg shadow">
              <div className="flex justify-between">
                <h4 className="font-bold">Kōdai-ji Temple, <span className="text-[#605DEC]">Kyoto</span></h4>
                <p className="font-bold">$633</p>
              </div>
              <div className='flex justify-between'>
                <p className="text-gray-600">Step back in time in the Gion district</p>
              </div>
            </div>
          </div>
        </div>
        <div className="relative mt-8">
          <img src="../../../../src/assets/img/flight/kenya.svg" alt="Tsavo East National Park, Kenya" className="w-full h-72 object-cover rounded-t-lg" />
          <div className="p-4 bg-white rounded-b-lg shadow">
            <div className="flex justify-between">
              <h4 className="font-bold">Tsavo East National Park, <span className="text-[#605DEC]">Kenya</span></h4>
              <p className="font-bold">$1,248</p>
            </div>
            <div className="flex justify-between">
              <p className="text-gray-600">Named after the Tsavo River, and opened in April 1948, Tsavo East National Park is one of the oldest parks in Kenya. It is located in the semi-arid Taru Desert.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AdventureSection;
