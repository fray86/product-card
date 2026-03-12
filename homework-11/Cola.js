import { Drink } from "./drink.js";

export class Cola extends Drink {
  constructor(name, size, price, temperature, ice) {
    super(name, size, price, temperature);
    this.ice = ice;
  }

   getDrinkInfo() {
    return `${super.getDrinkInfo()}, Лед: ${this.ice}`
  }
}