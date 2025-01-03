const hamburgerMenu = document.querySelector('.hamburger-menu');
const sidebar = document.querySelector('.sidebar');
const navLinks = document.querySelectorAll('.sidebar .nav-links a');

hamburgerMenu.addEventListener('click', () => {
    sidebar.classList.toggle('open');
});

navLinks.forEach(link => {
    link.addEventListener('click', () => {
        sidebar.classList.remove('open');
    });
});
