import "../Style/ClientView.css"  ;
import {Link , useNavigate  , useLocation} from "react-router-dom" ; 
import { useState } from "react"; 
import Sidebar from "../Sidebar"  ; 



function StudentView() {    
    
  
    const  navigate = useNavigate() ;  
    const goToNext = () => {
  
       navigate(  "/home/dashboard/client/student/addstudent"   ,  { state: {    typeId : "system_admin_student" }}   ,  { replace : false}  ) ; 
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
       <div  style= {{   width: "8%"  ,  height: "100%"  , backgroundColor : "pink"  ,  borderRight : "1px solid black" }}>
       <p>Sl No</p>
       </div> 
       <div style= {{   width: "11%" , height: "100%"  , backgroundColor : "pink"  , borderRight : "1px solid black" }}>
         <p>Name of school</p>
       </div>
       <div style= {{   width: "11%" ,  height: "100%"  , backgroundColor : "pink" , borderRight : "1px solid black"}  }>
         <p>Name of student</p>
       </div>
       <div style= {{  width: "11%"  ,  height: "100%"  , backgroundColor : "pink"  , borderRight : "1px solid black"}}>
         <p>Status (submitted Business Plan)</p>
       </div> 
       <div style= {{   width: "11%"  ,  height: "100%"  , backgroundColor : "pink" , borderRight : "1px solid black"}}> 
        <p>Certificate issued</p>
       </div> 

       <div style= {{  width: "11%"  ,    height: "100%"  , backgroundColor : "pink" , borderRight : "1px solid black"}}> 
        <p>View Business Plan</p>
       </div> 
       <div style= {{   width: "11%"  ,    height: "100%"  , backgroundColor : "pink" , borderRight : "1px solid black"}}> 
        <p>Download</p>
       </div>
        
       <div style= {{   width: "11%"  ,    height: "100%"  , backgroundColor : "pink" , borderRight : "1px solid black"}}> 
        <p>Account Status</p>
       </div>

       <div style= {{   width: "15%"  ,    height: "100%"  , backgroundColor : "pink" , borderRight : "1px solid black"}}> 
        <p>Account status</p>
       </div>
    </div>   


      <div  className="clientview_table_inner_div_table_row">
         
        
      <div style= {{ width : "100%" , height: "25%"  , backgroundColor : "pink" , borderRight : "1px solid black"  , display : "flex" , flexDirection : "row"}} >
      <div  style= {{   width: "8%"  ,  height: "100%"  , backgroundColor : "pink"  ,  borderRight : "1px solid black" }}>
       <p>1</p>
       </div> 
       <div style= {{   width: "11%" , height: "100%"  , backgroundColor : "pink"  , borderRight : "1px solid black" }}>
         <p>School 1</p>
       </div>
       <div style= {{   width: "11%" ,  height: "100%"  , backgroundColor : "pink" , borderRight : "1px solid black"}  }>
         <p>Asdasd Fdslkfmsdicn</p>
       </div>
       <div style= {{  width: "11%"  ,  height: "100%"  , backgroundColor : "pink"  , borderRight : "1px solid black"}}>
         <p>Yes</p>
       </div>  

       <div style= {{  width: "11%"  ,  height: "100%"  , backgroundColor : "pink"  , borderRight : "1px solid black"}}>
         <p>Yes</p>
       </div>  

       <div style= {{  width: "11%"  ,  height: "100%"  , backgroundColor : "pink"  , borderRight : "1px solid black"}}>

           <div  style={{ height: "100%"  , width : "60%"}} >
                                <input type="button" value = "view"  onClick={()  => {        navigate(  "/home/dashboard/client/school"   ,  { replace : false}  )  }  } /> 
                         </div>     

       </div> 


       <div style= {{   width: "11%"  ,  height: "100%"  , backgroundColor : "pink" , borderRight : "1px solid black" , display: "flex"  ,   flexDirection : "row"}}> 
                        
                         <div  style={{ height: "100%"  , width : "60%"}} >
                                <input type="button" value = "download"  onClick={()  => {        navigate(  "/home/dashboard/client/school"   ,  { replace : false}  )  }  } /> 
                         </div>
       </div>  




       <div style= {{  width: "11%"  ,    height: "100%"  , backgroundColor : "pink" , borderRight : "1px solid black"}}> 
        <p>Active</p>
       </div>   


       <div style= {{   width: "15%"  ,    height: "100%"  , backgroundColor : "pink" , borderRight : "1px solid black"  ,  display: "flex"  ,   flexDirection : "row" }}> 
                     <div style={{ height: "100%"  , width : "40%"}}> 
                     <input type="button" value = "status"  onClick={()  => {        navigate(  "/home/dashboard/client/facilitator"   ,  { replace : false}  )  }  } /> 
                        </div>
                         <div  style={{ height: "100%"  , width : "40%"}} >
                                <input type="button" value = "edit"  onClick={()  => {        navigate(  "/home/dashboard/client/facilitator"   ,  { replace : false}  )  }  } /> 
                         </div>
       </div>

</div>

      </div>
      
      

      </div> 

      <div className="body3"> 

      <div onClick={ () => { goToNext() } } className="add_new_program_button">
        <p>Add new student</p>
      </div>
    
      </div>
    
    </div>

  </div>

    ) ;    





} 

export default StudentView;