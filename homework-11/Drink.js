export class Drink {
  #temperature;

  constructor(name, size, price, temperature) {
    this.name = name;
    this.size = size;
    this.price = price;
    this.#temperature = temperature;
  }

  getDrinkInfo() {
    return `Напиток: ${this.name}, Размер: ${this.size}, Цена: ${this.price}, Температура: ${this.#temperature}`;
  }

  getDrinkTemperature() {
    return this.#temperature;
  }
  
  setDrinkTemperature(newTemp) {
    if (newTemp < 0 || newTemp > 100) {
      console.log('Недопустимое значение температуры');
      return;
    }
    this.#temperature = newTemp;
  }

  #setupDrink() {
    console.log(`${this.name} готовится...`)
    console.log(`Устанавливаем нужную температуру ${this.getDrinkTemperature()}`)
  }

  submitDrink() {
    this.#setupDrink()
    console.log(`${this.name} подан!`);
  }
}