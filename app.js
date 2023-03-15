"use strict";

// console.log(5 > 4);
// console.log("apple" > "pineapple");
// "2" > "12";
// console.log(undefined == null);
// console.log(undefined === null);
// console.log(null == "\n0\n");
// console.log(null === +"\n0\n");
// console.log("race" === "petl");
// console.log("race" !== "petl");

window.addEventListener("load", initApp);

function initApp() {
  //event listener for select on HTML
  document
    .querySelector("#select-color-mode")
    .addEventListener("change", modeSelected);

  detectUserPreference();
}

// modeSelected called when #select-color-mode changes value (the user select color mode)
function modeSelected() {
  const selectedColorMode = this.value;
  console.log("SelectColorMode");

  changeMode(selectedColorMode);
  savedUserColorMode(selectedColorMode);
}

function changeMode(mode) {
  resetColor();

  if (mode === "dark") {
    document.body.classList.add("dark-mode");
  } else if (mode === "green") {
    document.body.classList.add("green-mode");
  } else if (mode === "gold") {
    document.body.classList.add("gold-mode");
  }
}

function resetColor() {
  document.body.classList.remove("dark-mode");
  document.body.classList.remove("green-mode");
  document.body.classList.remove("gold-mode");
}

function detectUserPreference() {}
function readUserColorMode() {}
function savedUserColorMode() {
  localStorage.setItem("userColorMode", mode);
}
