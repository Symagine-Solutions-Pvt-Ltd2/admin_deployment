import { useState , useEffect } from "react"; 
import Sidebar  from "../Sidebar" ;   
import {Link , useNavigate  , useLocation   } from "react-router-dom" ; 
import "../Style/AddAccount.css" ;
import axios from "axios"  ;  
import "../Style/EditAccount.css"  ; 
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft"  ; 





function  EditAccount(  {  props }) {     
     
  


  const  navigate = useNavigate() ; 
  const location = useLocation();
  const [  typeId  , setTypeId ]   = useState( location.state.typeId   ) ;   
  const [  data  , setData ]   = useState( location.state.data   ) ;  

   

  console.log( "edit account" ) ;
   console.log( location.state.data ) ;   
   console.log( location.state.typeId) ;  
   console.log( location.state.type) ;   
  
 

    // edit program 
    const [ programName, setProgramName ] =  useState(  location.state.data.program_name) ; 
    const [ pageNo  , setPageNo ] =  useState(1) ; 
    const [ courseList  , setCourseList  ] =  useState( []) ; 
    const [ totalPages , setTotalPages  ] =  useState( null ) ;
    const [ selectedCourse  , setSelectedCourse  ] =  useState( location.state.data.course_name) ; 
    const [ feedbackGivenBy  , setFeedbackGivenBy ] =  useState( location.state.data.feedback_by ) ;  
    const [ clientSupervisor  , setClientSupervisor ] =  useState( "" ) ; 
    const [ schoolHead  , setSchoolHead  ] =  useState( "" ) ; 
    const [  facilitator , setFacilitator ] =  useState( "" ) ;  


  
   //console.log(  feedbackGivenBy) ; 


    function checkFeedback1(  value ) {

        return  value === "Client Supervisor" ; 
    }
   

    
    function checkFeedback2(  value ) {

        return  value === "School Head" ; 
    } 

    
    function checkFeedback3(  value ) {

        return  value === "Facilitator" ; 
    }
     
 






 useEffect(() => { 
  

        if(   location.state.typeId  === "program" ) {
       
        
         axios({ 
       
          url : "http://3.123.39.199:5000/admin/p_course"  ,   
       
          method : "POST"  , 
          data : {
            
             "search_key" : "" , 
            "page_no" :  pageNo ,
             "limit" : 3  
       
          }
       
         }).then( ( res) => {   
       
          
          // console.log(  res.data ) ; 
           setCourseList( res.data.data); 
           setTotalPages( res.data.totalPages )  ; 
           // console.log(    res.data.data.length  )  ; 
       
       
         } ).catch(( err) => {  
             console.log( "error") ;
       
          }  ) ; 
           

           
           setClientSupervisor ( feedbackGivenBy.find( checkFeedback1 ) ) ;
           setSchoolHead ( feedbackGivenBy.find( checkFeedback2 ) ) ;
           setFacilitator( feedbackGivenBy.find( checkFeedback3 ) ) ; 

          console.log(  "editaccount") ; 
           console.log(  feedbackGivenBy.find( checkFeedback1 )) ; 
           console.log( feedbackGivenBy.find( checkFeedback2 )) ; 
           console.log(  feedbackGivenBy.find( checkFeedback3 )) ; 
         } 
       
       } , [   pageNo])  ; 

  
 




     const  editSchool  = (   event ) => {
 



        console.log( event.target.name.value) ;    
        console.log( event.target.email.value) ;      
        console.log( event.target.contact_person.value) ;  
          



  
        
   //      console.log(  location.state.type    )   ; 


      
axios({ 
      
                      url : "http://3.123.39.199:5000/admin/e_school"  ,   
      
                      method : "POST"  ,  

                      data : {
                        
                              "school_name" : event.target.name.value  , 
                              "email_id" : event.target.email.value , 
                              "contact_person" : event.target.contact_person.value,  
                              "_id" : data._id ,  
                          
                      }
                
                     }).then( ( res) => {   
                  
                            
                          console.log( res) ; 

                          navigate(  "/home/dashboard/client/school"   ,   { state: {    typeId : location.state.type    ,  clientId : data.client_id    , programId : data.program_id  , programName : location.state.programName    , userInfo :  location.state.userInfo  }}     ,      { replace : false}  )   ;
                     } ).catch(( err) => { 
                         console.log( "error") ;
                
                      }  ) ;  
        



            event.preventDefault();

     }





    // to edit  client in the database 
    const  editClient   = (  event  ) => { 
     
        

        console.log( event.target.name.value) ;    
        console.log( event.target.email.value) ;      
        console.log( event.target.contact_person.value) ;    
        console.log( event.target.student.value) ;  
         console.log(  location.state.type    )   ; 


      
      
              axios({ 
      
                      url : "http://3.123.39.199:5000/admin/client_e"  ,   
      
                      method : "POST"  ,  

                      data : {
                        
                              "client_name" : event.target.name.value  , 
                              "email_id" : event.target.email.value , 
                              "contact_person" : event.target.contact_person.value,  
                              "_id" : data._id ,  
                              "students_assign" :  event.target.student.value , 
                        
                      }
                
                     }).then( ( res) => {   
                
                        if(   res.data.message ===  "Data updated Successfully"    ){
                         
                          alert( "Data updated Successfully")  ;   
                            
                          console.log( data) ;   
                          console.log( res) ; 
                           navigate(  "/home/dashboard/client"   ,    { state:    {  typeId :  location.state.type  ,  programId : data.program_id  , programName : location.state.programName , userInfo :  location.state.userInfo } }     ,   { replace : false}  )   ; 

                        } 
                        else {
                
                          alert(   res.data.message  )  ;
                        }  



                       
                     } ).catch(( err) => { 
                         console.log( "error") ;
                
                      }  ) ;  
      
            event.preventDefault();

    }
     
  
 












    const  editFacilitator  = (   event ) => {
 



        console.log( event.target.name.value) ;    
        console.log( event.target.email.value) ;      
  
         


        
   //      console.log(  location.state.type    )   ; 


      
axios({ 
      
                      url : "http://3.123.39.199:5000/facilitator/e_facilitator"  ,   
      
                      method : "POST"  ,  

                      data : {
                        
                              "facilitator_name" : event.target.name.value  , 
                              "email_id" : event.target.email.value , 
                              "_id" : data._id ,  
                          
                      }
                
                     }).then( ( res) => {   
                  
                        
                        if(   res.data.message ===  "Details updated successfully"    ){
                         
                                alert( "Details updated Successfully")  ;   
                                  

                                console.log( res) ; 
                                navigate(  "/home/dashboard/client/facilitator"   ,    { state: {    typeId :  location.state.type  ,   schoolId : data.school_id     , programId : data.program_id  , userInfo :  location.state.userInfo  }}    , { replace : false}  )   ; 
      
                              } 
                              else {
                                
                                console.log( res) ;
                                alert(   res.data.message  )  ;
                              }  
      




                       
                     } ).catch(( err) => { 
                         console.log( "error") ;
                
                      }  ) ;  
        



                      
            event.preventDefault();

     }

   
 










     const  editStudent  = (   event ) => {
 
         
     
        console.log( event.target.name.value) ;    
        console.log( event.target.email.value) ;     
         
        

        
         

            
           axios({ 
      
        url : "http://3.123.39.199:5000/admin/student_e"  ,   

        method : "POST"  ,  

        data : {
          
                "student_name" : event.target.name.value  , 
                "email_id" : event.target.email.value , 
                "_id" : data._id ,  
            
        }
  
       }).then( ( res) => {   
         

           
        if(   res.data.message ===  "Details updated successfully"    ){
                         
                alert( "Details updated Successfully")  ;   
                  
                console.log( res) ; 

                navigate(  "/home/dashboard/client/student"   ,    { state: {   typeId : location.state.type ,    schoolId : data.school_id    , programId : data.program_id  , userInfo :  location.state.userInfo   ,       }}    , { replace : false}  )   ;
    
              } 
              else {
                
                console.log( res) ;
                alert(   res.data.message  )  ;
              }   
          
         
       } ).catch(( err) => { 
           console.log( "error") ;
  
        }  ) ;  
       



        event.preventDefault();

     } 

































     const  editAdmin  = (   event ) => {
 
         
     
      console.log( event.target.name.value) ;    
      console.log( event.target.email.value) ;     
       
      

      

         
         axios({ 
    
      url : "http://3.123.39.199:5000/admin/eadmin"  ,   

      method : "POST"  ,  

      data : {
        
              "name" : event.target.name.value  , 
              "email_id" : event.target.email.value , 
              "_id" : data._id ,  
          
      }

     }).then( ( res) => {   
       

      alert(   res.data.message  )  ; 
      navigate(  "/home/manageadmin"   ,    { state: {   userInfo :  location.state.userInfo     }}    , { replace : false}  )   ;
  

     /*  if(   res.data.message ===  "Details updated successfully"    ){
                       
              alert( "Details updated Successfully")  ;   
                
              console.log( res) ; 

              navigate(  "/home/manageadmin"   ,    { state: {   userInfo :  location.state.userInfo     }}    , { replace : false}  )   ;
  
            } 
            else {
              
              console.log( res) ;
              alert(   res.data.message  )  ;
            }   */ 
        
       
     } ).catch(( err) => { 
         console.log( "error") ;

      }  ) ;  
    


      event.preventDefault();

   }
  














     const  editProgram  = (  ) => {
 
         
     
        console.log(  programName) ;    
        console.log(  feedbackGivenBy) ;     
        console.log( selectedCourse ) ;    
        console.log( location.state.data._id  ) ;
        
            
           axios({ 
      
        url : "http://3.123.39.199:5000/admin/e_program"  ,   

        method : "POST"  ,  

        data : {
          
                "program_name" : programName  , 
                "course_name" : selectedCourse , 
               "feedback_by" : feedbackGivenBy   , 
               "_id" :location.state.data._id 
           
            
        }
  
       }).then( ( res) => {   
    
              
            console.log( res) ;   

            if(  res.data.message === "Data modified successfully"  ){ 
           

                  
            alert( res.data.message) ;    
            navigate(  "/home/dashboard/"    ,    { state: {    typeId : "system_admin"  ,  userInfo :  location.state.userInfo   }}  ,    { replace : false}  )   ; 

            }else{
                   
              alert( res.data.message) ; 

            }
         
       } ).catch(( err) => { 
           console.log( "error") ;
  
        }  ) ;  



     }


 




 






     const handleCheckboxChange = (  option  ) => {
            
        console.log( "kjhk") ; 
           console.log( option)
           setSelectedCourse( option ) ; 

      }
  

       


      
 
      const handleCheckboxChange1 = ( e ) => {  
    
        const { value, checked } = e.target;
           

        console.log(`${value} is ${checked}`); 

       
        if(  value === "Client Supervisor") {

             
               // Case 1 : The user checks the box
          if (checked) {
                        
                setFeedbackGivenBy( [...feedbackGivenBy , value]) ; 
                setClientSupervisor( "Client Supervisor") ; 

                     }
    
                // Case 2  .: The user unchecks the box
                  else {
                     
                        setClientSupervisor("" ) ; 
                     let newArray = feedbackGivenBy.filter((e) => e !== value) ;
                    setFeedbackGivenBy(  newArray ) ; 
                         }
     
    
                         console.log( feedbackGivenBy) ; 
                
        } 

        else if(  value === "School Head" ){
                  
                
                 // Case 1 : The user checks the box
          if (checked) {
                        
                setFeedbackGivenBy( [...feedbackGivenBy , value]) ; 
                setSchoolHead( "School Head") ; 

                     }
    
                // Case 2  .: The user unchecks the box
                  else {
                     
                        setSchoolHead("" ) ; 
                     let newArray = feedbackGivenBy.filter((e) => e !== value) ;
                    setFeedbackGivenBy(  newArray ) ; 
                         }
     
    
                         console.log( feedbackGivenBy) ; 

        }else if(   value === "Facilitator"  ){

               // Case 1 : The user checks the box
          if (checked) {
                        
                setFeedbackGivenBy( [...feedbackGivenBy , value]) ; 
                setFacilitator( "Facilitator") ; 

                     }
    
                // Case 2  .: The user unchecks the box
                  else {
                     
                        setFacilitator("" ) ; 
                     let newArray = feedbackGivenBy.filter((e) => e !== value) ;
                    setFeedbackGivenBy(  newArray ) ; 
                         }
     
    
                         console.log( feedbackGivenBy) ; 
        }



        /*  // Case 1 : The user checks the box
          if (checked) {
                        
            setFeedbackGivenBy( [...feedbackGivenBy , value]) ; 
       
                 }

            // Case 2  .: The user unchecks the box
              else {
               
                 let newArray = feedbackGivenBy.filter((e) => e !== value) ;
                setFeedbackGivenBy(  newArray ) ; 
                     }
 

                     console.log( feedbackGivenBy) ; 
 */

    };

  



      
    const handlePageNo = (   btn  ) => {
  

         
        if( btn ===  "prev"){ 

         console.log( "prev") ;             
         setPageNo( pageNo -1 ) ;  

       }else   if( btn ===  "next" )  {
         console.log( "next") ;  
        setPageNo( pageNo +1 ) ; 
       }  
          
      } ; 





  switch( typeId )  { 

 
 

















  case "program" :   

     return(
    





      <div className="editprogram_form_outer_div">  
 


         <div className="editprogram_form_outer_div_sidebar" > 
          <Sidebar  info = {  location.state.userInfo} /> 
            </div>   

 



         <div className="editprogram_form_outer_div_body">  
    
          



         <div className="editprogram_admin_form"    >    
     


  


             <div className="editprogram_admin_form_row"> 



                         <div className="admin_Form-Description" >   
                        <p className="header_text" >Name of Program</p> 
                        </div>    

                        <div className="editprogram_admin_Form-Input" >         
                        <input type="text"
                                name="name" 
                                defaultValue={ programName}
                   onChange={ (  e ) => { setProgramName(  e.target.value)}}     
                                className="admin_input-box"
                                /> 
                        </div>  
              </div> 
     
   
      
    
              <div className="editprogram_admin_form_row">  


    
                         <div className="admin_Form-Description" >   
                        <p  className="header_text"> Select Course</p> 
                        </div>             

     


                        <div className="editprogram_admin_Form-Input"  >     
    
                      <div  style={{  width : "87.46%" , height: "100%"  ,  display : "flex" , flexDirection :  "row" , justifyContent : "space-around" , alignItems : "center"}}>



                      {

           courseList.map( (  el  , index )  => ( 

          <div   key={index} style={ {  width : "27%"  , height : "35%" , backgroundColor : "pink" , borderRadius : "20px" ,  display: "flex"  , flexDirection : "row" ,  overflow : "hidden"}}>

          <div style = {{  backgroundColor : "#FCC046" ,  width : "85%"  , justifyContent : "center" , display : "flex"  , alignItems : "center"}}>
                 <p   style = {{ fontSize : 12   , textAlign : "center"  , fontWeight : "500"}}   >  { el.course_name } </p>   
           </div>


          <div style={{  backgroundColor : "#FCC046" , width : "15%" , display : "flex" ,   alignItems : "center" , justifyContent : "center"}}>
               <input   type="checkbox"  checked = {  selectedCourse === el.course_name  }    onChange={  () => handleCheckboxChange( el.course_name) }    />   
          </div>

            </div>     

) )

} 


    
                    </div> 

                    <div style={{  width : "12.54%" , height: "100%"  ,  display : "flex" , flexDirection :  "row" , justifyContent : "space-around" , alignItems : "center"  }}  >
                   

                    <button    disabled = {  pageNo <= 1 }
                    onClick={ () => { handlePageNo( "prev") }  }   style ={{    display : "flex"  , alignItems :"center"    , border : "0px solid red" }}>
                   <ChevronLeftIcon  sx={{ color: "#000"  }}/>
                    </button> 

                    <button      disabled = {  pageNo  >=  totalPages }   onClick= { ( )  =>  {handlePageNo( "next")  }  }     style ={{    display : "flex"  , alignItems :"center"    , border : "0px solid red" }} >
                    <ChevronRightIcon  sx={{ color: "#000"  }}/>
                    </button>
                      </div>
               
     </div>    
    </div> 
  
  

         
         
          <div className="editprogram_admin_form_row"> 
    
          <div className="admin_Form-Description" >   
                 <p  className="header_text">Feedback to be given by</p> 
                </div>           
    
    
    
                <div className="createcontent_admin_Form-Input"   style={ {  justifyContent : "space-around"}} >     
      

      <div  style={{  width : "87.46%" , height: "100%"  ,  display : "flex" , flexDirection :  "row" , justifyContent : "space-around" , alignItems : "center"}}> 





 <div style={ {  width : "25.87%"  , height : "35%" , backgroundColor : "pink" , borderRadius : "20px" ,  display: "flex"  , flexDirection : "row" ,  overflow : "hidden"}}>



 <div style = {{  backgroundColor : "#FCC046" ,  width : "70%"  , justifyContent : "center" , display : "flex"  , alignItems : "center"}}>
                              <p style = {{ fontSize : 12   , textAlign : "center"  , fontWeight : "500"}} >Client Supervisor</p>   
                              </div>
    
    
                      <div style={{ backgroundColor : "#FCC046" , width : "30%" , display : "flex" ,   alignItems : "center" , justifyContent : "center"}}>
 <input   type="checkbox"  value="Client Supervisor"  checked= { clientSupervisor === "Client Supervisor" }   name="feedback"  onChange={ handleCheckboxChange1 } />   
                             </div> 


    
           </div>   
    
    
                         
         <div style={ {  width : "25.87%"  , height : "35%" , backgroundColor : "pink" , borderRadius : "20px" ,  display: "flex"  ,   flexDirection : "row"  , overflow : "hidden"}}>
                            
         <div style = {{  backgroundColor : "#FCC046" ,  width : "70%"  , justifyContent : "center" , display : "flex"  , alignItems : "center"}}>
                              <p  style = {{ fontSize : 12   , textAlign : "center"  , fontWeight : "500"}} >School Head</p>   
                              </div>
    
    
  <div style={{ backgroundColor : "#FCC046" , width : "30%" , display : "flex" ,   alignItems : "center" , justifyContent : "center"}}> 

 <input   type="checkbox"  checked={ schoolHead === "School Head" }   value="School Head"  name="feedback"   onChange={ handleCheckboxChange1 } />   
         </div>
    
                          
    
                           </div> 


        <div style={ {  width : "25.87%"  , height : "35%" , backgroundColor : "pink" , borderRadius : "20px" ,  display: "flex"  ,   flexDirection : "row"  , overflow : "hidden"}}>
                            
               <div style = {{  backgroundColor : "#FCC046" ,  width : "70%"  , justifyContent : "center" , display : "flex"  , alignItems : "center"}}> 
                            
                              <p style = {{ fontSize : 12   , textAlign : "center"  , fontWeight : "500"}} >Facilitator</p>
                              </div>
    
    
      <div style={{ backgroundColor : "#FCC046" , width : "30%" , display : "flex" ,   alignItems : "center" , justifyContent : "center"   }}>  

 <input    type="checkbox"  checked={ facilitator === "Facilitator" }  value="Facilitator"   name="feedback"     onChange={handleCheckboxChange1 } /> 
                </div>
    
                          
    
                           </div> 




  
            </div>       



            <div style={{  width : "12.54%" , height: "100%"  ,  display : "flex" , flexDirection :  "row" , justifyContent : "space-around" , alignItems : "center"   }}  >
            </div>
    
            </div>  


            




        </div>

                        <div  className="admin_form_row_btn_div"    style= {{ borderBottom : "0px"  , borderLeft : "0px"  , borderRight : "0px"}} > 
   <input className="admin_form_row_btn" type="button" value="Submit"  onClick={ () => { editProgram()}}   /> 
                        </div>
                       



                        
                    </div>

    
    
   



         </div>  

       </div>
       ) ;  
  




















   case "admin" :   

     return(
    
        <div className="form_outer_div">
        
        
    

        <div className="form_outer_div_sidebar"   style={{ borderRadius : 25}}>
            <Sidebar  info = {  location.state.userInfo} /> 
          </div>   
  
  
          
           <div className="form_outer_div_body">  
        


           
           <form className="addaccount_form"  style = {{ height : "78.58%"}} 
                onSubmit={  editAdmin   }
           >    
      
               <div className="editaccount_form_row"  style = {{ height : "16.66%"}}  >
                           <div className="admin_Form-Description" >   
                          <p className="header_text">Name</p> 
                          </div>        
                          <div className="admin_Form-Input" >         
                          <input type="text"
                                  name="name"
                                  defaultValue={   location.state.data.name}   
                                  className="admin_input-box"
                                  /> 
                          </div>  
                </div> 
       
                
                <div className="editaccount_form_row" style = {{ height : "16.66%"}} >
                           <div className="admin_Form-Description" >   
                          <p className="header_text">Email id</p> 
                          </div>        
                          <div className="admin_Form-Input" >         
                          <input type="text"
                                  name="email"
                                  defaultValue={   location.state.data.email_id}  
                                  className="admin_input-box"
                                  /> 
                          </div>  
                </div> 
                 

              
             
            
                
                

                <div className="editaccount_form_row"  style = {{ height : "16.66%"}} >
                <div className="admin_Form-Description" >   
                          <p  className="header_text">Select Admin Type</p> 
                </div>     

                <div className="admin_Form-Input" >         
                        
                    <div  style={{  width : "80%" , height: "100%"  ,  display : "flex" , flexDirection :  "column" , justifyContent : "space-around" }}>


                    <div style={ {  width : "35%"  , height : "32%" , backgroundColor : "pink" , borderRadius : "20px" ,  display: "flex"  , flexDirection : "row" ,  overflow : "hidden"}}>
  
             <div style = {{  backgroundColor : "#FCC046" ,  width : "70%"  , justifyContent : "center" , display : "flex"  , alignItems : "center"}}>
             <p  style = {{ fontSize : 12   , textAlign : "center"  , fontWeight : "500"}}>Content Admin</p>   
                </div>


                <div style={{ backgroundColor : "#FCC046" , width : "30%" , display : "flex" ,   alignItems : "center" , justifyContent : "center"}}>
               <input   type="checkbox"   checked = {  location.state.data.type_id === "content_admin" }     readOnly/>   
                  </div>

</div>   



<div style={ {  width : "35%"  , height : "32%" , backgroundColor : "pink" , borderRadius : "20px" ,  display: "flex"  ,   flexDirection : "row"  , overflow : "hidden"}}>

                  <div style = {{  backgroundColor : "#FCC046" ,  width : "70%"  , justifyContent : "center" , display : "flex"  , alignItems : "center"}}>
                  <p style = {{ fontSize : 12   , textAlign : "center"  , fontWeight : "500"}} >Program Admin</p>   
                  </div>


                  <div style={{ backgroundColor : "#FCC046" , width : "30%" , display : "flex" ,   alignItems : "center" , justifyContent : "center"}}>
                    <input   type="checkbox"  checked = {  location.state.data.type_id === "program_admin" }     readOnly/>   
                    </div>



</div> 






                          



                              </div>    


        
                     </div>  
       </div> 
        
  
           
           
  
                          <div  className="editaccount_form_row_btn_div"  style={{ height : "16.66%"}}>  

                          <input className="editaccount_form_row_btn" type="button"   value= "Reset Password"   onClick={()  => {     navigate(  "/home/resetpassword"   , {   state: {  typeId :   location.state.typeId   ,   data : location.state.data   ,   programName : location.state.programName    , type : location.state.type  ,  userInfo :  location.state.userInfo   ,  screentype : "resetpassword"   } }  , { replace : false}  )  }  }  /> 
                          <input className="editaccount_form_row_btn" type="submit" value="Submit" /> 
                          </div>
                        
                      </form>
  
                  <div > 

                  </div>
      
           </div> 

          
         </div>
         ) ;   























   


    case "client" :   

    return(
      
      <div className="form_outer_div">
     
      <div className="form_outer_div_sidebar"  style={{ borderRadius : 25}}>
        <Sidebar info = {  location.state.userInfo} /> 
      </div>   


      
       <div className="form_outer_div_body">  
    


       
       <form className="addaccount_form"    onSubmit={  editClient  } >       
 





  
           <div className="editaccount_form_row">
                       <div className="admin_Form-Description" >   
                      <p className="header_text">Name of client</p> 
                      </div>        
                      <div className="admin_Form-Input" >         
                      <input type="text"
                              name="name" 
                              defaultValue ={ data.client_name } 
                              className="admin_input-box"
                              /> 
                      </div>  
            </div> 
   
            
            <div className="editaccount_form_row"> 


                       <div className="admin_Form-Description" >   
                      <p className="header_text">Email id</p> 
                      </div>  

                      <div className="admin_Form-Input" >         
                       <input type="text"
                              name="email" 
                              defaultValue={data.email_id}                              
                              className="admin_input-box"  
                              
                              /> 
                      </div>  
            </div> 
              





            
            <div className="editaccount_form_row">
                       <div className="admin_Form-Description" >   
                      <p className="header_text">Name of contact person</p> 
                      </div>        
                      <div className="admin_Form-Input" >   

                               
                      <input type="text"
                              name="contact_person" 
                              defaultValue ={ data.contact_person } 
                              className="admin_input-box"
                              /> 
                      </div>  
            </div> 
            

            <div className="editaccount_form_row"> 

            <div className="admin_Form-Description" >   
                      <p className="header_text">Program Assigned</p> 
            </div>     

            <div className="admin_Form-Input" >         
                    
               <p>  { location.state.programName } </p>

           </div>  
           </div> 
           

            <div className="editaccount_form_row">
                       <div className="admin_Form-Description" >   
                      <p className="header_text">No of students assigend</p> 
                      </div>        
                      <div className="admin_Form-Input" >         
                      <input 
                              name="student"  
                              type="number" 
                              defaultValue = { data.students_assign } 
                              className="admin_input-box"
                              /> 
                      </div>  
            </div> 
   
  
  

            <div  className="editaccount_form_row_btn_div">  

            <input className="editaccount_form_row_btn" type="button"   value= "Reset Password"   onClick={()  => {     navigate(  "/home/resetpassword"   , {   state: {  typeId : "client"   ,   data : location.state.data   ,   programName : location.state.programName    , type : location.state.type  ,  userInfo :  location.state.userInfo   ,  screentype : "resetpassword"   } }  , { replace : false}  )  }  }    /> 
            <input className="editaccount_form_row_btn" type="submit" value="Submit" /> 
            </div> 
 


       
                    
       </form>

              <div > 

              </div>
  
       </div>
      
        </div>


           ) ;  
     




















    case "facilitator" :   

           return(
        
            <div className="form_outer_div"> 


              <div className="form_outer_div_sidebar"  style={{ borderRadius : 25}} >
            <Sidebar  info = {  location.state.userInfo} /> 
          </div>   
  
  
          
           <div className="form_outer_div_body">  
        


           
           <form className="addaccount_form"   style= {{  height : "65.99%"  }}  onSubmit={ editFacilitator     }    >    
      
               <div className="editaccount_form_row"  style= {{  height : "20%" }}>
                           <div className="admin_Form-Description" >   
                          <p className="header_text">Name of facilitator</p> 
                          </div>        
                          <div className="admin_Form-Input" >   

                          <input type="text"
                                  name="name" 
                                  defaultValue={ data.facilitator_name      }
                                  className="admin_input-box" 
                                  style={ { borderRadius : "16px"}} 
                                
                                  /> 
                          </div>  
                </div> 
       
                
                <div className="editaccount_form_row"  style= {{  height : "20%" }}>
                           <div className="admin_Form-Description" >   
                          <p className="header_text">Email id</p> 
                          </div>        
                          <div className="admin_Form-Input" >  

                          <input type="text"
                                  name="email" 
                                  defaultValue={ data.email_id  }
                                  className="admin_input-box"  
                                  style={ { borderRadius : "16px"}}
                                  /> 
                          </div>  
                </div> 
                 
       

                <div  className="editaccount_form_row_btn_div"  style= {{  height : "20%" }}>   

                <input className="editaccount_form_row_btn" type="button"   value= "Reset Password"   onClick={()  => {     navigate(  "/home/resetpassword"   , {   state: {  typeId : "facilitator"   ,  type : location.state.type    ,  data : location.state.data     , userInfo :  location.state.userInfo   , screentype : "resetpassword"     } }  , { replace : false}  )  }  }  /> 
                        <input className="editaccount_form_row_btn"   style= {{  height : "60%" }}  type="submit" value="Submit" /> 
                </div>
                        
          </form>
  
                  <div > 

                  </div>
      
           </div>
           

             </div>
             ) ; 
             
              





    case "school" :   

             return(
          
              <div className="form_outer_div">
               <div className="form_outer_div_sidebar"   style={{ borderRadius : 25}} >
            <Sidebar     info = {  location.state.userInfo} /> 
          </div>   
  
  
          
           <div className="form_outer_div_body">  
        


           
           <form className="addaccount_form"      onSubmit={   editSchool  } >    
      
               <div className="editaccount_form_row"> 

                           <div className="admin_Form-Description" >   
                          <p className="header_text">Name of school</p> 
                          </div>       


                          <div className="admin_Form-Input" >     

                          <input type="text"
                                  name="name" 
                                  defaultValue= {  data.school_name }
                                  className="admin_input-box"
                                  /> 
                          </div>  
                </div> 
       
                
                <div className="editaccount_form_row">
                           <div className="admin_Form-Description" >   
                          <p className="header_text">Email id</p> 
                          </div>        
                          <div className="admin_Form-Input" >         
                          <input type="text" 
                                   name = "email"
                                    defaultValue= {  data.email_id }
                                  className="admin_input-box"
                                  /> 
                          </div>  
                </div> 
                 

                
                
                <div className="editaccount_form_row">
                           <div className="admin_Form-Description" >   
                          <p className="header_text">Name of contact person</p> 
                          </div>        
                          <div className="admin_Form-Input" >         
                          <input type="text" 
                              name ="contact_person"
                            defaultValue= {  data.contact_person     }   
                                  className="admin_input-box"
                                  /> 
                          </div>  
                </div> 
                

                <div className="editaccount_form_row">
                <div className="admin_Form-Description" >   
                          <p className="header_text">Program Assigned</p> 
                </div>     

                <div className="admin_Form-Input" >         
                         
                 <p> {    data.program_name } </p>
                 </div>  
    </div> 
        
  
           
           
  
        <div  className="editaccount_form_row_btn_div">  

        <input className="editaccount_form_row_btn" type="button"   value= "Reset Password"   onClick={()  => {     navigate(  "/home/resetpassword"   ,  { state: {    typeId : "school"   ,    data : location.state.data   ,  type : "system_admin"  , programName : location.state.programName  , userInfo :  location.state.userInfo   ,  screentype : "resetpassword"     }}   , { replace : false}  )  }  }   />
                          <input className="editaccount_form_row_btn" type="submit" value="Submit" /> 
        </div>
                        
    </form>
  
                  <div > 

                  </div>
      
           </div>
               </div>
               ) ;  
  
    




    case "student" :   

               return(
            
                <div className="form_outer_div">
                 <div className="form_outer_div_sidebar"    style={{ borderRadius : 25}}>
          <Sidebar    info = {  location.state.userInfo} /> 
        </div>   


        
         <div className="form_outer_div_body">  
      


         
         <form className="addaccount_form"   style= {{  height : "65.99%" }}    onSubmit={ editStudent}      >    
    
             <div className="editaccount_form_row"  style= {{  height : "20%" }}>
                         <div className="admin_Form-Description" >   
                        <p className="header_text">Name of student</p> 
                        </div>        
                        <div className="admin_Form-Input" >         
                        <input type="text"
                                name="name"
                                 defaultValue={ data.student_name }
                                className="admin_input-box" 
                                style={ { borderRadius : "16px"}}
                                /> 
                        </div>  
              </div> 
     
              
              <div className="editaccount_form_row"  style= {{  height : "20%" }}>
                         <div className="admin_Form-Description" >   
                        <p className="header_text">Email id</p> 
                        </div>        
                        <div className="admin_Form-Input" >         
                        <input type="text"
                                name="email"
                                defaultValue={ data.email_id    }
                                className="admin_input-box"  
                                style={ { borderRadius : "16px"}}
                                /> 
                        </div>  
              </div> 
               

        

                        <div  className="editaccount_form_row_btn_div"  style= {{  height : "20%" }}>  

                        <input className="editaccount_form_row_btn" type="button"   value= "Reset Password"   onClick={()  => {     navigate(  "/home/resetpassword"   , {   state: {  typeId : location.state.typeId   ,   data : location.state.data   ,   programName : location.state.programName    , type : location.state.type  ,  userInfo :  location.state.userInfo   ,  screentype : "resetpassword"   } }  , { replace : false}  )      }  }  /> 
                        <input className="editaccount_form_row_btn"   style= {{  height : "60%" }}  type="submit" value="Submit" /> 
                        </div>
                      
                    </form>

                <div > 

                </div>
    
         </div>
        
                 </div>
                 ) ;  
}
}


export default EditAccount ; 