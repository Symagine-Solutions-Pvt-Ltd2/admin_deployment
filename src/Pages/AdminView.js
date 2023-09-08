import "../Style/AdminView.css"  ;
import {Link , useNavigate  , useLocation} from "react-router-dom" ; 
import { useState , useEffect  } from "react"; 
import Sidebar from "../Sidebar"  ; 
import axios from "axios"  ;  



function  AdminView() {      
 
    
    //frame12 
    const [ data , setData ] = useState( []);

    const  navigate = useNavigate() ;   
     
     
    useEffect(() => { 

      axios({ 

       url : "http://localhost:8000/admin/aladmin"  ,  
       method : "POST"  , 
       data : {
         
                "search_key" : "" , 
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

  } , [])  




    
    const goToNext = () => {
  
       navigate(  "/home/manageadmin/addadminaccount"  ,     { state: {    typeId : "system_admin_admin" }}    ,  { replace : false}  ) ; 
       console.log("ASJghshGHS") ;  

      }  





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
      
  
                 <div className="adminview_table_inner_div_column_name">  
                 <div  style= {{   width: "9%"  ,  height: "100%"  , backgroundColor : "pink"  ,  borderRight : "1px solid black" }}>
                 <p>Sl No</p>
                 </div> 
                 <div style= {{   width: "18%" , height: "100%"  , backgroundColor : "pink"  , borderRight : "1px solid black" }}>
                   <p>Name</p>
                 </div>
                 <div style= {{   width: "18%" ,  height: "100%"  , backgroundColor : "pink" , borderRight : "1px solid black"}  }>
                   <p>Email id</p>
                 </div>
                 <div style= {{  width: "18%"  ,  height: "100%"  , backgroundColor : "pink"  , borderRight : "1px solid black"}}>
                   <p>Type</p>
                 </div> 
  
                 <div style= {{  width: "12%"  ,    height: "100%"  , backgroundColor : "pink" , borderRight : "1px solid black"}}> 
                  <p>Account Status</p>
                 </div> 
                 <div style= {{   width: "25%"  ,    height: "100%"  , backgroundColor : "pink" , borderRight : "1px solid black"}}> 
                  <p>Account status</p>
                 </div>
  
                </div>  


                
                <div  className="adminview_table_inner_div_table_row"  >
                   
                {/* <div style= {{ width : "100%" , height: "25%"  , backgroundColor : "pink" , borderRight : "1px solid black"  , display : "flex" , flexDirection : "row"}} >

                    <div  style= {{   width: "9%"  ,  height: "100%"  , backgroundColor : "pink"  ,  borderRight : "1px solid black" }}>
                     <p>1 </p>
                     </div> 
                     <div style= {{   width: "18%" , height: "100%"  , backgroundColor : "pink"  , borderRight : "1px solid black" }}>
                     <p> mike </p>
                     </div>
                     <div style= {{   width: "18%" ,  height: "100%"  , backgroundColor : "pink" , borderRight : "1px solid black"}  }>
                     <p> mike@gmail.com</p>
                    </div>
                     <div style= {{  width: "18%"  ,  height: "100%"  , backgroundColor : "pink"  , borderRight : "1px solid black"}}>
                      <p> content admin </p>
                     </div> 
  
                    <div style= {{  width: "12%"  ,    height: "100%"  , backgroundColor : "pink" , borderRight : "1px solid black"}}> 
                     <p> Active</p>
                     </div> 
                     <div style= {{   width: "25%"  ,    height: "100%"  , backgroundColor : "pink" , borderRight : "1px solid black"  ,  display: "flex"  ,   flexDirection : "row"}}>  

                                <div style={{ height: "100%"  , width : "40%"}}> 
                                      <input type="button" value = "Status"  onClick={()  => {        navigate(  "/home/dashboard/client/facilitator"   ,  { replace : false}  )  }  } /> 
                                </div>
                                 <div  style={{ height: "100%"  , width : "40%"}} >
                                        <input type="button" value = "Edit"  onClick={()  => {        navigate(  "/home/dashboard/client/facilitator"   ,  { replace : false}  )  }  } /> 
                                 </div>
                    </div>
                  


                  </div> 




 */}    
             
                     {
         data.map( (  el )  => (
           
          <div style= {{ width : "100%" , height: "25%"  , backgroundColor : "pink" , borderRight : "1px solid black"  , display : "flex" , flexDirection : "row"}} >

          <div  style= {{   width: "9%"  ,  height: "100%"  , backgroundColor : "pink"  ,  borderRight : "1px solid black" }}>
           <p>1 </p>
           </div> 
           <div style= {{   width: "18%" , height: "100%"  , backgroundColor : "pink"  , borderRight : "1px solid black" }}>
           <p> { el.name }</p>
           </div>
           <div style= {{   width: "18%" ,  height: "100%"  , backgroundColor : "pink" , borderRight : "1px solid black"}  }>
           <p> mike@gmail.com</p>
          </div>
           <div style= {{  width: "18%"  ,  height: "100%"  , backgroundColor : "pink"  , borderRight : "1px solid black"}}>
            <p> content admin </p>
           </div> 

          <div style= {{  width: "12%"  ,    height: "100%"  , backgroundColor : "pink" , borderRight : "1px solid black"}}> 
           <p> Active</p>
           </div> 
           <div style= {{   width: "25%"  ,    height: "100%"  , backgroundColor : "pink" , borderRight : "1px solid black"  ,  display: "flex"  ,   flexDirection : "row"}}>  

                      <div style={{ height: "100%"  , width : "40%"}}> 
                            <input type="button" value = "Status"  onClick={()  => {        navigate(  "/home/dashboard/client/facilitator"   ,  { replace : false}  )  }  } /> 
                      </div>
                       <div  style={{ height: "100%"  , width : "40%"}} >
                              <input type="button" value = "Edit"  onClick={()  => {        navigate(  "/home/dashboard/client/facilitator"   ,  { replace : false}  )  }  } /> 
                       </div>
          </div>
        


        </div> 
          ) )}    

          </div>
                
                
      
                </div> 
  
                <div className="body3"> 
  
                <div onClick={ () => { goToNext() } } className="add_new_program_button">
                  <p>Add new account</p>
                </div>
              
                </div>
              
              </div>
  
  
  
      </div>
    ) ;
    }
    
    export default AdminView;