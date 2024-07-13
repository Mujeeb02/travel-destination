import React, { useState } from 'react';
import SearchForm from './components/SearchForm';
import ResultCard from './components/ResultCard';

const App = () => {
  const [response, setResponse] = useState(null);
  const[origin,setOrigin]=useState("NA");
  const[destination,setDestination]=useState("NA");
  const handleSearch = async ({ origin, destination, cabin }) => {
    setOrigin(origin);
    setDestination(destination)
    const headers = {
      accept: 'application/json, text/plain, */*',
      'accept-language': 'en-US,en;q=0.9,hi;q=0.8',
      'cache-control': 'no-cache',
      'content-type': 'application/json',
      'user-agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/126.0.0.0 Safari/537.36',
    };

    const json_data = {
      origin,
      destination,
      partnerPrograms: [
        'Air Canada',
        'United Airlines',
        'KLM',
        'Qantas',
        'American Airlines',
        'Etihad Airways',
        'Alaska Airlines',
        'Qatar Airways',
        'LifeMiles',
      ],
      stops: 2,
      departureTimeFrom: '2024-07-09T00:00:00Z',
      departureTimeTo: '2024-10-07T00:00:00Z',
      isOldData: false,
      limit: 302,
      offset: 0,
      cabinSelection: [cabin],
      date: '2024-07-09T12:00:17.796Z',
    };

    const response = await fetch('https://cardgpt.in/apitest', {
      method: 'POST',
      headers,
      body: JSON.stringify(json_data),
    });

    const data = await response.json();
    setResponse(data);
  };

  return (
    <div className="container flex flex-col items-center mx-auto p-4 bg-[#172014] min-h-screen">
      <h1 className="text-xl font-bold text-white mb-8">Choose Origin and Destination Airports</h1>
      <SearchForm onSearch={handleSearch} />
      {response && response.data && response.data.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-8">
          {response.data.map((result, index) => (
            <ResultCard key={index} result={result} origin={origin} destination={destination}/>
          ))}
        </div>
      ) : (
        <div className="mt-8 text-white text-lg">
          Try another search route.
        </div>
      )}
    </div>
  );
};

export default App;
