let character = "księżniczka";
let timeOfDay = "dzień";
const lover = 'Shrek';

{
    let timeOfDay = "noc";
    let character = "ogrzyca";
    console.log("Teraz jest: " + timeOfDay + " i Fiona to: " + character + ", a jej ukochany to: " + lover);
    // TODO: Napisz, co kryje się pod zmiennymi i wyjaśnij dlaczego.
    /*
        timeOfDay - noc
        character - ogrzyca
        lover - Shrek

        Użyte tutaj rodzaje zmiennych, 'const' oraz 'let' mają zasięg blokowy, tak więc
        zmienne jako pierwsze będą odczytane z bloku w którym jesteśmy. Oczywiście aktualny blok
        ma dostęp również do zmiennych z zewnątrz (outer scope).

     */
}

console.log("Teraz jest: " + timeOfDay + " i Fiona to: " + character + ", a jej ukochany to: " + lover);
// TODO: Napisz, co kryje się pod zmiennymi i wyjaśnij dlaczego.

/*
    timeOfDay - dzień
    character - księżniczka
    lover - Shrek

    Zmiany które wydawało by się, że zaszły w powyższym bloku nie mają tak naprawdę wpływu na zmienne na 'zewnątrz'.
    W ramach powyższego bloku (scope'a) zostały utworzone 'nowe' zmienne i są dostępne tylko w ramach niego.

*/
