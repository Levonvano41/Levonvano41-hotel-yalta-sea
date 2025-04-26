/**
 * Gallery functionality
 */
export function initGallery() {
  const galleryItems = document.querySelectorAll('.gallery-item');
  
  if (!galleryItems.length) return;
  
  galleryItems.forEach(item => {
    // Add click event for lightbox functionality
    item.addEventListener('click', () => {
      const imgSrc = item.querySelector('img').src;
      
      // Create and append lightbox
      const lightbox = document.createElement('div');
      lightbox.classList.add('lightbox');
      
      lightbox.innerHTML = `
        <div class="lightbox-content">
          <span class="close-lightbox">&times;</span>
          <img src="${imgSrc}" alt="Gallery Image">
        </div>
      `;
      
      document.body.appendChild(lightbox);
      document.body.style.overflow = 'hidden'; // Prevent scrolling
      
      // Add lightbox styles dynamically
      const style = document.createElement('style');
      style.textContent = `
        .lightbox {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background-color: rgba(0, 0, 0, 0.9);
          display: flex;
          align-items: center;
          justify-content: center;
          z-index: 1100;
          opacity: 0;
          transition: opacity 0.3s ease;
        }
        .lightbox.show {
          opacity: 1;
        }
        .lightbox-content {
          position: relative;
          max-width: 90%;
          max-height: 90%;
        }
        .lightbox img {
          max-width: 100%;
          max-height: 90vh;
          border: 5px solid white;
        }
        .close-lightbox {
          position: absolute;
          top: -40px;
          right: 0;
          color: white;
          font-size: 30px;
          cursor: pointer;
        }
      `;
      
      document.head.appendChild(style);
      
      // Animate in
      setTimeout(() => {
        lightbox.classList.add('show');
      }, 10);
      
      // Close lightbox on click
      lightbox.addEventListener('click', (e) => {
        if (e.target === lightbox || e.target.classList.contains('close-lightbox')) {
          lightbox.classList.remove('show');
          
          // Remove after animation
          setTimeout(() => {
            document.body.removeChild(lightbox);
            document.body.style.overflow = ''; // Restore scrolling
          }, 300);
        }
      });
    });
  });
}