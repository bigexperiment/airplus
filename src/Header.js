import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ChevronDown } from 'lucide-react';

const Header = () => {
  const [showTrekkingMenu, setShowTrekkingMenu] = useState(false);
  const [showToursMenu, setShowToursMenu] = useState(false);

  const closeMenus = () => {
    setShowTrekkingMenu(false);
    setShowToursMenu(false);
  };

  const renderMenuItems = (items, category) => (
    <ul className="space-y-2">
      {items.map((item, index) => (
        <li key={index} className="px-4 py-1 hover:bg-indigo-100">
          <Link 
            to={`/${category}/${item.link}`}
            className="block text-slate-600 hover:text-indigo-600"
            onClick={closeMenus}
          >
            {item.name}
          </Link>
        </li>
      ))}
    </ul>
  );

  const renderNestedDropdownMenu = () => (
    <div className="absolute left-0 mt-2 w-64 bg-white shadow-lg rounded-lg z-10">
      <div className="px-4 py-2 border-b">
        <h3 className="font-semibold">Everest Region</h3>
        {renderMenuItems([
          { name: "Everest Base Camp", link: "everest-region/everest-base-camp" },
          { name: "Three Passes", link: "everest-region/three-passes" },
          { name: "Gokyo Lake", link: "everest-region/goyko-lake" },
        ], "treks")}
      </div>
      <div className="px-4 py-2 border-b">
        <h3 className="font-semibold">Annapurna Region</h3>
        {renderMenuItems([
          { name: "Annapurna Base Camp", link: "annapurna-region/annapurna-base-camp" },
          { name: "Poon Hill", link: "annapurna-region/poon-hill" },
          { name: "Mardi Himal Trek", link: "annapurna-region/mardi-himal" },
          { name: "Annapurna Circuit", link: "annapurna-region/annapurna-circuit" },
          { name: "Khopra Danda Trek", link: "annapurna-region/khopra-danda" },
          { name: "Upper Mustang Trek", link: "annapurna-region/upper-mustang" },
        ], "treks")}
      </div>
      <div className="px-4 py-2 border-b">
        <h3 className="font-semibold">Langtang Region</h3>
        {renderMenuItems([
          { name: "Langtang Trek", link: "langtang-region/langtang-trek" },
          { name: "Langtang and Gosainkunda Lake Trek", link: "langtang-region/langtang-gosainkunda" },
        ], "treks")}
      </div>
      <div className="px-4 py-2 border-b">
        <h3 className="font-semibold">Manaslu Region</h3>
        {renderMenuItems([
          { name: "Manaslu Circuit Trek", link: "manaslu-region/manaslu-circuit" },
        ], "treks")}
      </div>
      <div className="px-4 py-2">
        <h3 className="font-semibold">Dhaulagiri Region</h3>
        {renderMenuItems([
          { name: "Dhaulagiri Base Camp", link: "dhaulagiri-region/dhaulagiri-base-camp" },
        ], "treks")}
      </div>
    </div>
  );

  return (
    <header className="bg-white shadow-md">
      <div className="container mx-auto px-4 py-6 flex justify-between items-center">
        <Link to="/" className="flex items-center space-x-2">
          <img src="/logo.png" alt="AirPlusNepal Logo" className="w-10 h-10" />
          <h1 className="text-3xl font-extrabold text-indigo-600 lowercase">airplusnepal</h1>
        </Link>
        <nav className="hidden md:flex space-x-8 relative">
          <div className="relative">
            <button
              onClick={() => setShowTrekkingMenu(!showTrekkingMenu)}
              className="text-slate-600 hover:text-indigo-600 transition duration-300 flex items-center"
            >
              Trekking <ChevronDown className="ml-1" />
            </button>
            {showTrekkingMenu && renderNestedDropdownMenu()}
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
                {renderMenuItems([
                  { name: "Kathmandu & Nagarkot", link: "kathmandu-nagarkot" },
                  { name: "Kathmandu & Lumbini", link: "kathmandu-lumbini" },
                  { name: "Kathmandu & Chitwan", link: "kathmandu-chitwan" },
                  { name: "Kathmandu & Pokhara", link: "kathmandu-pokhara" },
                ], "tours")}
              </div>
            )}
          </div>
          <Link to="/contact" className="text-slate-600 hover:text-indigo-600 transition duration-300">
            Contact
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
