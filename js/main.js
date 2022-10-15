const getRandomPositiveInteger = (a, b) => {
  if (a < 0 || b < 0) {
    return NaN;
  }
  const lower = Math.ceil(Math.min(a, b));
  const upper = Math.floor(Math.max(a, b));
  const result = Math.random() * (upper - lower + 1) + lower;
  return Math.floor(result);
};

const PHOTO_DESCRIPTION = [
  'bag',
  'empty',
  'shopping bag',
  'street',
  'people',
  'cat-ear headband ',
  'Ultrasonic Motor',
  'machine',
];

const getRandomArrayElement = (elements) => elements[getRandomPositiveInteger(0, elements.length - 1)];

const GALLERY_LENGTH = 25;

const makePhotoDescription = (index) => ({
  id: index + 1,
  url:`photos/${index + 1}.jpg`,
  description: getRandomArrayElement(PHOTO_DESCRIPTION),
  likes:getRandomPositiveInteger(15,200),
  comments:getRandomPositiveInteger(0,200),
});

const makeGalleyPhotos = Array.from({length: GALLERY_LENGTH}, (_, index) => makePhotoDescription(index));
