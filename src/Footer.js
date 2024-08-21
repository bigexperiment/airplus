// src/components/Footer.js
import React from "react";
import ReactCountryFlag from "react-country-flag";
import { Phone, Mail } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div>
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

export default Footer;
