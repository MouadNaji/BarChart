console.log("hej");

function getNumberOfCustomers() {
  //man får et random nummer
  return Math.floor(Math.random() * 36);
}

const queueSize = getNumberOfCustomers();
console.log(queueSize);

let bar = document.querySelectorAll(".bar");
console.log(bar);

bar[0].style.height = "7rem";
bar[1].style.height = "3rem";
bar[2].style.height = "5rem";
bar[3].style.height = "2rem";
bar[4].style.height = "5rem";
bar[5].style.height = "4rem";
bar[6].style.height = "2rem";
bar[7].style.height = "6rem";
bar[8].style.height = "8rem";
bar[9].style.height = "9rem";
bar[10].style.height = "3rem";
bar[11].style.height = "1rem";
bar[12].style.height = "3rem";
bar[13].style.height = "5rem";
bar[14].style.height = "6rem";
bar[15].style.height = "8rem";
bar[16].style.height = "2rem";
bar[17].style.height = "3rem";
bar[18].style.height = "5rem";
bar[19].style.height = "6rem";
bar[20].style.height = "2rem";
bar[21].style.height = "6rem";
bar[22].style.height = "7rem";
bar[23].style.height = "2rem";
bar[24].style.height = "3rem";
bar[25].style.height = "6rem";
bar[26].style.height = "3rem";
bar[27].style.height = "5rem";
bar[28].style.height = "6rem";
bar[29].style.height = "6rem";
bar[30].style.height = "4rem";
bar[31].style.height = "2rem";
bar[32].style.height = "6rem";
bar[33].style.height = "7rem";
bar[34].style.height = "3rem";
bar[35].style.height = "4rem";
bar[36].style.height = "6rem";
bar[37].style.height = "5rem";
bar[38].style.height = "3rem";
bar[39].style.height = "3rem";

function changeHeight() {
  this.style.height = queueSize + "rem";
}
