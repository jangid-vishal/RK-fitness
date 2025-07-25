import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Thumbnail from "../assets/C1C_jSkBh4Y-HD.jpg";
import img1 from "../assets/Untitled-design-54-1024x576.jpg";
import img2 from "../assets/Untitled-design-50.jpg";
import img3 from "../assets/Untitled-design-55.jpg";

gsap.registerPlugin(ScrollTrigger);

const AboutDwarkaGym = () => {
  const containerRef = useRef(null);
  const textRef = useRef(null);
  const videoRef = useRef(null);
  const imageRefs = useRef([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        textRef.current,
        { opacity: 0, x: -100 },
        {
          opacity: 1,
          x: 0,
          duration: 1.2,
          ease: "power2.out",
          scrollTrigger: {
            trigger: textRef.current,
            start: "top 80%",
          },
        }
      );

      gsap.fromTo(
        videoRef.current,
        { opacity: 0, scale: 0.8 },
        {
          opacity: 1,
          scale: 1,
          duration: 1,
          ease: "back.out(1.7)",
          scrollTrigger: {
            trigger: videoRef.current,
            start: "top 80%",
          },
        }
      );

      imageRefs.current.forEach((el, i) => {
        gsap.fromTo(
          el,
          { opacity: 0, y: 50 },
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
            ease: "power1.out",
            delay: i * 0.1,
            scrollTrigger: {
              trigger: el,
              start: "top 85%",
            },
          }
        );
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  const gallery = [
   img1, img2, img3
  ];

  return (
    <section
      ref={containerRef}
      className="flex flex-col lg:flex-row items-center justify-center px-6 py-20 bg-black text-white gap-12"
    >
      {/* Left Text Section */}
      <div className="lg:w-1/2 space-y-6" ref={textRef}>
        <p className="text-red-500 uppercase font-semibold tracking-wider">
          About Us
        </p>
        <h2 className="text-4xl font-bold leading-tight">
          Welcome to <span className="text-red-500">RK Fitness</span>
        </h2>
        <h3 className="text-lg text-red-400 font-medium">
          Best Premium Fitness Gym In Dwarka
        </h3>
        <p className="text-gray-300">
          Owner of one of India’s largest fitness channels on YouTube,
          Rohit Khatri is a sports science nutritionist and creator. Known for
          online coaching & elite routines, he ranks among India’s top fitness
          influencers.
        </p>
        <ul className="list-disc pl-5 text-sm text-gray-400 space-y-1">
          <li>🏆 Featured in Forbes, Amateur Olympia competitor</li>
          <li>💪 Best Trainers & International Equipment in Dwarka</li>
        </ul>
        <a
          href="https://www.youtube.com/watch?v=C1C_jSkBh4Y" // Change as needed
          className="inline-block mt-4 bg-red-600 hover:bg-red-700 text-white font-semibold py-2 px-6 rounded transition"
        >
          Watch Now
        </a>
      </div>

      {/* Right Video & Images Section */}
      <div className="lg:w-1/2 space-y-6">
        {/* Video Preview */}
        <div
          ref={videoRef}
          className="relative cursor-pointer group overflow-hidden rounded-xl shadow-lg"
          onClick={() =>
            window.open("https://www.youtube.com/watch?v=C1C_jSkBh4Y", "_blank")
          }
        >
          <img
            src={Thumbnail} // Replace with your video thumbnail
            alt="Video Preview"
            className="w-full h-auto"
          />
          <div className="absolute inset-0 flex items-center justify-center bg-black/50 group-hover:bg-black/60 transition">
            <div className="bg-white text-black px-4 py-2 font-bold rounded">
              ▶ Play Video
            </div>
          </div>
        </div>

        {/* Image Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {gallery.map((src, i) => (
            <img
              key={i}
              src={src}
              alt={`RK Gallery ${i + 1}`}
              ref={(el) => (imageRefs.current[i] = el)}
              className="rounded-lg object-cover w-full h-48"
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutDwarkaGym;
