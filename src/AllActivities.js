import React from 'react';
import { Link } from 'react-router-dom';

const treks = [
  { name: "Everest Base Camp", image: "/images/everest-base-camp.jpg", link: "/treks/everest-region/everest-base-camp" },
  { name: "Annapurna Base Camp", image: "/images/annapurna-base-camp.jpg", link: "/treks/annapurna-region/annapurna-base-camp" },
  { name: "Annapurna Circuit", image: "/images/annapurna-circuit.jpg", link: "/treks/annapurna-region/annapurna-circuit" },
  { name: "Manaslu Circuit", image: "/images/manaslu-circuit.jpg", link: "/treks/manaslu-region/manaslu-circuit" },
  { name: "Poon Hill", image: "/images/poon-hill.jpg", link: "/treks/annapurna-region/poon-hill" },
  { name: "Three Passes", image: "/images/three-passes.jpg", link: "/treks/everest-region/three-passes" },
  { name: "Gokyo Lake", image: "/images/gokyo-lake.jpg", link: "/treks/everest-region/goyko-lake" },
  { name: "Mardi Himal", image: "/images/mardi-himal.jpg", link: "/treks/annapurna-region/mardi-himal" },
  { name: "Khopra Danda", image: "/images/khopra-danda.jpg", link: "/treks/annapurna-region/khopra-danda" },
  { name: "Upper Mustang", image: "/images/upper-mustang.jpg", link: "/treks/annapurna-region/upper-mustang" },
  { name: "Langtang Trek", image: "/images/langtang-trek.jpg", link: "/treks/langtang-region/langtang-trek" },
  { name: "Langtang Gosainkunda", image: "/images/langtang-gosainkunda.jpg", link: "/treks/langtang-region/langtang-gosainkunda" },
  { name: "Dhaulagiri Base Camp", image: "/images/dhaulagiri-base-camp.jpg", link: "/treks/dhaulagiri-region/dhaulagiri-base-camp" },
];

const tours = [
  { name: "Kathmandu & Nagarkot", image: "/images/kathmandu-nagarkot.jpg", link: "/tours/kathmandu-nagarkot" },
  { name: "Kathmandu & Pokhara", image: "/images/kathmandu-pokhara.jpg", link: "/tours/kathmandu-pokhara" },
  { name: "Kathmandu & Chitwan", image: "/images/kathmandu-chitwan.jpg", link: "/tours/kathmandu-chitwan" },
  { name: "Kathmandu & Lumbini", image: "/images/kathmandu-lumbini.jpg", link: "/tours/kathmandu-lumbini" },
];

const ActivityGrid = ({ activities }) => (
  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
    {activities.map((activity, index) => (
      <Link key={index} to={activity.link} className="block">
        <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300">
          <img src={activity.image} alt={activity.name} className="w-full h-48 object-cover" />
          <div className="p-4">
            <h3 className="text-xl font-semibold mb-2">{activity.name}</h3>
          </div>
        </div>
      </Link>
    ))}
  </div>
);

const AllActivities = () => {
  return (
    <div className="container mx-auto px-4 py-16">
      <h1 className="text-4xl font-bold text-center mb-12">All Activities</h1>
      
      <section className="mb-16">
        <h2 className="text-3xl font-bold mb-8 text-indigo-600">Trekking Packages</h2>
        <ActivityGrid activities={treks} />
      </section>

      <section>
        <h2 className="text-3xl font-bold mb-8 text-indigo-600">Tour Packages</h2>
        <ActivityGrid activities={tours} />
      </section>
    </div>
  );
};

export default AllActivities;