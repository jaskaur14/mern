const Product = require('../models/product.model');   

          /* The method below is new */
module.exports.createProduct = (request, response) => {
    // Mongoose's "create" method is run using our Person model to add a new product to our db's product collection.
    Product.create(request.body) //This will use whatever the body of the client's request sends over
        .then(newProduct => response.json(newProduct))
        .catch(err => response.json(err));
};
module.exports.getAllProducts = (request, response) => {
    Product.find({})
        .then(products => {
            console.log(products); //console logs are optional, but they are highly recommended for troubleshooting!
            response.json(products);
        })
        .catch(err => {
            console.log(err)
            response.json(err)
        })
}
module.exports.getOneProduct = (request, response) => {
    Product.findOne({_id:request.params.id})
        .then(oneProduct => response.json(oneProduct))
        .catch(err => response.json(err));
}
module.exports.updateProduct = (request, response) => {
    Product.findOneAndUpdate({_id: request.params.id}, request.body, {new:true})
        .then(updatedProduct => response.json(updatedProduct))
        .catch(err => response.json(err))
}
module.exports.deleteProduct = (request, response) => {
    Product.deleteOne({ _id: request.params.id }) //note: "id" here MUST match id in corresponding route
        .then(deleteConfirmation => response.json(deleteConfirmation))
        .catch(err => response.json(err))
}









