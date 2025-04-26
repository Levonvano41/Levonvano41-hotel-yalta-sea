// Mobile Menu Toggle
document.addEventListener('DOMContentLoaded', function() {
  const mobileMenuToggle = document.querySelector('.header__mobile-toggle');
  const mobileMenu = document.querySelector('.mobile-menu');
  const mobileMenuClose = document.querySelector('.mobile-menu__close');
  const mobileMenuLinks = document.querySelectorAll('.mobile-menu__list a');
  
  function toggleMobileMenu() {
    mobileMenu.classList.toggle('active');
    document.body.style.overflow = mobileMenu.classList.contains('active') ? 'hidden' : '';
  }
  
  mobileMenuToggle.addEventListener('click', toggleMobileMenu);
  mobileMenuClose.addEventListener('click', toggleMobileMenu);
  
  mobileMenuLinks.forEach(link => {
    link.addEventListener('click', toggleMobileMenu);
  });
  
  // Header Background on Scroll
  const header = document.querySelector('.header');
  
  window.addEventListener('scroll', function() {
    if (window.scrollY > 100) {
      header.style.backgroundColor = 'rgba(255, 255, 255, 0.98)';
      header.style.boxShadow = '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)';
    } else {
      header.style.backgroundColor = 'rgba(255, 255, 255, 0.9)';
      header.style.boxShadow = '0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)';
    }
  });
  
  // Reviews Slider Controls
  const reviewsSlider = document.querySelector('.reviews__slider');
  const prevButton = document.querySelector('.control-prev');
  const nextButton = document.querySelector('.control-next');
  const reviewCards = document.querySelectorAll('.review-card');
  
  if (reviewsSlider && prevButton && nextButton) {
    const cardWidth = reviewCards[0].offsetWidth + 32; // Add gap
    
    prevButton.addEventListener('click', function() {
      reviewsSlider.scrollBy({
        left: -cardWidth,
        behavior: 'smooth'
      });
    });
    
    nextButton.addEventListener('click', function() {
      reviewsSlider.scrollBy({
        left: cardWidth,
        behavior: 'smooth'
      });
    });
  }
  
  // Booking Form Dates Setup
  const checkInInput = document.getElementById('check-in');
  const checkOutInput = document.getElementById('check-out');
  
  if (checkInInput && checkOutInput) {
    // Set min date to today
    const today = new Date();
    const tomorrow = new Date(today);
    tomorrow.setDate(tomorrow.getDate() + 1);
    
    const formatDate = (date) => {
      const year = date.getFullYear();
      const month = String(date.getMonth() + 1).padStart(2, '0');
      const day = String(date.getDate()).padStart(2, '0');
      return `${year}-${month}-${day}`;
    };
    
    checkInInput.min = formatDate(today);
    checkInInput.value = formatDate(today);
    
    checkOutInput.min = formatDate(tomorrow);
    checkOutInput.value = formatDate(tomorrow);
    
    // Update checkout min date when check-in changes
    checkInInput.addEventListener('change', function() {
      const newCheckInDate = new Date(this.value);
      const newMinCheckOutDate = new Date(newCheckInDate);
      newMinCheckOutDate.setDate(newMinCheckOutDate.getDate() + 1);
      
      checkOutInput.min = formatDate(newMinCheckOutDate);
      
      // If current checkout date is before new min date, update it
      if (new Date(checkOutInput.value) <= newCheckInDate) {
        checkOutInput.value = formatDate(newMinCheckOutDate);
      }
    });
  }
  
  // Add animation classes when elements come into view
  const animateOnScroll = function() {
    const elements = document.querySelectorAll('.room-card, .amenity-card, .offer-card, .gallery__item');
    
    elements.forEach(element => {
      const elementPosition = element.getBoundingClientRect().top;
      const screenPosition = window.innerHeight / 1.2;
      
      if (elementPosition < screenPosition) {
        element.classList.add('slide-up');
      }
    });
  };
  
  window.addEventListener('scroll', animateOnScroll);
  animateOnScroll(); // Run once on load
  
  // Form Submissions
  const bookingForm = document.querySelector('.booking__form');
  const footerForm = document.querySelector('.footer__form');
  
  if (bookingForm) {
    bookingForm.addEventListener('submit', function(e) {
      e.preventDefault();
      alert('Спасибо за заявку! Мы свяжемся с вами в ближайшее время для подтверждения бронирования.');
    });
  }
  
  if (footerForm) {
    footerForm.addEventListener('submit', function(e) {
      e.preventDefault();
      const emailInput = this.querySelector('input[type="email"]');
      if (emailInput.value) {
        alert('Спасибо за подписку! Вы будете получать наши новости и специальные предложения.');
        emailInput.value = '';
      }
    });
  }
  
  // Room Booking Buttons
  const roomBookingButtons = document.querySelectorAll('.room-card .btn-primary, .offer-card .btn-primary, .btn-booking');
  
  roomBookingButtons.forEach(button => {
    button.addEventListener('click', function() {
      document.getElementById('booking').scrollIntoView({ behavior: 'smooth' });
    });
  });
});