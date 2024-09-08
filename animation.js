// Detect when elements with the 'animated' class enter the viewport
document.addEventListener('DOMContentLoaded', () => {
    const animatedElements = document.querySelectorAll('.animated');
  
    function checkAnimation() {
      animatedElements.forEach(element => {
        const elementPosition = element.getBoundingClientRect().top;
        const screenHeight = window.innerHeight;
  
        if (elementPosition < screenHeight * 0.75) {
          element.classList.add('animated-show');
        } else {
          element.classList.remove('animated-show');
        }
      });
    }
  
    window.addEventListener('scroll', checkAnimation);
    checkAnimation(); // Check initially in case elements are already in view
  });
  