import React, { useLayoutEffect, useRef } from 'react';
import { gsap } from 'gsap';
import './PageLoader.css';

import { paperFaces, createPaperDeformer, faceTransform } from './paperGeometry';

export default function PageLoader({ onLoadingComplete }) {
  const root = useRef(null);
  const complete = useRef(onLoadingComplete);
  const finish = useRef(() => {});
  complete.current = onLoadingComplete;

  useLayoutEffect(() => {
    const overlay = root.current;
    const content = document.getElementById('home-content');
    const previousOverflow = document.body.style.overflow;
    const previousInert = content?.inert;
    const preference = window.matchMedia('(prefers-reduced-motion: reduce)');
    let finished = false;
    let timeline;
    document.body.style.overflow = 'hidden';
    if (content) content.inert = true;
    const unlock = () => {
      document.body.style.overflow = previousOverflow;
      if (content) content.inert = previousInert;
    };
    finish.current = () => {
      if (finished) return;
      finished = true;
      timeline?.kill();
      const hadFocus = overlay.contains(document.activeElement);
      unlock();
      if (hadFocus) content?.focus({ preventScroll: true });
      complete.current?.();
    };
    const context = gsap.context(() => {
      if (preference.matches) {
        timeline = gsap.timeline({ onComplete: () => finish.current() })
          .to(overlay, { opacity: 0, duration: 0.18 });
        return;
      }
      const width = overlay.clientWidth;
      const height = overlay.clientHeight;
      const faces = gsap.utils.toArray('.paper-face');
      const lights = faces.map((face) => face.firstElementChild);
      const deform = createPaperDeformer(width, height);
      const fold = { progress: 0 };
      const draw = () => {
        const points = deform(fold.progress);
        faces.forEach((face, index) => {
          const { matrix, shade } = faceTransform(points, paperFaces[index]);
          face.style.transform = matrix;
          lights[index].style.opacity = shade * Math.min(1, fold.progress * 4);
        });
      };
      draw();
      timeline = gsap.timeline({ onComplete: () => finish.current() });
      timeline
        .fromTo('.paper-line span', { scaleX: 0 }, { scaleX: 1, duration: 0.7, ease: 'sine.inOut' })
        .to('.paper-copy', { opacity: 0, duration: 0.4, ease: 'sine.inOut' }, 0.65)
        .to('.paper-sheet', {
          rotationZ: -5, rotationX: 6, rotationY: -7,
          duration: 1.2, ease: 'sine.inOut',
        }, 0.8)
        .to(fold, {
          progress: 1, duration: 2.05, ease: 'sine.inOut', onUpdate: draw,
        }, 0.8)
        .to('.paper-shadow', { opacity: 0.48, scale: 1, duration: 1.8, ease: 'sine.inOut' }, 0.85)
        .to('.paper-sheet', {
          rotationZ: 14, rotationY: 12, y: -12,
          duration: 1.15, ease: 'sine.inOut',
        }, 2)
        // A restrained release of tension before gravity takes over.
        .to(fold, {
          progress: 0.985, duration: 0.22, ease: 'sine.out', onUpdate: draw,
        }, 2.85)
        .to('.paper-sheet', {
          x: width * 0.23, y: height * 0.7 + 180,
          rotationZ: 105, rotationX: 55,
          duration: 0.95, ease: 'power2.in',
        }, 3.12)
        .to('.paper-sheet', { opacity: 0, duration: 0.3, ease: 'sine.in' }, 3.77)
        .to('.paper-shadow', { x: width * 0.12, opacity: 0, scale: 0.55, duration: 0.8 }, 3.12)
        .to('.paper-skip', { opacity: 0, duration: 0.2 }, 3.8);
    }, overlay);
    const handleKey = (event) => { if (event.key === 'Escape') finish.current(); };
    const handleMotion = () => { if (preference.matches) finish.current(); };
    window.addEventListener('keydown', handleKey);
    preference.addEventListener('change', handleMotion);
    // A decorative intro must never leave navigation blocked.
    const fallback = window.setTimeout(() => finish.current(), 6000);
    return () => {
      window.clearTimeout(fallback);
      window.removeEventListener('keydown', handleKey);
      preference.removeEventListener('change', handleMotion);
      context.revert();
      unlock();
    };
  }, []);

  return (
    <div ref={root} className="paper-loader" aria-label="Opening portfolio">
      <span className="sr-only" role="status">Opening portfolio. Press Escape to skip the introduction.</span>
      <div className="paper-shadow" aria-hidden="true" />
      <div className="paper-sheet" aria-hidden="true">
        {paperFaces.map((_, index) => (
          <div key={index} className="paper-face" style={{
            '--light-angle': `${index * 47}deg`,
          }}><span className="paper-light" /></div>
        ))}
        <div className="paper-copy">
          <div className="paper-meta"><span>ONI / PORTFOLIO</span><span>A NEW CHAPTER</span></div>
          <div className="paper-title"><span className="paper-eyebrow">Ideas take shape.</span><h2>Let's unfold<br />something great<span>.</span></h2><div className="paper-line"><span /></div></div>
          <div className="paper-meta"><span>SOFTWARE ENGINEER</span><span>WELCOME INSIDE ↗</span></div>
        </div>
      </div>
      <button className="paper-skip" onClick={() => finish.current()}>Skip intro <span aria-hidden="true">↗</span></button>
    </div>
  );
}
