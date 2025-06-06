import { useState  , useEffect} from "react"; 
import Sidebar  from "../Sidebar" ;   
import {Link , useNavigate  , useLocation } from "react-router-dom" ; 
import  "../Style/Course.css" ;  
import axios from "axios"  ;    
import SearchIcon from '@mui/icons-material/Search';



// popup 
import CoursePopup from "../Components/CoursePopup";

function Course() {    
    
    
   // for popup 
   const[ popupInfo  , setPopupInfo ] = useState("") ; 
   const[ popupScreenType  , setPopupScreenType  ] = useState("") ; 
   const[ popup  , setPopup ] = useState( false) ; 
   const [  searchInput   , setSearchInput ]   = useState( "nil") ;



  
    const [ data , setData ] = useState( []); 
    const location = useLocation(); 
    const [ typeId , setTypeId ] =  useState( location.state.typeId   ) ;   
    const  navigate = useNavigate() ; 
  
      
    console.log ( "course" ) ; 
    console.log ( location.state.typeId  ) ;   
  





   // //console.log( popupInfo) ; 
    const saveCourse = (  event  ) => { 
    
       
      //console.log( event.target.course_name.value) ;   
      //console.log( event.target.course_description.value) ;    
    

      axios({ 

            url : "https://learn-up.app/admin/course"  ,   

            method : "POST"  ,  

            data : {
              
              "course_name" :  event.target.course_name.value , 
              "course_description"  : event.target.course_description.value  



            }
      
           }).then( ( res) => {   
       


              //console.log(  res ) ;  


              if(   res.data.message ===  "Course added Successfully."    ){
               
                 alert( "added Successfully.")  ;  
             
                navigate(  "/home/course"   ,    { state: {    typeId : "course"  }}  ,    { replace : false}  )   ;
  
              } 
              else {
      
                alert(   res.data.message  )  ;
              }    


             
           } ).catch(( err) => { 
               //console.log( "error") ;
      
            }  ) ;  


      
    
    
        event.preventDefault();
      }


    

  
      
        useEffect(() => { 
     

        if(  typeId === "draft_course") {

        
        axios({ 

              url : "https://learn-up.app/admin/draftcourse"  ,  
              method : "POST"  , 
             data : {
       
              "search_key" : "" , 
              "page_no" :  1 ,
              "limit" : 10000   

                 }

                 }).then( ( res) => {   


                //console.log(  res.data.data ) ;  

                 if( res.data.status === "success"){

                 
                 setData(  res.data.data ) ;  
                 } else {

                  setData( []);
                 }
       
                    //  //console.log(   res.data.data[1].name )  ;

                  } ).catch(( err) => {  
                  //console.log( "error") ;

                }  ) ;   



              }else {


                axios({ 

                  url : "https://learn-up.app/admin/p_course"  ,   

                  method : "POST"  ,  
                  
                 data : {
           
                  "search_key" : "" , 
                  "page_no" :  1 ,
                  "limit" : 10000   
    
                     }
    
                     }).then( ( res) => {   
    
    
                    //console.log(  res) ; 
                    setData(  res.data.data ) ;  
           
           
                        //  //console.log(   res.data.data[1].name )  ;
    
                      } ).catch(( err) => {  
                      //console.log( "error") ;
    
                    }  ) ;   

                       





              } 



                   } , [ popup])  ; 

  
                




                     // to handle delete , active , inactive  

                     const  handleStatusChange = ( cs  ,  screenType   ) => {    
                 
                      
                         
                          setPopupInfo( cs) ;
                          setPopupScreenType( screenType ) ; 
                           setPopup( true)  ;
                       
                           
                      /*      //console.log( cs) ; 
                           //console.log( screenType) ;  */ 

                           
                     } 


   

     
   const onSearch  = () => {  


    console.log(  searchInput ) ;     
  
  
  
    axios({ 
   
     url : "https://learn-up.app/admin/p_course"  ,   
  
     method : "POST"  , 
     data : {
       
      "search_key" : searchInput, 
      "page_no" :  1 ,
       "limit" : 10000 
  
  
     }
  
    }).then( ( res) => {   
  
  
      console.log( res  ) ;
       
       if(  res.data.message === "No course found.") {
        alert("No course found");
        setData([]);
      } else if(  res.data.message === "Information retrieve successfully" ) {
        console.log(  res ) ;
        setData( res.data.data);
      }else{
        alert("Data not found");
        setData([]);
      }
    
    }
           ).catch(( err) => {  
        //console.log( "error") ;
  
     }  ) ; 
   }  







              








    switch( typeId )  { 




    case "draft_course" : 




    return( 
    
       
        <div className="course" >
     
        <div className="course_sidebar"   style={{ borderRadius : 25}}   >
          <Sidebar  info = {  location.state.userInfo} /> 
        </div>   


        
        <div className="course_body"  >      
        

      <CoursePopup  trigger= { popup  } setTrigger={ setPopup }   screenType = { popupScreenType }    data = { popupInfo} > 
      </CoursePopup>

        <div  className="clientview_body1"  > 
              
             </div>



        <div className="clientview_table_outer_div_body2"  style={{ height :"80.47%"}}  >   
    

    <div className="clientview_table_inner_div_column_name"  style={{ height :"17.96%"  , backgroundColor : "#D9D9D9"   , borderBottom : "1px solid #B6B7D0"}}     >   



    <div className="clientview_table_row_box"  style= {{   width: "15%"  ,  height: "100%"  ,  borderRight : "1px solid #B6B7D0" }}>
    <p className="header_text">Sl No</p>
    </div> 
    <div className="clientview_table_row_box" style= {{   width: "50%" , height: "100%"  }}>
      <p className="header_text">Name of Draft Course</p>
    </div>
    <div className="clientview_table_row_box"  style= {{   width: "35%" ,  height: "100%"  }  }>
   
    </div>
   

   </div>   


    
   <div  className="clientview_table_inner_div_table_row"  style={{  height : "82.04%"} }>   



      { 
         
         data.map( (  el  , index )  => (  

     <div key={ index}   style= {{ width : "100%" , height: "20%"  , backgroundColor :'#FFFFFF' , borderBottom : "1px solid #B6B7D0"   , display : "flex" , flexDirection : "row"}} > 


   <div  className="clientview_table_row_box"   style= {{   width: "15%"  ,  height: "100%"   ,  borderRight : "1px solid #B6B7D0"   }}>
    <p>  { index+1}  </p>
    </div>  


    <div className="clientview_table_row_box"   style= {{   width: "50%" , height: "100%"   }}>
      <p> { el.course_name } </p>
    </div>
    <div  className="clientview_table_row_box"  style= {{   width: "35%" ,  height: "100%"  ,  display : "flex" , flexDirection : "row"  , justifyContent : 'space-around'}  }>
      

                              
          <input  className="inner_table_btn"     style={{ height: "40%"  , width : "25%"}}  type="button" value = "submit"  onClick={() => {handleStatusChange( el   , "submit")  }}  /> 
                              
                            
              <input  className="inner_table_btn"   style={{ height: "40%"  , width : "25%"}}  type="button" value = "edit"  onClick={()  => {   navigate(  "/home/course/draftcourse/draftcoursedetails"   ,      { state: {    typeId :  "draft_course_content"    ,     courseId :   el._id    ,   courseName : el.course_name     , userInfo :  location.state.userInfo  }}     ,  { replace : false}  )  }  } /> 
                                

                              
              <input   className="inner_table_btn"   style={{ height: "40%"  , width : "25%"}}  type="button" value = "delete"  onClick= { () => {handleStatusChange( el   ,  "delete")}   }  /> 
                               
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
     
        <div className="course_sidebar"    style={{ borderRadius : 25}}>
          <Sidebar  info = {  location.state.userInfo} /> 
        </div>   


        
        <div className="course_body"   >    

        <div  className="clientview_body1"  > 
            

        <div className="clientview_body1_search_div"> 


       
<i style={{ position : "absolute" }}>  
 <button className="clientview_body1_search_button"   onClick={() => { onSearch() }}>
 <SearchIcon sx={{   fontSize : 26    }}/> 
 </button>
  </i>
<input   className="clientview_body1_search_input"   type="text" placeholder="Search by name..."    onChange={  ( e ) => {  setSearchInput( e.target.value )} }/>  


</div>
             </div>



        <div className="clientview_table_outer_div_body2"  style={{ height :"80.47%"  }}  >   
    

    <div className="clientview_table_inner_div_column_name"  style={{ height :"17.96%"   , backgroundColor : "#D9D9D9"  ,  borderBottom : "1px solid #B6B7D0"}}  >   


    <div   className="clientview_table_row_box"     style= {{   width: "15%"  ,  height: "100%"    ,  borderRight : "1px solid #B6B7D0" }}>
    <p className="header_text">Sl No</p>
    </div> 
    <div className="clientview_table_row_box"  style= {{   width: "40%" , height: "100%"     }}>
      <p className="header_text">Name of course</p>
    </div>
    <div style= {{   width: "45%" ,  height: "100%"  }  }>
   
    </div>
   

   </div>   




   <div  className="clientview_table_inner_div_table_row"  style={{  height : "82.04%"} }>  


      {     
          data.map( (  el   , index )  => (
       
     <div   key={ index}   style= {{ width : "100%" , height: "20%"  , backgroundColor : "#FFFFFF"   , display : "flex" , flexDirection : "row" ,  borderBottom : "1px solid #B6B7D0"}} > 


   <div className="clientview_table_row_box"  style= {{   width: "15%"  ,  height: "100%"   ,  borderRight : "1px solid #B6B7D0"   }}>
    <p> { index+1} </p>
    </div> 
    <div className="clientview_table_row_box"  style= {{   width: "40%" , height: "100%"    }}>
      <p>  { el.course_name } </p>
    </div>
    <div  className="clientview_table_row_box" style= {{   width: "45%" ,  height: "100%"   ,  display : "flex" , flexDirection : "row"}  }>
      

                                
                         
    <input    className="inner_table_btn"   style={{ height: "40%"  , width : "25%"  ,  border: "0px solid red"}}  type="button" value = "View"  onClick={()  => {        navigate(  "/home/viewcourse/permanentcoursedetails"   ,   { state: {    typeId :  "permanent_course_content"   ,    courseId :   el._id    ,   courseName : el.course_name  ,   userInfo :  location.state.userInfo }}     , { replace : false}  )  }  } /> 
                             
                                
    </div> 

    </div>

  
          ))

  }


   </div>
   
   

   </div> 


        </div> 

        </div>
         )  ;   

       




    } 
} 

export default Course;