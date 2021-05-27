import axios from "axios";
import React from 'react';
import ReCAPTCHA from "react-google-recaptcha";
import {useHistory,Link} from "react-router-dom";


export default function Login() {



  const history=useHistory();

    const[initialinputValue,updatedInputValue]=React.useState({
        username:"",
        password:"",
    });
    
    const[initialValidationMessage,updatedValidationMessage]= React.useState({
        messages:null,
        color:null
      })

      const[recaptchaKey,updateRecaptchaKey]= React.useState(null)
      


    const changi=(e)=>{
        updatedInputValue({...initialinputValue,[e.target.name]:e.target.value})
    }
    
    const submit = async(e) =>{
        e.preventDefault();

            const result=await axios.post("http://localhost:8000/login",initialinputValue);

          if(result.data==='successfull' && recaptchaKey && recaptchaKey.length>=1){
          // dispatch(loginsession(true));
          localStorage.setItem("login",true)
          window.location.reload();

           }else{
            updatedValidationMessage({initialValidationMessage,["message"]:"Incorrect Login Details !",["color"]:"red"});
            setTimeout(function(){
            window.location.reload();
            },800)
           }
}

 
function onChange(value) {
    updateRecaptchaKey(value);
  }
       return (
        <>


<div className="out">
      <div className="page" >
        <div className="page__wrapper">
          <div className="entry">
            <div className="entry__wrap">
              <div className="entry__title">Sign-in</div>
              <div className="entry__info">Just sign in if you have an account in here. Enjoy our Website.</div>
              <form className="entry__form">
                <div className="entry__group">
                  <div className="field1 js-field">
                    <div className="field1__wrap"><input onChange={changi} value={initialinputValue.username} placeholder="EnterUsername" className="field1__input js-field-input" type="text" name="username"/></div>
                  </div>
                  <div className="field1 field1_icon js-field">
                    <div className="field1__wrap"><input onChange={changi} value={initialinputValue.password} placeholder="Enter Password" className="field1__input js-field-input" type="password" name="password"/></div>
                  </div>
                  <ReCAPTCHA
    sitekey="6Lf_g9caAAAAAHYXwhng66BrhBpJyiDVFs7s_3Pk"
    onChange={onChange}
  />
              </div>
              <div className="entry__line"><button className="entry__btn btn btn btn_big btn_wide btn_blue" onClick={submit}>Login</button></div>
              <p style={{textAlign:"right",marginTop:"20px",color:initialValidationMessage.color}}> {initialValidationMessage.message}</p>
              <div className="entry__bottom"><Link className="entry__link" to="/" >Create an account!</Link></div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>


        </>
    )
}
