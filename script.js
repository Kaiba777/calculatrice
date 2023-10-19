const screen = document.querySelector('input');
const buttons = document.querySelectorAll("button");

let string = "";
const array = Array.from(buttons);

array.forEach((i) => {
    i.addEventListener("click", (e) => {
        if (e.target.innerText == "=") {
            string = eval(string);
            screen.value = string;
        }else if (e.target.innerText == "DEL") {
            string = string.slice(0, string.length-1);
            screen.value = string;
        }else if (e.target.innerText == "AC") {
            string = "";
            screen.value = string;
        }else {
            string += e.target.innerText;
            screen.value = string;
        }
    });
});