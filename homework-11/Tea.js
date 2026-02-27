import { Drink } from "./drink.js";

export class Tea extends Drink {
  constructor(name, size, price, temperature, additive) {
    super(name, size, price, temperature);
    this.additive = additive;
  }

   getDrinkInfo() {
    return `${super.getDrinkInfo()}, Добавка: ${this.additive}`
  }
}