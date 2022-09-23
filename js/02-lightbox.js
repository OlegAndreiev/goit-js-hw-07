import { galleryItems } from './gallery-items.js';
// Change code below this line
console.log(galleryItems);
// -----------------references--------------------
const imagesContainer = document.querySelector('.gallery');

// --------------------first render--------------------
const cardsMarkup = createImgCardsMarkup(galleryItems);
imagesContainer.insertAdjacentHTML('beforeend', cardsMarkup);

// --------------------functions--------------------
function createImgCardsMarkup(galleryItems) {
  const markup = galleryItems
    .map(({ preview, original, description }) => {
      return `<div class="gallery__item">
        <a class="gallery__item" href="${original}">
        <img
        class="gallery__image"
        src="${preview}"
        alt="${description}"
        />
        </a>
        </div>`;
    })
    .join('');

  return markup;
}
// --------------------Lightbox--------------------
var lightbox = new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionDelay: 250,
});
