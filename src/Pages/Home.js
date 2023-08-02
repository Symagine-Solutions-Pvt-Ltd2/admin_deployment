import "../Style/Home.css" ; 
import Sidebar from "../Sidebar"  ;   
import {Link, useNavigate , useLocation } from "react-router-dom"  ;   
import { useState  } from "react";

function  Home() {    // frame 3  
    
   const location = useLocation();  // to share data between one page to another while navigating 
   const  navigate = useNavigate() ;  

   // to determine its a  system/ program / content  admin 
 const [  typeId  , setTypeId ]   = useState( location.state.typeId   ) ;  
     
 const goToNext = () => {  


   navigate(  "/home/dashboard"  ,    { state: {    typeId :  typeId  }} ,  { replace : false}  )  ;


   console.log( typeId) ; 
 }
 

   switch( typeId )  { 


   
   case "system_admin" :     
     return(
        <div className="home">  
            <div className="home-sidebar" >
                   <Sidebar /> 
            </div> 
            <div className="home-body">

            <div className="home-body1">
               
               <div className="home-body-inner-description1" > 

              <p>Hi, Mike</p> 

              <p>Ready to start your day with Future Founders?</p>
               </div>
            </div>
            <div className="home-body2">  
             
                <div  onClick={() => { goToNext() } }   className="home-body2-button1" style={{ backgroundColor : "#353B55"}} >
                   <p style={{ color : "white"}}>Dashboard</p>
                </div> 
                <div className="home-body2-button1"  style={{ backgroundColor : "#5A6199"}}>
                <p style={{ color : "white"}}>Create Course</p>
                </div> 
                <div  className="home-body2-button1"  style={{ backgroundColor : "#B7B7D0"}} > 
                <p style={{ color : "white"}}>View Course</p>
                </div>
             
             </div>
              
              <div className="home-body3">
              <div  className="home-body2-button2"   style={{ backgroundColor : "#F06B6E" }}> 
                <p style={{ color : "white"}}>Manage Admin Accounts</p>
                </div>

             <div>
            </div>  



            </div>


            </div>
          
        </div>
     )   


     case "program_admin" :     
     return(
        <div className="home">  
            <div className="home-sidebar" >
                   <Sidebar /> 
            </div> 
            <div className="home-body">

            <div className="home-body1">
               
               <div className="home-body-inner-description1" > 

              <p>Hi, Mike</p> 

              <p>Ready to start your day with Future Founders?</p>
               </div>
            </div>
            <div className="home-body2">  
             
                <div  className="home-body2-button1" style={{ backgroundColor : "#353B55"}} >
                   <p style={{ color : "white"}}>Dashboard</p>
                </div> 
                <div className="home-body2-button1"  style={{ backgroundColor : "#5A6199"}}>
                <p style={{ color : "white"}}>Create Course</p>
                </div> 
                <div  className="home-body2-button1"  style={{ backgroundColor : "#B7B7D0"}} > 
                <p style={{ color : "white"}}>View Course</p>
                </div>
             
             </div>
              
              <div className="home-body3">
              



            </div>


            </div>
          
        </div>
     )  
   


     case "content_admin" :     
     return(
        <div className="home">  
            <div className="home-sidebar" >
                   <Sidebar /> 
            </div> 
            <div className="home-body">

            <div className="home-body1">
               
               <div className="home-body-inner-description1" > 

              <p>Hi, Mike</p> 

              <p>Ready to start your day with Future Founders?</p>
               </div>
            </div>
            <div className="home-body2"  style={ { justifyContent : "flex-start"}}>  
             
                <div  className="home-body2-button1" style={{ backgroundColor : "#353B55" , marginRight: "5%"}}  >
                   <p style={{ color : "white"}}>Dashboard</p>
                </div> 
                <div className="home-body2-button1"  style={{ backgroundColor : "#5A6199"}}>
                <p style={{ color : "white"}}>Create Course</p>
                </div> 
               
             
             </div> 

              
             <div className="home-body3">
              



              </div>
              
             


            </div>
          
        </div>
     )  


   } 
}

export default Home ; 