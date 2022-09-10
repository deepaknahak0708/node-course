const express = require('express')
const router = express.Router();
const {allStudents,addStudent,getStudentsById,updateStudent} = require("../controller/studentController")

router.get('/',allStudents)
router.get('/:id',getStudentsById)
router.post('/:id',updateStudent);
// router.patch('/:id',allStudents)

// router.get('/:id', async(req,res)=>{
//     try{
//         const _id = req.params.id;
//         const findData = await readFile('data.json','utf8').findById(_id);
//         res.status(400).send(findData);

//     }catch(err){
//         res.status(500).send(err)
//     }
// })

router.post('/',addStudent)

module.exports = router