/* ===========================
   WOLFMIND — MAIN JS
   =========================== */

// ---- Nav scroll effect ----
const nav = document.getElementById('nav');
window.addEventListener('scroll', () => {
  nav.classList.toggle('scrolled', window.scrollY > 20);
}, { passive: true });

// ---- Mobile hamburger ----
const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('nav-links');

hamburger.addEventListener('click', () => {
  const isOpen = navLinks.classList.toggle('open');
  hamburger.setAttribute('aria-expanded', isOpen);
  document.body.style.overflow = isOpen ? 'hidden' : '';
});

// Close nav on link click
navLinks.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => {
    navLinks.classList.remove('open');
    hamburger.setAttribute('aria-expanded', 'false');
    document.body.style.overflow = '';
  });
});

// ---- Scroll reveal ----
const revealEls = document.querySelectorAll(
  '.service-card, .case-card, .process__step, .testimonial, .team-member, .section-header, .hero__stats'
);

revealEls.forEach(el => el.classList.add('reveal'));

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry, i) => {
    if (entry.isIntersecting) {
      // Stagger sibling elements
      const siblings = [...entry.target.parentElement.children];
      const idx = siblings.indexOf(entry.target);
      setTimeout(() => {
        entry.target.classList.add('visible');
      }, idx * 80);
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });

revealEls.forEach(el => observer.observe(el));

// ---- Contact form ----
const form = document.getElementById('contact-form');
form.addEventListener('submit', (e) => {
  e.preventDefault();

  const btn = form.querySelector('button[type="submit"]');
  const original = btn.textContent;

  btn.textContent = 'Sending…';
  btn.disabled = true;

  // Simulate async submission
  setTimeout(() => {
    btn.textContent = 'Message sent!';
    btn.style.background = '#10b981';
    btn.style.borderColor = '#10b981';
    form.reset();

    setTimeout(() => {
      btn.textContent = original;
      btn.style.background = '';
      btn.style.borderColor = '';
      btn.disabled = false;
    }, 3000);
  }, 1200);
});

// ---- Smooth active nav highlighting ----
const sections = document.querySelectorAll('section[id]');
const navAnchors = document.querySelectorAll('.nav__links a:not(.btn)');

const sectionObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const id = entry.target.id;
      navAnchors.forEach(a => {
        a.style.color = a.getAttribute('href') === `#${id}`
          ? 'var(--clr-white)'
          : '';
      });
    }
  });
}, { threshold: 0.4 });

sections.forEach(s => sectionObserver.observe(s));
