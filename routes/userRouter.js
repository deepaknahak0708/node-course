const express = require('express');
const router = express.Router();

const { getAlluser, getAlluserById, updateUser, deleteUser, addProductId} = require('../controller/userController');

const authorization = require('../middleware/jwtAuth');
const user = require('../model/user');

const use = (fn) => (req, res, next) => {
    Promise.resolve(fn(req,res,next).catch(error => {next(error)}))
}

// router.post('/',authorization(['admin']), addUser);
router.get('/', authorization(['user','admin']),use (getAlluser));
router.get('/:id', authorization(['user','admin']),use(getAlluserById));
router.patch('/:id',authorization(['admin']), updateUser);
router.delete('/:id',authorization(['admin']), deleteUser);


//product through user----
router.post('/updateProduct/:id', addProductId)




module.exports = router