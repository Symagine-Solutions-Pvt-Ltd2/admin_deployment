import { useState  , useEffect} from "react"; 
import Sidebar  from "../Sidebar" ;   
import {Link , useNavigate  , useLocation} from "react-router-dom" ; 
import  "../Style/Course.css" ; 


function Course() {    
    
       




    const [ typeId , setTypeId ] =  useState( "draft_course") ;  
    const  navigate = useNavigate() ; 
  
    
    const onTrigger = (  event  ) => { 
    

        console.log( typeId) ; 
        console.log("bhjgjgj") ; 
          
        navigate(  "/home/course"   ,  { replace : false}  )   ;
    
    
        event.preventDefault();
      }





    switch( typeId )  { 


    case "permanent_course" :   
  
        return( 
    
            <div className="course" >
     
            <div className="course_sidebar" >
              <Sidebar /> 
            </div>   
    
    
            
            <div className="course_body"  >   

            <form className="course_body_inner_div" onSubmit={onTrigger }    >    
      
                 
                   
                 <input type="text"
                      
                         placeholder="Enter course name"
                         className="course_input-box"
                         /> 
                  
            
                 
                 <input type="text"
                         placeholder="Enter short description"
                         className="course_input-box"  style={{ marginBottom : "4.5%"}}
                         /> 
             
            
                 
                 <input className="course_form_row_btn" type="submit" value="Submit" /> 
                 
               
            </form>

      
    
            </div> 

            </div>
           )  ; 
 

    case "draft_course" :  

    return( 
    
       
        <div className="course" >
     
        <div className="course_sidebar" >
          <Sidebar /> 
        </div>   


        
        <div className="course_body"  >    

        <div  className="clientview_body1"> 
             <p>hjxgajgj</p> 
             </div>



        <div className="clientview_table_outer_div_body2"  style={{ height :"80.47%"}}  >   
    

    <div className="clientview_table_inner_div_column_name"  style={{ height :"17.96%"}}  >  
    <div  style= {{   width: "15%"  ,  height: "100%"  , backgroundColor : "pink"  ,  borderRight : "1px solid black" }}>
    <p>Sl No</p>
    </div> 
    <div style= {{   width: "40%" , height: "100%"  , backgroundColor : "pink"  , borderRight : "1px solid black" }}>
      <p>Name of Draft Course</p>
    </div>
    <div style= {{   width: "45%" ,  height: "100%"  , backgroundColor : "pink" , borderRight : "1px solid black"}  }>
   
    </div>
   

   </div> 
   <div  className="clientview_table_inner_div_table_row"  style={{  height : "82.04%"}}>
    
   </div>
   
   

   </div> 


        </div> 

        </div>
         )  ; 


    } 
} 

export default Course;