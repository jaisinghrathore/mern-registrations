import React from 'react';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Side from "./SideBar";
import axios from "axios";
import Nav from "./Nav";



const useStyles = makeStyles({
    table: {
      minWidth: 700,
    },
  });
  
export default function SideBar() {
  const classes = useStyles();

  const[initialDetails,updatedDetails]=React.useState([]);

  React.useEffect(()=>{

    axios.get("http://localhost:8000/datas").then((result)=>{
            updatedDetails(result.data);
    
           })
        },[])
    
    
    

    return (
        <>    
        <div className="container-fluid">
<div className="row">




<Side></Side>



<div className="col-xs-9 col-md-9 col-sm-12 p-0">
<Nav/>
<h3 style={{textAlign: "center",margin:"20px 0"}} >Manage Problem Statements</h3>
<div style={{width:"100%",overflow:"auto"}}>
<table class="table table-striped">
<thead>
  <tr>
    <>
    <th style={{textAlign:"left",paddingLeft:"20px"}}>Title</th>
    <th style={{textAlign:"left",}}>youtube</th>
    <th style={{textAlign:"left",}}>Select_Domain_Bucket</th>
    <th style={{textAlign:"left",}}>Select_Technology_Bucket</th>
    <th style={{textAlign:"left",}}>description</th>
    <th style={{textAlign:"left",}}>file</th>
    </>
  </tr>
</thead>
<tbody>

{
  initialDetails && initialDetails.length>1 && Array.isArray(initialDetails) ?
initialDetails.map((row)=>(
<>
  <tr>
    <td data-toggle="tooltip" title="scroll right to see more!"><div class="barrr" style={{width:"180px",height:'30px',overflow:'scroll',cursor:"pointer",whiteSpace:"nowrap",textAlign:"left",paddingLeft:"20px"}}>{row.title}</div></td>
    <td data-toggle="tooltip" title="scroll right to see more!"><div class="barrr" style={{width:"180px",height:'30px',overflow:'scroll',cursor:"pointer",whiteSpace:"nowrap",textAlign:"left",paddingLeft:"20px"}}>{row.youtube}</div></td>
    <td data-toggle="tooltip" title="scroll right to see more!"><div class="barrr" style={{width:"180px",height:'30px',overflow:'scroll',cursor:"pointer",whiteSpace:"nowrap",textAlign:"left",paddingLeft:"20px"}}>{row.Select_Domain_Bucket}</div></td> 
    <td data-toggle="tooltip" title="scroll right to see more!"><div class="barrr" style={{width:"180px",height:'30px',overflow:'scroll',cursor:"pointer",whiteSpace:"nowrap",textAlign:"left",paddingLeft:"20px"}}>{row.Select_Technology_Bucket}</div></td>
    <td data-toggle="tooltip" title="scroll right to see more!"><div class="barrr" style={{width:"180px",height:'30px',overflow:'scroll',cursor:"pointer",whiteSpace:"nowrap",textAlign:"left",paddingLeft:"20px"}}>{row.description}</div></td>
    <td data-toggle="tooltip" title="scroll right to see more!"><div class="barrr" style={{width:"180px",height:'30px',overflow:'scroll',cursor:"pointer",whiteSpace:"nowrap",textAlign:"left",paddingLeft:"20px"}}>{row.file}</div></td> 
 </tr>
</>

))

:

<h4 style={{textAlign:"center"}} >"no Items"</h4>

}
 
</tbody>
</table>



   </div>

  {/* <div className="col-8">

  <div style={{width:"300px",height:"300px",backgroundColor:"green"}} >

    <div style={{width:"200px",height:"200px",backgroundColor:"red",transform:"rotate(180deg)",perspective:"890px"}} >

    </div>


  </div>


  </div> */}

</div>  
</div> 
 



</div>
          


        </>
    )
}


