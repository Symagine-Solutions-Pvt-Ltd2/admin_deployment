import "../Style/ClientView.css"  ;
import {Link , useNavigate  , useLocation} from "react-router-dom" ; 
import { useState  , useEffect } from "react"; 
import Sidebar from "../Sidebar"  ; 
import axios from "axios"  ;  



function CourseDetails() {    
     

   // const location = useLocation(); 
    //const [ typeId , setTypeId ] =  useState( location.state.typeId   ) ;   
    const  navigate = useNavigate() ;  
    const location = useLocation();  

 
  const [  typeId  , setTypeId ]   = useState( location.state.typeId   ) ;  
  const [  courseName  , setCourseName ]   = useState( location.state.course_name  ) ;  
  const [ data , setData ] = useState( []); 

  console.log( courseName) ;

    const goToNext = () => {
  
        navigate(  "/home/course/draftcourse/addcoursecontent"   ,  { state: {    typeId : "addcoursecontent" }}   ,  { replace : false}  ) ; 
        console.log("ASJghshGHS") ;  
 
 
 
 
       }  
  

   
       useEffect(() => { 

        axios({ 

              url : "http://127.0.0.1:8000/admin/Course_wmb"  ,  
              method : "POST"  , 
             data : {
       
                  "course_name" : "Future Founders_new"  

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
    
    case "draft_course_content" : 

    
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
           <div  style= {{   width: "10%"  ,  height: "100%"  , backgroundColor : "pink"  ,  borderRight : "1px solid black" }}>
           <p>Sl No</p>
           </div> 
           <div style= {{   width: "40%" , height: "100%"  , backgroundColor : "pink"  , borderRight : "1px solid black" }}>
             <p>Type</p>
           </div>
           <div style= {{   width: "50%" ,  height: "100%"  , backgroundColor : "pink" , borderRight : "1px solid black"}  }>
             <p>Name of Module</p>
           </div>
          


          </div> 
          <div  className="clientview_table_inner_div_table_row">
             
           {

                 
         data.map( (  el  , index )  => (  


          <div style= {{ width : "100%" , height: "25%"  , backgroundColor : "pink" , borderRight : "1px solid black"  , display : "flex" , flexDirection : "row"}} >
          <div  style= {{   width: "10%"  ,  height: "100%"  , backgroundColor : "pink"  ,  borderRight : "1px solid black" }}>
           <p>  { index+1}  </p>
           </div> 
           <div style= {{   width: "40%" , height: "100%"  , backgroundColor : "pink"  , borderRight : "1px solid black" }}>
             <p>  { el.type_id }  </p>
           </div>
         


           <div style= {{   width: "50%"  ,  height: "100%"  , backgroundColor : "pink" , borderRight : "1px solid black" , display: "flex"  ,   flexDirection : "row"}}>   


                            <div style={{ height: "100%"  , width : "30%"}} >
                             <p> Module 1</p>
                            </div>

                         

                             <div  style={{ height: "100%"  , width : "20%"}} >
                                    <input type="button" value = "submit"  onClick={()  => {        navigate(  "/home/dashboard/client/school"   ,  { replace : false}  )  }  } /> 
                             </div> 



                             <div  style={{ height: "100%"  , width : "20%"}} >
                                    <input type="button" value = "edit"  onClick={()  => {     navigate(  "/home/course/draftcourse/module"   ,  { state: {    typeId : "addcoursecontent" }}   ,  { replace : false}  )  }  } /> 
                             </div> 



                             <div  style={{ height: "100%"  , width : "20%"}} >
                                    <input type="button" value = "delete"  onClick={()  => {        navigate(  "/home/dashboard/client/school"   ,  { replace : false}  )  }  } /> 
                             </div> 

           </div> 

    

         </div> 

         ))

           }

          </div>
          
          

          </div> 

          <div className="body3"> 

          <div onClick={ () => { goToNext() } } className="add_new_program_button">
            <p>Add</p>
          </div>
        
          </div>
        
        </div>



</div>
) ;     

   case "permanent_course_content" :   


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
       <div  style= {{   width: "10%"  ,  height: "100%"  , backgroundColor : "pink"  ,  borderRight : "1px solid black" }}>
       <p>Sl No</p>
       </div> 
       <div style= {{   width: "40%" , height: "100%"  , backgroundColor : "pink"  , borderRight : "1px solid black" }}>
         <p>Type</p>
       </div>
       <div style= {{   width: "50%" ,  height: "100%"  , backgroundColor : "pink" , borderRight : "1px solid black"}  }>
         <p>Name of Module</p>
       </div>
      


      </div> 
      <div  className="clientview_table_inner_div_table_row">
         
        
      <div style= {{ width : "100%" , height: "25%"  , backgroundColor : "pink" , borderRight : "1px solid black"  , display : "flex" , flexDirection : "row"}} >
      <div  style= {{   width: "10%"  ,  height: "100%"  , backgroundColor : "pink"  ,  borderRight : "1px solid black" }}>
       <p>1</p>
       </div> 
       <div style= {{   width: "40%" , height: "100%"  , backgroundColor : "pink"  , borderRight : "1px solid black" }}>
         <p>Module</p>
       </div>
     


       <div style= {{   width: "50%"  ,  height: "100%"  , backgroundColor : "pink" , borderRight : "1px solid black" , display: "flex"  ,   flexDirection : "row"}}>   


                        <div style={{ height: "100%"  , width : "30%"}} >
                         <p> Module 1</p>
                        </div>

                     

            

       </div> 



     </div>

      </div>
      
      

      </div> 

      <div className="body3"> 

     
      </div>
    
    </div>



</div>
) ;     


  

    }
} 

export default CourseDetails;