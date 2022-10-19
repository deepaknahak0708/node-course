const express = require('express')
const router = express.Router()

const staticStudent = require('./staticStudentRoute');
const userRouter = require('./userRouter')
const authRouter = require('./authRouter')
const productRouter = require('./productRouter')



//product------
router.use('/product', productRouter);

//static-student
router.use('/static-students',staticStudent)


// userdata-------
router.use('/user', userRouter);


// authcontroller----logoin---
router.use('/', authRouter);



module.exports = router;