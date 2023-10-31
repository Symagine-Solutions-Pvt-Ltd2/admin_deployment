import "../Style/GettingStarted.css"  ;  
import Button from "../Components/Button.js"; 
import {Link , useNavigate } from "react-router-dom" ; 


import   getStarted from "../Images/getStarted.jpg"  ;  
import logo from "../Images/logo.png"  ; 
  

// frame 24 
function   GettingStarted() {    

  const  navigate = useNavigate() ; 

  const goToApp  = () => {
    
   navigate(  "/login"  ,   { replace : false}  )  ; 
   alert( "hi")  ;
   }   






  return (
    
    
    <div className="OuterBox"   style={ {  backgroundColor : "#FFF8EE"}} > 

        <div className="InnerBox">

            
            <div className="logo-box" >  
                 <div  className="logo-picture-text" > 
 
                 <img src={ logo }  alt= { "ccv"}  height={"100%"}  />  

      <p style= {{ width: "75%" , height: "80%"  , fontWeight : "700" }}>Learn Up</p>

                 </div>  
              
                 
            </div>
            
            <div  className="description1" >

            <p  className="Description1Text"> Get Things Done With Future Founders</p>
            </div>  
  
           
           <div  className="description2">
            
            <div  className="description2-box"> 

            <p className="description2-text" >
            In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content.
            </p>
                   




             <div  onClick={() => { goToApp() }}  style= {{  height : "40%"  , display : "flex"  , alignItems : "flex-end", backgroundColor : "#FFF8EE"  , borderRadius: "18px" }}> 



              <Button   color= "#5E81F4"  width = "71.97%"     height =  "62.24%"    color1 = "white"  name =  "Get Started"  /> 
              
            </div>  


            
            </div>   



            <div  className="illustrsation1"> 
              

            <img src={ getStarted}  alt= { "lfd"}   width={ "100%"}  height = { "100%"}  /> 
            </div>
           </div>


        </div>  
     </div>
   
  );
}

export default GettingStarted; 