const MIN_SCALE_VALUE = 25;
const MAX_SCALE_VALUE = 100;
const SCALE_STEP = 25;
const DEFAULT_SCALE = 100;

const decreaseButton = document.querySelector('.scale__control--smaller');
const increaseButton = document.querySelector('.scale__control--bigger');
const scaleValueElement = document.querySelector('.scale__control--value');
const imagePreviewElement = document.querySelector('.img-upload__preview');

const scaleImage = (value) => {
  scaleValueElement.value = `${value}%`;
  imagePreviewElement.style.transform = `scale(${value / 100})`;
};

const makeImageLarger = () => {
  let currentScaleValue = parseInt(scaleValueElement.value, 10);
  if (currentScaleValue < MAX_SCALE_VALUE) {
    currentScaleValue += SCALE_STEP;
  }
  scaleImage(currentScaleValue);
};

const makeImageSmaller = () => {
  let currentScaleValue = parseInt(scaleValueElement.value, 10);
  if (currentScaleValue > MIN_SCALE_VALUE) {
    currentScaleValue -= SCALE_STEP;
  }
  scaleImage(currentScaleValue);
};

const setDefaultScaleAndSize = () => {
  imagePreviewElement.style.transform = `scale(${1})`;
  scaleValueElement.value = '100%';
};

// const controlValueElement = document.querySelector(".scale__control--value");
// const uploadImageElement = document.querySelector(".img-upload__preview");

// const changeSize = () => {
//   const number = controlValueElement.value / Parameters.VALUE_MAX;
//   uploadImageElement.style.transform = `scale(${number})`;
//   controlValueElement.value = `${controlValueElement.value}%`;
// };

// const onControlBiggerClick = () => {
//   if (parseInt(controlValueElement.value, 10) < Parameters.VALUE_MAX) {
//     controlValueElement.value =
//       parseInt(controlValueElement.value, 10) + Parameters.STEP;
//   } else {
//     controlValueElement.value = Parameters.VALUE_MAX;
//   }
//   changeSize();
// };

// const onControlSmallerClick = () => {
//   if (parseInt(controlValueElement.value, 10) > Parameters.VALUE_MIN) {
//     controlValueElement.value =
//       parseInt(controlValueElement.value, 10) - Parameters.STEP;
//   } else {
//     controlValueElement.value = Parameters.VALUE_MIN;
//   }
//   changeSize();
// };

// let currentScaleValue;
// const decreaseButton = document.querySelector('.scale__control--smaller');
// const increaseButton = document.querySelector('.scale__control--bigger');
// const scaleValueElement = document.querySelector('.scale__control--value');
// const imagePreviewElement = document.querySelector('.img-upload__preview');

// const setImageDefaultSize = (value = DEFAULT_SCALE) => {
//   scaleValueElement.value = `${DEFAULT_SCALE}%`;
//   imagePreviewElement.style.transform = `scale(${scaleValueElement.value / 100})`;
// };

// increaseButton.addEventListener('click', () => {
//   let currentValue = parseInt(scaleValueElement.value, 10);
//   if (currentValue < MAX_SCALE) {
//     currentValue += SCALE_STEP;
//     currentScaleValue = currentValue;
//   }
//   scaleValueElement.value = `${currentValue}%`;
//   imagePreviewElement.style.transform = `scale(${currentValue / 100})`;
// });

// decreaseButton.addEventListener('click', () => {
//   let currentValue = parseInt(scaleValueElement.value, 10);
//   if (currentValue > MIN_SCALE) {
//     currentValue -= SCALE_STEP;
//     currentScaleValue = currentValue;
//   }
//   scaleValueElement.value = `${currentValue}%`;
//   imagePreviewElement.style.transform = `scale(${currentValue / 100})`;
// });

// export {setImageDefaultSize, currentScaleValue, imagePreviewElement};

increaseButton.addEventListener('click', makeImageLarger);
decreaseButton.addEventListener('click', makeImageSmaller);

export { setDefaultScaleAndSize };
