



function ready(){



 
const joinLink = document.getElementById("join");
const popUp = document.getElementById("popup");

joinLink.addEventListener("mouseover", () => {
  popUp.style.display = "block";
});

joinLink.addEventListener("mouseout", () => {
  popUp.style.display = "none";
});

const colorChange = document.getElementById("butt");

colorChange.addEventListener("mouseover", () => {
  colorChange.style.backgroundColor = "#000000";
});

colorChange.addEventListener("mouseout", () => {
  colorChange.style.backgroundColor = "#4a4a4a";
});


}

document.addEventListener("DOMContentLoaded", ready);
  

