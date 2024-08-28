// src/pages/NotFound.js
import React from "react";



const NotFound = () => {
  return (
    <div className="font-['Poppins',sans-serif] bg-slate-50 text-slate-800">
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold mb-6">404 - Page Not Found</h2>
          <p className="text-lg mb-6">
            Sorry, the page you are looking for does not exist.
          </p>
          <a href="/" className="text-indigo-600 hover:underline">
            Go back to Home
          </a>
        </div>
      </section>
    </div>
  );
};

export default NotFound;
