import {getRandomIntInclusive, getRandomArrayElement} from './util.js';

import {INITIAL_RANGE_LIKES, END_RANGE_LIKES, INITIAL_RANGE_COMMENTATOR_ID, END_RANGE_COMMENTATOR_ID, INITIAL_RANGE_AVATAR, END_RANGE_AVATAR, DESCRIPTIONS, MESSAGES, NAMES} from './data.js';


function getRandomAvatar(a,b) {
  const NUM_AVATAR = getRandomIntInclusive(a,b);
  return ('img/avatar-' + NUM_AVATAR + '.svg');
}

function genHeadMass (quantity) { // quantity - количество генерируемых элементов.
  const HEAD_MASS = [];
  for (let i = 1; i <= quantity; i++) {
    const ELEMENT_HEAD_MASS = {
      id: i,
      url: 'photos/' + i + '.jpg',
      description: DESCRIPTIONS[i-1],
      likes: getRandomIntInclusive(INITIAL_RANGE_LIKES,END_RANGE_LIKES),
      comments: {
        id: getRandomIntInclusive(INITIAL_RANGE_COMMENTATOR_ID,END_RANGE_COMMENTATOR_ID),
        avatar: getRandomAvatar(INITIAL_RANGE_AVATAR,END_RANGE_AVATAR),
        message: getRandomArrayElement(MESSAGES),
        name: getRandomArrayElement(NAMES),
      },
    }
    HEAD_MASS.push(ELEMENT_HEAD_MASS)
  }
  return HEAD_MASS
}

genHeadMass(25);

export {genHeadMass};