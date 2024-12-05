// Interaktywność przycisków
document.getElementById('startButton').addEventListener('click', function() {
  // Ukrywanie wstępnego komunikatu
  document.querySelector('.overlay').style.display = 'none';

  // Pokazywanie zagadki
  document.getElementById('puzzleContainer').classList.remove('hidden');
});

document.getElementById('submitAnswer').addEventListener('click', function() {
  // Sprawdzanie odpowiedzi użytkownika
  let userAnswer = document.getElementById('answer').value;

  // Zakładając, że odpowiedź to '42' (przykład)
  if (userAnswer == '42') {
    // Ukrywanie zagadki, pokazanie kolejnego kroku
    document.getElementById('puzzleContainer').classList.add('hidden');
    document.getElementById('nextStep').classList.remove('hidden');
  } else {
    alert("Try again...");
  }
});
