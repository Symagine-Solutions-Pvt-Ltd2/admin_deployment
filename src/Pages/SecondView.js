
import {Link , useNavigate, Outlet } from "react-router-dom" ; 
import "../Style/SecondView.css" ; 
import { useState } from "react"; 
import Sidebar from "../Sidebar"  ; 

// frame 6 , frame 12 

function SecondView() { 
   
   
  
  const  navigate = useNavigate() ;     
  const [ typeId , setTypeId ] =  useState( "addcoursecontent" ) ; 
  const  createCourse = () => {
  
    navigate(  "/home/course/savecourse"   ,  { replace : false}  ) ; 
    console.log("ASJghshGHS") ;  




   }   



   const goToDraftCourse = () => {
  
    navigate(  "/home/course/draftcourse"   ,  { replace : false}  ) ; 
    console.log("ASJghshGHS") ;  




   }    


   
   const createModule = () => {
  
    navigate(  "/home/course/draftcourse/createnewmodule"   ,  { replace : false}  ) ; 
    console.log("ASJghshGHS") ;  




   }      



   const  createWorkshop = () => {
  
    navigate(  "/home/course/draftcourse/createnewworkshop"   ,  { replace : false}  ) ; 
    console.log("ASJghshGHS") ;  




   }    

   




   switch( typeId )  { 


    case "system_admin" :  

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
         
            <div  className="secondview_body_innner_div1" style={{  width: "100%"  , backgroundColor : "yellow" , justifyContent : "space-around"}}>  



                <div  className="secondview_body_innner_tab"  style={{  width: "24.54%"  }}  onClick={ () => {  createModule() } } >
                  <p>Create new Module</p>
                </div> 

                <div className="secondview_body_innner_tab"  style={{  width: "24.54%" }}  onClick={ () => {   createWorkshop()  } } >
                <p>Create new Workshop</p>
                 </div> 


                 
                <div  className="secondview_body_innner_tab"     style={{  width: "24.54%" }} onClick={ () => {  createCourse() } } >
                  <p>Create business plan</p>
                </div> 

            </div>
        
     </div>
   </div>

    ) ; 



   }
  }
  
  export default SecondView ;