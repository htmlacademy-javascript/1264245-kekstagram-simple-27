import {setDefaultSize} from './scale-operations.js';

const uploadFileIcon = document.querySelector('#upload-file');
const imageUploadForm = document.querySelector('.img-upload__overlay');
const cancelButton = document.querySelector('#upload-cancel');
const form = document.querySelector('.img-upload__form');
const isEscapeKey = (evt) => evt.key === 'Escape';
const pristineConfig = {
  classTo: 'img-upload__text',
  errorTextParent: 'img-upload__text',
  errorTextClass: 'text__description__error-text'
};
const pristine = new Pristine(form,pristineConfig);

const onPopupEscKeydown = (evt) => {
  if (isEscapeKey(evt)) {
    evt.preventDefault();
    closeModal();
  }
};

function closeModal() {
  imageUploadForm.classList.add('hidden');
  document.body.classList.remove('modal-open');
  document.removeEventListener('keyDown', onPopupEscKeydown);
  uploadFileIcon.value = '';
  form.reset();
  // setDefaultSize();
}

uploadFileIcon.addEventListener('click', () => {
  imageUploadForm.classList.remove('hidden');
  document.body.classList.add('modal-open');
  document.addEventListener('keydown', onPopupEscKeydown);
});

cancelButton.addEventListener('click', () => {
  closeModal();
});

form.addEventListener('submit',(evt) => {
  if (!pristine.validate()) {
    evt.preventDefault();
  }
});
