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
