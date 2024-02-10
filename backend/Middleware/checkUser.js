const userModel = require('../models/User')

const user = userModel.userModel

exports.auth = (req, res, next) => {
    // 'Authorization': `Bearer ${token}` // the header will contain information like this.
    console.log('REQUEST',req)

    // const token = req.headers['authorization'];

    //authenticate user and if everything goes right then send next.

    // if ()
    
} 
