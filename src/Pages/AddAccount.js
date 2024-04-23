import { useState   , useEffect } from "react"; 
import Sidebar  from "../Sidebar" ;   
import {Link , useNavigate  , useLocation} from "react-router-dom" ; 
import "../Style/AddAccount.css" ;
import axios from "axios"  ;  





function AddAccount() {     
    
    // const [ name , setName ]   = useState( location.state.name  ) ; 
    const location = useLocation();
   // const [ typeId , setTypeId ] =  useState(  ) ;   
   const [  typeId  , setTypeId ]   = useState( location.state.typeId   ) ;    
   const [  type  , setType ]   = useState( location.state.type   ) ;  
   const [  moduleDetail  , setModuleDetail ]   = useState( null  ) ;  
     // to select the admin type
const [  admin ,   setAdmin  ]   = useState( "" ) ; 

 
   //console.log( location.state.typeId  ) ; 
  
  //console.log( location.state.type) ; 
  
  //console.log( location.state.programId ) ; 

  //console.log( location.state.programName ) ;  

  //console.log( location.state.schoolId ) ;   



  //console.log("add account ") ;  
 // //console.log(  admin   )   ;

 useEffect(() => { 
    

        if(   location.state.typeId  === "system_admin_student" ){
          
                //console.log("hjgj") ; 
        
        axios({ 
  
         url : "https://learn-up.app/admin/motc"  ,   
         
         method : "POST"  , 
         data : {
           
                "program_id" : location.state.programId , 
                "student_id" : location.state.schoolId
         }
  
        }).then( ( res) => {   
  
  
          //console.log(  res.data.data ) ;  
          setModuleDetail(   res.data.data  ) ; 
           
         //  //console.log(   res.data.data[1].name )  ;
  
        } ).catch(( err) => {  
            //console.log( "error") ;
  
         }  ) ;  

        }  
    } , [])   ; 
    
  


   
    const  navigate = useNavigate() ; 
 
    
     // to keep track of the program 
     const [ assignedProgram ,   setAssignedProgram  ]   = useState( location.state.programName) ;     
     // to keep track of the client name 
     const [ client ,   setClient   ]   = useState( location.state.client_name ) ;   
     
     



        // to add new client in the database 
       const  addClient   = (  event  ) => { 
    

        /*       
        //console.log( event.target.name.value) ;   
        //console.log( event.target.email.value) ;    
        //console.log( event.target.password.value) ;    
        //console.log( event.target.repeat_password.value) ;    
        //console.log( event.target.contact_person.value) ;    
        //console.log( event.target.student.value) ;  
        //console.log( assignedProgram ) ;   
        //console.log(  location.state.type    )   ; 
*/
  

       event.target.sbtn.disabled = true ; 


      
            setTimeout(() => {
  //console.log("After two second") ;
  //console.log( event.target.sbtn.disabled) ;
  event.target.sbtn.disabled =  false;
}, 3000) 


       
        if(  event.target.password.value !== event.target.repeat_password.value  ) {
         
                alert( "Please check password again!") ;  
               
        }
        else {
      
              axios({ 
      
                      url : "https://learn-up.app/admin/c_registration"  ,   
      
                      method : "POST"  , 
                      data : {
                        
                              "client_name" : event.target.name.value  , 
                              "email_id" : event.target.email.value , 
                              "password"  :  event.target.password.value   , 
                              "type_id" :  "client" , 
                              "contact_person" : event.target.contact_person.value, 
                              "students_assign" :  event.target.student.value , 
                              "program_id" :  location.state.programId  ,
                      }
                
                     }).then( ( res) => {   
                
                        if(   res.data.message ===  "Registered Successfully."    ){
                         
                          alert( "Registered Successfully.")  ;   
                           
                          //console.log( type) ; 
                          navigate(  "/home/dashboard/client"   ,    { state:    {  typeId :  type    ,  programName : assignedProgram  , programId :  location.state.programId  , userInfo :  location.state.userInfo } }     ,   { replace : false}  )   ; 

                        } 
                        else {
                
                          alert(   res.data.message  )  ;
                        }
                       
                     } ).catch(( err) => { 
                         //console.log( "error") ;
                
                      }  ) ;  
            
                 
      
            }
      
            event.preventDefault();

    }
    




      // to add new facilitator in the database 
    const addFacilitator  = (  event  ) => { 
       


      //console.log( event.target.name.value) ;   
      //console.log( event.target.email.value) ;    
      //console.log( event.target.password.value) ;    
      //console.log( event.target.reset_password.value) ;    
      

      if(  event.target.password.value !== event.target.reset_password.value  ) {
         
          alert( "Password  mismatched!") ;  
         
      } else {

        axios({ 

                url : "https://learn-up.app/facilitator/f_registration"  ,   

                method : "POST"  , 
                data : {
                  
                        "facilitator_name"  :  event.target.name.value  , 
                        "email_id" :  event.target.email.value  , 
                        "password"  : event.target.password.value  , 
                        "type_id" : "facilitator" ,  
                        "program_id" : location.state.programId,  
                        "school_id" : location.state.schoolId 
                }
          
               }).then( ( res) => {   
          
                  if(   res.data.message ===  "Registered Successfully."    ){
                   
                    alert( "Registered Successfully.")  ;  


                    navigate(  "/home/dashboard/client/facilitator"   ,    { state: {    typeId :    "facilitator_with_add_account"    ,   schoolId : location.state.schoolId    ,  programId : location.state.programId   , userInfo :  location.state.userInfo }}    , { replace : false}  )   ;
                  } 
                  else {
          
                    alert(   res.data.message  )  ;
                  }
                 
               } ).catch(( err) => { 
                   //console.log( "error") ;
          
                }  ) ;  
      
           

      }

      event.preventDefault();
    }
  
   




  
 



    // to add new school in the database 
    const addSchool = ( event)  => { 
    

      
      //console.log( event.target.name.value) ;   
      //console.log( event.target.email.value) ;    
      //console.log( event.target.password.value) ;    
      //console.log( event.target.repeat_password.value) ;    
      //console.log( event.target.contact_person.value) ;    
      

      if(  event.target.password.value !== event.target.repeat_password.value  ) {
         
        alert( "Please check password again!") ;   

       
       } else {

        axios({ 

              url : "https://learn-up.app/admin/s_registration"  ,   

              method : "POST"  ,  

              data : {
                
                "school_name" : event.target.name.value ,
                "email_id" : event.target.email.value , 
                "password" : event.target.password.value ,
                 "type_id" : "school"  ,
                 "contact_person" :   event.target.contact_person.value  ,
                 "program_id" : location.state.programId   , 
                 "client_id" :  location.state.clientId , 
                     
               
              }
        
             }).then( ( res) => {   
        
                if(   res.data.message ===  "Registered Successfully."    ){
                 
                  alert( "Registered Successfully.")  ;  


                   navigate(  "/home/dashboard/client/school"   ,   { state: {    typeId :    "system_admin"   ,  clientId : location.state.clientId   ,  programId : location.state.programId   , programName : location.state.programName   , userInfo :  location.state.userInfo    }}     ,      { replace : false}  )   ;
    
                } 
                else {
        
                  alert(   res.data.message  )  ;
                }
               
             } ).catch(( err) => { 
                 //console.log( "error") ;
        
              }  ) ;  
    
         

        }

     

        event.preventDefault() ; 
      } 

       





        // to add new admin in the database 
      const addAdmin = ( event)  => { 
      
       
        
      
      //console.log( event.target.name.value) ;   
      //console.log( event.target.email.value) ;    
      //console.log( event.target.password.value) ;    
      //console.log( event.target.repeat_password.value) ;     

      
      event.target.sbtn.disabled = true ;  

     //console.log(   event.target.sbtn.disabled ) ; 
     
     setTimeout(() => {
        //console.log("After two second") ;
        //console.log( event.target.sbtn.disabled) ;
        event.target.sbtn.disabled =  false;
      }, 3000) 


    

     if(  event.target.password.value !== event.target.repeat_password.value  ) {
         
        alert( "Please check password again!") ;   

       
       } else {

        axios({ 

              url : "https://learn-up.app/admin/registration"  ,   

              method : "POST"  ,  

              data : {
                
                "name" :  event.target.name.value  ,
                "email_id" : event.target.email.value , 
                "password" :event.target.password.value  , 
                "type_id" :  admin  
               
              }
        
             }).then( ( res) => {   
        
                if(   res.data.message ===  "Registered Successfully."    ){
                 
                  alert( "Registered Successfully.")  ; 
               
                  navigate(  "/home/manageadmin"   , { state : { userInfo :  location.state.userInfo }} ,  { replace : false }  )   ;
    
                } 
                else {
        
                  alert(   res.data.message  )  ;
                }
               
             } ).catch(( err) => { 
                 //console.log( "error") ;
        
              }  ) ;  
    
         

        }

     
      
        event.preventDefault();
      }
    
    
       
  

        // to add new student in the database  and update answer 
    
       const  addStudentAnswerHolder = (   programId , studentId) => {
             


        axios({ 

                url : "https://learn-up.app/admin/motc"  ,   
  
                method : "POST"  ,  
  
                data : {
                  
                        "program_id" : programId  , 
                        "student_id" : studentId
  
                   
                }
          
               }).then( ( res) => {   
          
             
                  
                    //console.log(  res.data) ;  
                  
  
  
                  // navigate(  "/home/dashboard/client/student"      ,   { state: {    typeId : location.state.type ,   schoolId : location.state.schoolId  ,        programId : location.state.programId   , userInfo :  location.state.userInfo }}        ,  { replace : false}  )  
      
                 
               } ).catch(( err) => { 
                   //console.log( "error") ;
          
                }  ) ;


        } 




     const  addStudent = ( event) => {

             
      //console.log( event.target.name.value) ;   
      //console.log( event.target.email.value) ;    
      //console.log( event.target.password.value) ;    
      //console.log( event.target.repeat_password.value) ; 
      //console.log( event.target.sbtn.disabled) ; 
          
      
      event.target.sbtn.disabled = true ; 


      
      setTimeout(() => {
        //console.log("After two second") ;
        //console.log( event.target.sbtn.disabled) ;
        event.target.sbtn.disabled =  false;
      }, 3000) 


     if(  event.target.password.value !== event.target.repeat_password.value  ) {
         
        alert( "Please check password again!") ;   

       
       } else {

        axios({ 

              url : "https://learn-up.app/admin/student_registration"  ,   

              method : "POST"  ,  

              data : {
                
                "student_name" :  event.target.name.value  ,
                "email_id" : event.target.email.value , 
                "password" :event.target.password.value  , 
                "type_id" :  "student"   , 
                "program_id" : location.state.programId,  
                "school_id" : location.state.schoolId  , 

                 
              }
        
             }).then( ( res) => {   
        
                if(   res.data.message ===  "Registered Successfully."    ){
                 
                  alert( "Registered Successfully.")  ; 
                 
                
                  //console.log(  res.data.data) ;  
                  //console.log(  res.data.data._id) ; 
                  //console.log(  location.state.programId) ; 

                  addStudentAnswerHolder( location.state.programId , res.data.data._id) ; 
                       

                // navigate(  "/home/dashboard/client/student"      ,   { state: {    typeId : location.state.type ,   schoolId : location.state.schoolId  ,        programId : location.state.programId   , userInfo :  location.state.userInfo }}        ,  { replace : false}  )  
    
                } 
                else {
        
                  alert(   res.data.message  )  ;
                }
               
             } ).catch(( err) => { 
                 //console.log( "error") ;
        
              }  ) ;  
    
         

        }
  
      event.preventDefault() ; 
         
     }
   
 

 



     const handleCheckboxChange = (option) => { 

        setAdmin(option) ;
    };




    switch( typeId )  { 


      case "system_admin_client" :   

      return( 
  
  
          <div className="form_outer_div">
     
          <div className="form_outer_div_sidebar"  style={{ borderRadius : 25}} >
            <Sidebar   info = {  location.state.userInfo}/> 
          </div>   
  
  
          
           <div className="form_outer_div_body">  
        


           
           <form className="addaccount_form" onSubmit={ addClient }    >    
      
               <div className="addaccount_form_row">
                           <div className="addaccount_admin_Form-Description" >   
                          <p className="header_text" >Name of client</p> 
                          </div>        
                          <div className="addaccount_admin_Form-Input" >         
                          <input type="text"
                                  name="name"
                                  className="addaccount_admin_input-box"
                                  /> 
                          </div>  
                </div> 
       
                
                <div className="addaccount_form_row">
                           <div className="addaccount_admin_Form-Description" >   
                          <p className="header_text">Email id</p> 
                          </div>        
                          <div className="addaccount_admin_Form-Input" >         
                           <input type="text"
                                  name="email"
                                  className="addaccount_admin_input-box"
                                  /> 
                          </div>  
                </div> 
                 

                <div className="addaccount_form_row">
                           <div className="addaccount_admin_Form-Description" >   
                          <p className="header_text">Password</p> 
                          </div>        
                          <div className="addaccount_admin_Form-Input" >         
                          <input type="text"
                                  name="password"
                                  className="addaccount_admin_input-box"
                                  /> 
                          </div>  
                </div> 
             
                <div className="addaccount_form_row">
                           <div className="addaccount_admin_Form-Description" >   
                          <p className="header_text">Repeat Password</p> 
                          </div>        
                          <div className="addaccount_admin_Form-Input" >         
                          <input  type="text"
                                  name="repeat_password"
                                  className="addaccount_admin_input-box"
                                  /> 
                          </div>  
                </div> 
                
                <div className="addaccount_form_row">
                           <div className="addaccount_admin_Form-Description" >   
                          <p className="header_text">Name of contact person</p> 
                          </div>        
                          <div className="addaccount_admin_Form-Input" >         
                          <input type="text"
                                  name="contact_person"
                                  className="addaccount_admin_input-box"
                                  /> 
                          </div>  
                </div> 
                

                <div className="addaccount_form_row">
                <div className="addaccount_admin_Form-Description" >   
                          <p className="header_text">Program Assigned</p> 
                </div>     

                <div className="addaccount_admin_Form-Input" >         
                        
                    <div > 
                        <p> { assignedProgram }</p>
                  </div>    

               </div>  
               </div> 
               

                <div className="addaccount_form_row">
                           <div className="addaccount_admin_Form-Description" >   
                          <p className="header_text">No of students assigend</p> 
                          </div>        
                          <div className="addaccount_admin_Form-Input" >         
                          <input type="number"
                                  name="student"
                                  className="addaccount_admin_input-box"
                                  /> 
                          </div>  
                </div> 
       
      
      
  
                <div  className="addaccount_form_row_btn_div">   


                <input  name="sbtn"  className="addaccount_form_row_btn" type="submit" value="Submit" /> 
                </div>
                        
           </form>
  
                  <div > 

                  </div>
      
           </div>
          
            </div>
      )   ;  
       






      case "system_admin_facilitator" :   

      return( 
  
  
          <div className="form_outer_div">
     
          <div className="form_outer_div_sidebar"  style={{ borderRadius : 25}} >
            <Sidebar   info = {  location.state.userInfo} /> 
          </div>   
  
  
          
           <div className="form_outer_div_body">  
        


           
           <form className="addaccount_form"   style= {{  height : "65.99%" }}   onSubmit={  addFacilitator }    >    
      
               <div className="addaccount_form_row"  style= {{  height : "20%" }}> 
 


                           <div className="addaccount_admin_Form-Description" >   
                          <p className="header_text">Name of facilitator</p> 
                          </div>       


                          <div className="addaccount_admin_Form-Input" >   

                          <input type="text"
                                  name="name"
                                  className="addaccount_admin_input-box" 
                                  style={ { borderRadius : "16px"}} 
                                
                                  /> 
                          </div>  
                </div> 
       
                
                <div className="addaccount_form_row"  style= {{  height : "20%" }}>
                           <div className="addaccount_admin_Form-Description" >   
                          <p className="header_text">Email id</p> 
                          </div>        
                          <div className="addaccount_admin_Form-Input" >  

                          <input type="text"
                                  name="email"
                                  className="addaccount_admin_input-box"  
                                  style={ { borderRadius : "16px"}}
                                  /> 
                          </div>  
                </div> 
                 

                <div className="addaccount_form_row"  style= {{  height : "20%" }}>
                           <div className="addaccount_admin_Form-Description" >   
                          <p className="header_text">Password</p> 
                          </div>        
                          <div className="addaccount_admin_Form-Input" >         
                          <input type="text"
                                  name="password"
                                  className="addaccount_admin_input-box" 
                                  style={ { borderRadius : "16px"}}
                                  /> 
                          </div>  
                </div> 
            
               

                <div className="addaccount_form_row"  style= {{  height : "20%"  }}>
                           <div className="addaccount_admin_Form-Description" >   
                          <p className="header_text">Repeat Password</p> 
                          </div>        
                          <div className="addaccount_admin_Form-Input" >         
                          <input type="text"
                                  name="reset_password"
                               
                                  className="addaccount_admin_input-box" 
                                  style={ { borderRadius : "16px"}}
                                  /> 
                          </div>  
                </div> 
       

                <div  className="addaccount_form_row_btn_div"  style= {{  height : "20%" }}> 
                        <input className="addaccount_form_row_btn"   style= {{  height : "60%" }}  type="submit" value="Submit" /> 
                </div>
                        
          </form>
  
                  <div > 

                  </div>
      
           </div>
           


           
            </div>
      )   ;  
 

 

















      
       
      case "system_admin_school" :   

      return( 
  
  
          <div className="form_outer_div">
     
          <div className="form_outer_div_sidebar"   style = {{ borderRadius :  25}}>
            <Sidebar   info = {  location.state.userInfo} /> 
          </div>   
  
  
          
           <div className="form_outer_div_body">  
        


           
           <form className="addaccount_form" onSubmit={ addSchool }    >    
      
               <div className="addaccount_form_row">
                           <div className="addaccount_admin_Form-Description" >   
                          <p className="header_text">Name of school</p> 
                          </div>        
                          <div className="addaccount_admin_Form-Input" >         
                          <input type="text"
                                  name="name"
                                  className="addaccount_admin_input-box"
                                  /> 
                          </div>  
                </div> 
       
                
                <div className="addaccount_form_row">
                           <div className="addaccount_admin_Form-Description" >   
                          <p className="header_text">Email id</p> 
                          </div>        
                          <div className="addaccount_admin_Form-Input" >         
                          <input type="text"
                                  name="email"
                                  className="addaccount_admin_input-box"
                                  /> 
                          </div>  
                </div> 
                 

                <div className="addaccount_form_row">
                           <div className="addaccount_admin_Form-Description" >   
                          <p className="header_text">Password</p> 
                          </div>        
                          <div className="addaccount_admin_Form-Input" >         
                          <input type="text"
                                  name="password"
                                  className="addaccount_admin_input-box"
                                  /> 
                          </div>  
                </div> 
             
                <div className="addaccount_form_row">
                           <div className="addaccount_admin_Form-Description" >   
                          <p className="header_text">Repeat Password</p> 
                          </div>        
                          <div className="addaccount_admin_Form-Input" >         
                          <input type="text"
                                  name="repeat_password"
                                  className="addaccount_admin_input-box"
                                  /> 
                          </div>  
                </div> 
                
                <div className="addaccount_form_row">
                           <div className="addaccount_admin_Form-Description" >   
                          <p className="header_text">Name of contact person</p> 
                          </div>        
                          <div className="addaccount_admin_Form-Input" >         
                          <input type="text"
                                  name="contact_person"
                                  className="addaccount_admin_input-box"
                                  /> 
                          </div>  
                </div> 
                

                <div className="addaccount_form_row">
                <div className="addaccount_admin_Form-Description" >   
                          <p className="header_text">Program Assigned</p> 
                </div>     

                <div className="addaccount_admin_Form-Input" >         
                         
                 <p>{ assignedProgram }</p>
                 </div>  
    </div> 
        
  
           
           
  
        <div  className="addaccount_form_row_btn_div"> 
                          <input className="addaccount_form_row_btn" type="submit" value="Submit" /> 
        </div>
                        
    </form>
  
                  <div > 

                  </div>
      
           </div>
          
            </div>
      )   ;  
       
       
        
      case "system_admin_admin" :   
 


      return( 
  
  
          <div className="form_outer_div">
     
          <div className="form_outer_div_sidebar"   style={{ borderRadius : 25}}>
            <Sidebar  info = {  location.state.userInfo}  /> 
          </div>   
  
  
          
           <div className="form_outer_div_body"    style={{  backgroundColor : "#F8E5E9"}}>  
        
 



           
           <form className="addaccount_form" onSubmit={ addAdmin }   style = {{ height : "78.58%"}}  >    
      
               <div className="addaccount_form_row"  style = {{ height : "16.66%"  ,   backgroundColor : "#F8E5E9"  }}  >
                           <div className="addaccount_admin_Form-Description" >   
                          <p className="header_text">Name</p> 
                          </div>        
                          <div className="addaccount_admin_Form-Input" >         
                          <input type="text"
                                  name="name"
                               
                                  className="addaccount_admin_input-box"
                                  /> 
                          </div>  
                </div> 
       
                
                <div className="addaccount_form_row" style = {{ height : "16.66%"  , backgroundColor : "#F8E5E9"}} >
                           <div className="addaccount_admin_Form-Description" >   
                          <p className="header_text">Email id</p> 
                          </div>        
                          <div className="addaccount_admin_Form-Input" >         
                          <input type="text"
                                  name="email"
                               
                                  className="addaccount_admin_input-box"
                                  /> 
                          </div>  
                </div> 
                 

                <div className="addaccount_form_row" style = {{ height : "16.66%"  , backgroundColor : "#F8E5E9"}} >
                           <div className="addaccount_admin_Form-Description" >   
                          <p className="header_text">Password</p> 
                          </div>        
                          <div className="addaccount_admin_Form-Input" >         
                          <input type="text"
                                  name="password"
                               
                                  className="addaccount_admin_input-box"
                                  /> 
                          </div>  
                </div> 
              




                <div className="addaccount_form_row"  style = {{ height : "16.66%"  , backgroundColor : "#F8E5E9"}} >
                           <div className="addaccount_admin_Form-Description" >   
                          <p className="header_text" >Repeat Password</p> 
                          </div>        
                          <div className="addaccount_admin_Form-Input" >         
                          <input type="text"
                                  name="repeat_password"
                                  className="addaccount_admin_input-box"
                                  /> 
                          </div>  
                </div> 
                
                 




                <div className="addaccount_form_row"  style = {{ height : "16.66%"  ,   backgroundColor : "#F8E5E9"}} >
                <div className="addaccount_admin_Form-Description" >   
                          <p className="header_text">Select Admin Type</p> 
                </div>     

                <div className="addaccount_admin_Form-Input" >         
                        
                    <div  style={{  width : "80%" , height: "100%"  ,  display : "flex" , flexDirection :  "column" , justifyContent : "space-around" }}>


                              <div style={ {  width : "35%"  , height : "32%" , backgroundColor : "pink" , borderRadius : "20px" ,  display: "flex"  , flexDirection : "row" ,  overflow : "hidden"}}>
  
                                        <div style = {{  backgroundColor : "#FCC046" ,  width : "70%"  , justifyContent : "center" , display : "flex"  , alignItems : "center"}}>
                                        <p  style = {{ fontSize : 12   , textAlign : "center"  , fontWeight : "500"}}>Content Admin</p>   
                                        </div>


                                         <div style={{ backgroundColor : "#FCC046" , width : "30%" , display : "flex" ,   alignItems : "center" , justifyContent : "center"}}>
                                         <input   type="checkbox"   checked = {  admin === "content_admin" }    onChange={  () => handleCheckboxChange('content_admin') }/>   
                                          </div>

                                </div>   



                                <div style={ {  width : "35%"  , height : "32%" , backgroundColor : "pink" , borderRadius : "20px" ,  display: "flex"  ,   flexDirection : "row"  , overflow : "hidden"}}>
  
                                            <div style = {{  backgroundColor : "#FCC046" ,  width : "70%"  , justifyContent : "center" , display : "flex"  , alignItems : "center"}}>
                                            <p style = {{ fontSize : 12   , textAlign : "center"  , fontWeight : "500"}} >Program Admin</p>   
                                            </div>


                                            <div style={{ backgroundColor : "#FCC046" , width : "30%" , display : "flex" ,   alignItems : "center" , justifyContent : "center"}}>
                                            <input   type="checkbox"  checked = {  admin === "program_admin" }     onChange={() => handleCheckboxChange('program_admin')}/>   
                                            </div>



                                </div> 


                          



                              </div>    


        
                     </div>  
       </div> 
        
  
           
           
  
                          <div  className="addaccount_form_row_btn_div"  style={{ height : "16.66%"  ,   backgroundColor : "#F8E5E9"}}>  


                          <input  name= "sbtn" className="addaccount_form_row_btn" type="submit" value="Submit"  style= {{ backgroundColor : "#FCC046"  , border : '0px'}} /> 
                          </div>
                        
                      </form>
  
                  <div > 

                  </div>
      
           </div>
          
            </div>
      )   ;   

      







      case "system_admin_student" :   

      return( 
         
        <div className="form_outer_div">
     
        <div className="form_outer_div_sidebar"  style={{ borderRadius : 25}} >
          <Sidebar  info = {  location.state.userInfo} /> 
        </div>   


        
         <div className="form_outer_div_body">  
      


         
         <form className="addaccount_form"   style= {{  height : "65.99%" }}   onSubmit={  addStudent }    >    
     

             <div className="addaccount_form_row"  style= {{  height : "20%" }}>
                         <div className="addaccount_admin_Form-Description" >   
                        <p className="header_text">Name of student</p> 
                        </div>        
                        <div className="addaccount_admin_Form-Input" >         
                        <input type="text"
                                name="name"
                                className="addaccount_admin_input-box" 
                                style={ { borderRadius : "16px"}}
                                /> 
                        </div>  
              </div> 
     
              
              <div className="addaccount_form_row"  style= {{  height : "20%" }}>
                         <div className="addaccount_admin_Form-Description" >   
                        <p className="header_text">Email id</p> 
                        </div>        
                        <div className="addaccount_admin_Form-Input" >         
                        <input type="text"
                                name="email"
                                className="addaccount_admin_input-box"  
                                style={ { borderRadius : "16px"}}
                                /> 
                        </div>  
              </div> 
               

              <div className="addaccount_form_row"  style= {{  height : "20%" }}>
                         <div className="addaccount_admin_Form-Description" >   
                        <p className="header_text" >Password</p> 
                        </div>        
                        <div className="addaccount_admin_Form-Input" >         
                        <input type="text"
                                name="password"  
                                className="addaccount_admin_input-box" 
                                style={ { borderRadius : "16px"}}
                                /> 
                        </div>  
              </div> 
          
             

              <div className="addaccount_form_row"  style= {{  height : "20%"  }}>
                         <div className="addaccount_admin_Form-Description" >   
                        <p className="header_text">Repeat Password</p> 
                        </div>        
                        <div className="addaccount_admin_Form-Input" >         
                        <input type="text"
                                name="repeat_password"
                                className="addaccount_admin_input-box" 
                                style={ { borderRadius : "16px"}}
                                /> 
                        </div>  
              </div> 
     
    
    

         
         

                        <div  className="addaccount_form_row_btn_div"  style= {{  height : "20%" }}> 
                        <input name="sbtn" className="addaccount_form_row_btn"   style= {{  height : "60%" }}  type="submit" value="Submit" /> 
                        </div>
                      
                    </form>

                <div > 

                </div>
    
         </div>
        
          </div>

      ) ;


     



      }
} 


export default AddAccount ; 