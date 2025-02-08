// Function to animate numbers
function animateNumber(element) {
    const target = parseInt(element.getAttribute('data-target'));
    let current = 0;
    function updateNumber() {
        if (current >= target) {
            element.textContent = target + "+";
            return;
        }
        
        // Increment the number
        current = Math.min(current + Math.ceil(target / 100), target); // Gradual step, stops when target is reached
        element.textContent = current + "+"; // Update the text
        
        requestAnimationFrame(updateNumber); // Call next frame
    }

    requestAnimationFrame(updateNumber); // Start the animation
}

// Detect when the elements are in the viewport
function isInViewport(element) {
    const rect = element.getBoundingClientRect();
    return rect.top >= 0 && rect.left >= 0 && rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) && rect.right <= (window.innerWidth || document.documentElement.clientWidth);
}

// Trigger the animation when the section is in the viewport
window.addEventListener('scroll', () => {
    const numbers = document.querySelectorAll('.no-of-event');
    numbers.forEach(num => {
        if (isInViewport(num)) {
            if (!num.classList.contains('animated')) {  // Check if already animated
                num.classList.add('animated');
                animateNumber(num);
            }
        }
    });
});
