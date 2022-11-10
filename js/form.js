const uploadFileIcon = document.querySelector('#upload-file');
const imgUplOvr = document.querySelector('.img-upload__overlay');
const cancelButton = document.querySelector('#upload-cancel');
const form = document.querySelector('.img-upload__form');
const isEscapeKey = (evt) => evt.key === 'Escape';

const pristineConfig = {
  classTo: 'img-upload__text',
  errorTextParent: 'img-upload__text',
  errorTextClass: 'text__description__error-text'
};

const pristine = new Pristine(form,pristineConfig);

form.addEventListener('submit',(evt) => {
  evt.preventDefault;
  pristine.validate();
});

// create the pristine instance

// form.addEventListener('submit', (evt) => {
//   const isValid = pristine.validate();

//   if (!isValid) {
//     evt.preventDefault();
//   }

// });




uploadFileIcon.addEventListener('click', () => {
  imgUplOvr.classList.remove('hidden');
  document.body.classList.add('modal-open');
});

cancelButton.addEventListener('click', () => {
  imgUplOvr.classList.add('hidden');
  document.body.classList.remove('modal-open');
});









// const onPopupEscKeydown = (evt) => {
//   if (isEscapeKey(evt)) {
//     evt.preventDefault();
//     closeUserModal();
//   }
// };





// // const pristine = new Pristine(form);


// window.onload = function() {

//   let pristine = new Pristine(form);
//   const res = function(value, param1, param2) {
//     return parseInt(param1) <= value && value <= parseInt(param2)
//   };
//   Pristine.addValidator('my-range', res(value, param1, param2), 'Сообщение', 5, false);

// };

// Pristine.addValidator(textarea, true, 'Сообщение', 5, false);


// form.addEventListener('submit', (evt) => {
//   evt.preventDefault();

//   // const isValid = pristine.validate();
// });
