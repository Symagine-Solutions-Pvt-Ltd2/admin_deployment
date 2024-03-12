
import React from 'react'; 
import "../Components/CoursePopup.css" ; 
import { useState  , useEffect} from "react";
import axios from "axios"  ;   



const CoursePopup = (  props ) => {
  
  //  const [  screenType , setScreenType ] =  useState( props.screenType ) ;  
   

  // console.log( props.data) ; 
   console.log( props.screenType) ; 

    
   
   const statusChange = ( )  => { 
   
 


    if(  props.screenType === "submit"  ){

               console.log( props.data._id)   ; 
                 
      axios({ 
      
        url : "https://learn-up.app/admin/course_cc"  ,   

        method : "POST"  ,  

        data : {
            
          "_id" : props.data._id  , 
          "condition" : "permanent" 
       
        }
  
       }).then( ( res) => {   
  
        console.log( res) ; 
        alert( res.data.message) ;  
        props.setTrigger( false ) ;
         
       } ).catch(( err) => { 
           console.log( "error") ;
  
        }  ) ; 

      } else if(  props.screenType === "delete"   ){


      axios({ 
      
        url : "https://learn-up.app/admin/course_cc"  ,   

        method : "POST"  ,  

        data : {
            
          "_id" : props.data._id  , 
          "condition" : "delete" 
       
        }
  
       }).then( ( res) => {   
  
        console.log( res) ; 
        alert( res.data.message) ;  
        props.setTrigger( false ) ;
         
       } ).catch(( err) => { 
           console.log( "error") ;
  
        }  ) ; 



      }else if(  props.screenType === "course_details_delete"   ){ 



    
   console.log( props.data) ; 
   
   if(  props.data.type_id === "business plan"){

         // alert( "in bplan") ; 
          axios({ 
          
            url : "https://learn-up.app/admin/all_bp_material_delete"  ,   
    
            method : "POST"  ,  
    
            data : {
                
            
               "course_name" : props.data.course_name  , 
               "bp_name" :  props.data.name
            }
      
           }).then( ( res) => {   
      
            console.log( res) ; 
            alert( res.data.message) ;  
            props.setTrigger( false ) ;
             
           } ).catch(( err) => { 
               console.log( "error") ;
      
            }  ) ; 
        
         }else if(  props.data.type_id === "module"   ||   props.data.type_id === "workshop"   ){
            
          
         // alert( "dele") ; 


          axios({ 
          
            url : "https://learn-up.app/admin/mwchng"  ,   
    
            method : "POST"  ,  
    
            data : {
                
              "_id":  props.data._id ,
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




      }




      





  switch( props.screenType){


  
  case "delete" : 
  return( props.trigger) ?( 

          <div className="popup" > 
          
            <div className="course_popup-inner"   style = {{ borderRadius : 20 }}  >  

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
 



  case "submit" :   
  return( props.trigger) ?( 

    <div className="popup" > 
    
      <div className="course_popup-inner"   style = {{ borderRadius : 20  }}  >  

            <div className="course_popup-inner-body1"> 

  
            
            </div> 

             <div  className="course_popup-inner-body2"   >
              

              <p className="course_popup_text">Do you really want to submit?</p> 

    
             </div>
         



             
             <div className="course_popup-inner-body3" > 



            <input className="course_popup-inner-body2-button"    style = {{ borderRadius : 15   , backgroundColor : "#B7B7D1" }}   
            type="button" value = "Cancel"  onClick={ () => {  props.setTrigger( false ) }  }  />  



            <input  className="course_popup-inner-body2-button"   style = {{ borderRadius : 15   , backgroundColor : "#2db92d" ,  color : "#FFF" }} 
            type="button" value = "Submit"   onClick={()  => {  statusChange( ) }  }  />   






            </div> 


      </div>

    </div> ): <div> </div> ;  


   
  case "course_details_delete" :  
  
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

}




export default CoursePopup  ;