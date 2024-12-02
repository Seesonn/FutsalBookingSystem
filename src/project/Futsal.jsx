import { Search } from 'lucide-react'
import f1 from "../assets/about.jpg"

export default function FutsalVenues() {
  const venues = [
    {
      id: 1,
      name: "PLANAT FUTSAL",
      location: "Ithari",
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
      name: " SD FUTSAL",
      location: "Ithari",
      image: f1
    },
    
      
  ]

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Header */}
      <div className="text-center mb-8">
        <h1 className="text-2xl font-bold mb-4">
          I WANNA PLAY <span className="text-emerald-500">FUTSAL</span> NOW{" "}
          <span className="text-emerald-500"></span> O THE{" "}
          <span className="text-emerald-500">GRAP <OPPORTUNITY></OPPORTUNITY></span> AT{" "}
          <span className="text-emerald-500">OUR WEBSITE</span>
        </h1>
        
        {/* Search Bar */}
        <div className="relative max-w-md mx-auto">
          <input
            type="text"
            placeholder="Search by location..."
            className="w-full px-4 py-2 pl-10 border rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500"
          />
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
        </div>
      </div>

      {/* Venue Grid */}
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
        {venues.map((venue) => (
          <div key={venue.id} className="bg-white rounded-lg overflow-hidden shadow-lg group aspect-square">
            <div className="relative h-full">
              <img
                src={venue.image}
                alt={venue.name}
                className="w-full h-full object-cover transition-all duration-500 group-hover:scale-110 group-hover:brightness-50"
              />
              <div className="absolute inset-0 bg-black/50 flex flex-col items-center justify-center gap-3">
                <button className="px-3 py-1 md:px-4 md:py-2 bg-emerald-500 text-white text-xs md:text-sm rounded-full hover:bg-emerald-600 transition-all duration-500 transform translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 shadow-lg hover:shadow-xl">
                  View Details
                </button>
                <button className="px-3 py-1 md:px-4 md:py-2 bg-emerald-500 text-white text-xs md:text-sm rounded-full hover:bg-emerald-600 transition-all duration-500 transform translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 shadow-lg hover:shadow-xl">
                  Book Now
                </button>
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-2 text-center bg-white bg-opacity-80">
                <h3 className="font-semibold text-sm md:text-lg mb-1 truncate">{venue.name}</h3>
                <p className="text-gray-600 text-xs md:text-sm truncate">{venue.location}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
