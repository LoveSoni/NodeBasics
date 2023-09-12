const Product = require('../models/product')
exports.getAddProduct = (request, response, next) => {
    // response.sendFile(path.join(__dirname, '../', 'views', 'admin.html'));
    response.render('admin');
}


exports.postAddProduct = (request, response, next) => {
    response.status(302);
    const product = new Product(request.body['value']);
    product.saveProduct();
    // addedProduct.push({ title: request.body['value'] });
    response.redirect("/");
}

exports.getProducts = (request, response, next) => {
    Product.fetchAll(product => {
        console.log('Addded products are : ', product);
        // response.sendFile(path.join(__dirname, '../', 'views', 'shop.html'));
        // to use pug file we have to use the render method
        response.render('shop', { prods: product, hasProds: product > 0 });// we don't to specify the full path(including folder) because we have set it already in our app.js file under views key (app.set('views', 'views');)
    });


}