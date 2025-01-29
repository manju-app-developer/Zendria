// Mobile Menu Toggle with Animation and Smooth Effects
const menuIcon = document.getElementById('menu-icon');
const navList = document.querySelector('#nav ul');

menuIcon.addEventListener('click', () => {
    navList.classList.toggle('active');
    menuIcon.classList.toggle('open');
    navList.style.transition = 'transform 0.4s ease-in-out, opacity 0.3s ease';
    if (navList.classList.contains('active')) {
        navList.style.transform = 'translateX(0)';
        navList.style.opacity = '1';
    } else {
        navList.style.transform = 'translateX(-100%)';
        navList.style.opacity = '0';
    }
});

// Automatic Image Slider with Advanced Smooth Transitions
let slideIndex = 0;
const slides = document.querySelectorAll('.slide');
const totalSlides = slides.length;

function showSlides() {
    slides.forEach((slide) => {
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

// Parallax Scrolling Effect for Sections
document.addEventListener("scroll", () => {
    const parallaxElements = document.querySelectorAll(".parallax");
    let scrollPosition = window.pageYOffset;
    parallaxElements.forEach((el) => {
        let speed = el.getAttribute("data-speed") || 0.3; // Default speed if not provided
        el.style.transform = `translateY(${scrollPosition * speed}px)`;
    });
});

// Smooth Scrolling for Navigation Links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const targetElement = document.querySelector(this.getAttribute('href'));
        
        if (targetElement) {
            targetElement.scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});
