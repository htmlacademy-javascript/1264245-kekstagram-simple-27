import './draw-thumbnails.js';
import {setUserFormSubmit} from './form.js';
import { getData } from './api.js';
import { createThumbnails } from './draw-thumbnails.js';
import './effects.js';
import {showSuccessMessage, showErrorMessage} from './messages.js';

getData((pictures) => {
  createThumbnails(pictures);
});

setUserFormSubmit(showSuccessMessage, showErrorMessage);
