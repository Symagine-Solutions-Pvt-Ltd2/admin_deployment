


import React from 'react'; 
import "../Components/Popup.css" ; 
import { useState  , useEffect} from "react";
import axios from "axios"  ;   



const Popup = (  props ) => {
  
  const userDetails  =  props.data ; 

   console.log( props.data) ; 

   
   //console.log( props.data.type_id) ; 
  



   const statusChange = ( value )  => { 
   
   
   

    if(  userDetails.type_id === "client" ){
 
       
                 
                 
      axios({ 
      
        url : "http://localhost:8000/admin/scclient"  ,   

        method : "POST"  ,  

        data : {
          
          "_id" : userDetails._id , 
          "status" : value  , 
          "program_id" : userDetails.program_id
        }
  
       }).then( ( res) => {   
  
      //  console.log( res) ; 
        alert( res.data.message) ;   

        props.setTrigger( false ) ;
         
       } ).catch(( err) => { 
           console.log( "error") ;
  
        }  ) ;  


     // alert( value) ; 

    }  



    
   else if(  userDetails.type_id === "school" ){
 
       
                 
                 
     axios({ 
    
      url : "http://localhost:8000/admin/school_sc"  ,   

      method : "POST"  ,  

      data : {
        
        
           "_id" : userDetails._id , 
           "client_id" :  userDetails.client_id ,
                 "status" : value  ,
                  "program_id" :  userDetails.program_id 

      }

     }).then( ( res) => {   

      console.log( res) ; 
      alert( res.data.message) ;  
     props.setTrigger( false ) ;
       
     } ).catch(( err) => { 
         console.log( "error") ;

      }  ) ;  


    //alert( value) ; 

  } 
  else if(  userDetails.type_id === "facilitator" ){

                    
      axios({ 
    
      url : "http://localhost:8000/admin/facilitator_sc"  ,   

      method : "POST"  ,  

      data : {
        
        
           "_id" : userDetails._id , 
           "school_id" :  userDetails.school_id ,
                 "status" : value   

      }

     }).then( ( res) => {   

      console.log( res) ; 
      alert( res.data.message) ;  
     props.setTrigger( false ) ;
       
     } ).catch(( err) => { 
         console.log( "error") ;

      }  ) ;  

 // alert( value) ; 

  } 
  else if(   userDetails.type_id === "student"  ) {
   
     axios({ 
    
      url : "http://localhost:8000/admin/student_sc"  ,   

      method : "POST"  ,  

      data : {
        
        
           "_id" : userDetails._id , 
           "school_id" :  userDetails.school_id , 
           "program_id" :  userDetails.program_id , 
            "status" : value   

      }

     }).then( ( res) => {   

      console.log( res) ; 
      alert( res.data.message) ;  
     props.setTrigger( false ) ;
       
     } ).catch(( err) => { 
         console.log( "error") ;

      }  ) ;   

   //  alert( value) ; 

  

  }if(   userDetails.type_id === "content_admin"  ||  userDetails.type_id === "program_admin"  ){
    
   // alert(value) ; 
     

    axios({ 
    
      url : "http://localhost:8000/admin/scadmin"  ,   

      method : "POST"  ,  

      data : {
        
        
           "_id" : userDetails._id ,
            "status" : value   

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
          
            <div className="popup-inner"   style = {{ borderRadius : 15  }}  >  

                  <div className="popup-inner-body1"> 

                   <button className="close-btn" onClick={ () => {  props.setTrigger( false ) }  }>close</button>   
                  
                  </div> 

                   <div  className="popup-inner-body2"   >
                    

                    <p> Do you want to change the status of </p> 

                     { props.children}

          
                   </div>
               



                   
                   <div className="popup-inner-body3" > 



                  <input className="popup-inner-body2-button"    style = {{ borderRadius : 15   , backgroundColor : "#32CD32"  , color : "#FFF" }}   
                   onClick={()  => {  statusChange( "active") }}
                  type="button" value = "Active"   />  



                  <input  className="popup-inner-body2-button"   style = {{ borderRadius : 15   , backgroundColor : "#FCC046" ,  color : "#FFF" }} 
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