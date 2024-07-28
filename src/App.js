import React from "react";
import ReactCountryFlag from "react-country-flag";
import {
  Plane,
  Map,
  Camera,
  Mountain,
  Heart,
  Mail,
  Phone,
  MapPin,
  Instagram,
  Facebook,
  Twitter,
  User,
} from "lucide-react";

const destinations = [
  { name: "Kathmandu", image: "/api/placeholder/800/500" },
  { name: "Pokhara", image: "/api/placeholder/800/500" },
  { name: "Chitwan", image: "/api/placeholder/800/500" },
];

const activities = [
  {
    name: "Trekking",
    icon: <Mountain className="w-12 h-12 text-emerald-500" />,
  },
  {
    name: "Cultural Tours",
    icon: <Camera className="w-12 h-12 text-purple-500" />,
  },
  {
    name: "Adventure Sports",
    icon: <Map className="w-12 h-12 text-orange-500" />,
  },
];

const testimonials = [
  {
    name: "John Doe",
    text: "AirPlusNepal turned my Nepal dreams into an unforgettable reality. Absolutely stellar service!",
  },
  {
    name: "Jane Smith",
    text: "From the majestic Himalayas to the cultural richness of Kathmandu, every moment was perfect.",
  },
];

const App = () => {
  return (
    <div className="font-['Poppins',sans-serif] bg-slate-50 text-slate-800">
      {/* Header */}
      <header className="bg-white shadow-md">
        <div className="container mx-auto px-4 py-6 flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <Plane className="w-10 h-10 text-indigo-600" />
            <h1 className="text-3xl font-extrabold text-indigo-600">
              AirPlusNepal
            </h1>
          </div>
          <nav className="hidden md:flex space-x-8">
            <a
              href="#"
              className="text-slate-600 hover:text-indigo-600 transition duration-300"
            >
              Destinations
            </a>
            <a
              href="#"
              className="text-slate-600 hover:text-indigo-600 transition duration-300"
            >
              Activities
            </a>
            <a
              href="#"
              className="text-slate-600 hover:text-indigo-600 transition duration-300"
            >
              About
            </a>
            <a
              href="#"
              className="text-slate-600 hover:text-indigo-600 transition duration-300"
            >
              Contact
            </a>
          </nav>
          <div className="flex items-center space-x-4">
            <a
              href="tel:+9771234567890"
              className="text-slate-600 hover:text-indigo-600 transition duration-300"
            >
              <Phone className="inline w-5 h-5 mr-1" />
            </a>
            <a
              href="mailto:info@airplusnepal.com"
              className="text-slate-600 hover:text-indigo-600 transition duration-300"
            >
              <Mail className="inline w-5 h-5" />
            </a>
          </div>
        </div>
      </header>
      {/* Hero Section with Main Image */}
      <section className="relative h-screen">
        <img
          src="/main.jpeg" // Using the main image as the background
          alt="Nepal Landscape"
          className="w-full h-full object-cover"
          style={{ filter: "brightness(0.5)" }} // Lowering contrast for readability
        />
        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="text-center text-white px-4">
            <h2 className="text-5xl md:text-7xl font-extrabold mb-6 leading-tight">
              Discover the Magic <br />
              of Nepal
            </h2>
            <p className="text-xl md:text-2xl mb-10 max-w-2xl mx-auto">
              Embark on a journey through breathtaking landscapes, ancient
              cultures, and unforgettable adventures
            </p>
            <button className="bg-indigo-600 hover:bg-indigo-700 text-white text-lg font-semibold py-3 px-8 rounded-full transition duration-300 transform hover:scale-105">
              Start Your Journey
            </button>
          </div>
        </div>
      </section>
      {/* Destinations */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-16">
            Popular Destinations
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {destinations.map((dest, index) => (
              <div
                key={index}
                className="relative overflow-hidden rounded-2xl shadow-lg group"
              >
                <img
                  src={dest.image}
                  alt={dest.name}
                  className="w-full h-80 object-cover transition duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-70"></div>
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <h3 className="text-white text-2xl font-bold mb-2">
                    {dest.name}
                  </h3>
                  <button className="text-white bg-indigo-600 hover:bg-indigo-700 px-4 py-2 rounded-full text-sm transition duration-300">
                    Explore
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* About */}
      <section className="py-24 bg-indigo-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-8">About AirPlusNepal</h2>
            <p className="text-xl text-slate-600 mb-12 leading-relaxed">
              At AirPlusNepal, we're passionate about showcasing the wonders of
              Nepal. From the towering peaks of the Himalayas to the lush
              jungles of Chitwan, we curate experiences that blend adventure,
              culture, and luxury. Our expert guides and personalized service
              ensure your journey through Nepal is nothing short of
              extraordinary.
            </p>
            <div className="flex flex-col md:flex-row justify-center space-y-4 md:space-y-0 md:space-x-6">
              <button className="bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-3 px-8 rounded-full transition duration-300">
                Our Services
              </button>
              <button className="bg-emerald-500 hover:bg-emerald-600 text-white font-semibold py-3 px-8 rounded-full transition duration-300">
                Contact Us
              </button>
            </div>
          </div>
        </div>
      </section>
      {/* Director's Message */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto bg-indigo-50 rounded-3xl overflow-hidden shadow-xl">
            <div className="flex flex-col md:flex-row items-center p-8">
              <div className="md:flex-shrink-0">
                <img
                  src="/madan.JPG"
                  alt="Madan Bhandari"
                  className="w-48 h-48 object-cover rounded-full mx-auto"
                />
              </div>
              <div className="md:ml-8 mt-4 md:mt-0">
                <h2 className="text-3xl font-bold mb-6 text-indigo-600 text-center md:text-left">
                  Message from Director
                </h2>
                <p className="text-slate-600 leading-relaxed">
                  Welcome to AirPlus Travels and Treks! As the Director, I am
                  thrilled to invite you to explore the world with us. Our
                  dedicated team is committed to providing exceptional travel
                  experiences, ensuring your journeys are seamless, memorable
                  and filled with adventure.
                </p>
                <p className="text-slate-600 leading-relaxed mt-4">
                  Whether you're seeking a serene getaway, a cultural expedition
                  or an adrenaline-pumping adventure, we have something for
                  every traveler. We pride ourselves on our personalized service
                  and attention to detail.
                </p>
                <p className="text-slate-600 leading-relaxed mt-4">
                  Thank you for choosing AirPlus Travels & Treks. We look
                  forward to creating unforgettable memories with you.
                </p>
                <p className="text-indigo-600 italic text-lg font-semibold mt-6 text-center md:text-left">
                  <span style={{ fontFamily: "cursive" }}>Madan Bhandari</span>,
                  Director
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Activities */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-16">
            Experiences Await
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {activities.map((activity, index) => (
              <div
                key={index}
                className="bg-slate-50 rounded-xl shadow-lg p-8 text-center transition duration-300 hover:shadow-2xl"
              >
                <div className="mb-6">{activity.icon}</div>
                <h3 className="text-2xl font-bold mb-4">{activity.name}</h3>
                <p className="text-slate-600">
                  Immerse yourself in the beauty and culture of Nepal through
                  our carefully curated experiences.
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* Testimonials */}
      <section className="py-24 bg-indigo-600 text-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-16">
            What Our Travelers Say
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="bg-indigo-700 rounded-xl p-8 shadow-xl"
              >
                <p className="text-xl mb-6 italic">"{testimonial.text}"</p>
                <p className="font-bold text-indigo-200">
                  - {testimonial.name}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* Gallery */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-16">
            Capture the Moments
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[...Array(8)].map((_, index) => (
              <img
                key={index}
                src={`/api/placeholder/${400 + index}/${300 + index}`}
                alt={`Gallery image ${index + 1}`}
                className="w-full h-64 object-cover rounded-xl shadow-md hover:shadow-xl transition duration-300"
              />
            ))}
          </div>
        </div>
      </section>
      {/* Reviews */}
      <section className="py-24 bg-emerald-50">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-12">Traveler Reviews</h2>
          <div className="flex justify-center items-center mb-8">
            {[...Array(5)].map((_, index) => (
              <Heart
                key={index}
                className="w-10 h-10 text-emerald-500 fill-current"
              />
            ))}
            <span className="ml-4 text-4xl font-bold text-emerald-600">
              4.8 / 5
            </span>
          </div>
          <p className="text-xl text-slate-600">
            Based on 150+ happy travelers
          </p>
        </div>
      </section>
      {/* Footer */}
      <footer className="bg-gray-900 text-white py-10">
        <div className="container mx-auto px-6">
          <h3 className="text-4xl font-bold text-center mb-6">Get in Touch</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Head Office Section */}
            <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
              <h4 className="text-2xl font-semibold mb-4">
                Head Office (Nepal)
              </h4>
              <p className="text-gray-400 mb-2">Madan Bhandari</p>
              <p className="text-gray-400 mb-4">
                Bhagawatisthan, Thamel, Kathmandu, Nepal
              </p>
              <div className="flex items-center mb-2">
                <Phone className="w-5 h-5 mr-2 text-indigo-500" />
                <span className="text-gray-400">
                  +977 1 4525454 / +977 9862442639
                </span>
              </div>
              <div className="flex items-center">
                <Mail className="w-5 h-5 mr-2 text-indigo-500" />
                <span className="text-gray-400">airplusnepal@gmail.com</span>
              </div>
            </div>

            {/* Global Representatives Section */}
            <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
              <h4 className="text-2xl font-semibold mb-4">
                Global Representatives
              </h4>
              <div className="space-y-4">
                <div className="flex items-center">
                  <ReactCountryFlag
                    countryCode="AU"
                    svg
                    style={{ width: "2em", height: "2em" }}
                  />
                  <div className="ml-3">
                    <span className="font-semibold">Australia:</span>
                    <p className="text-gray-400">
                      Hom Nath Bhandari, +61 404377425
                    </p>
                    <a
                      href="mailto:homnathbhandari2016@gmail.com"
                      className="text-indigo-300 hover:underline"
                    >
                      homnathbhandari2016@gmail.com
                    </a>
                  </div>
                </div>
                <div className="flex items-center">
                  <ReactCountryFlag
                    countryCode="CA"
                    svg
                    style={{ width: "2em", height: "2em" }}
                  />
                  <div className="ml-3">
                    <span className="font-semibold">Canada:</span>
                    <p className="text-gray-400">
                      Subash Bhandari, +14374109840
                    </p>
                    <a
                      href="mailto:Subashbhandari1902@gmail.com"
                      className="text-indigo-300 hover:underline"
                    >
                      Subashbhandari1902@gmail.com
                    </a>
                  </div>
                </div>
                <div className="flex items-center">
                  <ReactCountryFlag
                    countryCode="JP"
                    svg
                    style={{ width: "2em", height: "2em" }}
                  />
                  <div className="ml-3">
                    <span className="font-semibold">Japan:</span>
                    <p className="text-gray-400">
                      バンダリ　ラズ, 080-7850-6412
                    </p>
                    <a
                      href="mailto:bhandariraju575@gmail.com"
                      className="text-indigo-300 hover:underline"
                    >
                      bhandariraju575@gmail.com
                    </a>
                  </div>
                </div>
                <div className="flex items-center">
                  <ReactCountryFlag
                    countryCode="US"
                    svg
                    style={{ width: "2em", height: "2em" }}
                  />
                  <div className="ml-3">
                    <span className="font-semibold">USA:</span>
                    <p className="text-gray-400">
                      Ganesh Adhikari, 714-485-9360
                    </p>
                    <a
                      href="mailto:ganeshadhikari332@gmail.com"
                      className="text-indigo-300 hover:underline"
                    >
                      ganeshadhikari332@gmail.com
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Quick Links Section */}
            <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
              <h4 className="text-2xl font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2">
                <li>
                  <a href="#" className="text-indigo-300 hover:underline">
                    Destinations
                  </a>
                </li>
                <li>
                  <a href="#" className="text-indigo-300 hover:underline">
                    Activities
                  </a>
                </li>
                <li>
                  <a href="#" className="text-indigo-300 hover:underline">
                    About Us
                  </a>
                </li>
                <li>
                  <a href="#" className="text-indigo-300 hover:underline">
                    Contact
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="mt-8 border-t border-gray-600 text-center pt-4">
            <p className="text-gray-400">
              &copy; 2024 AirPlusNepal. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;
