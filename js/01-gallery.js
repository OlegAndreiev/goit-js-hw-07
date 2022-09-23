import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);
// -----------------references--------------------
const imagesContainer = document.querySelector('.gallery');

// --------------------templates--------------------

let instance;

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

  openModal(imgSrc);
  noScroll();
}

function openModal(imgSrc) {
  document.addEventListener('keydown', closeModal);
  instance = basicLightbox.create(
    `
    <div class="modal">
        <img src="${imgSrc}"/>
    </div>
`,
    {
      closable: false,
    }
  );
  instance.show();
}

function closeModal(evt) {
  if (evt.code === 'Escape') {
    instance.close();
    document.body.style.overflow = '';
    document.removeEventListener('keydown', closeModal);
  }
}

function noScroll() {
  document.body.style.overflow = 'hidden';
}

// --------------------Add Event Listener--------------------
imagesContainer.addEventListener('click', onImagesContainerClick);

// document.addEventListener('keydown', event => {
//   console.log('Keydown: ', event.code);
// });
