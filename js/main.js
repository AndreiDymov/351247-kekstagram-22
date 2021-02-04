'use strict';

// Функция, возвращающая случайное целое число из переданного диапазона включительно. 
// sourse: https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Math/random

function getRandomIntInclusive(a,b) {
  if (a > 0 && b > 0) {  // Проверка на отрицательность диапазона
    let min;
    let max;
    if (a < b) {
      min = a;
      max = b; 
    } else {
      min = b;
      max = a;
    }
    min = Math.ceil(min);
    max = Math.floor(max);  
    return Math.floor(Math.random() * (max - min + 1)) +min;  
  }
}

getRandomIntInclusive();

// Функция для проверки максимальной длины строки.

function checkMaxLengthStr (str, maxLength) {
  return maxLength >= str.length ? true : false;
}

checkMaxLengthStr();