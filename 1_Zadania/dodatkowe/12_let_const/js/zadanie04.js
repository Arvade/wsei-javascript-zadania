
//TODO: spróbuj zmienić zmienną name nadpisująć ją niżej innym imieniem.
const name = "Agata";

/*
    name = "changed";
    TypeError: Assignment to constant variable

    Ponieważ:   'const' to stała
 */

//TODO:
//a) spróbuj zmienić zmienną simpleArray nadpisująć ją niżej inną tablicą.
//b) spróbuj dodać nową wartość do tablicy
//c) spróbuj zmienić którąkolwiek wartość z tablicy simpleArray
const simpleArray = [1, 2, 3, 4];

/*
    a) Nie można - 'const' to stała
    b) Możemy modyfikować - ponieważ nie zmieniamy wartości 'simpleArray'
    c) Możemy zmienić - ponieważ nie zmieniamy wartości 'simpleArray'
 */


//TODO:
//a) spróbuj zmienić zmienną dog nadpisująć ją niżej innym obiektem.
//b) spróbuj zmienić właśność skill obiektu dog
//c) spróbuj dodać nową własność do obiektu dog np. age
const dog = {
    name: "Puszek",
    skill: "killing"
};

/*
    a) Możemy
    b) Możemy
    c) Możemy

    Ponieważ: 'const' chroni przed nadpisaniem referencji do elementu (np. dog = {})

 */
