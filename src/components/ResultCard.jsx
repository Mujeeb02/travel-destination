import React from 'react';

const ResultCard = ({ result,origin,destination }) => {
    return (
        <div className="w-[100%] flex flex-col justify-center items-center bg-[#1A4D2F] p-4 rounded-lg shadow-md text-[#D6D8CC] mx-auto">
            <div className="flex flex-col items-center mb-4">
                <img
                    src="https://via.placeholder.com/50"
                    alt={result.partner_program}
                    className="w-12 h-12 mb-2"
                />
                <div className="text-center">
                    <h2 className="text-lg font-semibold">{result.partner_program}</h2>
                    <p className='pt-4'>{origin} <span className='font-bold'>→</span> {destination}</p>
                    <p>2024-07-09 - 2024-10-07</p>
                </div>
            </div>
            <div className='flex flex-col justify-center items-center gap-4'>
                <div className='flex flex-col justify-center items-center'>
                    <p className='font-bold text-[25px]'>{result.min_business_miles ? `${result.min_business_miles}` : 'N/A'} <span className='font-normal text-sm'>+ {result.min_business_miles ? `$${result.min_business_tax}` : ''}</span></p>
                    <p className='text-xs'>Min Business Miles: </p>
                </div>
                <div className='flex flex-col justify-center items-center'>
                    <p className='font-bold text-[25px]'>{result.min_business_miles ? `${result.min_business_miles}` : 'N/A'} <span className='font-normal text-sm'>+ {result.min_business_miles ? `$${result.min_business_tax}` : ''}</span></p>
                    <p className='text-xs'>Min Economy Miles: </p>
                </div>
                <div className='flex flex-col justify-center items-center'>
                    <p className='font-bold text-[25px]'>{result.min_business_miles ? `${result.min_business_miles}` : 'N/A'} <span className='font-normal text-sm'>+ {result.min_business_miles ? `$${result.min_business_tax}` : ''}</span></p>
                    <p className='text-xs'>Min First Miles:</p>
                </div>
            </div>
        </div>
    );
};

export default ResultCard;
