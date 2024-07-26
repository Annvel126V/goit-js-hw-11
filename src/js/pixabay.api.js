
    const URL = "https://pixabay.com/api"; 
const API_KEY = "45110935-91aa782eb5f23a60393d7a38c";
    
export async function searchImagesByQuery(query) {
  const url = `${BASE_URL}?key=${API_KEY}&q=${encodeURIComponent(query)}&image_type=photo&orientation=horizontal&safesearch=true`;
  const response = await fetch(url);
    if (!response.ok) {
      throw new Error("Error");
    }
        return response.json();
    }
      
  


