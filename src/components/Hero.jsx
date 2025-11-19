// src/components/HeroSection.jsx
import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import hero1 from '../assets/hero1.mp4';
import hero2 from '../assets/hero2.mp4';
import hero3 from '../assets/hero3.mp4';
import hero4 from '../assets/hero4.mp4';
import hero5 from '../assets/hero5.mp4';

// Use your imported assets (or switch to public/ path if you prefer)
const videos = [hero1, hero2, hero3, hero4, hero5];

const animationDuration = videos.length * 5;
const animationStyles = `
  @keyframes fadeLoop {
    0%    { opacity: 1; }
    17%   { opacity: 1; } /* Hold frame */
    20%   { opacity: 0; } /* Fade out */
    97%   { opacity: 0; } /* Stay hidden */
    100%  { opacity: 1; } /* Fade back in */
  }
`;

// Star Icon for Social Proof
const StarIcon = () => (
  <svg className="w-5 h-5 text-[#FFB703]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
    <path fillRule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.007Z" clipRule="evenodd" />
  </svg>
);

const HeroSection = () => {
  const videoRefs = useRef([]);

  useEffect(() => {
    // Normalise refs array length
    videoRefs.current = videoRefs.current.slice(0, videos.length);

    const tryPlay = (v) => {
      if (!v) return;
      v.muted = true;
      v.playsInline = true;
      v.loop = true;          // <--- IMPORTANT: ensure looping
      v.preload = 'auto';
      // Some bundlers set the src automatically because of imports; we don't overwrite it.
      // Force a play attempt; ignore promise rejection from autoplay policy.
      v.play().catch(() => {});
    };

    // Try to play each video now
    videoRefs.current.forEach((v) => tryPlay(v));

    // Also attempt again once 'loadeddata' fires for each video (helps if autoplay prevented initially)
    const loadedHandlers = [];
    videoRefs.current.forEach((v) => {
      if (!v) return;
      const onLoaded = () => tryPlay(v);
      loadedHandlers.push({ v, onLoaded });
      v.addEventListener('loadeddata', onLoaded, { once: true });
    });

    // Fallback: try to play on first user interaction if browser blocks autoplay entirely
    const onFirstInteract = () => {
      videoRefs.current.forEach((v) => tryPlay(v));
      window.removeEventListener('pointerdown', onFirstInteract);
      window.removeEventListener('keydown', onFirstInteract);
    };
    window.addEventListener('pointerdown', onFirstInteract, { once: true });
    window.addEventListener('keydown', onFirstInteract, { once: true });

    return () => {
      // cleanup listeners
      loadedHandlers.forEach(({ v, onLoaded }) => {
        try { v.removeEventListener('loadeddata', onLoaded); } catch (_) {}
      });
      window.removeEventListener('pointerdown', onFirstInteract);
      window.removeEventListener('keydown', onFirstInteract);
    };
  }, []);

  return (
    <section className="bg-white py-16 sm:py-24" id="home">
      <style>{animationStyles}</style>

      <div className="container mx-auto px-6">
        {/* Content Wrapper (Text) */}
        <div className="relative z-10 flex flex-col items-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="text-4xl sm:text-6xl font-extrabold text-center text-[#023047] max-w-4xl"
          >
            Drive Innovation in Marine Technology, Focusing on 
            <span className="text-[#219EBC]"> Sustainability</span>, 
            Efficiency, and Safe Solutions.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8, ease: 'easeOut' }}
            className="mt-6 text-2xl font-semibold text-[#023047]"
          >
            Performance • Innovation • Integrity
          </motion.p>
        </div>

        {/* Wrapper for Video + Buttons */}
        <motion.div 
          className="relative mt-24"
          initial={{ opacity: 0, y: 40, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ delay: 0.6, duration: 0.8, ease: 'easeOut' }}
        >
          {/* Main Visual Container */}
          <div className="relative rounded-3xl shadow-2xl overflow-hidden h-[600px]">
            {/* Background videos */}
            <div className="absolute inset-0 z-0">
              {videos.map((videoSrc, index) => {
                const delay = index * 5;
                return (
                  <video
                    key={index}
                    ref={(el) => (videoRefs.current[index] = el)}
                    className="absolute inset-0 w-full h-full object-cover"
                    style={{
                      animation: `fadeLoop ${animationDuration}s linear infinite`,
                      animationDelay: `${delay}s`,
                      opacity: index === 0 ? 1 : 0,
                    }}
                    playsInline
                    autoPlay
                    muted
                    loop            // <- kept loop here
                    preload="auto"
                    src={videoSrc}
                  />
                );
              })}
            </div>

            {/* Dark overlay for readability */}
            <div className="absolute inset-0 z-10 bg-black/20"></div>

            {/* Social Proof Pills */}
            <div className="relative z-20 p-6 flex justify-between">
              <div className="flex items-center space-x-2 bg-white/30 backdrop-blur-md px-4 py-2 rounded-full shadow-lg text-white font-semibold">
                <span className="text-xl">🧑</span>
                <span>200+ Years Experience</span>
              </div>
              <div className="flex items-center space-x-2 bg-white/30 backdrop-blur-md px-4 py-2 rounded-full shadow-lg text-white font-semibold">
                <StarIcon />
                <span>400+ Crew Testified</span>
              </div>
            </div>
          </div>

          {/* Overlapping Button Bar */}
          <motion.div
            initial={{ opacity: 0, y: -20, scale: 0.9 }}
            animate={{ opacity: 1, y: -28, scale: 1 }}
            transition={{ delay: 0.8, duration: 0.5, ease: 'easeOut' }}
            className="
              absolute z-30 top-0 left-1/2 -translate-x-1/2 
              flex items-center space-x-2 p-1.5 
              bg-white rounded-full border border-gray-200 shadow-xl
              h-14
            "
          >
            <a
              href="#services"
              className="h-full flex items-center px-6 py-2.5 rounded-full bg-[#023047] text-white font-bold transition-all duration-300"
            >
              Explore Our Services
            </a>
            <a
              href="#footer"
              className="h-full flex items-center px-6 py-2.5 rounded-full text-[#023047]/80 hover:bg-gray-100 font-bold transition-all duration-300"
            >
              Contact Us
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
