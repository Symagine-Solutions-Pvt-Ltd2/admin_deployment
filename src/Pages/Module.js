import  "../Style/ClientView.css" ;  
import {Link , useNavigate  , useLocation} from "react-router-dom" ; 
import { useState   , useEffect   } from "react"; 
import Sidebar from "../Sidebar"  ;
import axios from "axios"  ;





function  Module() {    
  
  const  navigate = useNavigate() ;    
  const location = useLocation(); 

  
  const [ data , setData ] = useState( []); 
  const [  courseName  , setCourseName ]   = useState(location.state.courseName) ; 
  const [  name  , setName ]   = useState( location.state.type_name  ) ; 
  const [  type  , setType ]   = useState( location.state.type  ) ; 

    

  console.log("module" ) ; 
  console.log( location.state.courseName )  ; 
  console.log( location.state.type_name)  ; 
  console.log( location.state.type )  ; 
 


  const goToNext = () => {

      navigate(  "/home/course/draftcourse/module/selectcontenttype"   ,  { state: {  type :  type   ,   courseName :  location.state.courseName  ,  type_name :  location.state.type_name   }}   ,  { replace : false}  ) ; 
      console.log("ASJghshGHS") ;  




     } 

     useEffect(() => { 

         



      if(   location.state.type === "module" ){

      
      axios({ 

            url : "http://127.0.0.1:8000/admin/module_am"  ,  
            method : "POST"  , 
           data : {
     
                
                 "course_name" : location.state.courseName  ,
                  "module_name" : location.state.type_name  , 
                  "type_id"  : location.state.type

               }

               }).then( ( res) => {   

                
              
               console.log(  res ) ; 
           
     
     
               if(  res.data.message === "data not found"){
                      
                alert(   res.data.message)  ; 
               }else{
                   
                setData(  res.data.data ) ;  

               }


                } ).catch(( err) => {  
                console.log( "error") ;

              }  ) ; 
  


            }  
             else {


              axios({ 

                url : "http://127.0.0.1:8000/admin/workshop_am"  ,  
                method : "POST"  , 
               data : {
         
                    
                     "course_name" : location.state.courseName  ,
                      "workshop_name" : location.state.type_name  , 
                      "type_id"  : location.state.type
    
                   }
    
                   }).then( ( res) => {   
    
                    
                  
                   console.log(  res ) ; 
                  // setData(  res.data.data ) ;  
           
    
    
    
    
    
    
                    } ).catch(( err) => {  
                    console.log( "error") ;
    
                  }  ) ; 
      

             }


                 } , [])  ; 

    
              





    return (
      <div className="clientview">  

      <div className="clientview_sidebar" >
             <Sidebar /> 
      </div>  
  
      <div className="clientview_body">   
  
      
       <div  className="clientview_body1"   style= {{ backgroundColor : '#F1F2F7'}}  > 
    
       </div>
      
        <div className="clientview_table_outer_div_body2">   
    
  
         <div className="clientview_table_inner_div_column_name"   style ={{ backgroundColor : "#D9D9D9"   , borderBottom : "1px solid red"}}>   

         <div  className="clientview_table_row_box"  style= {{   width: "10%"  ,  height: "100%"  ,  borderRight : "1px solid black" }}>
         <p>Sl No</p>
         </div> 
         <div className="clientview_table_row_box" style= {{   width: "40%" , height: "100%"   , borderRight : "1px solid black" }}>
           <p>Content type</p>
         </div>
         <div className="clientview_table_row_box"  style= {{   width: "50%" ,  height: "100%"   , borderRight : "1px solid black"}  }>
           <p>Content Name</p>
         </div>
        
  
  
        </div> 
        <div  className="clientview_table_inner_div_table_row">
            

      {
        data.map( (  el  , index )  => (  
          
        <div     key={ index}  style= {{ width : "100%" , height: "25%"  , backgroundColor : '#F1F2F7' ,  borderBottom : "1px solid red" , borderRight : "1px solid black"  , display : "flex" , flexDirection : "row"}} >
        
        
         <div  className="clientview_table_row_box"  style= {{   width: "10%"  ,  height: "100%"  ,  borderRight : "1px solid black" }}>
         <p> { index+1 } </p>
         </div> 
         <div  className="clientview_table_row_box"  style= {{   width: "40%" , height: "100%"    , borderRight : "1px solid black" }}>
           <p>  { el.sub_type }  </p>
         </div>
       
  
  
         <div  className="clientview_table_row_box" style= {{   width: "50%"  ,  height: "100%"   , borderRight : "1px solid black" , display: "flex"  ,   flexDirection : "row" , justifyContent : "space-around"}}>   
  
  
                          <div className="clientview_table_row_box"  style={{ height: "100%"  , width : "40%"}} >
                           <p>Do you know?</p>
                          </div>
  
  
  
       
            <input style={{ height: "40%"  , width : "20%"}}  type="button" value = "edit"  onClick={()  => {   }  } /> 
                         
  
  

               <input style={{ height: "40%"  , width : "20%"}}  type="button" value = "delete"  onClick={()  => {        navigate(  "/home/dashboard/client/school"   ,  { replace : false}  )  }  } /> 
                       
  
         </div> 
  
  
  
       </div> 

        )) 

} 
  
        </div>
        
        
  
        </div> 
  
        <div className="body3"   style= {{ backgroundColor : '#F1F2F7'}} > 
  
        <div onClick={ () => { goToNext() } } className="add_new_program_button"  style= { {  backgroundColor : "#FCC046"}} >
          <p>Add</p>
        </div>
      
        </div>
      
      </div>
  
  
  
  </div>
    )
    }
    
    export default Module;