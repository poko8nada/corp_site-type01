import { createClient } from 'honox/client';

createClient();

document.documentElement.setAttribute('data-reveal', '');

const observer = new IntersectionObserver(
  (entries) => {
    for (const entry of entries) {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        observer.unobserve(entry.target);
      }
    }
  },
  { threshold: 0.15 },
);

const targets = Array.from(document.querySelectorAll('.reveal-on-scroll'));
for (let i = 0; i < targets.length; i++) {
  observer.observe(targets[i]);
}
