import './draw-thumbnails.js';
import {setUserFormSubmit, onCloseModal} from './form.js';
import { getData } from './api.js';
import { createThumbnails } from './draw-thumbnails.js';
import './effects.js';

getData((pictures) => {
  createThumbnails(pictures);
});

setUserFormSubmit(onCloseModal);
