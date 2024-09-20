import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./Home";
import Contact from "./Contact";
import Footer from "./Footer";
import Header from "./Header";
import NotFound from "./NotFound";
import AllActivities from "./AllActivities";  // Make sure this import is correct

// Import trek components
import EverestBaseCamp from "./treks/EverestBaseCamp";
import ThreePasses from "./treks/ThreePasses";
import GoykoLake from "./treks/GoykoLake";
import AnnapurnaBaseCamp from "./treks/AnnapurnaBaseCamp";
import PoonHill from "./treks/PoonHill";
import MardiHimal from "./treks/MardiHimal";
import AnnapurnaCircuit from "./treks/AnnapurnaCircuit";
import KhopraDanda from "./treks/KhopraDanda";
import UpperMustang from "./treks/UpperMustang";
import LangtangTrek from "./treks/LangtangTrek";
import LangtangGosainkunda from "./treks/LangtangGosainkunda";
import ManasluCircuit from "./treks/ManasluCircuit";
import DhaulagiriBaseCamp from "./treks/DhaulagiriBaseCamp";

// Import tour components
import KathmanduNagarkot from "./tours/KathmanduNagarkot";
import KathmanduLumbini from "./tours/KathmanduLumbini";
import KathmanduChitwan from "./tours/KathmanduChitwan";
import KathmanduPokhara from "./tours/KathmanduPokhara";

const App = () => {
  return (
    <Router>
      <div className="font-['Inter',sans-serif] bg-slate-50 text-slate-800 min-h-screen flex flex-col">
        <Header />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/all-activities" element={<AllActivities />} />
            
            {/* Trek routes */}
            <Route path="/treks/everest-region/everest-base-camp" element={<EverestBaseCamp />} />
            <Route path="/treks/everest-region/three-passes" element={<ThreePasses />} />
            <Route path="/treks/everest-region/goyko-lake" element={<GoykoLake />} />
            <Route path="/treks/annapurna-region/annapurna-base-camp" element={<AnnapurnaBaseCamp />} />
            <Route path="/treks/annapurna-region/poon-hill" element={<PoonHill />} />
            <Route path="/treks/annapurna-region/mardi-himal" element={<MardiHimal />} />
            <Route path="/treks/annapurna-region/annapurna-circuit" element={<AnnapurnaCircuit />} />
            <Route path="/treks/annapurna-region/khopra-danda" element={<KhopraDanda />} />
            <Route path="/treks/annapurna-region/upper-mustang" element={<UpperMustang />} />
            <Route path="/treks/langtang-region/langtang-trek" element={<LangtangTrek />} />
            <Route path="/treks/langtang-region/langtang-gosainkunda" element={<LangtangGosainkunda />} />
            <Route path="/treks/manaslu-region/manaslu-circuit" element={<ManasluCircuit />} />
            <Route path="/treks/dhaulagiri-region/dhaulagiri-base-camp" element={<DhaulagiriBaseCamp />} />
            
            {/* Tour routes */}
            <Route path="/tours/kathmandu-nagarkot" element={<KathmanduNagarkot />} />
            <Route path="/tours/kathmandu-lumbini" element={<KathmanduLumbini />} />
            <Route path="/tours/kathmandu-chitwan" element={<KathmanduChitwan />} />
            <Route path="/tours/kathmandu-pokhara" element={<KathmanduPokhara />} />
            
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
