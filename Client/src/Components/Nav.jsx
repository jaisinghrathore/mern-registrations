import React from 'react'
import img from "../img/airbnb.png"
import MenuIcon from '@material-ui/icons/Menu';
import {useDispatch} from "react-redux";
import toggleAction from "../Redux/Toggle/toggleAction"


export default function Nav() {

    const[initToggle,updaToggle]=React.useState(false);

    const dispatch = useDispatch();

const toggle = () => {
    dispatch(toggleAction(true))

}


    return (
        <>
<nav class="navbar navbar-expand navbar-dark p-0 " style={{backgroundColor:"white",boxShadow:"4px 0px 0px 0px grey inset",height:"70px",overflow:"hidden"}} >

<MenuIcon style={{marginLeft:"20px",fontSize:"30px"}} className="d-md-none d-block" onClick={toggle} />

  <ul class="navbar-nav ml-auto">
      <img src={img} width="80px" height="80px" style={{marginTop:"10px"}}></img>
  </ul>
</nav>




        </>
    )
}
