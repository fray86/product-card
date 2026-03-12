import { Drink } from "./drink.js";

export class Coffee extends Drink {
  constructor(name, size, price, temperature, milkType) {
    super(name, size, price, temperature)
    this.milkType = milkType;
  }

  getDrinkInfo() {
    return `${super.getDrinkInfo()}, Молоко: ${this.milkType}`
  }
}