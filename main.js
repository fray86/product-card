// Покраска всех карточек

const productCards = document.querySelectorAll('.card-container');
const changeProductCardsColorButton = document.querySelector(".change-all-color-card");
const RedColorHash = '#FF0000';
const PinkColorHash = '#FFC0CB';
const urlGoogle = 'http://google.com';

changeProductCardsColorButton.addEventListener('click', () => {
    productCards.forEach((card) => card.style.backgroundColor = RedColorHash)
})

// Покраска одной карточки

const firstProductCard = document.querySelector('.card-container');
const changeProductCardColorButton = document.querySelector('.change-color-card');

changeProductCardColorButton.addEventListener('click', () => {
    firstProductCard.style.backgroundColor = PinkColorHash;
})

// Кнопка перехода на другую страницу

const openGoogleBtn = document.querySelector('#open-google-page');

openGoogleBtn.addEventListener('click', openGoogle) 

function openGoogle () {
    const answer = confirm('Вы действительно хотите открыть Google?');
    if (answer === true) {
        window.open(urlGoogle)
    } else {
        return;
    }
}

// Вывод косоль лог

const outputConsoleBtn = document.querySelector('#output-console-log');

outputConsoleBtn.addEventListener('click', () => outputConsoleLog('ДЗ №4'))
function outputConsoleLog(message) {
    alert(message)
    console.log(message)
}

// Вывод заголовка в консоль

const mainTitle = document.querySelector('.main-title')

mainTitle.addEventListener('mouseenter',  () => {
    console.log(mainTitle.textContent);
});

//Кнопка смены цвета с одного на другой

const switchColorBtn = document.querySelector('#switch-color-btn');

switchColorBtn.addEventListener('click', () => {
    switchColorBtn.classList.toggle('second');
});