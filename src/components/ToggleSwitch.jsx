import React from 'react';

const ToggleSwitch = ({ isOn, handleToggle }) => {
    return (
        <div
            className={`w-12 h-6 flex items-center bg-gray-300 rounded-full p-1 cursor-pointer ${isOn ? 'bg-green-500' : 'bg-gray-300'}`}
            onClick={handleToggle}
        >
            <div
                className={`bg-white w-4 h-4 rounded-full shadow-md transform ${isOn ? 'translate-x-6' : 'translate-x-0'}`}
            ></div>
        </div>
    );
};
export default ToggleSwitch;