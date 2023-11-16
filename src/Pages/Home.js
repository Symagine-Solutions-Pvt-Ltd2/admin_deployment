import "../Style/Home.css" ; 
import Sidebar from "../Sidebar"  ;   
import {Link, useNavigate , useLocation } from "react-router-dom"  ;   
import { useState  } from "react"; 
import home_logo from "../Images/home_logo.png" ;





function  Home() {    // frame 3  
    
   const location = useLocation();  // to share data between one page to another while navigating 
   const  navigate = useNavigate() ;  

   // to determine its a  system/ program / content  admin 
 const [  typeId  , setTypeId ]   = useState( location.state.typeId   ) ;   





 console.log(   location.state.userInfo ) ;
 console.log(   location.state.typeId  ) ;  


     
 const goToNext = () => {  


   navigate(  "/home/dashboard"  ,    { state: {    typeId :  typeId   ,   userInfo :  location.state.userInfo  }} ,  { replace : false}  )  ;


   console.log( typeId) ; 
 } 




 

   switch( typeId )  { 


   
   case "system_admin" :     
     return(
        <div className="home">  
            <div className="home-sidebar"  style={{ borderRadius : 25}}>
                   <Sidebar       info = {  location.state.userInfo} /> 
            </div> 
            <div className="home-body">

            <div className="home-body1">
               
            <div className="home-body-inner-description1" > 

                <p style={ { fontSize : 24 , fontWeight : 600  }}> {`Hi, ${location.state.userInfo.name}` } </p> 

                  <p  style={ { fontSize : 14 , fontWeight : 400  }}>Ready to start your day with Future Founders?</p> 


                       </div>  

                   <div   className="home-body-illustration">

                   <img src={ home_logo }  alt= { "ccv"}  height={"100%"}  />   
                      </div>

                      <div style= {{ backgroundColor : "#D9D9D9"  , width : "5%" ,  height : "43.2%"   , borderTopRightRadius : 25  , borderBottomRightRadius : 25}}>


                   </div>
            </div>
            <div className="home-body2">  
             
                <div  onClick={() => { goToNext() } }   className="home-body2-button1" style={{ backgroundColor : "#353B55"}} >
                   <p style={{ color : "white"}}>Dashboard</p>
                </div> 


                <div    onClick={() => { navigate(  "/home/course"  ,    { state: {    typeId : "course"    , userInfo :  location.state.userInfo   }} ,  { replace : false}  ) } }   className="home-body2-button1"  style={{ backgroundColor : "#5A6199"}}>
                <p style={{ color : "white"}}>Create Course</p>
                </div>  

               
                <div   onClick={() => { navigate(  "/home/viewcourse"  ,    { state: {    typeId : "permanent_course"  , userInfo :  location.state.userInfo   }} ,  { replace : false}  ) } }   className="home-body2-button1"  style={{ backgroundColor : "#B7B7D0"}} > 
                <p style={{ color : "white"}}>View Course</p>
                </div>
               


             </div>
              
              <div className="home-body3">
              <div  onClick={() => { navigate(  "/home/manageadmin"   , {  state: { userInfo :  location.state.userInfo}}    ,       { replace : false}  ) } }     className="home-body2-button2"   style={{ backgroundColor : "#F06B6E" }}  > 
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
                   <Sidebar      info = {  location.state.userInfo} /> 
            </div> 
            <div className="home-body">

            <div className="home-body1">
               
            <div className="home-body-inner-description1" > 

<p>facilitator </p> 

  <p>Ready to start your day with Future Founders?</p>
       </div>  
   <div   className="home-body-illustration">

   <img src={ home_logo }  alt= { "ccv"}  height={"100%"}  />   
      </div>

      <div style= {{ backgroundColor : "#D9D9D9"  , width : "5%" ,  height : "43.2%"   , borderTopRightRadius : 25  , borderBottomRightRadius : 25}}>


   </div>
            </div>
            <div className="home-body2"    >    


              <div  style={{ width : "65%"   ,   height : "100%"   ,  display: "flex"    , justifyContent : "space-between"}}>
             
                <div  onClick={() => { goToNext() } }     className="home-body2-button1" style={{ backgroundColor : "#353B55"  , width : "45%"}} >
                   <p style={{ color : "white" }}>Dashboard</p>
                </div>   

                
                
                <div  onClick={() => { navigate(  "/home/viewcourse"  ,    { state: {    typeId : "permanent_course"   , userInfo :  location.state.userInfo    }} ,  { replace : false}  ) } }      className="home-body2-button1"  style={{ backgroundColor : "#B7B7D0"  , width : "45%" }} > 
                <p style={{ color : "white"}}>View Course</p>
                </div>  

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
             <Sidebar    info = {  location.state.userInfo}/> 
      </div> 
      <div className="home-body">

      <div className="home-body1">
         
      <div className="home-body-inner-description1" > 

<p>facilitator </p> 

  <p>Ready to start your day with Future Founders?</p>
       </div>  
   <div   className="home-body-illustration">

   <img src={ home_logo }  alt= { "ccv"}  height={"100%"}  />   
      </div>

      <div style= {{ backgroundColor : "#D9D9D9"  , width : "5%" ,  height : "43.2%"   , borderTopRightRadius : 25  , borderBottomRightRadius : 25}}>


   </div>
      </div>
      <div className="home-body2">  
       
          <div   onClick={() => { goToNext() } }     className="home-body2-button1" style={{ backgroundColor : "#353B55"}} >
             <p style={{ color : "white"}}>Dashboard</p>
          </div>  


          <div    onClick={() => { navigate(  "/home/course"  ,    { state: {    typeId : "course"  , userInfo :  location.state.userInfo  }} ,  { replace : false}  ) } }    className="home-body2-button1"  style={{ backgroundColor : "#5A6199"}}>
          <p style={{ color : "white"}}>Create Course</p>
          </div>  


          <div  onClick={() => { navigate(  "/home/viewcourse"  ,    { state: {    typeId : "permanent_course"   , userInfo :  location.state.userInfo }} ,  { replace : false}  ) } }       className="home-body2-button1"  style={{ backgroundColor : "#B7B7D0"}} > 
          <p style={{ color : "white"}}>View Course</p>
          </div>
        
        
       </div>
        
        <div className="home-body3">
        



      </div>


      </div>
    
  </div>
     ) ; 

   } 
}

export default Home ; 