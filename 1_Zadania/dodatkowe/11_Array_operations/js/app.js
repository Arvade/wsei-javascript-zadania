document.addEventListener('DOMContentLoaded', function () {
    var numbers = [5, 10, 12, 20, 100];
    var result = numbers.reduce(function (prev, curr, index, array) {
        return prev * curr;
    });
    console.log(result);


    /* Zadanie 0 */
    const cities = ["Kraków", "Olsztyn", "Szczecin", "Ostrów Wielkopolski"];
    const citiesLength = cities.map(city => city.length);

    /* Zadanie 1 */
    function randomize(param1, param2, callback) {
        if (!isFunction(callback)) {
            console.error("Provided callback is not a function");
            return;
        }

        callback(Math.floor((Math.random() * param2)) + param1);
    }

    function isFunction(obj) {
        return !!(obj && obj.constructor && obj.call && obj.apply);
    }


    /* Zadanie 2 */
    const animals = ["cat", "shrimp", "giraffe"];
    animals.forEach(animal => console.log(animal));

    /* Zadanie 3 */
    const years = [1995, 1856, 2014, 1987];
    const ageOfPeople = years.map(year => new Date().getFullYear() - year);
    console.log(ageOfPeople);

    /* Zadanie 4 */
    const tab = [1, 2, 3, 4];
    const sumResult = tab.reduce((prev, acc) => prev + acc, 0);
    const multiplyResult = tab.reduce((prev, acc) => prev * acc, 1);
});
