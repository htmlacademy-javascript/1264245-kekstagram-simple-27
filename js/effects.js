const effectsListElement = document.querySelector('.effects__list');
const imagePreviewElement = document.querySelector('.img-upload__preview');

effectsListElement.addEventListener('change', (evt) => {
  const effectName = evt.target.value;
  imagePreviewElement.removeAttribute('class');
  imagePreviewElement.classList.add('img-upload__preview',`effects__preview--${effectName}`);
});

export const deleteEffect = () => {
  imagePreviewElement.removeAttribute('class');
  imagePreviewElement.classList.add('img-upload__preview','effects__preview--none');



};
