document.addEventListener('DOMContentLoaded', function () {

    const x = 5;
    let y = 3;

    for (var i = 0; i < 10; i++) {
        console.log(i, y);
    }
    console.log(i, y);

    /* Zadanie 3 */
    for (var i = 0; i <= 10; i++) {
        console.log(i);
    }

    /*
        console.log(i);
        Zostane wypisana wartość 10
    */

    for (let j = 0; j <= 10; j++) {
        console.log(`j : ${j}`);
    }

    /*
        console.log(j);
        Zostanie rzucony błąd: "j is not defined"
     */

    /* -----------------------------------------------  */

    function myFn(param1) {
        let y = 4;
        let i = 20;
        console.log(param1, y, i);


    }
    myFn(i)

    console.log(x);
    {
        let y = 25;
        console.log(y);
        var z = 50;

    }

    console.log(z, y);

    /* Zadanie 5 */
    (() => {
        console.log("hello world");
    })();

    /* Zadanie 6 */
    ((str) => {
        console.log(str);
    })("Shrek");
});
