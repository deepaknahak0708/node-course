const User = require('../model/user');


// exports.addUser = async (req, res) => {
//     try {
//         const user = new User();
//         user.first_name = req.body.first_name
//         user.last_name = req.body.last_name
//         user.email = req.body.email
//         user.phone = req.body.phone
//         // user.role = req.body.role
//         user.password = req.body.password
//         console.log(user);
//         const createUser = await user.save();
//         res.status(200).json({
//             success: true,
//             message: " data added successfully",
//             data: createUser
//         })

//     } catch (error) {
//         res.status(404).json({
//             success: error,

//         });
//     }
// }

exports.getAlluser = async (req, res) => {
    try {
        const userData = await User.find().populate('product_id');
        res.status(200).json({
            success: true,
            data: userData,
            message: 'successfully read all user data'
        })
    } catch (error) {
        res.status(500).json({
            success: false,
            data: error,
            message: 'error in reading all user data'
        })
    }
}

exports.getAlluserById = async (req, res) => {
    try {
        const _id = req.params.id;
        const userId = await User.findById(_id);
        res.status(200).json({
            success: true,
            data: userId,
            message: 'read all user by id successfully'
        })
    } catch (error) {
        res.status(404).json({
            success: false,
            data: error,
            message: 'error in reading user by Id '
        })

    }
}

exports.updateUser = async (req, res) => {
    try {
        const _id = req.params.id;
        const updateData = await User.findByIdAndUpdate(_id, req.body, {
            new: true
        })
        res.status(202).json({
            success: true,
            data: updateData,
            message: 'user data updated successfully'
        })
    } catch (error) {
        res.status(500).json({
            success: false,
            data: error,
            message: "Error in updating data"
        })
    }
}

exports.deleteUser = async (req, res) => {
    try {
        const _id = req.params.id;
        const deleteData = await User.findByIdAndDelete(_id);
        res.status(200).json({
            success: true,
            data: deleteData,
            message: 'Your data is successfully deleted'
        })
    } catch (error) {
        res.status(500).json({
            success: false,
            data: error,
            message: 'Error in deleting your data'
        })
    }

}


exports.addProductId = async (req, res) => {
    try {
        const userId = req.params.id
        const product_id = req.params.product_id

        const user = await User.findById(userId);

        if (!user) {
            return res.status(422).json({
                success: false,
                message: "inavalid data"
            })
        }

        user.product_id = product_id

        await user.save()

        return res.status(200).json({
            success: true,
            message: 'product successfully added'
        })
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: error.message
        })
    }

}






