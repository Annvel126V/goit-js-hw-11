// Описаний у документації
import SimpleLightbox from "simplelightbox";
// Додатковий імпорт стилів
import "simplelightbox/dist/simple-lightbox.min.css";


export function renderImages(images) {
    const gallery = document.querySelector(".gallery-list");
    gallery.innerHTML = images.map(image => createImageCard(image)).join("");
    new SimpleLightbox(".gallery-list a", {}).refresh();
}

export function clearGallery() {
    document.querySelector(".gallery-list").innerHTML = "";
}

function createImageCard(image) {
    return `
    <li>
    <a href="${image.largeImageURL}">
    <img src="{image.webformatURL}" alt="${image.tags}" />
    <a>
    <div>
    <p>Likes: ${image.likes}</p>
                <p>Views: ${image.views}</p>
                <p>Comments: ${image.comments}</p>
                <p>Downloads: ${image.downloads}</p>
            </div>
        </li>
    `;
}