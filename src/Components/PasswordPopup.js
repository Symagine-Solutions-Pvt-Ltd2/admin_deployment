
import React from 'react'; 
import "../Components/PasswordPopup.css" ; 
import { useState  , useEffect} from "react";
import {Link , useNavigate  , useLocation} from "react-router-dom" ; 
import axios from "axios"  ;

 



const PasswordPopup= (  props ) => {
    

  const  navigate = useNavigate() ;   

  const [otp, setOtp] = useState("");
  const [minutes, setMinutes] = useState(2);
  const [seconds, setSeconds] = useState( 59);

 
  const userDetails  =  props.data ; 

  console.log( props.userId) ; 

  

   
    

  useEffect(() => {
    const interval = setInterval(() => {
      if (seconds > 0) {
        setSeconds(seconds - 1);
      }

      if (seconds === 0) {
        if (minutes === 0) {
          clearInterval(interval);
        } else {
          setSeconds(59);
          setMinutes(minutes - 1);
        }
      }
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  });





  const resendOTP = () => {
    setMinutes(2);
    setSeconds(59); 

   // console.log(  props.email) ;  
   // console.log(  props.token ) ;
     

   axios({ 

     url : "http://3.123.39.199:5000/admin/resendotp" , 
     method : "POST"  ,   

     headers: {   

      "token" :  props.token 
  
  }  ,
     data : {
       
      "email_id" : props.email 
     }

    }).then( ( res) => {   

      
     console.log( res ) ;
     alert(  res.data.message)   ;  
     
  

    } ).catch(( err) => { 
        console.log( "error") ;

     }  ) ;  

  };  


   



  const  validateOtp = (  ) => {      
          
    console.log(  otp) ;  
    console.log(  props.userId) ;  
    console.log(  props.email) ;  
    

   axios({ 

     url : "http://3.123.39.199:5000/admin/otpvalidate"  ,  
     method : "POST"  ,  

     data : {
       
      "otp" : otp  , 
      "_id" : props.userId 

     }

    }).then( ( res) => {   

      
     console.log( res) ;  
      

      if(  res.data.message === "OTP validation successful"){
         
        navigate(  "/password"  ,    { state: { userId : props.userId  , token : res.data.data.token }} ,  { replace : false}  )  ;
        
      }else{
        alert(  res.data.message) ; 
      }


    } ).catch(( err) => { 
        console.log( "error") ;

     }  ) ;  


  

}   

 





    return( props.trigger) ?( 

            <div className='passwordPopups'>
                 
               
                 <div className='passwordPopups_inner'>
           
                 <div  style= {{ height : "25%"   , display : "flex"  , alignItems :"center"  , justifyContent : "center"}}>
                 <p style= {{ color : "#FFF"   , fontWeight : 800}}  > Verify OTP</p>
                 </div> 
                  



                 <div style= {{ height : "25%" , width : "100%" ,  display : "flex"  , alignItems :"center"   , justifyContent : "center"}}  > 


     <input   style= {{ height : "70%"   , width : "80%"   , borderRadius : 15 }}   type="text"  placeholder='Enter OTP'  defaultValue = { otp }  onChange={  (  e)  => { setOtp(  e.target.value )}}   />
                
                 </div>  
 


       <div  style= {{ height : "25%"  ,  width : "80%"    , display : "flex"  , flexDirection : "row"  , justifyContent : "space-around"  , alignItems : "center" }} >
          
          
               {seconds > 0 || minutes > 0 ? (
            <p  style={{ color : "#FFF"}}>
              Time Remaining: {minutes < 10 ? `0${minutes}` : minutes}:
              {seconds < 10 ? `0${seconds}` : seconds}
            </p>
            ) : (
            <p style={{ color : "#FFF"}}>Didn't recieve code?</p>
          )}

          <button 
          disabled= {seconds > 0 || minutes > 0 }
            style={{ 
              color: seconds > 0 || minutes > 0 ? "#DFE3E8" : "#FF5630"  , borderRadius : 15  , width : "40%"  , height :  "50%"
            }} 
            onClick={ resendOTP }
          >
            Resend OTP
          </button>
           </div>

                 
           <div style= {{ height : "25%" ,  width : "100%" , display : "flex"  , alignItems :"center"   , justifyContent : "center"}}  > 


<input   style= {{ height : "70%"   , width : "40%"  , borderRadius : 15 }}   type="button" value = "Submit OTP"     onClick={ () => {  validateOtp() }} />

</div>  

            
               
                </div>  

            </div> ): <div> </div>; 


}

export default PasswordPopup  ;