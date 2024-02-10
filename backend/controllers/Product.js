const userModel = require('../models/User') 
const user = userModel.userModel

const addProduct = (req, res) => {
    try{

        // adding product for sale.
        const {title, description, price, quantity, brand, location} = req.body

        //creating an object which will be stored in an array of user
        
    } catch(e) {
        res.json({success: false, reason: e.message})
    }


}