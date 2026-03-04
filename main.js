// ---- Nav scroll ----
const nav = document.getElementById('nav');
window.addEventListener('scroll', () => {
  nav.classList.toggle('scrolled', window.scrollY > 20);
}, { passive: true });

// ---- Mobile menu ----
const hamburger = document.getElementById('hamburger');
const navLinks   = document.getElementById('nav-links');

hamburger.addEventListener('click', () => {
  const open = navLinks.classList.toggle('open');
  hamburger.setAttribute('aria-expanded', open);
  document.body.style.overflow = open ? 'hidden' : '';
});
navLinks.querySelectorAll('a').forEach(a => a.addEventListener('click', () => {
  navLinks.classList.remove('open');
  hamburger.setAttribute('aria-expanded', 'false');
  document.body.style.overflow = '';
}));

// ---- Scroll reveal ----
document.querySelectorAll(
  '.intro__image, .intro__copy, .service, .step, .contact__copy, .form, .quote-band p'
).forEach(el => el.classList.add('reveal'));

const obs = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (!entry.isIntersecting) return;
    const siblings = [...entry.target.parentElement.children];
    setTimeout(() => entry.target.classList.add('visible'), siblings.indexOf(entry.target) * 80);
    obs.unobserve(entry.target);
  });
}, { threshold: 0.1, rootMargin: '0px 0px -30px 0px' });

document.querySelectorAll('.reveal').forEach(el => obs.observe(el));

// ---- Contact form ----
document.getElementById('contact-form').addEventListener('submit', e => {
  e.preventDefault();
  const btn = e.target.querySelector('button[type="submit"]');
  btn.textContent = 'Sending…';
  btn.disabled = true;
  setTimeout(() => {
    btn.textContent = 'Message sent — thank you';
    btn.style.cssText = 'background:#5a7a5a;border-color:#5a7a5a';
    e.target.reset();
    setTimeout(() => { btn.textContent = 'Send message'; btn.style.cssText = ''; btn.disabled = false; }, 4000);
  }, 1200);
});
