/* Zadanie 0.1 */
const first = document.querySelector(".first").firstElementChild.children[2];

/* Zadanie 0.2 */
const second = document.querySelector("#second").parentElement.children[3];

/* Zadanie 0.3 */
const grandpa = document.querySelector("[data-ex=third]").parentElement.parentElement;
const lastChild = grandpa.children[grandpa.children.length - 1];
const firstChild = lastChild.firstElementChild;
const middleChild = firstChild.children[Math.floor(firstChild.children.length / 2)];

/* Zadanie 0.4 */
const forth = document.querySelector("div.forth").parentElement.querySelector("article").querySelectorAll("p")[1];
