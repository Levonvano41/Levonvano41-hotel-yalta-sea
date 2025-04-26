/**
 * Room Slider functionality
 */
export function initRoomSlider() {
  const slides = document.querySelectorAll('.room-slide');
  const dots = document.querySelectorAll('.dot');
  const prevBtn = document.querySelector('.prev-btn');
  const nextBtn = document.querySelector('.next-btn');
  let currentIndex = 0;
  
  if (!slides.length || !dots.length) return;
  
  // Function to change slide
  function goToSlide(index) {
    // Handle index bounds
    if (index < 0) index = slides.length - 1;
    if (index >= slides.length) index = 0;
    
    // Update active slide
    slides.forEach(slide => slide.classList.remove('active'));
    slides[index].classList.add('active');
    
    // Update active dot
    dots.forEach(dot => dot.classList.remove('active'));
    dots[index].classList.add('active');
    
    currentIndex = index;
  }
  
  // Event listeners for next and previous buttons
  if (prevBtn) {
    prevBtn.addEventListener('click', () => {
      goToSlide(currentIndex - 1);
    });
  }
  
  if (nextBtn) {
    nextBtn.addEventListener('click', () => {
      goToSlide(currentIndex + 1);
    });
  }
  
  // Event listeners for dots
  dots.forEach((dot, index) => {
    dot.addEventListener('click', () => {
      goToSlide(index);
    });
  });
  
  // Auto-advance slides every 5 seconds
  let slideInterval = setInterval(() => {
    goToSlide(currentIndex + 1);
  }, 5000);
  
  // Pause auto-advance on hover
  const sliderContainer = document.querySelector('.room-slider');
  if (sliderContainer) {
    sliderContainer.addEventListener('mouseenter', () => {
      clearInterval(slideInterval);
    });
    
    sliderContainer.addEventListener('mouseleave', () => {
      slideInterval = setInterval(() => {
        goToSlide(currentIndex + 1);
      }, 5000);
    });
  }
}