import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";

import strength from "../assets/strength.png";
import cardio from "../assets/cardio.png";
import crossfit from "../assets/crossfit.png";
import yoga from "../assets/yoga-pose.png";
import zumba from "../assets/zumba.png";
import dance from "../assets/zumba-1.png";
import cafe from "../assets/cafe.png";
import cupping from "../assets/cupping.png";
import steam from "../assets/bathing.png";

gsap.registerPlugin(ScrollTrigger);

const features = [
  {
    name: "Strength",
    image: strength,
    image2:
      "https://images.unsplash.com/photo-1521804906057-1df8fdb718b7?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    name: "Cardio",
    image: cardio,
    image2:
      "https://images.unsplash.com/flagged/photo-1556746834-cbb4a38ee593?q=80&w=872&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    name: "CrossFit",
    image: crossfit,
    image2:
      "https://images.unsplash.com/photo-1434596922112-19c563067271?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    name: "Yoga",
    image: yoga,
    image2:
      "https://images.unsplash.com/photo-1447452001602-7090c7ab2db3?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    name: "Zumba",
    image: zumba,
    image2:
      "https://images.unsplash.com/photo-1517130038641-a774d04afb3c?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    name: "Dance",
    image: dance,
    image2:
      "https://images.unsplash.com/photo-1508700929628-666bc8bd84ea?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    name: "Café",
    image: cafe,
    image2:
      "https://images.unsplash.com/photo-1481833761820-0509d3217039?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    name: "Cupping Therapy",
    image: cupping,
    image2:
      "https://images.unsplash.com/photo-1621287338923-98fb9531571f?q=80&w=838&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    name: "Steam Bath",
    image: steam,
    image2:
      "https://images.unsplash.com/photo-1595506951595-2d3de8d889c1?q=80&w=417&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
];

const Dwarka = () => {
  const containerRef = useRef(null);
  const headingRef = useRef(null);

  useEffect(() => {
    window.scrollTo(0, 0);
     gsap.fromTo(
          headingRef.current,
          { y: -100, opacity: 0, scale: 0.8 },
          {
            y: 0,
            opacity: 1,
            scale: 1,
            duration: 1.5,
            ease: "power4.out",
          }
        );

   
    const cards = gsap.utils.toArray(".feature-card");



    cards.forEach((card, index) => {
      const direction = index % 2 === 0 ? 100 : -100;
      gsap.fromTo(
        card,
        { opacity: 0, scale: 0, x: direction },
        {
          opacity: 1,
          scale: 1,
          x: 0,
          duration: 0.8,
          scrollTrigger: {
            trigger: card,
            start: "top 90%",
            end: "bottom 50%",
            scrub: 1,
          },
        }
      );
    });
  }, []);

  return (
    <div ref={containerRef} className="bg-black  text-white ">
      <Navbar />
      <section
        className="h-[80vh] bg-cover bg-center flex items-center justify-center"
        style={{
          backgroundImage:
            "url(https://images.unsplash.com/photo-1605296867304-46d5465a13f1?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)",
        }}
      >
        <div ref={headingRef}  className="p-8 text-center rounded-xl">
          <h1 className="text-3xl sm:text-5xl font-bold text-white leading-tight">
            DWARKA'S MOST <br />
            <span className="text-red-600 text-6xl">PREMIUM</span> GYM EXPERIENCE
          </h1>
          <button className="bg-red-800 w-[20%] mt-6 p-2 text-2xl font-semibold rounded">
            JOIN NOW
          </button>
        </div>


      </section>

      <div className="flex flex-col ">
      <h2 className="text-3xl font-semibold text-center text-red-500 mb-12">
          Why Choose Us
        </h2>

        {features.map((feature, index) => (
          <div
            key={index}
            className="feature-card relative  overflow-hidden shadow-lg border:none group w-full h-94"
            style={{
              backgroundImage: `url(${feature.image2})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            {/* Overlay */}
            {/* <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-60 transition duration-500 ease-in-out z-10"></div> */}

            {/* Foreground image */}
            <img
              src={feature.image}
              alt={feature.name}
              className="absolute left-4 top-4 h-20 w-20 object-contain z-20"
            />

            {/* Text and Button */}
            <div className="absolute inset-0 z-20 flex flex-col justify-center items-center opacity-0 group-hover:opacity-100 transition duration-500 ease-in-out">
              <h2 className="text-5xl font-bold mb-3">{feature.name}</h2>
              <button className="px-5 py-2 bg-red-600 hover:bg-red-700 text-white rounded-full">
                Join Now
              </button>
            </div>
          </div>
        ))}
      </div>
      
      
      <Footer/>
    </div>
  );
};

export default Dwarka;
