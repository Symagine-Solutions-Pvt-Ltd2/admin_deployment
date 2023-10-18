
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


  console.log ( location.state.typeId   ) ;   

   



  const  createCourse = () => {
  

    
    navigate(  "/home/course/savecourse"   ,   { state: {    typeId : "save_course"  }} , { replace : false}  ) ; 
    console.log("ASJghshGHS") ;  




   }   



   const goToDraftCourse = () => {
  
    navigate(  "/home/course/draftcourse"   ,     { state: {    typeId : "draft_course"   ,     endpoint : "draftcourse" }}   ,    { replace : false}  ) ; 
    console.log("ASJghshGHS") ;  

   }    


   
   const createModule = () => {
    
    console.log( courseName) ;
    navigate(  "/home/course/draftcourse/createnewmodule"   ,  { state: {    typeId : "create_module"  , courseName : courseName    }} ,        { replace : false}  ) ; 
    console.log("ASJghshGHS") ;  




   }      



   const  createWorkshop = () => {
  
    navigate(  "/home/course/draftcourse/createnewworkshop"   ,    { state: {    typeId : "create_workshop"  , courseName : courseName   }} ,   { replace : false}  ) ; 
    console.log("ASJghshGHS") ;  


   }      


     
   const  createBplan = ()  => {

    navigate(  "/home/course/draftcourse/createbussinessplan"   ,    { state: {   courseName : courseName   }} ,   { replace : false}  ) ; 

   }

   




   switch( typeId )  { 


    case "course" :  

    return (
      <div className="secondview" >  
         <div  className="secondview_sidebar" >
           <Sidebar /> 
        </div>

        <div   className="secondview_body"> 
            
               <div  className="secondview_body_innner_div1">
                   <div  className="secondview_body_innner_tab"  onClick={ () => {  createCourse() } } >
                     <p>Create New Course</p>
                   </div> 

                   <div className="secondview_body_innner_tab"  onClick={ () => { goToDraftCourse()  } } >
                   <p>Draft Courses</p>
                    </div>
               </div>
           
        </div>
      </div>
    );  

     



    case "addcoursecontent" :  
    return(
      <div className="secondview" >  
      <div  className="secondview_sidebar" >
        <Sidebar /> 
     </div>

     <div   className="secondview_body"> 
         
            <div  className="secondview_body_innner_div1" style={{  width: "100%"   , justifyContent : "space-around"}}>  



                <div  className="secondview_body_innner_tab"  style={{  width: "24.54%"  }}  onClick={ () => {  createModule() } } >
                  <p>Create new Module</p>
                </div> 

                <div className="secondview_body_innner_tab"  style={{  width: "24.54%" }}  onClick={ () => {   createWorkshop()  } } >
                <p>Create new Workshop</p>
                 </div> 


                 
                <div  className="secondview_body_innner_tab"     style={{  width: "24.54%" }} onClick={ () => {  createBplan() } } >
                  <p>Create business plan</p>
                </div> 

            </div>
        
     </div>
   </div>

    ) ; 



   }
  }
  
  export default SecondView ;