'use strict';

// Функция, возвращающая случайное целое число из переданного диапазона включительно. 
// sourse: https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Math/random

function getRandomIntInclusive(a,b) {
  if (a >= 0 && b >= 0) {  // Проверка на отрицательность диапазона
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
    return Math.floor(Math.random() * (max - min + 1)) + min;  
  }
}

getRandomIntInclusive();

// Функция для проверки максимальной длины строки.

function checkMaxLengthStr (str, maxLength) {
  return maxLength >= str.length ? true : false;
}

checkMaxLengthStr();

const DESCRIPT = [
  'На прогулке',
  'Ем травку',
  'Бегаю по двору',
  'Повис на занавесках',
  'Утренняя зарядка',
  'Вечерняя тренировка',
  'Питаюсь правильно!',
  'Играю с соседями',
  'Греюсь на солнышке',
  'Умываюсь',
  'Шумлю в 3 ночи',
  'Пытаюсь разбудить хозяев',
  'Разбудил хозяев',
  'Бегу от хозяев',
  'Хозяева бегут за мной',
  'Меня догнали',
  'Кормят завтраком',
  'Убирают лоток',
  'Лежу на подоконнике',
  'Лакаю молоко',
  'Играем с друзьями в кости',
  'Обедаю',
  'Нашел сметану',
  'Моюсь после сметаны',
  'Сплю...',
];

const MESSAGE = [
  'Всё отлично!',
  'В целом всё неплохо. Но не всё.',
  'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
  'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
  'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
  'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!',
];

const NAME = [
  'Васёк',
  'Антоша',
  'Аня',
  'Иван',
  'Вика',
  'Оля',
  'Света'];

function getRandomArrayElement(elements) {
  return elements[getRandomIntInclusive(0, elements.length - 1)];
}

const AVATAR = [];
function agd(c,d) {
  for (let i = c; i <= (d - c) + 1; i++) {
    AVATAR.push('img/avatar-' + i + '.svg');
  }
}

agd(1,6);

const HEADMASS = [];
function genHeadMass (quantity) { // quantity - количество генерируемых элементов.
  let a;
  for (let i = 1; i <= quantity; i++) {
    a = {
      id: i,
      url: 'photos/' + i + '.jpg',
      description: DESCRIPT[i-1],
      likes: getRandomIntInclusive(15,200),
      comments: {
        id: getRandomIntInclusive(26,200),
        avatar: getRandomArrayElement(AVATAR),
        message: getRandomArrayElement(MESSAGE),
        name: getRandomArrayElement(NAME),
      },
    }
    HEADMASS.push(a)
  }
  return HEADMASS
}

genHeadMass(25); 