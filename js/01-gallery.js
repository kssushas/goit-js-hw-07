import { galleryItems } from './gallery-items.js';

const galleryEl = document.querySelector('.gallery');
galleryEl.addEventListener('click', hendleClick);

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


function hendleClick(event) {
  event.preventDefault();

 if (!event.target.classList.contains('gallery__image')) {
    return;
 }
  
  const target = event.target.dataset.source;
  const description = event.target.attributes.alt.value;
  console.log(description);
  openCloseModal(description,target);

};

function openCloseModal(description,target) {
  
  const instance = basicLightbox.create(`
  <div class="modal">
    <img
      src=${target}
      alt=${description}
      width="800" height="500"
    />
  </div>
  `, {
    onShow: (instance)=>{galleryEl.addEventListener("keydown", escModal)},
    onclose: (instance)=>{galleryEl.removeEventListener("keydown", escModal)}
  });
  instance.show();

  function escModal(evt) {
     if (evt.code === 'Escape') {
      instance.close();
    }
  };

};









