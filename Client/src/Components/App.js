import React from 'react';
import SignUp from "./SignUp";
import Login from "./Login";
import {Switch,Redirect,Route} from "react-router-dom"
import Datas from "./Datas"
import store from "../Redux/store";



import SubmitProblemStatements from "./SubmitProblemStatements"


const App=()=>{


    store.subscribe(() => {
        localStorage.setItem("redux",JSON.stringify(store.getState()))
    })
     
  
 var logval=JSON.parse(localStorage.getItem("login"));

var val = logval;



return (
<>



{
    val && val==true ?

<Switch>
<Route exact path="/manageproblemstatements" component={Datas}></Route>
<Route exact path="/SubmitProblemStatements" component={SubmitProblemStatements}></Route>
<Redirect to="/SubmitProblemStatements" />
</Switch> 



:


<Switch>
<Route exact path="/" component={SignUp}></Route>
<Route exact path="/registration" component={SignUp}></Route>
<Route exact path="/login" component={Login}></Route>
<Redirect to="/login" />
</Switch>


}







</>
    )   
}
export default App;