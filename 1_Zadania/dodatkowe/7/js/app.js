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

/* Zadanie 2 - dodatkowe */
function factors(n) {
    if (n <= 0) {
        return [];
    }
    const result = [];
    for (let i = n; i >= 1; i--) {
        if (n % i === 0) {
            result.push(i)
        }
    }
    return result;
}

/* Zadanie 3 - dodatkowe */
function getMissingElement(tab) {
    for (let i = 0; i < tab.length - 1; i++) {
        const current = tab[i];
        if (current + 1 !== tab[i + 1]) {
            return current + 1;
        }
    }
    return null;
}

/* Zadanie 4 - dodatkowe */
function getLastNumbers(n, tab) {
    if (!n || isNaN(+n)) {
        return []
    }
    return tab.slice().splice(tab.length - n, n);
}
