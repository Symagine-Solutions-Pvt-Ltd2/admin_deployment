import "../Style/GettingStarted.css"  ;  
import Button from "../Components/Button.js";
  

// frame 24 
function   GettingStarted() {
  return (
    
    
    <div className="OuterBox">
        <div className="InnerBox">

            
            <div className="logo-box" >  
            <div  className="logo"> 
            <div  className=""> logo picture </div> 
             <div> logo text </div>
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
                  
             <div  style= {{  height : "40%"  ,  paddingTop : "12%"  , backgroundColor : "red" }}>
              <Button  color= "blue"  width = "50%"     height =  "90%"    color1 = "green" className = "description2-button" name = {"Get Started"} />
            </div> 


            </div> 
            <div  className="illustrsation1"> 
                 illustaration 
            </div>
           </div>


        </div>  
     </div>
   
  );
}

export default GettingStarted; 