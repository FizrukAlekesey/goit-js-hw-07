import { galleryItems } from './gallery-items.js';
const galleryWar = document.querySelector(`.gallery`);

const qalleryItemMarkup = galleryItems.map(({praview, orginal, description}) =>
<div class="gallery__item">
  <a class="gallery__link" href="${original}"> 
  <img 
  class="gallery__image"
  src="${preview}"
  data-source="${original}"
  alt="${description}"
/>
</a> 
</div>).join('');

galleryWrap.innerHTML=galleryItemMarkup;

console.log(galleryItems);
