import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [openSubmenu, setOpenSubmenu] = useState(null);

  const toggleMenu = () => setIsOpen(!isOpen);
  const toggleSubmenu = (submenu) => setOpenSubmenu(openSubmenu === submenu ? null : submenu);

  const trekking = {
    'Everest Region': ['EVEREST BASE CAMP', 'THREE PASSES', 'GOKYO LAKE'],
    'Annapurna Region': [
      'ANNAPURNA BASE CAMP',
      'POONHILL (GHOREPANI-GHANDRUK) TREKKING',
      'MARDI HIMAL TREK',
      'ANNAPURNA CIRCUIT',
      'KHOPRA DANDA TREK',
      'UPPER MUSTANG TREK'
    ],
    'Langtang Region': ['LANGTANG TREK', 'LANGTANG AND GOSAINKUNDA LAKE TREK'],
    'Manaslu Region': ['MANASLU CIRCUIT TREK'],
    'Dhaulagiri Region': ['DHAULAGIRI BASE CAMP']
  };

  return (
    <nav className="bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <Link to="/" className="text-white font-bold">AirPlus Nepal</Link>
            </div>
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-4">
                <Link to="/" className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Home</Link>
                <div className="relative group">
                  <button onClick={() => toggleSubmenu('trekking')} className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">
                    Trekking
                  </button>
                  {openSubmenu === 'trekking' && (
                    <div className="absolute left-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
                      <div className="py-1" role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
                        {Object.entries(trekking).map(([region, treks]) => (
                          <div key={region} className="group relative">
                            <button className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900 w-full text-left">
                              {region}
                            </button>
                            <div className="absolute left-full top-0 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 hidden group-hover:block">
                              {treks.map((trek) => (
                                <Link
                                  key={trek}
                                  to={`/trekking/${region.toLowerCase().replace(/\s+/g, '-')}/${trek.toLowerCase().replace(/\s+/g, '-')}`}
                                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                                >
                                  {trek}
                                </Link>
                              ))}
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
                <Link to="/about" className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">About</Link>
                <Link to="/contact" className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Contact</Link>
              </div>
            </div>
          </div>
          <div className="-mr-2 flex md:hidden">
            <button onClick={toggleMenu} type="button" className="bg-gray-800 inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white" aria-controls="mobile-menu" aria-expanded="false">
              <span className="sr-only">Open main menu</span>
              {!isOpen ? (
                <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              ) : (
                <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden" id="mobile-menu">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link to="/" className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium">Home</Link>
            <button onClick={() => toggleSubmenu('trekking')} className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium w-full text-left">
              Trekking
            </button>
            {openSubmenu === 'trekking' && (
              <div className="pl-4">
                {Object.entries(trekking).map(([region, treks]) => (
                  <div key={region} className="mb-2">
                    <p className="text-gray-500 font-semibold">{region}</p>
                    {treks.map((trek) => (
                      <Link
                        key={trek}
                        to={`/trekking/${region.toLowerCase().replace(/\s+/g, '-')}/${trek.toLowerCase().replace(/\s+/g, '-')}`}
                        className="block px-3 py-1 text-sm text-gray-400 hover:bg-gray-700 hover:text-white rounded-md"
                      >
                        {trek}
                      </Link>
                    ))}
                  </div>
                ))}
              </div>
            )}
            <Link to="/about" className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium">About</Link>
            <Link to="/contact" className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium">Contact</Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navigation;