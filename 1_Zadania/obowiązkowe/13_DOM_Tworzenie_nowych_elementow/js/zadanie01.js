document.querySelector(".button").addEventListener("click", () => {
    const menu = document.getElementsByClassName("menu")[0];
    menu.innerHTML += `<li>Element ${menu.children.length + 1} - w chwili dodania było ${menu.children.length} elementów</li>`
});
