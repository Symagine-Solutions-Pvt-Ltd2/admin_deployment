import {Link , useNavigate  , useLocation} from "react-router-dom" ; 
import { useState   , useEffect } from "react"; 
import Sidebar from "../Sidebar"  ; 
import "../Style/SchoolView.css" ; 
import axios from "axios"  ; 




function SchoolView() {    
    
    const [ data , setData ] = useState( []); 
    const  navigate = useNavigate() ;  
    const location = useLocation();  
    const [  typeId  , setTypeId ]   = useState( location.state.typeId   ) ;  
    const [  clientName   , setClientName  ]   = useState( location.state.clientName   ) ; 
 /* 
    console.log("jhgjhghjg")  ; 

    console.log( location.state.clientName  )  ; 

    console.log( location.state.programName) ;  */

    const goToNext = () => {
  
       navigate(  "/home/dashboard/client/addschool"   ,   { state: {    typeId : "system_admin_school" }}   ,  { replace : false}  ) ; 
       console.log("ASJghshGHS") ;  




      }   
    

      useEffect(() => { 

        axios({ 
  
         url : "http://localhost:8000/admin/ac_school"  ,  
         method : "POST"  , 
         data : {
           
                  "search_key" :  clientName   , 
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


    return(  


  
        <div className="clientview">  
    
                <div className="clientview_sidebar" >
                       <Sidebar /> 
                </div> 
                <div className="clientview_body">  
                 <div  className="clientview_body1"> 
                 <p>hjxgajgj</p> 
                 </div>
                
                  <div className="clientview_table_outer_div_body2">   
        
    
                   <div className="clientview_table_inner_div_column_name">  
                   <div  style= {{   width: "7%"  ,  height: "100%"  , backgroundColor : "pink"  ,  borderRight : "1px solid black" }}>
                   <p>Sl No</p>
                   </div> 
                   <div style= {{   width: "14%" , height: "100%"  , backgroundColor : "pink"  , borderRight : "1px solid black" }}>
                     <p>Name of school</p>
                   </div>
                   <div style= {{   width: "17%" ,  height: "100%"  , backgroundColor : "pink" , borderRight : "1px solid black"}  }>
                     <p>Contact Person</p>
                   </div>
                   <div style= {{  width: "9%"  ,  height: "100%"  , backgroundColor : "pink"  , borderRight : "1px solid black"}}>
                     <p>Contact Email Id</p>
                   </div> 
                   <div style= {{   width: "14%"  ,  height: "100%"  , backgroundColor : "pink" , borderRight : "1px solid black"}}> 
                    <p>Facilitators</p>
                   </div>  
                   <div style= {{   width: "14%"  ,  height: "100%"  , backgroundColor : "pink" , borderRight : "1px solid black"}}> 
                    <p>Students</p>
                   </div> 
                   <div style= {{  width: "7%"  ,    height: "100%"  , backgroundColor : "pink" , borderRight : "1px solid black"}}> 
                    <p>Account Status</p>
                   </div> 
                   <div style= {{   width: "18%"  ,    height: "100%"  , backgroundColor : "pink" , borderRight : "1px solid black"}}> 
                    <p>Account status</p>
                   </div>
    
                  </div> 
                  <div  className="clientview_table_inner_div_table_row">
                     
                       


{
                data.map( (  el   , index )  => ( 

    
                  <div style= {{ width : "100%" , height: "25%"  , backgroundColor : "pink" , borderRight : "1px solid black"  , display : "flex" , flexDirection : "row"}} >

                  <div  style= {{   width: "7%"  ,  height: "100%"  , backgroundColor : "pink"  ,  borderRight : "1px solid black" }}>
                   <p> {index+1}</p>
                   </div> 
                   <div style= {{   width: "14%" , height: "100%"  , backgroundColor : "pink"  , borderRight : "1px solid black" }}>
                     <p> {  el.school_name}</p>
                   </div>
                   <div style= {{   width: "17%" ,  height: "100%"  , backgroundColor : "pink" , borderRight : "1px solid black"}  }>
                     <p> {  el.contact_person}</p>
                   </div>
                   <div style= {{  width: "13%"  ,  height: "100%"  , backgroundColor : "pink"  , borderRight : "1px solid black"}}>
                     <p> { el.email_id}</p>
                   </div> 
                   <div style= {{   width: "12%"  ,  height: "100%"  , backgroundColor : "pink" , borderRight : "1px solid black"  , display: "flex"  ,   flexDirection : "row"}}>   


                   <div style={{ height: "100%"  , width : "20%"}}> 
                                       <p>2</p>
                                </div>
                                 <div  style={{ height: "100%"  , width : "80%"}} >
                                        <input type="button" value = "view"  onClick={()  => {        navigate(  "/home/dashboard/client/facilitator"   ,     { state: {    typeId : "facilitator_with_add_account",   schoolName : data[index].school_name   }}           ,     { replace : false}  )  }  } /> 
                                 </div>
                   </div>  
                   <div style= {{   width: "12%"  ,  height: "100%"  , backgroundColor : "pink" , borderRight : "1px solid black"  , display: "flex"  ,   flexDirection : "row"}}>  

                                <div style={{ height: "100%"  , width : "20%"}}> 
                                       <p>2</p>
                                </div>
                                 <div  style={{ height: "100%"  , width : "80%"}} >
                                        <input type="button" value = "view"  onClick={()  => {        navigate(  "/home/dashboard/client/student"   ,  { replace : false}  )  }  } /> 
                                 </div>
                   </div> 
                   <div style= {{  width: "7%"  ,    height: "100%"  , backgroundColor : "pink" , borderRight : "1px solid black"}}> 
                    <p>Active</p>
                   </div> 
                   <div style= {{   width: "18%"  ,    height: "100%"  , backgroundColor : "pink" , borderRight : "1px solid black"  ,  display: "flex"  ,   flexDirection : "row"}}> 
                      

                                 <div style={{ height: "100%"  , width : "40%"}}> 
                                      <input type="button" value = "Status"  onClick={()  => {        navigate(  "/home/dashboard/client/facilitator"   ,  { replace : false}  )  }  } /> 
                                </div>
                                 <div  style={{ height: "100%"  , width : "40%"}} >
                                        <input type="button" value = "Delete"  onClick={()  => {        navigate(  "/home/dashboard/client/facilitator"   ,  { replace : false}  )  }  } /> 
                                 </div>
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
    
          <div className="clientview_sidebar" >
                 <Sidebar /> 
          </div> 
          <div className="clientview_body">  
           <div  className="clientview_body1"> 
           <p>hjxgajgj</p> 
           </div>
          
            <div className="clientview_table_outer_div_body2">   
  

             <div className="clientview_table_inner_div_column_name">  
             <div  style= {{   width: "7%"  ,  height: "100%"  , backgroundColor : "pink"  ,  borderRight : "1px solid black" }}>
             <p>Sl No</p>
             </div> 
             <div style= {{   width: "14%" , height: "100%"  , backgroundColor : "pink"  , borderRight : "1px solid black" }}>
               <p>Name of school</p>
             </div>
             <div style= {{   width: "17%" ,  height: "100%"  , backgroundColor : "pink" , borderRight : "1px solid black"}  }>
               <p>Contact Person</p>
             </div>
             <div style= {{  width: "9%"  ,  height: "100%"  , backgroundColor : "pink"  , borderRight : "1px solid black"}}>
               <p>Contact Email Id</p>
             </div> 
             <div style= {{   width: "14%"  ,  height: "100%"  , backgroundColor : "pink" , borderRight : "1px solid black"}}> 
              <p>Facilitators</p>
             </div>  
             <div style= {{   width: "14%"  ,  height: "100%"  , backgroundColor : "pink" , borderRight : "1px solid black"}}> 
              <p>Students</p>
             </div> 
             <div style= {{  width: "7%"  ,    height: "100%"  , backgroundColor : "pink" , borderRight : "1px solid black"}}> 
              <p>Account Status</p>
             </div> 
             <div style= {{   width: "18%"  ,    height: "100%"  , backgroundColor : "pink" , borderRight : "1px solid black"}}> 
              <p>Account status</p>
             </div>

            </div> 
            <div  className="clientview_table_inner_div_table_row">
               
               

            <div style= {{ width : "100%" , height: "25%"  , backgroundColor : "pink" , borderRight : "1px solid black"  , display : "flex" , flexDirection : "row"}} >

            <div  style= {{   width: "7%"  ,  height: "100%"  , backgroundColor : "pink"  ,  borderRight : "1px solid black" }}>
             <p> 1</p>
             </div> 
             <div style= {{   width: "14%" , height: "100%"  , backgroundColor : "pink"  , borderRight : "1px solid black" }}>
               <p>School 1</p>
             </div>
             <div style= {{   width: "17%" ,  height: "100%"  , backgroundColor : "pink" , borderRight : "1px solid black"}  }>
               <p>Asdasd Fdslkfmsdicn</p>
             </div>
             <div style= {{  width: "9%"  ,  height: "100%"  , backgroundColor : "pink"  , borderRight : "1px solid black"}}>
               <p> Yes</p>
             </div> 
             <div style= {{   width: "14%"  ,  height: "100%"  , backgroundColor : "pink" , borderRight : "1px solid black"  , display: "flex"  ,   flexDirection : "row"}}>   


             <div style={{ height: "100%"  , width : "20%"}}> 
                                 <p>2</p>
                          </div>
                           <div  style={{ height: "100%"  , width : "80%"}} >
                                  <input type="button" value = "view"  onClick={()  => {        navigate(  "/home/dashboard/client/facilitator"   ,   { state: {    typeId : typeId }}   ,   { replace : false}  )  }  } /> 
                           </div>
             </div>  
             <div style= {{   width: "14%"  ,  height: "100%"  , backgroundColor : "pink" , borderRight : "1px solid black"  , display: "flex"  ,   flexDirection : "row"}}>  

                          <div style={{ height: "100%"  , width : "20%"}}> 
                                 <p>2</p>
                          </div>
                           <div  style={{ height: "100%"  , width : "80%"}} >
                                  <input type="button" value = "view"  onClick={()  => {        navigate(  "/home/dashboard/client/student"   ,  { replace : false}  )  }  } /> 
                           </div>
             </div> 
             <div style= {{  width: "7%"  ,    height: "100%"  , backgroundColor : "pink" , borderRight : "1px solid black"}}> 
              <p>Active</p>
             </div> 
             <div style= {{   width: "18%"  ,    height: "100%"  , backgroundColor : "pink" , borderRight : "1px solid black"  ,  display: "flex"  ,   flexDirection : "row"}}> 
                

                           <div style={{ height: "100%"  , width : "40%"}}> 
                                <input type="button" value = "Status"  onClick={()  => {        navigate(  "/home/dashboard/client/facilitator"   ,  { replace : false}  )  }  } /> 
                          </div>
                           <div  style={{ height: "100%"  , width : "40%"}} >
                                  <input type="button" value = "Delete"  onClick={()  => {        navigate(  "/home/dashboard/client/facilitator"   ,  { replace : false}  )  }  } /> 
                           </div>
             </div>


           </div>

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