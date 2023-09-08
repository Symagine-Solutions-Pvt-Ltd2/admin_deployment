import "../Style/AddNewAdmin.css" ;  
import Sidebar  from "../Sidebar" ; 
import { useState } from "react"; 

function AddNewAdmin() {  
   
  const [ name , setName ] = useState("hjhj");




 const onTrigger = (event) => {
  // Call the parent callback function
// props.parentCallback(event.target.myname.value);  

console.log( event.target.vall  ) ;  

  event.preventDefault();  




  
}


 
     console.log(  name )  ; 
    return(
      <div className="admin">
   
    <div className="admin_sidebar" >
      <Sidebar /> 
    </div> 
     <div className="admin_body">  

     
     <form className="admin_form" onSubmit={onTrigger }>    

                   <div className="admin_form_row">
                     <div className="admin_Form-Description" >   
                    <p>Name</p> 
                    </div>        
                    <div className="admin_Form-Input" >         
                    <input type="text"
                            name="myname"
                         
                            className="admin_input-box"
                            /> 
                    </div>  
                    </div> 
 

                   <div className="admin_form_row">
                     <div className="admin_Form-Description" >   
                    <p>Email id</p> 
                    </div>        
                    <div className="admin_Form-Input" >         
                    <input type="text"
                            name="myname"
                           
                            className="admin_input-box"
                            /> 
                    </div>  
                    </div> 


                    <div className="admin_form_row">
                     <div className="admin_Form-Description" >   
                    <p>Password</p> 
                    </div>        
                    <div className="admin_Form-Input" >         
                    <input type="text"
                            name="myname"
                          
                            className="admin_input-box"
                            /> 
                    </div>  
                    </div> 


                    <div className="admin_form_row">
                     <div className="admin_Form-Description" >   
                    <p>Repeat Password</p> 
                    </div>        
                    <div className="admin_Form-Input" >         
                    <input type="text"
                            name="myname"
                           
                            className="admin_input-box"
                            /> 
                    </div>  
                    </div> 


                    <div className="admin_form_row"> 

                     <div className="admin_Form-Description" >   
                    <p>Select Admin Type</p> 
                    </div>           



                    <div className="admin_Form-Input"  >     


                      <div  style= {{  width : "80%"  , height : "100%"   , backgroundColor : "bisque"   , display : "flex" , flexDirection : "column" , justifyContent : "space-around"  ,  alignItems : "start"  }}> 
                      <div style={ {  width : "20%"  , height : "35%" , backgroundColor : "pink" , borderRadius : "20px" ,  display: "flex"  , flexDirection : "row" ,  overflow : "hidden"}}>
                        
                        <div style = {{  backgroundColor : "red" ,  width : "70%"  , justifyContent : "center" , display : "flex"  , alignItems : "center"}}>
                          <p >Content Admin</p>   
                          </div>


                        <div style={{ backgroundColor : "beige" , width : "30%" , display : "flex" ,   alignItems : "center" , justifyContent : "center"}}>
                        <input   type="checkbox"
                            name="vall" />   
                         </div>

                      </div>   





                      <div style={ {  width : "20%"  , height : "35%" , backgroundColor : "pink"  , borderRadius : "20px"  ,  display: "flex"  , flexDirection : "row" , overflow : "hidden"}}>
                            
                      <div style = {{  backgroundColor : "red" ,  width : "70%"  , justifyContent : "center" , display : "flex"  , alignItems : "center"}}>
                           <p >Program Admin</p>  
                           </div> 


                           <div style={{ backgroundColor : "beige" , width : "30%" , display : "flex" ,   alignItems : "center" , justifyContent : "center"}}>
                        <input   type="checkbox"
                            name="vall" />   
                         </div>

                      </div>    



                      </div>
                    </div>    

                    </div>
                    <br></br><br></br>  
                    <div  className="admin_form_submit"> 
                    <input type="submit" value="Submit" /> 
                    </div>
                    <br></br><br></br>
                </form>


    {/*   <FormRow  onName= { nameHandler }  level= "Name" />   

     <p>   {name }  </p>
      <FormRow    level= "Email id"/> 
      <FormRow   level= "Password"/>  
      <FormRow  level= "Repeat Password"/> 
      <FormRow  level= "Select Admin Type"/>  */}  




     </div>
    
      </div>


    ) ;
} 


export default AddNewAdmin ; 