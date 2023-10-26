import Sidebar from "../Sidebar"  ;
import Button from "../Components/Button"; 
import "../Style/Upload.css" ; 
import { useState   } from "react";  
import {Link , useNavigate  , useLocation} from "react-router-dom" ; 
import { upload } from "@testing-library/user-event/dist/upload";   
import axios from "axios"  ;  



function  UploadContent() {      
 
    // for quiz single checkbox 




  const location = useLocation();  
  const [ typeId , setTypeId ] =  useState( location.state.typeId  ) ;  
  const [  subType  , setSubType ]   = useState( location.state.sub_type   ) ;  
  const [  courseName  , setCourseName ]   = useState( location.state.course_name  ) ;  
  const [  name  , setName ]   = useState( location.state.type_name  ) ;   
  const [  type  , setType  ]   = useState( location.state.type  ) ; 
  




  console.log(  location.state.type_name  ) ; 

  const  uploadContent  = (  event  ) => { 
 
/*     console.log( event.target.name.value) ;   
    console.log( event.target.file.value) ;   */

    
    let formData = new FormData();
  
    //Adding files to the formdata  
    formData.append("name",  event.target.name.value );
    formData.append("course_name",  courseName  );
    formData.append("thumb_image",   event.target.file.value);
    formData.append("module_name",  name );
    formData.append("sub_type",  subType );
    formData.append("type_id",  type  );  




    console.log( formData.name) ;   
 
    
  




    axios({
      // Endpoint to send files
      url: "http://127.0.0.1:8000/admin/a_m_material", 

      method: "POST", 

      headers: { 

       "Content-Type" : "multipart/form-data"  
      
      }, 


      // Attaching the form data
      data: formData,
    })
      .then((res) => {  
          

       console.log(  res) ;  

      }) // Handle the response from backend here
      .catch((err) => { }); // Catch errors if any
  



    event.preventDefault() ; 

  }


  



  // upload text   

  const  uploadText  = (  event  ) => { 
   


    axios({
      // Endpoint to send files
      url: "http://127.0.0.1:8000/admin/a_m_text", 

      method: "POST", 

    
      data: {



        "text_name" : event.target.name.value , 
        "enter_text" : event.target.text.value , 
        "module_name" : name   , 
        "course_name" : courseName  , 
       "type_id" : typeId  , 
        "sub_type" : subType
      },
    })
      .then((res) => {  
          

       console.log(  res) ;  

      }) // Handle the response from backend here
      .catch((err) => { }); // Catch errors if any
  



    event.preventDefault() ; 

  }

   
  

  const  uploadQuiz  = (  event  ) => {  
  
   
   


   console.log( event.target.name.value) ; 

    console.log( "quiz") ;  

    event.preventDefault() ; 

  }





  switch( typeId )  { 


    case "quiz" :   


    return (
      
      <div  className="upload"> 

      <div  className="upload-sidebar"> 
     <Sidebar /> 
     </div> 


     <form  className ="upload-body"    onSubmit={ uploadQuiz  }   >   

        <div   className ="upload-body-div1"  >  
        
        <input type="text"
                name="name"
                className="upload-body-div1-input-box"  /> 
        </div>  


        <div className ="upload-body-div2"  >   


             <div className="upload-body-div2-inner-div1"   style={{ borderTop : "1px solid blue"  , borderBottom : "1px solid blue"}}> 


             <div   className=  "upload-body-box" style= {{   width: "10%"  ,  height: "100%" ,  borderRight : "1px solid black" }}>
               <p>Sl No</p>
               </div> 
               <div className=  "upload-body-box"  style= {{   width: "22.5%" , height: "100%"   , borderRight : "1px solid black" }}>
                 <p>Question</p>
               </div>
               <div className=  "upload-body-box" style= {{   width: "22.5%" ,  height: "100%"  , borderRight : "1px solid black"}  }>
                 <p>Answer 1</p>
               </div>
               <div className=  "upload-body-box" style= {{  width: "22.5%"  ,  height: "100%"    , borderRight : "1px solid black"}}>
                 <p>Answer 2</p>
               </div> 
               <div  className=  "upload-body-box" style= {{   width: "22.5%"  ,  height: "100%" , borderRight : "1px solid black"}}> 
                <p>Answer 3</p>
               </div> 

             </div> 

             <div className="upload-body-div2-inner-div2" style={{ borderBottom : "1px solid blue" }} >
    
             <div className=  "upload-body-box" style= {{   width: "10%"  ,  height: "100%" ,  borderRight : "1px solid black" }}>
              <p>1</p>
               </div>  



               <div className=  "upload-body-box" style= {{   width: "22.5%" ,  height: "100%" , borderRight : "1px solid black" ,  display : "flex"  , flexDirection : "row"}  }> 


                   <input type="text"
                   name="question"
                   className=  "upload-body-input-box"  
                   style ={{ borderRadius : 20}}
                   />         
         
              
                </div>  



               <div style= {{   width: "22.5%" ,  height: "100%"  , borderRight : "1px solid black" ,  display : "flex"  , flexDirection : "row"}  }> 

                    <div style={{ width: "80%" , height :"100%"  ,  display: "flex" , alignItems :"center" , justifyContent: "center"}} >
             
                           <input type="text"
                                  name="option1"
                                  className=  "upload-body-input-box" 
                                  style ={{ borderRadius : 20}}
                                  />         
                    </div> 
                    <div style={{ width: "20%" , height :"100%" , }}>
                             
                             <input    name="option1_checked"    type="checkbox" /> 
                    </div>
                </div>  


                <div style= {{   width: "22.5%" ,  height: "100%"   , borderRight : "1px solid black" ,  display : "flex"  , flexDirection : "row"}  }> 

                    <div style={{ width: "80%" , height :"100%"  ,  display: "flex" , alignItems :"center" , justifyContent: "center"}} >
             
                           <input type="text"
                                  name="option2" 
                                  className=  "upload-body-input-box" 
                                  style ={{ borderRadius : 20}}
                                  />         
                    </div> 
                    <div style={{ width: "20%" , height :"100%" , }}>
                             
                      <input    name="option2_checked"   type="checkbox" /> 
                    </div>
                </div>  


                <div style= {{   width: "22.5%" ,  height: "100%"   , borderRight : "1px solid black" ,  display : "flex"  , flexDirection : "row"}  }> 

                     <div style={{ width: "80%" , height :"100%"  ,  display: "flex" , alignItems :"center" , justifyContent: "center"}} >

                            <input type="text"
                              name="option3" 
                              className=  "upload-body-input-box" 
                              style ={{ borderRadius : 20}}
                              />         
                      </div>  


                 <div style={{ width: "20%" , height :"100%" }}>
         
                     <input  name="option3_checked"  type="checkbox" /> 
                 </div> 


            </div>  


             </div> 


              
          <div className="upload-body-div2-inner-div2"   style={{ alignItems : "flex-end" , justifyContent : "flex-end" , paddingBottom :"1%" , paddingRight : "3%"}}  > 
 


             <input type="submit" value="Submit" style={{ height : "56%"  , width : "15%" , borderRadius : 15 }}   />   

             </div>
         </div>
      
     </form> 
 





     </div>
    )  



    case "upload_content" :  




     return (  

      <div  className="upload"> 

      <div  className="upload-sidebar"> 
     <Sidebar /> 
     </div> 


     <form className ="upload-body"  onSubmit={ uploadContent } >  



     
        <div   className ="upload-body-div1"  >  
        
        <input type="text"
                         name="name"
                         className="upload-body-div1-input-box"
                         /> 
        </div>   



        <div className ="upload-body-div2"    style= {{ height: "53.13%" , display :"flex"   ,  alignItems : "center"  , justifyContent :"center"}}    >  
               

            <div   style= {{ width :"63.61%"  , backgroundColor : "#5A6198"  , height: "100%"}}>
 
          

          
              <label  htmlFor="upload" >Add new file</label>
              <input type="file"  name="file"   id="upload"  /> 

             </div> 


         </div> 


        <div   style= {{ width :"63.61%" ,  backgroundColor : "#FFF8EE", height: "15.61%" , display :"flex" , alignItems : "center" , justifyContent : "flex-end"}}>   
            
        <input  type="submit" value="Submit"   style= {{ width :"17.98%" ,  backgroundColor : "#FCC046", height: "33%"  , border : "0px solid black"}}  /> 
        </div>  

   

  


     </form> 

     </div>
     )  
 



    
      
    case "upload_text" :

    return (     

     <div  className="upload"  > 

     <div  className="upload-sidebar"> 
    <Sidebar /> 
    </div> 


    <form className ="upload-body"    onSubmit={ uploadText }   >  



       <div   className ="upload-body-div1"  >  
        




       <input type="text"
                        name="name"
              
                        className="upload-body-div1-input-box"
                        />  



       </div> 
       <div className ="upload-body-div2"  >  
            
       <input   name="text"   placeholder="enter text" style={{ width :"63.61%" , height: "100%" }} /> 
        </div> 



       <div className ="upload-body-div3" >   

       <input  type="submit" value="Submit" style={{  width : "17%" , height : "50%"  , backgroundColor : "white"  , border : "0px"  , backgroundColor : "#FCC046"}}   /> 
       </div> 





    </form> 

    </div>
    )  



  }
    }
    
    export default UploadContent;