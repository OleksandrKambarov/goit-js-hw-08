// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line

console.log(galleryItems);

const picturesContainer = document.querySelector('.js-gallery');
const galleryMarkup = createGalleryMarkup(galleryItems);

picturesContainer.insertAdjacentHTML('beforeend', galleryMarkup);

picturesContainer.addEventListener('click', onpicturesContainerCkick);

function createGalleryMarkup(galleryItems) {
  return galleryItems
    .map(({ preview, original, description }) => {
      return `
      <div class="gallery__item">
        <a class="gallery__link" href="${original}">
          <img
            class="gallery__image"
            src="${preview}"
            data-source="${original}"
            alt="${description}"
          />
        </a>
      </div>`;
    })
    .join('');
}

function onpicturesContainerCkick(e) {
  e.preventDefault();

  if (!e.target.dataset.source) {
    return;
  }

  const instance = basicLightbox.create(
    `
  <img src= ${e.target.dataset.source} width="800" height="600">
`,
    {
      onShow: () => document.addEventListener('keydown', onCloseModel),
      onClose: () => document.removeEventListener('keydown', onCloseModel),
    }
  );

  instance.show();

  function onCloseModel(e) {
    if (e.code === 'Escape') {
      instance.close(() => console.log('lightbox not visible anymore'));
    }
  }
}
