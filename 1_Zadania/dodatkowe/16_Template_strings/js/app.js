document.addEventListener('DOMContentLoaded', function () {

    const array = [2, 15, 268, 288, [358, 2, 14, 256], 586];
    // var sorted= array.sort((a,b)=>a-b);
    // // console.log(sorted);
    // // var newVar = array.flat();
    // // console.log(newVar);
    // newVar.sort((a,b)=>a-b);
    var flat = array.flat();
    flat.sort((a, b) => a - b);
    console.log(flat);
    var newFlat = flat.map((element) => element * 2);
    console.log(newFlat);
    var newVar = newFlat.reduce((a, b) => a * b);
    console.log(newVar);

    /* Zadanie 0 */
    const whoAreYou = (obj) =>
        `My name is ${obj.name} ${obj.lastName}
I am ${new Date().getFullYear() - obj.yearOfBirth} years old.
My profession is ${obj.proffesion}`;

    const person = {
        name: "Vlad",
        lastName: "Drăculea",
        yearOfBirth: 1431,
        proffesion: "Lord of Wallachia"
    };

    whoAreYou(person);

    /* Zadanie 1 */
    const n1 = 2;
    const n2 = 4;
    console.log(`Sume dwóch liczb ${n1} i ${n2} to: ${n1 + n2}`);

    /* Zadanie2 */
    const myName = "Sebastian";
    console.log(`Moje imię i nazwisko to: ${myName} Machczyński`);

    /* Zadanie 3 */
    const textToPrint = `
        "Myślę, że jest wiele piękna'
        w posiadaniu problemów.
        To jeden ze sposobów w jaki się uczymy"
        Herbie Hancock
        `;

    const print = (text) => {
        console.log(`${text}`);
    };

    /* Zadanie 4 */
    const button = {
        value: "Send message",
        idName: "sendMsg",
        width: "100px",
        padding: "20px",
    };

    console.log(`
        To jest button.
        Jego szerokość to ${(+button.width.match(/\d+/g) + (+button.padding.match(/\d+/g) * 2))}px.
        Napis, które na nim widnieje to ${button.value}
    `)
});
