import { useState } from "react";

import NavBar from "./components/NavBar";
import Header from "./components/Header";
import Plans from "./components/Plans";
import Footer from "./components/Footer";
import MobileNav from "./components/MobileNav";
import Testimonial from "./components/Testimonial";

function App() {
  const [isMobile, setIsMobile] = useState(false);
  return (
    <main>
    {isMobile && (
      <MobileNav
        isMobile={isMobile}
        setIsMobile={setIsMobile}
      />
    )}
    <NavBar setIsMobileNavOpen={setIsMobile} />
    <Header />
    <div className="pricingPlansToTestimonialsSection">
      <Plans />
      <Testimonial />
    </div>
    <Footer />
  </main>
  );
}

export default App;
