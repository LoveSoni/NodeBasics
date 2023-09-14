// const products = [];
// instead of array we'll store in a file
const fs = require('fs');
const path = require('path');
const uuidv4 = require('uuid');
const { stringify } = require('querystring');



module.exports = class Product {
    constructor(productTile) {
        this.productTile = productTile;
        this.productId = uuidv4.v4();
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
                console.log(err);
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