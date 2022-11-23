import { setImageDefaultSize } from './scale-operations.js';
import { sendData } from './api.js';
import {showSuccessMessage, showErrorMessage} from './messages.js';

const uploadFileIcon = document.querySelector('#upload-file');
const imageUploadForm = document.querySelector('.img-upload__overlay');
const cancelButton = document.querySelector('#upload-cancel');
const form = document.querySelector('.img-upload__form');
const isEscapeKey = (evt) => evt.key === 'Escape';
const submitButton = document.querySelector('.img-upload__submit');

const pristineConfig = {
  classTo: 'img-upload__text',
  errorTextParent: 'img-upload__text',
  errorTextClass: 'text__description__error-text',
};
const pristine = new Pristine(form, pristineConfig);

const closeModal = () => {
  imageUploadForm.classList.add('hidden');
  document.body.classList.remove('modal-open');
  document.removeEventListener('keyDown', onPopupEscKeydown);
  uploadFileIcon.value = '';
  form.reset();
};

const scrollBar = document.querySelector('.img-upload__effect-level');

const openModal = () => {
  imageUploadForm.classList.remove('hidden');
  document.body.classList.add('modal-open');
  scrollBar.classList.add('hidden');
  document.addEventListener('keydown', onPopupEscKeydown);
  setImageDefaultSize();
};

function onPopupEscKeydown (evt) {
  if (isEscapeKey(evt)) {
    evt.preventDefault();
    closeModal();
  }
}

uploadFileIcon.addEventListener('change', openModal);
cancelButton.addEventListener('click',closeModal);

const disableSubmitButton = () => {
  submitButton.textContent = 'Идёт отправка';
  submitButton.disabled = true;
};

const unblockSubmitButton = () => {
  submitButton.disabled = false;
  submitButton.textContent = 'Опубликовать';
};

const setUserFormSubmit = (onSuccess, onFail) => {
  form.addEventListener('submit', (evt) => {
    evt.preventDefault();
    const isValid = pristine.validate();
    if (isValid) {
      disableSubmitButton();
      sendData(
        () => {
          onSuccess();
          showSuccessMessage();
          unblockSubmitButton();
        },
        () => {
          onFail();
          showErrorMessage();
          unblockSubmitButton();
        },
        new FormData(evt.target),
      );
    }
  });
};

export {setUserFormSubmit};
