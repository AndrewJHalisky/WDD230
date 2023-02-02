const list = document.querySelector("ul");
const input = document.querySelector("input");
const button = document.querySelector("button");

button.addEventListener("click", () => {
    if (input.value !== ""){
        let favoriteScripture = input.value;

        const listItem = document.createElement("li");
        const deleteBtn = document.createElement("button");

        listItem.textContent = favoriteScripture;
        deleteBtn.textContent = "X";
        list.appendChild(listItem);
        deleteBtn.addEventListener("click", () => {
            list.removeChild(listItem);});
        listItem.appendChild(deleteBtn);
    }
    input.value = "",
    input.focus();
});