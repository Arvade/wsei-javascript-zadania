/* Zadanie 0 */
const Basket = function () {
    this.products = [];
    this.sum = 0;

    this.addProduct = function (name, price) {
        this.products.push({name: name, price: price});
        this.sum += price;
    };

    this.showBasket = function () {
        for (let i = 0; i < this.products.length; i++) {
            const product = this.products[i];

            console.log(`${product.name}  ${product.price}`);
        }
        console.log(`Total cost:  ${this.sum}`)
    }
};

