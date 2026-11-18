import { useEffect, useState } from 'react';

export default function LoadingScreen({ onFinished }) {
  const [fadedOut, setFadedOut] = useState(false);

  useEffect(() => {
    // Respect reduced motion
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const timer = setTimeout(() => {
      setFadedOut(true);
      setTimeout(() => {
        if (onFinished) onFinished();
      }, prefersReducedMotion ? 0 : 400);
    }, prefersReducedMotion ? 200 : 900);

    return () => clearTimeout(timer);
  }, [onFinished]);

  return (
    <aside
      role="status"
      aria-label="Loading ALUNE"
      className={`fixed inset-0 z-50 flex items-center justify-center bg-[#F7F5F0] transition-opacity duration-500 ease-out ${
        fadedOut ? 'opacity-0 pointer-events-none' : 'opacity-100'
      }`}
    >
      <div className="w-[min(72vw,360px)] px-6">
        <img
          src="/ALUNE-LOGO/loading-screen/ALUNE-loading-logo.svg"
          alt="ALUNE Eyewear"
          className="w-full h-auto animate-fade-in"
        />
      </div>
    </aside>
  );
}
