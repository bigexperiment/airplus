import React from 'react';
import { Calendar, Clock, Mountain, Compass, Home, Truck, Star } from 'lucide-react';

const AnnapurnaBaseCamp = () => {
  return (
    <div className="font-sans bg-gray-100 min-h-screen p-4 md:p-8">
      <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-lg overflow-hidden">
        <div className="relative h-64 md:h-96 bg-cover bg-center" style={{backgroundImage: "url('/images/annapurna-base-camp.jpg')"}}>
          <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white text-center">Annapurna Base Camp Trek</h1>
          </div>
        </div>

        <div className="p-6 md:p-8">
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-8">
            <InfoCard icon={<Calendar className="w-6 h-6" />} title="Duration" value="11 Days" />
            <InfoCard icon={<Compass className="w-6 h-6" />} title="Destination" value="Nepal" />
            <InfoCard icon={<Mountain className="w-6 h-6" />} title="Max Elevation" value="4,130 m" />
            <InfoCard icon={<Star className="w-6 h-6" />} title="Difficulty" value="Moderate" />
            <InfoCard icon={<Home className="w-6 h-6" />} title="Accommodation" value="Tea House" />
            <InfoCard icon={<Truck className="w-6 h-6" />} title="Transport" value="Land/Flight" />
          </div>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">Overview</h2>
            <p className="text-gray-700 leading-relaxed">
              The Annapurna Base Camp Trek offers a captivating journey through diverse landscapes, rich cultural experiences, and stunning mountain vistas. Starting from Pokhara, the trail winds through lush rhododendron forests, quaint Gurung villages, and terraced farmlands. As you ascend, the scenery transitions to alpine meadows, cascading waterfalls, and majestic Himalayan peaks. The highlight of the trek is reaching Annapurna Base Camp, nestled in a high-altitude glacial basin surrounded by towering peaks, including Annapurna I (8,091m) and Machapuchare (6,993m). Witnessing the sunrise over this panoramic amphitheater of mountains is a truly awe-inspiring moment.
            </p>
            <p className="text-gray-700 leading-relaxed mt-4">
              Throughout the journey, trekkers immerse themselves in the local culture, enjoying warm hospitality and traditional cuisine. Accommodations in cozy tea houses provide a comfortable retreat after days of exploration. Suitable for trekkers of all levels, the Annapurna Base Camp Trek promises an unforgettable adventure filled with natural beauty, cultural encounters, and Himalayan wonders.
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
  { day: 3, title: "Trek to Chhomrong", description: "Drive to Matkyu (3 hrs). Trek to Chhomrong (2,030 m)." },
  { day: 4, title: "Trek to Bamboo", description: "Trek to Bamboo (2,300 m)." },
  { day: 5, title: "Trek to Deurali", description: "Trek to Deurali (3,200 m)." },
  { day: 6, title: "Trek to Annapurna Base Camp", description: "Trek to Annapurna Base camp (4,130 m) via Machhapuchhre Base Camp (3,700 m)." },
  { day: 7, title: "Trek to Dovan", description: "Trek to Dovan (2,580 m)." },
  { day: 8, title: "Trek to Jhinu Danda", description: "Trek to Jhinu Danda (1,740 m). Visit a natural hot spring." },
  { day: 9, title: "Drive to Pokhara", description: "Drive to Pokhara. Evening boating at Phewa Lake." },
  { day: 10, title: "Pokhara to Kathmandu", description: "Drive or fly from Pokhara to Kathmandu." },
  { day: 11, title: "Final Departure", description: "Departure from Kathmandu." },
];

export default AnnapurnaBaseCamp;