// Get references to DOM elements
const toggleButton = document.getElementById('toggleButton');
const animatedElement = document.getElementById('animatedElement');

// Check if the animation preference is stored in localStorage
const isAnimationEnabled = localStorage.getItem('animationEnabled') === 'true';

// Apply the animation if it's enabled
if (isAnimationEnabled) {
    animatedElement.classList.add('animate');
}

// Event listener for the button to toggle the animation
toggleButton.addEventListener('click', () => {
    // Toggle the animation class
    if (animatedElement.classList.contains('animate')) {
        animatedElement.classList.remove('animate');
        localStorage.setItem('animationEnabled', 'false');
    } else {
        animatedElement.classList.add('animate');
        localStorage.setItem('animationEnabled', 'true');
    }
});
