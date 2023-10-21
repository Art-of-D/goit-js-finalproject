import { galleryItems } from './gallery-items.js';
// Change code below this line
const imgsMarkup = [...galleryItems].map(({preview, original, description}) => 
    `
    <li class="gallery__item">
        <a class="gallery__link" href=${original}>
            <img
            class="gallery__image"
            src=${preview}
            data-source=${original}
            alt=${description}
            />
        </a>
    </li>
    `)
    .join(""); 

const gallery = document.querySelector('.gallery');
gallery.insertAdjacentHTML("afterbegin", imgsMarkup);

gallery.addEventListener("click", eventHandler)

function eventHandler(evt) {
    evt.preventDefault();

    if (!(evt.target.classList.contains("gallery__image"))) {
        return;
    }
    callModal(evt.target.dataset.source, evt.target.alt);
}

function callModal(original, description){
    const instance = basicLightbox.create(
        `<img
        src=${original}
        alt=${description}
        width="800" height="600"
        />
    `);

    instance.show();
    closeZoomedImg(instance); 
}


function closeZoomedImg(instance){
   instance.element().addEventListener("click", () => {instance.close()});
   
   document.addEventListener("keydown", (event) => {
        if (event.key === "Escape"){
            instance.close()};
        }
    )
}