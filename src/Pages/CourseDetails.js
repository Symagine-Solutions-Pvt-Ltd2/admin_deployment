import "../Style/ClientView.css"  ;
import {Link , useNavigate  , useLocation} from "react-router-dom" ; 
import { useState  , useEffect } from "react"; 
import Sidebar from "../Sidebar"  ; 
import axios from "axios"  ;  


// popup 
import CoursePopup from "../Components/CoursePopup"; 



function CourseDetails() {    
     

    // for popup 
      const[ popupInfo  , setPopupInfo ] = useState("") ; 
      const[ popupScreenType  , setPopupScreenType  ] = useState("") ; 
      const[ popup  , setPopup ] = useState( false) ; 
     
      
   const  navigate = useNavigate() ;  
    const location = useLocation();            

 
  const [  typeId  , setTypeId ]   = useState( location.state.typeId   ) ; 
  const [  courseId , setCourseId ]   = useState( location.state.courseId  ) ;  
  const [ data , setData ] = useState( []); 
  const [  courseName , setCourseName  ]   = useState( location.state.courseName   ) ;
   

/* 

   console.log( "coursedetails") ;  
   console.log( location.state.typeId  ) ;
   console.log( location.state.courseName  ) ;
   console.log( location.state.courseId ) ; 
 */



    const goToNext = () => {
        

       console.log( courseName) ; 

        navigate(  "/home/course/draftcourse/addcoursecontent"   ,  { state: {    typeId : "addcoursecontent"    ,  courseName : location.state.courseName   , courseId : location.state.courseId  ,  userInfo :  location.state.userInfo }}   ,  { replace : false}  ) ; 
     
 
       }  
   









   
       useEffect(() => { 
      
        axios({ 

              url : "http://3.123.39.199:5000/admin/course_wmb"  ,  
              method : "POST"  , 
             data : {
       
              "_id" :  courseId 

                 }

                 }).then( ( res) => {   


                console.log(  res) ;   
                if(  res.data.message === "Information retrieve successfully") {  
                setData(  res.data.data ) ;  
                }
       
          

                  } ).catch(( err) => {  
                  console.log( "error") ;

                }  ) ;   

         


              



              

                   } , [ popup])  ; 

  
   













   const   deleteContent = (cs , screenType)  => { 
    
   

   
    setPopupInfo( cs) ;
    setPopupScreenType( screenType ) ; 
     setPopup( true)  ;
 
     
/*      console.log( cs) ; 
     console.log( screenType) ;  */ 

    

 } 














    


    switch( typeId )  {  
    
    case "draft_course_content" : 

    
    return( 


        <div className="clientview">  

        <div className="clientview_sidebar"   style={{ borderRadius : 25}} >
               <Sidebar    info = {  location.state.userInfo} /> 
        </div>  

        <div className="clientview_body">   
 
          
      <CoursePopup  trigger= { popup  } setTrigger={ setPopup }   screenType = { popupScreenType }    data = { popupInfo} > 
      </CoursePopup>




         <div  className="clientview_body1"   style= {{ backgroundColor : '#FFFFF'}}  > 
          
         </div>
        
          <div className="clientview_table_outer_div_body2">   


           <div className="clientview_table_inner_div_column_name"    style= {{  backgroundColor : "#D9D9D9"  , borderBottom : "1px solid #B6B7D0"}}  >   

           <div  className="clientview_table_row_box"  style= {{   width: "10%"  ,  height: "100%"   ,  borderRight : "1px solid black" }}>
           <p className="header_text">Sl No</p>
           </div> 
           <div  className="clientview_table_row_box"  style= {{   width: "40%" , height: "100%"  , borderRight : "1px solid black" }}>
             <p className="header_text">Type</p>
           </div>
           <div  className="clientview_table_row_box"   style= {{   width: "50%" ,  height: "100%", borderRight : "1px solid black"}  }>
             <p className="header_text">Name</p>
           </div>
          


          </div> 
          <div  className="clientview_table_inner_div_table_row">  


          {
        
          
                 
         data.map( (  el  , index )  => (  


          <div  key={ index} style= {{ width : "100%" , height: "25%"  , backgroundColor : "#FFFFFF" ,   borderBottom : "1px solid #B6B7D0"  , borderRight : "1px solid black"  , display : "flex" , flexDirection : "row"}} >
          <div   className="clientview_table_row_box"  style= {{   width: "10%"  ,  height: "100%"  ,  borderRight : "1px solid black" }}>
           <p>  { index+1}  </p>
           </div> 
           <div  className="clientview_table_row_box"  style= {{   width: "40%" , height: "100%"    , borderRight : "1px solid black" }}>
             <p>  { el.type_id }  </p>
           </div>
         


           <div   className="clientview_table_row_box"   style= {{   width: "50%"  ,  height: "100%"  , borderRight : "1px solid black" , display: "flex"  ,   flexDirection : "row"  , justifyContent : "space-around"}}>   

      
                          
                             <div className="clientview_table_row_box"   style={{ height: "100%"  , width : "60%"}} >  
                               
                             <p>  { el.name }  </p>
                            </div> 
                         

               <div  className="clientview_table_row_box"  style={{ height: "100%"  , width : "40%"  , justifyContent : "space-around"}}>  


                       
              <input className="inner_table_btn"    type="button"   style={{ height: "40%"  , width : "40%"}}  value = "edit"  onClick={()  => {     navigate(  "/home/course/draftcourse/module"   ,  { state: {   type :  el.type_id   ,           courseId :  location.state.courseId ,   courseName :  courseName  ,  type_name :   el.name    , userInfo :  location.state.userInfo    }}   ,  { replace : false}  )  }  } /> 
                      



               <input  className="inner_table_btn"   style={{ height: "40%"  , width : "40%"}} type="button" value = "delete"  onClick={()  => { deleteContent( el  ,  "course_details_delete" )    }  } /> 
 


                  </div>       

           </div> 

    

         </div> 

         ))  

            

            }

          </div>
          
          

          </div> 

          <div className="body3" style= {{ backgroundColor : '#FFFFFF'  }}> 

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

    <div className="clientview_sidebar"   style={{ borderRadius : 25}} >
           <Sidebar      info = {  location.state.userInfo}/> 
    </div>  

    <div className="clientview_body">   

    
     <div  className="clientview_body1"  style= {{ backgroundColor : '#F1F2F7'}}  > 
   
     </div> 



    
      <div className="clientview_table_outer_div_body2">   


       <div className="clientview_table_inner_div_column_name"  style= {{  backgroundColor : "#D9D9D9"  , borderBottom : "1px solid red"}}   >   

       <div   className="clientview_table_row_box"  style= {{   width: "10%"  ,  height: "100%"   ,  borderRight : "1px solid black" }}>
       <p className="header_text">Sl No</p>
       </div>  

       <div  className="clientview_table_row_box"  style= {{   width: "40%" , height: "100%"   , borderRight : "1px solid black" }}>
         <p className="header_text">Type</p>
       </div> 

       <div className="clientview_table_row_box"   style= {{   width: "50%" ,  height: "100%"   , borderRight : "1px solid black"}  }>
         <p className="header_text">Name</p>
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


                 
                         <p>  { el.name } </p>
                   

                     

            

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