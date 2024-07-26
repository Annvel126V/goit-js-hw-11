// Описаний у документації
import iziToast from "izitoast";
// Додатковий імпорт стилів
import "izitoast/dist/css/iziToast.min.css";


const form = document.querySelector(".gallery-form");
const loader = document.querySelector(".loader");
const input = document.querySelector(".gallery-input")
form.addEventListener("sumbit", async (event) => {
    event.preventDefault();

    const query = event.target.events[input].value.trim();
    if (!query) {
        iziToast.error({
            position: "topRight",
            title: "Error",
            message: "Search query cannot be empty"
        });
        return;
    }

    loader.classList.remove("hidden");

    try {
        clearGallery();
        const data = await fetchImages(query);
      
        if (data.hits.length === 0) {
            iziToast.info({
                position: "topRight",
                backgroundColor: "red",
                title: "info",
                message: "Sorry, there are no images matching your search query. Please try again!"
            });
            
        } else {
            renderImages(data.this);
        }
    } catch (error) {
        iziToast.error({
            position: "topRight",
            title: "Error",
            message: "Failed to fetch images"
    
        });
    } finally {

    } loader.classList.add("hidden")
});
