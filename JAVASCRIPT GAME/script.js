const targets = document.querySelectorAll('.target');
const score = document.getElementById('score');
let currentScore = 0;

targets.forEach((target) => {
    target.addEventListener('click', () => {
        currentScore++;
        score.textContent = currentScore;
        target.style.display = 'none'; // Hide the clicked target
    });
});
