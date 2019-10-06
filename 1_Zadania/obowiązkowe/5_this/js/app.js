/* Zadanie 0 */
const car = {
    brand: "BMW",
    color: "Niebieski",
    numberOfKilometers: 0,
    printCarInfo: function () {
        /* W opisie jest napisane aby zwrócić - troche mylące */
        console.log(`${this.color} ${this.brand}, ${this.numberOfKilometers}km`)
    },
    drive: function (km) {
        this.numberOfKilometers += km;
    }
};

function zadanie0() {
    car.printCarInfo();
    car.drive(20);
    car.printCarInfo();
}

