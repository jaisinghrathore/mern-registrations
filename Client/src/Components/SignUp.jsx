import React,{useState} from 'react';
import axios from 'axios';
import {Link,useHistory} from "react-router-dom";

export default function SignUp() {

  const history = useHistory();

    const[initData,updateData]=useState({
        username:"",
        password:"",
        email:"",
        phone:"",
        firstName:"",
        lastName:"",
        Organization_Name:"",
        designation:"",
        types:""
    });

    const[initialValidationMessage,updatedValidationMessage]= React.useState({
      messages:null,
      color:null,
      visibility:null
    })




    const savingData=(e)=>{
                    
        updateData({...initData,[e.target.name]:e.target.value});
}




    const submit=(e)=>{
    e.preventDefault();
    
   
    if(/^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/.test('988!90984')){
      console.log("this is True .");
    }else{console.log("This is False .")}
    

    if(initData.username.length>0 && initData.password.length>0 && initData.email.length>0 && initData.phone.length>0 && initData.firstName.length>0 && initData.lastName.length>0 && initData.Organization_Name.length>0 && initData.designation.length>0 && initData.types.length>0){

      if(/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(initData.email)){
        if(/^(?:(?:\+|0{0,2})91(\s*[\-]\s*)?|[0]?)?[789]\d{9}$/.test(initData.phone)){
          if(/^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/.test(initData.password)){




    new Promise(async(resolve, reject)=>{
         var result=await axios.post("http://localhost:8000/register",initData);
        result=JSON.stringify(result.data.keyValue)
        result && result.length>0 ? result=result.replace("{","").replace("}","").replace('"',"").replace('"',"").replace('"',"").replace('"',"") : result=null;
        result && result.length>0 ? updatedValidationMessage({initialValidationMessage,["message"]:`${result} already exist !`,["color"]:"red"}) : resolve();          
        
      }).then(()=>{
          updateData({...initData,["username"]:"",["password"]:"",["email"]:"",['phone']:"",["firstName"]:"",["lastName"]:"",["Organization_Name"]:"",["designation"]:"",["types"]:""})
      }).then(()=>{
      updatedValidationMessage({...initialValidationMessage,["message"]:"Registration Successfull !",["color"]:"green",["diaplay"]:"block"});
      }).then(()=>{
        setTimeout(() => {
          history.push("/login")          
        }, 600);
      })






      
    }else{
      updatedValidationMessage({...initialValidationMessage,["message"]:`Your password must be at least 8 characters & one special characters !`,["color"]:"red",["visibility"]:"visible"});
      setTimeout(function(){
        updatedValidationMessage({...initialValidationMessage,["message"]:"Incorrect Login Details !",["color"]:"red",["visibility"]:"hidden"});  
        },2000)
    }


  }else{
    updatedValidationMessage({...initialValidationMessage,["message"]:"Invalid Phone no. !",["color"]:"red",["visibility"]:"visible"});
    setTimeout(function(){
      updatedValidationMessage({...initialValidationMessage,["message"]:"Incorrect Login Details !",["color"]:"red",["visibility"]:"hidden"});  
      },800)
  }

    }else{
      updatedValidationMessage({...initialValidationMessage,["message"]:"Invalid Email !",["color"]:"red",["visibility"]:"visible"});
      setTimeout(function(){
        updatedValidationMessage({...initialValidationMessage,["message"]:"Incorrect Login Details !",["color"]:"red",["visibility"]:"hidden"});  
        },800)
    }

  }else{
      updatedValidationMessage({...initialValidationMessage,["message"]:"Registration Failed !",["color"]:"red",["visibility"]:"visible"});
      setTimeout(function(){
        updatedValidationMessage({...initialValidationMessage,["message"]:"Incorrect Login Details !",["color"]:"red",["visibility"]:"hidden"});  
        },800)
    }
 
  }
   return (
        <>
        <div>
             <div className="out">
      <div className="page" >
        
        <div className="page__wrapper">
          <div className="entry entry_bg">
            <div className="entry__wrap">
              <div className="entry__title">Register</div>
              <div className="entry__info">Let’s Sign up first for enter into This Website. Uh She Up!</div>
              <form className="entry__form">
                <div className="entry__fieldset">


                {/* FIRST NAME AND LAST NAME */}

                  <div className="entry__row">
                    <div className="entry__col">
                      <div className="field1 js-field">
                        <div className="field1__wrap"><input onChange={savingData} placeholder="First Name" className="field1__input js-field-input" type="text" name="firstName" value={initData.firstName}/></div>
                      </div>
                    </div>
                    <div className="entry__col">
                      <div className="field1 js-field">
                        <div className="field1__wrap"><input onChange={savingData} placeholder="Last Name" className="field1__input js-field-input" type="text" name="lastName"value={initData.lastName}/></div>
                      </div>
                    </div>
                  </div>
                  
                    {/* PHONE NUMBER */}
                  <div  className="field1 js-field">        
                  <div className="field1__wrap"><input onChange={savingData} placeholder="Phone Number" className="field1__input js-field-input" type="number" name="phone" value={initData.phone}/>
                  </div>
                  </div>

              
       {/* user NAME AND Email */}

       <div className="entry__row">
                    <div className="entry__col">
                      <div className="field1 js-field">
                        <div className="field1__wrap"><input onChange={savingData} placeholder="Email" className="field1__input js-field-input" type="email" name="email" value={initData.email}/></div>
                      </div>
                    </div>
                    <div className="entry__col">
                      <div className="field1 js-field">
                        <div className="field1__wrap"><input onChange={savingData} placeholder="Username" className="field1__input js-field-input" type="text" name="username" value={initData.username}/></div>
                      </div>
                    </div>
                  </div>

                  {/* PASSWORD */}
                  <div className="field1 field1_email js-field">
                    <div className="field1__wrap"><input onChange={savingData}  className="field1__input js-field-input" placeholder="password" type="password" name="password" value={initData.password}/>
                    </div>
                  </div>


              
       {/*Organization Name and Designation */}

       <div className="entry__row">
                    <div className="entry__col">
                      <div className="field1 js-field">
                        <div className="field1__wrap"><input onChange={savingData} placeholder="Organization" className="field1__input js-field-input" type="text" name="Organization_Name" value={initData.Organization_Name}/></div>
                      </div>
                    </div>
                    <div className="entry__col">
                      <div className="field1 js-field">
                        <div className="field1__wrap"><input onChange={savingData} placeholder="Designation" className="field1__input js-field-input" type="text" name="designation" value={initData.designation}/></div>
                      </div>
                    </div>
                  </div>




        
                    {/*  Type of organizations */}
                    <div className="field1  js-field">

                    <div className="field1__wrap">
                    <select name="types" onChange={savingData} style={{width:"100%",height:"48px",borderRadius:"10px",border:"1px solid #E2E2EA",color:"#696974"}} >
                    <option  disabled selected hidden>Type of organizations</option>
                    <option value="Central ministry">Central ministry</option>
                <option value="State_government">State government</option>
                <option value="PSU">PSU</option>
                <option value="Private_Organization">Private Organization</option>
                <option value="Others">Others</option>
                    </select>

                    </div>
                  </div>
                
               
                
                  
                  </div>
                <div className="entry__btns"><Link  to="/login" ><button className="entry__btn btn btn btn_big btn_gray" type="button">Login</button></Link><button className="entry__btn btn btn btn_big btn_blue" onClick={submit}>Get Started</button></div>
                <p style={{textAlign:"right",marginTop:"20px",color:initialValidationMessage.color,visibility:initialValidationMessage.visibility}}> {initialValidationMessage.message}</p>
              </form>
              <div className="entry__bottom"><Link className="entry__link" to="/login" >Alread have an account ? </Link></div>
            </div>
          </div>
        </div>
      </div>
    </div>
        </div>
        </>
    )
}
