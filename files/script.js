const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");
const backHamburger = document.querySelector(".hamburgerback");

hamburger.addEventListener("click", mobileMenu);

function mobileMenu() {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
    backHamburger.classList.toggle("active");
    // document.body.classList.toggle('lock-scroll');
}


const navLink = document.querySelectorAll(".nav-link");
navLink.forEach(n => n.addEventListener("click", closeMenu));

function closeMenu() {
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
    backHamburger.classList.remove("active");
    // document.body.classList.toggle('lock-scroll');
}