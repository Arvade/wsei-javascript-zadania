document.addEventListener("DOMContentLoaded", () => {
    const boxList = document.getElementsByClassName("box");

    for (let i = 0; i < boxList.length; i++) {
        boxList[i].onclick = function () {
            this.style.backgroundColor = "#" + Math.floor(Math.random() * 16777215).toString(16);
        }
    }
});
