document.addEventListener("DOMContentLoaded", () => {
    let current = 0;

    const prevButton = document.getElementById("prevPicture");
    const nextButton = document.getElementById("nextPicture");
    const images = [...document.querySelectorAll("div.slider ul li")];

    images[current].classList.add("visible");

    prevButton.onclick = () => {
        images[current].classList.remove("visible");
        current -= 1;
        if (current < 0) {
            current = images.length - 1;
        }
        images[current].classList.add("visible");
    };

    nextButton.onclick = () => {
        images[current].classList.remove("visible");
        current += 1;
        if (current >= images.length) {
            current = 0;
        }
        images[current].classList.add("visible");
    }
});
