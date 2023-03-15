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
}

// modeSelected called when #select-color-mode changes value (the user select color mode)
function modeSelected() {
  console.log("New color mode selected");
}
