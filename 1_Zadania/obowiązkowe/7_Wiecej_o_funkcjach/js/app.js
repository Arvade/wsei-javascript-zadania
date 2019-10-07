/**
 * Zagniezdzanie funkcji.
 * Przesledz krok po kroku kazda linijke kodu. Kazda!
 * Napisz komentarze dla kazdej z linijek kodu
 */


// Utworzenie funkcji 'jeden'
function jeden() {

    // Utworzenie zmiennej lokalnie
    var zmienna1 = 1;

    // Zadeklarowanie funkcji
    function dwa() {

        // Wypisanie zmiennej z zakresu funkcji 'jeden' - mamy do niej dostęp
        console.log(zmienna1);

        // utworzenie zmiennej w zakresie funkcji 'dwa'
        var zmienna2 = 3;
    }

    // Wywołowanie funkcji po jej utworzeniu
    dwa();

    // Tutaj nie ma dostępu do zmiennej ponieważ została ona utworzona w 'zakresie' funkcji 'dwa'
    console.log(zmienna2)
}

// Wywowałnie funkcji 'jeden'   utworzonej powyżej
jeden();
