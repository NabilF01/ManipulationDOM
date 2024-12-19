let btnP1 = document.getElementById('p1');
let btnP2 = document.getElementById('p2');
let reset = document.getElementById('reset');
let input = document.getElementById('playing');


btnP1.addEventListener('click', () => {
    let countP1 = document.getElementById('countP1');
    countP1 += 1;

});

btnP2.addEventListener('click', () => {
    let countP2 = document.getElementById('countP2');
    countP2 += 1;
});


reset.addEventListener('click', () => {
    input.value = 0;
});