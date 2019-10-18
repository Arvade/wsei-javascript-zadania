document.addEventListener("DOMContentLoaded", () => {
    let foods = [];

    document.querySelector("#add")
        .addEventListener("click", () => {
            const name = document.querySelector("#name").value;
            const proteins = document.querySelector("#proteins").value;
            const carbs = document.querySelector("#carbs").value;
            const fat = document.querySelector("#fat").value;

            const kcal = (proteins * 4 + carbs * 4 + fat * 9);

            let foodToAdd;

            if (kcal > 250) {
                foodToAdd = new FastFood(name, proteins, carbs, fat);
            } else if (kcal < 250) {
                foodToAdd = new FatFreeFood(name, proteins, carbs, fat);
            }

            foodToAdd.print();

            foods.push(foodToAdd);
            /*
                Disclaimer:
                    W treści zadania znajduje się błąd
                    Dla podanego przykładu hot-dog'a poprawny wynik to 290.8
            */
        })
});

class Food {
    constructor(name, protein, carbs, fat) {
        this.name = name;
        this.protein = protein;
        this.carbs = carbs;
        this.fat = fat;
    }

    print() {
        console.log(`
            Product : ${this.name}
            protein : ${this.protein}
            carbs : ${this.carbs}
            fat : ${this.fat}
        `);
    }
}

class FastFood extends Food {
}

class FatFreeFood extends Food {

}

