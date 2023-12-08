const api = "https://api.giphy.com/v1/gifs/translate?api_key=11111111111111&s=cats";
const gif = document.getElementById("gif");
const gifControls = document.querySelector(".gif-controls");
let currUrl = null;

// Returns GIF Promise
const getGifData = async () => {
    const response = await fetch(api, {mode: 'cors'});
    const data = await response.json();

    return data;
}

// Show GIF on first page load
getGifData()
    .then((d) => {
        gif.src = d.data.images.original.url;
        console.log(d.data)
    })
    .catch((err) => {
        console.log("Error setting Gif source: ", err);
    }
)

// Change GIF source on button click
gifControls.addEventListener("click", (e) => {
    if (e.target.classList.contains("next-btn")){
        console.log("next gif loading")
        getGifData()
            .then((d) => {
                gif.src = d.data.images.original.url;
                console.log(d.data)
            })
            .catch((err) => {
                console.log("Error: ", err);
            })
    } else if (e.target.classList.contains("back-btn")){
        console.log("previous gif loading");
    }
})