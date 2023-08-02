import {Link , useNavigate  , useLocation} from "react-router-dom" ; 
import { useState } from "react"; 
import Sidebar from "../Sidebar"  ; 
import "../Style/SchoolView.css" ; 





function SchoolView() {    
    
     
    const  navigate = useNavigate() ;  
    const goToNext = () => {
  
       navigate(  "/home/dashboard/client/addschool"   ,  { replace : false}  ) ; 
       console.log("ASJghshGHS") ;  




      }   




    return(  


  
        <div className="clientview">  
    
                <div className="clientview_sidebar" >
                       <Sidebar /> 
                </div> 
                <div className="clientview_body">  
                 <div  className="clientview_body1"> 
                 <p>hjxgajgj</p> 
                 </div>
                
                  <div className="clientview_table_outer_div_body2">   
        
    
                   <div className="clientview_table_inner_div_column_name">  
                   <div  style= {{   width: "7%"  ,  height: "100%"  , backgroundColor : "pink"  ,  borderRight : "1px solid black" }}>
                   <p>Sl No</p>
                   </div> 
                   <div style= {{   width: "14%" , height: "100%"  , backgroundColor : "pink"  , borderRight : "1px solid black" }}>
                     <p>Name of school</p>
                   </div>
                   <div style= {{   width: "17%" ,  height: "100%"  , backgroundColor : "pink" , borderRight : "1px solid black"}  }>
                     <p>Contact Person</p>
                   </div>
                   <div style= {{  width: "9%"  ,  height: "100%"  , backgroundColor : "pink"  , borderRight : "1px solid black"}}>
                     <p>Contact Email Id</p>
                   </div> 
                   <div style= {{   width: "14%"  ,  height: "100%"  , backgroundColor : "pink" , borderRight : "1px solid black"}}> 
                    <p>Facilitators</p>
                   </div>  
                   <div style= {{   width: "14%"  ,  height: "100%"  , backgroundColor : "pink" , borderRight : "1px solid black"}}> 
                    <p>Students</p>
                   </div> 
                   <div style= {{  width: "7%"  ,    height: "100%"  , backgroundColor : "pink" , borderRight : "1px solid black"}}> 
                    <p>Account Status</p>
                   </div> 
                   <div style= {{   width: "18%"  ,    height: "100%"  , backgroundColor : "pink" , borderRight : "1px solid black"}}> 
                    <p>Account status</p>
                   </div>
    
                  </div> 
                  <div  className="clientview_table_inner_div_table_row">
                   
                  </div>
                  
                  
        
                  </div> 
    
                  <div className="body3"> 
    
                  <div onClick={ () => { goToNext() } } className="add_new_program_button">
                    <p> Add new school </p>
                  </div>
                
                  </div>
                
                </div>
    
    
    
        </div>
        ) ; 
} 

export default SchoolView;