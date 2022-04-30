import { galleryItems } from './gallery-items.js';
// Change code below this line
const galleryEl = document.querySelector('.gallery');

galleryEl.insertAdjacentHTML("beforeend", galleryItemMarkup(galleryItems));

function galleryItemMarkup(gallery) {
    return gallery
        .map(({ preview, original, description }) => {
            return `
        <li>
        <a class="gallery__item" href="${original}">
        <img class="gallery__image" src="${preview}" alt="${description}" title="${description}"/>
        </a>
        </li>
        `
        })
        .join('')
};

let lightbox = new SimpleLightbox('.gallery__item', {captionDelay: 250});


console.log(galleryItems);
