import  galleryItems  from './gallery-items.js';
// Change code below this line

const galleryWar = document.querySelector(`.gallery`);

const qalleryItemMarkup = galleryItems.map(({praview, orginal, description}) =>
<li class="gallery__item">
   <a class="gallery__link" href="large-image.jpg">
      <img class="gallery__image" src="small-image.jpg" alt="Image description" />
   </a>
</li>).join('');

galleryWrap.innerHTML=galleryItemMarkup;
console.log(galleryItems);
