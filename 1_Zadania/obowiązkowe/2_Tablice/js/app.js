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
