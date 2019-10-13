//I. Sprawdź najpierw zasięg let
let numbers = [2, 3, 4];
{
    //A1 - wypisuję zmienną numbers przed deklaracją
    //Wynik w konsoli to TODO: Cannot access 'numbers' before initialization
    //Dlaczego taki wynik? TODO: Sama definicja jest 'windowana' do góry (hoisting), jednak 'let' wymaga inicjalizacji zmiennej
    console.log(numbers);

    //A2 - wypisuję zmienną numbers po deklaracji
    //Wynik w konsoli to TODO: [2,3,4]
    //Dlaczego taki wynik? TODO: Stworzyliśmy, a następnie odczytaliśmy. Prosta sytuacja.
    console.log(numbers);
}

//A3 - wypisuję zmienną numbers za blokiem
//Wynik w konsoli to TODO: numbers is not defined
//Dlaczego taki wynik? TODO: 'let' ma zasięg blokowy - poza blokiem nie istnieje
console.log(numbers);



//II. Sprawdź teraz  zasięg const
const PI = 3.14;
{
    //A1 - wypisuję zmienną PI przed deklaracją
    //Wynik w konsoli to TODO: Cannot access 'numbers' before initialization
    //Dlaczego taki wynik? TODO: analogiczna sytuacja jak przy 'let
    console.log(PI);

    //A2 - wypisuję zmienną PI po deklaracji
    //Wynik w konsoli to TODO: 3.14
    //Dlaczego taki wynik? TODO: Stworzyliśmy, a natępnie odczytaliśmy. Prosta sytuacja.
    console.log(PI);
}

//A3 - wypisuję zmienną PI za blokiem
//Wynik w konsoli to TODO: PI is not defined
//Dlaczego taki wynik? TODO: Analogiczna sytuacja jak przy 'let'. const ma również zasięg (scope) blokowy, przez co
//                             przestaje istnieć poza blokiem
console.log(PI);
