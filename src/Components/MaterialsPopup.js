
import React from 'react'; 
import "../Components/CoursePopup.css" ; 
import { useState  , useEffect} from "react";
import axios from "axios"  ;   



const MaterialsPopup = (  props ) =>{
    
  
   

  

    const statusChange = ( )  => { 
   

       
    
          console.log( props.data)   ; 
                      


         axios({ 
          
            url : "http://3.123.37.47:5000/admin/mschng"  ,   
    
            method : "POST"  ,  
    
            data : {
                
              "_id" : props.data._id  , 
              "status": "delete" 
           
            }
      
           }).then( ( res) => {   
      
            console.log( res) ; 
            alert( res.data.message) ;  
            props.setTrigger( false ) ;
             
           } ).catch(( err) => { 
               console.log( "error") ;
      
            }  ) ; 
     
              
          }
    



 
        return( props.trigger) ?( 
      
                <div className="popup" > 
                
                  <div className="course_popup-inner"   style = {{ borderRadius : 15  }}  >  
      
                        <div className="course_popup-inner-body1"> 
      
                         <button className="close-btn" onClick={ () => {  props.setTrigger( false ) }  }>close</button>   
                        
                        </div> 
      
                         <div  className="course_popup-inner-body2"   >
                          
      
                          <p className="course_popup_text" >Delete this item? </p> 
      
                
                         </div>
                     
      
      
      
                         
                         <div className="course_popup-inner-body3" > 
      
      
      
                        <input className="course_popup-inner-body2-button"    style = {{ borderRadius : 15   , backgroundColor : "#B7B7D1"  , color : "#FFF" }}  
                           onClick={ () => {  props.setTrigger( false ) }  }
                        type="button" value = "Cancel"   />  
      
      
      
                        <input  className="course_popup-inner-body2-button"   style = {{ borderRadius : 15   , backgroundColor : "#B7B7D1" ,  color : "#FFF" }} 
                        type="button" value = "Delete"    onClick={()  => {  statusChange( ) }  }     />   
      
      
      
      
      
      
                        </div> 
      
      
                  </div>
          
                </div> ): <div> </div> ; 
           
 

  } 



export default MaterialsPopup  ;