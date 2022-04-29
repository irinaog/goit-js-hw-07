import { galleryItems } from './gallery-items.js';
// Change code below this line

const galleryEl = document.querySelector('.gallery');

galleryEl.insertAdjacentHTML("beforeend", galleryItemMarkup(galleryItems));

// console.log(galleryItemMarkup(galleryItems));

function galleryItemMarkup(gallery) {
    return gallery
        .map(({ preview, original, description }) => {
            return `
        <div class="gallery__item">
        <a href = "${original}" class = "gallery__link">
        <img class="gallery__image" alt="${description}" src="${preview}">
        </a>
        </div>
        `
        })
        .join('')
};

galleryEl.addEventListener('click', onItemContainerClick); 

function onItemContainerClick(evt) {

    if (!evt.target.classList.contains('gallery__image')) {
        return
    }


};


