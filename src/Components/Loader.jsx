import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import rkLogo from '../assets/IMG_5007-removebg-preview.PNG'; // adjust path as needed



const Loader = ({ onFinish }) => {
  const logoRef = useRef();
  const loaderRef = useRef();

  useEffect(() => {
    const tl = gsap.timeline({
      onComplete: () => {
        // Fade out loader after animation
        gsap.to(loaderRef.current, {
          opacity: 0,
          duration: 1,
          onComplete: onFinish,
        });
      },
    });

    tl.fromTo(logoRef.current,
      { scale: 0, opacity: 0 },
      { scale: 1.2, opacity: 1, duration: 1.5, ease: 'back.out(1.7)' }
    ).to(logoRef.current, {
     
      duration: 0.5,
      ease: 'power2.out',
    });
  }, []);

  return (
    <div ref={loaderRef} className="fixed inset-0 bg-white flex items-center justify-center z-50">
      <img
        ref={logoRef}
        src={rkLogo}
        alt="RK Fitness Logo"
        className="w-70 h-70 object-contain"
      />
    </div>
  );
};

export default Loader;
