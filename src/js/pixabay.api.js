

    export  function searchImages(query) { 
    const URL = "https://pixabay.com/api"; 
    const API_KEY = "45110935-91aa782eb5f23a60393d7a38c";
    
      
    
      return fetch(`${URL}?key=${API_KEY}&q=${query}&image_type=photo&orientation=horizontal&safesearch=true`).then((response) => {
        if (!response.ok) {
          throw new Error(response.status);
        }
        return response.json();
      }).catch((error) => {
        iziToast.error({
          position: "topRight",
          message: `${error}`,
           
        });
      });
      
  }


