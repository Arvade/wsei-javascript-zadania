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

