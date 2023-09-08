  
import {Link , useNavigate  , useLocation} from "react-router-dom" ; 
import { useState  , useEffect } from "react"; 
import "../Style/FirstView.css" ; 
import Sidebar from "../Sidebar"  ; 
import axios from "axios"  ; 





function FirstView() {      
  


  const [ data , setData ] = useState( []); 
  const  navigate = useNavigate() ;  
  const location = useLocation();  
  const [  typeId  , setTypeId ]   = useState( location.state.typeId   ) ;  
 

  const goToNext = () => {
  
    navigate(  "/home/dashboard/addprogram"  ,    { state: {    typeId : "create_program" }} ,  { replace : false}  ) ; 

  }

  


  useEffect(() => { 

    axios({ 

     url : "http://localhost:8000/admin/a_program"  ,  
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

} , [])  ; 

  




  



  switch( typeId )  {  
    
  case "system_admin" :   

  case "program_admin" :
  
  // 
  return ( 
  




    <div className="firstview">  

            <div className="firstview_sidebar" >
                   <Sidebar /> 
            </div> 
            <div className="firstview_body">  
             <div  className="body1"> 
             <p>hjxgajgj</p> 
             </div>
            


              <div className="table_outer_div_body2">   
              <div className="table_inner_div_column_name">  

              <div  style= {{ width : "10%" , height: "100%"  , backgroundColor : "pink"  ,  borderRight : "1px solid black" }}>
               <p>Sl No</p>
               </div> 
               <div style= {{ width : "30%" , height: "100%"  , backgroundColor : "pink"  , borderRight : "1px solid black" }}>
                 <p> Name of program</p>
               </div>
               <div style= {{ width : "20%" , height: "100%"  , backgroundColor : "pink" , borderRight : "1px solid black"}  }>
                 <p> No of clients assigned</p>
               </div>
               <div style= {{ width : "20%" , height: "100%"  , backgroundColor : "pink"  , borderRight : "1px solid black"}}>
                 <p> No of schools assigned</p>
               </div> 
               <div style= {{ width : "20%" , height: "100%"  , backgroundColor : "pink" , borderRight : "1px solid black"}}> 
                <p> No of students assinged</p>
               </div>

              </div>  



              <div  className="table_inner_div_table_row">   


           {   

data.map( (  el  , index )  => ( 
                  <div  key={ index} style= {{ width : "100%" , height: "33.33%"  , backgroundColor : "pink" , borderRight : "1px solid black"  , display : "flex" , flexDirection : "row"}} >
               
                          <div  style= {{ width : "10%" , height: "100%"  , backgroundColor : "pink"  ,  borderRight : "1px solid black" }}>
                              <p> {  index+1 }</p>
                          </div> 
                         <div style= {{ width : "30%" , height: "100%"  , backgroundColor : "pink"  , borderRight : "1px solid black"  , display : "flex"  , flexDirection : "row"}}>
                             <div style={{ height: "100%"  , width : "70%"}}> 
                              <p> { el.program_name }</p>
                             </div>
                             <div  style={{ height: "100%"  , width : "30%"}} >
                            <input type="button" value = "edit"  onClick={()  => {        navigate(  "/home/dashboard/client/facilitator"   ,  { replace : false}  )  }  } /> 
                             </div>
                        </div>
                         <div style= {{ width : "20%" , height: "100%"  , backgroundColor : "pink" , borderRight : "1px solid black"  ,  display : "flex"  , flexDirection : "row"}  }>
                                <div style={{ height: "100%"  , width : "70%"}}> 
                                       <p>2</p>
                                </div>
                                 <div     style={{ height: "100%"  , width : "30%"}} >
                                        <input type="button" value = "view"  onClick={()  => {        navigate(  "/home/dashboard/client"   ,      { state: {    typeId : typeId  ,  program_name : data[index].program_name  }}      ,    { replace : false}  )  }  } /> 
                                  </div>
                        </div>
                        <div style= {{ width : "20%" , height: "100%"  , backgroundColor : "pink"  , borderRight : "1px solid black"}}>
                             <p> No of schools assigned</p>
                         </div> 
                         <div style= {{ width : "20%" , height: "100%"  , backgroundColor : "pink" , borderRight : "1px solid black"}}> 
                                   <p> No of students assinged</p>
                        </div>
               


               </div> 

))
  }  




              </div>  




             
              <div className="table_inner_div_column_name">    
              
              <div  style= {{ width : "10%" , height: "100%"  , backgroundColor : "pink"  ,  borderRight : "1px solid black" }}>
               <p>Sl No</p>
               </div> 
               <div style= {{ width : "30%" , height: "100%"  , backgroundColor : "pink"  , borderRight : "1px solid black" }}>
                 <p> Name of program</p>
               </div>
               <div style= {{ width : "20%" , height: "100%"  , backgroundColor : "pink" , borderRight : "1px solid black"}  }>
                 <p> No of clients assigned</p>
               </div>
               <div style= {{ width : "20%" , height: "100%"  , backgroundColor : "pink"  , borderRight : "1px solid black"}}>
                 <p> No of schools assigned</p>
               </div> 
               <div style= {{ width : "20%" , height: "100%"  , backgroundColor : "pink" , borderRight : "1px solid black"}}> 
                <p> No of students assinged</p>
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
                   <Sidebar /> 
            </div> 
            <div className="firstview_body">  
             <div  className="body1"> 
             <p>hjxgajgj</p> 
             </div>
            


              <div className="table_outer_div_body2"> 
              <div className="table_inner_div_column_name">  

              <div  style= {{ width : "10%" , height: "100%"  , backgroundColor : "pink"  ,  borderRight : "1px solid black" }}>
               <p>Sl No</p>
               </div> 
               <div style= {{ width : "30%" , height: "100%"  , backgroundColor : "pink"  , borderRight : "1px solid black" }}>
                 <p> Name of program</p>
               </div>
               <div style= {{ width : "20%" , height: "100%"  , backgroundColor : "pink" , borderRight : "1px solid black"}  }>
                 <p> No of clients assigned</p>
               </div>
               <div style= {{ width : "20%" , height: "100%"  , backgroundColor : "pink"  , borderRight : "1px solid black"}}>
                 <p> No of schools assigned</p>
               </div> 
               <div style= {{ width : "20%" , height: "100%"  , backgroundColor : "pink" , borderRight : "1px solid black"}}> 
                <p> No of students assinged</p>
               </div>

              </div>  



              <div  className="table_inner_div_table_row">  

                  <div style= {{ width : "100%" , height: "33.33%"  , backgroundColor : "pink" , borderRight : "1px solid black"  , display : "flex" , flexDirection : "row"}} >
               
                          <div  style= {{ width : "10%" , height: "100%"  , backgroundColor : "pink"  ,  borderRight : "1px solid black" }}>
                              <p>1</p>
                          </div> 
                         <div style= {{ width : "30%" , height: "100%"  , backgroundColor : "pink"  , borderRight : "1px solid black"  , display : "flex"  , flexDirection : "row"}}>
                             <div style={{ height: "100%"  , width : "70%"}}> 
                              <p>Future Founders Ghana</p>
                             </div>
                             <div  style={{ height: "100%"  , width : "30%"}} >
                            <input type="button" value = "edit"  onClick={()  => {        navigate(  "/home/dashboard/client/facilitator"   ,      { replace : false}  )  }  } /> 
                             </div>
                        </div>
                         <div style= {{ width : "20%" , height: "100%"  , backgroundColor : "pink" , borderRight : "1px solid black"  ,  display : "flex"  , flexDirection : "row"}  }>
                                <div style={{ height: "100%"  , width : "70%"}}> 
                                       <p>2</p>
                                </div>
                                 <div  style={{ height: "100%"  , width : "30%"}} >
                                        <input type="button" value = "view"  onClick={()  => {        navigate(  "/home/dashboard/client"   ,      { state: {    typeId : typeId  }}  ,     { replace : false}  )  }  } /> 
                                  </div>
                        </div>
                        <div style= {{ width : "20%" , height: "100%"  , backgroundColor : "pink"  , borderRight : "1px solid black"}}>
                             <p> No of schools assigned</p>
                         </div> 
                         <div style= {{ width : "20%" , height: "100%"  , backgroundColor : "pink" , borderRight : "1px solid black"}}> 
                                   <p> No of students assinged</p>
                        </div>
               


               </div>

              </div>
             
              <div className="table_inner_div_column_name">    
              
              <div  style= {{ width : "10%" , height: "100%"  , backgroundColor : "pink"  ,  borderRight : "1px solid black" }}>
               <p>Sl No</p>
               </div> 
               <div style= {{ width : "30%" , height: "100%"  , backgroundColor : "pink"  , borderRight : "1px solid black" }}>
                 <p> Name of program</p>
               </div>
               <div style= {{ width : "20%" , height: "100%"  , backgroundColor : "pink" , borderRight : "1px solid black"}  }>
                 <p> No of clients assigned</p>
               </div>
               <div style= {{ width : "20%" , height: "100%"  , backgroundColor : "pink"  , borderRight : "1px solid black"}}>
                 <p> No of schools assigned</p>
               </div> 
               <div style= {{ width : "20%" , height: "100%"  , backgroundColor : "pink" , borderRight : "1px solid black"}}> 
                <p> No of students assinged</p>
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