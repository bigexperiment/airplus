import React from 'react';
import { Calendar, Clock, Mountain, Compass, Home, Truck, Star } from 'lucide-react';

const MardiHimal = () => {
  return (
    <div className="font-sans bg-gray-100 min-h-screen p-4 md:p-8">
      <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-lg overflow-hidden">
        <div className="relative h-64 md:h-96 bg-cover bg-center" style={{backgroundImage: "url('/images/mardi-himal.jpg')"}}>
          <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white text-center">Mardi Himal Trek</h1>
          </div>
        </div>

        <div className="p-6 md:p-8">
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-8">
            <InfoCard icon={<Calendar className="w-6 h-6" />} title="Duration" value="09 Days" />
            <InfoCard icon={<Compass className="w-6 h-6" />} title="Destination" value="Nepal" />
            <InfoCard icon={<Mountain className="w-6 h-6" />} title="Max Elevation" value="4,500 m" />
            <InfoCard icon={<Star className="w-6 h-6" />} title="Difficulty" value="Moderate to Strenuous" />
            <InfoCard icon={<Home className="w-6 h-6" />} title="Accommodation" value="Tea House" />
            <InfoCard icon={<Truck className="w-6 h-6" />} title="Transport" value="Land/Flight" />
          </div>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">Overview</h2>
            <p className="text-gray-700 leading-relaxed">
              The Mardi Himal Trek is a lesser-known, yet stunning route in Nepal's Annapurna region. Starting from Kande, the trek ascends through lush rhododendron forests, traditional Gurung villages, and rugged mountain terrain. It culminates at Mardi Himal Base Camp (4,500m), offering breathtaking views of Mardi Himal, Machhapuchhre (Fishtail), Annapurna South, and Hiunchuli.
            </p>
            <p className="text-gray-700 leading-relaxed mt-4">
              Known for its serene trails and pristine natural beauty, this moderate trek provides a more solitary and intimate trekking experience compared to the busier routes. The journey combines cultural immersion with spectacular landscapes, making it a hidden gem in the Annapurna range.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">Itinerary</h2>
            <div className="space-y-4">
              {itinerary.map((day, index) => (
                <div key={index} className="flex items-start">
                  <div className="flex-shrink-0 w-16 h-16 bg-indigo-500 text-white rounded-full flex items-center justify-center font-bold">
                    Day {day.day < 10 ? `0${day.day}` : day.day}
                  </div>
                  <div className="ml-4">
                    <h3 className="font-semibold text-lg">{day.title}</h3>
                    <p className="text-gray-600">{day.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

const InfoCard = ({ icon, title, value }) => (
  <div className="bg-gray-50 p-4 rounded-lg flex items-center">
    <div className="text-indigo-500 mr-3">{icon}</div>
    <div>
      <h3 className="text-sm font-semibold text-gray-500">{title}</h3>
      <p className="text-lg font-bold">{value}</p>
    </div>
  </div>
);

const itinerary = [
  { day: 1, title: "Arrival in Kathmandu", description: "Meet our representatives and trip briefing." },
  { day: 2, title: "Kathmandu to Pokhara", description: "Drive or fly from Kathmandu to Pokhara." },
  { day: 3, title: "Trek to Pitam Deurali", description: "Drive to Kande (1,740 m). Trek to Pitam Deurali (2,100 m)." },
  { day: 4, title: "Trek to Low Camp", description: "Trek to Low Camp (2,600 m)." },
  { day: 5, title: "Trek to High Camp", description: "Trek to High camp (3550 m)." },
  { day: 6, title: "Mardi Himal Base Camp", description: "Hike to Mardi Himal base camp (4,500 m). Trek to Badal Danda (3,210 m)." },
  { day: 7, title: "Trek to Sidhing and Drive to Pokhara", description: "Trek to Sidhing (1,700 m). Drive to Pokhara. Evening boating at Phewa Lake." },
  { day: 8, title: "Pokhara to Kathmandu", description: "Drive or fly from Pokhara to Kathmandu." },
  { day: 9, title: "Final Departure", description: "Departure from Kathmandu." },
];

export default MardiHimal;