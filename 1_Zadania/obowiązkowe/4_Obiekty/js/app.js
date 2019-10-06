/* Zadanie0a */
function zadanie0a() {
    const city = {
        capital: "Kraków",
        population: 50000,
        president: "Jan Kowalski",
        primeMinisters: ['primeMinister1', 'primeMinister2', 'primeMinister3']
    };

    for (let key in city) {
        console.log(city[key]);
    }
}

/* Zadanie0b */
function zadanie0b() {
    const timeMachine = {
        shape: "square",
        model: "exampleModel",
        run: function (date, place) {
            const logs = [
                "[SYSTEM] TIME TRAVEL INITIATED",
                `[SYSTEM] STARING TIME TRAVEL TO ${place}`,
                `[SYSTEM] TARGET TIME IS ${date.toLocaleString()}`,
                `[SYSTEM] BZIU BZIU BZIU BZIU  BZIU BZIU BZIUUUUUUUUUUUUUUUUUUUUUUUUU`,
                `[SYSTEM] Time travel ended successfully`,
            ];
            for (let i = 0; i < logs.length; i++) {
                setTimeout(() => console.log(logs[i]), 1000 * i);
            }
        }
    };

    timeMachine.run(new Date(), "Kraków");
}

/* Zadanie 1 */
function zadanie1() {
    const book = {
        title: "Game of thrones",
        author: "George R. R. Martin",
        numberOfPages: 999
    };

    for (let key in book) {
        console.log(book[key]);
    }
}

/* Zadanie 2 */
function zadanie2() {
    const person = {
        name: "Sebastian",
        age: 21,
        sayHello: function () {
            console.log("hello");
        }
    };

    console.log(person.name);
    console.log(person.age);
    person.sayHello();
}
