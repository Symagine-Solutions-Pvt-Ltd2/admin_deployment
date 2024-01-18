  
import {Link , useNavigate  , useLocation} from "react-router-dom" ; 
import { useState  , useEffect } from "react"; 
import "../Style/FirstView.css" ; 
import Sidebar from "../Sidebar"  ; 
import axios from "axios"  ; 





function FirstView() {      
  


  const [ data , setData ] = useState( []); 
  const [ totalCount , setTotalCount ] = useState({
   total_program : 0 , 
   total_client : 0 , 
   total_school : 0  , 
   total_student : 0 
  }); 
  const  navigate = useNavigate() ;  
  const location = useLocation();  
  const [  typeId  , setTypeId ]   = useState( location.state.typeId   ) ;  
  

   
  console.log( location.state.typeId ) ;  


  const goToNext = () => {
   


    navigate(  "/home/dashboard/addprogram"  ,    { state: {    typeId : "create_program"   , type : typeId   ,     userInfo :  location.state.userInfo   }} ,  { replace : false}  ) ; 

  }

  


  useEffect(() => { 

    axios({ 

     url : "http://3.123.39.199:5000/admin/a_program"  ,  
     method : "POST"  , 
     data : {
       
              "search_key" : "" , 
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
 




     axios({ 

      url : "http://127.0.0.1:8000/admin/all_count"  ,  
      method : "POST"  , 
      data : { 
 
      }
 
     }).then( ( res) => {   
 
 
       console.log(  res.data.data ) ; 
      setTotalCount(  res.data.data ) ;
 
     } ).catch(( err) => {  
         console.log( "error") ;
 
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



            <div style= {{ width:"97%"  , height : "60%"  , backgroundColor: "grey"  , borderRadius : 15}}>
           <p>
            bjhjhjg
           </p>
            </div>




      
             </div>
            


              <div className="table_outer_div_body2"> 


              <div className="table_inner_div_column_name"  style={ {  borderTop : "1.5px solid black"   , borderBottom : "1px solid black" }} >  

              <div   className="inner_div_table_row_box"  style= {{ width : "10%" , height: "100%"    ,  borderRight : "1px solid black" }}>
               <p  className="header_text" >Sl No</p>
               </div> 
               <div   className="inner_div_table_row_box" style= {{ width : "30%" , height: "100%"  , borderRight : "1px solid black" }}>
                 <p className="header_text"> Name of program</p>
               </div>
               <div   className="inner_div_table_row_box"  style= {{ width : "20%" , height: "100%" , borderRight : "1px solid black"}  }>
                 <p className="header_text"> No of clients assigned</p>
               </div>
               <div   className="inner_div_table_row_box"  style= {{ width : "20%" , height: "100%"  , borderRight : "1px solid black"}}>
                 <p className="header_text"> No of schools assigned</p>
               </div> 
               <div  className="inner_div_table_row_box"  style= {{ width : "20%" , height: "100%"   , borderRight : "1px solid black"}}> 
                <p className="header_text"> No of students assinged</p>
               </div>

              </div>  



              <div  className="table_inner_div_table_row"  >   


           {   

    data.map( (  el  , index )  => ( 
                  <div  key={ index}    style= {  { width : "100%" , height: "33.33%"   , borderBottom : "1px solid black"  , borderTop : "1px solid black" , display : "flex" , flexDirection : "row"}} >
               
                          <div    className="inner_div_table_row_box"  style= {{ width : "10%" , height: "100%"    ,  borderRight : "1px solid black" }}>
                              <p> {  index+1 }</p>
                          </div>  

                         <div   className="inner_div_table_row_box"   style= {{ width : "30%" , height: "100%"    , borderRight : "1px solid black"  , display : "flex"  , flexDirection : "row"  , justifyContent : "space-around"}}> 


                             <div  className="inner_div_table_row_box"  style={{ height: "100%"  , width : "60%"}}> 
                              <p> { el.program_name }</p>
                             </div> 


               <input className="inner_table_btn"  style={{ height: "40%"  , width : "25%"}}   type="button" value = "edit"  onClick={()  => {        navigate(  "/home/dashboard/editprogram"   ,      { state: {    typeId : "program"   ,   data : el    ,    userInfo :  location.state.userInfo      } } ,   { replace : false}  )  }  } /> 
                          
                        </div>
                         <div  className="inner_div_table_row_box"  style= {{ width : "20%" , height: "100%"  , borderRight : "1px solid black"  ,  display : "flex"  , flexDirection : "row"  , justifyContent : "space-around"}  }> 


                                <div    className="inner_div_table_row_box" style={{ height: "100%"  , width : "45%"}}> 
                                       <p>{ el.total_clients}</p>
                                </div>
                               
                       <input  className="inner_table_btn"   style={{ height: "40%"  , width : "38%"  }}  type="button" value = "view"  onClick={()  => {        navigate(  "/home/dashboard/client"   ,      { state: {    typeId : typeId  ,  programId: data[index]._id    ,   programName : data[index].program_name   ,    userInfo :  location.state.userInfo   }}      ,    { replace : false}  )  }  } /> 
                             
                        </div> 


                        <div     className="inner_div_table_row_box" style= {{ width : "20%" , height: "100%"   , borderRight : "1px solid black"}}>
                             <p> No of schools assigned</p>
                         </div>  


                         <div     className="inner_div_table_row_box" style= {{ width : "20%" , height: "100%"  , borderRight : "1px solid black"}}> 
                                   <p> No of students assinged</p>
                        </div>
               


               </div> 

))
  }  




              </div>  




             
              <div className="table_inner_div_column_name"  style = {{ backgroundColor : "#FFF"  , borderBottom : "1.5px solid black"  ,     borderTop : "0.5px solid black"  }}  >    
              
              <div  className="inner_div_table_row_box" style= {{ width : "10%" , height: "100%"   ,  borderRight : "1px solid black" }}>
               <p>Total</p>
               </div> 
               <div className="inner_div_table_row_box" style= {{ width : "30%" , height: "100%"    , borderRight : "1px solid black" }}>
                 <p> { totalCount.total_program} </p>
               </div>
               <div className="inner_div_table_row_box" style= {{ width : "20%" , height: "100%" , borderRight : "1px solid black"}  }>
                 <p> { totalCount.total_client}</p>
               </div>
               <div  className="inner_div_table_row_box" style= {{ width : "20%" , height: "100%"    , borderRight : "1px solid black"}}>
                 <p> { totalCount.total_school}</p>
               </div> 
               <div className="inner_div_table_row_box"  style= {{ width : "20%" , height: "100%" , borderRight : "1px solid black"}}> 
                <p> { totalCount.total_student}</p>
               </div>


              </div>
    
              </div> 

              <div className="body3"> 

              <div onClick={ () => { goToNext() } } className="add_new_program_button">
                <p>Add new program</p>
              </div>
            
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



            <div style= {{ width:"97%"  , height : "60%"  , backgroundColor: "grey"  , borderRadius : 15}}>
           <p>
            bjhjhjg
           </p>
            </div>




      
             </div>
            


              <div className="table_outer_div_body2"> 


              <div className="table_inner_div_column_name"    style={ {  borderTop : "1.5px solid black"   , borderBottom : "1px solid black" }}  >  

              <div   className="inner_div_table_row_box"  style= {{ width : "10%" , height: "100%"    ,  borderRight : "1px solid black" }}>
               <p className="header_text" >Sl No</p>
               </div> 
               <div   className="inner_div_table_row_box" style= {{ width : "30%" , height: "100%"  , borderRight : "1px solid black" }}>
                 <p className="header_text" > Name of program</p>
               </div>
               <div   className="inner_div_table_row_box"  style= {{ width : "20%" , height: "100%" , borderRight : "1px solid black"}  }>
                 <p className="header_text" > No of clients assigned</p>
               </div>
               <div   className="inner_div_table_row_box"  style= {{ width : "20%" , height: "100%"  , borderRight : "1px solid black"}}>
                 <p className="header_text" > No of schools assigned</p>
               </div> 
               <div  className="inner_div_table_row_box"  style= {{ width : "20%" , height: "100%"   , borderRight : "1px solid black"}}> 
                <p className="header_text" > No of students assinged</p>
               </div>

              </div>  



              <div  className="table_inner_div_table_row"  >   


           {   

    data.map( (  el  , index )  => ( 
                  <div  key={ index} style= {{ width : "100%" , height: "33.33%"   , borderBottom : "1px solid black"  , display : "flex" , flexDirection : "row"}} >
               
                          <div    className="inner_div_table_row_box"  style= {{ width : "10%" , height: "100%"    ,  borderRight : "1px solid black" }}>
                              <p> {  index+1 }</p>
                          </div>  

                         <div   className="inner_div_table_row_box"   style= {{ width : "30%" , height: "100%"    , borderRight : "1px solid black"  , display : "flex"  , flexDirection : "row"}}> 


                             <div  className="inner_div_table_row_box"  style={{ height: "100%"  , width : "60%"}}> 
                              <p> { el.program_name }</p>
                             </div> 


           <input className="inner_table_btn"  style={{ height: "40%"  , width : "25%"}}   type="button" value = "edit"  onClick={()  => {        navigate(  "/home/dashboard/editprogram"   ,      { state: {    typeId : "program"   ,      data : el   ,          userInfo :  location.state.userInfo } } ,   { replace : false}  )  }  } /> 
                          
                        </div>
                         <div  className="inner_div_table_row_box"  style= {{ width : "20%" , height: "100%"  , borderRight : "1px solid black"  ,  display : "flex"  , flexDirection : "row"}  }> 


                                <div    className="inner_div_table_row_box" style={{ height: "100%"  , width : "45%"}}> 
                                       <p>{ el.total_clients}</p>
                                </div>
                               
                       <input  className="inner_table_btn"   style={{ height: "40%"  , width : "38%"  }}  type="button" value = "view"  onClick={()  => {        navigate(  "/home/dashboard/client"   ,      { state: {    typeId : typeId  ,  programId: data[index]._id    ,   programName : data[index].program_name     ,    userInfo :  location.state.userInfo   }}      ,    { replace : false}  )  }  } /> 
                             
                        </div> 


                        <div     className="inner_div_table_row_box" style= {{ width : "20%" , height: "100%"   , borderRight : "1px solid black"}}>
                             <p> No of schools assigned</p>
                         </div>  


                         <div     className="inner_div_table_row_box" style= {{ width : "20%" , height: "100%"  , borderRight : "1px solid black"}}> 
                                   <p> No of students assinged</p>
                        </div>
               


               </div> 

))
  }  




              </div>  




             
               <div className="table_inner_div_column_name"  style = {{ backgroundColor : "#FFF"  , borderBottom : "1px solid black"   , borderTop : "0.5px solid black" }}>    
              
              <div  className="inner_div_table_row_box" style= {{ width : "10%" , height: "100%"   ,  borderRight : "1px solid black" }}>
               <p>Total</p>
               </div> 
               <div className="inner_div_table_row_box" style= {{ width : "30%" , height: "100%"    , borderRight : "1px solid black" }}>
                 <p> { totalCount.total_program} </p>
               </div>
               <div className="inner_div_table_row_box" style= {{ width : "20%" , height: "100%" , borderRight : "1px solid black"}  }>
                 <p> { totalCount.total_client}</p>
               </div>
               <div  className="inner_div_table_row_box" style= {{ width : "20%" , height: "100%"    , borderRight : "1px solid black"}}>
                 <p> { totalCount.total_school}</p>
               </div> 
               <div className="inner_div_table_row_box"  style= {{ width : "20%" , height: "100%" , borderRight : "1px solid black"}}> 
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