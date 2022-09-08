const { rejects } = require('assert');
const fs = require('fs');
const { resolve } = require('path');

exports.allStudents = async (req, res) => {
    console.log(req.body);
    const data = await readFile('data.json', 'utf8')
    const result = JSON.parse(data);
    const student = result.find(student => student.ID === '100')
    res.json({
        success: true,
        data: student
    })
}

exports.addStudent = async (req,res)=>{
    const {data} = req.body
    const result = JSON.stringify(data)
    const response = await writeFile('addData.json',result)
    
    console.log(response);
    res.json({
        success: true,
        message: 'successfully added'
    })
}

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