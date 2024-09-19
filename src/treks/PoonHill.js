import React from 'react';
import { Calendar, Clock, Mountain, Compass, Home, Truck, Star } from 'lucide-react';

const PoonHill = () => {
  return (
    <div className="font-sans bg-gray-100 min-h-screen p-4 md:p-8">
      <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-lg overflow-hidden">
        <div className="relative h-64 md:h-96 bg-cover bg-center" style={{backgroundImage: "url('/images/poon-hill.jpg')"}}>
          <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white text-center">Poon Hill (Ghorepani-Ghandruk) Trek</h1>
          </div>
        </div>

        <div className="p-6 md:p-8">
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-8">
            <InfoCard icon={<Calendar className="w-6 h-6" />} title="Duration" value="8 Days" />
            <InfoCard icon={<Compass className="w-6 h-6" />} title="Destination" value="Nepal" />
            <InfoCard icon={<Mountain className="w-6 h-6" />} title="Max Elevation" value="3,210 m" />
            <InfoCard icon={<Star className="w-6 h-6" />} title="Difficulty" value="Easy" />
            <InfoCard icon={<Home className="w-6 h-6" />} title="Accommodation" value="Tea House" />
            <InfoCard icon={<Truck className="w-6 h-6" />} title="Transport" value="Land/Flight" />
          </div>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">Overview</h2>
            <p className="text-gray-700 leading-relaxed">
              The Ghorepani Poon Hill Trek, located in Nepal's Annapurna region, is a popular short trek known for its stunning sunrise views over the Annapurna and Dhaulagiri mountain ranges. Starting from Nayapul, the trail passes through lush rhododendron forests, terraced fields, and traditional Gurung and Magar villages. Key stops include Tikhedhunga, Ghorepani, and the vantage point of Poon Hill (3,210m), where trekkers witness breathtaking panoramas of the Himalayas.
            </p>
            <p className="text-gray-700 leading-relaxed mt-4">
              This moderate trek, accessible to beginners, offers a rich blend of natural beauty and cultural immersion, making it one of Nepal's most rewarding trekking experiences. It's an ideal choice for those looking to experience the beauty of the Himalayas in a shorter timeframe.
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
  { day: 3, title: "Trek to Ulleri", description: "Drive to Tikhedhunga and trek to Ulleri (2,055 m)" },
  { day: 4, title: "Trek to Ghorepani", description: "Trek from Tikhedhunga to Ghorepani (2,850m)" },
  { day: 5, title: "Poon Hill and Trek to Tadapani", description: "Hike to Poon Hill (3,210 m) and trek to Tadapani (2,540m)" },
  { day: 6, title: "Trek to Ghandruk and Drive to Pokhara", description: "Trek to Ghandruk (1,940m) & drive to Pokhara. Evening boating at Phewa Lake." },
  { day: 7, title: "Pokhara to Kathmandu", description: "Drive or fly from Pokhara to Kathmandu." },
  { day: 8, title: "Final Departure", description: "Departure from Kathmandu." },
];

export default PoonHill;