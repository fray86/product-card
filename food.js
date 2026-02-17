import { Product } from "./products.js";

export class Food extends Product {
  constructor(size, price, foodType) {
  super(size, price)
  this.foodType = foodType;
  }
  showValue() {
    console.log(`This product has: ${this.size}, ${this.price} and type: ${this.foodType}`);
  }
}
