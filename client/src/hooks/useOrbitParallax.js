import { useEffect, useRef, useState } from 'react';

/**
 * Custom hook for smooth scroll-linked orbit ring parallax.
 *
 * Parallax motion factors:
 * - Far layer:  translateY at 0.08x scroll, rotation  0.010 deg/px
 * - Mid layer:  translateY at 0.16x scroll, rotation -0.016 deg/px
 * - Near layer: translateY at 0.28x scroll, rotation  0.022 deg/px
 * Moves opposite to scroll direction (translateY = -scroll * factor).
 * On screens < 640px, motion factors are halved.
 * Under prefers-reduced-motion: reduce, layers remain completely static.
 */
export function useOrbitParallax() {
  const farRef = useRef(null);
  const midRef = useRef(null);
  const nearRef = useRef(null);

  const [isMobile, setIsMobile] = useState(() =>
    typeof window !== 'undefined' ? window.matchMedia('(max-width: 639px)').matches : false
  );
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(() =>
    typeof window !== 'undefined' ? window.matchMedia('(prefers-reduced-motion: reduce)').matches : false
  );

  useEffect(() => {
    if (typeof window === 'undefined') return;

    const mqlMobile = window.matchMedia('(max-width: 639px)');
    const mqlMotion = window.matchMedia('(prefers-reduced-motion: reduce)');

    const handleMobile = (e) => setIsMobile(e.matches);
    const handleMotion = (e) => setPrefersReducedMotion(e.matches);

    mqlMobile.addEventListener('change', handleMobile);
    mqlMotion.addEventListener('change', handleMotion);

    return () => {
      mqlMobile.removeEventListener('change', handleMobile);
      mqlMotion.removeEventListener('change', handleMotion);
    };
  }, []);

  useEffect(() => {
    if (typeof window === 'undefined') return;

    if (prefersReducedMotion) {
      if (farRef.current) farRef.current.style.transform = 'translate3d(0, 0, 0) rotate(0deg)';
      if (midRef.current) midRef.current.style.transform = 'translate3d(0, 0, 0) rotate(0deg)';
      if (nearRef.current) nearRef.current.style.transform = 'translate3d(0, 0, 0) rotate(0deg)';
      return;
    }

    let targetScrollY = window.scrollY || window.pageYOffset || 0;
    let currentScrollY = targetScrollY;
    let rafId = null;
    let isRunning = false;

    // Halve motion factors on mobile (<640px)
    const factorMultiplier = isMobile ? 0.5 : 1.0;
    const farYFactor = -0.08 * factorMultiplier;
    const farRotFactor = 0.010 * factorMultiplier;
    const midYFactor = -0.16 * factorMultiplier;
    const midRotFactor = -0.016 * factorMultiplier;
    const nearYFactor = -0.28 * factorMultiplier;
    const nearRotFactor = 0.022 * factorMultiplier;

    function applyTransforms(scrollY) {
      if (farRef.current) {
        const y = scrollY * farYFactor;
        const r = scrollY * farRotFactor;
        farRef.current.style.transform = `translate3d(0, ${y.toFixed(2)}px, 0) rotate(${r.toFixed(3)}deg)`;
      }
      if (midRef.current) {
        const y = scrollY * midYFactor;
        const r = scrollY * midRotFactor;
        midRef.current.style.transform = `translate3d(0, ${y.toFixed(2)}px, 0) rotate(${r.toFixed(3)}deg)`;
      }
      if (nearRef.current) {
        const y = scrollY * nearYFactor;
        const r = scrollY * nearRotFactor;
        nearRef.current.style.transform = `translate3d(0, ${y.toFixed(2)}px, 0) rotate(${r.toFixed(3)}deg)`;
      }
    }

    // Immediately sync to initial scroll position
    applyTransforms(currentScrollY);

    function update() {
      const diff = targetScrollY - currentScrollY;
      if (Math.abs(diff) > 0.05) {
        currentScrollY += diff * 0.12; // Light smoothing with lerp factor ~0.12
        applyTransforms(currentScrollY);
        rafId = requestAnimationFrame(update);
      } else {
        currentScrollY = targetScrollY;
        applyTransforms(currentScrollY);
        isRunning = false;
        rafId = null;
      }
    }

    function onScroll() {
      targetScrollY = window.scrollY || window.pageYOffset || 0;
      if (!isRunning) {
        isRunning = true;
        rafId = requestAnimationFrame(update);
      }
    }

    window.addEventListener('scroll', onScroll, { passive: true });

    return () => {
      window.removeEventListener('scroll', onScroll);
      if (rafId) cancelAnimationFrame(rafId);
    };
  }, [isMobile, prefersReducedMotion]);

  return { farRef, midRef, nearRef, isMobile, prefersReducedMotion };
}
