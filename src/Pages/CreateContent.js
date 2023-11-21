import {Link , useNavigate  , useLocation} from "react-router-dom" ; 
import { useState , useEffect } from "react";  
import Sidebar  from "../Sidebar" ;  
import "../Style/CreateContent.css"  ;  
import axios from "axios"  ;   
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft"  ; 


function CreateContent() {    
      
  const location = useLocation(); 
  const  navigate = useNavigate() ;   
   

 
  //  states  for frame 53   




 //const [ typeId , setTypeId ] =  useState(location.state.typeId  ) ; 
 const [ typeId , setTypeId ] =  useState( location.state.typeId  ) ;  
 const [ type , setType ] =  useState( location.state.type ) ; 
 const [ courseName  , setCourseName ] =  useState( location.state.courseName  ) ;  
 const [ feedbackGivenBy  , setFeedbackGivenBy ] =  useState( [] ) ; 
 const [ pageNo  , setPageNo ] =  useState( 1) ; 
 const [ courseList  , setCourseList  ] =  useState( []) ; 
 const [ totalPages , setTotalPages  ] =  useState( null ) ;
 const [ selectedCourse  , setSelectedCourse  ] =  useState( "") ; 
 const [ programName, setProgramName ] =  useState( "") ; 






 // to fetch all the permanent courses 

 

 useEffect(() => { 
  

 if(   location.state.typeId  === "create_program" ) {

 
  axios({ 

   url : "http://localhost:8000/admin/p_course"  ,   

   method : "POST"  , 
   data : {
     
      "search_key" : "" , 
     "page_no" :  pageNo ,
      "limit" : 3  

   }

  }).then( ( res) => {   

   
    console.log(  res.data ) ; 
    setCourseList( res.data.data); 
    setTotalPages( res.data.totalPages )  ; 
     console.log(    res.data.data.length  )  ; 


  } ).catch(( err) => {  
      console.log( "error") ;

   }  ) ; 
 

  } 

} , [   pageNo])  ; 









 console.log ( "createcontent" ) ; 
 console.log ( location.state.typeId   ) ; 
 console.log ( location.state.courseName  ) ; 
 console.log ( location.state.courseId  ) ; 

 


 
  const createProgram  = (   ) => { 
    

    console.log(  programName) ; 
    console.log(  feedbackGivenBy) ;
    console.log(   selectedCourse  ) ; 



     axios({ 

      url : "http://localhost:8000/admin/program"  ,   

      method : "POST"  ,  

      data : {
        
        
            "program_name" : programName  , 
            "course_name" :  selectedCourse  , 
             "feedback_by" : feedbackGivenBy      

      }

     }).then( ( res) => {   
 


        console.log(  res ) ;  


        if(   res.data.message ===  "Program added Successfully."    ){
         
           alert( res.data.message)  ;  
       
           navigate(  "/home/dashboard"  ,    { state: {    typeId : type    ,    userInfo :  location.state.userInfo    }} ,  { replace : false}  )   ;

        } 
        else {

          alert(   res.data.message  )  ;
        }    


       
     } ).catch(( err) => { 
         console.log( "error") ;

      }  ) ;  



  }
  

  

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
           
              navigate(  "/home/course"   ,    { state: {    typeId : "course"   , userInfo :  location.state.userInfo }}  ,    { replace : false}  )   ;

            } 
            else {
    
              alert(   res.data.message  )  ;
            }    


           
         } ).catch(( err) => { 
             console.log( "error") ;
    
          }  ) ;  


    
  
  
      event.preventDefault();
    }
 







    const  createModule  =   (  event  ) => { 
    
       
      console.log( event.target.module_name.value) ;   
      console.log( event.target.subject_name.value) ;    
    
  
      axios({ 
  
            url : "http://localhost:8000/admin/mona"  ,   
  
            method : "POST"  ,  
  
            data : {
              
              "module_name" : event.target.module_name.value , 
              "subject_name" : event.target.subject_name.value , 
               "course_name"  :  location.state.courseName
               
  
  
            }
      
           }).then( ( res) => {   
       
  
  
              console.log(  res ) ;    

              if(   res.data.message ===  "Module added Successfully."    ){
               
                 alert( "added Successfully.")  ;  
             
                navigate(  "/home/course/draftcourse/draftcoursedetails"   ,    { state: {    typeId :  "draft_course_content"    ,  courseName : location.state.courseName   , courseId :  location.state.courseId  , userInfo :  location.state.userInfo   }}  ,    { replace : false}  )   ;
  
              } 
              else {
      
                alert(   res.data.message  )  ;
              }    
  
  
             
           } ).catch(( err) => { 
               console.log( "error") ;
      
            }  ) ;  
  
  
      
    
    
        event.preventDefault();
      }
   





      const  createWorkshop  =   (  event  ) => { 
    
       
        let formData = new FormData();
  
        //Adding files to the formdata 
        formData.append("course_name", location.state.courseName  );
        formData.append("thumb_image",   event.target.file.value);
        formData.append("workshop_name",  event.target.workshop_name.value);
         
    
        console.log( formData) ;  
    
    
        axios({
          // Endpoint to send files
          url: "http://127.0.0.1:8000/admin/wona", 
    
          method: "POST", 
    
          headers: { 
    
           "Content-Type" : "multipart/form-data"  
          
          }, 
    
    
          // Attaching the form data
          data: formData,
        })
          .then((res) => {  
              
    
           console.log(  res) ;  
            

           if(   res.data.message ===  "Workshop added Successfully."    ){
               
            alert( "added Successfully.")  ;  
        
           navigate(  "/home/course/draftcourse/draftcoursedetails"   ,    { state: {    typeId :  "draft_course_content"    ,  courseName : location.state.courseName   , courseId :  location.state.courseId   , userInfo :  location.state.userInfo  }}  ,    { replace : false}  )   ;

         } 
         else {
 
           alert(   res.data.message  )  ;
         }    
        
    
          }) // Handle the response from backend here
          .catch((err) => { }); // Catch errors if any
      
    
    
    
        event.preventDefault() ;  


        }  

         
       const handlePageNo = (   btn  ) => {
  

         
         if( btn ===  "prev"){ 

          console.log( "prev") ;             
          setPageNo( pageNo -1 ) ;  

        }else   if( btn ===  "next" )  {
          console.log( "next") ;  
         setPageNo( pageNo +1 ) ; 
        }  
           
       } ; 









        const handleCheckboxChange = (  option  ) => {
            
          console.log( "kjhk") ; 
             console.log( option)
             setSelectedCourse( option ) ; 

        }
    

         


        
   
        const handleCheckboxChange1 = ( e ) => {  
      
          const { value, checked } = e.target;
             

        //  console.log(`${value} is ${checked}`); 


           // Case 1 : The user checks the box
            if (checked) {
                          
              setFeedbackGivenBy( [...feedbackGivenBy , value]) ; 
         
                   }
  
              // Case 2  .: The user unchecks the box
                else {
                 
                   let newArray = feedbackGivenBy.filter((e) => e !== value) ;
                  setFeedbackGivenBy(  newArray ) ; 
                       }
   

                       console.log( feedbackGivenBy) ; 


      };

    




        
    switch( typeId )  { 


    case "create_program" :   
    
    return( 


        <div className="form_outer_div">
   
        <div className="form_outer_div_sidebar"    style={{ borderRadius : 25}}>
          <Sidebar   info = {  location.state.userInfo} /> 
        </div>   

        
        
         <div className="createcontent_form_outer_div_body">  
      



         
 

         <div className="createcontent_admin_form"    >     

        


    
             <div className="createcontent_admin_form_row"> 


                        <div className="admin_Form-Description" >   
                        <p>Name of Program</p> 
                        </div>  

              
                        <div className="createcontent_admin_Form-Input" >         
                        <input type="text"
                                name="program_name"
                                className="admin_input-box" 
                                onChange={ (  e ) => { setProgramName(  e.target.value)}}
                                /> 
                        </div>  
              </div> 
     

   
    
              <div className="createcontent_admin_form_row"> 
    
                         <div className="admin_Form-Description" >   
                        <p> Select Course</p> 
                        </div>           
    
                        <div className="createcontent_admin_Form-Input"  >     
     




                      <div  style={{  width : "87.46%" , height: "100%"  ,  display : "flex" , flexDirection :  "row" , justifyContent : "space-around" , alignItems : "center"}}>

        

                  

                  {

                      courseList.map( (  el  , index )  => ( 

                                <div   key={index} style={ {  width : "27%"  , height : "35%" , backgroundColor : "pink" , borderRadius : "20px" ,  display: "flex"  , flexDirection : "row" ,  overflow : "hidden"}}>
      
                                <div style = {{  backgroundColor : "#FCC046" ,  width : "85%"  , justifyContent : "center" , display : "flex"  , alignItems : "center"}}>
                                       <p   style = {{ fontSize : 12   , textAlign : "center"  , fontWeight : "500"}}   >  { el.course_name } </p>   
                                 </div>


                                <div style={{  backgroundColor : "#FCC046" , width : "15%" , display : "flex" ,   alignItems : "center" , justifyContent : "center"}}>
                                     <input   type="checkbox"  checked = {  selectedCourse === el.course_name  }    onChange={  () => handleCheckboxChange( el.course_name) }    />   
                                </div>

                                  </div>     

                      ) )

                  } 

    
                    </div>  




                    <div style={{  width : "12.54%" , height: "100%"  ,  display : "flex" , flexDirection :  "row" , justifyContent : "space-around" , alignItems : "center" }}  >
                    


                    <button    disabled = {  pageNo <= 1 }
                    onClick={ () => { handlePageNo( "prev") }  }   style ={{    display : "flex"  , alignItems :"center"    , border : "0px solid red" }}>
                   <ChevronLeftIcon  sx={{ color: "#000"  }}/>
                    </button> 

                    <button      disabled = {  pageNo  >=  totalPages }   onClick= { ( )  =>  {handlePageNo( "next")  }  }     style ={{    display : "flex"  , alignItems :"center"    , border : "0px solid red" }} >
                    <ChevronRightIcon  sx={{ color: "#000"  }}/>
                    </button>
                  

                       </div>
               
     </div>    
    </div> 
 

          

  
         
          <div className="createcontent_admin_form_row"> 
    
                <div className="admin_Form-Description" >   
                 <p>Feedback to be given by</p> 
                </div>           
    
    
    
                <div className="createcontent_admin_Form-Input"   style={ {  justifyContent : "space-around"}} >     
      



    
      <div  style={{  width : "87.46%" , height: "100%"  ,  display : "flex" , flexDirection :  "row" , justifyContent : "space-around" , alignItems : "center"}}> 





 <div style={ {  width : "25.87%"  , height : "35%" , backgroundColor : "pink" , borderRadius : "20px" ,  display: "flex"  , flexDirection : "row" ,  overflow : "hidden"}}>




                        <div style = {{  backgroundColor : "#FCC046" ,  width : "70%"  , justifyContent : "center" , display : "flex"  , alignItems : "center"}}>
                              <p style = {{ fontSize : 12   , textAlign : "center"  , fontWeight : "500"}} >Client Supervisor</p>   
                              </div>
    
    
                      <div style={{ backgroundColor : "#FCC046" , width : "30%" , display : "flex" ,   alignItems : "center" , justifyContent : "center"}}>
        <input   type="checkbox"  value="Client Supervisor"  name="feedback"  onChange={ handleCheckboxChange1 } />   
                             </div> 



    
           </div>   
    
    
                         
         <div style={ {  width : "25.87%"  , height : "35%" , backgroundColor : "pink" , borderRadius : "20px" ,  display: "flex"  ,   flexDirection : "row"  , overflow : "hidden"}}>
                            
                            <div style = {{  backgroundColor : "#FCC046" ,  width : "70%"  , justifyContent : "center" , display : "flex"  , alignItems : "center"}}>
                              <p  style = {{ fontSize : 12   , textAlign : "center"  , fontWeight : "500"}} >School Head</p>   
                              </div>
    
    
                            <div style={{ backgroundColor : "#FCC046" , width : "30%" , display : "flex" ,   alignItems : "center" , justifyContent : "center"}}>
     
     <input   type="checkbox"  value="School Head"  name="feedback"   onChange={ handleCheckboxChange1 } />   
                             </div>
    
                          
    
                           </div> 


                           <div style={ {  width : "25.87%"  , height : "35%" , backgroundColor : "pink" , borderRadius : "20px" ,  display: "flex"  ,   flexDirection : "row"  , overflow : "hidden"}}>
                            
                            <div style = {{  backgroundColor : "#FCC046" ,  width : "70%"  , justifyContent : "center" , display : "flex"  , alignItems : "center"}}> 
                            
                              <p style = {{ fontSize : 12   , textAlign : "center"  , fontWeight : "500"}} >Facilitator</p>
                              </div>
    
    
                            <div style={{ backgroundColor : "#FCC046" , width : "30%" , display : "flex" ,   alignItems : "center" , justifyContent : "center"   }}>  

                <input     type="checkbox"   value="Facilitator"   name="feedback"     onChange={handleCheckboxChange1 } /> 
                             </div>
    
                          
    
                           </div> 




  
            </div>       



            <div style={{  width : "12.54%" , height: "100%"  ,  display : "flex" , flexDirection :  "row" , justifyContent : "space-around" , alignItems : "center" }}  >



            </div>
    
            </div> 
        </div>  



        <div  className="admin_form_row_btn_div"   style ={{ borderBottom : "0px solid black"}}> 

            <input className="admin_form_row_btn" type="button"   value="Submit"  onClick={ () => { createProgram()}}    /> 
          </div>
                        


          
    



                    </div>

        
    
         </div>  




        
          </div>
    )   ; 

 
 












      case "create_module" :    


      return( 
  
  
          <div className="form_outer_div">
     
          <div className="form_outer_div_sidebar"  style={{ borderRadius : 25}} >
            <Sidebar    info = {  location.state.userInfo} /> 
          </div>   
  
  
          
           <div className="form_outer_div_body"  style={{  alignItems: "center"}}>  
       






           <form className="course_body_inner_div" onSubmit={  createModule }    >    
      
                 
                   
      <input type="text"
               name = "module_name"
              placeholder="Enter module name"
              className="course_input-box"
              /> 
       
 
      
      <input type="text" 
                name = "subject_name"
              placeholder="Enter subject name"
              className="course_input-box"  style={{ marginBottom : "4.5%"}}
              /> 
  
 
      
      <input className="course_form_row_btn" type="submit" value="Submit" /> 
      
    
 </form>
  
      
      
           </div>
          
            </div>
      )   ; 
    

      case "create_workshop" :  
      return( 
  
  
          <div className="form_outer_div">
     
          <div className="form_outer_div_sidebar"   style={{ borderRadius : 25}} >
            <Sidebar     info = {  location.state.userInfo}  /> 
          </div>   
  
  
          
           <div className="form_outer_div_body"  style={{  alignItems: "center"}}>  
      
           <form className="course_body_inner_div" onSubmit={ createWorkshop }    >    
      
                 
                   
      <input type="text"
              name="workshop_name"
              placeholder="Enter workshop name"
              className="course_input-box"
              /> 
       
 
      <input type="file"  className="course_input-box"  name="file"   id="upload"  /> 
 
        


      <input className="course_form_row_btn" type="submit" value="Submit" /> 
      
    
 </form>
  
      
      
           </div>
          
            </div>
      )   ; 
    

 











      case   "save_course" :  
      return( 
  
   

        <div className="course" >
     
        <div className="course_sidebar"   style={{ borderRadius : 25}} >
          <Sidebar    info = {  location.state.userInfo} /> 
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
         
        
             
             <input   className="course_form_row_btn" type="submit" value="Save" /> 
             
           
        </form>

  

        </div> 

        </div> 


      )   ; 
     



    case "program_admin" :  
    return(
   <div>
    <p>CreateContent</p>  
    
    
   </div>
    ) 


    case "content_admin" :  
    return(
   <div>
    <p>CreateContent</p>  
    
    
   </div>
    ) 

    }
} 

export default CreateContent;