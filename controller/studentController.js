const { rejects } = require('assert');
const fs = require('fs')

exports.allStudents = async(req,res)=> {
    console.log(req.body);
    const data = await readFile()
    console.log(JSON.parse(data));
    res.json({
        success:true,
        data: req.body
    })
}

const readFile = () =>{
    return new Promise((resolve, rejects)=>{
        fs.readFile('data.json','utf8',(err,data)=>{
            if(err){
                rejects(err)
            }else{
                resolve(data)
            }
        })
    })
}