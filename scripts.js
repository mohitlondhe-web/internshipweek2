// scripts.js
let slideIndex = 0;
showSlides();

function showSlides() {
    const slides = document.querySelectorAll('.slides img');
    slides.forEach((slide, index) => {
        slide.style.display = index === slideIndex ? 'block' : 'none';
    });

    slideIndex = (slideIndex + 1) % slides.length;
    setTimeout(showSlides, 3000); // Change image every 3 seconds
}

function nextSlide() {
    slideIndex = (slideIndex + 1) % document.querySelectorAll('.slides img').length;
    showSlides();
}

function prevSlide() {
    slideIndex = (slideIndex - 1 + document.querySelectorAll('.slides img').length) % document.querySelectorAll('.slides img').length;
    showSlides();
}
