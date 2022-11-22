import './draw-thumbnails.js';
import './form.js';
import { setDefaultSize } from './scale-operations.js';
import { getData } from './api.js';
import { createThumbnails } from './draw-thumbnails.js';

setDefaultSize();

getData((pictures) => {
  createThumbnails(pictures);
});
