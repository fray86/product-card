// Покраска всех карточек

const productCards = document.querySelectorAll(".product-container");
const changeProductCardsColorButton = document.querySelector(".change-all-color-card");
const redColorHash = "#FF0000";

changeProductCardsColorButton.addEventListener("click", () => {
  productCards.forEach((card) => (card.style.backgroundColor = redColorHash));
});

// Покраска одной карточки

const firstProductCard = document.querySelector(".product-container");
const changeProductCardColorButton = document.querySelector(".change-color-card");
const pinkColorHash = "#FFC0CB";

changeProductCardColorButton.addEventListener("click", () => {
  firstProductCard.style.backgroundColor = pinkColorHash;
});

// Кнопка перехода на другую страницу

const openGoogleBtn = document.querySelector("#open-google-page");
const urlGoogle = "http://google.com";

openGoogleBtn.addEventListener("click", openGoogle);

function openGoogle() {
  const answer = confirm("Вы действительно хотите открыть Google?");
  if (answer === true) {
    window.open(urlGoogle);
  } else {
    return;
  }
}

// Вывод консоль лог

const outputConsoleBtn = document.querySelector("#output-console-log");

outputConsoleBtn.addEventListener("click", () => outputConsoleLog("ДЗ №4"));
function outputConsoleLog(message) {
  alert(message);
  console.log(message);
}

// Вывод заголовка в консоль

const mainTitle = document.querySelector(".main-title");

mainTitle.addEventListener("mouseenter", () => {
  console.log(mainTitle.textContent);
});

//Кнопка смены цвета с одного на другой

const switchColorBtn = document.querySelector("#switch-color-btn");

switchColorBtn.addEventListener("click", () => {
  switchColorBtn.classList.toggle("bg_blue");
});
