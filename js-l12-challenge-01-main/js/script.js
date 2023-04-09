const button = document.querySelector("button");
const authorSpan = document.querySelector(".author");
const imgDiv = document.querySelector(".image-container");
const img = document.querySelector(".img");

const getImage = async function () {
    const res = await fetch ("https://picsum.photos/v2/list?limit=10");
    const images = await res.json ();
    selectRandomImage (images);
    };
    
const selectRandomImage = function (images) {
        const randomIndex = Math.floor(Math.random() * images.length);
        const randomImage = randomIndex (author);
        //console.log (randomIndex);
        //console.log (randomImage);
        displayImage(randomImage);
};

const displayImage = function (randomImage) {
    const author = randomImage.author;
    const imageAddress = randomImage.download_url;
    authorSpan.innterText = author;
    img.src = imageAddress; 
    imgDiv.classList.remove("hide");
};

button.addEventListener("click", function () {
getImage();
});