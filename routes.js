const express = require('express');
const route = new express.Router();
const Emergency = require('../Backend/Database/Schema_Model');
const ProblemStatements = require("./ProblemStatementsSchema");
const bcrypt = require('bcryptjs');




// Testing

route.get("/", async (req, res)=>{
    res.send("testing successfull");
})







//getting Datas
route.get("/datas", async (req, res)=>{

    const result = await ProblemStatements.find();
    res.send(result);
})






//Data to registration form
route.post("/register", async(req, res)=>{
try{
    const data=new Emergency({
        username:req.body.username,
        password:req.body.password,
        email:req.body.email,
        phone:req.body.phone,
        firstName:req.body.firstName,
        lastName:req.body.lastName,
        Organization_Name:req.body.Organization_Name,
        designation:req.body.designation,       
        types:req.body.types
    })

const result=await data.save();
res.send(result);
}
catch(err){
res.send(err);
}
})


//Data to login form
route.post("/login",async (req, res)=>{

    const datas={
        username:req.body.username,
        password:req.body.password
    };


   
    try{
        const result = await Emergency.find({username:datas.username});
        const comp= await bcrypt.compare(datas.password,result[0].password);
        
    if(comp==true){
        res.send("successfull");
    }else{
        res.send("failure");
    }


}catch(e){
    res.send("error");
}
       
})




// Data to SubmitProblemStatements form

route.post("/SubmitProblemStatements",async (req, res)=>{

    try{
        const data=new ProblemStatements({
            title:req.body.title,
            youtube:req.body.youtube,
            Select_Domain_Bucket:req.body.Select_Domain_Bucket,
            Select_Technology_Bucket:req.body.Select_Technology_Bucket,
            description:req.body.description,
            file:req.body.file
        
        })
    
    const result=await data.save();
    res.send(result);
    }
    catch(err){
    console.log(err);
    }
       
})

route.post("/pdffile",async(req, res)=>{

// console.log(req.files)


if(req.files === null){
    return res.status(400).json({msg:"no file uploaded !"})
}

const file = req.files.file;
file.mv(`./upload/${file.name}`, err => {
    if(err) {
        console.error(err);
        return res.status(500).send(err)
    }

    res.json({fileName:file.name,filePath:`upload/${file.name}`})
})



})



module.exports=route;