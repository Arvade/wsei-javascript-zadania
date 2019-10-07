document.addEventListener("DOMContentLoaded", function () {
    /*
    Poniżej napisz kod rozwiązujący zadania. Odpowiedzi oddzielaj komentarzami.
     */

    const element = document.getElementsByClassName("title")[0];
    getDataAnimation(element);
});

function getDataAnimation(el) {
    const attr = el.getAttribute('data-animation');
    return attr;
}
