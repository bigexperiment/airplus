import React from 'react';
import { Link } from 'react-router-dom';
import { Calendar } from 'lucide-react';

const treks = [
  { name: "Everest Base Camp", duration: "11 Days", image: "/images/everest-base-camp.jpg", link: "/treks/everest-region/everest-base-camp" },
  { name: "Annapurna Base Camp", duration: "11 Days", image: "/images/annapurna-base-camp.jpg", link: "/treks/annapurna-region/annapurna-base-camp" },
  { name: "Annapurna Circuit", duration: "15 Days", image: "/images/annapurna-circuit.jpg", link: "/treks/annapurna-region/annapurna-circuit" },
  { name: "Manaslu Circuit", duration: "15 Days", image: "/images/manaslu-circuit.jpg", link: "/treks/manaslu-region/manaslu-circuit" },
  { name: "Poon Hill", duration: "8 Days", image: "/images/poon-hill.jpg", link: "/treks/annapurna-region/poon-hill" },
  { name: "Three Passes", duration: "18 Days", image: "/images/three-passes.jpg", link: "/treks/everest-region/three-passes" },
  { name: "Gokyo Lake", duration: "12 Days", image: "/images/gokyo-lake.jpg", link: "/treks/everest-region/goyko-lake" },
  { name: "Mardi Himal", duration: "7 Days", image: "/images/mardi-himal.jpg", link: "/treks/annapurna-region/mardi-himal" },
  { name: "Khopra Danda", duration: "9 Days", image: "/images/khopra-danda.jpg", link: "/treks/annapurna-region/khopra-danda" },
  { name: "Upper Mustang", duration: "12 Days", image: "/images/upper-mustang.jpg", link: "/treks/annapurna-region/upper-mustang" },
  { name: "Langtang Trek", duration: "10 Days", image: "/images/langtang-trek.jpg", link: "/treks/langtang-region/langtang-trek" },
  { name: "Langtang Gosainkunda", duration: "14 Days", image: "/images/langtang-gosainkunda.jpg", link: "/treks/langtang-region/langtang-gosainkunda" },
  { name: "Dhaulagiri Base Camp", duration: "16 Days", image: "/images/dhaulagiri-base-camp.jpg", link: "/treks/dhaulagiri-region/dhaulagiri-base-camp" },
];

const tours = [
  { name: "Kathmandu & Nagarkot", duration: "4 Days", image: "/images/kathmandu-nagarkot.jpg", link: "/tours/kathmandu-nagarkot" },
  { name: "Kathmandu & Pokhara", duration: "5 Days", image: "/images/kathmandu-pokhara.jpg", link: "/tours/kathmandu-pokhara" },
  { name: "Kathmandu & Chitwan", duration: "6 Days", image: "/images/kathmandu-chitwan.jpg", link: "/tours/kathmandu-chitwan" },
  { name: "Kathmandu & Lumbini", duration: "5 Days", image: "/images/kathmandu-lumbini.jpg", link: "/tours/kathmandu-lumbini" },
];

const ActivityCard = ({ activity }) => (
  <Link to={activity.link} className="block group">
    <div className="relative overflow-hidden rounded-2xl shadow-lg card-hover bg-white">
      <div className="aspect-[4/3] overflow-hidden">
        <img
          src={activity.image}
          alt={activity.name}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
      </div>
      <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/40 to-transparent opacity-80"></div>
      <div className="absolute bottom-0 left-0 right-0 p-6">
        <h3 className="text-white text-xl font-bold mb-2">{activity.name}</h3>
        {activity.duration && (
          <p className="text-white/90 flex items-center text-sm">
            <Calendar className="w-4 h-4 mr-2" />
            {activity.duration}
          </p>
        )}
      </div>
    </div>
  </Link>
);

const ActivityGrid = ({ activities }) => (
  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
    {activities.map((activity, index) => (
      <ActivityCard key={index} activity={activity} />
    ))}
  </div>
);

const AllActivities = () => {
  return (
    <div className="bg-white min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-600 to-primary-700 text-white py-20">
        <div className="container mx-auto px-4 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 font-display">
            All Activities
          </h1>
          <p className="text-xl md:text-2xl text-primary-100 max-w-3xl mx-auto">
            Explore our complete collection of treks and tours across Nepal
          </p>
        </div>
      </section>

      {/* Trekking Packages Section */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4 font-display">
              Trekking Packages
            </h2>
            <p className="text-lg text-slate-600">
              Challenge yourself with our incredible trekking experiences
            </p>
          </div>
          <ActivityGrid activities={treks} />
        </div>
      </section>

      {/* Tour Packages Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4 font-display">
              Tour Packages
            </h2>
            <p className="text-lg text-slate-600">
              Discover Nepal's cultural treasures and natural wonders
            </p>
          </div>
          <ActivityGrid activities={tours} />
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-primary-50 to-white">
        <div className="container mx-auto px-4 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6 font-display">
            Ready to Start Your Adventure?
          </h2>
          <p className="text-lg text-slate-600 mb-8 max-w-2xl mx-auto">
            Contact us today to customize your perfect Nepal experience
          </p>
          <Link
            to="/contact"
            className="btn-primary inline-block"
          >
            Get in Touch
          </Link>
        </div>
      </section>
    </div>
  );
};

export default AllActivities;
