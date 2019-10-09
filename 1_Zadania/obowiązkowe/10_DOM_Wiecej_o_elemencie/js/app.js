document.addEventListener("DOMContentLoaded", function () {
    /*
    Poniżej napisz kod rozwiązujący zadania
     */

    /* Zadanie 0 */
    const listItems = document.querySelectorAll(".ex5 li");
    let greenBackgroundStep = 1;

    for (let i = 0; i < listItems.length; i++) {
        if (greenBackgroundStep <= listItems.length - 1) {
            listItems[greenBackgroundStep].style.backgroundColor = "green";
            greenBackgroundStep += 2;
        }
    }

    listItems[4].classList.add("big");

    /* Zadanie 1 */
    const chromeImg = document.querySelector(".chrome");
    const edgeImg = document.querySelector(".edge");
    const firefoxImg = document.querySelector(".firefox");

    const chromeLink = document.querySelector(".chrome + a");
    const edgeLink = document.querySelector(".edge + a");
    const firefoxLink = document.querySelector(".firefox + a");

    chromeImg.style.backgroundImage = "url('assets/img/chrome.png')";
    chromeImg.style.width = "100px";

    edgeImg.style.backgroundImage = "url('assets/img/edge.png')";
    firefoxImg.style.backgroundImage = "url('assets/img/firefox.png')";

    chromeLink.innerHTML = "Chrome";
    firefoxLink.innerHTML = "Firefox";

    chromeLink.setAttribute("href", "https://www.google.com/intl/pl_pl/chrome/");
    edgeLink.setAttribute("href", "https://www.microsoft.com/pl-pl/windows/microsoft-edge");
    firefoxLink.setAttribute("href", "https://www.mozilla.org/pl/firefox/");

    /* Zadanie 2 */
    const nameEntry = document.querySelector(".ex2 #name");
    const colorEntry = document.querySelector('.ex2 #fav_color');
    const mealEntry = document.querySelector(".ex2 #fav_meal");

    nameEntry.innerHTML = "Sebastian Machczyński";
    colorEntry.innerHTML = "Niebieski";
    mealEntry.innerHTML = "Pizza";

    /* Zadanie 3 */
    const menuList = document.querySelector(".ex3 ul");
    menuList.classList.add("menu");
    document.querySelectorAll(".ex3 li").forEach(el => {
        el.classList.add("menuElement");
        if (el.classList.contains("error")) {
            el.classList.remove("error");
        }
    });


});
