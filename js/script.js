// ---------------------------ЗАДАНИЕ 1 -----------------------------------------------------------------------
document.write(`1. Дан массив с элементами [1, 2, 3, 4, 5]. С помощью цикла for выведите все эти
элементы на экран. <br><br>`);

function task1() {

  let arr = [1, 2, 3, 4, 5];

  for (i = 0; i < arr.length; i++) {
    document.write(`${arr[i]}, `);
  } 
  return arr;
}
console.log(task1());

// ---------------------------ЗАДАНИЕ 2 -----------------------------------------------------------------------
document.write(`<br><hr>   2. Дан массив с числами [-2, -1, -3, 15, 0, -4, 2, -5, 9, -15, 0, 4, 5, -6, 10, 7]. Числа могут
быть положительными и отрицательными. Выведите на экран только отрицательные
числа, которые больше -10, но меньше -3.     <br><br>`)

function task2() {
  let arr = [-2, -1, -3, 15, 0, -4, 2, -5, 9, -15, 0, 4, 5, -6, 10, 7], 
      output = '';

  for (i = 0; i < arr.length; i++) {
    if (arr[i] < -3 && arr[i] > -10) {
      output += `${arr[i]}, `;
    }
  }
    return output;
};
document.write(`Вывод чисел, которые > -10 и < -3: ${task2()}`)

// ---------------------------ЗАДАНИЕ 3 -----------------------------------------------------------------------
document.write(`<br><hr>   3. Создайте новый массив и заполните его значениями от 23 до 57, используя цикл for и
while. Выведите оба массива. С помощью цикла for найдите сумму элементов этого
массива. Запишите ее в переменную result и выведите.     <br><br>`)

function task3() {
  
  let arr = [],
      result = 0;

  for (let i = 23; i < 57; i++) {
    arr.push(' ' + i);
    result += i
  } 
  return [`Цикл for: ${arr} <br> Сумма элементов:  ${result} <br>`]
}
document.write(task3())

function task3$() {

  let arr = [],
      i = 23; 
  
  while (i < 57) {
    arr.push(` ` + i);
    i++
  }
  return [`Цикл while: ${arr}`]
}
document.write(task3$())

// --------------------------- ЗАДАНИЕ 4 -----------------------------------------------------------------------
document.write(`<br><hr>   4. Дан массив числами (строчного типа), например: ['10', '20', '30', '50', '235', '3000'].
Выведите на экран только те числа из массива, которые начинаются на цифру 1, 2 или
5.     <br><br>`)

function task4() {

  let arr = ['10', '20', '30', '50', '235', '3000']; 
      result = '';
  for (i = 0; i < arr.length; i++) {
    if (arr[i][0] == 1 || arr[i][0] == 2 || arr[i][0] === '5') {
      result += arr[i] + ` `;
    }
  }
  return result
}

document.write(task4())

// --------------------------- ЗАДАНИЕ 5 -----------------------------------------------------------------------
document.write(`<br><hr>   5. Составьте массив дней недели (ПН, ВТ, СР и т.д.). С помощью цикла for выведите все
дни недели, а выходные дни выведите жирным.     <br><br>`)

function task5() {
  
  let arr = ['ПН', 'ВТ', 'СР', 'ЧТ', 'ПТ', 'СБ', 'ВС'];

  for(i = 0; i < arr.length; i++) {
    if (arr[i] == 'СБ' || arr[i] == 'ВС') {
      document.write(`<b> ${arr[i]} </b> <br>`)
    } else {
      document.write(`${arr[i]}<br>`)
    }
  }
}

console.log(task5());

// ------------------------ ЗАДАНИЕ 6 -------------------------------------------------------------------
document.write(`<br><hr>   6. Создайте массив с произвольными данными. Добавьте в конец массива любой элемент, 
и получите последний элемент массива, используя свойство length.   <br><br>`)
  
  let arr = [0, 5, 10, 15, 20,];
    document.write(`${arr} <br>`);

    arr.push('MyItSchool');
    document.write(`${arr} <br>`); 
    document.write(`${arr[arr.length - 1]} <br>`);

// ------------------------ ЗАДАНИЕ 7 -------------------------------------------------------------------
document.write(`<br><hr>   7. Запросите у пользователя по очереди числовые значения при помощи prompt и 
сохраните их в массив. Собирайте числа до тех пор, пока пользователь не введет пустое 
значение. Выведите получившийся массив на экран. Выполните сортировку чисел 
массива, и выведите его на экран.   <br><br>`)

let arrNum = [],
    nums; 

while (true) {
  nums = +prompt('Введите число', 22);
  if (Number.isInteger(nums)) {
    arrNum.push(nums);
  }
  if (nums == '') {  
    arrNum.pop()
    break;
  } 
  if (isNaN(nums)) {
    alert('Было введено не число!')
  }
// ------------ не понимаю, почему не работает через else if. И при вводе нуля происходит break, при строгом равенстве break не работает ни для пустой строки, ни для нуля 
}

document.write(arrNum);

arrNum.sort(function(a, b){
  return a - b;
});
document.write(`<br> ${arrNum}`); // скопировал с прошлого урока

// -------------------------------------------------- ЗАДАНИЕ 8 -----------------------------------
document.write(`<br><hr>   8.Переверните массив [12, false, ‘Текст’, 4, 2, -5, 0] (выведите в обратном порядке), 
используя цикл while и метод reverse.   <br><br>`)

let arr8 = [12, false, 'Текст', 4, 2, -5, 0];
let len = arr8.length


function task8() {
  let i = len - 1, 
      reverse = []
  while (i >= 0) {
    reverse += arr8[i] + '; '
    i--
  } return `Цикл while: ${reverse}`
}
document.write(`${task8()} <br>`);

arr8.reverse(); 
document.write(`Метод reverse: ${arr8} `);

// ---------------------------------------------------- ЗАДАНИЕ 9 ------------------------------------------------
document.write(`<br><hr>   9. Напишите скрипт, считающий количество нулевых (пустых) элементов в заданном 
целочисленном массиве [5, 9, 21, , , 9, 78, , , , 6].   <br><br>`); 

let arr1 = [5, 9, 21, , , 9, 78, , , , 6];
console.log(typeof arr1[3]);

let amountElem = 0;
for (i = 0; i < arr1.length; i++) {
  if (arr1[i] === undefined) {
    amountElem++
  }
}
document.write(amountElem);

// ---------------------------------------------------- ЗАДАНИЕ 10 ------------------------------------------------
document.write(`<br><hr>   10.  Найдите сумму элементов массива между двумя нулями (первым и последним нулями 
  в массиве). Если двух нулей нет в массиве, то выведите ноль. В массиве может быть 
  более 2х нулей. Пример массива: [48,9,0,4,21,2,1,0,8,84,76,8,4,13,2] или 
  [1,8,0,13,76,8,7,0,22,0,2,3,2].   <br><br>`);
  
  let arr2 = [48,9,0,4,21,2,1,0,8,84,76,8,4,13,2];

  let firstZero = arr2.indexOf(0), //2
      lastZero = arr2.lastIndexOf(0), //7
      newArr = [],
      sumNewArr = 0;

if(firstZero > 0 && lastZero > 0) {
  newArr = arr2.slice(firstZero + 1, lastZero); //тк со 2 по 7 не считая 7
    for (i = 0; i < newArr.length; i++) {
      sumNewArr += newArr[i];
    }
  } else {
    sumNewArr = 0;
  }
  console.log(newArr);
  document.write(` Сумма элементов между двумя 0 = ${sumNewArr}`);