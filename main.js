/* ======================================
   WOLF MIND HYPNOTHERAPY — MAIN JS
   ====================================== */

// ---- Nav scroll effect ----
const nav = document.getElementById('nav');
window.addEventListener('scroll', () => {
  nav.classList.toggle('scrolled', window.scrollY > 20);
}, { passive: true });

// ---- Mobile hamburger ----
const hamburger = document.getElementById('hamburger');
const navLinks  = document.getElementById('nav-links');

hamburger.addEventListener('click', () => {
  const isOpen = navLinks.classList.toggle('open');
  hamburger.setAttribute('aria-expanded', isOpen);
  document.body.style.overflow = isOpen ? 'hidden' : '';
});

navLinks.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => {
    navLinks.classList.remove('open');
    hamburger.setAttribute('aria-expanded', 'false');
    document.body.style.overflow = '';
  });
});

// ---- Scroll reveal ----
const revealTargets = document.querySelectorAll(
  '.help-card, .pillar, .faq__item, .about__image-wrap, .about__copy, ' +
  '.approach__copy, .approach__pillars, .contact__copy, .contact-form, ' +
  '.section-header, .tagline-band__text, .reassure-item'
);

revealTargets.forEach(el => el.classList.add('reveal'));

const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (!entry.isIntersecting) return;
    const siblings = [...entry.target.parentElement.children];
    const idx = siblings.indexOf(entry.target);
    setTimeout(() => entry.target.classList.add('visible'), idx * 70);
    revealObserver.unobserve(entry.target);
  });
}, { threshold: 0.1, rootMargin: '0px 0px -30px 0px' });

revealTargets.forEach(el => revealObserver.observe(el));

// ---- Contact form ----
const form = document.getElementById('contact-form');
form.addEventListener('submit', (e) => {
  e.preventDefault();

  const btn = form.querySelector('button[type="submit"]');
  const original = btn.textContent;
  btn.textContent = 'Sending…';
  btn.disabled = true;

  setTimeout(() => {
    btn.textContent = 'Enquiry sent — thank you';
    btn.style.background = '#2d6a4f';
    btn.style.borderColor = '#2d6a4f';
    btn.style.color = '#d8f3dc';
    form.reset();

    setTimeout(() => {
      btn.textContent = original;
      btn.style.cssText = '';
      btn.disabled = false;
    }, 4000);
  }, 1200);
});
