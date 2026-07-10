// counting
const statNumbers = document.querySelectorAll(".home-stat-number");

const statObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      const number = entry.target;

      const target = parseInt(number.dataset.target);

      let count = 0;

      const increment = target / 100;

      const updateCounter = () => {
        count += increment;

        if (count < target) {
          number.textContent = Math.floor(count).toLocaleString();

          requestAnimationFrame(updateCounter);
        } else {
          number.textContent = target.toLocaleString() + "+";
        }
      };

      updateCounter();

      statObserver.unobserve(number);
    }
  });
});

statNumbers.forEach((number) => {
  statObserver.observe(number);
});

// carousel

const slides = document.querySelectorAll(".home-carousel-slide");

const dots = document.querySelectorAll(".home-carousel-dot");

const prevBtn = document.querySelector(".home-carousel-prev");

const nextBtn = document.querySelector(".home-carousel-next");

let currentSlide = 0;

function showSlide(index) {
  slides.forEach((slide) => slide.classList.remove("active"));

  dots.forEach((dot) => dot.classList.remove("active"));

  slides[index].classList.add("active");
  dots[index].classList.add("active");

  currentSlide = index;
}

function nextSlide() {
  let next = currentSlide + 1;

  if (next >= slides.length) {
    next = 0;
  }

  showSlide(next);
}

function prevSlide() {
  let prev = currentSlide - 1;

  if (prev < 0) {
    prev = slides.length - 1;
  }

  showSlide(prev);
}

nextBtn.addEventListener("click", nextSlide);

prevBtn.addEventListener("click", prevSlide);

dots.forEach((dot, index) => {
  dot.addEventListener("click", () => {
    showSlide(index);
  });
});

setInterval(() => {
  nextSlide();
}, 5000);
