const User = require('../model/user');
const jwt = require('jsonwebtoken');
const becrypt = require('bcryptjs');

exports.login = async(req,res, next) =>{
    try {
        // const email = req.body.email;

        const{email, password} = req.body;
        const user = await User.findOne({email}).lean();   

        if(!user){
            return res.status(422).json({
                success:false,
                message:"incorrect email"
            })
        }

        const match = await becrypt.compare(user.password, password);
        if(!match){
            res.status(422).json({
                success:false,
                message:'Your Password is not Valid'
            })
        }

        // if(user.password !== password){
        //     return res.status(422).json({
        //         success:false, message:"incorrect password"
        //     })
        // }
        

        const token = jwt.sign({
            first_name: user.first_name,
            email: user.email,
            role: user.role,

        },process.env.SECRET, {expiresIn:'12h'});

        return res.status(200).json({
            success:true,
            token,
            message:'user successfully login'
        });

    } catch (error) {
        res.status(500).json({
            success:failed,
            message:"error some problem "
        });
    }

}




// registration create data---
exports.registration = async(req,res)=>{
    try {
        const user = new User();

        const password = req.body.password;
        const hashPassword = await becrypt.hash(password, 12);
        
        user.first_name = req.body.first_name
        user.last_name = req.body.last_name
        user.email = req.body.email
        user.phone = req.body.phone
        user.password = hashPassword
        // console.log(user);
        const createUser = await user.save();
        
        // for remove extra method from documents----
        const rawData = JSON.parse(JSON.stringify(createUser));
        res.status(200).json({
            success: true,
            message: " data added successfully",
            data: rawData
        });

    } catch (error) {
        res.status(404).json({
            success: error,

        });
    }
}

