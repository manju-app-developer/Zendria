// Mobile Menu Toggle with Animation and Smooth Effects
const menuIcon = document.getElementById('menu-icon');
const navList = document.querySelector('#nav ul');

menuIcon.addEventListener('click', () => {
    navList.classList.toggle('active');
    menuIcon.classList.toggle('open');
});

// Automatic Image Slider with Advanced Smooth Transitions
let slideIndex = 0;
const slides = document.querySelectorAll('.slide');
const totalSlides = slides.length;

function showSlides() {
    slides.forEach((slide, index) => {
        slide.style.opacity = '0';
        slide.style.transition = 'opacity 1s ease-in-out, transform 1s ease-in-out';
        slide.style.transform = 'scale(0.9)';
    });
    slideIndex = (slideIndex + 1) % totalSlides;
    slides[slideIndex].style.display = 'block';
    setTimeout(() => {
        slides[slideIndex].style.opacity = '1';
        slides[slideIndex].style.transform = 'scale(1)';
    }, 50);
    setTimeout(showSlides, 3500);
}

document.addEventListener('DOMContentLoaded', () => {
    showSlides();
});

