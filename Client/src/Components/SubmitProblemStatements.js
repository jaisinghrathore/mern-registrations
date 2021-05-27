import React from 'react'
import Side from "./SideBar"
import Grid from "@material-ui/core/Grid"
import Nav from "./Nav";
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import MenuItem from '@material-ui/core/MenuItem';
import Button from '@material-ui/core/Button';
import {useHistory} from "react-router-dom";
import axios from 'axios';


const useStyles = makeStyles((theme) => ({
    input:{
        width:"100%",
        marginTop:"30px",
    },
    button : {
        backgroundColor:"white",
        color:"black",
        boxShadow:"2px 2px 2px 2px grey",
        width:"100px",
        margin:"36px 0 10px 50%",
        transform:"translate(-50%,0)",
        "&:focus": {
            outline:"none",
          }
    },

  }));


export default function SubmitProblemStatements() {
    const classes = useStyles();



// initilizing values

const[initialinpvalue,updatedinpvalue] = React.useState({
    title:"",
    youtube:"",
    Select_Domain_Bucket:"",
    Select_Technology_Bucket:"",
    description:"",
    file:""
});
const[initvisible,updavisable]=React.useState("none");


const[initialValidationMessage,updatedValidationMessage]= React.useState({
    messages:"",
    color:""
  })

const[file,fileUploadUpda]=React.useState(null);


// functions for input value

    const changi = (e) => {
        updatedinpvalue({...initialinpvalue,[e.target.name]:e.target.value});
    }


// functions for submit input value

    const clicky=(e)=>{
        e.preventDefault(); 
         const formData= new FormData();
         formData.append("file",file);




        axios.post("http://localhost:8000/pdffile",formData,{
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        }).then((res)=>{
            // console.log(res);
        })

    if(initialinpvalue.title.length>0 && initialinpvalue.youtube.length>0 && initialinpvalue.Select_Domain_Bucket.length>0 && initialinpvalue.Select_Technology_Bucket.length>0 && initialinpvalue.description.length>0 && initialinpvalue.file.length>0 ){
             axios.post("http://localhost:8000/SubmitProblemStatements",initialinpvalue).then((result)=>{
                }).then(()=>{
                updatedinpvalue({...initialinpvalue,["title"]:"",  ["youtube"]:"",["Select_Domain_Bucket"]:"",["Select_Technology_Bucket"]:"",["description"]:"",["file"]:""});
            }).then(()=>{
                updatedValidationMessage({...initialValidationMessage,["messages"]:"Successfull",["color"]:"green"})
            });


        }else{
            updavisable("block");
            updatedValidationMessage({...initialValidationMessage,["messages"]:"Fill every details!",["color"]:"red"})
            setTimeout(function(){
            updavisable("none");
            },1400)

        }

          

        
    }


        const fileupda = (e) =>{
            fileUploadUpda(e.target.files[0])           
        }

    return (
        <>
        <div className="container-fluid">
            <div className="row">
            
            <Side/>

        <div className="col-xs-9 col-md-9 col-sm-12 p-0">
        <Nav/>

<div className="container pl-md-5 pr-md-5  pl-md-0 pr-md-0">

        <div className="row p-4" style={{borderRadius:"10px"}}> 



{/* FIRST DIVISION */}

        <div className="col-xs-6 col-sm-12 col-md-6 ">
        {/* title */}
        <TextField 
 className={classes.input}
 onChange={changi}
 type="text"
 value={initialinpvalue.title}
 id="outlined-basic" label="Title" variant="outlined"
 name="title" />          
</div>



{/* SECOND DIVISION */}
        <div className="col-xs-6 col-sm-12 col-md-6 ">
  {/* youtube link */}
  <TextField 
 onChange={changi}
 className={classes.input}
  id="outlined-basic" label="Youtube Link" variant="outlined" value={initialinpvalue.youtube}  name="youtube" />
        </div>




{/* THIRD DIVISION */}
<div className="col-12 divi">
<TextField
 className={classes.input}
 id="outlined-select-currency"
 onChange={changi}
 value={initialinpvalue.Select_Domain_Bucket} 
 select
 name="Select_Domain_Bucket" 
 label="Select Domain"
 variant="outlined"
 >
 
  <MenuItem value="Agriculture and Rural Development">Agriculture and Rural Development</MenuItem>
  <MenuItem value="Clean Water">Clean Water</MenuItem>
  <MenuItem value="Robotics Drones">Robotics &amp; Drones</MenuItem>
  <MenuItem value="Healthcare Biomedical Devices">Healthcare &amp; Biomedical Devices</MenuItem>
  <MenuItem value="Energy / Renewable Energy">Energy / Renewable Energy</MenuItem>
  <MenuItem value="Security Surveillance">Security &amp; Surveillance</MenuItem>
  <MenuItem value="Smart Communication">Smart Communication</MenuItem>
  <MenuItem value="Smart Vehicles">Smart Vehicles</MenuItem>
  <MenuItem value="Software - Mobile App development">Software - Mobile App development</MenuItem>
  <MenuItem value="Miscellaneous">Miscellaneous</MenuItem>
  <MenuItem value="Software - Web App development">Software - Web App development</MenuItem>
  <MenuItem value="Travel and Tourism">Travel and Tourism</MenuItem>
  <MenuItem value="Finance">Finance</MenuItem>
  <MenuItem value="Life Sciences">Life Sciences</MenuItem>
  <MenuItem value="Waste Management">Waste Management</MenuItem>
  <MenuItem value="Food Technology">Food Technology</MenuItem>
  <MenuItem value="Smart Education">Smart Education</MenuItem>
  <MenuItem value="Smart Cities">Smart Cities</MenuItem>
  <MenuItem value="Sports and Fitness">Sports and Fitness</MenuItem>
  <MenuItem value="Smart Textiles">Smart Textiles</MenuItem>
  <MenuItem value="Sustainable Environment">Sustainable Environment</MenuItem>
                                                             
 </TextField>
</div>



{/* FORTH DIVISION */}
<div className="col-12 divi">
<TextField
 className={classes.input}
 id="outlined-select-currency"
 onChange={changi}
 select
 value={initialinpvalue.Select_Technology_Bucket} 
 name="Select_Technology_Bucket" 
 label="Select Technology"
 variant="outlined"
 >
   
 <MenuItem value="IoT">IoT</MenuItem>
 <MenuItem value="Data Science">Data Science</MenuItem>
 <MenuItem value="Machine Learning">Machine Learning</MenuItem>
 <MenuItem value="Artificial Intelligence">Artificial Intelligence</MenuItem>
 <MenuItem value="Mechatronics">Mechatronics</MenuItem>
 <MenuItem value="Others">Others</MenuItem>                                
 
 </TextField>
</div>


{/* FIFTH DIVISION */}
<div className="col-12 divi">
 {/* textarea */}
 <textarea
 onChange={changi}
 name="description"
 placeholder="Description."
 className={classes.input}
 style={{backgroundColor:"transparent",border:"1px solid silver",borderRadius:"5px"}}
 value={initialinpvalue.description}
 helperText="Please select your currency" rows="3" className={classes.input} >
 </textarea>
</div>



{/* SIXTH DIVISION */}
<div className="col-12 mt-4 divi">
 {/* Add file */} 
 
 <input type="file" class="form-control-file border" name="file" onChange={(e)=>
 {
     changi(e);
    fileupda(e);
 }}

 className={classes.input}
 value={ initialinpvalue.file}
 style={{backgroundColor:"white"}}
 />


 <p style={{textAlign:"right",color:initialValidationMessage.color,display:initvisible}}>{initialValidationMessage.messages}</p>    



</div>


<Button className={classes.button} onClick={clicky} variant="contained">
 Submit
 </Button>











        </div>
        </div>

{/* you can write here next */}

        </div>

            </div>
         
        </div>
        </>
    )
}


