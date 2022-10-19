const express = require('express');
const router = express.Router();

const { login, registration } = require('../controller/authController');
const authorization = require('../middleware/jwtAuth');
const use = (fn) => (req, res, next) => {
    Promise.resolve(fn(req, res, next).catch(error => { next(error) }))
}

router.post('/login', login);
router.post('/register', registration);


module.exports = router