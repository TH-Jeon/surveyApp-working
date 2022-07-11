//import modules
const express = require('express');
const mongoose = require('mongoose');
const morgan = require('morgan');
const cors = require('cors');
require("dotenv").config();


//app
const app = express();


//db
mongoose.connect('URI',{
    useNewUrlParser:true,
    useUnifiedTopology: true,
})
.then(()=>console.log("DB CONNECTED"))
.catch((err)=>);


//middleware
app.use(morgan("dev"));
app.use(cors({origin:true, credentials:true}));

//routes


//port
const port = process.env.PORT || 8080;


//listener
const server = app.listen(port, ()=>
    console.log(`Server is running on port ${port}`)
);