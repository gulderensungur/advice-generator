const ADVICE_API_URL = "https://api.adviceslip.com/advice";

const diceButton = document.querySelector("#dice-button");
const adviceTitle = document.querySelector("#advice-title");
const adviceId = document.querySelector("#advice-id");

diceButton.addEventListener("click", changeAdviceText);

function changeAdviceText() {
  // 1- istek at
  fetch(ADVICE_API_URL)
    .then(function (res) {
      // 2- json a cevir
      return res.json();
    })
    .then(function (data) {
      // 3- manipule et
      adviceTitle.innerText = data.slip.advice;
      adviceId.innerText = data.slip.id;
    });
}
