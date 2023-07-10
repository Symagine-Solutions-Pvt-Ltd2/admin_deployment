 import "./Style/Form.css"  ;  
import FormRow from "./Components/FormRow";
import Sidebar  from "./Sidebar";

  

// frame 24 
function   Form() {
  return (
    <div className="Form">  
    <div className="sidebar" >
      <Sidebar /> 
    </div> 
     <div className="body">
      <FormRow /> 
      <FormRow /> 
      <FormRow />  
      <FormRow /> 
      <FormRow /> 
     </div>
    </div>
  );
}

export default  Form; 