(function () {
  var variant = localStorage.getItem('ab-homepage');
  if (!variant) { variant = Math.random() < 0.5 ? 'A' : 'B'; localStorage.setItem('ab-homepage', variant); }
  document.documentElement.setAttribute('data-ab-variant', variant);
  if (variant === 'B') {
    var hero = document.querySelector('.hero-inner');
    if (!hero) return;
    // Keep the heading markup (with rotating word) intact to preserve animation
    var desc = hero.querySelector('p');
    if (desc) {
      desc.innerHTML = 'From <strong>vending</strong> to <strong>cybersecurity</strong>, we turn ideas into revenue — fast.';
    }
  }
})();
