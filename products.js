/* 3.Создать структуру на ваш выбор, как было показано в лекции (имеется ввиду - с машинами/бьюти-продуктами). Придумайте свою структуру и реализуйте наследуемость классов */

export class Product {
  constructor(size, price) {
    this.size = size;
    this.price = price;
  }
  showValue() {
    console.log(`This product has: ${this.size}, ${this.price}`)
  }
}

export class Eat extends Product {
  constructor(size, price, eatType) {
  super(size, price)
  this.eatType = eatType;
  }
  showValue() {
    console.log(`This product has: ${this.size}, ${this.price} and type: ${this.eatType}`);
  }
}
