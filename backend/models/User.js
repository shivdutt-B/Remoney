const mongoose = require('mongoose')

const userSchema = new mongoose.Schema(
    {
        userName:{
            type:String
        },
        email:{
            type:String,
            required: true,
            unique: true
        },
        password:{
            type:String,
            required: true,
        }, 
        mobile:{
            type: Number,
            unique: true
        },
        address: {
            type:String
        },
        selling: {
            type: Array
        },
        cart: {
            type: Array
        }


    }
)

exports.userModel = mongoose.model('user', userSchema)