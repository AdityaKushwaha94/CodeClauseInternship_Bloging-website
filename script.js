// scripts.js

// Function to generate a random color
function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

// Function to change the background color of the hero section
function changeBackgroundColor() {
    var heroSection = document.querySelector('.hero');
    var color = getRandomColor();
    heroSection.style.backgroundColor = color;
}

// Function to animate the background color change
function animateBackgroundColor() {
    setInterval(changeBackgroundColor, 2000); // Change color every 2 seconds
}

// Call the function to start the animation
animateBackgroundColor();

// Parallax scrolling effect
window.addEventListener('scroll', function() {
    const parallax = document.querySelector('.hero');
    let scrollPosition = window.pageYOffset;
    parallax.style.backgroundPositionY = scrollPosition * 0.7 + 'px'; // Adjust the scroll speed here
});
