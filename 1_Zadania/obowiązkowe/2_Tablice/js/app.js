/* Zadanie 0 */
function distFromAvarage(tab) {
    const sum = tab.reduce((a, b) => a + b, 0);
    const average = sum / tab.length;
    return tab.map(e => e - average);
}


/* Zadanie 1 */

function zadanie1() {
    const favoriteFruits = ["banana", "apple", "orange"];

    console.log(favoriteFruits[0]);  // First fruit
    console.log(favoriteFruits[favoriteFruits.length - 1]); // Last fruit

    for (let i = 0; i < favoriteFruits.length; i++) {
        console.log(favoriteFruits[i]);
    }
}

/* Zadanie 3 */
function printTable(array) {
    for (let i = 0; i < array.length; i++) {
        console.log(array[i]);
    }
}

/* Zadanie 4 */
function multiply(tab) {
    let result = tab[0];
    for (let i = 1; i < tab.length; i++) {
        result *= tab[i];
    }
    return result;
}

/* Zadanie 5 */
function getEvenAvarage(tab) {
    const averageNumbers = tab.filter(n => n % 2 === 0);

    const sumOfEvenNumbers = averageNumbers.reduce((a, b) => a + b, 0);

    if (averageNumbers.length === 0) {
        return null;
    } else {
        return sumOfEvenNumbers / averageNumbers.length;
    }
}

/* Zadanie 6 */
function sortArray(tab) {
    return tab.sort((a, b) => a - b);
}

/* Zadanie 7 */
function addArrays(tab1, tab2) {
    const result = [];
    const loopTo = (tab1.length > tab2.length) ? tab1.length : tab2.length;

    for (let i = 0; i < loopTo; i++) {
        if (tab1[i] && tab2[i]) {
            result[i] = tab1[i] + tab2[i];
        } else {
            result[i] = tab1[i] || tab2[i];
        }
    }

    return result;
}
