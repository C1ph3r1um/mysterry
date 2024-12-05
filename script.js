document.getElementById('revealBtn').addEventListener('click', function() {
    var message = document.getElementById('hidden-message');
    message.style.display = 'block';
    this.disabled = true; // Disable the button after it's clicked
    this.innerHTML = 'Secrets Revealed...';
});
