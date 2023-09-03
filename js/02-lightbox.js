import { galleryItems } from './gallery-items.js';


const galleryEl = document.querySelector('.gallery');

const galleryImages = galleryItems.map(({original,preview,description}) => {
    return `<li class='gallery__item'>
  <a class='gallery__link' href=${original}>
    <img
      class="gallery__image"
      src=${preview}
      data-source=${original}
      alt=${description}
    />
  </a>
</li>`
}).join('');

galleryEl.innerHTML = galleryImages;

   new SimpleLightbox
    ('.gallery a', {
      captionsData: 'alt',
      captionPosition: 'bottom',
      captionDelay: 250
    }
    )


