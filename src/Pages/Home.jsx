import React from 'react';
import { FaInstagram, FaYoutube, FaWhatsapp } from 'react-icons/fa';
import HeroSection from '../Components/HeroSection';
import Navbar from '../Components/Navbar';
import Marquee from '../Components/Marquee';
import ExpertiseSection from '../Components/ExpertiseSection';
import AboutDwarkaGym from '../Components/AboutDwarkaGym';
import ProgramsSection from '../Components/ProgramsSection';
import TestimonialsSection from '../Components/TestimonialsSection';
import TeamSection from '../Components/TeamSection';
import Footer from '../Components/Footer';

const Home = () => {
  return (
    <div className="w-full overflow-x-hidden bg-white">
        <Navbar/>

      {/* ✅ Hero Section */}
       <HeroSection />
   

      {/* ✅ Social Bar */}
      <section className="flex  h-30 relative z-10 justify-center gap-6 py-10 bg-[#323031] text-white">
        {[FaInstagram, FaYoutube, FaWhatsapp].map((Icon, i) => (
          <Icon key={i} size={50} className="hover:scale-125 hover:text-red-600 transition duration-300 cursor-pointer" />
        ))}
        
      </section>
      <Marquee/>
      
      <ExpertiseSection/>
      <AboutDwarkaGym/>
      <ProgramsSection/>
      <TestimonialsSection/>
      <TeamSection/>
      <Footer/>

     

    </div>
  );
};

export default Home;

