import "../Style/ModuleContentType.css"    ;  
import Sidebar from "../Sidebar" ;  
import {Link , useNavigate  , useLocation} from "react-router-dom" ; 


function  ModuleContentType() {      
   
  const  navigate = useNavigate() ;  

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



          <div style={{ height: "15.74%" ,  width : "61%", backgroundColor : "pink" }}>  
          <div style={{ width : "45%"  , height : "100%"  , backgroundColor : "blue" }}>
           <div style = {{ width : "50%" , height : "100%" , borderRight : "5px  solid black"}}>

           </div>
          </div>
          
          </div>

          <div style={{ height: "68.12%" , width : "61%" ,  backgroundColor : "yellow"  , display: "flex" , justifyContent : "space-between"  , flexDirection : "column"}}>  

          <div  style = {{ height : "49.72%"  ,  width : "100%"  , backgroundColor : "orchid"   , display : "flex"  ,   justifyContent : "space-between"  , flexDirection : "column"}}> 


          <div onClick={ () => {     navigate(  "/home/course/draftcourse/module/uploadcontent"   ,    { state: {  typeId : "upload_content" }}    ,     { replace : false}  )   } } style={{ height: "19.85%" , width : "45%" ,  backgroundColor : "#B7B7D1" }}>
          <p>Upload video</p>
          </div> 

          <div onClick={ () => {     navigate(  "/home/course/draftcourse/module/uploadcontent"   ,   { state: {  typeId : "upload_content" }}   ,   { replace : false}  )   } }  style={{ height: "19.85%" , width : "45%" ,  backgroundColor : "#B7B7D1"  }}>
          <p>Upload text</p>
          </div> 


          <div  onClick={ () => {     navigate(  "/home/course/draftcourse/module/uploadcontent"   ,   { state: {  typeId : "upload_content" }}  ,  { replace : false}  )   } }   style={{ height: "19.85%" , width : "45%",  backgroundColor : "#B7B7D1" }}>
          <p>Upload picture</p>
          </div>

          <div  onClick={ () => {     navigate(  "/home/course/draftcourse/module/uploadcontent"   ,    { state: {  typeId : "upload_content" }}   ,  { replace : false}  )   } }    style={{ height: "19.85%" , width : "45%" ,  backgroundColor : "#B7B7D1" }}>
          <p>Upload quiz</p>
          </div>

          </div> 


          <div  style = {{ height : "36.96%"   , backgroundColor : "orchid"  , display : "flex"  ,   justifyContent : "space-between"  , flexDirection : "column"  ,  alignItems : "flex-end"}}>  


          <div style={{ height: "26.5%" , width : "45%",  backgroundColor : "#B7B7D1" }}>
          <p>Create task: picture upload </p>
          </div>

          <div style={{ height: "26.5%" , width : "45%" ,  backgroundColor : "#B7B7D1"   }}>
          <p>Create task: write text</p>
          </div>

          <div style={{ height: "26.5%" , width : "45%" ,  backgroundColor : "#B7B7D1" }}>
          <p>Create task: calculation</p>
          </div>
             

          
         
          </div>

          
          </div>

          <div style={{ height: "15.94%" ,  width : "61%", backgroundColor : "pink"  , display: 'flex'  , justifyContent :"flex-end"}}>  
          <div style={{ width : "45%"  , height : "100%"  , backgroundColor : "blue" }}>
           <div style = {{ width : "50%" , height : "100%" , borderRight : "5px  solid black"}}>

           </div>
          </div>
          
          </div>
   
      </div>
    
      </div>
    )
    }
    
    export default ModuleContentType;