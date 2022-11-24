import { setDefaultScaleAndSize } from './scale-operations.js';
import { sendData } from './api.js';
import {showSuccessMessage, showErrorMessage} from './messages.js';
import {isEscapeKey} from './utils.js';

const uploadFileIcon = document.querySelector('#upload-file');
const imageUploadForm = document.querySelector('.img-upload__overlay');
const cancelButton = document.querySelector('#upload-cancel');
const form = document.querySelector('.img-upload__form');
const submitButton = document.querySelector('.img-upload__submit');
const scrollBar = document.querySelector('.img-upload__effect-level');

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

function onPopupEscKeydown (evt) {
  if (isEscapeKey(evt)) {
    evt.preventDefault();
    closeModal();
  }
}

const openModal = () => {
  imageUploadForm.classList.remove('hidden');
  document.body.classList.add('modal-open');
  scrollBar.classList.add('hidden');
  document.addEventListener('keydown', onPopupEscKeydown);
  setDefaultScaleAndSize();
};

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

const setUserFormSubmit = (onSuccess) => {
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
          showErrorMessage();
          unblockSubmitButton();
        },
        new FormData(evt.target),
      );
    }
  });
};

export {setUserFormSubmit, closeModal};
