import React from "react";
import ReactCountryFlag from "react-country-flag";
import { Link } from "react-router-dom";
import { Phone, Mail, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-slate-900 text-slate-300 pt-16 pb-8">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 mb-12">
          {/* Head Office Section */}
          <div className="space-y-4">
            <h4 className="text-2xl font-bold text-white mb-6 font-display">Head Office</h4>
            <div className="space-y-3">
              <p className="text-primary-300 font-semibold">Madan Bhandari</p>
              <div className="flex items-start gap-2">
                <MapPin className="w-5 h-5 text-primary-400 flex-shrink-0 mt-1" />
                <p className="text-slate-400">
                  Bhagawatisthan, Thamel<br />
                  Kathmandu, Nepal
                </p>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-5 h-5 text-primary-400" />
                <span className="text-slate-400">
                  +977 1 4525454 / +977 9862442639
                </span>
              </div>
              <div className="flex items-center gap-2">
                <img src="whatsapp.png" alt="WhatsApp" className="w-5 h-5" />
                <span className="text-slate-400">
                  WhatsApp/Viber: +977 9862442639
                </span>
              </div>
              <div className="flex items-center gap-2">
                <img src="line.png" alt="Line" className="w-5 h-5" />
                <span className="text-slate-400">Line: +977 9862442639</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-5 h-5 text-primary-400" />
                <a
                  href="mailto:airplusnepal@gmail.com"
                  className="text-slate-400 hover:text-primary-300 transition-colors"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  airplusnepal@gmail.com
                </a>
              </div>
            </div>
          </div>

          {/* Global Representatives Section */}
          <div className="space-y-4">
            <h4 className="text-2xl font-bold text-white mb-6 font-display">
              Global Representatives
            </h4>
            <div className="space-y-5">
              {/* Australia */}
              <div className="flex items-start gap-3">
                <ReactCountryFlag
                  countryCode="AU"
                  svg
                  className="text-3xl"
                  style={{ width: "2em", height: "2em" }}
                />
                <div>
                  <span className="font-semibold text-white">Australia</span>
                  <p className="text-slate-400 text-sm">
                    Hom Nath Bhandari
                  </p>
                  <p className="text-slate-400 text-sm">+61 404377425</p>
                  <a
                    href="mailto:homnathbhandari2016@gmail.com"
                    className="text-primary-400 hover:text-primary-300 transition-colors text-sm"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    homnathbhandari2016@gmail.com
                  </a>
                </div>
              </div>
              {/* Canada */}
              <div className="flex items-start gap-3">
                <ReactCountryFlag
                  countryCode="CA"
                  svg
                  className="text-3xl"
                  style={{ width: "2em", height: "2em" }}
                />
                <div>
                  <span className="font-semibold text-white">Canada</span>
                  <p className="text-slate-400 text-sm">Subash Bhandari</p>
                  <p className="text-slate-400 text-sm">+14374109840</p>
                  <a
                    href="mailto:Subashbhandari1902@gmail.com"
                    className="text-primary-400 hover:text-primary-300 transition-colors text-sm"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Subashbhandari1902@gmail.com
                  </a>
                </div>
              </div>
              {/* Japan */}
              <div className="flex items-start gap-3">
                <ReactCountryFlag
                  countryCode="JP"
                  svg
                  className="text-3xl"
                  style={{ width: "2em", height: "2em" }}
                />
                <div>
                  <span className="font-semibold text-white">Japan</span>
                  <p className="text-slate-400 text-sm">バンダリ　ラズ</p>
                  <p className="text-slate-400 text-sm">080-7850-6412</p>
                  <a
                    href="mailto:bhandariraju575@gmail.com"
                    className="text-primary-400 hover:text-primary-300 transition-colors text-sm"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    bhandariraju575@gmail.com
                  </a>
                </div>
              </div>
              {/* USA */}
              <div className="flex items-start gap-3">
                <ReactCountryFlag
                  countryCode="US"
                  svg
                  className="text-3xl"
                  style={{ width: "2em", height: "2em" }}
                />
                <div>
                  <span className="font-semibold text-white">USA</span>
                  <p className="text-slate-400 text-sm">Ganesh Adhikari</p>
                  <p className="text-slate-400 text-sm">714-485-9360</p>
                  <a
                    href="mailto:ganeshadhikari332@gmail.com"
                    className="text-primary-400 hover:text-primary-300 transition-colors text-sm"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    ganeshadhikari332@gmail.com
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Quick Links Section */}
          <div className="space-y-4">
            <h4 className="text-2xl font-bold text-white mb-6 font-display">Quick Links</h4>
            <ul className="space-y-3">
              <li>
                <Link
                  to="/all-activities"
                  className="text-slate-400 hover:text-primary-300 transition-colors inline-flex items-center group"
                >
                  <span className="w-1.5 h-1.5 bg-primary-400 rounded-full mr-3 group-hover:scale-150 transition-transform"></span>
                  Destinations
                </Link>
              </li>
              <li>
                <Link
                  to="/all-activities"
                  className="text-slate-400 hover:text-primary-300 transition-colors inline-flex items-center group"
                >
                  <span className="w-1.5 h-1.5 bg-primary-400 rounded-full mr-3 group-hover:scale-150 transition-transform"></span>
                  Activities
                </Link>
              </li>
              <li>
                <Link
                  to="/#about"
                  className="text-slate-400 hover:text-primary-300 transition-colors inline-flex items-center group"
                >
                  <span className="w-1.5 h-1.5 bg-primary-400 rounded-full mr-3 group-hover:scale-150 transition-transform"></span>
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="text-slate-400 hover:text-primary-300 transition-colors inline-flex items-center group"
                >
                  <span className="w-1.5 h-1.5 bg-primary-400 rounded-full mr-3 group-hover:scale-150 transition-transform"></span>
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom section */}
        <div className="border-t border-slate-800 pt-8 mt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-slate-400 text-sm">
              &copy; 2024 AirPlusNepal. All rights reserved.
            </p>
            <div className="text-sm text-slate-500 text-center md:text-right">
              <p>Company reg: 194768/075/076 | Tourism license: 2605 | VAT: 606643944</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
