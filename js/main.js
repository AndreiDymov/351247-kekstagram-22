'use strict';

// Функция, возвращающая случайное целое число из переданного диапазона включительно. 
// sourse: https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Math/random

function getRandomIntInclusive(a,b) {
  let min;
  let max;
  if (a > 0 && b > 0) {  // Проверка на отрицательность диапазона
    if (a < b) {
      a = min;
      b = max; 
    } else {
      a = max;
      b = min;
    }
    min = Math.ceil(min);
    max = Math.floor(max);  
    return Math.floor(Math.random() * (max - min + 1)) +min;  
  }
}


getRandomIntInclusive ();

// Функция для проверки максимальной длины строки.

let maxLength;
let str;

let checkMaxLengthStr = (maxLength >= str.length) ? true : false;

checkMaxLengthStr ();