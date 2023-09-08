import Sidebar from "../Sidebar"  ;
import Button from "../Components/Button"; 
import "../Style/Upload.css" ; 
import { useState   } from "react";  
import {Link , useNavigate  , useLocation} from "react-router-dom" ; 
import { upload } from "@testing-library/user-event/dist/upload";   
import axios from "axios"  ;  



function  UploadContent() {      
 
  
  const location = useLocation();  
  const [ typeId , setTypeId ] =  useState( location.state.typeId  ) ;  
   
    

  const  uploadContent  = (  event  ) => { 
 
/*     console.log( event.target.name.value) ;   
    console.log( event.target.file.value) ;   */

    
    let formData = new FormData();
  
    //Adding files to the formdata 
    formData.append("course_name",  "Future Founders_new" );
    formData.append("thumb_image",   event.target.file.value);
    formData.append("workshop_name",  event.target.name.value);
     

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

      }) // Handle the response from backend here
      .catch((err) => { }); // Catch errors if any
  



    event.preventDefault() ; 

  }




  
  switch( typeId )  { 


    case "quiz" :   


    return (
      
      <div  className="upload"> 

      <div  className="upload-sidebar"> 
     <Sidebar /> 
     </div> 


     <div className ="upload-body"  >
        <div   className ="upload-body-div1"  >  
        
        <input type="text"
                         name="myname"
                        
                         className="upload-body-div1-input-box"
                         /> 
        </div> 
        <div className ="upload-body-div2"  >   


             <div className="upload-body-div2-inner-div1" >
             <div  style= {{   width: "10%"  ,  height: "100%"  , backgroundColor : "pink"  ,  borderRight : "1px solid black" }}>
               <p>Sl No</p>
               </div> 
               <div style= {{   width: "22.5%" , height: "100%"  , backgroundColor : "pink"  , borderRight : "1px solid black" }}>
                 <p>Question</p>
               </div>
               <div style= {{   width: "22.5%" ,  height: "100%"  , backgroundColor : "pink" , borderRight : "1px solid black"}  }>
                 <p>Answer 1</p>
               </div>
               <div style= {{  width: "22.5%"  ,  height: "100%"  , backgroundColor : "pink"  , borderRight : "1px solid black"}}>
                 <p>Answer 2</p>
               </div> 
               <div style= {{   width: "22.5%"  ,  height: "100%"  , backgroundColor : "pink" , borderRight : "1px solid black"}}> 
                <p>Answer 3</p>
               </div> 

             </div> 

             <div className="upload-body-div2-inner-div2">
    
             <div  style= {{   width: "10%"  ,  height: "100%"  , backgroundColor : "pink"  ,  borderRight : "1px solid black" }}>
              <p>1</p>
               </div>  



               <div style= {{   width: "22.5%" ,  height: "100%"  , backgroundColor : "pink" , borderRight : "1px solid black" ,  display : "flex"  , flexDirection : "row"}  }> 

                <div style={{ width: "100%" , height :"100%"  ,  display: "flex" , alignItems :"center" , justifyContent: "center"}} >

                   <input type="text"
                   name="myname"
           
                   className=  "upload-body-input-box"
                   />         
               </div> 
              
                </div>  



               <div style= {{   width: "22.5%" ,  height: "100%"  , backgroundColor : "pink" , borderRight : "1px solid black" ,  display : "flex"  , flexDirection : "row"}  }> 

                    <div style={{ width: "80%" , height :"100%"  ,  display: "flex" , alignItems :"center" , justifyContent: "center"}} >
             
                           <input type="text"
                                  name="myname"
                               
                                  className=  "upload-body-input-box"
                                  />         
                    </div> 
                    <div style={{ width: "20%" , height :"100%" , }}>
                             
                             <input  type="checkbox" /> 
                    </div>
                </div>  


                <div style= {{   width: "22.5%" ,  height: "100%"  , backgroundColor : "pink" , borderRight : "1px solid black" ,  display : "flex"  , flexDirection : "row"}  }> 

                    <div style={{ width: "80%" , height :"100%"  ,  display: "flex" , alignItems :"center" , justifyContent: "center"}} >
             
                           <input type="text"
                                  name="myname"
                               
                                  className=  "upload-body-input-box"
                                  />         
                    </div> 
                    <div style={{ width: "20%" , height :"100%" , }}>
                             
                             <input  type="checkbox" /> 
                    </div>
                </div>  


                <div style= {{   width: "22.5%" ,  height: "100%"  , backgroundColor : "pink" , borderRight : "1px solid black" ,  display : "flex"  , flexDirection : "row"}  }> 

                     <div style={{ width: "80%" , height :"100%"  ,  display: "flex" , alignItems :"center" , justifyContent: "center"}} >

                            <input type="text"
                           name="myname"
           
                              className=  "upload-body-input-box"
                              />         
                      </div> 
                 <div style={{ width: "20%" , height :"100%" , }}>
         
                     <input  type="checkbox" /> 
                   </div>
         </div>  


             </div> 


              
              <div className="upload-body-div2-inner-div2"   style={{ alignItems : "flex-end" , justifyContent : "flex-end" , backgroundColor : "pink" , paddingBottom :"1%" , paddingRight : "3%"}}  >
             <Button name="submit"  color= "#FCC046" width = "17%"     height =  "39.80%"    color1 = "white"  />  
             </div>
         </div>
      
     </div> 

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


        <div   style= {{ width :"63.61%" ,  backgroundColor : "white", height: "15.61%" , display :"flex" , alignItems : "center" , justifyContent : "flex-end"}}>   
            
        <input  type="submit" value="Submit"   style= {{ width :"17.98%" ,  backgroundColor : "yellow", height: "33%"}}  /> 
        </div>  

   

  


     </form> 

     </div>
     )  

    
      
    case "upload_text" :

    return (  

     <div  className="upload"> 

     <div  className="upload-sidebar"> 
    <Sidebar /> 
    </div> 


    <div className ="upload-body"  >
       <div   className ="upload-body-div1"  >  
       
       <input type="text"
                        name="myname"
              
                        className="upload-body-div1-input-box"
                        /> 
       </div> 
       <div className ="upload-body-div2"  >  
            
       <input  placeholder="enter text" style={{ width : "100%"  , height: "100%"}} /> 
        </div>
       <div className ="upload-body-div3" >   
        <Button name="submit"   color= "#FCC046" width = "17%"     height =  "45%"    color1 = "white"  /> 
       </div>
    </div> 

    </div>
    )  



  }
    }
    
    export default UploadContent;