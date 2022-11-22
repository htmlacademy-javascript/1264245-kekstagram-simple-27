import { imagePreviewElement } from './scale-operations.js';

const effectsListElement = document.querySelector('.effects__list');

effectsListElement.addEventListener('change', (evt) => {
  const effectName = evt.target.value;
  imagePreviewElement.removeAttribute('class');
  imagePreviewElement.classList.add('img-upload__preview',`effects__preview--${effectName}`);
});
