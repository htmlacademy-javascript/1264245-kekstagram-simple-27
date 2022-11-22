import { showAlert } from './utils.js';

const PHOTO_SERVER_URL =
  'https://27.javascript.pages.academy/kekstagram-simple';

const getData = (onSuccess) => {
  fetch(`${PHOTO_SERVER_URL}/data`)
    .then((response) => {
      if (response.ok) {
        return response.json();
      }
      throw new Error(`${response.status} ${response.statusText}`);
    })
    .then((photos) => {
      onSuccess(photos);
    })
    .catch((error) => {
      showAlert(error);
    });
};

export { getData };
