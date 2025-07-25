import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const testimonials = [
  {
    name: "Ritik Patel",
    message: "Asia's no.1 fitness YouTube channel rohit bhai ka gym ...awesome !!!!💓",
  },
  {
    name: "Sonu Kumar",
    message: "The gym was very good, Equipment were also good, Price is less in compare to others.",
  },
  {
    name: "Priya Sharma",
    message: "Best trainers and great ambiance! Highly recommended.",
  },
  {
    name: "Arjun Mehra",
    message: "Amazing experience, professional staff. Totally worth it!",
  },
  {
    name: "Nikita Rao",
    message: "Clean equipment, supportive environment, and a fantastic vibe!",
  },
  {
    name: "Yash Verma",
    message: "My energy levels are at peak! RK Fitness is game-changing.",
  },
];

const TestimonialsSection = () => {
  const topRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      topRef.current,
      { y: 50, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 1,
        ease: "power2.out",
        scrollTrigger: {
          trigger: topRef.current,
          start: "top 80%",
        },
      }
    );
  }, []);

  return (
    <section className="bg-black text-white py-16 overflow-hidden">
      {/* Top section */}
      <div ref={topRef} className="text-center max-w-4xl mx-auto px-4">
        <p className="text-red-500 font-semibold uppercase mb-2 tracking-wider">
          Our Testimonials
        </p>
        <h2 className="text-4xl font-bold mb-3">Highest Rated Gym</h2>
        <p className="text-lg text-gray-300 mb-6">
          RK Fitness Gym is one of the largest gyms in Dwarka and the most reviewed gym of Delhi
        </p>
        <img
          src="src/assets/Untitled-design-60-1024x576.jpg"
          alt="RK Fitness Rating"
          className="mx-auto rounded-xl shadow-lg w-full max-w-xl"
        />
      </div>

      {/* Scrolling Cards */}
      <div className="mt-12 relative overflow-hidden">
        <div className="flex gap-6 animate-scroll-x whitespace-nowrap">
          {[...testimonials, ...testimonials].map((t, i) => (
            <div
              key={i}
              className="min-w-[300px] bg-zinc-800 p-6 rounded-xl shadow-lg flex-shrink-0"
            >
              <p className="text-sm mb-3">{t.message}</p>
              <div className="text-red-500 text-xl mb-2">★★★★★</div>
              <div className="text-white font-semibold">{t.name}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
