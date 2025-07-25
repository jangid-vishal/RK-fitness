import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import treadmillImg from "../assets/Untitled-design-57.jpg";
import discountImg from "../assets/DiscountForFemales.jpg";
import strengthImg from "../assets/Untitled-design-59.jpg";
import muscleImg from "../assets/Untitled-design-58.jpg";
import largestGymImg from "../assets/LARGESTGYM.jpeg";
import internationalEquipImg from "../assets/INTERNATIONALGRADEDEQUIPMENTS.jpeg";

gsap.registerPlugin(ScrollTrigger);

const programs = [
    {
    title: "CARDIO TRADMILL",
    image: treadmillImg,
  },
  {
    title: "DISCOUNT FOR FEMALES",
    image: discountImg,
  },
  {
    title: "STRENGTH TRAINING",
    image: strengthImg,
  },
  {
    title: "MUSCLE BUILDING",
    image: muscleImg,
  },
  {
    title: "LARGEST GYM",
    image: largestGymImg,
  },
  {
    title: "INTERNATIONAL GRADED EQUIPMENTS",
    image: internationalEquipImg,
  },

];

const ProgramsSection = () => {
  const cardRefs = useRef([]);

  useEffect(() => {
    cardRefs.current.forEach((card, i) => {
      gsap.fromTo(
        card,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          delay: i * 0.1,
          ease: "power2.out",
          scrollTrigger: {
            trigger: card,
            start: "top 85%",
          },
        }
      );
    });
  }, []);

  return (
    <section className="bg-black text-white py-20 px-6">
      <div className="text-center mb-12">
        <p className="text-red-500 font-semibold uppercase tracking-widest">
          Our Class
        </p>
        <h2 className="text-4xl font-bold">Choose the Program</h2>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {programs.map((prog, i) => (
          <div
            key={i}
            ref={(el) => (cardRefs.current[i] = el)}
            className="relative group overflow-hidden rounded-xl shadow-xl cursor-pointer"
          >
            <img
              src={prog.image}
              alt={prog.title}
              className="w-full h-64 object-cover transform group-hover:scale-110 transition duration-500"
            />

            {/* Overlay */}
            <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition duration-500 flex flex-col items-center justify-center p-4 text-center">
              <h3 className="text-xl font-bold mb-2">{prog.title}</h3>
              <button className="bg-red-600 hover:bg-red-700 text-white font-semibold py-2 px-5 rounded-full transition">
                Join Now
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ProgramsSection;
