let choice = document.querySelectorAll(".choice");
let display = document.querySelector(".display");

let choice_equal = () => {
    display.innerText = eval(display.innerText);
}

let calculate = (userChoice) => {
    if (userChoice == "equal") {
        choice_equal(userChoice);
    }
    else if (userChoice == "AC") {
        display.innerText = "";
    }
    else if (userChoice == "DE") {
        display.innerText = display.innerText.toString().slice(0, -1);
    }
    else {
        display.innerText += userChoice;
    }
}
choice.forEach((choices) => {
    choices.addEventListener("click", () => {
        let userChoice = choices.getAttribute("id");
        calculate(userChoice);
    })
})