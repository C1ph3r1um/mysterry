document.getElementById('revealButton').addEventListener('click', function() {
  // Reveal the secret message
  document.getElementById('secretMessage').classList.add('visible');

  // Hide the initial button and overlay
  document.querySelector('.overlay').style.display = 'none';

  // Add a delay to show the next clue
  setTimeout(function() {
    alert("Keep an eye on the code, more secrets are hidden...");
  }, 3000);
});
