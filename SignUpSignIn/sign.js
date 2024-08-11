let inBtn = document.querySelector("#SignIn");
let upBtn = document.querySelector("#SignUp");
let heading = document.querySelector("h1");
let name1 = document.querySelector("#namefield");
let inputGroup = document.querySelectorAll("input");

inBtn.addEventListener("click", () => {
    heading.innerText = "Sign In";
    name1.style.maxHeight = "0";
    upBtn.classList.add("disable");
    inBtn.classList.remove("disable");
})

upBtn.addEventListener("click", () => {
    heading.innerText = "Sign Up";
    name1.style.maxHeight = "60px";
    upBtn.classList.remove("disable");
    inBtn.classList.add("disable");
})

