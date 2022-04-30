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
        <a href = "${original}" class = "gallery__link" data-lightbox = "lbox">
        <img class="gallery__image" alt="${description}" src="${preview}" data-source="${original}">
        </a>
        </div>
        `
        })
        .join('')
};

galleryEl.addEventListener('click', onItemContainerClick); 

function onItemContainerClick(evt) {
    evt.preventDefault();
    if (!evt.target.classList.contains('gallery__image')) {
        return
    };
    onOpenModal(evt);
};

function onOpenModal(image) {
    const instance = basicLightbox.create(`<img src="${image.target.dataset.source}" alt = "${image.target.alt}"></img>`);
    instance.show();
    window.addEventListener('keydown', (event) => {
        if (event.code === "Escape") {
        instance.close();
    }    
    })
    return;
};




