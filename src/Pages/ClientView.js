import "../Style/ClientView.css"  ;
import {Link , useNavigate  , useLocation} from "react-router-dom" ; 
import { useState   , useEffect  } from "react"; 
import Sidebar from "../Sidebar"  ;  
import axios from "axios"  ;  



function ClientView() {    
    

  const [ data , setData ] = useState( []);
  const  navigate = useNavigate() ;   
  const location = useLocation();  
  const [  typeId  , setTypeId ]   = useState( location.state.typeId   ) ; 
  const [  programName   , setProgramName  ]   = useState( location.state.program_name  ) ; 
   
  console.log(  programName  ) ; 

    const goToNext = () => {
  
       navigate(  "/home/dashboard/client/addclient"   ,  { state: {    typeId : "system_admin_client" }}   ,  { replace : false}  ) ; 
       console.log("ASJghshGHS") ;  

      }  


      useEffect(() => { 

        axios({ 
  
         url : "http://localhost:8000/admin/ac_program"  ,  
         method : "POST"  , 
         data : {
           
                  "search_key" : programName  , 
                "page_no" :  1 ,
                 "limit" : 5   
  
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
               <div  style= {{   width: "8.69%"  ,  height: "100%"  , backgroundColor : "pink"  ,  borderRight : "1px solid black" }}>
               <p>Sl No</p>
               </div> 
               <div style= {{   width: "15.76%" , height: "100%"  , backgroundColor : "pink"  , borderRight : "1px solid black" }}>
                 <p> Name of Client</p>
               </div>
               <div style= {{   width: "15.76%" ,  height: "100%"  , backgroundColor : "pink" , borderRight : "1px solid black"}  }>
                 <p>Contact Person</p>
               </div>
               <div style= {{  width: "15.76%"  ,  height: "100%"  , backgroundColor : "pink"  , borderRight : "1px solid black"}}>
                 <p>Contact Email Id</p>
               </div> 
               <div style= {{   width: "15.76%"  ,  height: "100%"  , backgroundColor : "pink" , borderRight : "1px solid black"}}> 
                <p>No of schools</p>
               </div> 

               <div style= {{  width: "8.69%"  ,    height: "100%"  , backgroundColor : "pink" , borderRight : "1px solid black"}}> 
                <p>Account Status</p>
               </div> 
               <div style= {{   width: "20.19%"  ,    height: "100%"  , backgroundColor : "pink" , borderRight : "1px solid black"}}> 
                <p>Account status</p>
               </div>

              </div> 
              <div  className="clientview_table_inner_div_table_row">
                  


                  {
                 
                 data.map( (  el  , index )  => ( 
              <div  key={ index} style= {{ width : "100%" , height: "25%"  , backgroundColor : "pink" , borderRight : "1px solid black"  , display : "flex" , flexDirection : "row"}} >
              <div  style= {{   width: "8.69%"  ,  height: "100%"  , backgroundColor : "pink"  ,  borderRight : "1px solid black" }}>
               <p>{ index+1} </p>
               </div> 
               <div style= {{   width: "15.76%" , height: "100%"  , backgroundColor : "pink"  , borderRight : "1px solid black" }}>
                 <p>  {  el.client_name }</p>
               </div>
               <div style= {{   width: "15.76%" ,  height: "100%"  , backgroundColor : "pink" , borderRight : "1px solid black"}  }>
                 <p> { el.contact_person }</p>
               </div>
               <div style= {{  width: "15.76%"  ,  height: "100%"  , backgroundColor : "pink"  , borderRight : "1px solid black"}}>
                 <p> { el.email_id}</p>
               </div> 
               <div style= {{   width: "15.76%"  ,  height: "100%"  , backgroundColor : "pink" , borderRight : "1px solid black" , display: "flex"  ,   flexDirection : "row"}}> 
                                 <div style={{ height: "100%"  , width : "40%"}}> 
                                       <p>2</p>
                                </div>
                                 <div  style={{ height: "100%"  , width : "60%"}} >
                                        <input type="button" value = "view"  onClick={()  => {        navigate(  "/home/dashboard/client/school"   ,   { state: {  typeId : typeId ,  clientName : data[index].client_name   , programName : programName }}    ,      { state: {    typeId :  typeId  }} ,  { replace : false}  )  }  } /> 
                                 </div>
               </div> 

               <div style= {{  width: "8.69%"  ,    height: "100%"  , backgroundColor : "pink" , borderRight : "1px solid black"}}> 
                <p>Active</p>
               </div> 
               <div style= {{   width: "20.19%"  ,    height: "100%"  , backgroundColor : "pink" , borderRight : "1px solid black"  ,  display: "flex"  ,   flexDirection : "row" }}> 
                             <div style={{ height: "100%"  , width : "40%"}}> 
                             <input type="button" value = "Status"  onClick={()  => {        navigate(  "/home/dashboard/client/facilitator"   ,  { replace : false}  )  }  } /> 
                                </div>
                                 <div  style={{ height: "100%"  , width : "40%"}} >
                                        <input type="button" value = "Delete"  onClick={()  => {        navigate(  "/home/dashboard/client/facilitator"   ,  { replace : false}  )  }  } /> 
                                 </div>
               </div>

  </div>

                 ))
                  }
              </div>
              
              
    
              </div> 

              <div className="body3"> 

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

    
     <div  className="clientview_body1"> 
     <p>hjxgajgj</p> 
     </div>
    
      <div className="clientview_table_outer_div_body2">   


       <div className="clientview_table_inner_div_column_name">  
       <div  style= {{   width: "8.69%"  ,  height: "100%"  , backgroundColor : "pink"  ,  borderRight : "1px solid black" }}>
       <p>Sl No</p>
       </div> 
       <div style= {{   width: "15.76%" , height: "100%"  , backgroundColor : "pink"  , borderRight : "1px solid black" }}>
         <p> Name of Client</p>
       </div>
       <div style= {{   width: "15.76%" ,  height: "100%"  , backgroundColor : "pink" , borderRight : "1px solid black"}  }>
         <p>Contact Person</p>
       </div>
       <div style= {{  width: "15.76%"  ,  height: "100%"  , backgroundColor : "pink"  , borderRight : "1px solid black"}}>
         <p>Contact Email Id</p>
       </div> 
       <div style= {{   width: "15.76%"  ,  height: "100%"  , backgroundColor : "pink" , borderRight : "1px solid black"}}> 
        <p>No of schools</p>
       </div> 

       <div style= {{  width: "8.69%"  ,    height: "100%"  , backgroundColor : "pink" , borderRight : "1px solid black"}}> 
        <p>Account Status</p>
       </div> 
       <div style= {{   width: "20.19%"  ,    height: "100%"  , backgroundColor : "pink" , borderRight : "1px solid black"}}> 
        <p>Account status</p>
       </div>

      </div> 
      <div  className="clientview_table_inner_div_table_row">
         
        
      <div style= {{ width : "100%" , height: "25%"  , backgroundColor : "pink" , borderRight : "1px solid black"  , display : "flex" , flexDirection : "row"}} >
      <div  style= {{   width: "8.69%"  ,  height: "100%"  , backgroundColor : "pink"  ,  borderRight : "1px solid black" }}>
       <p>1</p>
       </div> 
       <div style= {{   width: "15.76%" , height: "100%"  , backgroundColor : "pink"  , borderRight : "1px solid black" }}>
         <p>Client name 1</p>
       </div>
       <div style= {{   width: "15.76%" ,  height: "100%"  , backgroundColor : "pink" , borderRight : "1px solid black"}  }>
         <p>Asdasd Fdslkfmsdicn</p>
       </div>
       <div style= {{  width: "15.76%"  ,  height: "100%"  , backgroundColor : "pink"  , borderRight : "1px solid black"}}>
         <p>asldkn@gmail.com</p>
       </div> 
       <div style= {{   width: "15.76%"  ,  height: "100%"  , backgroundColor : "pink" , borderRight : "1px solid black" , display: "flex"  ,   flexDirection : "row"}}> 
                         <div style={{ height: "100%"  , width : "40%"}}> 
                               <p>2</p>
                        </div>
                         <div  style={{ height: "100%"  , width : "60%"}} >
                                <input type="button" value = "view"  onClick={()  => {        navigate(  "/home/dashboard/client/school"   ,       { state: {    typeId :  typeId  }} ,   { replace : false}  )  }  } /> 
                         </div>
       </div> 

       <div style= {{  width: "8.69%"  ,    height: "100%"  , backgroundColor : "pink" , borderRight : "1px solid black"}}> 
        <p>Active</p>
       </div> 
       <div style= {{   width: "20.19%"  ,    height: "100%"  , backgroundColor : "pink" , borderRight : "1px solid black"  ,  display: "flex"  ,   flexDirection : "row" }}> 
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

export default ClientView;