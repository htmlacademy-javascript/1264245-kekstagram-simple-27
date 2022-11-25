import {isEscapeKey} from './utils.js';

const errorMessageTemplate = document.querySelector('#error').content.querySelector('.error');
const successMessageTemplate = document.querySelector('#success').content.querySelector('.success');
const bodyElement = document.querySelector('body');

const onMessageEscKeydown = (evt) => {
  if (isEscapeKey(evt)) {
    evt.preventDefault();
    onCloseMessage();
  }
};

function onCloseMessage () {
  const message = document.querySelector('.error') || document.querySelector('.success');
  message.remove();
  document.removeEventListener('keydown', onMessageEscKeydown);
  document.removeEventListener('click', onCloseMessage);
  bodyElement.style.overflow = 'auto';
}

const showErrorMessage = () => {
  const errorMessage = errorMessageTemplate.cloneNode(true);
  errorMessage.querySelector('.error__button').addEventListener('click', onCloseMessage);
  document.addEventListener('keydown', onMessageEscKeydown);
  document.addEventListener('click', onCloseMessage);
  bodyElement.appendChild(errorMessage);
  bodyElement.style.overflow = 'hidden';
};

const showSuccessMessage = () => {
  const successMessage = successMessageTemplate.cloneNode(true);
  successMessage.querySelector('.success__button').addEventListener('click', onCloseMessage);
  document.addEventListener('keydown', onMessageEscKeydown);
  document.addEventListener('click', onCloseMessage);
  bodyElement.appendChild(successMessage);
  bodyElement.style.overflow = 'hidden';
};

export {showErrorMessage, showSuccessMessage};
