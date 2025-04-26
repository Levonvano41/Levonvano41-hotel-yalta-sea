/**
 * Testimonials slider functionality
 */
export function initTestimonials() {
  const slides = document.querySelectorAll('.testimonial-slide');
  const dots = document.querySelectorAll('.t-dot');
  let currentIndex = 0;
  
  if (!slides.length || !dots.length) return;
  
  // Function to change testimonial
  function goToTestimonial(index) {
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
  
  // Event listeners for dots
  dots.forEach((dot, index) => {
    dot.addEventListener('click', () => {
      goToTestimonial(index);
    });
  });
  
  // Auto-advance testimonials every 6 seconds
  let testimonialInterval = setInterval(() => {
    goToTestimonial(currentIndex + 1);
  }, 6000);
  
  // Pause auto-advance on hover
  const testimonialContainer = document.querySelector('.testimonial-slider');
  if (testimonialContainer) {
    testimonialContainer.addEventListener('mouseenter', () => {
      clearInterval(testimonialInterval);
    });
    
    testimonialContainer.addEventListener('mouseleave', () => {
      testimonialInterval = setInterval(() => {
        goToTestimonial(currentIndex + 1);
      }, 6000);
    });
  }
}