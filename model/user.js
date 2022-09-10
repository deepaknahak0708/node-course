const mongoose = require('mongoose')

const Schema = mongoose.Schema

const userSchema = new Schema({
    firstName: {
        type: String
    },
    lastname: {
        type: String
    },
    email: {
        type: String,
        unique: true
    },
    phone:{
        type: Number
    }
},{
    timestamps:true
})


const user = mongoose.model('user',userSchema)

module.exports = user