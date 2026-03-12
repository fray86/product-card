export class Cafe {
  constructor(name, address) {
    this.name = name;
    this.address = address;
  }

  getCafeInfo() {
    console.log(`Кафе ${this.name} находится по аддресу: ${this.address}`)
  }

  prepareOrder(drinkItem) {
    console.log(`Заказ принят`);
    drinkItem.submitDrink();
  }
}