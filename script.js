//Add an event listener
document.addEventListener('DOMContentLoaded', function() {
    let currentSlide = 0;
    const slides = document.querySelectorAll('.slide');
    const slider = document.getElementById('imageSlider');
    
    // Check if we're on a mobile device/small screen
    const isMobile = () => window.innerWidth <= 768;
    
    // Make changeSlide globally available
    window.changeSlide = function(direction) {
        // Only change slides if not on mobile
        if (!isMobile()) {
            currentSlide += direction;
            
            // Handle slide wrapping
            if (currentSlide >= slides.length) {
                currentSlide = 0;
            }
            if (currentSlide < 0) {
                currentSlide = slides.length - 1;
            }
            
            // Move slider
            slider.style.transform = `translateX(-${currentSlide * 100}%)`;
        }
    };
    
    // Handle small screeen
    window.addEventListener('resize', function() {
        if (isMobile()) {
            // Reset any transforms on mobile
            slider.style.transform = 'none';
        } else {
            // Reset to current slide on desktop
            slider.style.transform = `translateX(-${currentSlide * 100}%)`;
        }
    });
    
    // Auto-slide every 5 seconds - only on desktop
    setInterval(() => {
        if (!isMobile()) {
            changeSlide(1);
        }
    }, 5000);
});