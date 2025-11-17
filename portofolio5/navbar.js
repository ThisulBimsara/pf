// navbar.js
fetch('navbar.html')
  .then(res => res.text())
  .then(data => {
    document.getElementById('navbar-container').innerHTML = data;

    // Mobile menu toggle
    const menuToggle = document.getElementById('menu-toggle');
    const slideMenu = document.getElementById('slide-menu');
    menuToggle.addEventListener('click', () => {
        slideMenu.classList.toggle('active');
    });

    // Theme toggle
    const toggleBtn = document.getElementById('themeToggle');
    if (localStorage.getItem('theme') === 'dark') {
        document.body.classList.add('dark');
        toggleBtn.textContent = '☀️';
    }

    toggleBtn.onclick = () => {
        document.body.classList.toggle('dark');
        if (document.body.classList.contains('dark')) {
            toggleBtn.textContent = '☀️';
            localStorage.setItem('theme', 'dark');
        } else {
            toggleBtn.textContent = '🌙';
            localStorage.setItem('theme', 'light');
        }
    };

    // Active link highlight
    const navLinks = document.querySelectorAll('.nav-links a');
    navLinks.forEach(link => {
        if (link.href === window.location.href) {
            link.classList.add('active');
        }
    });
  });
