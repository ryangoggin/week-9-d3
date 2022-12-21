export const createMainContent = () => {
    // Create h1
    const h1 = document.createElement("h1");
    h1.innerText = "Catstagram";
    // h1.style.display = "flex";
    // h1.style.order = "1";

    // Create img
    const img = document.createElement("img");
    img.style.margin = "20px";
    img.style.maxWidth = "750px";
    // img.style.display = "flex";
    // img.style.order = "3";

    //make a new pic button
    const newPicBtn = document.createElement("button");
    newPicBtn.id = "new-pic";
    newPicBtn.innerText = "New Picture";
    // newPicBtn.style.display = "flex";
    // newPicBtn.style.order = "2";

    const container = document.querySelector(".container");
    container.appendChild(h1);
    container.appendChild(newPicBtn);
    container.appendChild(img);

    fetchImage();
};

export const fetchImage = async () => {
    // Fetch image from API and set img url
    try {
        const kittenResponse = await fetch("https://api.thecatapi.com/v1/images/search?size=small");
        // Converts to JSON
        const kittenData = await kittenResponse.json();
        // console.log(kittenData);
        const kittenImg = document.querySelector("img");
        kittenImg.src = kittenData[0].url;
    } catch (e) {
        console.log("Failed to fetch image", e);
    }
};
