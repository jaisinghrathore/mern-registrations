const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const app=express();
const upload = require("express-fileupload");
const routes=require("./routes");
require("./Database/connection")


// Defining Port.
const port = process.env.PORT ||8000;


// using all server dependencies.
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(cors())
app.use(upload());
app.use(routes);


if(process.env.NODE_ENV =="production"){
    app.use(express.static("Client/build"))
}


app.listen(port,()=>{
    console.log("connected.");
})