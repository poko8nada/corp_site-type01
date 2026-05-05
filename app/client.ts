import { createClient } from 'honox/client';

createClient();

const revealSelector = '.reveal-on-scroll';
const revealStateAttr = 'data-reveal';

function showImmediately(targets: readonly Element[]): void {
  for (const target of targets) {
    target.classList.add('is-visible');
  }
}

function setupReveal(): void {
  const targets = Array.from(document.querySelectorAll(revealSelector));
  if (targets.length === 0) {
    document.documentElement.removeAttribute(revealStateAttr);
    return;
  }

  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const reduceMotion = prefersReducedMotion;
  if (reduceMotion || !('IntersectionObserver' in window)) {
    document.documentElement.removeAttribute(revealStateAttr);
    showImmediately(targets);
    return;
  }

  document.documentElement.setAttribute(revealStateAttr, 'ready');

  const observer = new IntersectionObserver(
    (entries) => {
      for (const entry of entries) {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          observer.unobserve(entry.target);
        }
      }
    },
    { threshold: 0.2, rootMargin: '0px 0px -8% 0px' },
  );

  for (const target of targets) {
    if (!target.classList.contains('is-visible')) {
      observer.observe(target);
    }
  }
}

function bootReveal(): void {
  requestAnimationFrame(() => {
    setupReveal();
  });
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', bootReveal, { once: true });
} else {
  bootReveal();
}

window.addEventListener('pageshow', bootReveal);
