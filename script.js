document.getElementById('startButton').addEventListener('click', function() {
  // Reveal the hidden message after the button is clicked
  document.getElementById('message').classList.add('visible');
  document.getElementById('startButton').classList.add('hidden');

  // Reveal the countdown section
  setTimeout(function() {
    document.getElementById('countdown-section').classList.remove('hidden');
    startCountdown();
  }, 1500); // Wait 1.5 seconds before showing the countdown
});

function startCountdown() {
  const countdownElement = document.getElementById('countdown');
  const targetDate = new Date('2024-12-22T00:00:00Z');
  
  function updateCountdown() {
    const now = new Date();
    const difference = targetDate - now;
    
    if (difference <= 0) {
      countdownElement.textContent = 'The future is here!';
      clearInterval(interval);
    } else {
      const days = Math.floor(difference / (1000 * 60 * 60 * 24));
      const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((difference % (1000 * 60)) / 1000);
      
      countdownElement.textContent = `${days}d ${hours}h ${minutes}m ${seconds}s`;
    }
  }

  const interval = setInterval(updateCountdown, 1000);
  updateCountdown(); // Initial call to update the countdown
}
