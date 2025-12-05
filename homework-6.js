//3.Создайте объект на основе ваших данных

const profile = {
  name: "Maxim",
  secondName: "Vigdorov",
  email: "kotofilde@gmail.com",
  work: "ЮНГ",
  doljnost: "Оператор ПУ",
  age: 28,
  country: "Russia",
  city: "Нефтеюганск",
}

//4.Создайте объект, который будет хранить данные об автомобиле

const car = {
  brand: "BMW",
  model: "Optimus praim",
  year: 1999,
  color: "blue",
  boxView: "automatic",
}

car.owner = profile

//5.Написать функцию которая аргументом будет принимать объект (obj более абстрактно. можно car?)

function checkProperty(obj) {
  if (!obj.maxSpeed) {
   obj.maxSpeed = 300;
 }
}

checkProperty(car);
console.log(car);

//6.Написать функцию, которая получает первым аргументом  — объект, а вторым аргументом — свойство объекта, которое нужно вывести и выводит его значение.

function showObjProperty(obj, prop) {
  console.log(obj[prop])
}

//7.Создать массив, который содержит названия продуктов (просто строки)

const products = ["Банан", "Желудь", "Кириешки"]

//8.Создать массив, состоящий из объектов, где объект представляет собой книгу

const libraryLifeAdvice = [
 {
   bookName: "Как сказать НЕТ с открытым ртом?",
   autor: "Vasya Pupkin",
   year: 2025,
   colorCover: "pink",
   genre: "horror",
  },
  {
   bookName: "Как достать языком кончик носа?",
   autor: "Kolya Ytkin",
   year: 2015,
   colorCover: "green",
   genre: "triller",
  },
  {
   bookName: "Как не стеснятся в бане?(Ждать разбана)",
   autor: "Ivan Cikalo",
   year: 1992,
   colorCover: "blue",
   genre: "drama",
  }
];

libraryLifeAdvice.push({
  bookName: "Как понять, что о тебе думают коллеги в цирке?",
  autor: "Roman Lobkov",
  year: 2001,
  colorCover: "red",
  genre: "detective",
});

//9.Создать еще один массив, состоящих из тех же книг, но относящийся к определенной вселенной 

const libraryLifeHacks = [
 {
   bookName: "Как понять цели в жизни, после 60?",
   autor: "Victor Francenshtein",
   year: 2022,
   colorCover: "white",
   genre: "comedy",
  },
  {
   bookName: "Как научиться целовать на помидоре?",
   autor: "Ragnar Lodbrok",
   year: 2012,
   colorCover: "purple",
   genre: "fantasy",
  },
  {
   bookName: "Как не смотреть на карликов с высока?",
   autor: "Taivin Lannister",
   year: 1234,
   colorCover: "yellow",
   genre: "biography",
  }
];

const allLibrarylist = [...libraryLifeAdvice, ...libraryLifeHacks];

//10.Почитать про метод массива — map. Написать функцию, которая принимает массив сущностей с задания №9

const checkRareBooks = allLibrarylist.map(book => ({
  ...book, isRare: book.year >= 2000
}))

console.log(checkRareBooks);