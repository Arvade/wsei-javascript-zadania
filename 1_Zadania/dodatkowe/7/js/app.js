/* Zadanie 1 */
function getNumber(n, tab) {
    return tab.includes(n);
}

/* Zadanie 2 */
function createIdentityMatrix(rows, columns) {
    const result = [];
    for (let row = 0; row < rows; row++) {
        result[row] = [];
        for (let col = 0; col < columns; col++) {
            const value = col === row;
            result[row][col] = +value;
        }
    }
    return result;
}

/* Zadanie 3 */
function sortPlanets(planets) {
    const result = planets.slice();
    result.sort((p1, p2) => p2.numberOfMoons - p1.numberOfMoons);
    return result;
}

/* Zadanie 1 - dodatkowe */
function addTheSameNumbers(n, tab) {
    const filtered = tab.filter(el => el === n);
    if (filtered.length === 0) {
        return null;
    } else {
        return filtered.reduce((a, b) => a + b, 0);
    }
}
