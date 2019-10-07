document.addEventListener("DOMContentLoaded", function () {
    /*
    Poniżej napisz kod rozwiązujący zadania. Odpowiedzi oddzielaj komentarzami.
     */

    /* Zadanie 0 */
    const element = document.getElementsByClassName("title")[0];
    getDataAnimation(element);


    /* Zadanie 1.1 */
    const elHome1 = document.getElementById('home');
    const elHome2 = document.querySelector('#home');

    /* Zadanie 1.2 */
    const firstLiElement = document.querySelector('li:first-child[data-direction]');

    /* Zadanie 1.3 */
    const firstElementWithClass = document.querySelector("div.block:first-child");
});

function getDataAnimation(el) {
    const attr = el.getAttribute('data-animation');
    return attr;
}
