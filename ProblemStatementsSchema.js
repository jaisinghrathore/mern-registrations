const mongoose = require('mongoose');
 
    const sche= mongoose.Schema({
        title:{
            type:String,
            required:true
        },
        youtube:{
            type:String,
            required:true,  
        },
        Select_Domain_Bucket:{
            type:String,
            required:true,
        },
        Select_Technology_Bucket:{
            type:String,
            required:true,  
        },
        description:{
            type:String,    
            required:true,  
        },
        file:{
            type:String,
            required:true,  
        },
        
    
    })

    const ProblemStatements=  mongoose.model("ProblemStatements",sche);
    module.exports = ProblemStatements;