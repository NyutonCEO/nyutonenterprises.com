// A/B Test disabled - using default HTML content
// (function () {
//   var variant = localStorage.getItem('ab-homepage');
//   if (!variant) { variant = Math.random() < 0.5 ? 'A' : 'B'; localStorage.setItem('ab-homepage', variant); }
//   document.documentElement.setAttribute('data-ab-variant', variant);
//   if (variant === 'B') {
//     var hero = document.querySelector('.hero-inner');
//     if (!hero) return;
//     // Keep the heading markup (with rotating word) intact to preserve animation
//     var desc = hero.querySelector('p');
//     if (desc) {
//       desc.innerHTML = 'We help businesses in Raleigh build new cash-flow streams through smart vending, micro-markets & cybersecurity.';
//     }
//   }
// })();
