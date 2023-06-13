/* eslint-disable */
import "bootstrap";
import "./style.css";

// import "./assets/img/rigo-baby.jpg";
// import "./assets/img/4geeks.ico";

window.onload = function() {
  // write your code here
  let icons = [
    { icon: "♦", color: "red" },
    { icon: "♥", color: "red" },
    { icon: "♠", color: "black" },
    { icon: "♣", color: "black" }
  ];

  let randomIndex = Math.floor(Math.random() * icons.length);
  let randomIcon = icons[randomIndex];

  let selectIcons = document.querySelectorAll(".symbol");
  selectIcons.forEach(ele => {
    ele.innerHTML = randomIcon.icon;
    ele.style.color = randomIcon.color;
  });

  let numbers = ["A", 2, 3, 4, 5, 6, 7, 8, 9, 10, "J", "Q", "K"];

  let randomIndexNum = Math.floor(Math.random() * numbers.length);
  let randomNumber = numbers[randomIndexNum];

  let elementSelectNumber = document.querySelector(".number");
  elementSelectNumber.innerHTML = randomNumber;
};
