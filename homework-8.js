import { allProductCards } from "./product-cards.js";

const productCards = document.querySelector('#product-cards-list');
const productTemplate = document.querySelector('#product-template');

function renderProductCards(cards) {
  cards.forEach(product => {
    const productFragment = productTemplate.content.cloneNode(true);
    productFragment.querySelector('.product-img').src = `./images/${product.productImg}.png`;
    productFragment.querySelector('.product-skin-type').textContent = product.productSkinType;
    productFragment.querySelector('.product-name').textContent = product.productName;
    productFragment.querySelector('.product-description').textContent = product.description;
    productFragment.querySelector('.compound').innerHTML = product.compound
      .map(item => `<li>${item}</li>`).join("");
    productFragment.querySelector('.cost').textContent =
      `${product.cost.toLocaleString('ru-RU')} ₽`;
    productCards.appendChild(productFragment);
  });
}

//Реализовать функцию, которая при старте страницы выводит сообщение (через функцию prompt) "Сколько карточек отобразить? От 1 до 5"

function chooseProductCardsAmount() {
  const input = prompt("Сколько карточек отобразить? От 1 до 5");
  const count = Number(input);
  if (count >= 1 && count <= 5) {
    const selected = allProductCards.slice(0, count);
    renderProductCards(selected);
  } else {
    alert("Введите число от 1 до 5");
  }
}

chooseProductCardsAmount();

//Используя метод .reduce(), получить массив объектов, где ключем является название продукта, а значением - его описание

const getProductDescription = allProductCards.reduce((acc, product) =>
   [...acc, {[product.productName]: product.description}], [])
 console.log(getProductDescription);