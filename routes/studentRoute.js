const express = require('express')
const router = express.Router()
const {allStudents} = require("../controller/studentController")

router.get('/',allStudents)

// router.post('/',)

module.exports = router