const menuBtn = document.querySelector('#menu-btn i');
const closeBtn = document.querySelector('#close-btn i');
const navbar = document.querySelector('.header .flex .navbar');
const slides = document.querySelectorAll('.reviews .box-container .box');
const prevSlide = document.querySelector('#prev-btn');
const nextSlide = document.querySelector('#next-btn');

let index = 0;

menuBtn.onclick = () => {
    navbar.classList.add('active')
}
closeBtn.onclick = () => {
    navbar.classList.remove('active')
}
window.onscroll = () => {
    navbar.classList.remove('active')
}

function next() {
    slides[index].classList.remove('active');
    index = (index + 1) % slides.length;
    slides[index].classList.add('active');
}

function prev() {
    slides[index].classList.remove('active');
    index = (index - 1 + slides.length) % slides.length;
    slides[index].classList.add('active');
}
prevSlide.addEventListener('click', prev);
nextSlide.addEventListener('click', next);