import {Link , useNavigate  , useLocation} from "react-router-dom" ; 
import { useState } from "react";  
import Sidebar  from "../Sidebar" ;  
import "../Style/CreateContent.css"  ; 

function CreateContent() {    
      
  const location = useLocation(); 
  const  navigate = useNavigate() ;   
   

 
  //  states  for frame 53   




 //const [ typeId , setTypeId ] =  useState(location.state.typeId  ) ; 
 const [ typeId , setTypeId ] =  useState( "create_workshop" ) ; 



  const onTrigger = (  event  ) => { 
    

    console.log( typeId) ; 
    console.log("bhjgjgj") ; 
      
    navigate(  "/home/dashboard"  ,    { state: {    typeId : typeId  }} ,  { replace : false}  )   ;


    event.preventDefault();
  }





    switch( typeId )  { 


    case "system_admin" :  
    return( 


        <div className="form_outer_div">
   
        <div className="form_outer_div_sidebar" >
          <Sidebar /> 
        </div>   


        
         <div className="form_outer_div_body">  
    
         
         <form className="admin_form" onSubmit={onTrigger }    >    
    
             <div className="admin_form_row">
                         <div className="admin_Form-Description" >   
                        <p>Name of Program</p> 
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
                        <p> Select Course</p> 
                        </div>           
    
                        <div className="admin_Form-Input"  >     
    
                      <div  style={{  width : "87.46%" , height: "100%"  ,  display : "flex" , flexDirection :  "row" , justifyContent : "space-around" , alignItems : "center"}}>



                                <div style={ {  width : "25.87%"  , height : "35%" , backgroundColor : "pink" , borderRadius : "20px" ,  display: "flex"  , flexDirection : "row" ,  overflow : "hidden"}}>
      
                                <div style = {{  backgroundColor : "red" ,  width : "70%"  , justifyContent : "center" , display : "flex"  , alignItems : "center"}}>
                                       <p >Content Admin</p>   
                                 </div>


                                <div style={{ backgroundColor : "beige" , width : "30%" , display : "flex" ,   alignItems : "center" , justifyContent : "center"}}>
                                     <input   type="checkbox"  name="vall" />   
                                </div>

                                  </div>    


                                  <div style={ {  width : "25.87%"  , height : "35%" , backgroundColor : "pink" , borderRadius : "20px" ,  display: "flex"  , flexDirection : "row" ,  overflow : "hidden"}}>
      
                          <div style = {{  backgroundColor : "red" ,  width : "70%"  , justifyContent : "center" , display : "flex"  , alignItems : "center"}}>
                                           <p >Content Admin</p>   
                           </div>


                          <div style={{ backgroundColor : "beige" , width : "30%" , display : "flex" ,   alignItems : "center" , justifyContent : "center"}}>
                                           <input   type="checkbox"  name="vall" />   
                              </div>

                          </div>   
    




              
                             <div style={ {  width : "25.87%"  , height : "35%" , backgroundColor : "pink" , borderRadius : "20px" ,  display: "flex"  , flexDirection : "row" ,  overflow : "hidden"}}>
      
                             <div style = {{  backgroundColor : "red" ,  width : "70%"  , justifyContent : "center" , display : "flex"  , alignItems : "center"}}>
                             <p >Content Admin</p>   
                             </div>


                            <div style={{ backgroundColor : "beige" , width : "30%" , display : "flex" ,   alignItems : "center" , justifyContent : "center"}}>
                            <input   type="checkbox"  name="vall" />   
                          </div>
   
                    </div>   


    
                    </div> 

                    <div style={{  width : "12.54%" , height: "100%"  ,  display : "flex" , flexDirection :  "row" , justifyContent : "space-around" , alignItems : "center"  , backgroundColor : "red"}}  >
                  
                         <p> prev and next btn</p>

                      </div>
               
     </div>    
    </div> 
 

         
         
          <div className="admin_form_row"> 
    
                <div className="admin_Form-Description" >   
                 <p>Feedback to be given by</p> 
                </div>           
    
    
    
                <div className="admin_Form-Input"   style={ {  justifyContent : "space-around"}} >     
    
    
                <div  style={{  width : "87.46%" , height: "100%"  ,  display : "flex" , flexDirection :  "row" , justifyContent : "space-around" , alignItems : "center"}}>


                          <div style={ {  width : "25.87%"  , height : "35%" , backgroundColor : "pink" , borderRadius : "20px" ,  display: "flex"  , flexDirection : "row" ,  overflow : "hidden"}}>
                            
                            <div style = {{  backgroundColor : "red" ,  width : "70%"  , justifyContent : "center" , display : "flex"  , alignItems : "center"}}>
                              <p >Content Admin</p>   
                              </div>
    
    
                            <div style={{ backgroundColor : "beige" , width : "30%" , display : "flex" ,   alignItems : "center" , justifyContent : "center"}}>
                            <input   type="checkbox"
                                name="vall" />   
                             </div>
    
                          </div>   
    
    
                         
                          <div style={ {  width : "25.87%"  , height : "35%" , backgroundColor : "pink" , borderRadius : "20px" ,  display: "flex"  ,   flexDirection : "row"  , overflow : "hidden"}}>
                            
                            <div style = {{  backgroundColor : "red" ,  width : "70%"  , justifyContent : "center" , display : "flex"  , alignItems : "center"}}>
                              <p >Content Admin</p>   
                              </div>
    
    
                            <div style={{ backgroundColor : "beige" , width : "30%" , display : "flex" ,   alignItems : "center" , justifyContent : "center"}}>
                            <input   type="checkbox"
                                name="vall" />   
                             </div>
    
                          
    
                           </div> 


                           <div style={ {  width : "25.87%"  , height : "35%" , backgroundColor : "pink" , borderRadius : "20px" ,  display: "flex"  ,   flexDirection : "row"  , overflow : "hidden"}}>
                            
                            <div style = {{  backgroundColor : "red" ,  width : "70%"  , justifyContent : "center" , display : "flex"  , alignItems : "center"}}>
                              <p >Content Admin</p>   
                              </div>
    
    
                            <div style={{ backgroundColor : "beige" , width : "30%" , display : "flex" ,   alignItems : "center" , justifyContent : "center"}}>
                            <input   type="checkbox"
                                name="vall" />   
                             </div>
    
                          
    
                           </div> 





            </div>     

            <div style={{  width : "12.54%" , height: "100%"  ,  display : "flex" , flexDirection :  "row" , justifyContent : "space-around" , alignItems : "center"  , backgroundColor : "red"}}  >



            </div>
    
            </div> 
        </div>

                        <div  className="admin_form_row_btn_div"> 
                        <input className="admin_form_row_btn" type="submit" value="Submit" /> 
                        </div>
                      
                    </form>

    
    
         </div>
        
          </div>
    )   ; 

 


      case "create_module" :  
      return( 
  
  
          <div className="form_outer_div">
     
          <div className="form_outer_div_sidebar" >
            <Sidebar /> 
          </div>   
  
  
          
           <div className="form_outer_div_body"  style={{  alignItems: "center"}}>  
      
           <form className="course_body_inner_div" onSubmit={onTrigger }    >    
      
                 
                   
      <input type="text"
           
              placeholder="Enter module name"
              className="course_input-box"
              /> 
       
 
      
      <input type="text"
              placeholder="Enter subject name"
              className="course_input-box"  style={{ marginBottom : "4.5%"}}
              /> 
  
 
      
      <input className="course_form_row_btn" type="submit" value="Submit" /> 
      
    
 </form>
  
      
      
           </div>
          
            </div>
      )   ; 
    

      case "create_workshop" :  
      return( 
  
  
          <div className="form_outer_div">
     
          <div className="form_outer_div_sidebar" >
            <Sidebar /> 
          </div>   
  
  
          
           <div className="form_outer_div_body"  style={{  alignItems: "center"}}>  
      
           <form className="course_body_inner_div" onSubmit={onTrigger }    >    
      
                 
                   
      <input type="text"
           
              placeholder="Enter workshop name"
              className="course_input-box"
              /> 
       
 
      
      <input type="text"
              placeholder="Upload File"
              className="course_input-box"  style={{ marginBottom : "4.5%"}}
              /> 
  
 
      
      <input className="course_form_row_btn" type="submit" value="Submit" /> 
      
    
 </form>
  
      
      
           </div>
          
            </div>
      )   ; 
    


    

    case "program_admin" :  
    return(
   <div>
    <p>CreateContent</p>  
    
    
   </div>
    ) 


    case "content_admin" :  
    return(
   <div>
    <p>CreateContent</p>  
    
    
   </div>
    ) 

    }
} 

export default CreateContent;