import "../Style/ClientView.css"  ;
import {Link , useNavigate  , useLocation} from "react-router-dom" ; 
import { useState } from "react"; 
import Sidebar from "../Sidebar"  ; 



function ClientView() {    
    
  const  navigate = useNavigate() ;  
    const goToNext = () => {
  
       navigate(  "/home/dashboard/client/addclient"   ,  { replace : false}  ) ; 
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
               <div  style= {{   width: "8.69%"  ,  height: "100%"  , backgroundColor : "pink"  ,  borderRight : "1px solid black" }}>
               <p>Sl No</p>
               </div> 
               <div style= {{   width: "15.76%" , height: "100%"  , backgroundColor : "pink"  , borderRight : "1px solid black" }}>
                 <p> Name of Client</p>
               </div>
               <div style= {{   width: "15.76%" ,  height: "100%"  , backgroundColor : "pink" , borderRight : "1px solid black"}  }>
                 <p>Contact Person</p>
               </div>
               <div style= {{  width: "15.76%"  ,  height: "100%"  , backgroundColor : "pink"  , borderRight : "1px solid black"}}>
                 <p>Contact Email Id</p>
               </div> 
               <div style= {{   width: "15.76%"  ,  height: "100%"  , backgroundColor : "pink" , borderRight : "1px solid black"}}> 
                <p>No of schools</p>
               </div> 

               <div style= {{  width: "8.69%"  ,    height: "100%"  , backgroundColor : "pink" , borderRight : "1px solid black"}}> 
                <p>Account Status</p>
               </div> 
               <div style= {{   width: "20.19%"  ,    height: "100%"  , backgroundColor : "pink" , borderRight : "1px solid black"}}> 
                <p>Account status</p>
               </div>

              </div> 
              <div  className="clientview_table_inner_div_table_row">
               
              </div>
              
              
    
              </div> 

              <div className="body3"> 

              <div onClick={ () => { goToNext() } } className="add_new_program_button">
                <p>Add new client</p>
              </div>
            
              </div>
            
            </div>



    </div>
    ) ; 
} 

export default ClientView;