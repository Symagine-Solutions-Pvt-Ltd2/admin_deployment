import { useState } from "react"; 
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
 
  console.log( location.state.typeId  ) ; 
  
  console.log( location.state.type) ; 
  
  console.log( location.state.school_id ) ; 

  console.log( location.state.program_name ) ;  

  console.log( location.state.school_name ) ;   



  console.log("ggfh") ;  





   
    const  navigate = useNavigate() ; 
 
    
     // to keep track of the program 
     const [ assignedProgram ,   setAssignedProgram  ]   = useState( location.state.program_name) ;     



     // to keep track of the client name 
     const [ client ,   setClient   ]   = useState( location.state.client_name ) ;   
     
      // to select the admin type
     const [  admin ,   setAdmin  ]   = useState( "program_admin" ) ;  



        // to add new client in the database 
       const  addClient   = (  event  ) => { 
    

        /*       
        console.log( event.target.name.value) ;   
        console.log( event.target.email.value) ;    
        console.log( event.target.password.value) ;    
        console.log( event.target.repeat_password.value) ;    
        console.log( event.target.contact_person.value) ;    
        console.log( event.target.student.value) ;  */ 
        console.log( assignedProgram ) ;   
        console.log(  location.state.type    )   ; 


       
        if(  event.target.password.value !== event.target.repeat_password.value  ) {
         
                alert( "Please check password again!") ;  
               
        }else if(   event.target.password.value === event.target.email.value  ){

                 
                 alert( "EmailId and password  can't be same!") ; 
            }
        else {
      
              axios({ 
      
                      url : "http://localhost:8000/admin/c_registration"  ,   
      
                      method : "POST"  , 
                      data : {
                        
                              "client_name" : event.target.name.value  , 
                              "email_id" : event.target.email.value , 
                              "password"  :  event.target.password.value   , 
                              "type_id" :  "client" , 
                              "contact_person" : event.target.contact_person.value, 
                              "students_assign" :  event.target.student.value , 
                              "program_name" :  assignedProgram ,
                      }
                
                     }).then( ( res) => {   
                
                        if(   res.data.message ===  "Registered Successfully."    ){
                         
                          alert( "Registered Successfully.")  ;   
                           
                          console.log( type) ; 
                          navigate(  "/home/dashboard/client"   ,    { state:    {  typeId :  type    ,  program_name : assignedProgram  } }     ,   { replace : false}  )   ; 

                        } 
                        else {
                
                          alert(   res.data.message  )  ;
                        }
                       
                     } ).catch(( err) => { 
                         console.log( "error") ;
                
                      }  ) ;  
            
                 
      
            }
      
            event.preventDefault();

    }
    




      // to add new facilitator in the database 
    const addFacilitator  = (  event  ) => { 
       


      console.log( event.target.name.value) ;   
      console.log( event.target.email.value) ;    
      console.log( event.target.password.value) ;    
      console.log( event.target.reset_password.value) ;    
      

      if(  event.target.password.value !== event.target.reset_password.value  ) {
         
          alert( "Password  mismatched!") ;  
         
      } else {

        axios({ 

                url : "http://localhost:8000/facilitator/f_registration"  ,   

                method : "POST"  , 
                data : {
                  
                        "facilitator_name"  :  event.target.name.value  , 
                        "email_id" :  event.target.email.value  , 
                        "password"  : event.target.password.value  , 
                        "type_id" : "facilitator" ,  
                        "program_name" : location.state.program_name ,  
                        "school_name" :  location.state.school_name ,  
                        "school_id" : location.state.school_id 
                }
          
               }).then( ( res) => {   
          
                  if(   res.data.message ===  "Registered Successfully."    ){
                   
                    alert( "Registered Successfully.")  ;  


                    navigate(  "/home/dashboard/client/facilitator"   ,    { state: {    typeId :    "facilitator_with_add_account"    ,   school_name : location.state.school_name    }}    , { replace : false}  )   ;
                  } 
                  else {
          
                    alert(   res.data.message  )  ;
                  }
                 
               } ).catch(( err) => { 
                   console.log( "error") ;
          
                }  ) ;  
      
           

      }

      event.preventDefault();
    }
  
   




  
 



    // to add new school in the database 
    const addSchool = ( event)  => { 
    

      
      console.log( event.target.name.value) ;   
      console.log( event.target.email.value) ;    
      console.log( event.target.password.value) ;    
      console.log( event.target.repeat_password.value) ;    
      console.log( event.target.contact_person.value) ;    
      

      if(  event.target.password.value !== event.target.repeat_password.value  ) {
         
        alert( "Please check password again!") ;   

       
       } else {

        axios({ 

              url : "http://localhost:8000/admin/s_registration"  ,   

              method : "POST"  ,  

              data : {
                
                "school_name" : event.target.name.value ,
                "email_id" : event.target.email.value , 
                "password" : event.target.password.value ,
                 "type_id" : "school"  ,
                 "contact_person" :   event.target.contact_person.value  ,
                 "program_name" : location.state.program_name   , 
                 "client_name" :  location.state.client_name ,    
               
              }
        
             }).then( ( res) => {   
        
                if(   res.data.message ===  "Registered Successfully."    ){
                 
                  alert( "Registered Successfully.")  ;  


                   navigate(  "/home/dashboard/client/school"   ,   { state: {    typeId :    "system_admin"   ,  clientName : location.state.client_name    }}     ,      { replace : false}  )   ;
    
                } 
                else {
        
                  alert(   res.data.message  )  ;
                }
               
             } ).catch(( err) => { 
                 console.log( "error") ;
        
              }  ) ;  
    
         

        }

     

        event.preventDefault() ; 
      } 

       





        // to add new admin in the database 
      const addAdmin = ( event)  => { 
      
       
        
      
      console.log( event.target.name.value) ;   
      console.log( event.target.email.value) ;    
      console.log( event.target.password.value) ;    
      console.log( event.target.repeat_password.value) ;     


    

     if(  event.target.password.value !== event.target.repeat_password.value  ) {
         
        alert( "Please check password again!") ;   

       
       } else {

        axios({ 

              url : "http://localhost:8000/admin/registration"  ,   

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
               
                 // navigate(  "/home/manageadmin"   ,  { replace : false}  )   ;
    
                } 
                else {
        
                  alert(   res.data.message  )  ;
                }
               
             } ).catch(( err) => { 
                 console.log( "error") ;
        
              }  ) ;  
    
         

        }

     
      
        event.preventDefault();
      }
    
    
       
  

        // to add new student in the database 
     const  addStudent = ( event) => {

             
      console.log( event.target.name.value) ;   
      console.log( event.target.email.value) ;    
      console.log( event.target.password.value) ;    
      console.log( event.target.repeat_password.value) ;     


    

     if(  event.target.password.value !== event.target.repeat_password.value  ) {
         
        alert( "Please check password again!") ;   

       
       } else {

        axios({ 

              url : "http://localhost:8000/admin/student_registration"  ,   

              method : "POST"  ,  

              data : {
                
                "student_name" :  event.target.name.value  ,
                "email_id" : event.target.email.value , 
                "password" :event.target.password.value  , 
                "type_id" :  "student"   , 
                "program_name"   : location.state.program_name     ,
                 "school_name"   : location.state.school_name    ,
                 
              }
        
             }).then( ( res) => {   
        
                if(   res.data.message ===  "Registered Successfully."    ){
                 
                  alert( "Registered Successfully.")  ; 
                 

                  console.log(  res.data.data) ;  


                 navigate(  "/home/dashboard/client/student"      ,   { state: {    typeId : "student_with_add_account",   school_name : location.state.school_name  ,        program_name : location.state.program_name     }}        ,  { replace : false}  )  
    
                } 
                else {
        
                  alert(   res.data.message  )  ;
                }
               
             } ).catch(( err) => { 
                 console.log( "error") ;
        
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
     
          <div className="form_outer_div_sidebar" >
            <Sidebar /> 
          </div>   
  
  
          
           <div className="form_outer_div_body">  
        


           
           <form className="addaccount_form" onSubmit={ addClient }    >    
      
               <div className="addaccount_form_row">
                           <div className="addaccount_admin_Form-Description" >   
                          <p>Name of client</p> 
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
                          <p>Email id</p> 
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
                          <p>Password</p> 
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
                          <p>Repeat Password</p> 
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
                          <p>Name of contact person</p> 
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
                          <p>Program Assigned</p> 
                </div>     

                <div className="addaccount_admin_Form-Input" >         
                        
                    <div > 
                        <p> { assignedProgram }</p>
                  </div>    

               </div>  
               </div> 
               

                <div className="addaccount_form_row">
                           <div className="addaccount_admin_Form-Description" >   
                          <p>No of students assigend</p> 
                          </div>        
                          <div className="addaccount_admin_Form-Input" >         
                          <input type="text"
                                  name="student"
                                  className="addaccount_admin_input-box"
                                  /> 
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
       






      case "system_admin_facilitator" :   

      return( 
  
  
          <div className="form_outer_div">
     
          <div className="form_outer_div_sidebar" >
            <Sidebar /> 
          </div>   
  
  
          
           <div className="form_outer_div_body">  
        


           
           <form className="addaccount_form"   style= {{  height : "65.99%" }}   onSubmit={  addFacilitator }    >    
      
               <div className="addaccount_form_row"  style= {{  height : "20%" }}> 
 


                           <div className="addaccount_admin_Form-Description" >   
                          <p>Name of facilitator</p> 
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
                          <p>Email id</p> 
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
                          <p>Password</p> 
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
                          <p>Repeat Password</p> 
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
     
          <div className="form_outer_div_sidebar" >
            <Sidebar /> 
          </div>   
  
  
          
           <div className="form_outer_div_body">  
        


           
           <form className="addaccount_form" onSubmit={ addSchool }    >    
      
               <div className="addaccount_form_row">
                           <div className="addaccount_admin_Form-Description" >   
                          <p>Name of school</p> 
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
                          <p>Email id</p> 
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
                          <p>Password</p> 
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
                          <p>Repeat Password</p> 
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
                          <p>Name of contact person</p> 
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
                          <p>Program Assigned</p> 
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
     
          <div className="form_outer_div_sidebar" >
            <Sidebar /> 
          </div>   
  
  
          
           <div className="form_outer_div_body"    style={{  backgroundColor : "#F8E5E9"}}>  
        


           
           <form className="addaccount_form" onSubmit={ addAdmin }   style = {{ height : "78.58%"}}  >    
      
               <div className="addaccount_form_row"  style = {{ height : "16.66%"}}  >
                           <div className="addaccount_admin_Form-Description" >   
                          <p>Name</p> 
                          </div>        
                          <div className="addaccount_admin_Form-Input" >         
                          <input type="text"
                                  name="name"
                               
                                  className="addaccount_admin_input-box"
                                  /> 
                          </div>  
                </div> 
       
                
                <div className="addaccount_form_row" style = {{ height : "16.66%"}} >
                           <div className="addaccount_admin_Form-Description" >   
                          <p>Email id</p> 
                          </div>        
                          <div className="addaccount_admin_Form-Input" >         
                          <input type="text"
                                  name="email"
                               
                                  className="addaccount_admin_input-box"
                                  /> 
                          </div>  
                </div> 
                 

                <div className="addaccount_form_row" style = {{ height : "16.66%"}} >
                           <div className="addaccount_admin_Form-Description" >   
                          <p>Password</p> 
                          </div>        
                          <div className="addaccount_admin_Form-Input" >         
                          <input type="text"
                                  name="password"
                               
                                  className="addaccount_admin_input-box"
                                  /> 
                          </div>  
                </div> 
              




                <div className="addaccount_form_row"  style = {{ height : "16.66%"}} >
                           <div className="addaccount_admin_Form-Description" >   
                          <p>Repeat Password</p> 
                          </div>        
                          <div className="addaccount_admin_Form-Input" >         
                          <input type="text"
                                  name="repeat_password"
                                  className="addaccount_admin_input-box"
                                  /> 
                          </div>  
                </div> 
                
                 




                <div className="addaccount_form_row"  style = {{ height : "16.66%"}} >
                <div className="addaccount_admin_Form-Description" >   
                          <p>Program Assigned</p> 
                </div>     

                <div className="addaccount_admin_Form-Input" >         
                        
                    <div  style={{  width : "80%" , height: "100%"  ,  display : "flex" , flexDirection :  "column" , justifyContent : "space-around" }}>


                              <div style={ {  width : "35%"  , height : "32%" , backgroundColor : "pink" , borderRadius : "20px" ,  display: "flex"  , flexDirection : "row" ,  overflow : "hidden"}}>
  
                                        <div style = {{  backgroundColor : "red" ,  width : "70%"  , justifyContent : "center" , display : "flex"  , alignItems : "center"}}>
                                        <p >Content Admin</p>   
                                        </div>


                                         <div style={{ backgroundColor : "beige" , width : "30%" , display : "flex" ,   alignItems : "center" , justifyContent : "center"}}>
                                         <input   type="checkbox"   checked = {  admin === "Content Admin" }    onChange={  () => handleCheckboxChange('Content Admin') }/>   
                                          </div>

                                </div>   



                                <div style={ {  width : "35%"  , height : "32%" , backgroundColor : "pink" , borderRadius : "20px" ,  display: "flex"  ,   flexDirection : "row"  , overflow : "hidden"}}>
  
                                            <div style = {{  backgroundColor : "red" ,  width : "70%"  , justifyContent : "center" , display : "flex"  , alignItems : "center"}}>
                                            <p  >Program Admin</p>   
                                            </div>


                                            <div style={{ backgroundColor : "beige" , width : "30%" , display : "flex" ,   alignItems : "center" , justifyContent : "center"}}>
                                            <input   type="checkbox"  checked = {  admin === "Program Admin" }     onChange={() => handleCheckboxChange('Program Admin')}/>   
                                            </div>



                                </div> 


                          



                              </div>    


        
                     </div>  
       </div> 
        
  
           
           
  
                          <div  className="addaccount_form_row_btn_div"  style={{ height : "16.66%"}}>  


                          <input className="addaccount_form_row_btn" type="submit" value="Submit" /> 
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
     
        <div className="form_outer_div_sidebar" >
          <Sidebar /> 
        </div>   


        
         <div className="form_outer_div_body">  
      


         
         <form className="addaccount_form"   style= {{  height : "65.99%" }}   onSubmit={  addStudent }    >    
     

             <div className="addaccount_form_row"  style= {{  height : "20%" }}>
                         <div className="addaccount_admin_Form-Description" >   
                        <p>Name of student</p> 
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
                        <p>Email id</p> 
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
                        <p>Password</p> 
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
                        <p>Repeat Password</p> 
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
                        <input className="addaccount_form_row_btn"   style= {{  height : "60%" }}  type="submit" value="Submit" /> 
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