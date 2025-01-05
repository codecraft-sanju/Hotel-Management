const slider = document.querySelector('.slider');
const prevBtn = document.querySelector('.prev');
const nextBtn = document.querySelector('.next');
let currentSlide = 0;

nextBtn.addEventListener('click', () => {
  currentSlide = (currentSlide + 1) % 4;
  slider.style.transform = `translateX(-${currentSlide * 25}%)`;
});

prevBtn.addEventListener('click', () => {
  currentSlide = (currentSlide - 1 + 4) % 4;
  slider.style.transform = `translateX(-${currentSlide * 25}%)`;
});
