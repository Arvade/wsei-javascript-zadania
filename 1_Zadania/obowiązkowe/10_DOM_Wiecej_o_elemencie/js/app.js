document.addEventListener("DOMContentLoaded", function () {
    /*
    Poniżej napisz kod rozwiązujący zadania
     */

    const listItems = document.querySelectorAll(".ex5 li");
    let greenBackgroundStep = 1;

    for (let i = 0; i < listItems.length; i++) {
        if (greenBackgroundStep <= listItems.length - 1) {
            listItems[greenBackgroundStep].style.backgroundColor = "green";
            greenBackgroundStep += 2;
        }
    }

    listItems[4].classList.add("big");
});
