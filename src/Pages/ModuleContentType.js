import "../Style/ModuleContentType.css"    ;  
import Sidebar from "../Sidebar" ;  
import {Link , useNavigate  , useLocation} from "react-router-dom" ; 
import axios from "axios"  ;   
import { useState  , useEffect } from "react"; 







function  ModuleContentType() {  
  
  


  



   
  const  navigate = useNavigate() ;    
  const location = useLocation();            

 
  const [  type  , setType ]   = useState( location.state.type   ) ;  
  const [  courseName  , setCourseName ]   = useState( location.state.courseName  ) ;  
  const [  name  , setName ]   = useState( location.state.type_name  ) ;  
 

  /* console.log( location.state.courseName )  ; 
  console.log( location.state.type_name)  ; 
  console.log( location.state.type)  ; */

  

  console.log( location.state.type_name)  ; 

  const goToNext = () => {
  
    navigate(  "/home/dashboard/client/addclient"   ,  { replace : false}  ) ; 
    console.log("ASJghshGHS") ; 
   }  

 









    //frame12
    return (
      <div className="moduleContentType"> 
      <div className="moduleContentType-sidebar">
      <Sidebar /> 
      </div> 
      <div className="moduleContentType-body">   



          <div style={{ height: "15.74%" ,  width : "61%", backgroundColor : "#F1F2F7" }}>  
          <div style={{ width : "45%"  , height : "100%"  , backgroundColor : "#F1F2F7" }}>
           <div style = {{ width : "50%" , height : "100%" , borderRight : "1px  solid black"  , }}>

           </div>
          </div>
          
          </div>
 





          <div style={{ height: "68.12%" , width : "61%" ,  backgroundColor : "#F1F2F7"  , display: "flex" , justifyContent : "space-between"  , flexDirection : "column"}}>  

          <div  style = {{ height : "49.72%"  ,  width : "100%"  , backgroundColor : "#F1F2F7"   , display : "flex"  ,   justifyContent : "space-between"  , flexDirection : "column"}}> 


          <div onClick={ () => {     navigate(  "/home/course/draftcourse/module/uploadcontent"   ,    { state: {  typeId : "upload_content"    ,    type : type ,   sub_type : "video"    ,     course_name :  courseName  ,  type_name :   name    }}    ,     { replace : false}  )   } } style={{ height: "19.85%" , width : "45%" ,  backgroundColor : "#B7B7D1" }}>
          <p>Upload video</p>
          </div> 

          <div onClick={ () => {     navigate(  "/home/course/draftcourse/module/uploadcontent"   ,   { state: {  typeId : "upload_text"     ,   sub_type : "text"   ,     course_name :  courseName  ,  type_name :   name  }}   ,   { replace : false}  )   } }  style={{ height: "19.85%" , width : "45%" ,  backgroundColor : "#B7B7D1"  }}>
          <p>Upload text</p>
          </div> 


          <div  onClick={ () => {     navigate(  "/home/course/draftcourse/module/uploadcontent"   ,   { state: {  typeId : "upload_content"  ,  sub_type : "picture"    ,     course_name :  courseName  ,  type_name :   name   }}  ,  { replace : false}  )   } }   style={{ height: "19.85%" , width : "45%",  backgroundColor : "#B7B7D1" }}>
          <p>Upload picture</p>
          </div>

          <div  onClick={ () => {     navigate(  "/home/course/draftcourse/module/uploadcontent"   ,    { state: {  typeId : "quiz"   ,  sub_type : "quiz"   ,  course_name :  courseName  ,  type_name :   name    }}   ,  { replace : false}  )   } }    style={{ height: "19.85%" , width : "45%" ,  backgroundColor : "#B7B7D1" }}>
          <p>Upload quiz</p>
          </div>

          </div>  







          <div  style = {{ height : "36.96%"   , backgroundColor : "#F1F2F7"  , display : "flex"  ,   justifyContent : "space-between"  , flexDirection : "column"  ,  alignItems : "flex-end"}}>  


          <div   onClick={ () => {     navigate(  "/home/course/draftcourse/module/uploadcontent"   ,    { state: {  typeId : "upload_text"   ,   sub_type : "upload picture"   }}  ,  { replace : false}  )   } }         style={{ height: "26.5%" , width : "45%",  backgroundColor : "#B7B7D1" }}>
          <p>Create task: picture upload </p>
          </div>

          <div  onClick={ () => {     navigate(  "/home/course/draftcourse/module/uploadcontent"   ,    { state: {  typeId : "upload_text"   ,   sub_type : "write text"    }}  ,  { replace : false}  )   } }       style={{ height: "26.5%" , width : "45%" ,  backgroundColor : "#B7B7D1"   }}>
          <p>Create task: write text</p>
          </div>

          <div   onClick={ () => {     navigate(  "/home/course/draftcourse/module/uploadcontent"   ,    { state: {  typeId : "upload_content"  ,  sub_type : "calculation"  }}  ,  { replace : false}  )   } }       style={{ height: "26.5%" , width : "45%" ,  backgroundColor : "#B7B7D1" }}>
          <p>Create task: calculation</p>
          </div>
             

          
         
          </div>

          
          </div>

          <div style={{ height: "15.94%" ,  width : "61%", backgroundColor : "#F1F2F7"  , display: 'flex'  , justifyContent :"flex-end"}}>  
          <div style={{ width : "45%"  , height : "100%"  , backgroundColor : "#F1F2F7" }}>
           <div style = {{ width : "50%" , height : "100%" , borderRight : "1px  solid black"}}>

           </div>
          </div>
          
          </div>
   
      </div>
    
      </div>
    )
    }
    
    export default ModuleContentType;