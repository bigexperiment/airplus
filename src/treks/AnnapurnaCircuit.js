import React from 'react';
import { Calendar, Clock, Mountain, Compass, Home, Truck, Star } from 'lucide-react';

const AnnapurnaCircuit = () => {
  return (
    <div className="font-sans bg-gray-100 min-h-screen p-4 md:p-8">
      <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-lg overflow-hidden">
        <div className="relative h-64 md:h-96 bg-cover bg-center" style={{backgroundImage: "url('/images/annapurna-circuit.jpg')"}}>
          <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white text-center">Annapurna Circuit Trek with Tilicho Lake</h1>
          </div>
        </div>

        <div className="p-6 md:p-8">
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-8">
            <InfoCard icon={<Calendar className="w-6 h-6" />} title="Duration" value="15 Days" />
            <InfoCard icon={<Compass className="w-6 h-6" />} title="Destination" value="Nepal" />
            <InfoCard icon={<Mountain className="w-6 h-6" />} title="Max Elevation" value="5,416 m" />
            <InfoCard icon={<Star className="w-6 h-6" />} title="Difficulty" value="Moderate" />
            <InfoCard icon={<Home className="w-6 h-6" />} title="Accommodation" value="Tea House" />
            <InfoCard icon={<Truck className="w-6 h-6" />} title="Transport" value="Land/Flight" />
          </div>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">Overview</h2>
            <p className="text-gray-700 leading-relaxed">
              The Annapurna Circuit Trek is one of the most iconic and diverse trekking routes in Nepal, offering an extraordinary blend of natural beauty, cultural richness, and adventurous challenges. Spanning approximately 160-230 kilometers, depending on the chosen route and options, this trek takes you through a wide range of climatic zones from tropical to alpine.
            </p>
            <p className="text-gray-700 leading-relaxed mt-4">
              Starting from the lush, subtropical lowlands, the trail ascends along the Marsyangdi River, passing through terraced fields, dense forests, and charming Gurung and Thakali villages. As you progress, you'll experience the dramatic shift in landscapes, leading to the arid, rugged terrains of the Manang Valley. A key highlight is crossing the Thorong La Pass at 5,416 meters, the highest point of the trek, which offers breathtaking panoramic views of the Annapurna and Dhaulagiri mountain ranges.
            </p>
            <p className="text-gray-700 leading-relaxed mt-4">
              The trek also includes culturally significant sites such as the sacred town of Muktinath, revered by both Hindus and Buddhists, and the traditional village of Marpha, known for its apple orchards. The descent through the Kali Gandaki Gorge, the world's deepest gorge, and the relaxing natural hot springs at Tatopani further enrich the journey.
            </p>
            <p className="text-gray-700 leading-relaxed mt-4">
              Suitable for seasoned trekkers, the Annapurna Circuit requires good physical fitness and preparation. The trail is dotted with tea houses providing basic accommodation and meals, ensuring a comfortable trekking experience.
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
  { day: 2, title: "Drive to Chame", description: "Drive to Chame (2,710 m)." },
  { day: 3, title: "Trek to Pisang", description: "Trek to Pisang (3,300 m)." },
  { day: 4, title: "Trek to Ngawal", description: "Trek to Ngawal (3,660 m)." },
  { day: 5, title: "Trek to Manang", description: "Trek to Manang (3,519 m)." },
  { day: 6, title: "Acclimatization day", description: "Hike to Gangapurna Lake/Ice Lake." },
  { day: 7, title: "Trek to Tilicho base", description: "Manang to Tilicho base (4,110 m)." },
  { day: 8, title: "Hike to Tilicho Lake", description: "Hike to Tilicho Lake (4,919 m)." },
  { day: 9, title: "Trek to Yak kharka", description: "Trek to Yak kharka (4,018 m)." },
  { day: 10, title: "Trek to high camp", description: "Trek to high camp (4,880 m)." },
  { day: 11, title: "Trek to Muktinath", description: "Trek to Muktinath (3,800 m). THRONGLA PASS DAY (5416 m)." },
  { day: 12, title: "Trek to Jomsom", description: "Trek to Jomsom (2,670 m)." },
  { day: 13, title: "Jomsom to Pokhara", description: "Drive/Flight from Jomsom to Pokhara." },
  { day: 14, title: "Pokhara to Kathmandu", description: "Drive/Flight from Pokhara to Kathmandu." },
  { day: 15, title: "Final Departure", description: "Departure from Kathmandu." },
];

export default AnnapurnaCircuit;