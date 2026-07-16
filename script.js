// ===== THEME TOGGLE =====
const themeToggleBtn = document.getElementById('theme-toggle');
const themeIcon = document.getElementById('theme-icon');
const body = document.body;

// Apply saved theme on page load
const savedTheme = localStorage.getItem('theme');
if (savedTheme === 'light') {
    body.classList.add('light-mode');
    themeIcon.classList.replace('fi-sr-moon', 'fi-sr-sun');
}

themeToggleBtn.addEventListener('click', () => {
    body.classList.toggle('light-mode');
    const isLight = body.classList.contains('light-mode');
    localStorage.setItem('theme', isLight ? 'light' : 'dark');
    themeIcon.classList.toggle('fi-sr-moon', !isLight);
    themeIcon.classList.toggle('fi-sr-sun', isLight);
}
);
