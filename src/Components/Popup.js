


import React from 'react'; 
import "../Components/Popup.css" ; 
import { useState  , useEffect} from "react";
import axios from "axios"  ;  
import CloseIcon from '@mui/icons-material/Close'; 



const Popup = (  props ) => {
  
  const userDetails  =  props.data ; 

   //console.log( props.data) ; 

   
   ////console.log( props.data.type_id) ; 
  



   const statusChange = ( value )  => { 
   
   
   

    if(  userDetails.type_id === "client" ){
 
       
                 
                 
      axios({ 
      
        url : "https://learn-up.app/admin/scclient"  ,   

        method : "POST"  ,  

        data : {
          
          "_id" : userDetails._id , 
          "status" : value  , 
          "program_id" : userDetails.program_id
        }
  
       }).then( ( res) => {   
  
      //  //console.log( res) ; 
        alert( res.data.message) ;   

        props.setTrigger( false ) ;
         
       } ).catch(( err) => { 
           //console.log( "error") ;
  
        }  ) ;  


     // alert( value) ; 

    }  



    
   else if(  userDetails.type_id === "school" ){
 
       
                 
                 
     axios({ 
    
      url : "https://learn-up.app/admin/school_sc"  ,   

      method : "POST"  ,  

      data : {
        
        
           "_id" : userDetails._id , 
           "client_id" :  userDetails.client_id ,
                 "status" : value  ,
                  "program_id" :  userDetails.program_id 

      }

     }).then( ( res) => {   

      //console.log( res) ; 
      alert( res.data.message) ;  
     props.setTrigger( false ) ;
       
     } ).catch(( err) => { 
         //console.log( "error") ;

      }  ) ;  


    //alert( value) ; 

  } 
  else if(  userDetails.type_id === "facilitator" ){

                    
      axios({ 
    
      url : "https://learn-up.app/admin/facilitator_sc"  ,   

      method : "POST"  ,  

      data : {
        
        
           "_id" : userDetails._id , 
           "school_id" :  userDetails.school_id ,
                 "status" : value   

      }

     }).then( ( res) => {   

      //console.log( res) ; 
      alert( res.data.message) ;  
     props.setTrigger( false ) ;
       
     } ).catch(( err) => { 
         //console.log( "error") ;

      }  ) ;  

 // alert( value) ; 

  } 
  else if(   userDetails.type_id === "student"  ) {
   
     axios({ 
    
      url : "https://learn-up.app/admin/student_sc"  ,   

      method : "POST"  ,  

      data : {
        
        
           "_id" : userDetails._id , 
           "school_id" :  userDetails.school_id , 
           "program_id" :  userDetails.program_id , 
            "status" : value   

      }

     }).then( ( res) => {   

      //console.log( res) ; 
      alert( res.data.message) ;  
     props.setTrigger( false ) ;
       
     } ).catch(( err) => { 
         //console.log( "error") ;

      }  ) ;   

   //  alert( value) ; 

  

  }if(   userDetails.type_id === "content_admin"  ||  userDetails.type_id === "program_admin"  ){
    
   // alert(value) ; 
     

    axios({ 
    
      url : "https://learn-up.app/admin/scadmin"  ,   

      method : "POST"  ,  

      data : {
        
        
           "_id" : userDetails._id ,
            "status" : value   

      }

     }).then( ( res) => {   

      //console.log( res) ; 
      alert( res.data.message) ;  
     props.setTrigger( false ) ;
       
     } ).catch(( err) => { 
         //console.log( "error") ;

      }  ) ;   



  }


   }
 













  return( props.trigger) ?( 

          <div className="popup" > 
          
            <div className="popup-inner"   style = {{ borderRadius : 20  }}  >  

                  <div className="popup-inner-body1"> 

                   <button className="close-btnn"   style={{ backgroundColor : "#353B55"}}  onClick={ () => {  props.setTrigger( false ) }  }>
                   <CloseIcon  sx={{ color: "#FFFFFF"  , fontSize : 35   }}/>
                    </button>   
                  
                  </div> 

                   <div  className="popup-inner-body2"   >
                    

                    <p> Do you want to change the status of </p> 

                     <p>{ props.children}</p>

          
                   </div>
               



                   
                   <div className="popup-inner-body3" > 



                  <input className="popup-inner-body2-button"    style = {{ borderRadius : 15   , backgroundColor : "#B7B7D1" }}   
                   onClick={()  => {  statusChange( "active") }}
                  type="button" value = "Active"   />  



                  <input  className="popup-inner-body2-button"   style = {{ borderRadius : 15   , backgroundColor : "#B7B7D1" }} 
                     onClick={()  => {  statusChange( "inactive") }}
                  type="button" value = "Inactive"   />   



                  <input  className="popup-inner-body2-button"    style = {{ borderRadius : 15  , backgroundColor : "#de0a26"  ,  color : "#FFF"  }}  
                        onClick={()  => {  statusChange( "delete") }}
                  type="button" value = "Delete"   />  



                  </div> 


            </div>
    
          </div> ): <div> </div> ; 


}

export default Popup  ;