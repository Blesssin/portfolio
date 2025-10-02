// Smooth Scroll for Nav Links
document.querySelectorAll('nav a').forEach(link => {
  link.addEventListener('click', e => {
    e.preventDefault();
    const target = document.querySelector(link.getAttribute('href'));
    target.scrollIntoView({ behavior: 'smooth' });
  });
});

// Animate on Scroll
const animateElements = document.querySelectorAll('[data-animate]');
const skillFills = document.querySelectorAll('.skill-fill');

function animateOnScroll() {
  const triggerBottom = window.innerHeight * 0.85; // 85% of viewport height

  animateElements.forEach(el => {
    const elTop = el.getBoundingClientRect().top;
    if (elTop < triggerBottom) {
      el.style.opacity = 1;
      el.style.transform = 'translateY(0)';
      el.classList.add('animated');
    }
  });

  // Animate skill bars
  skillFills.forEach(fill => {
    const fillTop = fill.getBoundingClientRect().top;
    if (fillTop < triggerBottom) {
      fill.style.width = fill.getAttribute('data-width') || fill.style.width;
    }
  });
}

// Set skill widths from CSS to JS for scroll animation
document.querySelectorAll('.skill-fill').forEach(fill => {
  if (fill.classList.contains('html')) fill.setAttribute('data-width', '90%');
  if (fill.classList.contains('js')) fill.setAttribute('data-width', '75%');
  if (fill.classList.contains('responsive')) fill.setAttribute('data-width', '85%');
});

// Initial animation on load
window.addEventListener('load', () => animateOnScroll());
window.addEventListener('scroll', () => animateOnScroll());

// Optional: Add hover glow to social icons
const socials = document.querySelectorAll('.contact .socials a');
socials.forEach(icon => {
  icon.addEventListener('mouseenter', () => icon.style.textShadow = '0 0 10px #00ffcc, 0 0 20px #00ffcc');
  icon.addEventListener('mouseleave', () => icon.style.textShadow = 'none');
});
