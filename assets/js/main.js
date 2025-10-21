const burger = document.querySelector('[data-burger]'); const menu = document.querySelector('[data-menu]'); if (burger && menu) { const toggle = () => { const open = menu.classList.toggle('open'); burger.setAttribute('aria-expanded', open ? 'true' : 'false'); }; burger.addEventListener('click', toggle); burger.addEventListener('keydown', e => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); toggle(); }}); document.addEventListener('keydown', e => { if (e.key === 'Escape') { menu.classList.remove('open'); burger.setAttribute('aria-expanded', 'false'); }}); }

// Hero rotating word flicker
document.addEventListener('DOMContentLoaded', () => {
  const el = document.querySelector('.flicker-word');
  if (!el) return;
  const raw = el.getAttribute('data-rotating-words') || '';
  const words = raw.split(',').map(s => s.trim()).filter(Boolean);
  if (!words.length) return;

  let i = 0;
  const applyWord = (w) => {
    // retrigger CSS animation by toggling class
    el.classList.remove('flicker-animate');
    // force reflow
    void el.offsetWidth;
    el.textContent = w;
    el.setAttribute('data-text', w);
    el.classList.add('flicker-animate');
  };

  // initialize with first word (respect existing text if present)
  const initial = el.textContent.trim() || words[0];
  const startIndex = Math.max(0, words.indexOf(initial));
  i = startIndex;
  applyWord(words[i]);

  // rotate every 1.8s
  const intervalMs = 1800;
  setInterval(() => {
    i = (i + 1) % words.length;
    applyWord(words[i]);
  }, intervalMs);
});

// Loading screen management
document.addEventListener('DOMContentLoaded', () => {
  const loadingScreen = document.getElementById('loadingScreen');
  
  // Hide loading screen after 3 seconds
  setTimeout(() => {
    if (loadingScreen) {
      loadingScreen.classList.add('hidden');
      // Remove from DOM after animation
      setTimeout(() => {
        loadingScreen.remove();
      }, 800);
    }
  }, 3000);
});

// Premium slider with entrance animations
document.addEventListener('DOMContentLoaded', () => {
  const root = document.querySelector('[data-slider]');
  if (!root) return;
  const track = root.querySelector('[data-slides]');
  const slides = Array.from(track.children);
  const prev = root.querySelector('[data-prev]');
  const next = root.querySelector('[data-next]');
  const dotsWrap = root.querySelector('[data-dots]');
  let index = 0; let timer; const delay = 4500;

  // Trigger slider entrance animation
  setTimeout(() => {
    root.classList.remove('loading');
    root.classList.add('loaded');
  }, 800);

  const setIndex = (n) => { index = (n + slides.length) % slides.length; update(); };
  const update = () => {
    track.style.transform = `translateX(-${index * 100}%)`;
    dotsWrap.querySelectorAll('button').forEach((b, i) => b.setAttribute('aria-selected', i === index ? 'true' : 'false'));
  };

  // Dots
  slides.forEach((_, i) => {
    const b = document.createElement('button');
    b.type = 'button'; b.setAttribute('role', 'tab'); b.setAttribute('aria-label', `Go to slide ${i+1}`);
    b.addEventListener('click', () => { setIndex(i); restart(); });
    dotsWrap.appendChild(b);
  });

  prev?.addEventListener('click', () => { setIndex(index - 1); restart(); });
  next?.addEventListener('click', () => { setIndex(index + 1); restart(); });

  const start = () => { timer = setInterval(() => setIndex(index + 1), delay); };
  const stop = () => { if (timer) clearInterval(timer); };
  const restart = () => { stop(); start(); };

  // Pause on hover/focus
  root.addEventListener('mouseenter', stop);
  root.addEventListener('mouseleave', start);
  root.addEventListener('focusin', stop);
  root.addEventListener('focusout', start);

  // Swipe
  let startX = 0; let dx = 0; let touching = false;
  const onStart = (x) => { touching = true; startX = x; dx = 0; stop(); };
  const onMove = (x) => { if (!touching) return; dx = x - startX; track.style.transform = `translateX(calc(-${index*100}% + ${dx}px))`; };
  const onEnd = () => { if (!touching) return; touching = false; const threshold = 60; if (dx > threshold) setIndex(index - 1); else if (dx < -threshold) setIndex(index + 1); else update(); start(); };
  root.addEventListener('touchstart', e => onStart(e.touches[0].clientX), { passive: true });
  root.addEventListener('touchmove', e => onMove(e.touches[0].clientX), { passive: true });
  root.addEventListener('touchend', onEnd);

  // Init
  update(); start();
});

// Scroll reveal
document.addEventListener('DOMContentLoaded', () => {
  const sections = document.querySelectorAll('.reveal');
  if (!sections.length || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
  const io = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        io.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12 });
  sections.forEach(s => io.observe(s));
});