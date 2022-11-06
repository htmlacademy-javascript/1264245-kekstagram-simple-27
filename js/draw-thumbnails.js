
function createThumbnails(makeGalleyPhotos) {
  const containerValue = document.querySelector('#picture').content.querySelector('.picture');
  const containerElement = containerValue.cloneNode(true);
  const thumbnailsFragment = document.createDocumentFragment();

  makeGalleyPhotos.forEach((url, likes, comments) => {
    containerElement.querySelector('.picture__img').src = url;
    containerElement.querySelector('.picture__likes').textContent = likes;
    containerElement.querySelector('.picture__comments').textContent = comments;
    return thumbnailsFragment.append(containerElement);
  });
}

export {createThumbnails};
