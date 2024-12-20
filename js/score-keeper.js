let btnP1 = document.getElementById('p1');
let btnP2 = document.getElementById('p2');
let reset = document.getElementById('reset');
let input = document.getElementById('number-playing');

let countPlaying = document.getElementById('count-playing');
let countP1 = document.getElementById('countP1');
let countP2 = document.getElementById('countP2');

let gameOver = false;

input.addEventListener('change', () => {
    countPlaying.textContent = input.value;
    countP1.textContent = "0";
    countP2.textContent = "0";
    countP1.style.color = 'black';
    countP2.style.color = 'black';
    gameOver = false;
});

btnP1.addEventListener('click', () => {
    if (gameOver) return;

    let currentScoreP1 = parseInt(countP1.textContent);
    let currentCount = parseInt(countPlaying.textContent);

    if (currentScoreP1 < currentCount) {
        countP1.textContent = currentScoreP1 + 1;

        if (currentScoreP1 + 1 === currentCount) {
            countP1.style.color = 'green';
            gameOver = true;
        }
    }
});

btnP2.addEventListener('click', () => {
    if (gameOver) return;

    let currentScoreP2 = parseInt(countP2.textContent);
    let currentCount = parseInt(countPlaying.textContent);

    if (currentScoreP2 < currentCount) {
        countP2.textContent = currentScoreP2 + 1;

        if (currentScoreP2 + 1 === currentCount) {
            countP2.style.color = 'green';
            gameOver = true;
        }
    }
});

reset.addEventListener('click', () => {
    input.value = "0";
    countPlaying.textContent = "0";
    countP1.textContent = "0";
    countP2.textContent = "0";
    countP1.style.color = 'black';
    countP2.style.color = 'black';
    gameOver = false;
});
