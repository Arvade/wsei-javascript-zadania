/* Zadanie 2.1 */
const menuElement = document.querySelector("#menu");
const getDataInfo = (element) => [...element.children].map(el => el.getAttribute("data-info"));
getDataInfo(menuElement);

/* Zadanie 2.2 */
const mainContainer = document.querySelector("#main-contener");
const getElementClass = (element) => [...element.classList];
getElementClass(mainContainer);

/* Zadanie 2.3 */
const pinkColorElement = document.querySelector(".pink-color");
const getElementText = (element) => element.textContent;
getElementText(pinkColorElement);

/* Zadanie 2.4 */
const imagesElements = document.querySelectorAll(".images");
const getElementAlt = (elements) => [...elements].map(el => el.getAttribute("alt"));
getElementAlt(imagesElements);

/* Zadanie 2.5 */
const myLinksElements = document.querySelectorAll(".my-link");
const getElementHref = (elements) => [...elements].map(el => el.getAttribute("href"));
getElementHref(myLinksElements);
