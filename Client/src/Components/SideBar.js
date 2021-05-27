import Avatar from '@material-ui/core/Avatar';
import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import {NavLink} from "react-router-dom";
import {useDispatch,useSelector} from "react-redux";
import toggleAction from "../Redux/Toggle/toggleAction"
import ClearIcon from '@material-ui/icons/Clear';



const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    list:{
      textAlign:"center",
      marginTop:"25px",
      cursor:"pointer",
      height:"40px",
      display:"flex",
      alignItems:"center",
      position:"relative",
      justifyContent:"center",
      "&:hover": {
      backgroundColor: "#ff7a17",
      borderRadius:"6px",
    }

    },
    link:{
        color:"white",
        "&:hover": {
            color:"white",
            textDecoration:"none"
          }
    },
 
  }));
  

export default function SideBar() {
  const classes = useStyles();
  const getToggle = useSelector(state => state.getToggle)

  const dispatch = useDispatch();
  
  const cancelBar = () =>{
  dispatch(toggleAction(false))
  }


  const logout = () => {
    localStorage.setItem("login",false)
    window.location.reload()
    }

    return (
        <>
           
           <div className={`col-xs-3 col-md-3 d-md-block d-${ getToggle?"block":"none"}`} style={{height:'100vh',backgroundColor:"#171725",overflow:"auto",boxShadow:"2px 2px 2px 2px grey",width:"100%",top:"0",position:"sticky",zIndex:"3"}}>
{/* header */}
    <div style={{width:'100%',display:"flex",justifyContent:"center",placeItems:"center", gap: "12px",flexDirection:"column",boxSizing:"borderBox",padding:"20px",borderBottom:"1px solid rgba(255,255,255,0.3)"}}>
          <Avatar alt="Remy Sharp" src="https://material-ui.com/static/images/avatar/2.jpg" style={{height:"50px",width:"50px"}}/>
          <span style={{position:"absolute",top:"20px",right:"20px"}} className="d-md-none d-block"><ClearIcon  onClick={cancelBar} style={{color:"white",fontSize:"30px"}} /></span>
          <h4 style={{color:"white",textAlign:"center"}}>David Miller</h4>
    </div>

{/* main */}
<div style={{width:'100%',height:"70vh",display:"flex",justifyContent:"flex-start",placeItems:"flex-center", gap: "12px",flexDirection:"column",boxSizing:"borderBox",padding:"16px",overflowY:"auto"}}>

        <ul style={{color:"white"}}>
        <NavLink onClick={()=>{dispatch(toggleAction(false))}} className={classes.link} to="SubmitProblemStatements" activeClassName="dashLink"><li className={classes.list}>Submit Problem Statements</li></NavLink>
        <NavLink onClick={()=>{dispatch(toggleAction(false))}} className={classes.link} to="manageproblemstatements"  activeClassName="dashLink"><li className={classes.list}>Manage Problem Statements</li></NavLink>
        <NavLink onClick={()=>{dispatch(toggleAction(false))}} className={classes.link} to=""  activeClassName="dashLink"><li className={classes.list}>Connect with SIH</li></NavLink>
        <NavLink onClick={()=>{dispatch(toggleAction(false))}} className={classes.link} to=""  activeClassName="dashLink"><li className={classes.list}>Import/Export</li></NavLink>
        <NavLink onClick={()=>{dispatch(toggleAction(false))}} className={classes.link} to=""  activeClassName="dashLink"><li className={classes.list}>Github Repository</li></NavLink>
        </ul>

</div>
        <button className={classes.link} style={{position: 'absolute',left:"0",bottom:"0",backgroundColor:'#ff7a17',width:"100%",height:"60px"}} onClick={logout} acticeClassName="dashLink">Log-out</button>
</div>

 
        </>
    )
}