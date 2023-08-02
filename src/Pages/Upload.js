import "../Style/Upload.css" ;   

import Sidebar from "../Sidebar"  ;
import Button from "../Components/Button";



function Upload() {   
 
    return( 
       
        <div  className="upload"> 

         <div  className="upload-sidebar"> 
        <Sidebar /> 
        </div> 


        <div className ="upload-body"  >
           <div   className ="upload-body-div1"  >  
           
           <input type="text"
                            name="myname"
                           
                            className="upload-body-div1-input-box"
                            /> 
           </div> 
           <div className ="upload-body-div2"  >  
                
                <p>icon</p>
                <p>Add new file</p>
            </div>
           <div className ="upload-body-div3" >   
            <Button name="submit"   color= "#FCC046" width = "17%"     height =  "45%"    color1 = "white"  /> 
           </div>
        </div> 

        </div>

    ) ; 
} 

export default Upload ; 