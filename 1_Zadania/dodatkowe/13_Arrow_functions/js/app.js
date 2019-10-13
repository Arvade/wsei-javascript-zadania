/* Zadanie 1 */
const hello = () => console.log("Hello World");

/* Zadanie 2 */
const multiplyBy2 = (n = 3) => n * 2;

/* Zadanie 3 */
const greater = (n1, n2) => n1 > n2 ? n1 : n2;

/* Zadanie 4 */
const getSecondMaxNumber = (arr) => {
    if (arr.length === 0) return null;
    arr.sort((a, b) => b - a);
    return arr[1] || arr[0];
};

/* Zadanie 5 */
(str => str)("Hello there");

/* Zadanie 6 */
const helloThere = (n = 1) => {
    let counter = 1;
    const intervalId = setInterval(() => {
        console.log(`Hello ${counter++}`);
        if (counter > n) clearInterval(intervalId);
    }, 100);
};
