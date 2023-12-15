document.addEventListener("DOMContentLoaded", function() {
  const carousel = document.getElementById("header-carousel");
  const slides = carousel.querySelectorAll(".carousel-item");
  const prevBtn = carousel.querySelector(".carousel-control-prev");
  const nextBtn = carousel.querySelector(".carousel-control-next");
  let currentIndex = 0;

  function showSlide(index) {
    slides.forEach((slide, i) => {
      slide.style.transform = `translateX(${100 * (i - index)}%)`;
    });
  }

  prevBtn.addEventListener("click", function() {
    currentIndex = (currentIndex - 1 + slides.length) % slides.length;
    showSlide(currentIndex);
  });

  nextBtn.addEventListener("click", function() {
    currentIndex = (currentIndex + 1) % slides.length;
    showSlide(currentIndex);
  });

  showSlide(0);
});

const backToTopBtn = document.getElementById('backToTopBtn');

function toggleBackToTopButton() {
  if (window.scrollY > 300) { 
        backToTopBtn.style.display = 'block';
  } else {
    backToTopBtn.style.display = 'none';
  }
}

window.addEventListener('scroll', toggleBackToTopButton);

toggleBackToTopButton();



