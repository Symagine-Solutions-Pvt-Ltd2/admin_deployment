import  "../Style/ClientView.css" ;  
import {Link , useNavigate  , useLocation} from "react-router-dom" ; 
import { useState   , useEffect   } from "react"; 
import Sidebar from "../Sidebar"  ;
import axios from "axios"  ;  


import   MaterialsPopup  from "../Components/MaterialsPopup"  ;  





function  Module() {    
  
  const  navigate = useNavigate() ;    
  const location = useLocation();  


    // for popup 
    const[ popupInfo  , setPopupInfo ] = useState("") ; 
    const[ popup  , setPopup ] = useState( false) ; 
   

  
  const [ data , setData ] = useState( []); 
  const [  courseName  , setCourseName ]   = useState(location.state.courseName) ; 
  const [  name  , setName ]   = useState( location.state.type_name  ) ; 
  const [  type  , setType ]   = useState( location.state.type  ) ; 

    
/* 
  console.log("module" ) ; 
  console.log( location.state.courseName )  ; 
  console.log( location.state.type_name)  ; 
  console.log( location.state.type )  ; 
  console.log( location.state.courseId) ; 
 */

  const goToNext = () => {

      navigate(  "/home/course/draftcourse/module/selectcontenttype"   ,  { state: {  type :  type   , courseId: location.state.courseId ,     courseName :  location.state.courseName  ,  type_name :  location.state.type_name     , userInfo :  location.state.userInfo  }}   ,  { replace : false}  ) ; 
      console.log("ASJghshGHS") ;  


     } 
 


     useEffect(() => { 

         



      if(   location.state.type === "module" ){

      
      axios({ 

            url : "http://3.123.39.199:5000/admin/module_am"  ,  
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
   


                url : "http://3.123.39.199:5000/admin/workshop_am"  ,  
                method : "POST"  , 
               data : {
         
                    
                     "course_name" : location.state.courseName  ,
                      "workshop_name" : location.state.type_name  , 
                      "type_id"  : location.state.type
    
                   }
    
                   }).then( ( res) => {   
    
                    
                  
                   console.log(  res ) ; 
                  // setData(  res.data.data ) ;  
           
                  console.log(  res.data.message ) ;
    
                   if(    res.data.message === "Information retrieve successfully" ){
                    setData(  res.data.data ) ;
                        
                   }
                   else{

                      alert( res.data.message )  ; 
                   }
    
    
    
                    } ).catch(( err) => {  
                    console.log( "error") ;
    
                  }  ) ; 
      

             }


                 } , [ popup])  ; 

    
              
       // to handle delete , active , inactive  

       const  handleStatusChange = ( cs  ) => {    
                 
                      
         console.log( cs  )  ;           
        setPopupInfo( cs) ; 
         setPopup( true)  ;
     
         
    /*      console.log( cs) ; 
         console.log( screenType) ;  */ 

         
   } 
      








    return (
      <div className="clientview">  

      <div className="clientview_sidebar" >
             <Sidebar   info = {  location.state.userInfo} /> 
      </div>  
  
      <div className="clientview_body">      

      <MaterialsPopup  trigger= { popup  } setTrigger={ setPopup }   data = { popupInfo} > 
      </MaterialsPopup>
  
      
       <div  className="clientview_body1"   style= {{ backgroundColor : '#F1F2F7'}}  > 
    
       </div>
      
        <div className="clientview_table_outer_div_body2">   
    
  
         <div className="clientview_table_inner_div_column_name"   style ={{ backgroundColor : "#D9D9D9"   , borderBottom : "1px solid #B7B7D0"}}>   

         <div  className="clientview_table_row_box"  style= {{   width: "10%"  ,  height: "100%"  ,  borderRight : "1px solid #B6B7D0" }}>
         <p>Sl No</p>
         </div> 
         <div className="clientview_table_row_box" style= {{   width: "40%" , height: "100%"   , borderRight : "1px solid #B6B7D0" }}>
           <p>Content type</p>
         </div>
         <div className="clientview_table_row_box"  style= {{   width: "50%" ,  height: "100%"  }  }>
           <p>Content Name</p>
         </div>
        
  
  
        </div> 
        <div  className="clientview_table_inner_div_table_row">
            

      {
        data.map( (  el  , index )  => (  
          
        <div     key={ index}  style= {{ width : "100%" , height: "25%"  , backgroundColor : '#F1F2F7' ,  borderBottom : "1px solid  #B7B7D0" , borderRight : "1px solid #B6B7D0"  , display : "flex" , flexDirection : "row"}} >
        
        
         <div  className="clientview_table_row_box"  style= {{   width: "10%"  ,  height: "100%"  ,  borderRight : "1px solid #B6B7D0" }}>
         <p> { index+1 } </p>
         </div> 
         <div  className="clientview_table_row_box"  style= {{   width: "40%" , height: "100%"    , borderRight : "1px solid #B6B7D0" }}>
           <p>  { el.sub_type }  </p>
         </div>
       
  
  
         <div  className="clientview_table_row_box" style= {{   width: "50%"  ,  height: "100%"  , display: "flex"  ,   flexDirection : "row" , justifyContent : "space-around"}}>   
  
  
                          <div className="clientview_table_row_box"  style={{ height: "100%"  , width : "40%"}} >
                           <p>{  el.name || el.text_name || el.quiz_name }</p>
                          </div>
  
  
  
       
     {/*        <input className="inner_table_btn"  style={{ height: "40%"  , width : "20%"}}  type="button" value = "edit"  onClick={()  => {    }  } /> */} 
                         
  
  

               <input  className="inner_table_btn"  style={{ height: "40%"  , width : "20%"}}  type="button" value = "delete"  onClick={ ()  => {handleStatusChange( el  ) }  } /> 
                       
  
         </div> 
  
  
  
       </div> 

        )) 

} 
  
        </div>
        
        
  
        </div> 
  
        <div className="body3"   style= {{ backgroundColor : '#FFFFFF'}} > 
  
        <div onClick={ () => { goToNext() } } className="add_new_program_button"  style= { {  backgroundColor : "#FCC046"}} >
          <p>Add</p>
        </div>
      
        </div>
      
      </div>
  
  
  
  </div>
    )
    }
    
    export default Module;