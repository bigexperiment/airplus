import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./Home";
import Contact from "./Contact";
import Footer from "./Footer";
import Header from "./Header";
import NotFound from "./NotFound";

const App = () => {
  return (
    <Router>
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<NotFound />} />{" "}
          {/* Catch-all route for 404 errors */}
        </Routes>
      </main>
      <Footer />
    </Router>
  );
};

export default App;
