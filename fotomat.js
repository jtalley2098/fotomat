const joinButton = document.getElementById("join");
function joinHover(){
joinButton.innerHTML = "Enter personal information to get on waiting list for Fotomatic Camera!"
}
function joinLeave(){
    joinButton.innerHTML = "Join";
}
join.addEventListener("mouseover",joinHover);


/**const popUp = document.createElement("div");
popUp.classList.add("pop-up");
popUp.innerHTML = "<p>Enter Email to join waiting list:</p><input type='email'>"



joinButton.addEventListener("mouseover", () => {
    document.body.appendChild(popUp);
  });
  
  
  joinButton.addEventListener("mouseout", () => {
    if (popUp.parentElement) {
      document.body.removeChild(popUp);
    } else {  
      // show pop-up
      document.body.appendChild(popUp);
    }
  })
   **/
