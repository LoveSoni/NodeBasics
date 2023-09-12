const products = [];
module.exports = class Product {
    constructor(productTile) {
        this.productTile = productTile;
    }

    saveProduct() {
        products.push(this);
    }

    static fetchAll() {
        return products;
    }
}