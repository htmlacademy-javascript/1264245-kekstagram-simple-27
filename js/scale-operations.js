let currentScaleValue;
const decreaseButton = document.querySelector('.scale__control--smaller');
const increaseButton = document.querySelector('.scale__control--bigger');
const scaleValueElement = document.querySelector('.scale__control--value');
const imagePreviewElement = document.querySelector('.img-upload__preview');
const MIN_SCALE = 25;
const MAX_SCALE = 100;
const SCALE_STEP = 25;
const DEFAULT_SCALE = 100;

const setImageDefaultSize = () => {
  scaleValueElement.value = `${DEFAULT_SCALE}%`;
  imagePreviewElement.style.transform = `scale(${scaleValueElement.value / 100})`;
};

increaseButton.addEventListener('click', () => {
  let currentValue = parseInt(scaleValueElement.value, 10);
  if (currentValue < MAX_SCALE) {
    currentValue += SCALE_STEP;
    currentScaleValue = currentValue;
  }
  scaleValueElement.value = `${currentValue}%`;
  imagePreviewElement.style.transform = `scale(${currentValue / 100})`;
});

decreaseButton.addEventListener('click', () => {
  let currentValue = parseInt(scaleValueElement.value, 10);
  if (currentValue > MIN_SCALE) {
    currentValue -= SCALE_STEP;
    currentScaleValue = currentValue;
  }
  scaleValueElement.value = `${currentValue}%`;
  imagePreviewElement.style.transform = `scale(${currentValue / 100})`;
});

export {setImageDefaultSize, currentScaleValue, imagePreviewElement};
