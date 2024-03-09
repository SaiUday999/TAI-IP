const slides = document.querySelectorAll('.slide');
const prevButton = document.querySelector('.prev');
const nextButton = document.querySelector('.next');
const dotsContainer = document.querySelector('.dots-container');

let currentSlide = 0; 

function showSlide(n) {
  slides[currentSlide].style.display = 'none'; 
  currentSlide = (n + slides.length) % slides.length;
  slides[currentSlide].style.display = 'block'; 
  updateActiveDot(); 
}

function nextSlide() {
  showSlide(currentSlide + 1);
}

function prevSlide() {
  showSlide(currentSlide - 1);
}

function createDots() {
  for (let i = 0; i < slides.length; i++) {
    const dot = document.createElement('div');
    dot.classList.add('dot');
    dot.addEventListener('click', () => showSlide(i));
    dotsContainer.appendChild(dot); 
  }
}

function updateActiveDot() {
  const dots = document.querySelectorAll('.dot');

  dots.forEach((dot, index) => {
    dot.classList.toggle('active', index === currentSlide);
  });
}

// Initial Slide and dots setup
showSlide(currentSlide); 
createDots();
updateActiveDot(); 

prevButton.addEventListener('click', prevSlide);
nextButton.addEventListener('click', nextSlide);

// Auto Transition
setInterval(nextSlide, 3000); 
