import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import strength from "../assets/strength.png";
import cardio from "../assets/cardio.png";
import yoga from "../assets/yoga-pose.png";
import crossfit from "../assets/crossfit.png";
import Zumba from "../assets/zumba.png";
import Dance from "../assets/zumba-1.png";
import Cafe from "../assets/cafe.png";
import CuppingTherapy from "../assets/cupping.png";
import SteamBath from "../assets/bathing.png";
import locationIcon from "../assets/Frame-19-7-1.jpg";
import Navbar from "../Components/Navbar";

gsap.registerPlugin(ScrollTrigger);

const features = [
  { text: "State-of-the-art Strength Equipment", icon: strength },
  { text: "Advanced Cardio Zone", icon: cardio },
  { text: "Dedicated Yoga Studio", icon: yoga },
  { text: "CrossFit Training Area", icon: crossfit },
  { text: "Energetic Zumba Sessions", icon: Zumba },
  { text: "Professional Dance Studio", icon: Dance },
  { text: "Healthy Café & Nutrition Bar", icon: Cafe },
  { text: "Relaxing Cupping Therapy", icon: CuppingTherapy },
  { text: "Refreshing Steam Bath", icon: SteamBath },
];

const galleryImages = [
  "src/assets/Frame-8-8.jpg",
  "src/assets/Frame-9-6.jpg",
  "src/assets/Frame-10-7.jpg",
  "src/assets/Frame-11-6.jpg",
  "src/assets/Frame-12-9.jpg",
  "src/assets/Frame-13-9.jpg",
  "src/assets/Frame-14-6-1.jpg",
  "src/assets/Frame-15-4-1.jpg",
  "src/assets/Frame-16-11-1.jpg",
  "src/assets/Frame-17-5-1.jpg",
];

const PaschimVihar = () => {
  const featureRefs = useRef([]);
  const galleryRefs = useRef([]);
  const headingRef = useRef(null);
  const locationRef = useRef(null);

  featureRefs.current = [];
  galleryRefs.current = [];

  const addToFeatureRefs = (el) => {
    if (el && !featureRefs.current.includes(el)) {
      featureRefs.current.push(el);
    }
  };

  const addToGalleryRefs = (el) => {
    if (el && !galleryRefs.current.includes(el)) {
      galleryRefs.current.push(el);
    }
  };

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

    featureRefs.current.forEach((el, index) => {
      gsap.fromTo(
        el,
        { x: index % 2 === 0 ? -100 : 100, opacity: 0, scale: 0.9 },
        {
          x: 0,
          opacity: 1,
          scale: 1,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: el,
            start: "top 80%",
            end: "bottom 60%",
            scrub: true,
          },
        }
      );
    });

    galleryRefs.current.forEach((el) => {
      gsap.fromTo(
        el,
        { scale: 0, opacity: 0 },
        {
          scale: 1,
          opacity: 1,
          duration: 1.2,
          ease: "back.out(1.7)",
          scrollTrigger: {
            trigger: el,
            start: "top 85%",
            end: "bottom 70%",
            scrub: true,
          },
        }
      );
    });

    // Location section animation
    if (locationRef.current) {
      gsap.fromTo(
        locationRef.current,
        { opacity: 0, y: 100 },
        {
          opacity: 1,
          y: 0,
          duration: 1.5,
          scrollTrigger: {
            trigger: locationRef.current,
            start: "top 80%",
            toggleActions: "play none none reverse",
          },
        }
      );
    }
  }, []);

  return (
    <div className="bg-black text-white">
      <Navbar />

      {/* Hero Section */}
      <section
        className="h-[80vh] bg-cover bg-center flex items-center justify-center"
        style={{
          backgroundImage:
            "url(https://images.unsplash.com/photo-1605296867304-46d5465a13f1?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)",
        }}
      >
        <div ref={headingRef} className="p-8 text-center rounded-xl">
          <h1 className="text-3xl sm:text-5xl font-bold text-white leading-tight">
            PASCHIM VIHAR'S MOST <br />
            <span className="text-red-600 text-6xl">PREMIUM</span> GYM EXPERIENCE
          </h1>
          <button className="bg-red-800 w-[20%] mt-6 p-2 text-2xl font-semibold rounded">
            JOIN NOW
          </button>
        </div>
      </section>

      {/* Features */}
      <section className="px-6 py-16 lg:px-20">
        <h2 className="text-3xl font-semibold text-center text-red-500 mb-12">
          Why Choose Us
        </h2>
        <div className="space-y-12">
          {features.map((feature, i) => (
            <div
              key={i}
              ref={addToFeatureRefs}
              className={`flex flex-col sm:flex-row items-center gap-6 ${
                i % 2 === 0 ? "sm:flex-row" : "sm:flex-row-reverse"
              }`}
            >
              <div className="text-lg sm:w-2/3 text-center sm:text-left">
                <p>{feature.text}</p>
              </div>
              <img src={feature.icon} alt="icon" className="w-20 h-20" />
            </div>
          ))}
        </div>
      </section>

      {/* Gallery */}
      <section className="px-6 py-16 lg:px-20">
        <h2 className="text-3xl font-semibold text-center text-red-500 mb-12">
          Gym Gallery
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {galleryImages.map((url, idx) => (
            <div
              key={idx}
              ref={addToGalleryRefs}
              className="w-full h-64 bg-gray-700 rounded-lg overflow-hidden shadow-md"
              style={{
                backgroundImage: `url(${url})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            ></div>
          ))}
        </div>
      </section>

      {/* Location */}
      <section className="px-6 py-16 lg:px-20 bg-zinc-900" ref={locationRef}>
        <h2 className="text-3xl font-semibold text-center text-red-500 mb-12">
          Our Location
        </h2>
        <div className="flex flex-col lg:flex-row gap-10 items-center">
          {/* Google Map iframe */}
          <div className="w-full lg:w-1/2 h-96 rounded-xl overflow-hidden shadow-lg">
            <iframe
              title="Google Map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14020.96994292771!2d77.0852034!3d28.6692289!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d04b6baf3d555%3A0xb361d20e4dc2a34b!2sPaschim%20Vihar%2C%20Delhi!5e0!3m2!1sen!2sin!4v1711988917587!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>

          {/* Address & Contact */}
          <div className="text-lg lg:w-1/2 space-y-4">
            <h3 className="text-2xl font-bold text-white">Dwarka Sector-12a</h3>
            <p>
              Plot No. 5, Opposite CNG Pump. Plot No 1, UGF, Block A, A-1, Outer
              Ring Rd, Shubham Enclave, Sunder Vihar, Paschim Vihar, Delhi,
              110063
            </p>
            <p>
              <span className="font-semibold">Call Us Now:</span>{" "}
              <a href="tel:+919667971209" className="text-red-500">
                +91 96679 71209
              </a>
            </p>
            <a
              href="https://www.google.com/maps/place/Paschim+Vihar"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-red-600 text-white px-4 py-2 rounded-full hover:bg-red-700 transition"
            >
              <img src={locationIcon} alt="Location" className="w-6 h-6" />
              View on Google Maps
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PaschimVihar;
