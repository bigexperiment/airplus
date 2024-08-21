import React, { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import { ChevronDown, Menu, X } from "lucide-react";

const Header = () => {
  const [showTrekkingMenu, setShowTrekkingMenu] = useState(false);
  const [showToursMenu, setShowToursMenu] = useState(false);
  const [showMobileMenu, setShowMobileMenu] = useState(false);

  const trekkingRef = useRef(null);
  const toursRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (trekkingRef.current && !trekkingRef.current.contains(event.target)) {
        setShowTrekkingMenu(false);
      }
      if (toursRef.current && !toursRef.current.contains(event.target)) {
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
    <ul className="space-y-1">
      {items.map((item, index) => (
        <li key={index}>{item}</li>
      ))}
    </ul>
  );

  const renderDropdownMenu = (title, items) => (
    <div className="px-4 py-2 border-b">
      <h3 className="font-semibold">{title}</h3>
      {renderMenuItems(items)}
    </div>
  );

  return (
    <header className="bg-white shadow-md">
      <div className="container mx-auto px-4 py-6 flex justify-between items-center">
        <Link to="/" className="flex items-center space-x-2">
          <img src="/logo.png" alt="AirPlusNepal Logo" className="w-10 h-10" />
          <h1 className="text-3xl font-extrabold text-indigo-600 lowercase">
            airplusnepal
          </h1>
        </Link>

        <div className="md:hidden">
          <button onClick={toggleMobileMenu} aria-label="Toggle mobile menu">
            {showMobileMenu ? (
              <X className="w-6 h-6 text-slate-600" />
            ) : (
              <Menu className="w-6 h-6 text-slate-600" />
            )}
          </button>
        </div>

        <nav
          className={`${
            showMobileMenu ? "block" : "hidden"
          } md:flex md:space-x-8 relative`}
        >
          <div ref={trekkingRef} className="relative">
            <button
              onClick={() => setShowTrekkingMenu(!showTrekkingMenu)}
              className="text-slate-600 hover:text-indigo-600 transition duration-300 flex items-center"
            >
              Trekking <ChevronDown className="ml-1" />
            </button>
            {showTrekkingMenu && (
              <div className="absolute left-0 mt-2 w-48 bg-white shadow-lg rounded-lg z-10">
                {renderDropdownMenu("Everest Region", [
                  "Everest Base Camp",
                  "Three Passes",
                  "Gokyo Lake",
                ])}
                {renderDropdownMenu("Annapurna Region", [
                  "Annapurna Base Camp",
                  "Poonhill Trek",
                  "Mardi Himal Trek",
                  "Annapurna Circuit",
                  "Khopra Danda Trek",
                  "Upper Mustang Trek",
                ])}
                {renderDropdownMenu("Langtang Region", [
                  "Langtang Trek",
                  "Langtang and Gosainkunda Lake Trek",
                ])}
                {renderDropdownMenu("Manaslu Region", ["Manaslu Circuit Trek"])}
                {renderDropdownMenu("Dhaulagiri Region", [
                  "Dhaulagiri Base Camp",
                ])}
              </div>
            )}
          </div>

          <div ref={toursRef} className="relative">
            <button
              onClick={() => setShowToursMenu(!showToursMenu)}
              className="text-slate-600 hover:text-indigo-600 transition duration-300 flex items-center"
            >
              Tours <ChevronDown className="ml-1" />
            </button>
            {showToursMenu && (
              <div className="absolute left-0 mt-2 w-48 bg-white shadow-lg rounded-lg z-10">
                {renderDropdownMenu("Tours", [
                  "Kathmandu & Nagarkot Tour",
                  "Kathmandu & Lumbini Tour",
                  "Kathmandu & Chitwan Tour",
                  "Kathmandu & Pokhara Tour",
                ])}
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
  );
};

export default Header;
