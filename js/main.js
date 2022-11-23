import './draw-thumbnails.js';
import './form.js';
import { getData } from './api.js';
import { createThumbnails } from './draw-thumbnails.js';
import './effects.js';

// setImageDefaultSize();

getData((pictures) => {
  createThumbnails(pictures);
});
