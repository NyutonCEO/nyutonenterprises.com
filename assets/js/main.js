// Mobile menu toggle with a11y
const burger = document.querySelector('[data-burger]');
const menu = document.querySelector('[data-menu]');
if (burger && menu) {
  const toggle = () => {
    const open = menu.classList.toggle('open');
    burger.setAttribute('aria-expanded', open ? 'true' : 'false');
  };
  burger.addEventListener('click', toggle);
  burger.addEventListener('keydown', (e) => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); toggle(); }});
  document.addEventListener('keydown', (e) => { if (e.key === 'Escape') { menu.classList.remove('open'); burger.setAttribute('aria-expanded', 'false'); }});
}

// Basic client-side honeypot for contact form
const contactForm = document.querySelector('#contact-form');
if (contactForm) {
  contactForm.addEventListener('submit', (e) => {
    const trap = document.querySelector('#website'); // honeypot
    if (trap && trap.value) {
      // likely a bot, silently drop
      e.preventDefault();
      return;
    }
    // TODO: wire to Formspree/Getform or backend
    e.preventDefault();
    const msg = document.querySelector('#form-msg');
    if (msg) {
      msg.textContent = 'Thanks — we got it. We’ll reach out soon.';
      msg.className = 'alert good';
    }
    contactForm.reset();
  });
}
