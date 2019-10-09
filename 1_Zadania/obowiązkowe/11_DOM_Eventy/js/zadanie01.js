/*
var menu = document.querySelector("#menu");
var paragraf = document.querySelector("p");

menu.classList.add("menu");
*/

/* Zadanie 1.1 */
/*
    Skrypt dodaje klase do elementu 'menu'
    Gdy skrypt jest umieszczony:
        1) Na dole strony
            Strona najpierw załadowuje się, a potem ściąga podane skrypty
            Efektem czego strona szybciej 'pojawia' się i użytkownik (bardziej ten efekt widać w przypadku
            'cięższych' stron) nie widzi białego ekranu.
            Ponieważ strona najpierw się załadowuje (DOM jest 'dostępny'),
            to skrypt dodaje klasę do szukanego elementu

        2) W head
            Do załadowania strony potrzebny jest zalinkowany skrypt.
            Po jego pobraniu zostaje on wywołany, jednak DOM jeszcze nie jest 'dostępny'
            co skutkuje błędem: "Cannot read property 'classList' of null"
 */


/* Zadanie 1.2 */

/*
    Przeniesienie kodu jak poniżej poprawiło sytuację - czekamu na załadowanie DOM.


    document.addEventListener("DOMContentLoaded", () => {
        var menu = document.querySelector("#menu");
        var paragraf = document.querySelector("p");

        menu.classList.add("menu");
    });
*/

/* Zadanie 1.3 */
/*
    Nie ma żadnej różnicy - czekamy na event załadowania DOM'u, jednak umieszczenie
    załadowania skryptu na dole strony już powoduje, że zostanie pobrany po jego załadowaniu.
 */
