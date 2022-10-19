const express = require('express');
const router = express.Router();

const{createProduct, getAllProduct, getProductById, updateProduct, deleteProduct} = require('../controller/productController');


router.post('/', createProduct);
router.get('/',getAllProduct );
router.get('/:id', getProductById);
router.patch('/:id', updateProduct);
router.delete('/:id', deleteProduct); 






module.exports = router
