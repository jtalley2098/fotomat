



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
  colorChange.style.backgroundColor = "#565656";
});

colorChange.addEventListener("mouseout", () => {
  colorChange.style.backgroundColor = "#4a4a4a";
});

const fourPics = document.querySelectorAll('.photos img');

fourPics.forEach(pic => {
  pic.addEventListener("mouseover", () => {
    pic.style.transform = "scale(1.1)";
  });
  pic.addEventListener("mouseout", () => {
    pic.style.transform = "scale(1)";
  });
});


}

document.addEventListener("DOMContentLoaded", ready);
  

