import React, { useState, useRef, useEffect } from 'react';
import { Search, Filter, X } from 'lucide-react';
import f1 from "../assets/about.jpg";

export default function FutsalVenues() {
  const [searchTerm, setSearchTerm] = useState('');
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [selectedLocation, setSelectedLocation] = useState('');
  const filterRef = useRef(null);

  const venues = [
    {
      id: 1,
      name: "PLANAT FUTSAL",
      location: "Itahari",
      image: f1
    },
    {
      id: 2,
      name: "ARENA FUTSAL",
      location: "Biratchock",
      image: f1
    },
    {
      id: 3,
      name: "SPORTHUB FUTSAL",
      location: "Biratnagar",
      image: f1
    },
    {
      id: 4,
      name: "SD FUTSAL",
      location: "Itahari",
      image: f1
    },
  ];

  const locations = Array.from(new Set(venues.map(venue => venue.location)));

  const filteredVenues = venues.filter(venue => 
    venue.location.toLowerCase().includes(searchTerm.toLowerCase()) &&
    (selectedLocation === '' || venue.location === selectedLocation)
  );

  useEffect(() => {
    function handleClickOutside(event) {
      if (filterRef.current && !filterRef.current.contains(event.target)) {
        setIsFilterOpen(false);
      }
    }

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <div className="bg-[#04153F] font-roboto flex items-center justify-center p-4 sm:p-4 md:p-8">
      <div className="bg-[#04153F] rounded-[1rem] w-full max-w-7xl mx-auto p-4 sm:p-6 md:p-8 lg:p-12 shadow-[0_0_20px_rgba(255,255,255,0.15)]">
        <div>
          {/* Header */}
          <div className="text-center mb-8">
            <h1 className="text-[#D2D81D] text-2xl sm:text-3xl md:text-4xl font-bold mb-6 sm:mb-8 text-center">
              Wanna Play Futsal
            </h1>
            
            {/* Search Bar with Filter Icon */}
            <div className="relative max-w-xs mx-auto">
              <input
                type="text"
                placeholder="Search by location..."
                className="w-full px-3 py-1.5 pl-8 pr-8 text-sm border-2 border-[#D2D81D] rounded-full bg-[#04153F] text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#40fe90] focus:border-transparent transition-all duration-300 ease-in-out"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                aria-label="Search venues by location"
              />
              <Search className="absolute left-2.5 top-1/2 transform -translate-y-1/2 text-[#D2D81D] w-3.5 h-3.5" aria-hidden="true" />
              <button 
                className="absolute right-2.5 top-1/2 transform -translate-y-1/2 text-[#D2D81D] hover:text-[#40fe90] focus:outline-none transition-colors duration-300"
                aria-label="Open filters"
                onClick={() => setIsFilterOpen(!isFilterOpen)}
              >
                <Filter className="w-4 h-4" />
              </button>

              {/* Filter Dropdown */}
              {isFilterOpen && (
                <div ref={filterRef} className="absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 z-10">
                  <div className="py-1" role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
                    <div className="px-4 py-2 text-sm text-gray-700 flex justify-between items-center">
                      <span className="font-medium">Filter by Location</span>
                      <button
                        onClick={() => {
                          setSelectedLocation('');
                          setIsFilterOpen(false);
                        }}
                        className="text-emerald-500 hover:text-emerald-600"
                        aria-label="Clear filter"
                      >
                        <X className="w-4 h-4" />
                      </button>
                    </div>
                    {locations.map((location) => (
                      <button
                        key={location}
                        className={`block px-4 py-2 text-sm text-left w-full hover:bg-gray-100 ${
                          selectedLocation === location ? 'bg-emerald-100 text-emerald-800' : 'text-gray-700'
                        }`}
                        role="menuitem"
                        onClick={() => {
                          setSelectedLocation(location);
                          setIsFilterOpen(false);
                        }}
                      >
                        {location}
                      </button>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Venue Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {filteredVenues.map((venue) => (
              <div key={venue.id} className="bg-white rounded-lg overflow-hidden shadow-lg group aspect-square">
                <div className="relative h-full">
                  <img
                    src={venue.image}
                    alt={venue.name}
                    className="w-full h-full object-cover transition-all duration-500 group-hover:scale-110 group-hover:brightness-50"
                  />
                  <div className="absolute inset-0 bg-black/50 flex flex-col items-center justify-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <button className="px-2 py-1 bg-[#D2D81D] text-[#04153F] font-semibold text-xs rounded-full transition-all duration-300 transform translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 shadow-lg hover:shadow-xl">
                      View Details
                    </button>
                    <button className="px-2 py-1 bg-[#40fe90] text-[#04153F] font-semibold text-xs rounded-full transition-all duration-300 transform translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 shadow-lg hover:shadow-xl">
                      Book Now
                    </button>
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 p-2 text-center bg-white bg-opacity-70">
                    <h3 className="font-semibold text-xs sm:text-sm truncate">{venue.name}</h3>
                    <p className="text-gray-600 text-xs font-semibold truncate">{venue.location}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

