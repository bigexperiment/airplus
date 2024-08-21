// src/components/Header.js
import React, { useState } from "react";
import { Phone, Mail, ChevronDown } from "lucide-react";
import { Link } from "react-router-dom";
import ReactCountryFlag from "react-country-flag";

const Header = () => {
  const [showTrekkingMenu, setShowTrekkingMenu] = useState(false);
  const [showToursMenu, setShowToursMenu] = useState(false);

  return (
    <header className="bg-white shadow-md">
      <div className="container mx-auto px-4 py-6 flex justify-between items-center">
        <div className="flex items-center space-x-2">
          <img src="/logo.png" alt="AirPlusNepal Logo" className="w-10 h-10" />
          <h1 className="text-3xl font-extrabold text-indigo-600 lowercase">
            airplusnepal
          </h1>
        </div>
        <nav className="hidden md:flex space-x-8 relative">
          <div className="relative">
            <button
              onClick={() => setShowTrekkingMenu(!showTrekkingMenu)}
              className="flex items-center space-x-1 text-slate-800"
            >
              <span>Trekking</span>
              <ChevronDown className="w-5 h-5" />
            </button>
            {showTrekkingMenu && (
              <ul className="absolute top-full left-0 mt-2 bg-white shadow-lg">
                <li>
                  <Link
                    to="/trekking/everest-base-camp"
                    className="block px-4 py-2"
                  >
                    Everest Base Camp
                  </Link>
                </li>
                <li>
                  <Link
                    to="/trekking/annapurna-circuit"
                    className="block px-4 py-2"
                  >
                    Annapurna Circuit
                  </Link>
                </li>
              </ul>
            )}
          </div>
          <div className="relative">
            <button
              onClick={() => setShowToursMenu(!showToursMenu)}
              className="flex items-center space-x-1 text-slate-800"
            >
              <span>Tours</span>
              <ChevronDown className="w-5 h-5" />
            </button>
            {showToursMenu && (
              <ul className="absolute top-full left-0 mt-2 bg-white shadow-lg">
                <li>
                  <Link to="/tours/kathmandu" className="block px-4 py-2">
                    Kathmandu
                  </Link>
                </li>
                <li>
                  <Link to="/tours/pokhara" className="block px-4 py-2">
                    Pokhara
                  </Link>
                </li>
              </ul>
            )}
          </div>
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
  );
};

export default Header;
