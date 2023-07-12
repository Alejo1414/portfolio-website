let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
}

// sticky header
let header = document.querySelector('header');

header.classList.toggle('sticky', window.scrollY > 100);
