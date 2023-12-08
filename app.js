const api = "https://api.giphy.com/v1/gifs/translate?api_key=1111111111&s=cats";
const gif = document.querySelector(".gif");

const getGifData = async () => {
    const response = await fetch(api, {mode: 'cors'});
    const data = await response.json();

    return data;
}


getGifData()
    .then((data) => {
        console.log(data.data.images.original.url);
    })
    .catch((err) => {
        console.log("Error: ", err);
    })

// const gifData = getGifData();
// fetch(api, {mode: 'cors'})
//     .then(function(response) {
//         return response.json();
//     })
//     .then(function(response) {
//         gif.src = response.data.images.original.url;
//     });