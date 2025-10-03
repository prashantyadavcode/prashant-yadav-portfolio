// Smooth scroll for internal anchor links (hero CTA)
document.addEventListener('DOMContentLoaded', () => {
  const cta = document.querySelector('.hero__cta');
  if (cta) {
    cta.addEventListener('click', (e) => {
      if (cta.getAttribute('href')?.startsWith('#')) {
        e.preventDefault();
        const id = cta.getAttribute('href').slice(1);
        const el = document.getElementById(id);
        if (el) {
          el.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }
    });
  }
});


