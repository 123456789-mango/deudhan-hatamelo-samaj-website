// ── Mobile Nav Toggle ────────────────────────────────────
const hamburger = document.querySelector('.hamburger');
const nav = document.querySelector('.nav');

if (hamburger && nav) {
  hamburger.addEventListener('click', () => {
    nav.classList.toggle('open');
    // Animate bars
    const bars = hamburger.querySelectorAll('.bar');
    if (nav.classList.contains('open')) {
      bars[0].style.transform = 'translateY(7.5px) rotate(45deg)';
      bars[1].style.transform = 'translateY(-7.5px) rotate(-45deg)';
    } else {
      bars[0].style.transform = '';
      bars[1].style.transform = '';
    }
  });

  // Close nav when any nav link is clicked
  nav.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      nav.classList.remove('open');
      hamburger.querySelectorAll('.bar').forEach(b => b.style.transform = '');
    });
  });

  // Close nav on outside click
  document.addEventListener('click', (e) => {
    if (!hamburger.contains(e.target) && !nav.contains(e.target)) {
      nav.classList.remove('open');
      hamburger.querySelectorAll('.bar').forEach(b => b.style.transform = '');
    }
  });
}

// ── Active nav link on scroll ─────────────────────────────
const sections = document.querySelectorAll('section[id]');
const navLinks = document.querySelectorAll('.nav-link');

function updateActiveLink() {
  const scrollY = window.scrollY + 80;
  sections.forEach(section => {
    const sectionTop = section.offsetTop;
    const sectionHeight = section.offsetHeight;
    const sectionId = section.getAttribute('id');
    if (scrollY >= sectionTop && scrollY < sectionTop + sectionHeight) {
      navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === '#' + sectionId ||
            link.getAttribute('href') === 'index.html#' + sectionId) {
          link.classList.add('active');
        }
      });
    }
  });
}

window.addEventListener('scroll', updateActiveLink, { passive: true });