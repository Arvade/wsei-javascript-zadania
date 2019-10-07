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

/* Zadanie 1 */
function zadanie1() {
    car["reviews"] = [];
    car.addReview = function (review) {
        this.reviews.push(review);
    };

    car.getReviews = function () {
        return this.reviews;
    }
}

/* Zadanie 3 */
const stairs = {
    step: 0,
    up: function () {
        this.step++;
    },
    down: function () {
        this.step--;
    },
    printStep: function () {
        console.log(this.step);
    }
};
