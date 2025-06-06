import Sidebar from "../Sidebar"  ;
import Button from "../Components/Button"; 
import "../Style/Upload.css" ; 
import { useState   } from "react";  
import {Link , useNavigate  , useLocation} from "react-router-dom" ; 
import { upload } from "@testing-library/user-event/dist/upload";   
import axios from "axios"  ;   
import file_logo from "../Images/file_logo.png"  ; 



function  UploadContent() {      
 
    // for quiz single checkbox 


    const  navigate = useNavigate() ;

  const location = useLocation();  
  const [ typeId , setTypeId ] =  useState( location.state.typeId  ) ;  
  const [  subType  , setSubType ]   = useState( location.state.sub_type   ) ;  
  const [  courseName  , setCourseName ]   = useState( location.state.course_name  ) ;  
  const [  name  , setName ]   = useState( location.state.type_name  ) ;   
  const [  type  , setType  ]   = useState( location.state.type  ) ;  
  const [  selectedOption  , setSelectedOption  ]   = useState(  null ) ;  
  const [  optionArray  , setOptionArray  ]   = useState( [""  , ""  , ""] ) ;



  //console.log(  "uploadcontent"  ) ;
  //console.log(  location.state.typeId  ) ; 
  //console.log(  location.state.course_name  ) ; 
  //console.log(  location.state.type_name  ) ; 
  //console.log(  location.state.type  ) ; 
  //console.log(  location.state.sub_type  ) ;
  //console.log(location.state.courseId) ; 




   

   // to upload picture 
  const  uploadPicture  = (  event  ) => { 
 
    const selectedFile = document.getElementById("upload").files[0]; 
    //console.log( "file upload"  )   ; 
    //console.log(selectedFile) ;  
    //console.log( typeId ) ;   
 



    if(  selectedFile !== undefined  ){

    
     //console.log(selectedFile.name) ;
      
     let aa = selectedFile.name ;
     let file_extension = aa.split('.').pop();  
     file_extension =  file_extension.toLowerCase() ; 
     //console.log(  file_extension ) ;  
     





     if( type === "module"    &&  ( file_extension === "jpg"  ||    file_extension === "jpeg"  ||  file_extension === "png"  )     ) {

    
    let formData = new FormData();
  
    //Adding files to the formdata  
    formData.append("name",  event.target.name.value );
    formData.append("course_name",  courseName  );
    formData.append("file", selectedFile );
    formData.append("module_name",  name );
    formData.append("sub_type",  subType );
    formData.append("type_id",  type  );  


    //console.log( formData ) ;    


    axios({
      // Endpoint to send files
      url: "https://learn-up.app/admin/upload_file_m", 

      method: "POST", 

      headers: { 

       "Content-Type" : "multipart/form-data"  
      
      }, 


      // Attaching the form data
      data: formData,
    })
      .then((res) => {  
          

       //console.log(  res) ;   
     //  alert( res.data.message) ;
       
        
       if( res.data.status === "success"  ){
          
        alert( res.data.message) ; 
          
       // navigate(  "/home/course/draftcourse/module"   ,  { state: {   type :  location.state.type   ,           courseId :  location.state.courseId ,   courseName :  location.state.course_name  ,  type_name :   name    , userInfo :  location.state.userInfo    }}   ,  { replace : false}  ) ;  
       }else{
        alert( res.data.message) ;

       } 




      }) // Handle the response from backend here
      .catch((err) => {  

        //console.log( err) ; 
      }); // Catch errors if any
 
    } 
    else if(  type === "workshop"        &&  ( file_extension === "jpg"  ||    file_extension === "jpeg"  ||  file_extension === "png"  )    ){
      
      
     alert(  type) ; 
      let formData = new FormData();
  
      //Adding files to the formdata  
      formData.append("name",  event.target.name.value );
      formData.append("course_name",  courseName  );
      formData.append("thumb_image",   event.target.file.value);
      formData.append("workshop_name",  name );
      formData.append("sub_type",  subType );
      formData.append("type_id",  type  );  

      axios({
        // Endpoint to send files
        url: "https://learn-up.app/admin/a_w_material", 
  
        method: "POST", 
  
        headers: { 
  
         "Content-Type" : "multipart/form-data"  
        
        }, 
  
  
        // Attaching the form data
        data: formData,
      })
        .then((res) => {  
            
  
         //console.log(  res) ;   
         alert( res.data.message) ;  

        navigate(  "/home/course/draftcourse/module"   ,  { state: {   type :  location.state.type   ,           courseId :  location.state.courseId ,   courseName :  location.state.course_name  ,  type_name :   name    , userInfo :  location.state.userInfo    }}   ,  { replace : false}  ) ;
  
        }) // Handle the response from backend here
        .catch((err) => {  
  
          //console.log( err) ; 
        }); // Catch errors if any


    

    }
    else{

      alert( "File format not supported!") ;   

    }

  }
    
    event.preventDefault() ; 

  }

   


  













  // to upload video 
  const  uploadVideo  = (  event  ) => { 
    
    event.preventDefault() ; 
    const selectedFile = document.getElementById("upload").files[0];
    //console.log( "file upload"  )   ; 
    //console.log(selectedFile) ;
    //console.log( typeId ) ; 
   // //console.log(selectedFile.name) ;  
     
    
 


    if(  selectedFile !== undefined  ){
     
      let aa = selectedFile.name ;
      let file_extension = aa.split('.').pop();  
      file_extension =  file_extension.toLowerCase() ; 
      //console.log(  file_extension ) ; 
      event.target.sbtn.disabled = true ;
  
  
   


    if( type === "module"   &&  ( file_extension === "mp4"  ||  file_extension ===  "mkv"  ) ) {

    
    let formData = new FormData();
  
    //Adding files to the formdata  
    formData.append("name",  event.target.videoname.value );
    formData.append("course_name",  courseName  );
    formData.append("file", selectedFile );
    formData.append("module_name",  name );
    formData.append("sub_type",  subType );
    formData.append("type_id",  type  );  


    //console.log( formData ) ;    


    axios({
      // Endpoint to send files
      url: "https://learn-up.app/admin/upload_file_m", 

      method: "POST", 

      headers: { 

       "Content-Type" : "multipart/form-data"  
      
      }, 


      // Attaching the form data
      data: formData,
    })
      .then((res) => {  
          

       //console.log(  res) ;   
      //  alert( res.data.message) ;
       

       if( res.data.status === "success"  ){
          
        alert( res.data.message) ;
        event.target.sbtn.disabled = false; 
       // navigate(  "/home/course/draftcourse/module"   ,  { state: {   type :  location.state.type   ,           courseId :  location.state.courseId ,   courseName :  location.state.course_name  ,  type_name :   name    , userInfo :  location.state.userInfo    }}   ,  { replace : false}  ) ;
       }else{
        alert( res.data.message) ;
        event.target.sbtn.disabled = false ; 
       } 




      }) // Handle the response from backend here
      .catch((err) => {  
        

        //console.log( err) ;  
        alert( err) ;
        event.target.sbtn.disabled = false ; 
      }); // Catch errors if any
 
    } 
    else if(  type === "workshop"    &&    ( file_extension === "mp4"  ||   file_extension === "mkv" )   ){
      
      
     alert(  type) ; 
      let formData = new FormData();
  
      //Adding files to the formdata  
      formData.append("name",  event.target.name.value );
      formData.append("course_name",  courseName  );
      formData.append("thumb_image",   event.target.file.value);
      formData.append("workshop_name",  name );
      formData.append("sub_type",  subType );
      formData.append("type_id",  type  );  

      axios({
        // Endpoint to send files
        url: "https://learn-up.app/admin/a_w_material", 
  
        method: "POST", 
  
        headers: { 
  
         "Content-Type" : "multipart/form-data"  
        
        }, 
  
  
        // Attaching the form data
        data: formData,
      })
        .then((res) => {  
            
  
         //console.log(  res) ;   
         alert( res.data.message) ; 
      //  navigate(  "/home/course/draftcourse/module"   ,  { state: {   type :  location.state.type   ,           courseId :  location.state.courseId ,   courseName :  location.state.course_name  ,  type_name :   name    , userInfo :  location.state.userInfo    }}   ,  { replace : false}  ) ;
        event.target.sbtn.disabled = false ; 
        }) // Handle the response from backend here
        .catch((err) => {  
         
          event.target.sbtn.disabled = false ; 
          //console.log( err) ; 
        }); // Catch errors if any


    

    }
    else{
      event.target.sbtn.disabled = false ; 
      alert( "File format not supported!") ; 
    }

  }else{

    alert( "Please fill all details!") ; 
  }

    

  }













  














  






 






  // upload text   

  const  uploadText  = (  event  ) => { 
   
     
    event.target.sbtn.disabled = true ; 
    
    if(   type ===  "module"){

      //console.log(   type  )  ;  

    axios({
      // Endpoint to send files
      url: "https://learn-up.app/admin/a_m_text", 

      method: "POST", 

    
      data: {



        "text_name" : event.target.name.value , 
        "enter_text" : event.target.text.value , 
        "module_name" : name   , 
        "course_name" : courseName  , 
       "type_id" : type  , 
        "sub_type" : subType , 
        "max_char" : "0" , 

      },
    })
      .then((res) => {  
          
   


       if( res.data.message ===  "Text added Successfully."){ 
        alert( res.data.message) ; 
        event.target.sbtn.disabled = false ; 
      //  navigate(  "/home/course/draftcourse/module"   ,  { state: {   type :  location.state.type   ,           courseId :  location.state.courseId ,   courseName :  location.state.course_name  ,  type_name :   name    , userInfo :  location.state.userInfo    }}   ,  { replace : false}  ) ;
       }else {
        alert( res.data.message) ; 
        event.target.sbtn.disabled = false ; 
       }
    
      }) // Handle the response from backend here
      .catch((err) => { 
        
        alert( err) ; 
        event.target.sbtn.disabled = false ; 
      }); // Catch errors if any
   
    } 
    else  if(  type ===  "workshop"  ){
       
      //console.log(   "vhgs"  )  ;   

      axios({
        // Endpoint to send files
        url: "https://learn-up.app/admin/a_w_text", 
  
        method: "POST", 
  
      
        data: {
  
  
  
          "text_name" : event.target.name.value , 
          "enter_text" : event.target.text.value , 
          "workshop_name" : name   , 
          "course_name" : courseName  , 
         "type_id" : type  , 
          "sub_type" : subType
        },
      })
        .then((res) => {  
            
          alert( res.data.message) ;
         //console.log(  res) ;   
         event.target.sbtn.disabled = false ; 
      //   navigate(  "/home/course/draftcourse/module"   ,  { state: {   type :  location.state.type   ,           courseId :  location.state.courseId ,   courseName :  location.state.course_name  ,  type_name :   name    , userInfo :  location.state.userInfo    }}   ,  { replace : false}  ) ;
        }) // Handle the response from backend here
        .catch((err) => {  

           alert( err) ; 
          event.target.sbtn.disabled = false ; 
        }); // Catch errors if any

    }

    event.preventDefault() ; 

  }

    


  



  const  uploadQuiz  = (  event  ) => {  
  
   
    const answer1 = (  selectedOption === optionArray[0]);
 //   //console.log(  answer1) ;
    const answer2 = (  selectedOption === optionArray[1]);
  //  //console.log(  answer2) ;
    const answer3 = (  selectedOption === optionArray[2]);
    //console.log(answer1||answer2||answer3) ;
   
    /* //console.log(  location.state.typeId  ) ; 
    //console.log( event.target.name.value) ; 
    //console.log(  location.state.type_name  ) ; 
    //console.log(  location.state.type  ) ; 
   //console.log( event.target.question.value) ; 
   //console.log( event.target.option1.value) ; 
   //console.log( event.target.option2.value) ; 
   //console.log( event.target.option3.value) ;  
   //console.log( location.state.course_name) ;
   const answer1 = (  selectedOption === optionArray[0]);
   //console.log(  answer1) ;
   const answer2 = (  selectedOption === optionArray[1]);
   //console.log(  answer2) ;
   const answer3 = (  selectedOption === optionArray[2]);
   //console.log(  answer3) ;
 */ 

   
   // //console.log( "quiz") ;    
   if(  (answer1||answer2||answer3)   ===  true  ){
    

   if(   type ===  "module"     ){
     

    // alert( "work") ; 
    axios({
      // Endpoint to send files
      url: "https://learn-up.app/admin/a_quiz_m", 

      method: "POST", 

    
      data: {



        
        "type_id" : location.state.type   ,
        "quiz_name" :  event.target.name.value  , 
        "module_name" :location.state.type_name , 
        "course_name" : location.state.course_name  , 
  
      "question": event.target.question.value,
  
      "option1":event.target.option1.value,
  
      "option2": event.target.option2.value , 
  
      "option3":  event.target.option3.value,
  
      "answer1": `${answer1}`,
  
      "answer2":`${answer2}`,
  
      "answer3":`${answer3}`


      },
    })
      .then((res) => {  
          

       //console.log(  res) ;   

       if(  res.data.message === "quiz added Successfully."){

         alert(  res.data.message ) ;   
         event.target.question.value = ""  ; 
         event.target.option1.value = "" ;  
         event.target.option2.value = "" ; 
         event.target.option3.value = "" ;  
         setSelectedOption( null) ; 
      //  navigate(  "/home/course/draftcourse/module"   ,  { state: { type : location.state.type   ,      courseName :   location.state.course_name   ,  type_name :   location.state.type_name    ,     userInfo :  location.state.userInfo   }}   ,  { replace : false}  ) ; 
       }else{

        alert(  res.data.message ) ;  
       }

      }) // Handle the response from backend here
      .catch((err) => { }); // Catch errors if any
  

    }else if(   type ===  "workshop"  ){
   
  

      axios({
        // Endpoint to send files
        url: "https://learn-up.app/admin/a_quiz_w", 
  
        method: "POST", 
  
      
        data: {
  
  
  
          
          "type_id" : location.state.type   ,
          "quiz_name" :  event.target.name.value  , 
          "workshop_name" :location.state.type_name , 
          "course_name" : location.state.course_name  , 
    
        "question": event.target.question.value,
    
        "option1":event.target.option1.value,
    
        "option2": event.target.option2.value , 
    
        "option3":  event.target.option3.value,
    
        "answer1": `${answer1}`,
    
        "answer2":`${answer2}`,
    
        "answer3":`${answer3}`
  
  
        },
      })
        .then((res) => {  
            
  
         //console.log(  res) ;   
  
         if(  res.data.message === "quiz added Successfully."){
  
           alert(  res.data.message ) ; 
            navigate(  "/home/course/draftcourse/module"   ,  { state: { type : location.state.type   ,      courseName :   location.state.course_name   ,  type_name :   location.state.type_name    ,     userInfo :  location.state.userInfo   }}   ,  { replace : false}  ) ; 
         }else{
  
          alert(  res.data.message ) ;  
         }
  
        }) // Handle the response from backend here
        .catch((err) => { }); // Catch errors if any
    

    }
  }else{

    alert( "Please select right answer!") ; 
  }






    event.preventDefault() ; 

  }

  

     

 



  
  // upload text   

  const  uploadTask  = (  event  ) => { 
   
     

    
    if(   type ===  "module"){ 


      //console.log(   type  )  ;  

    axios({
      // Endpoint to send files
      url: "https://learn-up.app/admin/a_m_text", 

      method: "POST", 

    
      data: {



        "text_name" : event.target.name.value , 
        "enter_text" : event.target.instruction.value , 
        "module_name" : name   , 
        "course_name" : courseName  , 
       "type_id" : type  , 
        "sub_type" : subType , 
        "max_char" :event.target.limit.value  , 

      },
    })
      .then((res) => {  
          
   


       if( res.data.message ===  "Text added Successfully."){ 
        alert( res.data.message) ;
        navigate(  "/home/course/draftcourse/module"   ,  { state: {   type :  location.state.type   ,           courseId :  location.state.courseId ,   courseName :  location.state.course_name  ,  type_name :   name    , userInfo :  location.state.userInfo    }}   ,  { replace : false}  ) ;
       }else {
        alert( res.data.message) ;
       }
    
      }) // Handle the response from backend here
      .catch((err) => { }); // Catch errors if any
   
    } 
    else  if(  type ===  "workshop"  ){
       
      //console.log(   "vhgs"  )  ;   

      axios({
        // Endpoint to send files
        url: "https://learn-up.app/admin/a_w_text", 
  
        method: "POST", 
  
      
        data: {
  
  
          "text_name" : event.target.name.value , 
          "enter_text" : event.target.instruction.value , 
          "workshop_name" : name   , 
          "course_name" : courseName  , 
         "type_id" : type  , 
          "sub_type" : subType , 
          "max_char" :event.target.limit.value  , 
        },
      })
        .then((res) => {  
            
          alert( res.data.message) ;
         //console.log(  res) ;   
         navigate(  "/home/course/draftcourse/module"   ,  { state: {   type :  location.state.type   ,           courseId :  location.state.courseId ,   courseName :  location.state.course_name  ,  type_name :   name    , userInfo :  location.state.userInfo    }}   ,  { replace : false}  ) ;
  
        }) // Handle the response from backend here
        .catch((err) => { }); // Catch errors if any

    }

    event.preventDefault() ; 
  }





  const handleCheckboxChange1 = ( e ) => {  
    
    const { value, checked } = e.target;


   //console.log( value) ;
   
   //console.log( checked) ;
   
  


  
  if(  value === "option1"    ){ 


      if (checked  &&  (selectedOption === null) ) {
              
             
             setSelectedOption( optionArray[0]) ; 
           
         }
     else if ( checked  &&  (selectedOption !== null )  ){


            setSelectedOption( optionArray[0]) ; 
     }
    // Case 2  .: The user unchecks the box
      else {
         
        setSelectedOption( null) ;

  } 

}  

else if(value === "option2"    ){

  if (checked  &&  (selectedOption === null)) {
                        
    setSelectedOption( optionArray[1]) ; 

        }  
        else if ( checked  &&  (selectedOption !== null )  ){


          setSelectedOption( optionArray[1]) ; 
   }

// Case 2  .: The user unchecks the box
             else {

           setSelectedOption( null) ;

} 

}else if( value === "option3"  ){
 
  if (checked  &&  (selectedOption === null)) {
                        
    setSelectedOption( optionArray[2]) ; 

} 
else if ( checked  &&  (selectedOption !== null )  ){


  setSelectedOption( optionArray[2]) ; 
}

// Case 2  .: The user unchecks the box
else {

setSelectedOption( null) ;

} 


}




  }







  const  optionHandler = (  e , value  ) => {  
  
    //console.log( optionArray ) ; 
    //console.log( e.target.value ) ; 


   if(  value === "option1"){
        
         let newarr = optionArray ;
         newarr[0] =  e.target.value ; 
         setOptionArray( newarr) ; 

   }else if(   value === "option2"){ 
 
    let newarr = optionArray ;
    newarr[1] =  e.target.value ; 
    setOptionArray( newarr) ; 

   }else if(   value === "option3" ){
 
    let newarr = optionArray ;
    newarr[2] =  e.target.value ; 
    setOptionArray( newarr) ; 

   }


    e.preventDefault() ; 

  }






 

























  switch( typeId )  { 


    case "quiz" :   


    return (
      
      <div  className="upload"> 

      <div  className="upload-sidebar" style={{ borderRadius : 25}}> 
     <Sidebar     info = {  location.state.userInfo}/> 
     </div> 


     <form  className ="upload-body"     onSubmit={ uploadQuiz  }   >   

        <div   className ="upload-body-div1"  >  
        
        <input type="text"
                name="name"
                className="upload-body-div1-input-box"  /> 
        </div>  


        <div className ="upload-body-div2"  style= {{ width : "100%"}}  >   


             <div className="upload-body-div2-inner-div1"   style={{ borderTop : "1px solid #B6B7D0"  , borderBottom : "1px solid #B6B7D0"}}> 


             <div   className=  "upload-body-box" style= {{   width: "10%"  ,  height: "100%" ,  borderRight : "1px solid #B6B7D0" }}>
               <p className="header_text" >Sl No</p>
               </div> 
               <div className=  "upload-body-box"  style= {{   width: "22.5%" , height: "100%"   , borderRight : "1px solid #B6B7D0" }}>
                 <p className="header_text" >Question</p>
               </div>
               <div className=  "upload-body-box" style= {{   width: "22.5%" ,  height: "100%"  , borderRight : "1px solid #B6B7D0"}  }>
                 <p className="header_text" >Answer 1</p>
               </div>
               <div className=  "upload-body-box" style= {{  width: "22.5%"  ,  height: "100%"    , borderRight : "1px solid #B6B7D0"}}>
                 <p className="header_text" >Answer 2</p>
               </div> 
               <div  className=  "upload-body-box" style= {{   width: "22.5%"  ,  height: "100%" , borderRight : "1px solid #B6B7D0"}}> 
                <p className="header_text">Answer 3</p>
               </div> 

             </div> 

             <div className="upload-body-div2-inner-div2" style={{ borderBottom : "1px solid #B6B7D0" }} >
    
             <div className=  "upload-body-box" style= {{   width: "10%"  ,  height: "100%" ,  borderRight : "1px solid #B6B7D0" }}>
              <p>1</p>
               </div>  



               <div className=  "upload-body-box" style= {{   width: "22.5%" ,  height: "100%" , borderRight : "1px solid #B6B7D0" ,  display : "flex"  , flexDirection : "row"}  }> 


                   <input type="text"
                   name="question"
                   className=  "upload-body-input-box"  
                   style ={{ borderRadius : 20}}
                   />         
         
              
                </div>  



               <div style= {{   width: "22.5%" ,  height: "100%"  , borderRight : "1px solid #B6B7D0" ,  display : "flex"  , flexDirection : "row"}  }> 

                    <div style={{ width: "80%" , height :"100%"  ,  display: "flex" , alignItems :"center" , justifyContent: "center"}} >
             
                           <input type="text"
                                  name="option1"
                                  className=  "upload-body-input-box" 
                                  style ={{ borderRadius : 20}} 
                                  onChange={ ( e ) => { optionHandler( e , "option1")}}
                                  />         
                    </div> 
                    <div style={{ width: "20%" , height :"100%" , }}>
                             
                         <input      value="option1"    name="option1_checked"   checked={ selectedOption === optionArray[0] }      type="checkbox"     onChange={ (  e ) => { handleCheckboxChange1( e  )   }} /> 
                    </div>
                </div>  


                <div style= {{   width: "22.5%" ,  height: "100%"   , borderRight : "1px solid black" ,  display : "flex"  , flexDirection : "row"}  }> 

                    <div style={{ width: "80%" , height :"100%"  ,  display: "flex" , alignItems :"center" , justifyContent: "center"}} >
             
                           <input type="text"
                                  name="option2" 
                                  className=  "upload-body-input-box" 
                                  style ={{ borderRadius : 20}} 
                                  onChange={ ( e ) => { optionHandler( e , "option2")}}
                                  />         
                    </div> 
                    <div style={{ width: "20%" , height :"100%" , }}>
                             
                      <input    value="option2"  name="option2_checked"   checked= {  selectedOption === optionArray[1]  }    type="checkbox"   onChange={ (  e ) => { handleCheckboxChange1( e  )   }}/> 
                    </div>
                </div>  


                <div style= {{   width: "22.5%" ,  height: "100%"   , borderRight : "1px solid black" ,  display : "flex"  , flexDirection : "row"}  }> 

                     <div style={{ width: "80%" , height :"100%"  ,  display: "flex" , alignItems :"center" , justifyContent: "center"}} >

                            <input type="text"
                              name="option3" 
                              className=  "upload-body-input-box" 
                              style ={{ borderRadius : 20}} 
                              onChange={ ( e ) => { optionHandler( e , "option3")}}
                              />         
                      </div>  


                 <div style={{ width: "20%" , height :"100%" }}>
         
                     <input     value="option3"   name="option3_checked"  type="checkbox"   checked= {  selectedOption === optionArray[2]  }        onChange={ (  e ) => { handleCheckboxChange1( e  )   }} /> 
                 </div> 


            </div>  


             </div> 


              
          <div className="upload-body-div2-inner-div2"   style={{ alignItems : "flex-end" , justifyContent : "flex-end" , paddingBottom :"1%" , paddingRight : "3%"}}  > 
 


             <input name="sbtn" type="submit" value="Submit" style={{ height : "56%"  , width : "15%" , borderRadius : 15  , backgroundColor : "#FCC046"   , border : "0px"}}   />   

             </div>
         </div>
      
     </form> 
 





     </div>
    )  

 




































































































    case "upload_picture" :  




     return (  

      <div  className="upload"  > 

      <div  className="upload-sidebar" style={{ borderRadius : 25}}> 
     <Sidebar    info = {  location.state.userInfo} /> 
     </div> 


     <form className ="upload-body"  onSubmit={ uploadPicture } >  



     
        <div   className ="upload-body-div1"  >  
        
        <input type="text"
                         name="name"
                         className="upload-body-div1-input-box" 
                         placeholder="Enter name"
                         />  

        </div>   

  



        <div className ="upload-body-div2"    style= {{ height: "53.13%" , display :"flex"   ,  alignItems : "center"  , justifyContent :"center"}}    >  
               

            <div   style= {{ width :"63.61%"  , backgroundColor : "#5A6198"  , height: "100%"  , borderRadius : 30   }}>
 
          

           
              <label  htmlFor="upload"  className="upload_file">
                
              <div  style= {{ width : "6%"  , height : "12%" , display : "flex"  , justifyContent : "center"   , padding : 5}}>
              <img src={ file_logo }  alt= { "ccv"}  height={"100%"}   />  
                </div>
               
           {/*    <img src={ logo1}  alt= { "ccv"}  height={"100%"}  />  */}
              <input  style={{ width : "45%" , backgroundColor : "grey" }} type="file"  name="file"   id="upload"  /> 
                
              </label>   


             </div> 


         </div> 
   






        <div   style= {{ width :"63.61%" ,  backgroundColor : "#FFF8EE", height: "15.61%" , display :"flex" , alignItems : "center" , justifyContent : "flex-end"}}>   
            
        <input   name="sbtn" className="inner_table_btn"  type="submit" value="Submit"   style= {{ width :"15.98%" ,  backgroundColor : "#FCC046", height: "34%"  , border : "0px solid black"}}  /> 
        </div>  

   

  


     </form> 

     </div>
     )  
 

   






   


































  







     

    case "upload_video" :  




    return (  

     <div  className="upload"  > 

     <div  className="upload-sidebar" style={{ borderRadius : 25}}> 
    <Sidebar    info = {  location.state.userInfo} /> 
    </div> 


    <form className ="upload-body"  onSubmit={ uploadVideo } >  



    
       <div   className ="upload-body-div1"  >  
       
       <input type="text"
                        name="videoname"
                        className="upload-body-div1-input-box" 
                        placeholder="Enter name"
                        />  

       </div>   

 



       <div className ="upload-body-div2"    style= {{ height: "53.13%" , display :"flex"   ,  alignItems : "center"  , justifyContent :"center"}}    >  
              

           <div   style= {{ width :"63.61%"  , backgroundColor : "#5A6198"  , height: "100%"  , borderRadius : 30   }}>

         

          
             <label  htmlFor="upload"  className="upload_file">
               
             <div  style= {{ width : "6%"  , height : "12%" , display : "flex"  , justifyContent : "center"   , padding : 5}}>
             <img src={ file_logo }  alt= { "ccv"}  height={"100%"}   />  
               </div>
              
          {/*    <img src={ logo1}  alt= { "ccv"}  height={"100%"}  />  */}
             <input  style={{ width : "45%" , backgroundColor : "grey" }} type="file"  name="file"   id="upload"  /> 
               
             </label>   


            </div> 


        </div> 
  






       <div   style= {{ width :"63.61%" ,  backgroundColor : "#FFF8EE", height: "15.61%" , display :"flex" , alignItems : "center" , justifyContent : "flex-end"}}>   
           
       <input name="sbtn"  className="inner_table_btn"  type="submit" value="Submit"   style= {{ width :"15.98%" ,  backgroundColor : "#FCC046", height: "34%"  , border : "0px solid black"}}  /> 
       </div>  

  

 


    </form> 

    </div>
    )  


  






  











































































     

    
      
    case "upload_text" :

    return (     

     <div  className="upload"  > 

     <div  className="upload-sidebar" style={{ borderRadius : 25}}> 
    <Sidebar    info = {  location.state.userInfo} /> 
    </div> 


    <form className ="upload-body"    onSubmit={ uploadText }   >  



       <div   className ="upload-body-div1"  >  
        




       <input type="text"
                        name="name"
                        placeholder="Enter name"
                        className="upload-body-div1-input-box"
                        />  



       </div> 
       <div className ="upload-body-div2"   style= {{   display :"flex"   ,  alignItems : "center"  , justifyContent :"center"}}   >  
            
       <input   name="text"   placeholder="enter text" style={{ width :"100%" , height: "100%"  , textAlign : "center"  , borderRadius : 30 }} /> 
        </div> 



       <div className ="upload-body-div3" >   

       <input  name="sbtn"   className="inner_table_btn"  type="submit" value="Submit" style={{  width : "15%" , height : "50%"  , backgroundColor : "white"  , border : "0px"  , backgroundColor : "#FCC046"}}   /> 
       </div> 





    </form> 

    </div>
    )    












    
   

    case "upload_picture_task" :

    return (     

     <div  className="upload"  > 

     <div  className="upload-sidebar" style={{ borderRadius : 25}}> 
    <Sidebar    info = {  location.state.userInfo} /> 
    </div> 


    <form className ="upload-body"    onSubmit={ uploadText }   >  



       <div   className ="upload-body-div1"  >  
        




       <input type="text"
                        name="name"
                        placeholder="Enter name"
                        className="upload-body-div1-input-box"
                        />  



       </div> 
       <div className ="upload-body-div2"  >  
            
       <input   name="text" cols ="10"  rows="5"   placeholder="Insert Instructions" style={{ width :"100%" , height: "100%"  , textAlign :"center"  , borderRadius : 30 }} /> 
        </div> 



       <div className ="upload-body-div3" >   

       <input name="sbtn"   className="inner_table_btn"   type="submit" value="Submit" style={{  width : "17%" , height : "50%"  , backgroundColor : "white"  , border : "0px"  , backgroundColor : "#FCC046"}}   /> 
       </div> 





    </form> 

    </div>
    )   






































    case "task_text" :

    return (     

     <div  className="upload"  > 

     <div  className="upload-sidebar" style={{ borderRadius : 25}} > 
    <Sidebar     info = {  location.state.userInfo}/> 
    </div> 


    <form className ="upload-body"    onSubmit={ uploadTask}   >  



       <div   className ="upload-body-div1"  >  
        




       <input type="text"
                        name="name"
                        placeholder="Enter name"
                        className="upload-body-div1-input-box"
                        />  



       </div> 
       <div className ="upload-body-div2"  >  
            
       <input    name="instruction"   type= "text" placeholder="Insert Instructions" style={{ width :"100%" , height: "70%"  , textAlign : "center"  , borderRadius : 30   }} />  

       <input   name="limit"   type="number"  placeholder="Mention maximum number of words" style={{ width :"63.61%" , height: "18%"  , textAlign : "center" ,  borderRadius : 30 , backgroundColor : "#B7B7D1"  , textColor : "#000000"}} /> 
        </div> 



       <div className ="upload-body-div3" >   

       <input name="sbtn"   className="inner_table_btn"     type="submit" value="Submit" style={{  width : "15%" , height : "52%"  , backgroundColor : "white"  , border : "0px"  , backgroundColor : "#FCC046"}}   /> 
       </div> 





    </form> 

    </div>
    )  




  }
    }
    
    export default UploadContent;