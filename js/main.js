
// 1. Підрахуйте суму всіх чисел у заданому користувачем діапазоні.

//  {
//     let num1 = +prompt("Enter first number:");
//     let num2 = +prompt("Enter second number:");
//     let min;
//     let max;
//     let res = 0;
//     // if (num1 < num2) {
//     //     min = num1;
//     //     max = num2;
//     // } else if (num1 > num2) {
//     //     min = num2;
//     //     max = num1;
//     // } else {
//     //     alert("Numbers are equal!");
//     // }
//     min = num1 < num2 ? num1 : num2;
//     max = num1 > num2 ? num1 : num2;
//     while(min <= max){
//         res = res + min;
//         min++;
//     }
//     document.write(`<h2> Result :: ${res} </h2> `);
//  }



//  2. Запросіть 2 числа і знайдіть тільки найбільший спільний дільник.

// {
//     let a = +prompt("Enter");

//     let b = +prompt("Enter");

//     while (b !== 0) {
//     const temp = b;
//     b = a % b;
//     a = temp;
//     }

//     console.log(a)
// }



// 3. Запросіть у користувача число та виведіть усі дільники цього числа.



// {
//     let number = prompt("Введіть число:");
//     let divisors = "";
//     let i = 1;

//     while (i <= number) {
//         if (number % i === 0) {
//             divisors += i +" ";
//         }
//         i++;
//     }

//     console.log(`Дільники числа ${number}: ${divisors} `);
// }





// ///////////////////////////////////////
// {
//     let number = +prompt("Enter number");
//     let counter = 0;
//     
//     for(let i = 1; i <= number; i++){
//         if (number % i == 0) {
//             // counter++;
//         }
//     }
//     document.write(`${i}`)
// }


// {
//     let number = +prompt("Enter");
//     let counter = 0;
//     for(let i = 1; i <= number; i++){
//         if (number % i == 0) {
//             counter++;
//         }
//     }
//     if(counter >2){
//         console.log("Is Prime");
//     }
//     else{
//         console.log("Is Simple");
//     }
// }


// {
//     // 4. Визначте кількість цифр у введеному числі.

//     let number = prompt("Введіть число:");
//     let count = 0;
//     let n = Number(number);

//     while (n !== 0) {
//     count++;
//     n = parseInt(n / 10);
//     }

//     console.log(`Кількість цифр у введеному числі ${number} становить ${count}.`);
// }



// 5. Запросіть у користувача 10 чисел і підрахуйте, скільки він
// ввів додатних чисел, від’ємних та нулів. При цьому підра-
// хуйте також кількість парних і непарних чисел. Виведіть
// статистику на екран. Враховуйте те, що достатньо однієї
// змінної (не 10) для введення чисел користувачем.

// {
//     let countPositive = 0;
//     let countNegative = 0;
//     let countZero = 0;
//     let countEven = 0;
//     let countOdd = 0;

//     for (let i = 1; i <= 10; i++) {
//         let number = prompt(`Введіть ${i}-е число:`);
//         let num = parseInt(number);

//         if (num > 0) {
//             countPositive++;
//         } else if (num < 0) {
//             countNegative++;
//         } else {
//             countZero++;
//         }

//         if (num % 2 === 0) {
//             countEven++;
//         } else {
//             countOdd++;
//         }
//     }

//     console.log(`Кількість додатніх чисел: ${countPositive}`);
//     console.log(`Кількість від'ємних чисел: ${countNegative}`);
//     console.log(`Кількість нулів: ${countZero}`);
//     console.log(`Кількість парних чисел: ${countEven}`);
//     console.log(`Кількість непарних чисел: ${countOdd}`);
// }





///////////////////////////////////////////

// 6. Зацикліть калькулятор. Запросіть у користувача 2 числа і
// знак, розв’яжіть приклад, виведіть результат і запитайте,
// чи хоче він розв’язати ще один приклад. І так триватиме
// доти, доки користувач не відмовиться.

// let repeat = true;

// while (repeat) {
//   let num1 = prompt("Введіть перше число:");
//   let num2 = prompt("Введіть друге число:");
//   let operator = prompt("Введіть операцію (+, -, *, /)");

//   let result;
//   if (operator === "+") {
//     result = +num1 + +num2;
//   } else if (operator === "-") {
//     result = num1 - num2;
//   } else if (operator === "*") {
//     result = num1 * num2;
//   } else if (operator === "/") {
//     result = num1 / num2;
//   } else {
//     alert("Некоректний оператор");
//     continue;
//   }

//   alert(`Результат: ${result}`);

//   let answer = prompt("Бажаєте розв'язати ще один приклад? (Так/Ні)").toLowerCase();
//   if (answer !== "так") {
//     repeat = false;
//   }
// }

// alert("Дякуємо за використання калькулятора!");



// 8. Зацикліть виведення днів тижня таким чином: «День
// тижня. Бажаєте побачити назву наступного дня тижня?”,
// і так доти, доки користувач натискатиме OK.


let day = 'понеділок';
let answer;

do {
  console.log(`День тижня: ${day}. Бажаєте побачити назву наступного дня тижня?`);
  answer = confirm('Бажаєте побачити назву наступного дня тижня?');
  
  // Змінюємо день тижня
  if (day === 'понеділок') {
    day = 'вівторок';
  } else if (day === 'вівторок') {
    day = 'середа';
  } else if (day === 'середа') {
    day = 'четвер';
  } else if (day === 'четвер') {
    day = 'пʼятниця';
  } else if (day === 'пʼятниця') {
    day = 'субота';
  } else if (day === 'субота') {
    day = 'неділя';
  } else if (day === 'неділя') {
    day = 'понеділок';
  }
} while (answer);




// 9. Виведіть таблицю множення для всіх чисел від 2 до 9.
// Кожне число необхідно помножити на числа від 1 до 10.


// document.write("<table>")
// for(let q = 0; q < 8; q+=4){
//     document.write("<tr>")
//     for(let j = 2; j < 6; j++){
//         document.write("<td>")
//         for(let i = 1; i <= 10; i++){
//             document.write(`${j + q} x ${i} = ${(j + q) * i}<br>`);
//         }
//         document.write("</td>")

//     }
//     document.write("</tr>")
// }

// document.write("</table>")


// document.write(`2 x 1 = ${2*1}<br>`);
// document.write(`2 x 2 = ${2*2}<br>`);
// document.write(`2 x 3 = ${2*3}<br>`);
// document.write(`2 x 4 = ${2*4}<br>`);
// document.write(`2 x 5 = ${2*5}<br>`);
// document.write(`2 x 6 = ${2*6}<br>`);
// document.write(`2 x 7 = ${2*7}<br>`);
// document.write(`2 x 8 = ${2*8}<br>`);
// document.write(`2 x 9 = ${2*9}<br>`);
// document.write(`2 x 10 = ${2*10}<br>`);