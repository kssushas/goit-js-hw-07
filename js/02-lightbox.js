import { galleryItems } from './gallery-items.js';


const galleryEl = document.querySelector('.gallery');
galleryEl.addEventListener('click', hendleClick);

const galleryImages = galleryItems.map(({original,preview,description}) => {
    return `<li class=${'gallery__item'}>
  <a class=${'gallery__link'} href=${original}>
    <img
      class=${"gallery__image"}
      src=${preview}
      alt=${description}
    />
  </a>
</li>`
}).join('');

galleryEl.innerHTML = galleryImages;

function hendleClick(e) {
    e.preventDefault();

    if ( e.target.nodeName !== 'IMG')
    {
        return
    };
  
  createSimpleLightbox();
};

function createSimpleLightbox() {
   new SimpleLightbox
    ('.gallery a', {
      captionsData: 'alt',
      captionPosition: 'bottom',
      captionDelay: 250
    }
    )
};

