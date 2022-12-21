// Your code here
window.addEventListener("DOMContentLoaded", () => {
    alert('DOM has been loaded');

    //red input
    const redInput = document.getElementById("red-input");
    const changeRed = event => {
        if (event.target.value === "red") {
            redInput.style.backgroundColor = "red";
        } else {
            redInput.style.backgroundColor = "transparent";
        }
    }

    redInput.addEventListener("input", changeRed);

    //add list element
    const addItem = document.getElementById("add-item");
    const ul = document.querySelector("ul");

    const addLi = event => {
        const input = document.getElementById("list-add");
        const value = input.value;
        const newLi = document.createElement("li");
        newLi.innerText = value;
        ul.append(newLi);
        input.value = ''; //reset input to blank after submitting
    }

    addItem.addEventListener("click", addLi);

    //color select
    const colorSelect = document.getElementById("color-select");
    const changeColor = event => {
        const section3 = document.getElementById("section-3");
        section3.style.backgroundColor = event.target.value;
    };

    colorSelect.addEventListener("input", changeColor);

    //remove listeners
    const removeListeners = document.getElementById("remove-listeners");
    const remove = () => {
        redInput.removeEventListener("input", changeRed);
        addItem.removeEventListener("click", addLi);
        colorSelect.removeEventListener("input", changeColor);
    };

    removeListeners.addEventListener("click", remove);
});
