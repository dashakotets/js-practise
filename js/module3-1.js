/*
? Напиши скрипт для обчислення площі прямокутника зі сторонами,
? значення яких зберігаються у змінній values у вигляді рядка.
? Значення гарантовано розділені пробілом.
 */

// const values = '8 11';
// const rectSides = values.split(' ');
// const rectArea = +rectSides[0] * +rectSides[1];

// console.log('values:', values);
// console.log('rectSides:', rectSides);
// console.log('rectArea:', rectArea);

/*
? Напиши скрипт, який підраховує суму всіх парних чисел у масиві.
*/

// const numbers = [1, 5, 8, 9, 12, 4];
// let total = 0;

// for (const number of numbers) {
//     if (number % 2 === 0) {
//         total += number;
//     }
// }

// console.log('numbers: ', numbers);
// console.log('total: ', total);

/*
? Напиши скрипт, який виводить у консоль ім'я та телефонний номер користувача.
? У змінних names та phones зберігаються рядки імен та телефонних номерів,
? розділені комами. Порядковий номер імен та телефонів у рядках вказують на
? відповідність. Кількість імен та телефонів гарантовано однакова.
*/

// const names = 'Jacob,William,Solomon,Artemis';
// const phones = '89001234567,89001112233,890055566377,890055566300';

// namesArray = names.split(",");
// phonesArray = phones.split(",");

// console.log(namesArray);

// for (let i = 0; i < namesArray.length; i++) {
//     console.log(namesArray[i], " - ", phonesArray[i]);
// }



/*
? Напиши скрипт, який виводить у консоль усі слова рядка крім першого і останнього.
*/

// const string = 'Our office is closed so we`re working from home today.';

// const srtringArray = string.split(" ");
// let result = "";

//  for (let i = 1; i < srtringArray.length - 1 ; i++) {
//      result += srtringArray[i] + " ";
    
// }
 
// console.log(result);

/*
? Напиши скрипт пошуку найменшого числа у масиві. Код повинен працювати
? для будь-якого масиву чисел. Використовуй цикл для розв'язання задачі.
*/

// const values = [17, -10, 94, -30, 1, 23, -20, -100];
// let min = values[0];

// for (let number of values) {
//     if (number < min) {
//         min = number;
//     }
// }


// console.log(min);

/*
? У нас є декілько масивів із зарплатами працівників із різних відділів, потрібно порахувати загальну суму зарплат
*/

const managerSalaries = [100, 150, 250, 400, 500];
const developersSalaries = [800, 1500, 4000];
let total = 0;

for (const salary1 of managerSalaries) {
    total += salary1;
}

for (const salary2 of developersSalaries) {
    total += salary2;
}

console.log(total);


