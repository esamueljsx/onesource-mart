import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Navbar from "./components/layouts/Navbar";
import Footer from "./components/layouts/Footer";

import Home from "@/pages/Home";
import About from "@/pages/About";
import Locations from "@/pages/Locations";
import Contact from "@/pages/Contact";
import Promotions from "@/pages/Promotions";
// import CTA from "./components/ui/cta";

function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col bg-[#f6f6f6] py-6 font-satoshi space-y-12.5">
        <Navbar />
        <main className="flex-1">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/locations" element={<Locations />} />
            <Route path="/promotions" element={<Promotions />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        {/* <CTA /> */}
        <Footer />
      </div>
    </Router>
  );
}

export default App;
