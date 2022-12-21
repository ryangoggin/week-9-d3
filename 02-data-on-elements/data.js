// Your code here
window.addEventListener("DOMContentLoaded", () => {
    //add item to list
    const addButton = document.querySelector("#add");
    addButton.type = "button"; //prevents refereshing after each press
    const shoppingList = document.querySelector("#shopping-list");

    const add = () => {
        const input = document.querySelector("#name");
        const value = input.value;

        const select = document.querySelector("#type");
        const type = select.value;

        const newLi = document.createElement("li");
        newLi.innerText = value;
        newLi.setAttribute("data-type", type);

        shoppingList.append(newLi);
        input.value = "";
    }

    addButton.addEventListener("click", add);
});
