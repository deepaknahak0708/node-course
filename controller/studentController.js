// const fs = require('fs');

const User = require('../model/user')

exports.allStudents = async (req, res) => {
    console.log(req.body);
    const data = await readFile('data.json', 'utf8')
    const result = JSON.parse(data);
    res.json({
        success: true,
        data: result
    })
}

exports.getStudentsById = async (req, res) => {
    const id = req.params.id;
    const data = await readFile('data.json', 'utf8')
    const result = JSON.parse(data);
    const student = result.find(student => student.ID === id);
    res.json({
        success: true,
        data: student
    })
}


exports.staticUpdtStd = async (req,res)=>{
    
        const {student} = req.body;
        const data = await readFile('data.json', 'utf8');
        const result = JSON.parse(data);
        let lastStd = result[result.length - 1];
        let lastStdId = lastStd.ID;
        let newStdId = +lastStdId + 1
        let newStudent = {}
        newStudent.ID = newStdId
        newStudent.Name = student.Name
        newStudent.Gender = student.Gender
        newStudent.Class = student.Class
        result.push(newStudent)
        result = JSON.stringify(result);
        const writeData = await writeFile('data.json', result);

        if(!writeData == true){
            res.status(200).json({
                success:true,
                message:'student data successfully added'
            })
        }else{
            res.status(404).json({
                message:'student data not  added'
            })
        }
}


exports.updateStudent = async (req, res) => {
    const id = req.params.id;
    console.log(id);
    const newStudent = req.body
    console.log(newStudent)
    const data = await readFile('data.json', 'utf8')
    let result = JSON.parse(data);
    const student = result.find(student => student.ID === id);
    if (!student) {
        return res.status(404).send('student data not founded')
    }
    student.Name = newStudent.Name;
    student.Gender = newStudent.Gender;

    const stdIndex = result.findIndex(student => student.ID == id);
    console.log(stdIndex)
    result.splice(stdIndex, 1, student);
    result = JSON.stringify(result);
    let writeData = await writeFile('data.json', result);

    if (writeData == true) {
        res.status(200).json({
            success: true,
            message: 'successfully update data',
        })
    } else {
        res.status(404).json({
            message: 'some error in data updating'
        })
    }

}



exports.addStudent = async (req, res) => {
    const { data } = req.body
    const result = JSON.stringify(data);
    const response = await writeFile('addData.json', result);

    console.log(response);
    res.json({
        success: true,
        message: 'successfully added'
    })
}




// exports.createUser = async (req, res) => {
//     try {
//         const newUser = new User()
//         newUser.firstName = req.body.firstName
//         const user = await newUser.save()
//         // const user = await User.aggregate([{ $match: { firstName: "deepak" } }])
//         return res.status(200).json({
//             success: true,
//             data: user,
//             message: "user crearted successfully"
//         })

//     } catch (error) {
//         return res.status(500).json({
//             success: false,
//             message: error.message
//         })
//     }
// }

const readFile = (fileName, encoding) => {
    return new Promise((resolve, rejects) => {
        fs.readFile(fileName, encoding, (err, data) => {
            if (err) {
                rejects(err)
            } else {
                resolve(data)
            }
        })
    })
}

const writeFile = (fileName, data) => {
    return new Promise((resolve, rejects) => {
        fs.writeFile(fileName, data, (err) => {
            if (err) {
                rejects(err)
            } else {
                resolve(true)
            }
        })
    })
}