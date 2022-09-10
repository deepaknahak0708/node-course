const express = require('express')
const router = express.Router()

const student = require('./studentRoute')

router.use('/students',student)
// router.use('/students/:id',student)

module.exports = router;