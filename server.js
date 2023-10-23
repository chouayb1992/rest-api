const express = require('express');
const dotenv = require('dotenv');
const connectDB = require('./config/db');

connectDB();

// //load env variables
dotenv.config({ path: './config/config.env'});

const person = require('./routes/person');

const app = express();

app.use(express.json())


app.use('/api/v1/person', person);

const PORT = process.env.PORT;

app.listen(PORT , (err)=>
err? console.log(err)
:console.log("server is running on port"));