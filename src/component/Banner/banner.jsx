import React from 'react';
import FromIcon from '../../assets/img/icon/departure.svg';
import ToIcon from '../../assets/img/icon/arrival.svg';
import CalendarIcon from '../../assets/img/icon/calendar-with-dates.svg';
import UserIcon from '../../assets/img/icon/person-solid.svg';

function Banner() {

  return (
    <>
        <section className="relative bg-cover bg-center h-screen" style={{ backgroundImage: "url('/src/assets/img/world-map.png')" }}>
            {/* <div className="absolute inset-0 bg-white opacity-90"></div> */}
            <div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-blue-800">
                {/* <h1 className="text-4xl md:text-5xl font-bold mb-4">It’s more than just a trip</h1> */}
                <h1 className="text-4xl md:text-5xl font-bold mb-4 gradient-text">
          It’s more than <br /> just a trip
        </h1>
                <div className="bg-white rounded-lg p-4 w-full max-w-6xl flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-0">
                    <div className="relative flex-grow flex items-center border rounded-md px-4 py-2">
                        <img src={FromIcon} alt="From Icon" className="absolute left-3 w-5 h-5 text-gray-400" />
                        <input type="text" placeholder="From where?" className="pl-10 flex-grow focus:outline-none" />
                    </div>
                    <div className="relative flex-grow flex items-center border rounded-md px-4 py-2">
                        <img src={ToIcon} alt="From Icon" className="absolute left-3 w-5 h-5 text-gray-400" />
                        <input type="text" placeholder="Where to?" className="pl-10 flex-grow focus:outline-none" />
                    </div>
                    <div className="relative flex-grow flex items-center border rounded-md px-4 py-2">
                        <img src={CalendarIcon} alt="From Icon" className="absolute left-3 w-5 h-5 text-gray-400" />
                        <input type="text" placeholder="Depart - Return" className="pl-10 flex-grow focus:outline-none" />
                    </div>
                    <div className="relative flex-grow flex items-center border rounded-md px-4 py-2">
                        <img src={UserIcon} alt="From Icon" className="absolute left-3 w-5 h-5 text-gray-400" />
                        <input type="text" placeholder="1 adult" className="pl-10 flex-grow focus:outline-none" />
                    </div>
                    <button className="bg-blue-600 text-white px-4 py-2 rounded-md ml-4">Search</button>
                </div>
            </div>
        </section>
    </>
  )
}

export default Banner