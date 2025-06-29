import {Link , useNavigate  , useLocation} from "react-router-dom" ; 
import { useState   , useEffect } from "react"; 
import Sidebar from "../Sidebar"  ; 
import "../Style/ClientView.css" ; 
import axios from "axios"  ;  
import SearchIcon from '@mui/icons-material/Search';



// popup 
import Popup from "../Components/Popup";
  





function SchoolView() {    
     
   

   // for popup 
   const[ popupInfo  , setPopupInfo ] = useState("") ;
   const[ popup  , setPopup ] = useState( false) ; 
   const[ userNameForPopup  , setUserNameForPopup ] = useState( "") ; 
   const [  searchInput   , setSearchInput ]   = useState( "nil") ; 
    
    const [ data , setData ] = useState( []); 
    const  navigate = useNavigate() ;  
    const location = useLocation();  
    const [  typeId  , setTypeId ]   = useState( location.state.typeId   ) ;  
    const [  clientId  , setClientId  ]   = useState( location.state.clientId  ) ;   

  
  /*   //console.log("in school view ")  ;

    //console.log( location.state.clientId )  ; 

    //console.log( location.state.programName) ;   
    
    //console.log( location.state.typeId ) ;  
   
    //console.log( location.state.programId) ;   */ 
     
   const [currentTime, setCurrentTime] = useState(new Date());


    const goToNext = () => {
  
       navigate(  "/home/dashboard/client/addschool"   ,   { state: {    typeId : "system_admin_school"  ,   type : "system_admin"   ,   clientId : location.state.clientId ,   programId :  location.state.programId  ,  programName : location.state.programName  ,   userInfo :  location.state.userInfo   }}   ,  { replace : false}  ) ; 
       //console.log("ASJghshGHS") ;  

      }   
    

      useEffect(() => {  

       

        axios({ 
  
         url : "https://learn-up.app/admin/ca_school"  ,  
         method : "POST"  , 
         data : {
           
                  "search_key" :  clientId  , 
                "page_no" :  1 ,
                 "limit" : 100000   
  
         }
  
        }).then( ( res) => {   
  
  
          console.log(  res) ;   
         
          if(   res.data.message  === "Information retrieve successfully"  ){
           
            setData(  res.data.data ) ; 
}
  
        } ).catch(( err) => {  
            //console.log( "error") ;
  
         }  ) ;   
    


       

          axios({ 
  
         url : "https://learn-up.app/offline_app/reload_seconds" ,   
         method : "POST"  , 
         data : {
           
  
         }
  
        }).then( ( res) => {   
  
              console.log( res ) ; 
          console.log(  res.data.reload_time ) ;  
         const reloadTime = parseInt(res.data.reload_time);

           if( reloadTime >  0  && !('reloadTime' in localStorage)  ) {  
                   console.log( res ) ; 
                   localStorage.setItem('reloadTime', JSON.stringify(reloadTime)); 
                   console.log("ahagsy") ; 
           }
           
           if( 'reloadTime' in localStorage  &&  reloadTime <= 0   ) {
                
                 localStorage.removeItem('reloadTime');
                 
           }
     
         
      /*     if(   res.data.message  === "Information retrieve successfully"  ){
           
            setData(  res.data.data ) ; 
} */
  
        } ).catch(( err) => {  
            console.log( err) ;
  
         }  ) ;   
   

         
        




  
    } , [  popup])  ; 
 
  
   
    
    
    

  useEffect(() => { 

     
       const reloadTime = parseInt(localStorage.getItem('reloadTime'));
        
         console.log( "fdshg")  ; 
       console.log( reloadTime )  ; 
       

       if (reloadTime) { 

      const intervalId = setInterval(() => {
      setCurrentTime(new Date());
     
       const d = new Date();
    
       console.log( d.getHours()) ;
       console.log( d.getMinutes()) ;

   //    if(  `${d.getHours()}` === "17" &&  `${d.getMinutes()}` === "59"  )  {
            alert("hj") ;
            
             window.location.reload() ;  
            
    //   }
    }, reloadTime); 
    
    return () => {
      clearInterval(intervalId);
    };
       }else{
         alert( "Reload time issue!") ; 
       }
/* 
    const intervalId = setInterval(() => {
      setCurrentTime(new Date());
     
       const d = new Date();
    
       console.log( d.getHours()) ;
       console.log( d.getMinutes()) ;

   //    if(  `${d.getHours()}` === "17" &&  `${d.getMinutes()}` === "59"  )  {
             alert("hj") ;
             window.location.reload() ; 
    //   }
    }, 60000); // 1000 m */

  }, [currentTime]);
   





    


    
    const  handleStatusChange = ( cs  ) => {    
    
    
      setPopupInfo( cs) ;
     // //console.log( cs) ;
     setUserNameForPopup( cs.school_name) ;
       setPopup( true)  ;
      
 } 

  








  const handleChange1 = ( el ) => {
    
    
    console.log( el ) ;  
   

    
  axios({ 
 
   url : "https://learn-up.app/offline_app/offline_app_s"  ,   

   method : "POST"  , 
   data : {
    
        "s_id" :  el._id

   }

  }).then( ( res) => {   


    console.log( res ) ;
    alert( res.data.message) ; 
  }
  ).catch(( err) => {  
      //console.log( "error") ;

   }  )
   .finally(() => {
    window.location.reload();
  }); 
    
  
  }
   





   
 const onSearch  = () => {  


  console.log(  searchInput ) ;     



  axios({ 
 
   url : "https://learn-up.app/admin/client_s_s"  ,   

   method : "POST"  , 
   data : {
     
    "search_key" :  clientId  , 
    "page_no" :  1 ,
     "limit" : 100000    , 
     "search" :  searchInput


   }

  }).then( ( res) => {   


    console.log( res ) ;
     
     
    if(   res.data.message === "No data found"){
      
      alert(  "Data not found") ;
      setData([]) ;     

      
    }
    else if(  res.data.message === "Information retrieve successfully"  ) {

    // console.log(  res ) ;  
     setData( res.data.data) ; 

    }






  }
         ).catch(( err) => {  
      //console.log( "error") ;

   }  ) ; 
    
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

                 <div className="clientview_body1_search_div"> 


       
       <i style={{ position : "absolute" }}>  
        <button className="clientview_body1_search_button"   onClick={() => { onSearch() }}>
        <SearchIcon sx={{   fontSize : 26    }}/> 
        </button>
         </i>
       <input   className="clientview_body1_search_input"   type="text" placeholder="Search by name..."    onChange={  ( e ) => {  setSearchInput( e.target.value )} }/>  
      

       </div>



               
                 </div>
                
                  <div className="clientview_table_outer_div_body2">   
        
    
                   <div className="clientview_table_inner_div_column_name">  


                


               <div    className="clientview_table_row_box"    style= {{   width: "5%"  ,  height: "100%"   ,  borderRight : "1px solid #B6B7D0" }}>
               <p className="header_text" >Sl. No</p>
               </div> 
               <div    className="clientview_table_row_box"   style= {{   width: "12%" , height: "100%"  , borderRight : "1px solid #B6B7D0" }}>
                 <p className="header_text">Name of School</p>
               </div>
               <div    className="clientview_table_row_box"  style= {{   width: "11%" ,  height: "100%"  , borderRight : "1px solid #B6B7D0"}  }>
                 <p className="header_text">Contact Person</p>
               </div>
               <div    className="clientview_table_row_box"  style= {{  width: "13%"  ,  height: "100%"   , borderRight : "1px solid #B6B7D0"}}>
                 <p className="header_text">Contact Email</p>
               </div> 
               <div  className="clientview_table_row_box"   style= {{   width: "10%"  ,  height: "100%" , borderRight : "1px solid #B6B7D0"}}> 
                <p className="header_text">Facilitators</p>
               </div> 

               <div   className="clientview_table_row_box"  style= {{  width: "10%"  ,    height: "100%"   , borderRight : "1px solid #B6B7D0"}}> 
                <p className="header_text">Students</p>
               </div> 
               <div className="clientview_table_row_box"  style= {{   width: "7%"  ,    height: "100%"  , borderRight : "1px solid #B6B7D0"}}> 
                <p className="header_text"  style = {{  textAlign : "center"  }}>Change Account Status</p>
               </div> 
               <div   className="clientview_table_row_box" style= {{   width: "14%"  ,    height: "100%"  ,  borderRight : "1px solid #B6B7D0" }}> 
                <p className="header_text">Status</p>
               </div>
              
                 <div   className="clientview_table_row_box" style= {{   width: "8%"  ,    height: "100%" ,  borderRight : "1px solid #B6B7D0"   }}> 
                <p className="header_text">Study Mode</p>
                 </div>
                 
                <div   className="clientview_table_row_box" style= {{   width: "10%"  ,    height: "100%"  ,  borderRight : "1px solid #B6B7D0"  }}> 
                <p className="header_text">App Status</p>
                </div>
              
    
                  </div>  



                  <div  className="clientview_table_inner_div_table_row">
                     
                       


{
                data.map( (  el   , index )  => ( 

    
                  <div  key= {  index} style= {{ width : "100%" , height: "25%"   , display : "flex" , flexDirection : "row"   ,   borderBottom : "1px solid #B6B7D0"}} > 




                  <div   className="clientview_table_row_box"    style= {{   width: "5%"  ,  height: "100%"   ,  borderRight : "1px solid #B6B7D0" }}>
                   <p> {index+1}</p>
                   </div>  

                   <div  className="clientview_table_row_box"  style= {{   width: "12%" , height: "100%"  , borderRight : "1px solid #B6B7D0" }}>
                     <p> {  el.school_name}</p>
                   </div>
                   <div   className="clientview_table_row_box"  style= {{   width: "11%" ,  height: "100%"   , borderRight : "1px solid #B6B7D0"}  }>
                     <p> {  el.contact_person}</p>
                   </div>
                   <div  className="clientview_table_row_box"   style= {{  width: "13%"  ,  height: "100%"  , borderRight : "1px solid #B6B7D0"  , overflow : "hidden"}}>
                     <p> { el.email_id}</p>
                   </div> 
                   <div  className="clientview_table_row_box"   style= {{   width: "10%"  ,  height: "100%"  , borderRight : "1px solid #B6B7D0"  , display: "flex"  ,   flexDirection : "row"}}>   


                   <div  className="clientview_table_row_box"  style={{ height: "100%"  , width : "25%"}}>  
                           <p>{ el.total_facilitators }</p>
                                </div>
                               
              <input  className="inner_table_btn" style={{ height: "40%"  , width : "55%"}}   type="button" value = "view"  onClick={()  => {        navigate(  "/home/dashboard/client/facilitator"   ,     { state: {    typeId : "facilitator_with_add_account"   ,     schoolId : data[index]._id  ,      programId : location.state.programId  ,  userInfo :  location.state.userInfo  }}           ,     { replace : false}  )  }  } /> 
                             
                   </div>   


            <div  className="clientview_table_row_box"  style= {{   width: "10%"  ,  height: "100%" , borderRight : "1px solid #B6B7D0"  , display: "flex"  ,   flexDirection : "row"}}>  

                     <div  className="clientview_table_row_box"   style={{ height: "40%"  , width : "25%"}}> 
                               <p> { el.total_students}</p>
                     </div>
                            
                    <input   className="inner_table_btn" style={{ height: "40%"  , width : "55%"}}   type="button" value = "view"  onClick={()  => {        navigate(  "/home/dashboard/client/student"      ,   { state: {    typeId : "student_with_edit",   schoolId : data[index]._id  ,      programId : location.state.programId    , userInfo :  location.state.userInfo      }}        ,  { replace : false}  )  }  } /> 
                        
                   </div>  


                   <div   className="clientview_table_row_box"  style= {{  width: "7%"  ,    height: "100%"  , borderRight : "1px solid #B6B7D0"}}> 
                    <p> { el.status } </p>
                   </div>  

            <div    className="clientview_table_row_box"   style= {{   width: "14%"  ,    height: "100%"   ,  display: "flex"  ,   flexDirection : "row"  , justifyContent  : 'space-around'  , borderRight : "1px solid #B6B7D0" }}> 
                      

            <input className="inner_table_btn"   style={{ height: "40%"  , width : "36%"}}   type="button" value = "Status"    onClick= { () => {handleStatusChange( el) } }   /> 
                            
                             
           <input   className="inner_table_btn" style={{ height: "40%"  , width : "36%"}}   type="button" value = "Edit"  onClick={()  => {        navigate(  "/home/dashboard/client/editschool"   ,  { state: {    typeId : "school"   ,    data : el   ,  type : "system_admin"  , programName : location.state.programName  , userInfo :  location.state.userInfo     }}   , { replace : false}  )  }  } />   


            </div>  


               
            <div  className="clientview_table_row_box"  style={{ height: "100%"  , width : "8%" ,  borderRight : "1px solid #B6B7D0" }}>  
               
              {  el.study_mode ===  "online" ? <p>Online</p> : <p>Offline</p> } 
                 
            </div>

             <div  className="clientview_table_row_box"  style={{ height: "100%"  , width : "10%" ,  borderRight : "1px solid #B6B7D0" }}>  


                 {  el.study_mode !==  "online" ?
                         
               <input className="inner_table_btn"   style={{ height : "40%"  , width : "70%"}}   type="button" value ={  el.offline_app === "false" ? "Enable" : "Disable" }   onClick= { () => {handleChange1( el) } }   /> 
              
               : <p>Enabled</p>
                 }
            </div>
                            

         </div>  

))                 }

                  </div>
                  
                  
        
                  </div> 
    
                  <div className="body3"> 
    
                  <button onClick={ () => { goToNext() } } className="add_new_program_button">
                    <p> Add new school </p>
                  </button>
                
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
             
           <div className="clientview_body1_search_div"> 


       
<i style={{ position : "absolute" }}>  
 <button className="clientview_body1_search_button"   onClick={() => { onSearch() }}>
 <SearchIcon sx={{   fontSize : 26    }}/> 
 </button>
  </i>
<input   className="clientview_body1_search_input"   type="text" placeholder="Search by name..."    onChange={  ( e ) => {  setSearchInput( e.target.value )} }/>  


</div>
           </div>
          
            <div className="clientview_table_outer_div_body2">   
  

             <div className="clientview_table_inner_div_column_name">  


          


         <div    className="clientview_table_row_box"    style= {{   width: "5%"  ,  height: "100%"   ,  borderRight : "1px solid #B6B7D0" }}>
         <p className="header_text" >Sl. No</p>
         </div> 
         <div    className="clientview_table_row_box"   style= {{   width: "15%" , height: "100%"  , borderRight : "1px solid #B6B7D0" }}>
           <p className="header_text" >Name of School</p>
         </div>
         <div    className="clientview_table_row_box"  style= {{   width: "11%" ,  height: "100%"  , borderRight : "1px solid #B6B7D0"}  }>
           <p className="header_text" >Contact Person</p>
         </div>
         <div    className="clientview_table_row_box"  style= {{  width: "16%"  ,  height: "100%"   , borderRight : "1px solid #B6B7D0"}}>
           <p className="header_text" >Contact Email</p>
         </div> 
         <div  className="clientview_table_row_box"   style= {{   width: "12%"  ,  height: "100%" , borderRight : "1px solid #B6B7D0"}}> 
          <p className="header_text" >Facilitators</p>
         </div> 

         <div   className="clientview_table_row_box"  style= {{  width: "12%"  ,    height: "100%"   , borderRight : "1px solid #B6B7D0"}}> 
          <p className="header_text" >Students</p>
         </div> 
         <div className="clientview_table_row_box"  style= {{   width: "11%"  ,    height: "100%"  , borderRight : "1px solid #B6B7D0"}}> 
          <p className="header_text" >Status</p>
         </div> 
        
         <div   className="clientview_table_row_box" style= {{   width: "8%"  ,    height: "100%"  ,  borderRight : "1px solid #B6B7D0" }}> 
                <p className="header_text">Study Mode</p>
        </div>
         
          <div   className="clientview_table_row_box" style= {{   width: "10%"  ,    height: "100%"  ,  borderRight : "1px solid #B6B7D0" }}> 
                <p className="header_text">App Status</p>
        </div>


        

            </div>  



            <div  className="clientview_table_inner_div_table_row">
               
                 


{
          data.map( (  el   , index )  => ( 


            <div  key= {  index} style= {{ width : "100%" , height: "25%"   , display : "flex" , flexDirection : "row"   ,   borderBottom : "1px solid #B6B7D0"}} > 




            <div   className="clientview_table_row_box"    style= {{   width: "5%"  ,  height: "100%"   ,  borderRight : "1px solid #B6B7D0" }}>
             <p> {index+1}</p>
             </div>  

             <div  className="clientview_table_row_box"  style= {{   width: "15%" , height: "100%"  , borderRight : "1px solid #B6B7D0" }}>
               <p> {  el.school_name}</p>
             </div>
             <div   className="clientview_table_row_box"  style= {{   width: "11%" ,  height: "100%"   , borderRight : "1px solid #B6B7D0"}  }>
               <p> {  el.contact_person}</p>
             </div>
             <div  className="clientview_table_row_box"   style= {{  width: "16%"  ,  height: "100%"  , borderRight : "1px solid #B6B7D0"  , overflow : "hidden"}}>
               <p> { el.email_id}</p>
             </div> 
             <div  className="clientview_table_row_box"   style= {{   width: "12%"  ,  height: "100%"  , borderRight : "1px solid #B6B7D0"  , display: "flex"  ,   flexDirection : "row"}}>   


             <div  className="clientview_table_row_box"  style={{ height: "100%"  , width : "40%"}}>   


                     <p>{ el.total_facilitators }</p>
                          </div>
                         
        <input    className="inner_table_btn"   style={{ height: "40%"  , width : "40%"}}   type="button" value = "view"  onClick={()  => {        navigate(  "/home/dashboard/client/facilitator"   ,     { state: {    typeId : "facilitator"   ,     schoolId : data[index]._id  ,      programId : location.state.programId   ,   userInfo :  location.state.userInfo   }}           ,     { replace : false}  )  }  } /> 
                       
             </div>   


      <div  className="clientview_table_row_box"  style= {{   width: "12%"  ,  height: "100%" , borderRight : "1px solid #B6B7D0"  , display: "flex"  ,   flexDirection : "row"}}>  

               <div  className="clientview_table_row_box"   style={{ height: "40%"  , width : "40%"}}> 
                         <p> { el.total_students}</p>
               </div>
                     
              <input    className="inner_table_btn"   style={{ height: "40%"  , width : "40%"}}   type="button" value = "view"  onClick={()  => {        navigate(  "/home/dashboard/client/student"      ,   { state: {    typeId : "student",   schoolId : data[index]._id  ,      programId : location.state.programId   ,  userInfo :  location.state.userInfo        }}        ,  { replace : false}  )  }  } /> 
                  
             </div>  


             <div   className="clientview_table_row_box"  style= {{  width: "11%"  ,    height: "100%"  , borderRight : "1px solid #B6B7D0"}}> 
              <p> { el.status } </p>
             </div>  
            
            
             <div   className="clientview_table_row_box"  style= {{  width: "8%"  ,    height: "100%"  , borderRight : "1px solid #B6B7D0"}}> 
              {  el.study_mode ===  "online" ? <p>Online</p> : <p>Offline</p> } 
             </div> 
              
            <div  className="clientview_table_row_box"  style={{ height: "100%"  , width : "10%" ,  borderRight : "1px solid #B6B7D0" }}>  
                 {  el.study_mode !==  "online" ?
                         
               <input className="inner_table_btn"   style={{ height : "40%"  , width : "70%"}}   type="button" value ={  el.offline_app === "false" ? "Enable" : "Disable" }   onClick= { () => {handleChange1( el) } }   /> 
              
               : <p>Enabled</p>
                 }
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