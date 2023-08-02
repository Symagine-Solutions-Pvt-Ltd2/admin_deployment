import {Link , useNavigate  , useLocation} from "react-router-dom" ; 
import { useState } from "react"; 
import Sidebar from "../Sidebar"  ; 




function  FacilitatorView() {    
    
    const  navigate = useNavigate() ;  
    const goToNext = () => {
  
       navigate(  "/home/dashboard/client/addclient"   ,  { replace : false}  ) ; 
       console.log("ASJghshGHS") ;  




      }  


 



  return (
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
               <div  style= {{   width: "10%"  ,  height: "100%"  , backgroundColor : "pink"  ,  borderRight : "1px solid black" }}>
               <p>Sl No</p>
               </div> 
               <div style= {{   width: "25%" , height: "100%"  , backgroundColor : "pink"  , borderRight : "1px solid black" }}>
                 <p>Name of facilitator</p>
               </div>
               <div style= {{   width: "25%" ,  height: "100%"  , backgroundColor : "pink" , borderRight : "1px solid black"}  }>
                 <p>Email ID</p>
               </div>
               <div style= {{  width: "15%"  ,  height: "100%"  , backgroundColor : "pink"  , borderRight : "1px solid black"}}>
                 <p>Account Status</p>
               </div> 
               <div style= {{   width: "25%"  ,  height: "100%"  , backgroundColor : "pink" , borderRight : "1px solid black"}}> 
                <p>Account status</p>
               </div> 


              </div>  



              <div  className="clientview_table_inner_div_table_row">
                 


                <div className="clientview_table_inner_div_column_name"    style={{ height: "25%"}}>  
               <div  style= {{   width: "10%"  ,  height: "100%"  , backgroundColor : "pink"  ,  borderRight : "1px solid black" }}>
               <p>Sl No</p>
               </div> 
               <div style= {{   width: "25%" , height: "100%"  , backgroundColor : "pink"  , borderRight : "1px solid black" }}>
                 <p>Name of facilitator</p>
               </div>
               <div style= {{   width: "25%" ,  height: "100%"  , backgroundColor : "pink" , borderRight : "1px solid black"}  }>
                 <p>Email ID</p>
               </div>
               <div style= {{  width: "15%"  ,  height: "100%"  , backgroundColor : "pink"  , borderRight : "1px solid black"}}>
                 <p>Account Status</p>
               </div> 
               <div style= {{   width: "25%"  ,  height: "100%"  , backgroundColor : "pink" , borderRight : "1px solid black"  , display:"flex"  , flexDirection :"row"  , justifyContent: "space-around"}}> 
                  <div  style= {{ backgroundColor :"yellow"  , width :"40%"  , height:"50%" }} >
                       <p>Status</p>
                  </div> 

                  <div  style= {{ backgroundColor :"yellow"  ,  width :"40%"  , height:"50%"  }}>
                     <p>Edit</p>
                  </div>
               </div> 


              </div>  
              </div>
              
              
    
              </div> 

              <div className="body3"> 

              <div onClick={ () => { goToNext() } } className="add_new_program_button">
                <p>Add new facilitator</p>
              </div>
            
              </div>
             
            </div>



    </div>
    ) ;
} 

export default FacilitatorView;