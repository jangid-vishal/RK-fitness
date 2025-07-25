import React, { useLayoutEffect, useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";

import trainer from "../assets/Untitled-design-64-1024x576.jpg";
import cafe from "../assets/cafe.png";
import dumbbell from "../assets/Untitled-design-63.jpg";
import trophy from "../assets/Untitled-design-61.jpg";

gsap.registerPlugin(ScrollTrigger);

const keyPoints = [
  { title: "Certified Trainers", image: trainer },
  { title: "In-House Café, Steam Rooms, Posing Room & More", image: cafe },
  { title: "Bodybuilding Competition Preparation", image: trophy },
  { title: "International Graded Equipment", image: dumbbell },
  { title: "One of India's Top Fitness Influencers", image: trainer },
  { title: "Expert in Sports Science Nutrition", image: dumbbell },
  { title: "Over 2M YouTube Subscribers", image: cafe },
  { title: "Customized Online Coaching Programs", image: trophy },
];

const About = () => {
  const quoteRef = useRef(null);

  useLayoutEffect(() => {
    // Entry animation for motivational quote
    gsap.from(quoteRef.current, {
      opacity: 0,
      y: -80,
      scale: 0.6,
      duration: 1.8,
      ease: "power3.out",
    });
  }, []);

  useEffect(() => {
    // Scroll animation for key points
    gsap.utils.toArray(".fade-in").forEach((el, index) => {
      gsap.fromTo(
        el,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          scrollTrigger: {
            trigger: el,
            start: "top 90%",
            toggleActions: "play none none none",
          },
        }
      );
    });
  }, []);

  return (
    <div className="bg-black text-white">
      <Navbar />

      {/* Hero Section */}
      <section
        className="w-full h-[80vh] flex items-center justify-center text-center bg-cover bg-center px-4"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1605296867304-46d5465a13f1?q=80')",
        }}
      >
        <div
          ref={quoteRef}
          className="bg-black bg-opacity-20 p-5 rounded-lg max-w-3xl"
        >
          <h1 className="text-4xl sm:text-5xl font-bold mb-6 text-white">
            "Push your limits. Train like a beast. Become a legend."
          </h1>
          <p className="text-xl text-gray-300">— Rohit Khatri Gym</p>
        </div>
      </section>

      {/* About Section */}
      <section className="py-16 px-6 sm:px-10 lg:px-20">
        <h2 className="text-4xl font-bold text-center text-red-500 mb-10">
          About Us
        </h2>

        <div className="max-w-4xl mx-auto mb-12">
          <h3 className="text-3xl font-semibold mb-4">Welcome to RK Fitness</h3>
          <p className="text-lg leading-relaxed text-gray-300">
            Get the body you want at the gym you love. Owned by Rohit Khatri —
            one of India’s biggest fitness influencers and a certified sports
            science nutritionist. He’s known for his popular YouTube channel,
            effective workout routines, and expert online coaching.
          </p>
        </div>

        {/* Key Points */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-10 max-w-5xl mx-auto">
          {keyPoints.map((point, index) => (
            <div
              key={index}
              className="bg-gray-900 bg-opacity-30 p-6 rounded-xl flex items-center gap-6 fade-in"
            >
              <img
                src={point.image}
                alt={point.title}
                className="w-16 h-16 object-contain"
              />
              <h4 className="text-lg font-semibold">{point.title}</h4>
            </div>
          ))}
        </div>
        <button className="bg-red-800 font-bold text-3xl p-5 rounded-full w-full mt-5 opacity-50 hover:opacity-100">JOIN NOW</button>
      </section>

      <Footer />
    </div>
  );
};

export default About;
