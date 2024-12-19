
let input = document.getElementById('courseElement');
let button = document.getElementById('btn');


let main = document.querySelector('main');


button.addEventListener('click', () => {
    let inputValue = input.value.trim();

    if (inputValue === "") {
        alert("Veuillez entrer un élément !");
        return;
    }

    let ul = document.querySelector('ul');
    if (!ul) {
        ul = document.createElement('ul');
        main.appendChild(ul);
    }


    let li = document.createElement('li');
    li.textContent = inputValue;


    ul.appendChild(li);

    input.value = "";
});
