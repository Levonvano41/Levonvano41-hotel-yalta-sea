/**
 * Booking form functionality
 */
export function initBookingForm() {
  const bookingForm = document.getElementById('reservation-form');
  const contactForm = document.getElementById('contact-form');
  const newsletterForm = document.getElementById('newsletter-form');
  
  if (bookingForm) {
    bookingForm.addEventListener('submit', (e) => {
      e.preventDefault();
      
      // Get form data
      const checkIn = document.getElementById('check-in').value;
      const checkOut = document.getElementById('check-out').value;
      const guests = document.getElementById('guests').value;
      const roomType = document.getElementById('room-type').value;
      
      // Simple validation
      if (!checkIn || !checkOut || !guests || !roomType) {
        alert('Please fill in all fields');
        return;
      }
      
      const bookingData = {
        checkIn,
        checkOut,
        guests,
        roomType
      };
      
      // Here you would typically send the data to a server
      console.log('Booking data:', bookingData);
      
      // For demo purposes, show success message
      const formContainer = bookingForm.parentElement;
      
      formContainer.innerHTML = `
        <div class="booking-success">
          <h3>Thank You!</h3>
          <p>Your booking request has been received for a ${roomType} from ${checkIn} to ${checkOut} for ${guests} guest(s).</p>
          <p>Our reservation team will contact you shortly to confirm your booking details.</p>
          <button class="btn btn-primary btn-block" onclick="location.reload()">Make Another Booking</button>
        </div>
      `;
    });
  }
  
  if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();
      
      // Get form data
      const name = document.getElementById('name').value;
      const email = document.getElementById('email').value;
      const subject = document.getElementById('subject').value;
      const message = document.getElementById('message').value;
      
      // Simple validation
      if (!name || !email || !subject || !message) {
        alert('Please fill in all fields');
        return;
      }
      
      const contactData = {
        name,
        email,
        subject,
        message
      };
      
      // Here you would typically send the data to a server
      console.log('Contact form data:', contactData);
      
      // For demo purposes, show success message
      const formContainer = contactForm.parentElement;
      
      formContainer.innerHTML = `
        <div class="contact-success">
          <h3>Message Sent!</h3>
          <p>Thank you for contacting us, ${name}. We will get back to you shortly.</p>
          <button class="btn btn-primary btn-block" onclick="location.reload()">Send Another Message</button>
        </div>
      `;
    });
  }
  
  if (newsletterForm) {
    newsletterForm.addEventListener('submit', (e) => {
      e.preventDefault();
      
      // Get email from form
      const email = newsletterForm.querySelector('input').value;
      
      // Simple validation
      if (!email) {
        alert('Please enter your email address');
        return;
      }
      
      // Here you would typically send the data to a server
      console.log('Newsletter subscription:', email);
      
      // For demo purposes, show success message
      const originalHTML = newsletterForm.innerHTML;
      
      newsletterForm.innerHTML = `<p style="color: var(--color-secondary);">Thank you for subscribing!</p>`;
      
      // Reset after 3 seconds
      setTimeout(() => {
        newsletterForm.innerHTML = originalHTML;
        newsletterForm.querySelector('input').value = '';
      }, 3000);
    });
  }
}