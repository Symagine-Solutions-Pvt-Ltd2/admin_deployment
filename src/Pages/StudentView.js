import {Link , useNavigate  , useLocation} from "react-router-dom" ; 
import { useState  , useEffect   } from "react"; 
import Sidebar from "../Sidebar"  ; 
import axios from "axios"  ;  
import SearchIcon from '@mui/icons-material/Search';
import  "../Style/StudentView.css" ;





// popup 
import Popup from "../Components/Popup"; 
import BusinessPlanPopup from "../Components/BusinessPlanPopUp";





function StudentView() {    
    
    

  const [ data , setData ] = useState( []);  
  
  const location = useLocation();   
  const [  typeId  , setTypeId ]   = useState( location.state.typeId   ) ;  
  const [  searchInput   , setSearchInput ]   = useState( "nil") ;
  
  
   // for popup 
   const[ popupInfo  , setPopupInfo ] = useState("") ;
   const[ popup  , setPopup ] = useState( false) ; 
   const[ businessPlanPopup  , setBusinessPlanPopup ] = useState( false) ;
   const[ businessPlanInfo  , setBusinessPlanInfo ] = useState("") ;
   const[ userNameForPopup  , setUserNameForPopup ] = useState( "") ; 
   
/* 
   //console.log( "studentview" ) ;
  //console.log( location.state.programId  ) ;
  //console.log( location.state.schoolId ) ; 
  //console.log( location.state.typeId ) ; 
 */

    const  navigate = useNavigate() ;   
     


    const goToNext = () => {
  
       navigate(  "/home/dashboard/client/student/addstudent"   ,  { state: {    typeId : "system_admin_student"     , type : location.state.typeId      ,    schoolId :  location.state.schoolId   , programId : location.state.programId   ,   userInfo :  location.state.userInfo }}   ,  { replace : false}  ) ; 
       //console.log("ASJghshGHS") ;  
      }    


   


      useEffect(() => { 

        axios({ 
  
         url : "https://learn-up.app/admin/a_student"  ,  
         method : "POST"  , 
         data : {
           
                  "search_key" :  location.state.schoolId  , 
                "page_no" :  1 ,
                 "limit" : 10000  
  
         }
  
        }).then( ( res) => {   
  
  
          if(   res.data.message  === "Information retrieve successfully"  ){
           
            setData(  res.data.data ) ; 
}
   


         //  setData(  res.data.data ) ;  
           
           
         //  //console.log(   res.data.data[1].name )  ;
  
        } ).catch(( err) => {  
            //console.log( "error") ;
  
         }  ) ; 
  
    } , [ popup])  ; 
 
  
   
    

   
    const  handleStatusChange = ( cs  ) => {    
    
      setPopupInfo( cs) ;
      // //console.log( cs) ;
      setUserNameForPopup( cs.student_name) ;
        setPopup( true)  ;
      
 } 
  


    const  handleBplanStatusChange = ( cs  ) => {    
     

      console.log( location.state.schoolId ) ;
      
      if( location.state.schoolId !== ""){
       setBusinessPlanInfo( location.state.schoolId  ) ;

      } 
      // //console.log( cs) ;
      //  setUserNameForPopup( cs.student_name) ;
        setBusinessPlanPopup( true)  ;
      
 } 
  
  
   

 const onSearch  = () => {  


  console.log(  searchInput ) ;     



  axios({ 
 
   url : "https://learn-up.app/admin/search_student"  ,   

   method : "POST"  , 
   data : {
     
    "search_key" :   location.state.schoolId , 
    "page_no" :  1 ,
     "limit" : 100000    , 
     "search" :  searchInput


   }

  }).then( ( res) => {   


    console.log( res ) ;
     
    if(  res.data.message === "Data not found") {
      alert("Data not found");
      setData([]);
    } else if(  res.data.message === "Information retrieve successfully" ) {
      console.log(  res ) ;
      setData( res.data.data);
    } else {
      alert("Data not found");
      setData([]);
    }
  }
         ).catch(( err) => {  
      //console.log( "error") ;

   }  ) ; 
    
} 






 switch( typeId )  {   
   


  case "student_with_edit" : 

    return(
       
    <div className="studentview">  

    <div className="studentview_sidebar"  style={{ borderRadius : 25}} >
           <Sidebar    info = {  location.state.userInfo}/> 
    </div>  

    <div className="studentview_body">   

     


   <BusinessPlanPopup  trigger= { businessPlanPopup  } setTrigger={ setBusinessPlanPopup }   data={ businessPlanInfo}   />


    <Popup  trigger= { popup  } setTrigger={ setPopup }   data={ popupInfo}   >
    <h3>{userNameForPopup}</h3>
          </Popup> 



          
     <div  className="studentview_body1">   


      
     <div className="studentview_body1_search_div"> 


       
<i style={{ position : "absolute" }}>  
 <button className="studentview_body1_search_button"   onClick={() => { onSearch() }}>
 <SearchIcon sx={{   fontSize : 26    , zIndex: 0  }}/> 
 </button>
  </i>
<input   className="studentview_body1_search_input"   type="text" placeholder="Search by name..."    onChange={  ( e ) => {  setSearchInput( e.target.value )} }/>  


</div>

    
     </div>
    



      <div className="studentview_table_outer_div_body2">   


       <div className="studentview_table_inner_div_column_name">    


       <div  className="studentview_table_row_box" style= {{   width: "8%"  ,  height: "100%"    ,  borderRight : "1px solid #B6B7D0" }}>
       <p className="header_text">Sl No</p>
       </div>

       <div  className="studentview_table_row_box"  style= {{   width: "15%" , height: "100%"    , borderRight : "1px solid #B6B7D0" }}>
         <p className="header_text"  style= {{ textAlign : "center"}}>Name of school</p>
       </div> 

       <div   className="studentview_table_row_box" style= {{   width: "17%" ,  height: "100%"  , borderRight : "1px solid #B6B7D0"}  }>
         <p className="header_text" style= {{ textAlign : "center"}}>Name of student</p>
       </div> 

       <div   className="studentview_table_row_box" style= {{  width: "11%"  ,  height: "100%"   , borderRight : "1px solid #B6B7D0"}}>
         <p className="header_text" style= {{ textAlign : "center"}}>Status (submitted Business Plan)</p>
       </div> 
       <div  className="studentview_table_row_box"  style= {{   width: "11%"  ,  height: "100%"  , borderRight : "1px solid #B6B7D0"}}> 
        <p className="header_text" style= {{ textAlign : "center"}}>Certificate issued</p>
       </div> 

       <div   className="studentview_table_row_box"  style= {{  width: "11%"  ,    height: "100%"   , borderRight : "1px solid #B6B7D0"}}> 
        <p className="header_text" style= {{ textAlign : "center"}}>Student Progress</p>
       </div> 
        
       <div    className="studentview_table_row_box" style= {{   width: "11%"  ,    height: "100%" , borderRight : "1px solid #B6B7D0"}}> 
        <p className="header_text" style= {{ textAlign : "center"}}>Account Status</p>
       </div>

       <div    className="studentview_table_row_box" style= {{   width: "15%"  ,    height: "100%"  }}> 
        <p className="header_text">Account status</p>
       </div>
    </div>   
 




      <div  className="studentview_table_inner_div_table_row">
           
            


      {   


           data.map( (  el   , index )  => (  

      <div  key ={index} style= {{ width : "100%" , height: "25%"  , borderBottom : "1px solid #B6B7D0" , display : "flex" , flexDirection : "row"}} >  


      <div   className="studentview_table_row_box"  style= {{   width: "8%"  ,  height: "100%"    ,  borderRight : "1px solid #B6B7D0" }}>
       <p>{ index +1 }</p>
       </div>  


       <div  className="studentview_table_row_box" style= {{   width: "15%" , height: "100%" , borderRight : "1px solid #B6B7D0" }}>
         <p> {  el.school_name }</p>
       </div> 


       <div   className="studentview_table_row_box" style= {{   width: "17%" ,  height: "100%" , borderRight : "1px solid #B6B7D0"}  }>
         <p> { el.student_name } </p>
       </div> 


       <div  className="studentview_table_row_box"  style= {{  width: "11%"  ,  height: "100%"  , borderRight : "1px solid #B6B7D0"}}>
         <p> {  el.bp_submitted  }</p>
       </div>  

       <div   className="studentview_table_row_box"  style= {{  width: "11%"  ,  height: "100%"   , borderRight : "1px solid #B6B7D0"}}>
         <p>{el.certificate }</p>
       </div>  

       <div    className="studentview_table_row_box"  style= {{  width: "11%"  ,  height: "100%"   , borderRight : "1px solid #B6B7D0"}}>

          
        <input   className="inner_table_btn" style={{ height: "40%"  , width : "60%"}}  type="button" value = "view"  onClick={()  => {    navigate(  "/home/dashboard/client/student/viewplan"      ,   { state: { typeId :   location.state.typeId ,  schoolId : location.state.schoolId      ,   programId:  location.state.programId  ,   userInfo :  location.state.userInfo     ,    data :  el   }}        ,  { replace : false}  )     }  } /> 
            

       </div> 




       <div    className="studentview_table_row_box"  style= {{  width: "11%"  ,    height: "100%" , borderRight : "1px solid #B6B7D0"}}> 
        <p> { el.status } </p>
       </div>   

 


       <div   className="studentview_table_row_box"   style= {{   width: "15%"  ,    height: "100%"     ,  display: "flex"  ,   flexDirection : "row"   , justifyContent : "space-around"}}> 
                    
         <input   className="inner_table_btn"    style={{ height: "40%"  , width : "40%"}}   type="button" value = "status"  onClick= { () => {handleStatusChange( el) } }/> 
                    
                   
        <input   className="inner_table_btn"  style={{ height: "40%"  , width : "40%"}}  type="button" value = "edit"  onClick={()  => {        navigate(  "/home/dashboard/client/student/editstudent"     ,    {  state: {    typeId : "student"      ,  type : location.state.typeId ,  data : el   ,     userInfo :  location.state.userInfo }}   , { replace : false}  )  }  } /> 
                         
       </div>

</div>  

  
           ))


      }

      </div>
      
      

      </div> 


  

      <div className="studentview_body3"  > 
        
             <div className="studentview_body3_inner_view1"   >
            
              <button  className= "schoolview_body3_inner_view_button3"    onClick={ () => { handleBplanStatusChange(  )}}    >
              <p> Business plan submission </p>
            </button>

            <button onClick={ () => { goToNext() } } className="schoolview_body3_inner_view_button3">
              <p> Add new student </p>
            </button>  

             </div> 
          
      </div>
    
    </div>

  </div>

    ) ;    


    case "student" : 

    return(
       
    <div className="studentview">  

    <div className="studentview_sidebar"   style={{ borderRadius : 25}} >
           <Sidebar    info = {  location.state.userInfo}/> 
    </div>  

    <div className="studentview_body">   

     





    <Popup  trigger= { popup  } setTrigger={ setPopup }   >
            <h3> {popupInfo } </h3>
          </Popup> 



          
     <div  className="studentview_body1"> 
      

     <div className="studentview_body1_search_div"> 


       
<i style={{ position : "absolute" }}>  
 <button className="studentview_body1_search_button"   onClick={() => { onSearch() }}>
 <SearchIcon sx={{   fontSize : 26    , zIndex: 0   }}/> 
 </button>
  </i>
<input   className="studentview_body1_search_input"   type="text" placeholder="Search by name..."    onChange={  ( e ) => {  setSearchInput( e.target.value )} }/>  


</div>

     </div>
    



      <div className="studentview_table_outer_div_body2">   


       <div className="studentview_table_inner_div_column_name">    


       <div  className="studentview_table_row_box" style= {{   width: "10%"  ,  height: "100%"    ,  borderRight : "1px solid #B6B7D0" }}>
       <p className="header_text">Sl No</p>
       </div>

       <div  className="studentview_table_row_box"  style= {{   width: "20%" , height: "100%"    , borderRight : "1px solid #B6B7D0" }}>
         <p className="header_text"   style ={{  textAlign : "center" }}>Name of school</p>
       </div> 

       <div   className="studentview_table_row_box" style= {{   width: "21%" ,  height: "100%"  , borderRight : "1px solid #B6B7D0"}  }>
         <p className="header_text"  style ={{  textAlign : "center" }} >Name of student</p>
       </div> 

       <div   className="studentview_table_row_box" style= {{  width: "15%"  ,  height: "100%"   , borderRight : "1px solid #B6B7D0"}}>
         <p className="header_text"   style={{  textAlign : "center"}} >Status (submitted Business Plan)</p>
       </div> 
       <div  className="studentview_table_row_box"  style= {{   width: "11%"  ,  height: "100%"  , borderRight : "1px solid #B6B7D0"}}> 
        <p className="header_text" style={{  textAlign : "center"}} >Certificate issued</p>
       </div> 

       <div   className="studentview_table_row_box"  style= {{  width: "11%"  ,    height: "100%"   , borderRight : "1px solid #B6B7D0"}}> 
        <p className="header_text" style={{  textAlign : "center"}} >Student Progress</p>
       </div> 
      
        
       <div    className="studentview_table_row_box" style= {{   width: "12%"  ,    height: "100%" , borderRight : "1px solid #B6B7D0"}}> 
        <p className="header_text">Account Status</p>
       </div>

  
    </div>   
 




      <div  className="studentview_table_inner_div_table_row">
           
            


      {   


           data.map( (  el   , index )  => (  

      <div  key ={index} style= {{ width : "100%" , height: "25%"  , borderBottom : "1px solid #B6B7D0" , display : "flex" , flexDirection : "row"}} >  


      <div   className="studentview_table_row_box"  style= {{   width: "10%"  ,  height: "100%"    ,  borderRight : "1px solid #B6B7D0" }}>
       <p>{ index +1 }</p>
       </div>  


       <div  className="studentview_table_row_box" style= {{   width: "20%" , height: "100%" , borderRight : "1px solid #B6B7D0" }}>
         <p> {  el.school_name }</p>
       </div> 


       <div   className="studentview_table_row_box" style= {{   width: "21%" ,  height: "100%" , borderRight : "1px solid #B6B7D0"}  }>
         <p> { el.student_name } </p>
       </div> 


       <div  className="studentview_table_row_box"  style= {{  width: "15%"  ,  height: "100%"  , borderRight : "1px solid #B6B7D0"}}>
         <p> {  el.bp_submitted  }</p>
       </div>  

       <div   className="studentview_table_row_box"  style= {{  width: "11%"  ,  height: "100%"   , borderRight : "1px solid #B6B7D0"}}>
         <p>{el.certificate }</p>
       </div>  

       <div    className="studentview_table_row_box"  style= {{  width: "11%"  ,  height: "100%"   , borderRight : "1px solid #B6B7D0"}}>

          
        <input    className="inner_table_btn"  style={{ height: "40%"  , width : "60%"}}  type="button" value = "view"  onClick={()  => {  navigate(  "/home/dashboard/client/student/viewplan"      ,   { state: { typeId :   location.state.typeId ,  schoolId : location.state.schoolId      ,   programId:  location.state.programId  ,   userInfo :  location.state.userInfo     ,    data :  el   }}        ,  { replace : false}  )     }  } /> 
            

       </div> 





       <div    className="studentview_table_row_box"  style= {{  width: "12%"  ,    height: "100%" , borderRight : "1px solid #B6B7D0"}}> 
        <p> { el.status } </p>
       </div>   

 


     

</div>  

  
           ))


      }

      </div>
      
      

      </div> 

      <div className="body3"> 

      <button onClick={ () => { goToNext() } } className="add_new_program_button">
        <p>Add new student</p>
      </button>
    
      </div>
    
    </div>

  </div>

    ) ;    



    }

} 

export default StudentView;