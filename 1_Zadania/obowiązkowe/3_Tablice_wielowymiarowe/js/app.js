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

/* Zadanie 2 */
function zadanie2() {
    /* 2.1 */
    for (let i = 0; i < task2Array.length; i++) {
        console.log(task2Array[i]);
    }

    /* 2.2 */
    for (let i = 0; i < task2Array.length; i++) {
        console.log(task2Array[i].length);
    }

    /* 2.3 */
    for (let nthRow = 0; nthRow < task2Array.length; nthRow++) {
        const row = task2Array[nthRow];
        for (let i = 0; i < row.length; i++) {
            console.log(row[i]);
        }
    }
}


/* Zadanie 3 */
function print2DArray(tab) {
    for (let nthRow = 0; nthRow < tab.length; nthRow++) {
        const row = tab[nthRow];
        for (let i = 0; i < row.length; i++) {
            /*
                "Następnie funkcja ma wypisać w konsoli zawartość tej tablicy."
                Z powodu braku dokładnie sprecyzowanego sposobu wypisania zrobiłem w ten sposób jak poniżej. Poza tym
                można również następująco:
                  - console.log(row)
                  - console.table(tab)

             */
            console.log(row[i]);
        }
    }
}


/* Zadanie 4 */
function zadanie4() {
    const myVeryBest2dArray = [
        [1, 2, 3],
        [4, 5, 6],
        [7, 8, 9]
    ];
    print2DArray(myVeryBest2dArray);
}

/* Zadanie 5 */
function create2DArray(rows, columns) {
    let result = [];

    let n = 1;
    for (let nthRow = 0; nthRow < rows; nthRow++) {
        result[nthRow] = [];
        for (let nthCol = 0; nthCol < columns; nthCol++) {
            result[nthRow][nthCol] = n++;
        }
    }

    return result;
}

