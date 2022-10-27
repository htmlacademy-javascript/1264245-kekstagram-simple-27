import {PHOTO_DESCRIPTION} from './data.js';
import {getRandomPositiveInteger} from './utils.js';

const GALLERY_LENGTH = 25;
const getRandomArrayElement = (elements) => elements[getRandomPositiveInteger(0, elements.length - 1)];

const makePhotoDescription = (index) => ({
  id: index + 1,
  url:`photos/${index + 1}.jpg`,
  description: getRandomArrayElement(PHOTO_DESCRIPTION),
  likes:getRandomPositiveInteger(15,200),
  comments:getRandomPositiveInteger(0,200),
});

const makeGalleyPhotos = Array.from({length: GALLERY_LENGTH}, (_, index) => makePhotoDescription(index));

export {makeGalleyPhotos};
