import "./Student.css";
import React, { useState } from 'react';
import gmail from "./email.png";
const Student=()=>{ 

    const[action,setAction] =useState("sign-up");

    return(
       <div className="container" >

<div className="header">
  <div className="signup">{action}</div>
  <div className="underline"></div>
</div>

<div className="inputs">

<div className="input">{
    action==="log-in"?<div></div>: <input type="text" placeholder="Name"  />
    
    }
   
</div>
<div className="email">
   
    <input type="email" placeholder="Email id"/>
</div>
<div className="password">
    <input type="password" placeholder="Password"/>
    
</div>

</div>

<div className="forget">
    {
        action==="sign-up"?<div></div>: <div className="forget-password">Forget password?     <span>click here!</span></div> 
    }

   
   

</div>
<div className="submitcontainer">
<div onClick={()=>{setAction("sign-up")}} className={action==="log-in"?"submit gray":"submit"}>Sign-up</div>
<div  onClick={()=>{setAction("log-in")}} className={action==="sign-up"?"submit gray":"submit"}>Login</div>
    
</div>




       </div>

    )
}
export default Student;