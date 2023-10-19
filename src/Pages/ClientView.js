import "../Style/ClientView.css"  ;
import {Link , useNavigate  , useLocation} from "react-router-dom" ; 
import { useState   , useEffect  } from "react"; 
import Sidebar from "../Sidebar"  ;  
import axios from "axios"  ;   






// popup 
import Popup from "../Components/Popup";
 

 





function ClientView(   ) {    
    
 
   // for popup 
   const[ popupInfo  , setPopupInfo ] = useState("") ;
   const[ popup  , setPopup ] = useState( false) ; 
   const[ userNameForPopup  , setUserNameForPopup ] = useState( "") ; 
   

   



  const [ data , setData ] = useState( []);
  const  navigate = useNavigate() ;   
  const location = useLocation();  
  const [  typeId  , setTypeId ]   = useState( location.state.typeId   ) ; 
  const [  programId  , setProgramId ]   = useState( location.state.programId  ) ; 
   
  /* 
  console.log( "client view" ) ; 
  console.log(  location.state.typeId    ) ; 
  console.log( location.state.programName   ) ; 
  console.log( location.state.programId   ) ; 


 */
    const goToNext = () => {
     
        
       navigate(  "/home/dashboard/client/addclient"   ,  { state: {    typeId : "system_admin_client"  ,   type : "system_admin"   ,    programId : programId  ,   programName : location.state.programName }}   ,  { replace : false}  ) ; 
       console.log("ASJghshGHS") ;  

      }  


      useEffect(() => { 

        axios({ 
  
         url : "http://localhost:8000/admin/c_program"  ,  
         method : "POST"  , 
         data : {
           
          "_id" : programId
  
         }
  
        }).then( ( res) => {   
    
  
      
            
         if(   res.data.message === "Data not found"){
 
          console.log(  res ) ;  

         }else if(  res.data.message === "Details retrieve successfully"  ) {

          console.log(  res ) ;  
          setData( res.data.data) ; 

         }
           
         //  console.log(   res.data.data[1].name )  ;
  
        } ).catch(( err) => {  
            console.log( "error") ;
  
         }  ) ; 
  
    } , [  popup])  ; 
 
     



    const  handleStatusChange = ( cs  ) => {    
      

      setPopupInfo( cs) ;
     // console.log( cs) ;
     setUserNameForPopup( cs.client_name) ;
       setPopup( true)  ;
      
 } 


    
  switch( typeId )  {  
    
    case "system_admin" :   
    case "program_admin" : 

    return(  

    
  
    <div className="clientview">  

            <div className="clientview_sidebar" >
                   <Sidebar /> 
            </div>  
        
            <div className="clientview_body">   

             

            

            
          <Popup  trigger= { popup  } setTrigger={ setPopup }   data={ popupInfo}  >
            <h3>{userNameForPopup}</h3>
          </Popup>



             <div  className="clientview_body1"> 
            
             </div>
             
               
              <div className="clientview_table_outer_div_body2">   
  

               <div className="clientview_table_inner_div_column_name"> 


               <div  className="clientview_table_row_box"  style= {{   width: "8.69%"  ,  height: "100%"   ,  borderRight : "1px solid black" }}>
               <p>Sl No</p>
               </div> 
               <div   className="clientview_table_row_box"  style= {{   width: "15.76%" , height: "100%"  , borderRight : "1px solid black" }}>
                 <p> Name of Client</p>
               </div> 

               <div  className="clientview_table_row_box"     style= {{   width: "15.76%" ,  height: "100%"  , borderRight : "1px solid black"}  }>
                 <p>Contact Person</p>
               </div>
               <div    className="clientview_table_row_box"   style= {{  width: "15.76%"  ,  height: "100%"   , borderRight : "1px solid black"}}>
                 <p>Contact Email Id</p>
               </div> 
               <div    className="clientview_table_row_box"   style= {{   width: "15.76%"  ,  height: "100%" , borderRight : "1px solid black"}}> 
                <p>No of schools</p>
               </div> 

               <div   className="clientview_table_row_box"   style= {{  width: "8.69%"  ,    height: "100%"   , borderRight : "1px solid black"}}> 
                <p  style = {{  textAlign : "center"}}>Account Status</p>
               </div> 
               <div    className="clientview_table_row_box"   style= {{   width: "20.19%"  ,    height: "100%"  , borderRight : "1px solid black"}}> 
                <p>Account status</p>
               </div>

              </div>  

                     

              <div  className="clientview_table_inner_div_table_row">
                  
    

                  {
                 
                 data.map( (  el  , index )  => (  

              <div  key={ index}    style= {{ width : "100%" , height: "25%"  , borderRight : "1px solid black"  , display : "flex" , flexDirection : "row"  , borderBottom : "1px solid black"}} >
              
               <div   className="clientview_table_row_box"   style= {{   width: "8.69%"  ,  height: "100%"  ,  borderRight : "1px solid black"  , }}>
               <p>{ index+1} </p>
               </div> 
               <div     className="clientview_table_row_box"  style= {{   width: "15.76%" , height: "100%"   , borderRight : "1px solid black" }}>
                 <p>  {  el.client_name }</p>
               </div>
               <div   className="clientview_table_row_box"  style= {{   width: "15.76%" ,  height: "100%"   , borderRight : "1px solid black"}  }>
                 <p> { el.contact_person }</p>
               </div>
               <div   className="clientview_table_row_box"   style= {{  width: "15.76%"  ,  height: "100%"   , borderRight : "1px solid black" , overflow : "hidden"}}>
                 <p> { el.email_id}</p>
               </div> 
               <div    className="clientview_table_row_box"  style= {{   width: "15.76%"  ,  height: "100%"  , borderRight : "1px solid black" , display: "flex"  ,   flexDirection : "row"  }}>  


                                 <div   className="clientview_table_row_box"  style={{ height: "100%"  , width : "40%"}}> 
                                       <p>  {  el.total_schools } </p>
                                </div> 



                                
                <input className="inner_table_btn"   style={{ height: "40%"  , width : "50%"}}  type="button" value = "view"  onClick={()  => {        navigate(  "/home/dashboard/client/school"   ,   { state: {  typeId : typeId ,  clientId : data[index]._id   , programId: programId  , programName : location.state.programName     }}    ,      { state: {    typeId :  typeId  }} ,  { replace : false}  )  }  } /> 
                               
               </div>  



               <div    className="clientview_table_row_box"   style= {{  width: "8.69%"  ,    height: "100%"  , borderRight : "1px solid black"}}> 
                <p> { el.status } </p>
               </div> 
               <div   className="clientview_table_row_box"  style= {{   width: "20.19%"  ,    height: "100%"   , borderRight : "1px solid black"  ,  display: "flex"  ,   flexDirection : "row"  , justifyContent : "space-around" }}> 
                           
               <input  className="inner_table_btn"  style={{ height: "40%"  , width : "36%"}} type="button" value = "Status"    onClick= { () => {handleStatusChange( el ) } }  /> 
                             
                                
             <input   className="inner_table_btn" style={{ height: "40%"  , width : "36%"}}  type="button" value = "Edit"  onClick={()  => {     navigate(  "/home/dashboard/client/editclient"   , {   state: {  typeId : "client"   ,   data : el   ,   programName : location.state.programName    , type : "system_admin"  } }  , { replace : false}  )  }  } /> 
                                 
               </div>

  </div>

                 ))
                  } 


                      


              </div>
              
             
    
              </div> 

              <div className="clientview_body3">  


              <div onClick={ () => { goToNext() } } className="add_new_program_button">
                <p>Add new client</p> 

              </div>
            
              </div>
             

            
            </div>

 
 


    </div> 



    ) ;  

    
    case "content_admin" :   
   

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


       <div  className="clientview_table_row_box"  style= {{   width: "10%"  ,  height: "100%"   ,  borderRight : "1px solid black" }}>
       <p>Sl No</p>
       </div> 
       <div   className="clientview_table_row_box"  style= {{   width: "22%" , height: "100%"  , borderRight : "1px solid black" }}>
         <p> Name of Client</p>
       </div> 

       <div  className="clientview_table_row_box"     style= {{   width: "17%" ,  height: "100%"  , borderRight : "1px solid black"}  }>
         <p>Contact Person</p>
       </div>
       <div    className="clientview_table_row_box"   style= {{  width: "22%"  ,  height: "100%"   , borderRight : "1px solid black"}}>
         <p>Contact Email Id</p>
       </div> 
       <div    className="clientview_table_row_box"   style= {{   width: "17%"  ,  height: "100%" , borderRight : "1px solid black"}}> 
        <p>No of schools</p>
       </div> 

       <div   className="clientview_table_row_box"   style= {{  width: "12%"  ,    height: "100%"   , borderRight : "1px solid black"}}> 
        <p  style = {{  textAlign : "center"}}>Account Status</p>
       </div> 
       

      </div>  

             

      <div  className="clientview_table_inner_div_table_row">
          


          {
         
         data.map( (  el  , index )  => (  

      <div  key={ index}    style= {{ width : "100%" , height: "25%"    , display : "flex" , flexDirection : "row"  , borderBottom : "1px solid black"}} >
      
       <div   className="clientview_table_row_box"   style= {{   width: "10%"  ,  height: "100%"  ,  borderRight : "1px solid black"  , }}>
       <p>{ index+1} </p>
       </div> 
       <div     className="clientview_table_row_box"  style= {{   width: "22%" , height: "100%"   , borderRight : "1px solid black" }}>
         <p>  {  el.client_name }</p>
       </div>
       <div   className="clientview_table_row_box"  style= {{   width: "17%" ,  height: "100%"   , borderRight : "1px solid black"}  }>
         <p> { el.contact_person }</p>
       </div>
       <div   className="clientview_table_row_box"   style= {{  width: "22%"  ,  height: "100%"   , borderRight : "1px solid black" , overflow : "hidden"}}>
         <p> { el.email_id}</p>
       </div> 
       <div    className="clientview_table_row_box"  style= {{   width: "17%"  ,  height: "100%"  , borderRight : "1px solid black" , display: "flex"  ,   flexDirection : "row"  , justifyContent : "space-around"}}> 

                         <div   className="clientview_table_row_box"  style={{ height: "100%"  , width : "40%"}}> 
                               <p>  {  el.total_schools } </p>
                        </div> 



                        
        <input   className="inner_table_btn"  style={{ height: "40%"  , width : "40%"}}  type="button" value = "view"  onClick={()  => {        navigate(  "/home/dashboard/client/school"   ,   { state: {  typeId : typeId ,  clientId : data[index]._id   , programId: programId  , programName : location.state.programName     }}    ,      { state: {    typeId :  typeId  }} ,  { replace : false}  )  }  } /> 
                       
       </div>  



       <div    className="clientview_table_row_box"   style= {{  width: "12%"  ,    height: "100%"  , borderRight : "1px solid black"}}> 
        <p> { el.status } </p>
       </div>  

      

</div>

         ))
          } 


              


      </div>
      
     

      </div> 

      <div className="clientview_body3">  


    
      </div>
     

    
    </div>





</div> 



    ) ; 


  }
} 

export default ClientView;