const MIN_SCALE_VALUE = 25;
const MAX_SCALE_VALUE = 100;
const SCALE_STEP = 25;

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

increaseButton.addEventListener('click', makeImageLarger);
decreaseButton.addEventListener('click', makeImageSmaller);

export { setDefaultScaleAndSize };
