import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const motionTargets = [
  '.hero-copy',
  '.hero-visual',
  '.home-intro-inner > *',
  '.section-heading',
  '.pillar-card',
  '.about-photo-wrap',
  '.about-copy',
  '.about-points',
  '.vision-block',
  '.mission-block',
  '.vision-mantra',
  '.promise-card',
  '.techverse-heading',
  '.discipline-card',
  '.techverse-bottom',
  '.why-grid article',
  '.why-quote',
  '.vote-page-card',
  '.vote-terminal',
  '.vote-copy',
  '.vote-side',
];

export default function ScrollMotion() {
  const { pathname } = useLocation();

  useEffect(() => {
    const elements = document.querySelectorAll(motionTargets.join(','));
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    if (reduceMotion || !('IntersectionObserver' in window)) {
      elements.forEach((element) => element.classList.add('motion-visible'));
      return undefined;
    }

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(({ isIntersecting, target }) => {
        if (isIntersecting) {
          target.classList.add('motion-visible');
          observer.unobserve(target);
        }
      });
    }, { threshold: 0.12, rootMargin: '0px 0px -5% 0px' });

    elements.forEach((element, index) => {
      element.classList.add('motion-reveal');
      element.style.setProperty('--motion-delay', `${(index % 6) * 65}ms`);
      observer.observe(element);
    });

    return () => observer.disconnect();
  }, [pathname]);

  return null;
}
