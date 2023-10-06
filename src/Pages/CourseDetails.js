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

  

    const goToNext = () => {
        

       console.log( courseName) ;
        navigate(  "/home/course/draftcourse/addcoursecontent"   ,  { state: {    typeId : "addcoursecontent"    ,  courseName : courseName  }}   ,  { replace : false}  ) ; 
        console.log("ASJghshGHS") ;  
 
 
 
 
       }  
  

   
       useEffect(() => { 
     

        

        
        axios({ 

              url : "http://127.0.0.1:8000/admin/course_wmb"  ,  
              method : "POST"  , 
             data : {
       
              "course_name" : "coursechnage" 

                 }

                 }).then( ( res) => {   


                console.log(  res) ; 
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

        
         <div  className="clientview_body1"   style= {{ backgroundColor : '#F1F2F7'}}  > 
          
         </div>
        
          <div className="clientview_table_outer_div_body2">   


           <div className="clientview_table_inner_div_column_name"    style= {{  backgroundColor : "#D9D9D9"  , borderBottom : "1px solid red"}}  >   

           <div  className="clientview_table_row_box"  style= {{   width: "10%"  ,  height: "100%"   ,  borderRight : "1px solid black" }}>
           <p>Sl No</p>
           </div> 
           <div  className="clientview_table_row_box"  style= {{   width: "40%" , height: "100%"  , borderRight : "1px solid black" }}>
             <p>Type</p>
           </div>
           <div  className="clientview_table_row_box"   style= {{   width: "50%" ,  height: "100%", borderRight : "1px solid black"}  }>
             <p>Name</p>
           </div>
          


          </div> 
          <div  className="clientview_table_inner_div_table_row">  


          {
        
          
                 
         data.map( (  el  , index )  => (  


          <div  key={ index} style= {{ width : "100%" , height: "25%"  , backgroundColor : "#F1F2F7" ,   borderBottom : "1px solid red"  , borderRight : "1px solid black"  , display : "flex" , flexDirection : "row"}} >
          <div   className="clientview_table_row_box"  style= {{   width: "10%"  ,  height: "100%"  ,  borderRight : "1px solid black" }}>
           <p>  { index+1}  </p>
           </div> 
           <div  className="clientview_table_row_box"  style= {{   width: "40%" , height: "100%"    , borderRight : "1px solid black" }}>
             <p>  { el.type_id }  </p>
           </div>
         


           <div   className="clientview_table_row_box"   style= {{   width: "50%"  ,  height: "100%"  , borderRight : "1px solid black" , display: "flex"  ,   flexDirection : "row"  , justifyContent : "space-around"}}>   

      
                          
                             <div className="clientview_table_row_box"   style={{ height: "100%"  , width : "30%"}} >  
                               
                             <p>  { el.name }  </p>
                            </div> 

                         

                          
              <input type="button" value = "submit"  onClick={()  => {        navigate(  "/home/dashboard/client/school"   ,  { replace : false}  )  }  } /> 
                         



                       
              <input   type="button"   style={{ height: "40%"  , width : "20%"}}  value = "edit"  onClick={()  => {     navigate(  "/home/course/draftcourse/module"   ,  { state: {   type :  el.type_id   ,   courseName :  courseName  ,  type_name :   el.name      }}   ,  { replace : false}  )  }  } /> 
                      



               <input   style={{ height: "40%"  , width : "20%"}} type="button" value = "delete"  onClick={()  => {        navigate(  "/home/dashboard/client/school"   ,  { replace : false}  )  }  } /> 
                       

           </div> 

    

         </div> 

         ))  

            

            }

          </div>
          
          

          </div> 

          <div className="body3" style= {{ backgroundColor : '#F1F2F7'  }}> 

          <div onClick={ () => { goToNext() } } className="add_new_program_button" style= { {  backgroundColor : "#FCC046"}}>
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

    
     <div  className="clientview_body1"  style= {{ backgroundColor : '#F1F2F7'}}  > 
   
     </div> 



    
      <div className="clientview_table_outer_div_body2">   


       <div className="clientview_table_inner_div_column_name"  style= {{  backgroundColor : "#D9D9D9"  , borderBottom : "1px solid red"}}   >   

       <div   className="clientview_table_row_box"  style= {{   width: "10%"  ,  height: "100%"   ,  borderRight : "1px solid black" }}>
       <p>Sl No</p>
       </div>  

       <div  className="clientview_table_row_box"  style= {{   width: "40%" , height: "100%"   , borderRight : "1px solid black" }}>
         <p>Type</p>
       </div> 

       <div className="clientview_table_row_box"   style= {{   width: "50%" ,  height: "100%"   , borderRight : "1px solid black"}  }>
         <p>Name</p>
       </div>
      


      </div> 
      <div  className="clientview_table_inner_div_table_row"  style={ { backgroundColor : "#F1F2F7"  }} >
         
         
 
{
  
  data.map( (  el  , index )  => (  
     
      <div key={index} style= {{ width : "100%" , height: "25%"  ,borderRight : "1px solid black"  , borderBottom : "1px solid red"  , display : "flex" , flexDirection : "row"}} > 


      <div  className="clientview_table_row_box"   style= {{   width: "10%"  ,  height: "100%"   ,  borderRight : "1px solid black" }}>
       <p>{ index +1 }</p>
       </div> 
       <div  className="clientview_table_row_box"  style= {{   width: "40%" , height: "100%"   , borderRight : "1px solid black" }}>
       <p>  { el.type_id }  </p>
       </div>
     

 
       <div className="clientview_table_row_box"  style= {{   width: "50%"  ,  height: "100%"  , borderRight : "1px solid black" , display: "flex"  ,   flexDirection : "row"}}>   


                 
                         <p> Module 1</p>
                   

                     

            

       </div> 



     </div> 
 

  ))

     }

      </div>
      
      

      </div> 

      <div className="body3"  style= {{ backgroundColor : '#F1F2F7'}}  > 

     
      </div>
    
    </div>



</div>
) ;     


  

    }
} 

export default CourseDetails;