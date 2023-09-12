// const products = [];
// instead of array we'll store in a file
const fs = require('fs');
const path = require('path');
const { stringify } = require('querystring');



module.exports = class Product {
    constructor(productTile) {
        this.productTile = productTile;
    }

    saveProduct() {
        // products.push(this);
        const filePath = path.join(path.dirname(process.mainModule.filename), 'data', 'productsList.json');
        console.log('path constructed', filePath);
        fs.readFile(filePath, (err, fileContent) => {
            let myProduct = [];
            if (!err) {
                myProduct = JSON.parse(fileContent);
            }
            myProduct.push(this);
            fs.writeFile(filePath, JSON.stringify(myProduct), (err) => {
                console.log(error);
            });
        });
        // fs.writeFile(filePath, (text) => {
        //     text.add
        // })
    }

    static fetchAll(cb) {
        const filePath = path.join(path.dirname(process.mainModule.filename), 'data', 'productsList.json');
        console.log('path constructed', filePath);
        fs.readFile(filePath, (err, fileContent) => {
            if (err) {
                cb([]);
            }
            cb(JSON.parse(fileContent));
        })
    }
}