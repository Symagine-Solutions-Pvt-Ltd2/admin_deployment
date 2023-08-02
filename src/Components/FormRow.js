import  "../Style/FormRow.css"
import Sidebar from "../Sidebar.js"  ;  
import { useState } from "react";
  

// frame 24 
function   FormRow(   props ) {  
  const [ value , setValue ] = useState("");
    

  
  
  const onChangeHandler1  = ( event ) => { 

     props.onName(event.target.myname.value);
     event.preventDefault(); 


 }


  console.log( props.level )  ; 
  return (
    <div className="FormRow">  
  
     <div className="Form-Description">
           <p>{ props.level}</p>
     </div> 
     <div className="Form-Input">
        <input  type="text" className="input-box"  name="myname"   onChange={ onChangeHandler1 }  /> 
     </div>
    </div>
  );
}

export default  FormRow; 