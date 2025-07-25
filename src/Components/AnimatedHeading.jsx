import { useEffect, useRef } from 'react';
import gsap from 'gsap';

const AnimatedHeading = ({ text }) => {
  const headingRef = useRef();

  useEffect(() => {
    const h1 = headingRef.current;
    const textArray = text.split('');
    const half = Math.floor(textArray.length / 2);

    // Build spans
    h1.innerHTML = textArray
      .map((char, idx) => {
        const className = idx < half ? 'a' : 'b';
        return `<span class="${className} inline-block">${char === ' ' ? '&nbsp;' : char}</span>`;

      })
      .join('');

    // Animate both halves differently
    gsap.from('h1 .a', {
      y: 80,
      opacity: 0,
      duration: 0.5,
      delay: 0.1,
      ease: 'back.out(1.7)',
      stagger: 0.15,
    });

    gsap.from('h1 .b', {
      y: 80,
      opacity: 0,
      duration: 0.5,
      delay: 0.1,
      ease: 'back.out(1.7)',
      stagger: -0.15,
    });
  }, [text]);

  return (
    <h1
      ref={headingRef}
      className="overflow-hidden text-xl sm:text-3xl text-white text-center"
    >
      {text}
    </h1>
  );
};

export default AnimatedHeading;
