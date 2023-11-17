
import React from 'react'; 
import "../Components/CoursePopup.css" ; 
import { useState  , useEffect} from "react";
import axios from "axios"  ;   



const CoursePopup = (  props ) => {
  
    const [  screenType , setScreenType ] =  useState( props.screenType ) ;  
   

   console.log( props.data) ; 
   console.log( props.screenType) ; 

 


  switch( props.screenType){


  
  case "delete" : 
  return( props.trigger) ?( 

          <div className="popup" > 
          
            <div className="popup-inner"   style = {{ borderRadius : 15  }}  >  

                  <div className="popup-inner-body1"> 

                   <button className="close-btn" onClick={ () => {  props.setTrigger( false ) }  }>close</button>   
                  
                  </div> 

                   <div  className="popup-inner-body2"   >
                    

                    <p>Delete this item? </p> 

          
                   </div>
               



                   
                   <div className="popup-inner-body3" > 



                  <input className="popup-inner-body2-button"    style = {{ borderRadius : 15   , backgroundColor : "#32CD32"  , color : "#FFF" }}   
                  type="button" value = "Cancel"   />  



                  <input  className="popup-inner-body2-button"   style = {{ borderRadius : 15   , backgroundColor : "#FCC046" ,  color : "#FFF" }} 
                  type="button" value = "Delete"   />   






                  </div> 


            </div>
    
          </div> ): <div> </div> ;  
 



  case "submit" :   
  return( props.trigger) ?( 

    <div className="popup" > 
    
      <div className="popup-inner"   style = {{ borderRadius : 15  }}  >  

            <div className="popup-inner-body1"> 

             <button className="close-btn" onClick={ () => {  props.setTrigger( false ) }  }>close</button>   
            
            </div> 

             <div  className="popup-inner-body2"   >
              

              <p>Do you really want to submit?</p> 

    
             </div>
         



             
             <div className="popup-inner-body3" > 



            <input className="popup-inner-body2-button"    style = {{ borderRadius : 15   , backgroundColor : "#32CD32"  , color : "#FFF" }}   
            type="button" value = "Cancel"   />  



            <input  className="popup-inner-body2-button"   style = {{ borderRadius : 15   , backgroundColor : "#FCC046" ,  color : "#FFF" }} 
            type="button" value = "Submit"   />   






            </div> 


      </div>

    </div> ): <div> </div> ;  





      

      



  } 




}

export default CoursePopup  ;