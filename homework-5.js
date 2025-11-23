// Функция: город и температура воздуха.

function showWeatherInfo(city, temperature) {
  console.log(`Сейчас в ${city} температура ${temperature} градусов по Цельсию`);
}
weatherInfo("Нефтеюганске", -10);

// Функция проверки скорости звука

const SOUND_SPEED = 343;

function speedTest(speed) {
  if (speed > SOUND_SPEED) {
    console.log("Сверхзвуковая скорость");
  } else if (speed < SOUND_SPEED) {
    console.log("Дозвуковая скорость");
  } else {
    console.log("Скорость звука");
  }
}

speedTest(342);

// Функция подсчета стоимости товаров

const product = "Курс Angular";
const price = 200000;

function checkSolvency(budget) {
  const remainingBudget = price - budget;
  if (budget >= price) {
    console.log(`${product} приобретен. Спасибо за покупку!`);
  } else {
    console.log(`Вам не хватает ${remainingBudget}, пополните баланс.`);
  }
}

checkSolvency(200000);

// Функция на свое усмотрение

function showPhysique(weight) {
  if (weight >= 100) {
    console.log("Ты толстоват ");
  } else {
    console.log("Ты худоват");
  }
}

showPhysique(150);

// Переменные на свое усмотрение

const hateDota = false;
let bestGame = "Micecraft";
const currentYear = 2025;
