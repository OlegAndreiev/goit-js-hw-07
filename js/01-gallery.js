import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);
// -----------------references--------------------
const imagesContainer = document.querySelector('.gallery');

// --------------------templates--------------------

// --------------------first render--------------------
const cardsMarkup = createImgCardsMarkup(galleryItems);
imagesContainer.insertAdjacentHTML('beforeend', cardsMarkup);

// --------------------functions--------------------

function createImgCardsMarkup(galleryItems) {
  const markup = galleryItems
    .map(({ preview, original, description }) => {
      return `<div class="gallery__item">
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

  return markup;
}

function onImagesContainerClick(evt) {
  evt.preventDefault();
  if (!evt.target.classList.contains('gallery__image')) {
    return;
  }
  const imgSrc = evt.target.dataset.source;
  const instance = basicLightbox.create(
    `
       <img src="${imgSrc}"/>
    `
  );
  openModal(imgSrc);

  function openModal() {
    document.addEventListener('keydown', closeModal);
    instance.show();
  }

  function closeModal(evt) {
    if (evt.code === 'Escape') {
      document.removeEventListener('keydown', closeModal);
      instance.close();
    }
  }
}

// --------------------Add Event Listener--------------------
imagesContainer.addEventListener('click', onImagesContainerClick);

// document.addEventListener('keydown', event => {
//   console.log('Keydown: ', event.code);
// });
