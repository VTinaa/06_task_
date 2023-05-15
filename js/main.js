
// 1. Підрахуйте суму всіх чисел у заданому користувачем діапазоні.

 {
    let num1 = +prompt("Enter first number:");
    let num2 = +prompt("Enter second number:");
    let min;
    let max;
    let res = 0;
    min = num1 < num2 ? num1 : num2;
    max = num1 > num2 ? num1 : num2;
    while(min <= max){
        res = res + min;
        min++;
    }
    document.write(`<p> Result :: <span>${res}</span> </p> `);
 }



//  2. Запросіть 2 числа і знайдіть тільки найбільший спільний дільник.

{
    let a = +prompt("Enter");

    let b = +prompt("Enter");

    while (b !== 0) {
    const temp = b;
    b = a % b;
    a = temp;
    }

    document.write(`<p> Greatest common divisor : <span> ${a} </span> </p>`)
}



// 3. Запросіть у користувача число та виведіть усі дільники цього числа.



{
    let number = prompt("Enter number:");
    let divider = "";
    let i = 1;

    while (i <= number) {
        if (number % i === 0) {
            divider += i +" ";
        }
        i++;
    }

    document.write(`<p> Divisor ${number}: <span>${divider}</span> </p> `);
}



// 4. Визначте кількість цифр у введеному числі.

{

    let number = prompt("Enter number:");
    let count = 0;
    let n = +number;

    while (n !== 0) {
    count++;
    n = parseInt(n / 10);
    }

    document.write(`<p>The number of digits in the entered number  <span> ${number} </span>  is  <span>${count}</span>.</p>`);
}



// 5. Запросіть у користувача 10 чисел і підрахуйте, скільки він
// ввів додатних чисел, від’ємних та нулів. При цьому підра-
// хуйте також кількість парних і непарних чисел. Виведіть
// статистику на екран. Враховуйте те, що достатньо однієї
// змінної (не 10) для введення чисел користувачем.

{
    let countPositive = 0;
    let countNegative = 0;
    let countZero = 0;
    let even = 0;
    let odd = 0;

    for (let i = 1; i <= 10; i++) {
        let number = prompt(`Введіть ${i}-е число:`);
        let num = parseInt(number);

        if (num > 0) {
            countPositive++;
        } else if (num < 0) {
            countNegative++;
        } else {
            countZero++;
        }

        if (num % 2 === 0) {
            even++;
        } else {
            odd++;
        }
    }

    document.write(`<p>Count Positive: <span>${countPositive}</span> </p>`);
    document.write(`<p>Count Negative: <span>${countNegative}</span> </p>`);
    document.write(`<p>Count Zero: <span>${countZero}</span> </p>`);
    document.write(`<p>Count even: <span>${even}</span> </p>`);
    document.write(`<p>Count odd: <span>${odd}</span> </p>`);
}



// 6. Зацикліть калькулятор. Запросіть у користувача 2 числа і
// знак, розв’яжіть приклад, виведіть результат і запитайте,
// чи хоче він розв’язати ще один приклад. І так триватиме
// доти, доки користувач не відмовиться.

{
  let repeat = true;

  while (repeat) {
    let num1 = prompt("Enter the first number:");
    let num2 = prompt("Enter the second number:");
    let operator = prompt("Enter the operation (+, -, *, /)");

    let result;
    if (operator === "+") {
      result = +num1 + +num2;
    } else if (operator === "-") {
      result = num1 - num2;
    } else if (operator === "*") {
      result = num1 * num2;
    } else if (operator === "/") {
      result = num1 / num2;
    } else {
      alert("Error");
      continue;
    }

    alert(`Result :: ${result}`);

    let answer = prompt("Do you want to solve another example? (Yes/No)");
    if (answer !== "yes" && answer !== "Yes") {
      repeat = false;
    }
  }
  alert("Thank you for using the calculator");
}


// 7. Запросіть у користувача число і на скільки цифр його змі-
// стити. Змістіть цифри числа та виведіть результат (якщо
// число 123456 змістити на 2 цифри, то вийде 345612).

{
  let step = 0;
  let number = parseInt(prompt("Enter number","123456"));
  let divide = 10;
  let tmp = number;
  while(tmp > 0){
    step++;
    tmp = parseInt(tmp / 10);
  }
  divide = divide ** (step-1);
  let offset = +prompt("Enter offset digit");
  
  document.write(`<p class="num">${number} </p><br>`);

  for(let i =0; i < offset % step; i++)
  {
    let n = parseInt(number / divide);
    number %= divide;
    number = number * 10 + n
  }
  document.write(`<p class="num">${number}</p> `);
}



// 8. Зацикліть виведення днів тижня таким чином: «День
// тижня. Бажаєте побачити назву наступного дня тижня?”,
// і так доти, доки користувач натискатиме OK.


{
  let day = 'Monday';
  let answer;

  do {
    console.log(`Weekday : ${day}. Want to see the name of the next day of the week?`);
    answer = confirm('Click OK to continue');
    
    
    if (day === 'Monday') {
      day = 'Tuesday';
    } else if (day === 'Tuesday') {
      day = 'Wednesday';
    } else if (day === 'Wednesday') {
      day = 'Thursday';
    } else if (day === 'Thursday') {
      day = 'Friday';
    } else if (day === 'Friday') {
      day = 'Saturday';
    } else if (day === 'Saturday') {
      day = 'Sunday';
    } else if (day === 'Sunday') {
      day = 'Monday';
    }
} while (answer);

}




// 9. Виведіть таблицю множення для всіх чисел від 2 до 9.
// Кожне число необхідно помножити на числа від 1 до 10.

{
  document.write("<table>");
  for(let q = 0; q < 10; q+=5){
    document.write("<tr>");
    for(let j = 1; j < 6; j++){
      document.write("<td>");
      for( let i = 1; i <= 10; i++){
        document.write(`${j + q} x ${i} = ${(j + q) * i} <br>`);  
      }
      document.write("</td>");
    }
    document.write("</tr>");
    }
    
    document.write("</table>");
}



// 10. Гра «Вгадай число». Запропонуйте користувачеві загадати
// число від 0 до 100 і відгадати його наступним способом: в
// кожній ітерації циклу поділяєте діапазон чисел навпіл,
// записуєте результат в N і запитуєте у користувача «Ваше
// число > N, < N або == N?». Залежно від відповіді користу-
// вача, зменшуєте діапазон. Початковий діапазон від 0 до
// 100, поділяєте навпіл і отримуєте 50. Якщо користувач
// вказав, що його число > 50, змінюєте діапазон числа від 51
// до 100. І так доти, доки користувач не вибере == N.


{
  alert("Gues the number (0 - 100");
  let counter = 0;
  let end = 100;
  let number = end/2;
  let step = number;
  while(true){
    let answer = prompt(`Your number \n> ${number}; \n< ${number}; \n= ${number}`);
    if(answer == "="){
      alert(`Your number ${number}`);
      break;
    }
    if(counter > 5){
      alert("Error!!! You missed your number");
      break;
    }
    step = parseInt(step / 2);
    if(answer == "<"){
      number =number - step;
      if(step == 0){
        number --;
        counter ++;
      }
    }
    else{
      number = number + step;
      if(step == 0){
        number ++;
        counter ++;
      }
    }
  }
  
}