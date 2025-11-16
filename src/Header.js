import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ChevronDown, Menu, X } from 'lucide-react';

const Header = () => {
  const [showTrekkingMenu, setShowTrekkingMenu] = useState(false);
  const [showToursMenu, setShowToursMenu] = useState(false);
  const [showMobileMenu, setShowMobileMenu] = useState(false);

  const closeMenus = () => {
    setShowTrekkingMenu(false);
    setShowToursMenu(false);
    setShowMobileMenu(false);
  };

  const renderMenuItems = (items, category) => (
    <ul className="space-y-1">
      {items.map((item, index) => (
        <li key={index} className="hover:bg-primary-50 rounded-md transition-colors">
          <Link
            to={`/${category}/${item.link}`}
            className="block px-4 py-2 text-slate-700 hover:text-primary-600 transition-colors"
            onClick={closeMenus}
          >
            {item.name}
          </Link>
        </li>
      ))}
    </ul>
  );

  const renderNestedDropdownMenu = () => (
    <div className="absolute left-0 mt-3 w-72 bg-white shadow-xl rounded-2xl border border-slate-100 overflow-hidden z-20">
      <div className="p-4 border-b border-slate-100">
        <h3 className="font-semibold text-slate-900 mb-2">Everest Region</h3>
        {renderMenuItems([
          { name: "Everest Base Camp", link: "everest-region/everest-base-camp" },
          { name: "Three Passes", link: "everest-region/three-passes" },
          { name: "Gokyo Lake", link: "everest-region/goyko-lake" },
        ], "treks")}
      </div>
      <div className="p-4 border-b border-slate-100">
        <h3 className="font-semibold text-slate-900 mb-2">Annapurna Region</h3>
        {renderMenuItems([
          { name: "Annapurna Base Camp", link: "annapurna-region/annapurna-base-camp" },
          { name: "Poon Hill", link: "annapurna-region/poon-hill" },
          { name: "Mardi Himal Trek", link: "annapurna-region/mardi-himal" },
          { name: "Annapurna Circuit", link: "annapurna-region/annapurna-circuit" },
          { name: "Khopra Danda Trek", link: "annapurna-region/khopra-danda" },
          { name: "Upper Mustang Trek", link: "annapurna-region/upper-mustang" },
        ], "treks")}
      </div>
      <div className="p-4 border-b border-slate-100">
        <h3 className="font-semibold text-slate-900 mb-2">Langtang Region</h3>
        {renderMenuItems([
          { name: "Langtang Trek", link: "langtang-region/langtang-trek" },
          { name: "Langtang and Gosainkunda Lake Trek", link: "langtang-region/langtang-gosainkunda" },
        ], "treks")}
      </div>
      <div className="p-4 border-b border-slate-100">
        <h3 className="font-semibold text-slate-900 mb-2">Manaslu Region</h3>
        {renderMenuItems([
          { name: "Manaslu Circuit Trek", link: "manaslu-region/manaslu-circuit" },
        ], "treks")}
      </div>
      <div className="p-4">
        <h3 className="font-semibold text-slate-900 mb-2">Dhaulagiri Region</h3>
        {renderMenuItems([
          { name: "Dhaulagiri Base Camp", link: "dhaulagiri-region/dhaulagiri-base-camp" },
        ], "treks")}
      </div>
    </div>
  );

  return (
    <header className="bg-white/95 backdrop-blur-md shadow-sm sticky top-0 z-50 border-b border-slate-100">
      <div className="container mx-auto px-4 lg:px-8 py-4">
        <div className="flex justify-between items-center">
          <Link to="/" className="flex items-center space-x-3 group">
            <img src="/logo.png" alt="AirPlusNepal Logo" className="w-10 h-10 transition-transform group-hover:scale-110" />
            <h1 className="text-2xl md:text-3xl font-bold text-primary-600 lowercase tracking-tight">
              airplusnepal
            </h1>
          </Link>

          {/* Mobile menu button */}
          <button
            onClick={() => setShowMobileMenu(!showMobileMenu)}
            className="md:hidden p-2 rounded-lg hover:bg-slate-100 transition-colors"
            aria-label="Toggle menu"
          >
            {showMobileMenu ? (
              <X className="h-6 w-6 text-slate-700" />
            ) : (
              <Menu className="h-6 w-6 text-slate-700" />
            )}
          </button>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8 items-center relative">
            <div className="relative">
              <button
                onClick={() => setShowTrekkingMenu(!showTrekkingMenu)}
                className="text-slate-700 hover:text-primary-600 transition-colors font-medium flex items-center gap-1"
              >
                Trekking <ChevronDown className={`w-4 h-4 transition-transform ${showTrekkingMenu ? 'rotate-180' : ''}`} />
              </button>
              {showTrekkingMenu && renderNestedDropdownMenu()}
            </div>
            <div className="relative">
              <button
                onClick={() => setShowToursMenu(!showToursMenu)}
                className="text-slate-700 hover:text-primary-600 transition-colors font-medium flex items-center gap-1"
              >
                Tours <ChevronDown className={`w-4 h-4 transition-transform ${showToursMenu ? 'rotate-180' : ''}`} />
              </button>
              {showToursMenu && (
                <div className="absolute left-0 mt-3 w-56 bg-white shadow-xl rounded-2xl border border-slate-100 overflow-hidden z-20">
                  <div className="p-2">
                    {renderMenuItems([
                      { name: "Kathmandu & Nagarkot", link: "kathmandu-nagarkot" },
                      { name: "Kathmandu & Lumbini", link: "kathmandu-lumbini" },
                      { name: "Kathmandu & Chitwan", link: "kathmandu-chitwan" },
                      { name: "Kathmandu & Pokhara", link: "kathmandu-pokhara" },
                    ], "tours")}
                  </div>
                </div>
              )}
            </div>
            <Link
              to="/contact"
              className="bg-primary-600 hover:bg-primary-700 text-white px-6 py-2 rounded-full font-medium transition-all hover:shadow-lg"
            >
              Contact
            </Link>
          </nav>
        </div>

        {/* Mobile Navigation */}
        {showMobileMenu && (
          <nav className="md:hidden mt-4 pb-4 border-t border-slate-100 pt-4">
            <div className="space-y-2">
              <div>
                <button
                  onClick={() => setShowTrekkingMenu(!showTrekkingMenu)}
                  className="w-full text-left px-4 py-3 text-slate-700 hover:bg-slate-50 rounded-lg transition-colors flex items-center justify-between font-medium"
                >
                  Trekking
                  <ChevronDown className={`w-4 h-4 transform ${showTrekkingMenu ? 'rotate-180' : ''} transition-transform`} />
                </button>
                {showTrekkingMenu && (
                  <div className="mt-2 ml-4">
                    {renderNestedDropdownMenu()}
                  </div>
                )}
              </div>
              <div>
                <button
                  onClick={() => setShowToursMenu(!showToursMenu)}
                  className="w-full text-left px-4 py-3 text-slate-700 hover:bg-slate-50 rounded-lg transition-colors flex items-center justify-between font-medium"
                >
                  Tours
                  <ChevronDown className={`w-4 h-4 transform ${showToursMenu ? 'rotate-180' : ''} transition-transform`} />
                </button>
                {showToursMenu && (
                  <div className="mt-2 ml-4 bg-slate-50 rounded-lg p-2">
                    {renderMenuItems([
                      { name: "Kathmandu & Nagarkot", link: "kathmandu-nagarkot" },
                      { name: "Kathmandu & Lumbini", link: "kathmandu-lumbini" },
                      { name: "Kathmandu & Chitwan", link: "kathmandu-chitwan" },
                      { name: "Kathmandu & Pokhara", link: "kathmandu-pokhara" },
                    ], "tours")}
                  </div>
                )}
              </div>
              <Link
                to="/contact"
                className="block px-4 py-3 text-white bg-primary-600 hover:bg-primary-700 rounded-lg transition-colors text-center font-medium"
                onClick={closeMenus}
              >
                Contact
              </Link>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
