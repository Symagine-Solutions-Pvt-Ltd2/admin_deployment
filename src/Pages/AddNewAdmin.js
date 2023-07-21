import "../Style/AddNewAdmin.css" ;  
import Sidebar  from "../Sidebar" ; 
import  FormRow from "../Components/FormRow" ; 

function AddNewAdmin() {  
 

    return(
      <div className="admin">
   
    <div className="admin_sidebar" >
      <Sidebar /> 
    </div> 
     <div className="admin_body">
      <FormRow    level= "Name" /> 
      <FormRow    level= "Email id"/> 
      <FormRow   level= "Password"/>  
      <FormRow  level= "Repeat Password"/> 
      <FormRow  level= "Select Admin Type"/> 
     </div>
    
      </div>


    ) ;
} 


export default AddNewAdmin ; 