import { galleryItems } from './gallery-items.js';
// Change code below this line

//Create markup of imgs tabel
const imgsMarkup = [...galleryItems].map(({preview, original, description}) => 
    `
    <li class="gallery__item">
        <a class="gallery__link" href=${original}>
            <img
            class="gallery__image"
            src=${preview}
            alt=${description}
            />
        </a>
    </li>
    `)
    .join(""); 

const gallery = document.querySelector('.gallery');
gallery.insertAdjacentHTML("afterbegin", imgsMarkup);

//Initialize lightbox
let zoomedImg = new SimpleLightbox('.gallery__link', {
    captionSelector: '.gallery__image',
    captionsData:'alt',
    captionDelay: 250,
});

//Zoom images by click
gallery.addEventListener("click", eventHandler)

function eventHandler(evt) {
    evt.preventDefault();

    if (!(evt.target.classList.contains("gallery__image"))) {
        return;
    }
    zoomedImg.open();
}

