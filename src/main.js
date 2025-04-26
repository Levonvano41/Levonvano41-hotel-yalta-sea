import './styles/main.css';
import { initNavigation } from './components/navigation.js';
import { initRoomSlider } from './components/roomSlider.js';
import { initGallery } from './components/gallery.js';
import { initAnimations } from './components/animations.js';
import { initBookingForm } from './components/bookingForm.js';
import { initTestimonials } from './components/testimonials.js';

document.addEventListener('DOMContentLoaded', () => {
  renderApp();
  initNavigation();
  initRoomSlider();
  initGallery();
  initAnimations();
  initBookingForm();
  initTestimonials();
});

function renderApp() {
  document.querySelector('#app').innerHTML = `
    <header class="header">
      <div class="header-container">
        <div class="logo">
          <h1>Yalta<span>Intourist</span></h1>
        </div>
        <nav class="main-nav">
          <ul>
            <li><a href="#home" class="active">Home</a></li>
            <li><a href="#rooms">Rooms</a></li>
            <li><a href="#amenities">Amenities</a></li>
            <li><a href="#gallery">Gallery</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
          <div class="mobile-menu-btn">
            <span></span>
            <span></span>
            <span></span>
          </div>
        </nav>
      </div>
    </header>

    <main>
      <section id="home" class="hero">
        <div class="overlay"></div>
        <div class="hero-content">
          <h2 class="fade-in">Experience Luxury on the Black Sea Coast</h2>
          <p class="fade-in delay-1">Where comfort meets breathtaking views of Yalta</p>
          <a href="#booking" class="btn btn-primary fade-in delay-2">Book Now</a>
        </div>
      </section>

      <section id="booking" class="booking">
        <div class="container">
          <div class="booking-form">
            <h3>Book Your Stay</h3>
            <form id="reservation-form">
              <div class="form-row">
                <div class="form-group">
                  <label for="check-in">Check In</label>
                  <input type="date" id="check-in" required>
                </div>
                <div class="form-group">
                  <label for="check-out">Check Out</label>
                  <input type="date" id="check-out" required>
                </div>
              </div>
              <div class="form-row">
                <div class="form-group">
                  <label for="guests">Guests</label>
                  <select id="guests" required>
                    <option value="1">1 Guest</option>
                    <option value="2" selected>2 Guests</option>
                    <option value="3">3 Guests</option>
                    <option value="4">4 Guests</option>
                  </select>
                </div>
                <div class="form-group">
                  <label for="room-type">Room Type</label>
                  <select id="room-type" required>
                    <option value="standard">Standard Room</option>
                    <option value="superior">Superior Room</option>
                    <option value="deluxe">Deluxe Sea View</option>
                    <option value="suite">Executive Suite</option>
                  </select>
                </div>
              </div>
              <button type="submit" class="btn btn-block">Check Availability</button>
            </form>
          </div>
        </div>
      </section>

      <section id="rooms" class="rooms">
        <div class="container">
          <div class="section-header">
            <h2>Our <span>Rooms</span></h2>
            <p>Modern comfort with panoramic views of the Black Sea</p>
          </div>
          <div class="room-slider">
            <div class="slider-container">
              <div class="room-slide active">
                <div class="room-info">
                  <h3>Deluxe Sea View Room</h3>
                  <p>Spacious rooms with private balconies offering breathtaking views of the Black Sea.</p>
                  <ul class="room-features">
                    <li>Sea View</li>
                    <li>Private Balcony</li>
                    <li>Free WiFi</li>
                    <li>Air Conditioning</li>
                    <li>Room Service</li>
                  </ul>
                  <div class="room-price">
                    <span>From ₽7,500 / night</span>
                    <a href="#booking" class="btn btn-secondary">Book Now</a>
                  </div>
                </div>
                <div class="room-image">
                  <img src="https://images.pexels.com/photos/271624/pexels-photo-271624.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="Deluxe Sea View Room">
                </div>
              </div>
              <div class="room-slide">
                <div class="room-info">
                  <h3>Executive Suite</h3>
                  <p>Luxurious suites with separate living areas and premium amenities.</p>
                  <ul class="room-features">
                    <li>Panoramic Sea View</li>
                    <li>Living Room</li>
                    <li>Premium Toiletries</li>
                    <li>Mini Kitchen</li>
                    <li>VIP Services</li>
                  </ul>
                  <div class="room-price">
                    <span>From ₽15,000 / night</span>
                    <a href="#booking" class="btn btn-secondary">Book Now</a>
                  </div>
                </div>
                <div class="room-image">
                  <img src="https://images.pexels.com/photos/164595/pexels-photo-164595.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="Executive Suite">
                </div>
              </div>
              <div class="room-slide">
                <div class="room-info">
                  <h3>Superior Room</h3>
                  <p>Comfortable rooms with modern amenities and city or mountain views.</p>
                  <ul class="room-features">
                    <li>City View</li>
                    <li>Twin/King Bed</li>
                    <li>Work Desk</li>
                    <li>Safe Box</li>
                    <li>Mini Bar</li>
                  </ul>
                  <div class="room-price">
                    <span>From ₽5,500 / night</span>
                    <a href="#booking" class="btn btn-secondary">Book Now</a>
                  </div>
                </div>
                <div class="room-image">
                  <img src="https://images.pexels.com/photos/1838554/pexels-photo-1838554.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="Superior Room">
                </div>
              </div>
            </div>
            <div class="slider-controls">
              <button class="prev-btn" aria-label="Previous room">&#10094;</button>
              <div class="slider-dots">
                <span class="dot active" data-index="0"></span>
                <span class="dot" data-index="1"></span>
                <span class="dot" data-index="2"></span>
              </div>
              <button class="next-btn" aria-label="Next room">&#10095;</button>
            </div>
          </div>
        </div>
      </section>

      <section id="amenities" class="amenities">
        <div class="container">
          <div class="section-header">
            <h2>Hotel <span>Amenities</span></h2>
            <p>Enjoy our world-class facilities and services</p>
          </div>
          <div class="amenities-grid">
            <div class="amenity-card fade-in">
              <div class="amenity-icon">
                <img src="https://images.pexels.com/photos/261102/pexels-photo-261102.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="Swimming Pools">
              </div>
              <h3>Swimming Pools</h3>
              <p>Indoor and outdoor pools with heated water and children's sections.</p>
            </div>
            <div class="amenity-card fade-in delay-1">
              <div class="amenity-icon">
                <img src="https://images.pexels.com/photos/3188/love-romantic-bath-candlelight.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="Wellness Center">
              </div>
              <h3>Wellness Center</h3>
              <p>Full-service spa, fitness center, and beauty salon.</p>
            </div>
            <div class="amenity-card fade-in delay-2">
              <div class="amenity-icon">
                <img src="https://images.pexels.com/photos/262978/pexels-photo-262978.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="Restaurants">
              </div>
              <h3>Restaurants</h3>
              <p>Multiple dining options featuring local and international cuisine.</p>
            </div>
            <div class="amenity-card fade-in delay-3">
              <div class="amenity-icon">
                <img src="https://images.pexels.com/photos/260447/pexels-photo-260447.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="Beach Access">
              </div>
              <h3>Private Beach</h3>
              <p>Direct access to our equipped beach with sun loungers and umbrellas.</p>
            </div>
          </div>
        </div>
      </section>

      <section id="gallery" class="gallery">
        <div class="container">
          <div class="section-header">
            <h2>Our <span>Gallery</span></h2>
            <p>Experience the beauty of Yalta-Intourist</p>
          </div>
          <div class="gallery-grid">
            <div class="gallery-item">
              <img src="https://images.pexels.com/photos/189296/pexels-photo-189296.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="Hotel Exterior">
            </div>
            <div class="gallery-item">
              <img src="https://images.pexels.com/photos/261327/pexels-photo-261327.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="Lobby">
            </div>
            <div class="gallery-item">
              <img src="https://images.pexels.com/photos/2034335/pexels-photo-2034335.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="Restaurant">
            </div>
            <div class="gallery-item">
              <img src="https://images.pexels.com/photos/3225531/pexels-photo-3225531.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="Pool Area">
            </div>
            <div class="gallery-item">
              <img src="https://images.pexels.com/photos/53464/sheraton-palace-hotel-lobby-architecture-53464.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="Interior">
            </div>
            <div class="gallery-item">
              <img src="https://images.pexels.com/photos/2417842/pexels-photo-2417842.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="Sea View">
            </div>
          </div>
        </div>
      </section>

      <section id="testimonials" class="testimonials">
        <div class="container">
          <div class="section-header">
            <h2>Guest <span>Reviews</span></h2>
            <p>What our guests say about their stay</p>
          </div>
          <div class="testimonial-slider">
            <div class="testimonial-slide active">
              <div class="testimonial-content">
                <div class="quote">"</div>
                <p>Perfect location with stunning views of the Black Sea. The staff was incredibly helpful and professional. The spa services were exceptional.</p>
                <div class="testimonial-author">
                  <h4>Elena Petrova</h4>
                  <p>Moscow, Russia</p>
                </div>
              </div>
            </div>
            <div class="testimonial-slide">
              <div class="testimonial-content">
                <div class="quote">"</div>
                <p>The restaurants offer excellent cuisine, and the beach access is very convenient. We especially enjoyed the evening entertainment program.</p>
                <div class="testimonial-author">
                  <h4>Dmitry Ivanov</h4>
                  <p>St. Petersburg, Russia</p>
                </div>
              </div>
            </div>
            <div class="testimonial-slide">
              <div class="testimonial-content">
                <div class="quote">"</div>
                <p>Great family vacation spot. The kids loved the pools and activities, while we enjoyed the spa and restaurants. Will definitely return!</p>
                <div class="testimonial-author">
                  <h4>The Smirnov Family</h4>
                  <p>Kazan, Russia</p>
                </div>
              </div>
            </div>
          </div>
          <div class="testimonial-dots">
            <span class="t-dot active" data-index="0"></span>
            <span class="t-dot" data-index="1"></span>
            <span class="t-dot" data-index="2"></span>
          </div>
        </div>
      </section>

      <section id="contact" class="contact">
        <div class="container">
          <div class="contact-wrapper">
            <div class="contact-info">
              <h2>Contact <span>Us</span></h2>
              <p>We're here to help you plan your perfect stay in Yalta.</p>
              <div class="contact-details">
                <div class="contact-item">
                  <div class="contact-icon">📍</div>
                  <div>
                    <h4>Location</h4>
                    <p>50 Drazhinskogo St.<br>Yalta, Republic of Crimea, 298600</p>
                  </div>
                </div>
                <div class="contact-item">
                  <div class="contact-icon">📞</div>
                  <div>
                    <h4>Phone</h4>
                    <p>Reservations: +7 (3654) 222-100<br>Reception: +7 (3654) 222-111</p>
                  </div>
                </div>
                <div class="contact-item">
                  <div class="contact-icon">✉️</div>
                  <div>
                    <h4>Email</h4>
                    <p>booking@yaltaintourist.ru<br>info@yaltaintourist.ru</p>
                  </div>
                </div>
              </div>
            </div>
            <div class="contact-form">
              <h3>Send us a Message</h3>
              <form id="contact-form">
                <div class="form-group">
                  <label for="name">Your Name</label>
                  <input type="text" id="name" required>
                </div>
                <div class="form-group">
                  <label for="email">Your Email</label>
                  <input type="email" id="email" required>
                </div>
                <div class="form-group">
                  <label for="subject">Subject</label>
                  <input type="text" id="subject" required>
                </div>
                <div class="form-group">
                  <label for="message">Message</label>
                  <textarea id="message" rows="5" required></textarea>
                </div>
                <button type="submit" class="btn btn-primary btn-block">Send Message</button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </main>

    <footer class="footer">
      <div class="container">
        <div class="footer-content">
          <div class="footer-logo">
            <h2>Yalta<span>Intourist</span></h2>
            <p>Luxury Resort on the Black Sea Coast</p>
          </div>
          <div class="footer-links">
            <div class="footer-section">
              <h3>Quick Links</h3>
              <ul>
                <li><a href="#home">Home</a></li>
                <li><a href="#rooms">Rooms & Suites</a></li>
                <li><a href="#amenities">Amenities</a></li>
                <li><a href="#gallery">Gallery</a></li>
                <li><a href="#contact">Contact</a></li>
              </ul>
            </div>
            <div class="footer-section">
              <h3>Services</h3>
              <ul>
                <li><a href="#">Spa & Wellness</a></li>
                <li><a href="#">Restaurants</a></li>
                <li><a href="#">Conference Rooms</a></li>
                <li><a href="#">Beach Club</a></li>
                <li><a href="#">Children's Club</a></li>
              </ul>
            </div>
            <div class="footer-section">
              <h3>Connect With Us</h3>
              <div class="social-links">
                <a href="#" aria-label="VKontakte">VK</a>
                <a href="#" aria-label="Telegram">TG</a>
                <a href="#" aria-label="Instagram">IG</a>
                <a href="#" aria-label="WhatsApp">WA</a>
              </div>
              <div class="newsletter">
                <h4>Subscribe to our Newsletter</h4>
                <form id="newsletter-form">
                  <input type="email" placeholder="Your email address" required>
                  <button type="submit" class="btn btn-small">Subscribe</button>
                </form>
              </div>
            </div>
          </div>
        </div>
        <div class="footer-bottom">
          <p>&copy; 2025 Yalta-Intourist Hotel. All rights reserved.</p>
          <div class="footer-bottom-links">
            <a href="#">Privacy Policy</a>
            <a href="#">Terms of Service</a>
            <a href="#">Sitemap</a>
          </div>
        </div>
      </div>
    </footer>
  `;
}