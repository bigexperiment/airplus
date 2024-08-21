import React, { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import { ChevronDown, Menu, X } from "lucide-react";

const Header = () => {
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  const [showTrekkingMenu, setShowTrekkingMenu] = useState(false);
  const [showToursMenu, setShowToursMenu] = useState(false);

  const headerRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (headerRef.current && !headerRef.current.contains(event.target)) {
        setShowMobileMenu(false);
        setShowTrekkingMenu(false);
        setShowToursMenu(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const toggleMobileMenu = () => {
    setShowMobileMenu(!showMobileMenu);
  };

  const renderMenuItems = (items) => (
    <ul className="space-y-2">
      {items.map((item, index) => (
        <li key={index} className="px-4 py-1 hover:bg-indigo-100">
          <Link to="/" className="block text-slate-600 hover:text-indigo-600">
            {item}
          </Link>
        </li>
      ))}
    </ul>
  );

  const renderDropdownMenu = (title, items, isOpen, setIsOpen) => (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full text-left px-4 py-2 flex justify-between items-center hover:bg-indigo-100"
      >
        <span>{title}</span>
        <ChevronDown
          className={`ml-1 transition-transform duration-200 ${
            isOpen ? "rotate-180" : ""
          }`}
        />
      </button>
      {isOpen && (
        <div className="bg-white shadow-inner">{renderMenuItems(items)}</div>
      )}
    </div>
  );

  return (
    <header ref={headerRef} className="bg-white shadow-md">
      <div className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <Link to="/" className="flex items-center space-x-2">
            <img
              src="/logo.png"
              alt="AirPlusNepal Logo"
              className="w-10 h-10"
            />
            <h1 className="text-2xl md:text-3xl font-extrabold text-indigo-600 lowercase">
              airplusnepal
            </h1>
          </Link>

          <button
            onClick={toggleMobileMenu}
            className="md:hidden"
            aria-label="Toggle mobile menu"
          >
            {showMobileMenu ? (
              <X className="w-6 h-6 text-slate-600" />
            ) : (
              <Menu className="w-6 h-6 text-slate-600" />
            )}
          </button>
        </div>

        <nav
          className={`${
            showMobileMenu ? "max-h-screen" : "max-h-0"
          } md:max-h-screen overflow-hidden transition-all duration-300 ease-in-out md:mt-4`}
        >
          <ul className="md:flex md:space-x-6 mt-4 md:mt-0">
            <li className="mb-2 md:mb-0">
              {renderDropdownMenu(
                "Trekking",
                [
                  "Everest Base Camp",
                  "Annapurna Base Camp",
                  "Langtang Trek",
                  "Manaslu Circuit Trek",
                  "Dhaulagiri Base Camp",
                ],
                showTrekkingMenu,
                setShowTrekkingMenu
              )}
            </li>
            <li className="mb-2 md:mb-0">
              {renderDropdownMenu(
                "Tours",
                [
                  "Kathmandu & Nagarkot Tour",
                  "Kathmandu & Lumbini Tour",
                  "Kathmandu & Chitwan Tour",
                  "Kathmandu & Pokhara Tour",
                ],
                showToursMenu,
                setShowToursMenu
              )}
            </li>
            <li className="mb-2 md:mb-0">
              <Link
                to="/about"
                className="block px-4 py-2 text-slate-600 hover:text-indigo-600 hover:bg-indigo-100 transition duration-300"
              >
                About
              </Link>
            </li>
            <li>
              <Link
                to="/contact"
                className="block px-4 py-2 text-slate-600 hover:text-indigo-600 hover:bg-indigo-100 transition duration-300"
              >
                Contact
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
