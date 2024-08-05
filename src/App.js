import React, { useState } from "react";
import { Routes, Route, Link } from "react-router-dom"; // Import routing components
import ReactCountryFlag from "react-country-flag";
import {
  Plane,
  Map,
  Camera,
  Mountain,
  Heart,
  Mail,
  Phone,
  ChevronDown,
  Menu,
  X,
} from "lucide-react";
import Contact from "./Contact"; // Import the Contact component

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
  const [showTrekkingMenu, setShowTrekkingMenu] = useState(false);
  const [showToursMenu, setShowToursMenu] = useState(false);
  const [showMobileMenu, setShowMobileMenu] = useState(false);

  const toggleMobileMenu = () => {
    setShowMobileMenu(!showMobileMenu);
  };

  return (
    <div className="font-['Poppins',sans-serif] bg-slate-50 text-slate-800">
      {/* Header */}
      <header className="bg-white shadow-md">
        <div className="container mx-auto px-4 py-6 flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <img
              src="/logo.png"
              alt="AirPlusNepal Logo"
              className="w-10 h-10"
            />
            <h1 className="text-3xl font-extrabold text-indigo-600 lowercase">
              airplusnepal
            </h1>
          </div>
          <div className="md:hidden">
            <button onClick={toggleMobileMenu}>
              {showMobileMenu ? (
                <X className="w-6 h-6 text-slate-600" />
              ) : (
                <Menu className="w-6 h-6 text-slate-600" />
              )}
            </button>
          </div>
          <nav className="hidden md:flex space-x-8 relative">
            <div className="relative">
              <button
                onClick={() => setShowTrekkingMenu(!showTrekkingMenu)}
                className="text-slate-600 hover:text-indigo-600 transition duration-300 flex items-center"
              >
                Trekking <ChevronDown className="ml-1" />
              </button>
              {showTrekkingMenu && (
                <div className="absolute left-0 mt-2 w-48 bg-white shadow-lg rounded-lg z-10">
                  <div className="px-4 py-2 border-b">
                    <h3 className="font-semibold">Everest Region</h3>
                    <ul className="space-y-1">
                      <li>Everest Base Camp</li>
                      <li>Three Passes</li>
                      <li>Gokyo Lake</li>
                    </ul>
                  </div>
                  <div className="px-4 py-2 border-b">
                    <h3 className="font-semibold">Annapurna Region</h3>
                    <ul className="space-y-1">
                      <li>Annapurna Base Camp</li>
                      <li>Poonhill (Ghorepani-Ghandruk) Trekking</li>
                      <li>Mardi Himal Trek</li>
                      <li>Annappurna Circuit</li>
                      <li>Khopra Danda Trek</li>
                      <li>Upper Mustang Trek</li>
                    </ul>
                  </div>
                  <div className="px-4 py-2 border-b">
                    <h3 className="font-semibold">Langtang Region</h3>
                    <ul className="space-y-1">
                      <li>Langtang Trek</li>
                      <li>Langtang and Gosainkunda Lake Trek</li>
                    </ul>
                  </div>
                  <div className="px-4 py-2 border-b">
                    <h3 className="font-semibold">Manaslu Region</h3>
                    <ul className="space-y-1">
                      <li>Manaslu Circuit Trek</li>
                    </ul>
                  </div>
                  <div className="px-4 py-2">
                    <h3 className="font-semibold">Dhaulagiri Region</h3>
                    <ul className="space-y-1">
                      <li>Dhaulagiri Base Camp</li>
                    </ul>
                  </div>
                </div>
              )}
            </div>
            <div className="relative">
              <button
                onClick={() => setShowToursMenu(!showToursMenu)}
                className="text-slate-600 hover:text-indigo-600 transition duration-300 flex items-center"
              >
                Tours <ChevronDown className="ml-1" />
              </button>
              {showToursMenu && (
                <div className="absolute left-0 mt-2 w-48 bg-white shadow-lg rounded-lg z-10">
                  <div className="px-4 py-2">
                    <h3 className="font-semibold">Tours</h3>
                    <ul className="space-y-1">
                      <li>Kathmandu & Nagarkot Tour</li>
                      <li>Kathmandu & Lumbini Tour</li>
                      <li>Kathmandu & Chitwan Tour</li>
                      <li>Kathmandu & Pokhara Tour</li>
                    </ul>
                  </div>
                </div>
              )}
            </div>
            <Link
              to="/about"
              className="text-slate-600 hover:text-indigo-600 transition duration-300"
            >
              About
            </Link>
            <Link
              to="/contact"
              className="text-slate-600 hover:text-indigo-600 transition duration-300"
            >
              Contact
            </Link>
          </nav>
        </div>
      </header>

      {/* Mobile Menu */}
      {showMobileMenu && (
        <div className="md:hidden bg-white shadow-lg">
          <div className="flex flex-col px-4 py-2">
            <div className="relative">
              <button
                onClick={() => setShowTrekkingMenu(!showTrekkingMenu)}
                className="text-slate-600 hover:text-indigo-600 transition duration-300 flex items-center justify-between w-full"
              >
                Trekking <ChevronDown className="ml-1" />
              </button>
              {showTrekkingMenu && (
                <div className="mt-2 pl-4">
                  <div className="border-b">
                    <h3 className="font-semibold">Everest Region</h3>
                    <ul className="space-y-1">
                      <li>Everest Base Camp</li>
                      <li>Three Passes</li>
                      <li>Gokyo Lake</li>
                    </ul>
                  </div>
                  <div className="border-b">
                    <h3 className="font-semibold">Annapurna Region</h3>
                    <ul className="space-y-1">
                      <li>Annapurna Base Camp</li>
                      <li>Poonhill (Ghorepani-Ghandruk) Trekking</li>
                      <li>Mardi Himal Trek</li>
                      <li>Annappurna Circuit</li>
                      <li>Khopra Danda Trek</li>
                      <li>Upper Mustang Trek</li>
                    </ul>
                  </div>
                  <div className="border-b">
                    <h3 className="font-semibold">Langtang Region</h3>
                    <ul className="space-y-1">
                      <li>Langtang Trek</li>
                      <li>Langtang and Gosainkunda Lake Trek</li>
                    </ul>
                  </div>
                  <div className="border-b">
                    <h3 className="font-semibold">Manaslu Region</h3>
                    <ul className="space-y-1">
                      <li>Manaslu Circuit Trek</li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="font-semibold">Dhaulagiri Region</h3>
                    <ul className="space-y-1">
                      <li>Dhaulagiri Base Camp</li>
                    </ul>
                  </div>
                </div>
              )}
            </div>
            <div className="relative">
              <button
                onClick={() => setShowToursMenu(!showToursMenu)}
                className="text-slate-600 hover:text-indigo-600 transition duration-300 flex items-center justify-between w-full"
              >
                Tours <ChevronDown className="ml-1" />
              </button>
              {showToursMenu && (
                <div className="mt-2 pl-4">
                  <h3 className="font-semibold">Tours</h3>
                  <ul className="space-y-1">
                    <li>Kathmandu & Nagarkot Tour</li>
                    <li>Kathmandu & Lumbini Tour</li>
                    <li>Kathmandu & Chitwan Tour</li>
                    <li>Kathmandu & Pokhara Tour</li>
                  </ul>
                </div>
              )}
            </div>
            <Link
              to="/about"
              className="text-slate-600 hover:text-indigo-600 transition duration-300 py-2"
            >
              About
            </Link>
            <Link
              to="/contact"
              className="text-slate-600 hover:text-indigo-600 transition duration-300 py-2"
            >
              Contact
            </Link>
          </div>
        </div>
      )}

      {/* Routes */}
      <Routes>
        <Route
          path="/"
          element={
            <section className="relative h-screen">
              <img
                src="/main.jpeg" // Using the main image as the background
                alt="Nepal Landscape"
                className="w-full h-full object-cover"
                style={{ filter: "brightness(0.9)" }} // Lowering contrast for readability
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
          }
        />
        <Route path="/contact" element={<Contact />} />
        {/* Add other routes as necessary */}
      </Routes>

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
              <div className="flex items-center mb-2">
                <img
                  src="whatsapp.png"
                  alt="WhatsApp"
                  className="w-5 h-5 mr-2"
                />
                <span className="text-gray-400">
                  WhatsApp/Viber: +977 9862442639
                </span>
              </div>
              <div className="flex items-center">
                <img src="line.png" alt="Line" className="w-5 h-5 mr-2" />
                <span className="text-gray-400">Line: +977 9862442639</span>
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
                  <Link
                    to="/destinations"
                    className="text-indigo-300 hover:underline"
                  >
                    Destinations
                  </Link>
                </li>
                <li>
                  <Link
                    to="/activities"
                    className="text-indigo-300 hover:underline"
                  >
                    Activities
                  </Link>
                </li>
                <li>
                  <Link to="/about" className="text-indigo-300 hover:underline">
                    About Us
                  </Link>
                </li>
                <li>
                  <Link
                    to="/contact"
                    className="text-indigo-300 hover:underline"
                  >
                    Contact
                  </Link>
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
