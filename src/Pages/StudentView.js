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
  const [  typeId  , setTypeId ]   = useState( location.state.typeId   ) ;  

  
  
   // for popup 
   const[ popupInfo  , setPopupInfo ] = useState("") ;
   const[ popup  , setPopup ] = useState( false) ; 
   const[ userNameForPopup  , setUserNameForPopup ] = useState( "") ; 
  
/* 
   console.log( "studentview" ) ;
  console.log( location.state.programId  ) ;
  console.log( location.state.schoolId ) ; 
  console.log( location.state.typeId ) ; 
 */

    const  navigate = useNavigate() ;   
     


    const goToNext = () => {
  
       navigate(  "/home/dashboard/client/student/addstudent"   ,  { state: {    typeId : "system_admin_student"     , type : location.state.typeId      ,    schoolId :  location.state.schoolId   , programId : location.state.programId   ,   userInfo :  location.state.userInfo }}   ,  { replace : false}  ) ; 
       console.log("ASJghshGHS") ;  
      }    


   


      useEffect(() => { 

        axios({ 
  
         url : "http://3.123.39.199:5000/admin/a_student"  ,  
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
  
    } , [ popup])  ; 
 
  
   
    

   
    const  handleStatusChange = ( cs  ) => {    
    
      setPopupInfo( cs) ;
      // console.log( cs) ;
      setUserNameForPopup( cs.student_name) ;
        setPopup( true)  ;
      
 } 
 




 switch( typeId )  {   
   


  case "student_with_edit" : 

    return(
       
    <div className="clientview">  

    <div className="clientview_sidebar"  style={{ borderRadius : 25}} >
           <Sidebar    info = {  location.state.userInfo}/> 
    </div>  

    <div className="clientview_body">   

     





    <Popup  trigger= { popup  } setTrigger={ setPopup }   data={ popupInfo}   >
    <h3>{userNameForPopup}</h3>
          </Popup> 



          
     <div  className="clientview_body1"> 
    
     </div>
    



      <div className="clientview_table_outer_div_body2">   


       <div className="clientview_table_inner_div_column_name">    


       <div  className="clientview_table_row_box" style= {{   width: "8%"  ,  height: "100%"    ,  borderRight : "1px solid black" }}>
       <p className="header_text">Sl No</p>
       </div>

       <div  className="clientview_table_row_box"  style= {{   width: "11%" , height: "100%"    , borderRight : "1px solid black" }}>
         <p className="header_text">Name of school</p>
       </div> 

       <div   className="clientview_table_row_box" style= {{   width: "11%" ,  height: "100%"  , borderRight : "1px solid black"}  }>
         <p className="header_text">Name of student</p>
       </div> 

       <div   className="clientview_table_row_box" style= {{  width: "11%"  ,  height: "100%"   , borderRight : "1px solid black"}}>
         <p className="header_text">Status (submitted Business Plan)</p>
       </div> 
       <div  className="clientview_table_row_box"  style= {{   width: "11%"  ,  height: "100%"  , borderRight : "1px solid black"}}> 
        <p className="header_text">Certificate issued</p>
       </div> 

       <div   className="clientview_table_row_box"  style= {{  width: "11%"  ,    height: "100%"   , borderRight : "1px solid black"}}> 
        <p className="header_text">View Business Plan</p>
       </div> 
       <div className="clientview_table_row_box"  style= {{   width: "11%"  ,    height: "100%"   , borderRight : "1px solid black"}}> 
        <p className="header_text">Download</p>
       </div>
        
       <div    className="clientview_table_row_box" style= {{   width: "11%"  ,    height: "100%" , borderRight : "1px solid black"}}> 
        <p className="header_text">Account Status</p>
       </div>

       <div    className="clientview_table_row_box" style= {{   width: "15%"  ,    height: "100%"  , borderRight : "1px solid black"}}> 
        <p className="header_text">Account status</p>
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

          
        <input   className="inner_table_btn" style={{ height: "40%"  , width : "60%"}}  type="button" value = "view"  onClick={()  => {    navigate(  "/home/dashboard/client/student/viewplan"      ,   { state: { typeId :   location.state.typeId ,  schoolId : location.state.schoolId      ,   programId:  location.state.programId  ,   userInfo :  location.state.userInfo     ,    data :  el   }}        ,  { replace : false}  )     }  } /> 
            

       </div> 


       <div   className="clientview_table_row_box" style= {{   width: "11%"  ,  height: "100%"   , borderRight : "1px solid black" , display: "flex"  ,   flexDirection : "row"}}> 
                   
                        
      <input   className="inner_table_btn"  style={{ height: "40%"  , width : "65%"}} type="button" value = "download"  onClick={()  => {    }  } /> 
                    
       </div>  




       <div    className="clientview_table_row_box"  style= {{  width: "11%"  ,    height: "100%" , borderRight : "1px solid black"}}> 
        <p> { el.status } </p>
       </div>   

 


       <div   className="clientview_table_row_box"   style= {{   width: "15%"  ,    height: "100%"   , borderRight : "1px solid black"  ,  display: "flex"  ,   flexDirection : "row"   , justifyContent : "space-around"}}> 
                    
         <input   className="inner_table_btn"    style={{ height: "40%"  , width : "40%"}}   type="button" value = "status"  onClick= { () => {handleStatusChange( el) } }/> 
                    
                   
        <input   className="inner_table_btn"  style={{ height: "40%"  , width : "40%"}}  type="button" value = "edit"  onClick={()  => {        navigate(  "/home/dashboard/client/student/editstudent"     ,    {  state: {    typeId : "student"      ,  type : location.state.typeId ,  data : el   ,     userInfo :  location.state.userInfo }}   , { replace : false}  )  }  } /> 
                         
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


    case "student" : 

    return(
       
    <div className="clientview">  

    <div className="clientview_sidebar"   style={{ borderRadius : 25}} >
           <Sidebar    info = {  location.state.userInfo}/> 
    </div>  

    <div className="clientview_body">   

     





    <Popup  trigger= { popup  } setTrigger={ setPopup }   >
            <h3> {popupInfo } </h3>
          </Popup> 



          
     <div  className="clientview_body1"> 
    
     </div>
    



      <div className="clientview_table_outer_div_body2">   


       <div className="clientview_table_inner_div_column_name">    


       <div  className="clientview_table_row_box" style= {{   width: "10%"  ,  height: "100%"    ,  borderRight : "1px solid black" }}>
       <p className="header_text">Sl No</p>
       </div>

       <div  className="clientview_table_row_box"  style= {{   width: "15%" , height: "100%"    , borderRight : "1px solid black" }}>
         <p className="header_text">Name of school</p>
       </div> 

       <div   className="clientview_table_row_box" style= {{   width: "15%" ,  height: "100%"  , borderRight : "1px solid black"}  }>
         <p className="header_text">Name of student</p>
       </div> 

       <div   className="clientview_table_row_box" style= {{  width: "15%"  ,  height: "100%"   , borderRight : "1px solid black"}}>
         <p className="header_text">Status (submitted Business Plan)</p>
       </div> 
       <div  className="clientview_table_row_box"  style= {{   width: "11%"  ,  height: "100%"  , borderRight : "1px solid black"}}> 
        <p className="header_text">Certificate issued</p>
       </div> 

       <div   className="clientview_table_row_box"  style= {{  width: "11%"  ,    height: "100%"   , borderRight : "1px solid black"}}> 
        <p className="header_text">View Business Plan</p>
       </div> 
       <div className="clientview_table_row_box"  style= {{   width: "11%"  ,    height: "100%"   , borderRight : "1px solid black"}}> 
        <p className="header_text">Download</p>
       </div>
        
       <div    className="clientview_table_row_box" style= {{   width: "12%"  ,    height: "100%" , borderRight : "1px solid black"}}> 
        <p className="header_text">Account Status</p>
       </div>

  
    </div>   
 




      <div  className="clientview_table_inner_div_table_row">
           
            


      {   


           data.map( (  el   , index )  => (  

      <div  key ={index} style= {{ width : "100%" , height: "25%"  , borderBottom : "1px solid blue" , display : "flex" , flexDirection : "row"}} >  


      <div   className="clientview_table_row_box"  style= {{   width: "10%"  ,  height: "100%"    ,  borderRight : "1px solid black" }}>
       <p>{ index +1 }</p>
       </div>  


       <div  className="clientview_table_row_box" style= {{   width: "15%" , height: "100%" , borderRight : "1px solid black" }}>
         <p> {  el.school_name }</p>
       </div> 


       <div   className="clientview_table_row_box" style= {{   width: "15%" ,  height: "100%" , borderRight : "1px solid black"}  }>
         <p> { el.student_name } </p>
       </div> 


       <div  className="clientview_table_row_box"  style= {{  width: "15%"  ,  height: "100%"  , borderRight : "1px solid black"}}>
         <p>Yes</p>
       </div>  

       <div   className="clientview_table_row_box"  style= {{  width: "11%"  ,  height: "100%"   , borderRight : "1px solid black"}}>
         <p>Yes</p>
       </div>  

       <div    className="clientview_table_row_box"  style= {{  width: "11%"  ,  height: "100%"   , borderRight : "1px solid black"}}>

          
        <input    className="inner_table_btn"  style={{ height: "40%"  , width : "60%"}}  type="button" value = "view"  onClick={()  => {  navigate(  "/home/dashboard/client/student/viewplan"      ,   { state: { typeId :   location.state.typeId ,  schoolId : location.state.schoolId      ,   programId:  location.state.programId  ,   userInfo :  location.state.userInfo     ,    data :  el   }}        ,  { replace : false}  )     }  } /> 
            

       </div> 


       <div   className="clientview_table_row_box" style= {{   width: "11%"  ,  height: "100%"   , borderRight : "1px solid black" , display: "flex"  ,   flexDirection : "row"}}> 
                   
                        
        <input     className="inner_table_btn"  style={{ height: "40%"  , width : "65%"}} type="button" value = "download"  onClick={()  => {     }  } /> 
                    
       </div>  




       <div    className="clientview_table_row_box"  style= {{  width: "12%"  ,    height: "100%" , borderRight : "1px solid black"}}> 
        <p> { el.status } </p>
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

} 

export default StudentView;