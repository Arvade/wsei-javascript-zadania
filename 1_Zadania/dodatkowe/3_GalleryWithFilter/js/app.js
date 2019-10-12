document.addEventListener("DOMContentLoaded", () => {
    const images = [...document.querySelectorAll("#gallery img")];
    const showButton = document.getElementById("showButton");
    const hideButton = document.getElementById("hideButton");
    const tagInput = document.getElementById("tagInput");

    showButton.addEventListener("click", () => {
        images.forEach(img => {
            const indexOf = img.getAttribute("data-tag").split(',').indexOf(tagInput.value);

            if (indexOf > -1) {
                img.classList.remove("invisible");
            }
        });
    });

    hideButton.addEventListener("click", () => {
        images.forEach(img => {
            const indexOf = img.getAttribute("data-tag").split(",").indexOf(tagInput.value);

            if (indexOf > -1) {
                img.classList.add("invisible");
            }
        })
    });
});
