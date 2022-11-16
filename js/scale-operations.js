const decreaseButton = document.querySelector('.scale__control--smaller');
const increaseButton = document.querySelector('.scale__control--bigger');
const scaleValue = document.querySelector('.scale__control--value');
const image = document.querySelector('.img-upload__preview img');
const MIN_SCALE = 25;
const MAX_SCALE = 100;
const SCALE_STEP = 25;
const DEFAULT_SCALE = 100;

const setDefaultSize = () => {
  scaleValue.value = `${DEFAULT_SCALE}%`;
  image.style.transform = `scale(${scaleValue.value / 100})`;
};

increaseButton.addEventListener('click', () => {
  let currentValue = parseInt(scaleValue.value, 10);
  if (currentValue < MAX_SCALE) {
    currentValue += SCALE_STEP;
  }
  scaleValue.value = `${currentValue}%`;
  image.style.transform = `scale(${currentValue / 100})`;
});

decreaseButton.addEventListener('click', () => {
  let currentValue = parseInt(scaleValue.value, 10);
  if (currentValue > MIN_SCALE) {
    currentValue -= SCALE_STEP;
  }
  scaleValue.value = `${currentValue}%`;
  image.style.transform = `scale(${currentValue / 100})`;
});

export {setDefaultSize};
