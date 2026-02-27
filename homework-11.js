import { Cafe } from "./homework-11/cafe.js";
import { Tea } from "./homework-11/tea.js";
import { Coffee } from "./homework-11/coffee.js";
import { Cola } from "./homework-11/cola.js";

const fristCafe = new Cafe("Angular", "Russia, Nefteugansk")

const greenTea = new Tea("Зеленый чай", "Средний", 250, 80, "Лимон");
const blackCoffee = new Coffee("Черный кофе", "Маленький", 150, 90, "Без молока");
const iceCola = new Cola("Кока-кола", "Большой", 250, 5, "Со льдом" )

fristCafe.getCafeInfo();

blackCoffee.setDrinkTemperature(50);
fristCafe.prepareOrder(blackCoffee);

greenTea.setDrinkTemperature(70);
fristCafe.prepareOrder(greenTea);

iceCola.setDrinkTemperature(4);
fristCafe.prepareOrder(iceCola);

console.log(blackCoffee.getDrinkTemperature())
console.log(blackCoffee.getDrinkInfo())
console.log(greenTea.getDrinkInfo())
console.log(iceCola.getDrinkInfo())