// Hero Slideshow
const slides = document.querySelectorAll(".hero-slide");
let currentSlide = 0;

setInterval(() => {
  slides[currentSlide].classList.remove("active");
  currentSlide = (currentSlide + 1) % slides.length;
  slides[currentSlide].classList.add("active");
}, 6000);

// // Nav fade-in
// setTimeout(() => {
//   document.querySelector(".floating-nav").classList.add("visible");
// }, 15000);
