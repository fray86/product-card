import { comments } from "./comments.js";

//2. Создать массив чисел от 1 до 10. Отфильтровать его таким образом, что бы мы получил массив чисел, начиная с 5.
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const filtredNumbers = numbers.filter(number => number >= 5);

console.log(filtredNumbers);

//3.  Создать массив строк, относящихся к любой сущности и проверить, есть ли в массиве какая-то определенная сущность.

const randomWords = ["Горло", "Тюбетейка", "Ломинат"];

const checkNeededWord = randomWords.includes("Ломинат");
console.log(checkNeededWord);

// 4. Написать функцию, которая аргументом будет принимать массив и изменять 
//   его порядок на противоположный ("переворачивать") .
//   Два вышеуказанных массива с помощью этой функции перевернуть.

const reverseArray = array => [...array].reverse();

console.log(reverseArray(numbers));
console.log(reverseArray(randomWords));

// 7.Вывести в консоль массив тех комментариев, почта пользователей которых содержит ".com"

const filtredMailCom = comments.filter(comment => comment.email.includes('.com'));

console.log(filtredMailCom);

//8. Перебрать массив таким образом, что бы пользователи с id меньше или равно 5 имели postId: 2, 
//  те, у кого id больше 5, имели postId: 1

const updateComments = comments.map(comment => ({...comment, postID: comment.id <= 5 ? 2 : 1 }));

console.log(updateComments);

//9. Перебрать массив, что бы объекты состояли только из айди и имени

const setTwoKeysComments = comments.map(comment => ({
  id: comment.id,
  name: comment.name,
}));

console.log(setTwoKeysComments);

//10. Перебираем массив, добавляем объектам свойство isInvalid и проверяем: 
// если длина тела сообщения (body) больше 180 символов - устанавливаем true, меньше - false.

const checkLengthComment = comments.map(comment => ({...comment, isInvalid: comment.body.length > 180}));

console.log(checkLengthComment);

//11. Почитать про метод массива reduce. Используя его, вывести массив почт и провернуть тоже самое с помощью метода map

const getMails = comments.reduce((acc, comment) => {
  acc.push(comment.email);
  return acc;
}, []);

console.log(getMails);

const emailList = comments.map(comment => comment.email);

console.log(emailList);

//12.Почитать про методы toString(), join() и перебрав массив с задания №11, привести его к строке.

const emailsString = emailList.toString();

console.log(emailsString);

const emailsJoined = emailList.join("; ");
console.log(emailsJoined); 