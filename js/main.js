let myButton = document.querySelector(".my-button");
let myInput = document.querySelector(".my-input");
let myHeader = document.querySelector(".header");
let mySecondInput = document.querySelector(".input-two");

myButton.addEventListener("click", function () {
  let secondInputValue = parseInt(mySecondInput.value);
  let inputValue = parseInt(myInput.value);
  myHeader.innerText = secondInputValue + inputValue;
});
