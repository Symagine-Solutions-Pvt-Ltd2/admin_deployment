
import React from 'react'; 
import "../Components/CoursePopup.css" ; 
import { useState  , useEffect} from "react";
import axios from "axios"  ;   



const MaterialsPopup = (  props ) =>{
    
  
   

  

    const statusChange = ( )  => { 
   

       
    
        //  console.log(  props.data.sub_type )   ; 
                        
   
     
          if(    props.data.sub_type === "quiz"){
             
       

            axios({ 
          
              url : "http://3.123.37.47:5000/admin/all_qd"  ,   
      
              method : "POST"  ,  
              headers: { 
                'Access-Control-Allow-Origin' : '*',
                'Access-Control-Allow-Methods':'GET,PUT,POST,DELETE,PATCH,OPTIONS',
              } , 
              data : {
                  
               "course_name"  :   props.data.course_name ,
               "workshop_name" : "" , 
               "module_name" : props.data.module_name , 
               "quiz_name": props.data.quiz_name  
             
              }
        
             }).then( ( res) => {   
        
              console.log( res) ; 
              alert( res.data.message) ;  
              props.setTrigger( false ) ;
               
             } ).catch(( err) => { 
                 console.log( "error") ;
        
              }  ) ; 


          }else {

          
          axios({ 
          
            url : "http://3.123.37.47:5000/admin/mschng"  ,   
    
            method : "POST"  ,  
            headers: { 
              'Access-Control-Allow-Origin' : '*',
              'Access-Control-Allow-Methods':'GET,PUT,POST,DELETE,PATCH,OPTIONS',
            } , 
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




          }
    



 
        return( props.trigger) ?( 
      
                <div className="popup" > 
                
                  <div className="course_popup-inner"   style = {{ borderRadius : 20  }}  >  
      
                        <div className="course_popup-inner-body1"> 
      
                     
                        
                        </div> 
      
                         <div  className="course_popup-inner-body2"   >
                          
      
                          <p className="course_popup_text" >Delete this item? </p> 
      
                
                         </div>
                     
      
      
      
                         
                         <div className="course_popup-inner-body3" > 
      
      
      
                        <input className="course_popup-inner-body2-button"    style = {{ borderRadius : 15   , backgroundColor : "#B7B7D1"   }}  
                           onClick={ () => {  props.setTrigger( false ) }  }
                        type="button" value = "Cancel"   />  
      
      
      
                        <input  className="course_popup-inner-body2-button"   style = {{ borderRadius : 15   , backgroundColor : "#de0a26" ,  color : "#FFF" }} 
                        type="button" value = "Delete"    onClick={()  => {  statusChange( ) }  }     />   
      
      
      
      
      
      
                        </div> 
      
      
                  </div>
          
                </div> ): <div> </div> ; 
           
 

  } 



export default MaterialsPopup  ;