import { useEffect, useRef } from "react";
import gsap from "gsap";
import AnimatedHeading from "./AnimatedHeading";

const HeroSection = () => {
  const leftTextRef = useRef();
  const rightTextRef = useRef();
  const imageRef = useRef();
  const btnRef = useRef();

  useEffect(() => {
    const tl = gsap.timeline();

    tl.fromTo(
      leftTextRef.current,
      { x: 500, opacity: 0 },
      { x: 0, opacity: 1, duration: 3, ease: "power3.out" }
    )
      .fromTo(
        rightTextRef.current,
        { x: 100, opacity: 0 },
        { x: 0, opacity: 1, duration: 2, ease: "power3.out" },
        "-=0.8"
      )
      .fromTo(
        btnRef.current,
        { x: 700 },
        { x: 0, duration: 1, ease: "power3.out" },
        "-=0.8"
      )
      .fromTo(
        imageRef.current,
        { scale: 3.4, opacity: 0, y: 100, duration: 0.3, ease: "power4.out" },
        { scale: 1, opacity: 1 }
      );
  }, []);

  return (
    <section className="h-screen bg-[url('src/assets/Untitled-design-57.jpg')] bg-cover bg-center text-white flex items-center justify-center relative">

      <div className="absolute inset-0 bg-black/75"></div>

      <div className="flex flex-col sm:flex-row sm:items-center justify-center sm:gap-3 gap-6  relative w-full h-full z-10">
                    {/* Image Section */}
        <div className="w-[100%] sm:w-[40%] flex justify-end sm:justify-end">
          <img
            ref={imageRef}
            src="src/assets/IMG_5012.PNG"
            alt="Rohit Khatri"
            className="object-cover  sm:max-h-[100%] sm:w-auto w-[100%] sm:object-center object-right"
          />
        </div>
 
        {/* Text Section */}
        <div className="flex flex-col gap-4 sm:gap-10 sm:mt-14  mt-7 text-center sm:text-left w-full sm:w-auto">
          <div>
            <AnimatedHeading text="BEST PREMIUM GYM " />
            <h2
              ref={leftTextRef}
              className="text-2xl sm:px-20 sm:text-4xl font-semibold text-zinc-400"
            >
              IN DWARKA
            </h2>
          </div>

       

          <div className="sm:flex sm:flex-col sm:gap-5 sm:items-center ">
            <h1
              ref={rightTextRef}
              className="text-red-500 text-xl sm:px-7  sm:text-5xl font-bold"
            >
              <span className="text-zinc-400 ">BY</span> ROHIT KHATRI
            </h1>
            <button
              ref={btnRef}
              className="hover:opacity-100 sm:w-[50%]  bg-white text-red-600 px-5 py-2 text-lg sm:text-2xl font-bold rounded-full mt-3 opacity-65"
            >
              Call Now
            </button>
          </div>
        </div>

      
      </div>
    </section>
  );
};

export default HeroSection;
