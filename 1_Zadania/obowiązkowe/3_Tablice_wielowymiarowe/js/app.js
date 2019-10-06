/* Zadanie 0 */
function checkArray(tab) {
    const result = [];

    for (let nthRow = 0; nthRow < tab.length; nthRow++) {
        const row = tab[nthRow];

        let hasAllEvenNumbers = true;
        for (let i = 0; i < row.length; i++) {
            if (row[i] % 2 !== 0) {
                hasAllEvenNumbers = false;
                break;
            }
        }
        result.push(hasAllEvenNumbers);
    }

    return result;
}

var task1Array = [
    [2, 3],
    ["Ala", "Ola"],
    [true, false],
    [5, 6, 7, 8],
    [12, 15, 67]
];


var task2Array = [
    [1, 2, 3, 4],
    [5, 6, 7, 8],
    [9, 10, 11, 12]
];

/* Zadanie 1 */
function zadanie1() {
    console.log(task1Array[3][2]);
    console.log(task1Array[1].length);
    console.log(task1Array[4][2]);
}
