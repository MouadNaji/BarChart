"use strict";
window.addEventListener("DOMContentLoaded", start);
console.log("hej");

let number;
const dataArray = [
  "7",
  "3",
  "5",
  "2",
  "4",
  "7",
  "3",
  "5",
  "2",
  "4",
  "7",
  "3",
  "5",
  "2",
  "4",
  "7",
  "3",
  "5",
  "2",
  "4",
  "7",
  "3",
  "5",
  "2",
  "4",
  "7",
  "3",
  "5",
  "2",
  "4",
  "7",
  "3",
  "5",
  "2",
  "4",
  "7",
  "3",
  "5",
  "2",
  "4"
];

function start() {
  const bar = document.querySelectorAll(".bar");
  bar.forEach((bar, i) => {
    bar.style.height = dataArray[i] + "rem";
  });
  console.log(bar);

  setInterval(function() {
    number = Math.floor(Math.random() * 36);
    dataArray.push(number);
    console.clear();
    console.log(dataArray);
    if (dataArray.length > 40) {
      dataArray.shift();
    }
    bar.forEach((bar, i) => {
      bar.style.height = dataArray[i] + "rem";
    });
  }, 200);
}
