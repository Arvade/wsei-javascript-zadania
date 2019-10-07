// Przykład poniżej będzie działać i raczej nie powinien wzbudzać żadnych podejrzeń
/*
    function czesc() {
        console.log('Cześć');
    }
    czesc();
*/

// Ten przykład również będzie działać, ponieważ funkcja zostanie 'przesunięta' przed uruchomieniem na samą górę
// W Javascript nazywa się to "Hoisting"
/*
    czesc();

    function czesc() {
        console.log('Cześć');
    }
*/


// Tutaj sytuacja może się wydawać nieco bardziej skomplikowana, jednak tak naprawde tak nie jest.
// Tak naprawdę, to tworzymy tutaj najzwyczajsze zmienne i też tak będą się zachowywać - jak zmienne

/*
    var witaj = function () {
        console.log("Witaj");
    };
    witaj();

    Rezultat: Wypisanie "Witaj"
*/


// Deklaracja zmiennej 'witaj' będzie przeniesiona na 'górę' przed uruchomieniem kodu, jednak nie będzie ona miała wartości
// (undefined). Właśnie z tego powodu wypiwany zostaje taki, a nie inny komunikat.
// (Jest to równoznaczne z wywołaniem "undefined()")

/*
    witaj();
    var witaj = function () {
        console.log("Witaj");
    };

    Rezultat: 'witaj is not a function'
*/


// Tutaj sytuacja wygląda podobnie co w przykładzie powyżej, jednak Javascript w przypadku użycia 'let'
// upewni się, czy nie została użyta zmienna przed jej deklaracją

/*
    witaj();
    let witaj = function () {
        console.log("Witaj");
    };

    Rezultat: Cannot access 'witaj' before initialization
*/


// Prosty przypadek przypisania funkcji do zmiennej, a następnie wywołanie jej.

/*
    let witaj = function () {
        console.log("Witaj");
    };
    witaj();

    Rezultat: Wypisanie "Witaj"
*/
