
import {Link , useNavigate, Outlet , useLocation  } from "react-router-dom" ; 
import "../Style/SecondView.css" ; 
import { useState } from "react"; 
import Sidebar from "../Sidebar"  ; 

// frame 6 , frame 12 

function SecondView() { 
   
   
  const location = useLocation();  
  const  navigate = useNavigate() ;     
  const [ typeId , setTypeId ] =  useState( location.state.typeId   ) ;    
   
  const [ courseName , setCourseName ] =  useState( location.state.courseName    ) ;   

 

  console.log ( "secondview" ) ; 
  console.log ( location.state.typeId   ) ;   
  console.log ( location.state.courseName  ) ;  
  console.log ( location.state.courseId  ) ;  

  const  createCourse = () => {
  

    
    navigate(  "/home/course/savecourse"   ,   { state: {       typeId : "save_course"  ,  userInfo :  location.state.userInfo  }} , { replace : false}  ) ; 
    //console.log("ASJghshGHS"  ) ;  




   }   



   const goToDraftCourse = () => {
  
    navigate(  "/home/course/draftcourse"   ,     { state: {    typeId : "draft_course"   ,     endpoint : "draftcourse"  ,  userInfo :  location.state.userInfo }}   ,    { replace : false}  ) ; 
    //console.log("ASJghshGHS") ;  

   }    


   
   const createModule = () => {
    
    //console.log( courseName) ;
    navigate(  "/home/course/draftcourse/createnewmodule"   ,  { state: {    typeId : "create_module"  , courseName : location.state.courseName   , courseId  : location.state.courseId  , userInfo :  location.state.userInfo   }} ,        { replace : false}  ) ; 
    //console.log("ASJghshGHS") ;  




   }      



   const  createWorkshop = () => {
  
    navigate(  "/home/course/draftcourse/createnewworkshop"   ,    { state: {    typeId : "create_workshop"  , courseName : location.state.courseName   ,  courseId  : location.state.courseId   ,  userInfo :  location.state.userInfo }} ,   { replace : false}  ) ; 
    //console.log("ASJghshGHS") ;  


   }      


     
   const  createBplan = ()  => {

    navigate(  "/home/course/draftcourse/createbussinessplan"   ,    { state: {   courseName : courseName     ,  userInfo :  location.state.userInfo}} ,   { replace : false}  ) ; 

   }

   




   switch( typeId )  { 


    case "course" :  

    return (
      <div className="secondview"    >  
         <div  className="secondview_sidebar"   style={{ borderRadius : 25}} >
           <Sidebar  info = {  location.state.userInfo} /> 
        </div>

        <div   className="secondview_body"> 
            
               <div  className="secondview_body_innner_div1">
                   <div  className="secondview_body_innner_tab"  style= {{ backgroundColor : "#F06B6E"  }}  onClick={ () => {  createCourse() } } >
                     <p style={{ color : "#FFF"  , fontWeight: "500"}} >Create New Course</p>
                   </div> 

                   <div className="secondview_body_innner_tab"   style= {{ backgroundColor : "#5E82F4"  }}  onClick={ () => { goToDraftCourse()  } } >
                   <p style={{ color : "#FFF"  , fontWeight: "500"}}>Draft Courses</p>
                    </div>
               </div>
           
        </div>
      </div>
    );  

     



    case "addcoursecontent" :  
    return(
      <div className="secondview"    >  
      <div  className="secondview_sidebar"   style={{ borderRadius : 25}} >
        <Sidebar     info = {  location.state.userInfo} /> 
     </div>

     <div   className="secondview_body"> 
         
            <div  className="secondview_body_innner_div1" style={{  width: "100%"   , justifyContent : "space-around"}}>  



                <div  className="secondview_body_innner_tab"  style={{  width: "24.54%"  }}  onClick={ () => {  createModule() } } >
                  <p style= {{  fontWeight : 600 }} >Create new Module</p>
                </div> 

                <div className="secondview_body_innner_tab"  style={{  width: "24.54%" }}  onClick={ () => {   createWorkshop()  } } >
                <p style= {{  fontWeight : 600 }} >Create new Workshop</p>
                 </div> 


                 
                <div  className="secondview_body_innner_tab"     style={{  width: "24.54%" }} onClick={ () => {  createBplan() } } >
                  <p style= {{  fontWeight : 600 }}>Create business plan</p>
                </div> 

            </div>
        
     </div>
   </div>

    ) ; 



   }
  }
  
  export default SecondView ;