  
import {Link , useNavigate  , useLocation} from "react-router-dom" ; 
import { useState } from "react"; 
import "../Style/FirstView.css" ; 
import Sidebar from "../Sidebar"  ;  
function FirstView() {      
  
  const  navigate = useNavigate() ;  
  const location = useLocation();  
  const [  typeId  , setTypeId ]   = useState( location.state.typeId   ) ;  
 

  const goToNext = () => {
  
    navigate(  "/home/dashboard/addprogram"  ,    { state: {    typeId : typeId  }} ,  { replace : false}  ) ; 

  }




  switch( typeId )  {  
    
  case "system_admin" :  
  
  // 
  return ( 


    <div className="firstview">  

            <div className="firstview_sidebar" >
                   <Sidebar /> 
            </div> 
            <div className="firstview_body">  
             <div  className="body1"> 
             <p>hjxgajgj</p> 
             </div>
            
              <div className="table_outer_div_body2"> 
              <div className="table_inner_div_column_name">  
               <div  style= {{ width : "10%" , height: "100%"  , backgroundColor : "pink"  ,  borderRight : "1px solid black" }}>
               <p>Sl No</p>
               </div> 
               <div style= {{ width : "30%" , height: "100%"  , backgroundColor : "pink"  , borderRight : "1px solid black" }}>
                 <p> Name of program</p>
               </div>
               <div style= {{ width : "20%" , height: "100%"  , backgroundColor : "pink" , borderRight : "1px solid black"}  }>
                 <p> No of clients assigned</p>
               </div>
               <div style= {{ width : "20%" , height: "100%"  , backgroundColor : "pink"  , borderRight : "1px solid black"}}>
                 <p> No of schools assigned</p>
               </div> 
               <div style= {{ width : "20%" , height: "100%"  , backgroundColor : "pink" , borderRight : "1px solid black"}}> 
                <p> No of students assinged</p>
               </div>

              </div> 
              <div  className="table_inner_div_table_row">

              </div>
             
              <div className="table_inner_div_column_name">    
              
              <div  style= {{ width : "10%" , height: "100%"  , backgroundColor : "pink"  ,  borderRight : "1px solid black" }}>
               <p>Sl No</p>
               </div> 
               <div style= {{ width : "30%" , height: "100%"  , backgroundColor : "pink"  , borderRight : "1px solid black" }}>
                 <p> Name of program</p>
               </div>
               <div style= {{ width : "20%" , height: "100%"  , backgroundColor : "pink" , borderRight : "1px solid black"}  }>
                 <p> No of clients assigned</p>
               </div>
               <div style= {{ width : "20%" , height: "100%"  , backgroundColor : "pink"  , borderRight : "1px solid black"}}>
                 <p> No of schools assigned</p>
               </div> 
               <div style= {{ width : "20%" , height: "100%"  , backgroundColor : "pink" , borderRight : "1px solid black"}}> 
                <p> No of students assinged</p>
               </div>

              </div>
    
              </div> 

              <div className="body3"> 

              <div onClick={ () => { goToNext() } } className="add_new_program_button">
                <p>Add new program</p>
              </div>
            
              </div>
            
            </div>



    </div>
  )  
  
  case "program_admin" : 
  return (
    <div>
      <p> program admin</p>
    </div>
  )   


  case "content_admin" : 
  return (
    <div>
      <p> content admin</p>
    </div>
  )  

   }
  }
  
  export default FirstView ;