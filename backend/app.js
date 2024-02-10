const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const userRoute = require('./routes/User');
const cors = require('cors');
const auth = require('./Middleware/checkUser')
require('dotenv').config();


//Server and basic middlewares
const app = express();
app.use(bodyParser.json())
app.use(cors())

//Routes
app.use('/user', userRoute.userRouter)
// app.get('/auth', auth.auth)


//Connecting to database.
mongoose.connect(process.env.CONNECTIONSTRING)
    .then(() => console.log('Connected to MongoDB'))
    .catch(err => console.error('Error connecting to MongoDBxxx:', process.env.CONNECTIONSTRING));

const PORT = 8000;

app.listen(PORT, () => {
    console.log('CONNECTED');
});