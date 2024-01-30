import {Link , useNavigate  , useLocation} from "react-router-dom" ; 
import { useState   , useEffect } from "react"; 
import Sidebar from "../Sidebar"  ; 
import "../Style/ClientView.css" ; 
import axios from "axios"  ; 


 




// popup 
import Popup from "../Components/Popup";
  





function SchoolView() {    
     
   

   // for popup 
   const[ popupInfo  , setPopupInfo ] = useState("") ;
   const[ popup  , setPopup ] = useState( false) ; 
   const[ userNameForPopup  , setUserNameForPopup ] = useState( "") ; 

    
    const [ data , setData ] = useState( []); 
    const  navigate = useNavigate() ;  
    const location = useLocation();  
    const [  typeId  , setTypeId ]   = useState( location.state.typeId   ) ;  
    const [  clientId  , setClientId  ]   = useState( location.state.clientId  ) ;   

  
  /*   console.log("in school view ")  ;

    console.log( location.state.clientId )  ; 

    console.log( location.state.programName) ;   
    
    console.log( location.state.typeId ) ;  
   
    console.log( location.state.programId) ;   */ 
     



    
    const goToNext = () => {
  
       navigate(  "/home/dashboard/client/addschool"   ,   { state: {    typeId : "system_admin_school"  ,   type : "system_admin"   ,   clientId : location.state.clientId ,   programId :  location.state.programId  ,  programName : location.state.programName  ,   userInfo :  location.state.userInfo   }}   ,  { replace : false}  ) ; 
       console.log("ASJghshGHS") ;  




      }   
    

      useEffect(() => { 

        axios({ 
  
         url : "http://3.123.39.199:5000/admin/ca_school"  ,  
         method : "POST"  , 
         data : {
           
                  "search_key" :  clientId  , 
                "page_no" :  1 ,
                 "limit" : 10   
  
         }
  
        }).then( ( res) => {   
  
  
          console.log(  res.data.data ) ; 
           setData(  res.data.data ) ;  
           
           
         //  console.log(   res.data.data[1].name )  ;
  
        } ).catch(( err) => {  
            console.log( "error") ;
  
         }  ) ; 
  
    } , [  popup])  ; 
 
  
   
    
    
    

    
    const  handleStatusChange = ( cs  ) => {    
    
    
      setPopupInfo( cs) ;
     // console.log( cs) ;
     setUserNameForPopup( cs.school_name) ;
       setPopup( true)  ;
      
 } 

 








    switch( typeId )  {  
    
    case "system_admin" :  
    case "program_admin" : 


    return(  


  
        <div className="clientview">  
    
                <div className="clientview_sidebar"    style={{ borderRadius : 25}}   >
                       <Sidebar  info = {  location.state.userInfo} /> 
                </div> 
                <div className="clientview_body">   


                

                <Popup  trigger= { popup  } setTrigger={ setPopup }   data={ popupInfo}  >
                <h3>{userNameForPopup}</h3>
          </Popup>


                 
                 <div  className="clientview_body1"> 
               
                 </div>
                
                  <div className="clientview_table_outer_div_body2">   
        
    
                   <div className="clientview_table_inner_div_column_name">  


                


               <div    className="clientview_table_row_box"    style= {{   width: "7%"  ,  height: "100%"   ,  borderRight : "1px solid #B6B7D0" }}>
               <p className="header_text">Sl No</p>
               </div> 
               <div    className="clientview_table_row_box"   style= {{   width: "14%" , height: "100%"  , borderRight : "1px solid #B6B7D0" }}>
                 <p className="header_text">Name of school</p>
               </div>
               <div    className="clientview_table_row_box"  style= {{   width: "17%" ,  height: "100%"  , borderRight : "1px solid #B6B7D0"}  }>
                 <p className="header_text">Contact Person</p>
               </div>
               <div    className="clientview_table_row_box"  style= {{  width: "13%"  ,  height: "100%"   , borderRight : "1px solid #B6B7D0"}}>
                 <p className="header_text">Contact Email Id</p>
               </div> 
               <div  className="clientview_table_row_box"   style= {{   width: "12%"  ,  height: "100%" , borderRight : "1px solid #B6B7D0"}}> 
                <p className="header_text">Facilitators</p>
               </div> 

               <div   className="clientview_table_row_box"  style= {{  width: "12%"  ,    height: "100%"   , borderRight : "1px solid #B6B7D0"}}> 
                <p className="header_text">Students</p>
               </div> 
               <div className="clientview_table_row_box"  style= {{   width: "7%"  ,    height: "100%"  , borderRight : "1px solid #B6B7D0"}}> 
                <p className="header_text"  style = {{  textAlign : "center"  }}>Account status</p>
               </div> 
               <div   className="clientview_table_row_box" style= {{   width: "18%"  ,    height: "100%"  }}> 
                <p className="header_text">Account status</p>
               </div>
              

              
    
                  </div>  



                  <div  className="clientview_table_inner_div_table_row">
                     
                       


{
                data.map( (  el   , index )  => ( 

    
                  <div  key= {  index} style= {{ width : "100%" , height: "25%"   , display : "flex" , flexDirection : "row"   ,   borderBottom : "1px solid #B6B7D0"}} > 




                  <div   className="clientview_table_row_box"    style= {{   width: "7%"  ,  height: "100%"   ,  borderRight : "1px solid #B6B7D0" }}>
                   <p> {index+1}</p>
                   </div>  

                   <div  className="clientview_table_row_box"  style= {{   width: "14%" , height: "100%"  , borderRight : "1px solid #B6B7D0" }}>
                     <p> {  el.school_name}</p>
                   </div>
                   <div   className="clientview_table_row_box"  style= {{   width: "17%" ,  height: "100%"   , borderRight : "1px solid #B6B7D0"}  }>
                     <p> {  el.contact_person}</p>
                   </div>
                   <div  className="clientview_table_row_box"   style= {{  width: "13%"  ,  height: "100%"  , borderRight : "1px solid #B6B7D0"  , overflow : "hidden"}}>
                     <p> { el.email_id}</p>
                   </div> 
                   <div  className="clientview_table_row_box"   style= {{   width: "12%"  ,  height: "100%"  , borderRight : "1px solid #B6B7D0"  , display: "flex"  ,   flexDirection : "row"}}>   


                   <div  className="clientview_table_row_box"  style={{ height: "100%"  , width : "25%"}}>  
                           <p>{ el.total_facilitators }</p>
                                </div>
                               
              <input  className="inner_table_btn" style={{ height: "40%"  , width : "55%"}}   type="button" value = "view"  onClick={()  => {        navigate(  "/home/dashboard/client/facilitator"   ,     { state: {    typeId : "facilitator_with_add_account"   ,     schoolId : data[index]._id  ,      programId : location.state.programId  ,  userInfo :  location.state.userInfo  }}           ,     { replace : false}  )  }  } /> 
                             
                   </div>   


            <div  className="clientview_table_row_box"  style= {{   width: "12%"  ,  height: "100%" , borderRight : "1px solid #B6B7D0"  , display: "flex"  ,   flexDirection : "row"}}>  

                     <div  className="clientview_table_row_box"   style={{ height: "40%"  , width : "25%"}}> 
                               <p> { el.total_students}</p>
                     </div>
                            
                    <input   className="inner_table_btn" style={{ height: "40%"  , width : "55%"}}   type="button" value = "view"  onClick={()  => {        navigate(  "/home/dashboard/client/student"      ,   { state: {    typeId : "student_with_edit",   schoolId : data[index]._id  ,      programId : location.state.programId    , userInfo :  location.state.userInfo      }}        ,  { replace : false}  )  }  } /> 
                        
                   </div>  


                   <div   className="clientview_table_row_box"  style= {{  width: "7%"  ,    height: "100%"  , borderRight : "1px solid #B6B7D0"}}> 
                    <p> { el.status } </p>
                   </div>  

            <div    className="clientview_table_row_box"   style= {{   width: "18%"  ,    height: "100%"   ,  display: "flex"  ,   flexDirection : "row"  , justifyContent  : 'space-around'}}> 
                      

            <input className="inner_table_btn"   style={{ height: "40%"  , width : "36%"}}   type="button" value = "Status"    onClick= { () => {handleStatusChange( el) } }   /> 
                            
                             
           <input   className="inner_table_btn" style={{ height: "40%"  , width : "36%"}}   type="button" value = "Edit"  onClick={()  => {        navigate(  "/home/dashboard/client/editschool"   ,  { state: {    typeId : "school"   ,    data : el   ,  type : "system_admin"  , programName : location.state.programName  , userInfo :  location.state.userInfo     }}   , { replace : false}  )  }  } />   





                   </div>
    

                 </div>  

))                 }

                  </div>
                  
                  
        
                  </div> 
    
                  <div className="body3"> 
    
                  <div onClick={ () => { goToNext() } } className="add_new_program_button">
                    <p> Add new school </p>
                  </div>
                
                  </div>
                
                </div>
    
    
    
        </div>
        ) ;    

     
      
    
        case "content_admin" :   
    
        return(
    
          <div className="clientview">  
    
          <div className="clientview_sidebar"   style={{ borderRadius : 25}}>
                 <Sidebar  info = {  location.state.userInfo}   /> 
          </div> 
          <div className="clientview_body">   


          

          <Popup  trigger= { popup  } setTrigger={ setPopup }   >
      <h3> {popupInfo } </h3>
    </Popup>


           
           <div  className="clientview_body1"> 
         
           </div>
          
            <div className="clientview_table_outer_div_body2">   
  

             <div className="clientview_table_inner_div_column_name">  


          


         <div    className="clientview_table_row_box"    style= {{   width: "7%"  ,  height: "100%"   ,  borderRight : "1px solid #B6B7D0" }}>
         <p className="header_text" >Sl No</p>
         </div> 
         <div    className="clientview_table_row_box"   style= {{   width: "14%" , height: "100%"  , borderRight : "1px solid #B6B7D0" }}>
           <p className="header_text" >Name of school</p>
         </div>
         <div    className="clientview_table_row_box"  style= {{   width: "17%" ,  height: "100%"  , borderRight : "1px solid #B6B7D0"}  }>
           <p className="header_text" >Contact Person</p>
         </div>
         <div    className="clientview_table_row_box"  style= {{  width: "20%"  ,  height: "100%"   , borderRight : "1px solid #B6B7D0"}}>
           <p className="header_text" >Contact Email Id</p>
         </div> 
         <div  className="clientview_table_row_box"   style= {{   width: "15%"  ,  height: "100%" , borderRight : "1px solid #B6B7D0"}}> 
          <p className="header_text" >Facilitators</p>
         </div> 

         <div   className="clientview_table_row_box"  style= {{  width: "15%"  ,    height: "100%"   , borderRight : "1px solid #B6B7D0"}}> 
          <p className="header_text" >Students</p>
         </div> 
         <div className="clientview_table_row_box"  style= {{   width: "12%"  ,    height: "100%"  , borderRight : "1px solid #B6B7D0"}}> 
          <p className="header_text" >Account status</p>
         </div> 
        

        

            </div>  



            <div  className="clientview_table_inner_div_table_row">
               
                 


{
          data.map( (  el   , index )  => ( 


            <div  key= {  index} style= {{ width : "100%" , height: "25%"   , display : "flex" , flexDirection : "row"   ,   borderBottom : "1px solid #B6B7D0"}} > 




            <div   className="clientview_table_row_box"    style= {{   width: "7%"  ,  height: "100%"   ,  borderRight : "1px solid #B6B7D0" }}>
             <p> {index+1}</p>
             </div>  

             <div  className="clientview_table_row_box"  style= {{   width: "14%" , height: "100%"  , borderRight : "1px solid #B6B7D0" }}>
               <p> {  el.school_name}</p>
             </div>
             <div   className="clientview_table_row_box"  style= {{   width: "17%" ,  height: "100%"   , borderRight : "1px solid #B6B7D0"}  }>
               <p> {  el.contact_person}</p>
             </div>
             <div  className="clientview_table_row_box"   style= {{  width: "20%"  ,  height: "100%"  , borderRight : "1px solid #B6B7D0"  , overflow : "hidden"}}>
               <p> { el.email_id}</p>
             </div> 
             <div  className="clientview_table_row_box"   style= {{   width: "15%"  ,  height: "100%"  , borderRight : "1px solid #B6B7D0"  , display: "flex"  ,   flexDirection : "row"}}>   


             <div  className="clientview_table_row_box"  style={{ height: "100%"  , width : "40%"}}>   


                     <p>{ el.total_facilitators }</p>
                          </div>
                         
        <input    className="inner_table_btn"   style={{ height: "40%"  , width : "40%"}}   type="button" value = "view"  onClick={()  => {        navigate(  "/home/dashboard/client/facilitator"   ,     { state: {    typeId : "facilitator"   ,     schoolId : data[index]._id  ,      programId : location.state.programId   ,   userInfo :  location.state.userInfo   }}           ,     { replace : false}  )  }  } /> 
                       
             </div>   


      <div  className="clientview_table_row_box"  style= {{   width: "15%"  ,  height: "100%" , borderRight : "1px solid #B6B7D0"  , display: "flex"  ,   flexDirection : "row"}}>  

               <div  className="clientview_table_row_box"   style={{ height: "40%"  , width : "40%"}}> 
                         <p> { el.total_students}</p>
               </div>
                     
              <input    className="inner_table_btn"   style={{ height: "40%"  , width : "40%"}}   type="button" value = "view"  onClick={()  => {        navigate(  "/home/dashboard/client/student"      ,   { state: {    typeId : "student",   schoolId : data[index]._id  ,      programId : location.state.programId   ,  userInfo :  location.state.userInfo        }}        ,  { replace : false}  )  }  } /> 
                  
             </div>  


             <div   className="clientview_table_row_box"  style= {{  width: "12%"  ,    height: "100%"  , borderRight : "1px solid #B6B7D0"}}> 
              <p> { el.status } </p>
             </div>  

      

           </div>  

))                 }

            </div>
            
            
  
            </div> 

            <div className="body3"> 

          
            </div>
          
          </div>



  </div>

        ) ;
    }
} 

export default SchoolView;