const mongoose = require('mongoose')

const Schema = mongoose.Schema

const userSchema = new Schema({
    first_name: {
        type: String
    },
    last_name: {                                            
        type: String
    },
    email: {
        type: String,
    },

    phone:{
        type:Number 
    },

    role:{
        type:String,
        default: "user"
    },
    password:{
        type: String 
    },
    product_id:{
        type:Schema.Types.ObjectId,
        ref: 'product'
    }
},{
    timestamps:true
})



const user = mongoose.model('user',userSchema)

module.exports = user