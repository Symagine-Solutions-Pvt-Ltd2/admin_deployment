  
import {Link , useNavigate  , useLocation} from "react-router-dom" ; 
import { useState  , useEffect } from "react"; 
import "../Style/FirstView.css" ; 
import Sidebar from "../Sidebar"  ; 
import axios from "axios"  ; 





function FirstView() {      
  


  const [ data , setData ] = useState( []); 
  const [ totalCount , setTotalCount ] = useState({
   total_program : 0 ,  
   total_course : 0 , 
   total_client : 0 , 
   total_school : 0  , 
   total_student : 0 
  }); 
  const  navigate = useNavigate() ;  
  const location = useLocation();  
  const [  typeId  , setTypeId ]   = useState( location.state.typeId   ) ;  
  

   
  //console.log( location.state.typeId ) ;  


  const goToNext = () => {
   


    navigate(  "/home/dashboard/addprogram"  ,    { state: {    typeId : "create_program"   , type : typeId   ,     userInfo :  location.state.userInfo   }} ,  { replace : false}  ) ; 

  }

  


  useEffect(() => { 

    axios({ 

     url : "https://learn-up.app/admin/a_program"  ,  
     method : "POST"  , 
     data : {
       
              "search_key" : "" , 
            "page_no" :  1 ,
             "limit" : 10   

     }

    }).then( ( res) => {   


      //console.log(  res.data.data ) ; 
       setData(  res.data.data ) ;  
       
       
     //  //console.log(   res.data.data[1].name )  ;

    } ).catch(( err) => {  
        //console.log( "error") ;

     }  ) ;   
 




     axios({ 

      url : "https://learn-up.app/admin/all_count"  ,  
      method : "POST"  , 
      data : { 
 
      }
 
     }).then( ( res) => {   
 
 
       //console.log(  res.data.data ) ; 
      setTotalCount(  res.data.data ) ;
 
     } ).catch(( err) => {  
         //console.log( "error") ;
 
      }  ) ;   
 
 
 




} , [])  ; 

   




  



  switch( typeId )  {  
    
  case "system_admin" :   

  case "program_admin" :
  
  // 
  return ( 
  




    <div className="firstview">  

            <div className="firstview_sidebar" >
                   <Sidebar   info = {  location.state.userInfo}  /> 
            </div> 
            <div className="firstview_body"> 


             <div  className="body1">  



            <div style= {{ width:"97%"  , height : "60%"  , backgroundColor: "#FFF"  , borderRadius : 15  , display : "flex"   , flexDirection : "row"  , justifyContent : "space-between" ,  margin : "2px"   , backgroundColor: "#B6B7D0" }}>  

             
            <div  style= {{ width:"50%"  , height : "99%"  , justifyContent : "center"   , display : "flex"    , borderTopLeftRadius : 15  , borderBottomLeftRadius : 15  , border : "2px solid #D9D9D9"  }}  >
             <p> {totalCount.total_course} Courses</p>
            </div>  

            <div  style= {{ width:"50%"  , height : "99%"      , justifyContent : "center"   , display : "flex"  ,  borderTopRightRadius : 15  , borderBottomRightRadius : 15   ,  border : "2px solid #D9D9D9"  }}  >
             <p>{totalCount.total_program} Programs </p>
            </div> 


            </div>




      
             </div>
            


              <div className="table_outer_div_body2"> 


              <div className="table_inner_div_column_name"  style={ {  borderTop : "1.5px  solid #B6B7D0"   , borderBottom : "1px solid #B6B7D0" }} >  

              <div   className="inner_div_table_row_box"  style= {{ width : "10%" , height: "100%"    ,  borderRight : "1px solid #B6B7D0" }}>
               <p  className="header_text" >Sl No</p>
               </div> 
               <div   className="inner_div_table_row_box" style= {{ width : "30%" , height: "100%"  , borderRight : "1px solid #B6B7D0" }}>
                 <p className="header_text"> Name of program</p>
               </div>
               <div   className="inner_div_table_row_box"  style= {{ width : "20%" , height: "100%" , borderRight : "1px solid #B6B7D0"}  }>
                 <p className="header_text"> No of clients assigned</p>
               </div>
               <div   className="inner_div_table_row_box"  style= {{ width : "20%" , height: "100%"  , borderRight : "1px solid #B6B7D0"}}>
                 <p className="header_text"> No of schools assigned</p>
               </div> 
               <div  className="inner_div_table_row_box"  style= {{ width : "20%" , height: "100%"   , borderRight : "1px solid #B6B7D0"}}> 
                <p className="header_text"> No of students assinged</p>
               </div>

              </div>  



              <div  className="table_inner_div_table_row"  >   


           {   

    data.map( (  el  , index )  => ( 
                  <div  key={ index}    style= {  { width : "100%" , height: "33.33%"   , borderBottom : "1px solid #B6B7D0"  , borderTop : "1px solid #B6B7D0" , display : "flex" , flexDirection : "row"}} >
               
                          <div    className="inner_div_table_row_box"  style= {{ width : "10%" , height: "100%"    ,  borderRight : "1px solid #B6B7D0" }}>
                              <p> {  index+1 }</p>
                          </div>  

                         <div   className="inner_div_table_row_box"   style= {{ width : "30%" , height: "100%"    , borderRight : "1px solid #B6B7D0"  , display : "flex"  , flexDirection : "row"  , justifyContent : "space-around"}}> 


                             <div  className="inner_div_table_row_box"  style={{ height: "100%"  , width : "60%"}}> 
                              <p> { el.program_name }</p>
                             </div> 


               <input className="inner_table_btn"  style={{ height: "40%"  , width : "25%"}}   type="button" value = "edit"  onClick={()  => {        navigate(  "/home/dashboard/editprogram"   ,      { state: {    typeId : "program"   ,   data : el    ,    userInfo :  location.state.userInfo      } } ,   { replace : false}  )  }  } /> 
                          
                        </div>
                         <div  className="inner_div_table_row_box"  style= {{ width : "20%" , height: "100%"  , borderRight : "1px solid #B6B7D0"  ,  display : "flex"  , flexDirection : "row"  , justifyContent : "space-around"}  }> 


                                <div    className="inner_div_table_row_box" style={{ height: "100%"  , width : "45%"}}> 
                                       <p>{ el.total_clients}</p>
                                </div>
                               
                       <input  className="inner_table_btn"   style={{ height: "40%"  , width : "38%"  }}  type="button" value = "view"  onClick={()  => {        navigate(  "/home/dashboard/client"   ,      { state: {    typeId : typeId  ,  programId: data[index]._id    ,   programName : data[index].program_name   ,    userInfo :  location.state.userInfo   }}      ,    { replace : false}  )  }  } /> 
                             
                        </div> 


                        <div     className="inner_div_table_row_box" style= {{ width : "20%" , height: "100%"   , borderRight : "1px solid #B6B7D0"}}>
                             <p> { el.total_schools} </p>
                         </div>  


                         <div     className="inner_div_table_row_box" style= {{ width : "20%" , height: "100%"  , borderRight : "1px solid #B6B7D0"}}> 
                                   <p>  {el.total_students }  </p>
                        </div>
               


               </div> 

))
  }  




              </div>  




             
              <div className="table_inner_div_column_name"  style = {{ backgroundColor : "#FFF"  , borderBottom : "1.5px solid #B6B7D0"  ,     borderTop : "0.5px solid #B6B7D0"  }}  >    
              
              <div  className="inner_div_table_row_box" style= {{ width : "10%" , height: "100%"   ,  borderRight : "1px solid #B6B7D0" }}>
               <p  style={{ fontWeight :  500}} >Total</p>
               </div> 
               <div className="inner_div_table_row_box" style= {{ width : "30%" , height: "100%"    , borderRight : "1px solid #B6B7D0" }}>
                 <p  style={{ fontWeight :  500}} > { totalCount.total_program} </p>
               </div>
               <div className="inner_div_table_row_box" style= {{ width : "20%" , height: "100%" , borderRight : "1px solid #B6B7D0"}  }>
                 <p  style={{ fontWeight :  500}} > { totalCount.total_client}</p>
               </div>
               <div  className="inner_div_table_row_box" style= {{ width : "20%" , height: "100%"    , borderRight : "1px solid #B6B7D0"}}>
                 <p   style={{ fontWeight :  500}} > { totalCount.total_school}</p>
               </div> 
               <div className="inner_div_table_row_box"  style= {{ width : "20%" , height: "100%" , borderRight : "1px solid #B6B7D0"}}> 
                <p  style={{ fontWeight :  500}} > { totalCount.total_student}</p>
               </div>


              </div>
    
              </div> 

              <div className="body3"> 

              <button onClick={ () => { goToNext() } } className="add_new_program_button">
                <p>Add new program</p>
              </button>
            
              </div>
            
            </div>



    </div>  



  )  
  


  case "content_admin" :  


  return (
      
    
    <div className="firstview">  

            <div className="firstview_sidebar" >
                   <Sidebar   info = {  location.state.userInfo} /> 
            </div> 
            <div className="firstview_body"> 


             <div  className="body1">  



             <div style= {{ width:"97%"  , height : "60%"  , backgroundColor: "#FFF"  , borderRadius : 15  , display : "flex"   , flexDirection : "row"  , justifyContent : "space-between" ,  margin : "2px"   , backgroundColor: "#B6B7D0" }}>  

             
<div  style= {{ width:"50%"  , height : "99%"  , justifyContent : "center"   , display : "flex"    , borderTopLeftRadius : 15  , borderBottomLeftRadius : 15  , border : "2px solid #D9D9D9"  }}  >
 <p> {totalCount.total_course} Courses</p>
</div>  

<div  style= {{ width:"50%"  , height : "99%"      , justifyContent : "center"   , display : "flex"  ,  borderTopRightRadius : 15  , borderBottomRightRadius : 15   ,  border : "2px solid #D9D9D9"  }}  >
 <p>{totalCount.total_program} Programs </p>
</div> 


</div>


      
             </div>
            


              <div className="table_outer_div_body2"> 


              <div className="table_inner_div_column_name"    style={ {  borderTop : "1.5px solid #B6B7D0"   , borderBottom : "1px solid #B6B7D0" }}  >  

              <div   className="inner_div_table_row_box"  style= {{ width : "10%" , height: "100%"    ,  borderRight : "1px solid #B6B7D0" }}>
               <p className="header_text" >Sl No</p>
               </div> 
               <div   className="inner_div_table_row_box" style= {{ width : "30%" , height: "100%"  , borderRight : "1px solid #B6B7D0" }}>
                 <p className="header_text" > Name of program</p>
               </div>
               <div   className="inner_div_table_row_box"  style= {{ width : "20%" , height: "100%" , borderRight : "1px solid #B6B7D0"}  }>
                 <p className="header_text" > No of clients assigned</p>
               </div>
               <div   className="inner_div_table_row_box"  style= {{ width : "20%" , height: "100%"  , borderRight : "1px solid #B6B7D0"}}>
                 <p className="header_text" > No of schools assigned</p>
               </div> 
               <div  className="inner_div_table_row_box"  style= {{ width : "20%" , height: "100%"   , borderRight : "1px solid #B6B7D0"}}> 
                <p className="header_text" > No of students assinged</p>
               </div>

              </div>  



              <div  className="table_inner_div_table_row"  >   


           {   

    data.map( (  el  , index )  => ( 
                  <div  key={ index} style= {{ width : "100%" , height: "33.33%"   , borderBottom : "1px solid #B6B7D0"  , display : "flex" , flexDirection : "row"}} >
               
                          <div    className="inner_div_table_row_box"  style= {{ width : "10%" , height: "100%"    ,  borderRight : "1px solid #B6B7D0" }}>
                              <p> {  index+1 }</p>
                          </div>  

                         <div   className="inner_div_table_row_box"   style= {{ width : "30%" , height: "100%"    , borderRight : "1px solid #B6B7D0"  , display : "flex"  , flexDirection : "row"}}> 


                             <div  className="inner_div_table_row_box"  style={{ height: "100%"  , width : "60%"}}> 
                              <p> { el.program_name }</p>
                             </div> 


           <input className="inner_table_btn"  style={{ height: "40%"  , width : "25%"}}   type="button" value = "edit"  onClick={()  => {        navigate(  "/home/dashboard/editprogram"   ,      { state: {    typeId : "program"   ,      data : el   ,          userInfo :  location.state.userInfo } } ,   { replace : false}  )  }  } /> 
                          
                        </div>
                         <div  className="inner_div_table_row_box"  style= {{ width : "20%" , height: "100%"  , borderRight : "1px solid #B6B7D0"  ,  display : "flex"  , flexDirection : "row"}  }> 


                                <div    className="inner_div_table_row_box" style={{ height: "100%"  , width : "45%"}}> 
                                       <p>{ el.total_clients}</p>
                                </div>
                               
                       <input  className="inner_table_btn"   style={{ height: "40%"  , width : "38%"  }}  type="button" value = "view"  onClick={()  => {        navigate(  "/home/dashboard/client"   ,      { state: {    typeId : typeId  ,  programId: data[index]._id    ,   programName : data[index].program_name     ,    userInfo :  location.state.userInfo   }}      ,    { replace : false}  )  }  } /> 
                             
                        </div> 


                        <div     className="inner_div_table_row_box" style= {{ width : "20%" , height: "100%"   , borderRight : "1px solid #B6B7D0"}}>
                             <p> { el.total_schools}</p>
                         </div>  


                         <div     className="inner_div_table_row_box" style= {{ width : "20%" , height: "100%"  , borderRight : "1px solid #B6B7D0"}}> 
                                   <p> { el.total_students}</p>
                        </div>
               


               </div> 

))
  }  




              </div>  




             
               <div className="table_inner_div_column_name"  style = {{ backgroundColor : "#FFF"  , borderBottom : "1px solid #B6B7D0"   , borderTop : "0.5px solid #B6B7D0" }}>    
              
              <div  className="inner_div_table_row_box" style= {{ width : "10%" , height: "100%"   ,  borderRight : "1px solid #B6B7D0" }}>
               <p>Total</p>
               </div> 
               <div className="inner_div_table_row_box" style= {{ width : "30%" , height: "100%"    , borderRight : "1px solid #B6B7D0" }}>
                 <p> { totalCount.total_program} </p>
               </div>
               <div className="inner_div_table_row_box" style= {{ width : "20%" , height: "100%" , borderRight : "1px solid #B6B7D0"}  }>
                 <p> { totalCount.total_client}</p>
               </div>
               <div  className="inner_div_table_row_box" style= {{ width : "20%" , height: "100%"    , borderRight : "1px solid #B6B7D0"}}>
                 <p> { totalCount.total_school}</p>
               </div> 
               <div className="inner_div_table_row_box"  style= {{ width : "20%" , height: "100%" , borderRight : "1px solid #B6B7D0"}}> 
                <p> { totalCount.total_student}</p>
               </div>

              </div> 
    
              </div> 

              <div className="body3"> 

              </div>
            
            </div>



    </div>  
  )  

   }
  }
  
  export default FirstView ;