import {Link, useNavigate } from "react-router-dom"  ;  
import "../Style/Login.css"  ;   
import Button from "../Components/Button";



function Login() {
  return (
    <div  className="OuterBox">  
    <div   className="InnerBox-1"> 
    <p> Login at first   </p> 
    </div>

    <div className="InnerBox-2">  
     
     <div  className="description1_login"> 
      <p  className="description1-text"> Welcome on board !</p>
     </div>  

      <div className="input_text1"> 
      <input  className="input_box_text" placeholder="Enter your email or user id" /> 
      </div> 

      <div className="input_text2"> 
      <input  className="input_box_text" placeholder="Enter your password" /> 
      </div>
      

      <div> 
        <p> </p>
      </div>

      <div className="button">
        <p> yiuyi</p>
     </div>
    </div>
  
       
    </div>
  );
}

export default Login ;