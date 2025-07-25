import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import img1 from "../assets/Untitled-design-63.jpg";
import img2 from "../assets/Untitled-design-53.jpg";
import img3 from "../assets/Untitled-design-54.jpg";

gsap.registerPlugin(ScrollTrigger);

const ExpertiseSection = () => {
  const containerRef = useRef(null);
  const imageRefs = useRef([]);
  const textRefs = useRef([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      imageRefs.current.forEach((el, index) => {
        gsap.fromTo(
          el,
          {
            opacity: 0,
            y: 100,
            scale: 0.95,
            rotate: 0,
          },
          {
            rotate: 360,
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 1,
            ease: "power3.out",
            scrollTrigger: {
              trigger: el,
              start: "top 80%",
              end: "top 50%",
              scrub: 4,
            },
          }
        );

        gsap.fromTo(
          textRefs.current[index],
          {
            opacity: 0,
            y: 40,
          },
          {
            opacity: 1,
            y: 0,
            duration: 1,
            delay: 0.2,
            scrollTrigger: {
              trigger: el,
              start: "top 80%",
              end: "top 50%",
              scrub: true,
            },
          }
        );
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  const imageData = [
    {
      src: img1,
      title: "Best Training",
      desc: "Get Trained With The Best Mentors In The Fitness Industry",
    },
    {
      src: img2,
      title: "Quality Equipment",
      desc: "International Graded Equipment For Your Professional Fitness Journey",
    },
    {
      src: img3,
      title: "YOGA, ZUMBA And Many More",
      desc: "Every Body Is Different, That's Why Everyone Gets Custom Diet & Workout Plans",
    },
  ];

  return (
    <section
      ref={containerRef}
      className="bg-black text-white flex flex-col items-center justify-center gap-32 py-24 overflow-hidden"
    >
      <h1 className="text-4xl font-bold mb-12 text-center">Our Expertise</h1>

      {imageData.map((item, i) => (
        <div
          key={i}
          ref={(el) => (imageRefs.current[i] = el)}
          className="relative w-[90%] h-[500px] flex items-center justify-center rounded-xl overflow-hidden shadow-2xl"
        >
          <img
            src={item.src}
            alt={`Expert ${i + 1}`}
            className="w-full h-full object-cover rounded-xl"
          />
          <div
            ref={(el) => (textRefs.current[i] = el)}
            className="absolute inset-0 bg-black/50 flex flex-col items-center justify-center text-center px-6"
          >
            <h2 className="text-3xl font-bold mb-2">{item.title}</h2>
            <p className="text-lg max-w-xl">{item.desc}</p>
          </div>
        </div>
      ))}
    </section>
  );
};

export default ExpertiseSection;
