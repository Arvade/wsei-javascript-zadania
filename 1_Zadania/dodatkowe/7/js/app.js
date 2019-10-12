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
