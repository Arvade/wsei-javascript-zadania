/* Zadanie 0 */
let namesA = ["Zosia", "Marcin", "Kamil"];
let namesB = ["Ala", "Puszek", "Zosia", "Marcin", "Kamil", "Jan", "Karol"];

const getAverage = (...nums) => {
    const sum = nums.reduce((a, b) => a + b, 0);
    return sum / nums.length;
};


/* Zadanie  1 */
const myName = "Sebastian";
const nameAsLetters = [...myName];
console.log(nameAsLetters);

/* Zadanie 2 */
const fruits = ['orange', 'apple'];
const vegetables = ['ginger', 'Garlic'];
const mix = [...fruits, ...vegetables];
