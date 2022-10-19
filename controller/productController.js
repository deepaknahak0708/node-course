const Product = require('../model/product')

exports.createProduct = async (req, res) => {
    try {
        let product = new Product();
        product.name = req.body.name
        product.category = req.body.category
        product.price = req.body.price
        product.description = req.body.description
        console.log(product);

        const addProduct = await product.save();
        res.status(200).json({
            success: true,
            data: addProduct,
            message: 'Product created Successfully'
        })

    } catch (error) {
        res.status(500).json({
            success: false,
            data: error,
            message: 'Error in creating Product'
        })
    }
};



exports.getAllProduct = async (req, res) => {
    try {
        const getProduct = await Product.find()
        res.status(200).json({
            success: true,
            data: getProduct,
            message: 'All product read successfully'
        })
    } catch (error) {
        res.status(500).json({
            success: false,
            data: error,
            message: 'Enabled to read data'
        })
    }
}           


exports.getProductById = async (req, res) => {
    try {
        const _id = req.params.id;
        const getProductId = await Product.findById(_id);
        res.status(200).json({
            success: true,
            data: getProductId,
            message: 'Successfully read all Products by id'
        })
    } catch (error) {
        res.status(500).json({
            success: false,
            data: error,
            message: 'Cannot read Product By Id '
        })
    }
}

exports.updateProduct = async (req, res) => {
    try {
        const _id = req.params.id;
        const updateProduct = await Product.findByIdAndUpdate(_id, req.body, {
            new: true
        })
        res.status(200).json({
            success: true,
            data: updateProduct,
            message: 'Product updated successfully'
        })
    } catch (error) {
        res.status(500).json({
            success: true,
            data: error,
            message: 'Enable to updtae a product'
        })
    }
}


exports.deleteProduct = async (req, res) => {
    try {
        const _id = req.params.id;
        const deleteProduct = await Product.findByIdAndDelete(_id);
        res.status(201).json({
            success:true,
            data:deleteProduct,
            message:'Product deleted Successfully'
        })
    } catch (error) {
        res.status(500).json({
            success:false,
            data:error,
            message:'Enable to delete Product some error'
        })
    }

}