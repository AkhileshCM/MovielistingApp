import React, { useState } from 'react';
import "./Logincss.css"
import {TbPassword} from "react-icons/tb"
import {BiUser} from "react-icons/bi"
import { useNavigate } from 'react-router-dom';
function SignIn(props) {
    const [username,setusername]=useState("")
    const [password,setpassword]=useState("")
    const userinp=(e)=>{
        setusername(e.target.value)


    }
    const userpass=(e)=>{
        setpassword(e.target.value)

        
    }
    const navigate=useNavigate()
    const handle=()=>{
      
        if(username=="abcd" && password=="abcd"){
          
            navigate("/home")
            console.log("passed")
            localStorage.setItem("logged",true)
        }

    }


    











    return (
        
             <div class="grid">
              <div 
              style={{
                marginBottom:"30px"
              }}
              >
                <img
                style={{
                  height:"fit-content",
                  width:"50px"
                                 }}
                 src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRKUCZn_Zrur3DkJjCew60-RQxDpbasTlHrJ9TxUFdjZg&s'></img>
              </div>

<form   class="form login">

  <div class="form__field">
    <label for="login__username"><BiUser/></label>
    <input onChange={userinp} value="abcd" id="login__username" type="text" name="username" class="form__input" placeholder="Username" on required=""></input>
  </div>

  <div class="form__field">
    <label for="login__password"><TbPassword/></label>
    <input onChange={userpass} value="abcd" id="login__password" type="password" name="password" class="form__input" placeholder="Password" required=""></input>
  </div>

  <div class="form__field">
    <button style={{marginLeft:"150px",height:"40px"}} onClick={handle}>SignIn</button>
  </div>

</form>

<p class="text--center">Not a member? <a href="#">Sign up now</a> </p>

</div>

    
    );
}

export default SignIn;
