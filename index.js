// First, initialize a new npm project:
// npm init -y

// Then, install the canvas-confetti library:
// npm install canvas-confetti

// Create an index.js file with the following content:

const confetti = require('canvas-confetti');

// Basic confetti explosion
function basicConfetti() {
  confetti();
}

// Custom confetti with options
function customConfetti() {
  confetti({
    particleCount: 100,
    spread: 70,
    origin: { y: 0.6 },
    colors: ['#ff0000', '#00ff00', '#0000ff']
  });
}

// Confetti cannon
function confettiCannon() {
  confetti({
    particleCount: 300,
    spread: 100,
    origin: { x: 0 }
  });
}

// Example usage
basicConfetti();
setTimeout(customConfetti, 1000);
setTimeout(confettiCannon, 2000);

// To run this script, use:
// node index.js