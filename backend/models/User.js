const mongoose = require('mongoose')

const userSchema = new mongoose.Schema(
    {
        userName:{
            Type:String
        },
        password:{
            Type:String
        }
    }
)

exports.userModel = mongoose.model('user', userSchema)