import {Link , useNavigate  , useLocation  } from "react-router-dom" ; 
import { useState  , useEffect } from "react"; 
import axios from "axios"  ;   
import login from "../Images/login.jpg"  ;  
import  "../Style/Login.css"  ;  


import PasswordPopup  from "../Components/PasswordPopup";




function ForgotPassword() {      
  
    
    const[ popup  , setPopup ] = useState( false); 
    const[ email   , setEmail ] = useState(  "") ;  
    const[ userId  , setUserId ] = useState(  ""); 
    const[ token   , setToken ] = useState(  "") ; 

    const  handleOtp = (   ) => {      
          

          
           
          axios({ 

            url : "https://learn-up.app/admin/emailotpsend"  ,  
            method : "POST"  , 
            data : {
              
              "email_id": email ,  
      
            }
      
           }).then( ( res) => {   
      
             
              console.log( res ) ;   
   
             if( res.data.status ===  "success"  ){
                
                setPopup( true)  ;
                setUserId( res.data.data.user_id ) ; 
                setToken( res.data.data.token) ;

             } else {

                alert( res.data.message ) ;  
             }
      
           } ).catch(( err) => { 
               //console.log( "error") ;
      
            }  ) ;  
      
      
         

   }   





    return( 

   <div  className="OuterBox"  style={{  backgroundImage : `url(${login })`,  backgroundSize : "contain"   , backgroundRepeat : "no-repeat"   , backgroundPosition : "center"}}  >   

      
<div   className="InnerBox-1"   >  

</div>
  

<div className="InnerBox-2"  style={{  display : "flex"  , alignItems :"center"  , justifyContent : "center"}}>   


    <div  style={{ width : "100%"   ,height : "35%"  , display : "flex" ,  flexDirection : "column"  , justifyContent : "space-around"}}>  


   
    <PasswordPopup   trigger= { popup   } setTrigger={ setPopup }      userId = { userId }  token ={ token  }    email = {email  }>
        
        </PasswordPopup>


    <input type="text"   style={{ width : "50%"  ,height : "20%"  , borderRadius : 25  ,   border : "1px solid #5E81F4"  , padding : "2%" }}   name="email"    placeholder="Enter your email id"    defaultValue={ email }  onChange={ (e )  => {  setEmail(  e.target.value )}}/> 

    <div   style={{ width : "50%"  ,height : "20%"  , display : "flex"  , justifyContent : "center"}} > 

    <input     style={{ width : "50%"  ,height : "100%" , borderRadius : 25   , backgroundColor : "#5E81F4"  , color : "#FFF"  ,  border : "0px solid red" }}      type="button" value = "Send OTP"    

       onClick={ () => {   handleOtp( )   } } 
    />  

    </div> 

   {/*  <div>  
        <p>For any login related problem contact system admin!</p> 
    </div>  */}
    </div>  


</div> 


   </div>


    )
} 



export default  ForgotPassword ; 