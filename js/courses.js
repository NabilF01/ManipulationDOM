let input = document.getElementById('courseElement');
let button = document.getElementById('btn');
let courseList = document.getElementById('courseList');

button.addEventListener('click', () => {
    let inputValue = input.value.trim();

    if (inputValue === "") {
        alert("Veuillez entrer un élément !");
        return;
    }

    let li = document.createElement('li');
    li.textContent = inputValue;

    courseList.appendChild(li);

    input.value = "";

});
