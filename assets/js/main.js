const burger = document.querySelector('[data-burger]');
const menu = document.querySelector('[data-menu]');

if (burger && menu) {
  const toggle = () => {
    const open = menu.classList.toggle('open');
    burger.setAttribute('aria-expanded', open ? 'true' : 'false');
  };

  burger.addEventListener('click', toggle);
  burger.addEventListener('keydown', e => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      toggle();
    }
  });

  document.addEventListener('keydown', e => {
    if (e.key === 'Escape') {
      menu.classList.remove('open');
      burger.setAttribute('aria-expanded', 'false');
    }
  });
}

const siteSearch = document.querySelector('[data-site-search]');

if (siteSearch) {
  const routes = [
    { terms: ['vending', 'micro', 'market', 'snack', 'drink', 'rdu', 'airport'], path: '/vending.html' },
    { terms: ['game', 'gaming', 'interactive'], path: '/gaming.html' },
    { terms: ['cyber', 'security', 'compliance', 'hipaa'], path: '/cybersecurity.html' },
    { terms: ['ads', 'advertising', 'seo', 'marketing'], path: '/online-ads.html' },
    { terms: ['bitcoin', 'capital'], path: '/bitcoin-strategies.html' },
    { terms: ['about', 'company', 'nyuton'], path: '/about.html' },
    { terms: ['contact', 'quote', 'schedule', 'call'], path: '/contact.html' },
    { terms: ['service', 'services'], path: '/services.html' }
  ];

  siteSearch.addEventListener('submit', event => {
    event.preventDefault();
    const data = new FormData(siteSearch);
    const query = (data.get('q') || '').toString().trim().toLowerCase();
    const match = routes.find(route => route.terms.some(term => query.includes(term)));
    window.location.href = match ? match.path : '/services.html';
  });
}

// Hero rotating word flicker
const initRotatingWord = () => {
  const el = document.querySelector('.flicker-word');
  if (!el) return;
  const raw = el.getAttribute('data-rotating-words') || '';
  const words = raw.split(',').map(s => s.trim()).filter(Boolean);
  if (!words.length) return;

  let i = Math.max(0, words.indexOf(el.textContent.trim() || words[0]));

  const applyWord = (w) => {
    el.classList.remove('flicker-animate');
    void el.offsetWidth;
    el.textContent = w;
    el.setAttribute('data-text', w);
    el.classList.add('flicker-animate');
  };

  applyWord(words[i]);
  setInterval(() => {
    i = (i + 1) % words.length;
    applyWord(words[i]);
  }, 1800);
};

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initRotatingWord);
} else {
  initRotatingWord();
}
