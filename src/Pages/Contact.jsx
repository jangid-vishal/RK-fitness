import React, { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";

gsap.registerPlugin(ScrollTrigger);

const Contact = () => {
  useEffect(() => {
    gsap.utils.toArray(".fade-up").forEach((el, i) => {
      gsap.fromTo(
        el,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          delay: i * 0.1,
          ease: "power2.out",
          scrollTrigger: {
            trigger: el,
            start: "top 85%",
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
        className="bg-cover bg-center h-[80vh] flex items-center justify-center"
        style={{
          backgroundImage:
            "url('src/assets/Untitled-design-64-1024x576.jpg')",
        }}
      >
        <div className=" p-6 rounded-lg">
          <h1 className="text-4xl sm:text-5xl font-bold text-red-500">Contact Us</h1>
        </div>
      </section>

      {/* Main Section */}
      <section className="py-6 px-6 lg:px-20">
        <h2 className="text-3xl font-bold text-center text-red-500 mb-10 fade-up">
          Get in Touch
        </h2>

        <div className="grid md:grid-cols-2 gap-10">
          {/* Contact Form */}
          <div className="bg-gray-900 bg-opacity-50 p-8 rounded-xl fade-up">
            <form className="space-y-6">
              <div>
                <label className="block mb-1">Select Gym Branch</label>
                <select className="w-full p-2 rounded bg-black text-white border border-gray-600">
                  <option>Dwarka</option>
                  <option>Paschim Vihar</option>
                </select>
              </div>

              <div>
                <label className="block mb-1">Membership Plan</label>
                <select className="w-full p-2 rounded bg-black text-white border border-gray-600">
                  <option>Elite</option>
                  <option>Gold</option>
                  <option>Silver</option>
                </select>
              </div>

              <input
                type="text"
                placeholder="Full Name"
                className="w-full p-2 rounded bg-black text-white border border-gray-600"
              />
              <input
                type="tel"
                placeholder="Phone Number"
                className="w-full p-2 rounded bg-black text-white border border-gray-600"
              />
              <input
                type="email"
                placeholder="Email Address"
                className="w-full p-2 rounded bg-black text-white border border-gray-600"
              />
              <input
                type="text"
                placeholder="Height (in cm)"
                className="w-full p-2 rounded bg-black text-white border border-gray-600"
              />
              <input
                type="text"
                placeholder="Weight (in kg)"
                className="w-full p-2 rounded bg-black text-white border border-gray-600"
              />
              <textarea
                rows="3"
                placeholder="Your Targeted Goal (e.g. Weight Loss, Muscle Gain...)"
                className="w-full p-2 rounded bg-black text-white border border-gray-600"
              ></textarea>

              <button
                type="submit"
                className="w-full py-2 bg-red-600 hover:bg-red-700 rounded transition font-semibold"
              >
                Submit Enquiry
              </button>
            </form>
          </div>

          {/* Google Map */}
          <iframe
            title="Gym Location"
            className="w-full h-[600px] rounded-xl border-none fade-up"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7003.308875656965!2d77.0387762!3d28.6089941!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d0529f0b75f0d%3A0x86d8eb87ff2c647e!2sRK%20Fitness%20By%20Rohit%20Khatri!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
            allowFullScreen=""
            loading="lazy"
          ></iframe>
        </div>

        {/* Info Cards */}
        <div className="grid md:grid-cols-3 gap-6 mt-14 fade-up">
          <div className="bg-gray-900 p-6 rounded-xl">
            <h3 className="text-xl font-bold text-red-500 mb-2">Contact Info</h3>
            <p>📞 +91 62077 27068</p>
            <p>📧 rkfitnesswork@gmail.com</p>
            <p>📍 Dwarka Sector-9, New Delhi</p>
          </div>
          <div className="bg-gray-900 p-6 rounded-xl">
            <h3 className="text-xl font-bold text-red-500 mb-2">Timings</h3>
            <p>🕘 6:00 AM - 11:00 PM</p>
            <p>🗓️ Open All Days</p>
            <p>🏋️‍♂️ Biggest Gym in Area</p>
          </div>
          <div className="bg-gray-900 p-6 rounded-xl">
            <h3 className="text-xl font-bold text-red-500 mb-2">Follow Us</h3>
            <ul className="space-y-1">
              <li><a href="#" className="text-blue-400 hover:underline">Instagram</a></li>
              <li><a href="#" className="text-blue-400 hover:underline">YouTube</a></li>
              <li><a href="#" className="text-blue-400 hover:underline">Facebook</a></li>
            </ul>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Contact;
