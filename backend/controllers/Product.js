const userModel = require('../models/User')
const user = userModel.userModel

exports.addProduct = async (req, res) => {
    try {

        // adding product for sale.
        const { title, description, price, quantity, brand, location } = req.body

        //creating an object which will be stored in an array of user

    } catch (e) {
        res.json({ success: false, reason: e.message })
    }

}

exports.nearestProduct = async (req, res) => {
    try {
        // Go through all the users and send the nearest product according to the location.
        const {longitude, location} = req.body
        

    } catch (error) {
        res.json({ success: false, reason: error.message })
    }
}

