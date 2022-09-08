const express = require('express')
const router = express.Router()
const {allStudents,addStudent} = require("../controller/studentController")

router.get('/',allStudents)

router.post('/',addStudent)

module.exports = router