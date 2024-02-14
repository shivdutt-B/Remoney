const userModel = require('../models/User')
const mongoose = require('mongoose');
const bcrypt = require('bcrypt'); //install
const jwt = require('jsonwebtoken') //install
// env setup

exports.signUp = async (req, res) => {
    // creating a new user account with the basic information.
    try {
        const user = userModel.userModel
        // const d = await user.find()
        // console.log('existing data', d)
        console.log('SIGN UP LAUNCHED', req.body)

        let { userName, email, password } = req.body

        if (userName && email && password) {
            //checking if the user already exists here.
            const existingUser = await user.findOne({ email: email })

            if (existingUser) {
                //If user already exists then sending success false with reason that the user already exists.
                res.json({ success: false, reason: 'User already exists' })
            }
            else {
                // creating a new user.

                //incrypting password here.
                const SALT = 10 // number of salt rounds
                password = await bcrypt.hash(password, SALT) // incrypting the password
                

                //query to create a new user.
                const newUser = new user({
                    userName: userName,
                    email: email,
                    password: password
                })
                await newUser.save() //saving the new user.
                res.json({ success: true }) //sending response back with success true.
            }
        }
    }
    catch (e) {
        //If any error happens success will be send false with an error message. 
        res.json({ success: false, reason: e.message })
    }
}

exports.signIn = async (req, res) => {
    try {
        const user = userModel.userModel
        const { email, password } = req.body

        if (email && password) {
            let existingUser = await user.findOne({ email: email }) // checking if user already exists.

            if (!existingUser) {
                // If user does exist then sending success as false with reason user not found
                res.json({ success: false, reason: 'User not found' })
            }
            else {
                const decryptPassword = await bcrypt.compare(password, existingUser.password) //decrypting the password.

                if (decryptPassword) {
                    //If the password get decrypted successfully then generating a jwt token and sending it with the response.
                    const token = await jwt.sign({ userId: existingUser._id }, 'secretkey');
                    
                    await delete existingUser.password
                    console.log('Existing user', existingUser)
                    res.json({ status: true, data:existingUser, token: token })
                }
                else { // If the password is not decrypted which means the email id provided is valid but not the password.
                    res.json({ success: false, reason: 'Wrong credentials' })
                }
            }
        }
        else {
            res.json({ success: false, reason: 'Not enough information' })
        }
    } catch (e) {
        res.json({ success: false, reason: e.message })
    }
}

exports.deleteUser = async (req, res) => {
    try {

        const { token } = req.params.token // Extracting token from request.
        if (token) {
            // If token is present in the request then implementing this method.
            const userId = await jwt.verify(token, "secretkey")

            if (userId) {
                // If token gets verified successfully.

                await user.findOneAndDelete({ _id: userId })
                res.json({ success: true })
            }
            else {
                res.json({ success: false, reason: "Token not valid" })
            }
        }
        else {
            res.json({ success: false, reason: "Token not provided" })
        }
    } catch (e) {
        res.json({ success: false, reason: e.message })
    }

}

exports.sendUser = async (req, res) => {
    try{
        const user = userModel.userModel
        
        const {token} = req.body
        
        if (token) {
            const decodeToken = await jwt.verify(token, "secretkey")
            
            const userId = decodeToken.userId
            
            if (userId) {
                let existingUser = await user.findById(userId)
                const newToken = await jwt.sign({userId: userId}, "secretkey")
                delete existingUser.password
                res.json({ success: true, data: existingUser, token: newToken})
            }
            else{
                res.json({ success: false, reason: "Token not valid" })
            }

        }
        else{
            res.json({ success: false, reason: "Token not provided"})
        }
    } catch(e) {
        res.json({success: false, reason: e.message})
    }
}