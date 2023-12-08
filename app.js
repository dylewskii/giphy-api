const gif = document.getElementById("gif");
const generateBtn = document.querySelector(".gen-btn");
const searchBox = document.getElementById("search");
let query = null;

// Returns GIF Promise
const getGifData = async (query) => {
    const api = `https://api.giphy.com/v1/gifs/translate?api_key=cFglNv8p0mK2Nj1UkfGtYkIOOo5bArvt&s=${query}`;
    const response = await fetch(api, {mode: 'cors'});
    const data = await response.json();

    return data;
}

// Show GIF on first page load
getGifData("cats")
    .then((d) => {
        gif.src = d.data.images.original.url;
    })
    .catch((err) => {
        console.log("Error setting Gif source: ", err);
    }
)

// Change GIF source on button click
nextBtn.addEventListener("click", (e) => {
    if (searchBox.value){
        query = searchBox.value;
    } else {
        query = "cats";
    }

    getGifData(query)
        .then((d) => {
            gif.src = d.data.images.original.url;
            console.log(d.data)
        })
        .catch((err) => {
            console.log("Error: ", err);
        })
})