const ProductController = require('../controllers/product.controller');

module.exports = (app) => {
    app.get('/api/products', ProductController.getAllProducts); 
    app.post('/api/products', ProductController.createProduct);
    app.get('/api/products/:id', ProductController.getOneProduct);
    app.patch('/api/products/:id', ProductController.updateProduct);
    app.delete('/api/products/:id', ProductController.deleteProduct); //note: "id" here MUST match params in controller


}

