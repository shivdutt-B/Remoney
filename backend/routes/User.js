const express = require('express');
const router = express.Router();
const userController = require('../controllers/User')

router.post('/signup', userController.signUp)
router.post('/signin', userController.signIn);
router.post('/getuser', userController.sendUser)
exports.userRouter =  router
