
import "./App.css";
import Heros from "./components/Heros";
import HeroSection from "./components/HeroSection";
import Box from "./components/Box";
import Testimonial from "./components/Testimonial";
import Security from "./components/Security";
import Challenges from "./components/Challenges";
import Pricing from "./components/Pricing";
import Footer from "./components/Footer";



function App() {
  return (
    <>
    <div className="top-section">
      <div className="parent w-full  lg:h-[220px] h-[180px] overflow-x-hidden overflow-y-hidden">
        <Heros />
      </div>
      <div className="w-full mx-auto pl-10 pr-10 relative">
        <HeroSection />
      </div>
      </div>
      <div>
        <Box/>
        <Testimonial/>
        <Security/>
        <Challenges/>
        <Pricing/>
        <Footer/>
      </div>
      
    </>
  );
}

export default App;
