import { galleryItems } from './gallery-items.js';

const galleryEl = document.querySelector('.gallery');
galleryEl.addEventListener('click', hendleClick);

const galleryImages = galleryItems.map(({original,preview,description}) => {
    return `<li class=${'gallery__item'}>
  <a class=${'gallery__link'} href=${original}>
    <img
      class=${"gallery__image"}
      src=${preview}
      data-source=${original}
      alt=${description}
    />
  </a>
</li>`
}).join('');

galleryEl.innerHTML = galleryImages;


function hendleClick(event) {
  event.preventDefault();

 if (!event.target.classList.contains('gallery__image')) {
    return;
 }
  
  const target = event.target.dataset.source;
  const findTargetImg = galleryItems.find(product => {
    return (product.original === target);
  });
 
  openCloseModal(findTargetImg,target);

};

function openCloseModal(findTargetImg,target) {
  
  const instance = basicLightbox.create(`
  <div class = "modal">
    <img
      src = ${target}
      alt=${findTargetImg.description}
      width="800" height="500"
    />
  </div>
  `);
  instance.show();

    galleryEl.addEventListener("keydown", (evt) => {
    if (evt.code === 'Escape') {
      instance.close();
    }
  })
};









