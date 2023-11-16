import "../Style/ClientView.css"  ; 

import {Link , useNavigate  , useLocation} from "react-router-dom" ; 
import { useState , useEffect  } from "react"; 
import Sidebar from "../Sidebar"  ; 
import axios from "axios"  ;   

 


 

// popup 
import Popup from "../Components/Popup";




function  AdminView() {      
 
      
     // for popup 
     const[ popupInfo  , setPopupInfo ] = useState("") ;
     const[ popup  , setPopup ] = useState( false) ; 
    
     const location = useLocation(); 




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
  
       navigate(  "/home/manageadmin/addadminaccount"  ,     { state: {    typeId : "system_admin_admin"  ,  userInfo :  location.state.userInfo }}    ,  { replace : false}  ) ; 
       console.log("ASJghshGHS") ;  

      }  

 



      const  handleStatusChange = ( cs  ) => {    
    
        setPopupInfo( cs) ;
        console.log( cs) ;
         setPopup( true)  ;
        
   } 



    return(  
  
      <div className="clientview">  
  
              <div className="clientview_sidebar" >
                     <Sidebar      info = {  location.state.userInfo}/> 
              </div>  

  


              <div className="clientview_body" >  

                

              <Popup  trigger= { popup  } setTrigger={ setPopup }   >
            <h3> {popupInfo } </h3>
          </Popup>



               <div  className="clientview_body1"   style= {{ backgroundColor : '#F8E5E9'}}> 
            
               </div>
              
                <div className="clientview_table_outer_div_body2"     >   
      
  
                 <div className="clientview_table_inner_div_column_name"   style= {{ backgroundColor : '#F1F2F7'   , borderTop : "1px solid #5A6199"  ,  borderBottom : "1px solid #5A6199"}} >  

                 <div  className="clientview_table_row_box"   style= {{   width: "9%"  ,  height: "100%"   ,  borderRight : "1px solid black" }}> 
                 <p className="header_text">Sl No</p>
                 </div>   


                 <div  className="clientview_table_row_box" style= {{   width: "18%" , height: "100%"   , borderRight : "1px solid black" }}>
                   <p className="header_text">Name</p>
                 </div>  


                 <div className="clientview_table_row_box"  style= {{   width: "18%" ,  height: "100%" , borderRight : "1px solid black"}  }>
                   <p className="header_text">Email id</p>
                 </div>  


                 <div className="clientview_table_row_box"  style= {{  width: "18%"  ,  height: "100%"   , borderRight : "1px solid black"}}>
                   <p className="header_text">Type</p>
                 </div> 
  
                 <div  className="clientview_table_row_box" style= {{  width: "12%"  ,    height: "100%"  , borderRight : "1px solid black"}}> 
                  <p className="header_text">Account Status</p>
                 </div>  


                 <div  className="clientview_table_row_box" style= {{   width: "25%"  ,    height: "100%" , borderRight : "1px solid black"}}> 
                  <p className="header_text">Account status</p>
                 </div>
  
                </div>  


                
                <div  className="clientview_table_inner_div_table_row"   style= {{ backgroundColor : "#F8E5E9"   }} >
                   
       
                     {
         data.map( (  el   , index )  => (
           
          <div  key = { index } style= {{ width : "100%" , height: "25%"   , borderRight : "1px solid black"  , display : "flex" , flexDirection : "row"  ,    borderBottom : "1px solid #5A6199"    }} >

          <div  className="clientview_table_row_box" style= {{   width: "9%"  ,  height: "100%"   ,  borderRight : "1px solid black" }}>
           <p>  { index+1 } </p>
           </div>  


           <div   className="clientview_table_row_box"  style= {{   width: "18%" , height: "100%"    , borderRight : "1px solid black" }}>
           <p> { el.name }</p> 
           </div> 



           <div className="clientview_table_row_box"  style= {{   width: "18%" ,  height: "100%"   , borderRight : "1px solid black"}  }>
           <p> { el.email_id}</p>
          </div> 


           <div  className="clientview_table_row_box" style= {{  width: "18%"  ,  height: "100%"   , borderRight : "1px solid black"}}>
            <p>{ ( el.type_id === "content_admin") ? "Content Admin" : "Program Admin" } </p>
           </div> 

          <div  className="clientview_table_row_box"  style= {{  width: "12%"  ,    height: "100%"  , borderRight : "1px solid black"}}> 
           <p> { el.status } </p>
           </div> 
           <div className="clientview_table_row_box"  style= {{   width: "25%"  ,    height: "100%" , borderRight : "1px solid black"  ,  display: "flex"  ,   flexDirection : "row"  , justifyContent : "space-around"}}>  

                     
                 <input  className="clientview_table_row_button"   style={{ height: "40%"  , width : "35%"  ,  border: "0px solid red"  , borderRadius : 25}}  type="button" value = "Status"   onClick= { () => {handleStatusChange( el.name) } }  /> 
                  
                     
                <input    className="clientview_table_row_button"     style={{ height: "40%"  , width : "35%"  ,  border: "0px solid red"  , borderRadius : 25}}  type="button" value = "Edit"  onClick={()  => {        navigate(  "/home/manageadmin/editadminaccount"    ,    {   state: {  typeId : "admin"   ,  userInfo :  location.state.userInfo    ,    data : el  } }   ,  { replace : false}  )  }  } /> 
                    
          </div>
        


        </div> 
          ) )}    

          </div>
                
                
      
                </div> 
  
                <div className="body3"   style= {{ backgroundColor : "#F8E5E9"}}> 
  
                <div onClick={ () => { goToNext() } } className="add_new_program_button"  style= { {  backgroundColor : "#FCC046"}} >
                  <p>Add new account</p>
                </div>
              
                </div>
              
              </div>
  
   



   
  
      </div>
    ) ;
    }
    
    export default AdminView;