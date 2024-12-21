const buttonClick = document.querySelector(".hitMe");
const newPara = document.querySelector(".para");

buttonClick.addEventListener("click", function () {
  let randomNumber = Math.trunc(Math.random() * 101);
  let newName = document.querySelector(".yourName").value;
  if (!newName) {
    newPara.textContent = `Put Your Name In `;
  } else if (randomNumber < 45) {
    newPara.textContent = `Sorry, ${newName} you are ${randomNumber}% likely to get coal. Try Again or Just Be Nice ☹️ `;
    newName = document.querySelector(".yourName").value = "";
  } else if (randomNumber > 45 && randomNumber < 75) {
    newPara.textContent = ` ${newName} you have a ${randomNumber}% chance of getting a gift 🎁`;
    newName = document.querySelector(".yourName").value = "";
  } else {
    newPara.textContent = `Wow ${newName}! you are ${randomNumber}% going to get a gift This Christmas`;
    newName = document.querySelector(".yourName").value = "";
  }
});
