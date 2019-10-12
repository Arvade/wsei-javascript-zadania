document.addEventListener("DOMContentLoaded", () => {
    const body = document.querySelector("body");
    const images = [...document.querySelectorAll("div.gallery img")];

    images.forEach(img => {
        img.addEventListener("click", function () {
            const imageContainer = document.createElement("div");

            const imageElement = document.createElement("img");
            imageElement.src = this.src;

            const closeButton = document.createElement("button");
            closeButton.innerText = "Close image";
            closeButton.classList.add("close");
            closeButton.addEventListener("click", function () {
                body.removeChild(imageContainer);
            });

            imageContainer.classList.add("fullScreen");

            imageContainer.appendChild(imageElement);
            imageContainer.appendChild(closeButton);
            body.appendChild(imageContainer);
        });
    });
});
