import { useState  , useEffect} from "react"; 
import Sidebar  from "../Sidebar" ;   
import {Link , useNavigate  , useLocation } from "react-router-dom" ; 
import  "../Style/Course.css" ;  
import axios from "axios"  ;  


function Course() {    
    
       

  
    const [ data , setData ] = useState( []); 
    const location = useLocation(); 
    const [ typeId , setTypeId ] =  useState( location.state.typeId   ) ;   
    const  navigate = useNavigate() ; 
  
    
    const saveCourse = (  event  ) => { 
    
       
      console.log( event.target.course_name.value) ;   
      console.log( event.target.course_description.value) ;    
    

      axios({ 

            url : "http://localhost:8000/admin/course"  ,   

            method : "POST"  ,  

            data : {
              
              "course_name" :  event.target.course_name.value , 
              "course_description"  : event.target.course_description.value  



            }
      
           }).then( ( res) => {   
       


              console.log(  res ) ;  


              if(   res.data.message ===  "Course added Successfully."    ){
               
                 alert( "added Successfully.")  ;  
             
                navigate(  "/home/course"   ,    { state: {    typeId : "course"  }}  ,    { replace : false}  )   ;
  
              } 
              else {
      
                alert(   res.data.message  )  ;
              }    


             
           } ).catch(( err) => { 
               console.log( "error") ;
      
            }  ) ;  


      
    
    
        event.preventDefault();
      }


    


      
        useEffect(() => { 

        axios({ 

              url : "http://127.0.0.1:8000/admin/draftcourse"  ,  
              method : "POST"  , 
             data : {
       
              "search_key" : "" , 
              "page_no" :  1 ,
              "limit" : 10000   

                 }

                 }).then( ( res) => {   


                console.log(  res.data.data ) ; 
                 setData(  res.data.data ) ;  
       
       
                    //  console.log(   res.data.data[1].name )  ;

                  } ).catch(( err) => {  
                  console.log( "error") ;

                }  ) ; 

                   } , [])  ; 



    switch( typeId )  { 


    /* case "save_course" :   
  
        return( 
    
            <div className="course" >
     
            <div className="course_sidebar" >
              <Sidebar /> 
            </div>   
    
    
            
            <div className="course_body"  >   

            <form className="course_body_inner_div" onSubmit={ saveCourse }    >    
      
                 
                   
                 <input type="text"
                         name = "course_name"
                         placeholder="Enter course name"
                         className="course_input-box"
                         /> 
                  
            
                 
                 <input type="text" 
                         name = "course_description"
                         placeholder="Enter short description"
                         className="course_input-box"  style={{ marginBottom : "4.5%"}}
                         /> 
             
            
                 
                 <input   className="course_form_row_btn" type="submit" value="Submit" /> 
                 
               
            </form>

      
    
            </div> 

            </div> 




           )  ;  */
 
 



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


    
   <div  className="clientview_table_inner_div_table_row"  style={{  height : "82.04%"} }>   



      { 
         
         data.map( (  el  , index )  => (  

     <div key={ index}   style= {{ width : "100%" , height: "20%"  , backgroundColor : "pink" , borderRight : "1px solid black"  , display : "flex" , flexDirection : "row"}} >
   <div  style= {{   width: "15%"  ,  height: "100%"  , backgroundColor : "pink"  ,  borderRight : "1px solid black"   }}>
    <p>  { index+1}  </p>
    </div>  


    <div style= {{   width: "40%" , height: "100%"  , backgroundColor : "pink"  , borderRight : "1px solid black" }}>
      <p> { el.course_name } </p>
    </div>
    <div style= {{   width: "45%" ,  height: "100%"  , backgroundColor : "pink" , borderRight : "1px solid black"  ,  display : "flex" , flexDirection : "row"}  }>
      

                                <div style={{ height: "100%"  , width : "30%"}}> 
                                   <input type="button" value = "Submit"  onClick={()  => {        navigate(  "/home/dashboard/client/facilitator"   ,  { replace : false}  )  }  } /> 
                                </div>
                                 <div  style={{ height: "100%"  , width : "30%"}} >
                                        <input type="button" value = "Edit"  onClick={()  => {        navigate(  "/home/course/draftcourse/draftcoursedetails"   ,      { state: {    typeId :  "draft_course_content"    ,     course_name :   el.course_name  }}     ,  { replace : false}  )  }  } /> 
                                 </div> 

                                 <div  style={{ height: "100%"  , width : "30%"}} >
                                        <input type="button" value = "Delete"  onClick={()  => {        navigate(  "/home/dashboard/client/facilitator"   ,  { replace : false}  )  }  } /> 
                                 </div>
        </div> 

        </div>

         )) 
      }



        </div>
   
   

        </div> 


        </div> 

        </div>
         )  ;   

     

      
    case "permanent_course" :  

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
      <p>Name of course</p>
    </div>
    <div style= {{   width: "45%" ,  height: "100%"  , backgroundColor : "pink" , borderRight : "1px solid black"}  }>
   
    </div>
   

   </div>   




   <div  className="clientview_table_inner_div_table_row"  style={{  height : "82.04%"} }>  


{     

       
     <div style= {{ width : "100%" , height: "20%"  , backgroundColor : "pink" , borderRight : "1px solid black"  , display : "flex" , flexDirection : "row"}} >
   <div  style= {{   width: "15%"  ,  height: "100%"  , backgroundColor : "pink"  ,  borderRight : "1px solid black"   }}>
    <p> 1 </p>
    </div> 
    <div style= {{   width: "40%" , height: "100%"  , backgroundColor : "pink"  , borderRight : "1px solid black" }}>
      <p> Future Founders - fr - 2023 </p>
    </div>
    <div style= {{   width: "45%" ,  height: "100%"  , backgroundColor : "pink" , borderRight : "1px solid black"  ,  display : "flex" , flexDirection : "row"}  }>
      

                                
                                 <div  style={{ height: "100%"  , width : "30%"}} >
                                        <input type="button" value = "View"  onClick={()  => {        navigate(  "/home/viewcourse/permanentcoursedetails"   ,   { state: {    typeId :  "permanent_course_content"  }}     , { replace : false}  )  }  } /> 
                                 </div> 

                                
    </div> 

    </div>


  }


   </div>
   
   

   </div> 


        </div> 

        </div>
         )  ;   

       




    } 
} 

export default Course;