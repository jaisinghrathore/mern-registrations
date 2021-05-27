var validator = require('validator');
const bcrypt = require('bcryptjs');
const mongoose = require('mongoose');
 

    const sche= mongoose.Schema({
        username:{
            type:String,
            unique:true,
            required:true
        },
       
        password:{
            type:String,
            required:true,  
        },
        email:{
            type:String,
            required:true,
            unique:true
        },
        phone:{
            type:Number,
            required:true,  
        },
        firstName:{
            type:String,    
            required:true,  
        },
        lastName:{
            type:String,
            required:true,  
        },
        Organization_Name:{
            type:String,
            required:true,  
        },
        designation:{
            type:String,
            required:true,  
        },
        types:{
            type:String,
            required:true,  
        },
        
    
    })
    
    sche.pre("save", async function(next){
        if(this.isModified("password")){
            this.password=await bcrypt.hash(this.password,10)
        }
        next();
})



    //now we need to make collection

    const Emergency=  mongoose.model("Register",sche);
    module.exports = Emergency;