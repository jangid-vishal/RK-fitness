import { useEffect, useRef } from "react";
import gsap from "gsap";

const Marquee = () => {
  const marqueeRef = useRef(null);
  const imageRef = useRef(null);

  useEffect(() => {
   const handleScroll = (e) => {
      if (e.deltaY > 0) {
        // Scroll Down: move left
        gsap.to(marqueeRef.current, {
          x: "-200%",
          duration: 8,
          repeat: -1,
          ease: "none",
        });
        gsap.to(imageRef.current, {
          rotate: 180,
          duration: 0.5,
        });
      } else {
        // Scroll Up: move right
        gsap.to(marqueeRef.current, {
          x: "0%",
          duration: 8,
          repeat: -1,
          ease: "none",
        });
        gsap.to(imageRef.current, {
          rotate: 0,
          duration: 0.5,
        });
      }
    };

    window.addEventListener("wheel", handleScroll);
    return () => window.removeEventListener("wheel", handleScroll);
  }, []);

  return (
    <div className="overflow-hidden bg-[#323031] py-6">
      <div
        ref={marqueeRef}
        className="marque flex whitespace-nowrap items-center gap-20 text-white text-3xl font-extrabold"
      >
        {Array(10).fill(null).map((_, idx) => (
          <div key={idx} className="flex items-center gap-1">
            <span className="text-white font-sans font-semibold">PUSH YOURSELF</span>
            <img
              ref={idx === 0 ? imageRef : null} // Only rotate the first image
              src="src/assets/Asset-2@2x.png"
              alt="logo"
              className="w-8 h-8 object-contain transform" // transform is required!
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Marquee;
