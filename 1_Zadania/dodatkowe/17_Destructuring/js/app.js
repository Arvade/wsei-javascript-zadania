/* Zadanie 0a */
const tab = ["snow", "rain", "sun"];
const [first, , last] = tab;

console.log("first : ", first);
console.log("last : ", last);

/* Zadanie 0b */
const slider = {
    type: "infinite",
    numberOfItems: 10,
    center: true,
    autoStart: true
};

const {type, autoStart} = slider;


/* Zadanie 1 */
const names = ['Obi-wan', 'Anakin', 'Frodo'];
const [name1, name2, name3] = names;

/* Zadanie 2 */
const generateRandomNumbers = () => {
    const result = [];
    for (let i = 0; i < 6; i++) {
        result.push(Math.floor(Math.random() * 6))
    }
    return result;
};
const [firstRandom, , thirdRandom] = generateRandomNumbers();
console.log("firstRandom : ", firstRandom);
console.log("thirdRandom : ", thirdRandom);

/* Zadanie 4 */
const getAnimal = () => {
    return {
        name: "Mruczek",
        age: 10,
        getVoice: () => "miau miau"
    }
};

const [{name: catName, getVoice: catVoice}] = [getAnimal()];
