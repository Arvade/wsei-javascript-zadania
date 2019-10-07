
/**
 * Zagniezdzanie funkcji.
 * Przesledz krok po kroku kazda linijke kodu. Kazda!
 * Napisz komentarze dla kazdej z linijek kodu
 */

// Utworzenie funkcji
function sortArray() {

    // Utworzenie zmiennej w zakresie funkcji 'sortArray'
    var points = [41, 3, 6, 1, 114, 54, 64];

    // Wywołanie metody sort na zmiennej points utworzonej powyżej
    points.sort(function (a, b) {
        // Odejmowanie używając zmiennych przekazanych do funkcji
        return a - b;
    });

    // Zwrócenie zmiennej
    return points;
}

// Wywołanie funkcji utworzonej powyżej
sortArray();
