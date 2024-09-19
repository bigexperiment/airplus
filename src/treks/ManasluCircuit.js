import React from 'react';
import { Calendar, Clock, Mountain, Compass, Home, Truck, Star } from 'lucide-react';

const ManasluCircuit = () => {
  return (
    <div className="font-sans bg-gray-100 min-h-screen p-4 md:p-8">
      <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-lg overflow-hidden">
        <div className="relative h-64 md:h-96 bg-cover bg-center" style={{backgroundImage: "url('/images/manaslu-circuit.jpg')"}}>
          <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white text-center">Manaslu Circuit Trek</h1>
          </div>
        </div>

        <div className="p-6 md:p-8">
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-8">
            <InfoCard icon={<Calendar className="w-6 h-6" />} title="Duration" value="15 Days" />
            <InfoCard icon={<Compass className="w-6 h-6" />} title="Destination" value="Nepal" />
            <InfoCard icon={<Mountain className="w-6 h-6" />} title="Max Elevation" value="5,160 m" />
            <InfoCard icon={<Star className="w-6 h-6" />} title="Difficulty" value="Strenuous" />
            <InfoCard icon={<Home className="w-6 h-6" />} title="Accommodation" value="Tea House" />
            <InfoCard icon={<Truck className="w-6 h-6" />} title="Transport" value="Drive in - Drive Out" />
          </div>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">Overview</h2>
            <p className="text-gray-700 leading-relaxed">
              The Manaslu Circuit Trek is a remote and spectacular trekking route in Nepal, circumnavigating the majestic Manaslu massif. Renowned for its pristine mountain scenery, rich cultural heritage, and diverse flora and fauna, this trek offers a challenging yet rewarding adventure. The trail takes trekkers through lush subtropical forests, terraced fields, and picturesque villages inhabited by ethnic Gurungs and Tibetans.
            </p>
            <p className="text-gray-700 leading-relaxed mt-4">
              Highlights include crossing the dramatic Larkya La Pass (5,106m), providing stunning views of Manaslu, Himalchuli, and other peaks. The route also features ancient monasteries, intricate mani walls, and prayer flags that reflect the region's Buddhist influences. Due to its remote location and restricted access, the trek offers a quieter and more authentic experience compared to more popular routes.
            </p>
            <p className="text-gray-700 leading-relaxed mt-4">
              Trekkers should be prepared for altitude variations and changing weather conditions. The Manaslu Circuit Trek is ideal for adventurers seeking a challenging trek with breathtaking mountain vistas and cultural immersion in a less-trodden Himalayan region.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">Highlights</h2>
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              <li>Remote and less crowded trek compared to Everest Base Camp and Annapurna Circuit</li>
              <li>Breathtaking views of the Himalayas, especially while crossing the Larkya La Pass</li>
              <li>Unique insight into Tibetan culture and way of life</li>
              <li>Comfortable tea houses along the route</li>
              <li>Authentic and less commercialized trekking experience</li>
            </ul>
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
  { day: 2, title: "Explore Kathmandu", description: "Explore Kathmandu's cultural sites and obtain necessary permits." },
  { day: 3, title: "Drive to Maccha Khola", description: "Drive from Kathmandu to Maccha Khola (900 m)." },
  { day: 4, title: "Trek to Jagat", description: "Trek to Jagat (1410 m)." },
  { day: 5, title: "Trek to Deng", description: "Trek to Deng (1804 m)." },
  { day: 6, title: "Trek to Namrung", description: "Trek to Namrung (2630 m)." },
  { day: 7, title: "Trek to Samagaon", description: "Trek to Samagaon (3530 m)." },
  { day: 8, title: "Acclimatization Day", description: "Acclimatization Day. Visit around Pungyen gompa." },
  { day: 9, title: "Trek to Samdo", description: "Trek to Samdo (3860 m)." },
  { day: 10, title: "Trek to Dharamsala", description: "Trek to Dharamsala/Larkya B. C. (4460 m)." },
  { day: 11, title: "Trek to Bimtang", description: "Trek to Bimtang (3720 m). Larkya-la pass day (5160 m)." },
  { day: 12, title: "Trek to Tilije", description: "Trek to Tilije (2300 m)." },
  { day: 13, title: "Trek to Tal and Drive to Besisahar", description: "Trek to Tal (1700 m). Drive to Besisahar." },
  { day: 14, title: "Drive to Kathmandu", description: "Drive to Kathmandu." },
  { day: 15, title: "Final Departure", description: "Final departure." },
];

export default ManasluCircuit;