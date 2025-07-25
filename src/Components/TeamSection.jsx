import React from "react";

// ✅ Local images (update paths as per your project structure)
import RohitImg from "../assets/IMG_5001.JPG";
import SoniaImg from "../assets/Sonia.jpg";

const team = [
  {
    name: "Rohit Khatri",
    title: "Fitness Coach",
    image: RohitImg,
    socials: ["fa-instagram", "fa-facebook", "fa-youtube"],
  },
  {
    name: "Sonia Singh Khatri",
    title: "Fitness Influencer",
    image: SoniaImg,
    socials: ["fa-instagram"],
  },
];

const TeamSection = () => {
  return (
    <section className="bg-black text-white py-20 px-6 md:px-16">
      <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-12 items-start">
        {/* Left Intro */}
        <div className="space-y-6">
          <p className="text-red-500 uppercase tracking-wider font-semibold">
            Fitness Partners
          </p>
          <h2 className="text-4xl md:text-5xl font-extrabold leading-tight">
            Meet Our Team
          </h2>
          <button className="bg-red-600 hover:bg-red-700 text-white font-semibold px-6 py-3 rounded-lg transition">
            Join Now
          </button>
        </div>

        {/* Team Cards */}
        <div className="md:col-span-2 grid sm:grid-cols-2 gap-8">
          {team.map((member, index) => (
            <div
              key={index}
              className="bg-gray-900 rounded-xl overflow-hidden shadow-md hover:shadow-lg transition duration-300"
            >
              <div className="relative">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-[400px] object-cover hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-60 px-4 py-3">
                  <h3 className="text-2xl font-bold">{member.name}</h3>
                  <p className="text-sm text-red-400">{member.title}</p>
                  <div className="flex gap-3 mt-2">
                    {member.socials.map((icon, idx) => (
                      <i
                        key={idx}
                        className={`fab ${icon} text-white hover:text-red-500 transition duration-300 text-lg`}
                      ></i>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
