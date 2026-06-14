// ── IMPERA WEBSITE JS ──

// Mobile nav toggle
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');

if (hamburger) {
  hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('open');
    hamburger.classList.toggle('active');
  });
  // Close nav when link clicked
  navLinks.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      navLinks.classList.remove('open');
      hamburger.classList.remove('active');
    });
  });
}

// Nav scroll effect
window.addEventListener('scroll', () => {
  const nav = document.querySelector('nav');
  if (window.scrollY > 50) {
    nav.style.borderBottomColor = 'rgba(123,47,190,0.3)';
  } else {
    nav.style.borderBottomColor = 'rgba(123,47,190,0.15)';
  }
});

// Notify form
const notifyForm = document.querySelector('.notify-form');
if (notifyForm) {
  notifyForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const input = notifyForm.querySelector('input');
    const btn = notifyForm.querySelector('button');
    if (input.value && input.value.includes('@')) {
      btn.textContent = 'Done ✓';
      btn.style.background = '#2D8A4E';
      btn.style.color = '#fff';
      input.value = '';
      setTimeout(() => {
        btn.textContent = 'Notify Me';
        btn.style.background = '';
        btn.style.color = '';
      }, 3000);
    }
  });
}

// Fade in on scroll
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = '1';
      entry.target.style.transform = 'translateY(0)';
    }
  });
}, { threshold: 0.1 });

document.querySelectorAll('.collection-card, .product-card, .value-card').forEach(el => {
  el.style.opacity = '0';
  el.style.transform = 'translateY(24px)';
  el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
  observer.observe(el);
});
