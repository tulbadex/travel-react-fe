import React, { useState } from 'react';
import FromIcon from '../../assets/img/icon/departure.svg';
import ToIcon from '../../assets/img/icon/arrival.svg';
import CalendarIcon from '../../assets/img/icon/calendar-with-dates.svg';
import UserIcon from '../../assets/img/icon/person-solid.svg';
import BannerHeroText from '../../assets/img/banner/Hero-Text-Gradient.svg';
import { DateRange } from "react-date-range";
import "react-date-range/dist/styles.css";
import "react-date-range/dist/theme/default.css";
import { format } from "date-fns";
import Datepicker from "react-tailwindcss-datepicker";

const airports = [
    { abbr: 'JFK', name: 'John F. Kennedy International Airport' },
    { abbr: 'LAX', name: 'Los Angeles International Airport' },
    { abbr: 'ORD', name: "O'Hare International Airport" },
    { abbr: 'MSP', name: "Minneapolis St Paul International Airport" },
    { abbr: 'NRT', name: "Narita International Airport" },
    { abbr: 'SFO', name: "San Francisco International Airport" },
    { abbr: 'ATL', name: "Hartsfield-jackson Atlanta International Airport" },
    { abbr: 'PVG', name: "Shanghai Pudong International Airport" },
    { abbr: 'STL', name: "Louis Lambert International Airport" },
    // Add more airports as needed
];

function Banner() {
    const [openDate, setOpenDate] = useState(false);
    const [date, setDate] = useState([
        {
        startDate: new Date(),
        endDate: new Date(),
        key: "selection",
        },
    ]);

    const [openOptions, setOpenOptions] = useState(false);
    const [options, setOptions] = useState({
        adult: 1,
        minor: 0,
    });

    const handleOptions = (name, oparetion) => {
        setOptions((prev) => {
          return {
            ...prev,
            [name]: oparetion === "i" ? options[name] + 1 : options[name] - 1,
          };
        });
    };

    
    const [startDate, setStartDate] = useState(null);
    const [endDate, setEndDate] = useState(null);
    const [tripType, setTripType] = useState('round-trip');
    const [adults, setAdults] = useState(1);
    const [minors, setMinors] = useState(0);

    const handleTripTypeChange = (type) => {
        setTripType(type);
        if (type === 'one-way') {
            setEndDate(null);
        }
    };

    const [value, setValue] = useState({
        startDate: new Date(),
        endDate: null
    });

    const [isSingle, setIsSingle] = useState(false);

    const handleValueChange = (newValue) => {
        const { startDate, endDate } = newValue;

        if (endDate && endDate < startDate) {
            setValue({ startDate, endDate: null });
        } else {
            setValue(newValue);
            if (!endDate) {
                setIsSingle(true);
            } else {
                setIsSingle(false);
            }
        }
    };

    function isNumberKey(evt) {
        var charCode = (evt.which) ? evt.which : evt.keyCode;
        if (charCode > 31 && (charCode < 48 || charCode > 57)) {
          evt.preventDefault();
        }
    }

    return (
        <>
            <section className="relative bg-cover bg-center h-screen" style={{ backgroundImage: "url('/src/assets/img/world-map.png')" }}>
                <div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-blue-800">
                    <img src={BannerHeroText} alt="Banner Text" />
                    <div className="bg-white rounded-lg p-4 w-full max-w-6xl flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-0">
                        <div className="relative flex-grow flex items-center border rounded-l-md px-4 py-2">
                            <img src={FromIcon} alt="From Icon" className="absolute left-3 w-5 h-5 text-gray-400" />
                            <input type="text" placeholder="From where?" className="pl-10 flex-grow focus:outline-none" list="from-airports" />
                            <datalist id="from-airports" className=''>
                                {airports.map((airport) => (
                                    <option key={airport.abbr} value={airport.abbr}>
                                        {airport.name}
                                    </option>
                                ))}
                            </datalist>
                        </div>

                        <div className="relative flex-grow flex items-center border px-4 py-2">
                            <img src={ToIcon} alt="To Icon" className="absolute left-3 w-5 h-5 text-gray-400" />
                            <input type="text" placeholder="Where to?" className="pl-10 flex-grow focus:outline-none" list="to-airports" />
                            <datalist id="to-airports">
                                {airports.map((airport) => (
                                    <option key={airport.abbr} value={airport.abbr}>
                                        {airport.name}
                                    </option>
                                ))}
                            </datalist>
                        </div>

                        <div className="relative flex-grow flex items-center border px-4 py-2">
                            <img src={CalendarIcon} alt="Calendar Icon" className="absolute left-3 w-5 h-5 text-gray-400" />
                            <Datepicker 
                                value={value} 
                                onChange={handleValueChange} 
                                inputClassName="pl-10 flex-grow focus:outline-none" 
                                placeholder="Depart - Return"
                                startFrom={new Date()}
                                minDate={new Date()} 
                                // maxDate={new Date("2023-01-30")} 
                                displayFormat={"DD/MM/YYYY"} 
                                asSingle={isSingle}
                            />
                        </div>

                        <div className="relative flex-grow flex items-center border rounded-r-md px-4 py-2">
                            <img src={UserIcon} alt="User Icon" className="absolute left-3 w-5 h-5 text-gray-400" />
                            <input type="text" placeholder="1 adult" className="pl-10 flex-grow focus:outline-none"  onKeyDown={isNumberKey} />
                        </div>
                        <button className="bg-[#605DEC] text-white px-4 py-2 rounded-md ml-4">Search</button>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Banner;