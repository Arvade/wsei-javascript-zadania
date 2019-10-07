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

    /* Zadanie 2.1 */
    const allListItemsInNav = document.querySelectorAll('nav li');
    console.log('allListItemsInNav : ', allListItemsInNav.length);

    /* Zadanie 2.2 */
    const paragrafsInsideDiv = document.querySelectorAll('div p');
    console.log('paragrafsInsideDiv : ', paragrafsInsideDiv.length);

    /* Zadanie 2.3 */
    const divsInsideArticle = document.querySelectorAll('article div');
    console.log('divsInsideArticle : ', divsInsideArticle.length);

    /* Zadanie 3.1 */
    const articlesWithClassFirst = document.querySelectorAll('article[class=first]');
    console.log('articlesWithClassFirst : ', articlesWithClassFirst);

    /* Zadanie 3.2 */
    for (let i = 0; i < articlesWithClassFirst.length; i++) {
        const h1Elements = articlesWithClassFirst[i].getElementsByTagName("h1");
        console.log(`amount of [h1Elements] for [articleWithClassFirst #${i}] : ${h1Elements.length}`)
    }
});

function getDataAnimation(el) {
    const attr = el.getAttribute('data-animation');
    return attr;
}
