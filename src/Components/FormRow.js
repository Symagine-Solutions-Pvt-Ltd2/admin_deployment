import  "../Style/FormRow.css"
import Sidebar from "../Sidebar.js"  ;  

  

// frame 24 
function   FormRow(   props ) {  

  console.log( props.level )  ; 
  return (
    <div className="FormRow">  
  
     <div className="Form-Description">
           <p>{ props.level}</p>
     </div> 
     <div className="Form-Input">
        <input  className="input-box"   /> 
     </div>
    </div>
  );
}

export default  FormRow; 