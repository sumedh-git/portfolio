function toggleMenu() {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");
  menu.classList.toggle("open");
  icon.classList.toggle("open");
}

window.onscroll = function() {
  if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
    document.getElementById("scrollTopBtn").style.display = "block";
  } else {
    document.getElementById("scrollTopBtn").style.display = "none";
  }
};

function scrollToTop() {
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const targetId = this.getAttribute('href');
    const targetElement = document.querySelector(targetId);
    if (targetElement) {
      const navbarHeight = document.querySelector('nav').offsetHeight; // Get navbar height
      const offset = targetElement.offsetTop - navbarHeight; // Adjust scroll position
      window.scrollTo({
        top: offset,
        behavior: 'smooth'
      });
    }
  });
});

// Add scroll event listener to the navbar
window.addEventListener("scroll", () => {
  const nav = document.querySelector("nav");
  if (window.scrollY > 50) {
    nav.classList.add("scrolled");
  } else {
    nav.classList.remove("scrolled");
  }
});

// Get the theme toggle checkbox
const themeToggle = document.getElementById("theme-toggle");

// Check for saved theme in localStorage
const savedTheme = localStorage.getItem("theme");

// Apply the saved theme (if any)
if (savedTheme) {
  document.documentElement.setAttribute("data-theme", savedTheme);
  if (savedTheme === "dark") {
    themeToggle.checked = true; // Set the toggle to dark mode
  }
}

// Toggle between dark and light modes
themeToggle.addEventListener("change", () => {
  if (themeToggle.checked) {
    document.documentElement.setAttribute("data-theme", "dark");
    localStorage.setItem("theme", "dark");
  } else {
    document.documentElement.setAttribute("data-theme", "light");
    localStorage.setItem("theme", "light");
  }
});

document.querySelectorAll('.experience-card').forEach(card => {
  card.addEventListener('click', function() {
    this.classList.toggle('open');
    if (this.classList.contains('open')) {
      this.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
  });
});

// Tab functionality
const tabButtons = document.querySelectorAll(".tab-button");
const tabContents = document.querySelectorAll(".skills-grid");

tabButtons.forEach((button) => {
  button.addEventListener("click", () => {
    // Remove active class from all buttons and content
    tabButtons.forEach((btn) => btn.classList.remove("active"));
    tabContents.forEach((content) => content.classList.remove("active"));

    // Add active class to the clicked button and corresponding content
    button.classList.add("active");
    const tabId = button.getAttribute("data-tab");
    document.getElementById(tabId).classList.add("active");
  });
});

// Add to script.js
function createParticles() {
  const particles = document.getElementById('particles');
  const particleCount = 50;

  for (let i = 0; i < particleCount; i++) {
    const particle = document.createElement('div');
    particle.className = 'particle';
    particle.style.cssText = `
      width: ${Math.random() * 3 + 2}px;
      height: ${Math.random() * 3 + 2}px;
      left: ${Math.random() * 100}%;
      top: ${Math.random() * 100}%;
      animation: float ${Math.random() * 10 + 5}s linear infinite;
    `;
    particles.appendChild(particle);
  }
}

// Update particle color on theme change
document.getElementById('theme-toggle').addEventListener('change', () => {
  document.documentElement.style.setProperty(
    '--particle-color',
    document.documentElement.getAttribute('data-theme') === 'dark' 
      ? 'rgba(255, 255, 255, 0.5)' 
      : 'rgba(0, 0, 0, 0.3)'
  );
});

// Initialize
createParticles();

// Close menu when clicking outside
if(menu.classList.contains('open')) {
  document.addEventListener('click', function closeMenu(e) {
    if(!e.target.closest('.hamburger-menu')) {
      menu.classList.remove('open');
      icon.classList.remove('open');
      document.removeEventListener('click', closeMenu);
    }
  });
}