import "../Style/ClientView.css"  ;
import {Link , useNavigate  , useLocation} from "react-router-dom" ; 
import { useState  , useEffect   } from "react"; 
import Sidebar from "../Sidebar"  ; 
import axios from "axios"  ;  

 




// popup 
import Popup from "../Components/Popup"; 





function StudentView() {    
    
    

  const [ data , setData ] = useState( []);  
  
  const location = useLocation();   


  
  
   // for popup 
   const[ popupInfo  , setPopupInfo ] = useState("") ;
   const[ popup  , setPopup ] = useState( false) ; 
  
  

  console.log( location.state.programId  ) ;
  console.log( location.state.schoolId ) ;


    const  navigate = useNavigate() ;  
    const goToNext = () => {
  
       navigate(  "/home/dashboard/client/student/addstudent"   ,  { state: {    typeId : "system_admin_student"        ,    schoolId :  location.state.schoolId   , programId : location.state.programId  }}   ,  { replace : false}  ) ; 
       console.log("ASJghshGHS") ;  
      }    


   


      useEffect(() => { 

        axios({ 
  
         url : "http://localhost:8000/admin/a_student"  ,  
         method : "POST"  , 
         data : {
           
                  "search_key" :  location.state.schoolId  , 
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
 
  
   
    

   
    const  handleStatusChange = ( cs  ) => {    
    
      setPopupInfo( cs) ;
      console.log( cs) ;
       setPopup( true)  ;
      
 } 


    return(
       
    <div className="clientview">  

    <div className="clientview_sidebar" >
           <Sidebar /> 
    </div>  

    <div className="clientview_body">   

     





    <Popup  trigger= { popup  } setTrigger={ setPopup }   >
            <h3> {popupInfo } </h3>
          </Popup> 



          
     <div  className="clientview_body1"> 
    
     </div>
    



      <div className="clientview_table_outer_div_body2">   


       <div className="clientview_table_inner_div_column_name">    


       <div  className="clientview_table_row_box" style= {{   width: "8%"  ,  height: "100%"    ,  borderRight : "1px solid black" }}>
       <p>Sl No</p>
       </div>

       <div  className="clientview_table_row_box"  style= {{   width: "11%" , height: "100%"    , borderRight : "1px solid black" }}>
         <p>Name of school</p>
       </div> 

       <div   className="clientview_table_row_box" style= {{   width: "11%" ,  height: "100%"  , borderRight : "1px solid black"}  }>
         <p>Name of student</p>
       </div> 

       <div   className="clientview_table_row_box" style= {{  width: "11%"  ,  height: "100%"   , borderRight : "1px solid black"}}>
         <p>Status (submitted Business Plan)</p>
       </div> 
       <div  className="clientview_table_row_box"  style= {{   width: "11%"  ,  height: "100%"  , borderRight : "1px solid black"}}> 
        <p>Certificate issued</p>
       </div> 

       <div   className="clientview_table_row_box"  style= {{  width: "11%"  ,    height: "100%"   , borderRight : "1px solid black"}}> 
        <p>View Business Plan</p>
       </div> 
       <div className="clientview_table_row_box"  style= {{   width: "11%"  ,    height: "100%"   , borderRight : "1px solid black"}}> 
        <p>Download</p>
       </div>
        
       <div    className="clientview_table_row_box" style= {{   width: "11%"  ,    height: "100%" , borderRight : "1px solid black"}}> 
        <p>Account Status</p>
       </div>

       <div    className="clientview_table_row_box" style= {{   width: "15%"  ,    height: "100%"  , borderRight : "1px solid black"}}> 
        <p>Account status</p>
       </div>
    </div>   
 




      <div  className="clientview_table_inner_div_table_row">
           
            


      {   


           data.map( (  el   , index )  => (  

      <div  key ={index} style= {{ width : "100%" , height: "25%"  , borderBottom : "1px solid blue" , display : "flex" , flexDirection : "row"}} >  


      <div   className="clientview_table_row_box"  style= {{   width: "8%"  ,  height: "100%"    ,  borderRight : "1px solid black" }}>
       <p>{ index +1 }</p>
       </div>  


       <div  className="clientview_table_row_box" style= {{   width: "11%" , height: "100%" , borderRight : "1px solid black" }}>
         <p> {  el.school_name }</p>
       </div> 


       <div   className="clientview_table_row_box" style= {{   width: "11%" ,  height: "100%" , borderRight : "1px solid black"}  }>
         <p> { el.student_name } </p>
       </div> 


       <div  className="clientview_table_row_box"  style= {{  width: "11%"  ,  height: "100%"  , borderRight : "1px solid black"}}>
         <p>Yes</p>
       </div>  

       <div   className="clientview_table_row_box"  style= {{  width: "11%"  ,  height: "100%"   , borderRight : "1px solid black"}}>
         <p>Yes</p>
       </div>  

       <div    className="clientview_table_row_box"  style= {{  width: "11%"  ,  height: "100%"   , borderRight : "1px solid black"}}>

          
                <input  style={{ height: "40%"  , width : "60%"}}  type="button" value = "view"  onClick={()  => {        navigate(  "/home/dashboard/client/school"   ,  { replace : false}  )  }  } /> 
            

       </div> 


       <div   className="clientview_table_row_box" style= {{   width: "11%"  ,  height: "100%"   , borderRight : "1px solid black" , display: "flex"  ,   flexDirection : "row"}}> 
                   
                        
        <input   style={{ height: "40%"  , width : "60%"}} type="button" value = "download"  onClick={()  => {        navigate(  "/home/dashboard/client/school"   ,  { replace : false}  )  }  } /> 
                    
       </div>  




       <div    className="clientview_table_row_box"  style= {{  width: "11%"  ,    height: "100%" , borderRight : "1px solid black"}}> 
        <p> { el.status } </p>
       </div>   

 


       <div   className="clientview_table_row_box"   style= {{   width: "15%"  ,    height: "100%"   , borderRight : "1px solid black"  ,  display: "flex"  ,   flexDirection : "row"   , justifyContent : "space-around"}}> 
                    
            <input   style={{ height: "40%"  , width : "40%"}}   type="button" value = "status"  onClick= { () => {handleStatusChange( el.student_name) } }/> 
                    
                   
        <input  style={{ height: "40%"  , width : "40%"}}  type="button" value = "edit"  onClick={()  => {        navigate(  "/home/dashboard/client/student/editstudent"     ,    {  state: {    typeId : "student"     ,  data : el }}   , { replace : false}  )  }  } /> 
                         
       </div>

</div>  

  
           ))


      }

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