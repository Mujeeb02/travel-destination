import React, { useState } from 'react';
import { IoMdArrowDropdown } from "react-icons/io";
import ToggleSwitch from './ToggleSwitch';
const SearchForm = ({ onSearch }) => {
    const [origin, setOrigin] = useState('SYD');
    const [destination, setDestination] = useState('JFK');
    const [cabin, setCabin] = useState('Economy');
    const [isOn, setIsOn] = useState(false);
    const handleSubmit = (e) => {
        e.preventDefault();
        onSearch({ origin, destination, cabin });
    };
    const handleToggle = () => {
        setIsOn(!isOn);
    };
    return (
        <form onSubmit={handleSubmit} className="ml-[3%] w-full max-w-xs bg-inherit p-4 rounded-md text-white mr-[9%]">
            <div className="mb-8 bg-[#181818] text-white rounded-md text-xs">
                <label className="block pl-2.5">Origin</label>
                <div className="relative">
                    <select
                        value={origin}
                        onChange={(e) => setOrigin(e.target.value)}
                        className="appearance-none block w-full p-2 pt-0 pr-8 bg-[#181818] text-white rounded-md"
                    >
                        <option value="JFK">JFK</option>
                        <option value="DEL">DEL</option>
                        <option value="SYD">SYD</option>
                        <option value="BOM">BOM</option>
                        <option value="BNE">BNE</option>
                        <option value="BLR">BLR</option>
                    </select>
                    <IoMdArrowDropdown className="absolute right-2 top-1/2 transform -translate-y-1/2 text-white pointer-events-none" />
                </div>
            </div>
            <div className="relative mb-8 bg-[#181818] text-white rounded-md text-xs">
                <label className="block pl-2.5">Destination</label>
                <div className="relative">
                    <select
                        value={destination}
                        onChange={(e) => setDestination(e.target.value)}
                        className="appearance-none block w-full p-2 pt-0 pr-8 bg-[#181818] text-white rounded-md"
                    >
                        <option value="JFK">JFK</option>
                        <option value="DEL">DEL</option>
                        <option value="SYD">SYD</option>
                        <option value="LHR">LHR</option>
                        <option value="CDG">CDG</option>
                        <option value="DOH">DOH</option>
                        <option value="SIN">SIN</option>
                    </select>
                    <IoMdArrowDropdown className="absolute right-2 top-1/2 transform -translate-y-1/2 text-white pointer-events-none" />
                </div>
            </div>
            <div className="mb-8 bg-[#1C2519] text-white rounded-md text-xs border-b-2">
                <label className="block pl-2.5">Cabin</label>
                <div className="relative">
                    <select
                        value={cabin}
                        onChange={(e) => setCabin(e.target.value)}
                        className="appearance-none block w-full p-2 pt-0 pr-8 bg-[#1C2519] text-white rounded-md"
                    >
                        <option value="Economy">Economy</option>
                        <option value="Business">Business</option>
                        <option value="First">First</option>
                    </select>
                    <IoMdArrowDropdown className="absolute right-2 top-1/2 transform -translate-y-1/2 text-white pointer-events-none" />
                </div>
            </div>
            <div className='mb-8 flex gap-4 justify-center items-center h-[40px] rounded-md bg-[#111111]'>
                <ToggleSwitch isOn={isOn} handleToggle={handleToggle} />
                <p>Show <span className='text-[#824118] font-bold'>Pro Filters</span></p>
            </div>
            <button type="submit" className="w-[50%] py-2 bg-[#38B8A6] text-white rounded-md">Search</button>
        </form>
    );
};

export default SearchForm;
