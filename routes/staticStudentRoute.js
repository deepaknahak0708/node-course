const express = require('express')
const router = express.Router();
const {allStudents,addStudent,getStudentsById, staticUpdtStd, updateStudent} = require("../controller/studentController")

router.get('/',allStudents)
router.get('/:id',getStudentsById);

router.post('/', staticUpdtStd)
router.post('/:id',updateStudent);
// router.patch('/:id',allStudents)


router.post('/',addStudent)

module.exports = router