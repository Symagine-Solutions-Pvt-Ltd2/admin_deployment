import "../Style/ClientView.css"  ; 

import {Link , useNavigate  , useLocation} from "react-router-dom" ; 
import { useState , useEffect  } from "react"; 
import Sidebar from "../Sidebar"  ; 
import axios from "axios"  ;   
import SearchIcon from '@mui/icons-material/Search';

 


 

// popup 
import Popup from "../Components/Popup";




function  AdminView() {      
 
      
     // for popup 
     const[ popupInfo  , setPopupInfo ] = useState("") ;
     const[ popup  , setPopup ] = useState( false) ; 
     const[ userNameForPopup  , setUserNameForPopup ] = useState( "") ; 
     const [  searchInput   , setSearchInput ]   = useState( "nil") ;
     const location = useLocation(); 




    //frame12 
    const [ data , setData ] = useState( []);

    const  navigate = useNavigate() ;   
     
     
    useEffect(() => { 

      axios({ 

       url : "https://learn-up.app/admin/aladmin"  ,   
       
       method : "POST"  , 
       data : {
         
                "search_key" : "" , 
              "page_no" :  1 ,
               "limit" : 10000  

       }

      }).then( ( res) => {   


        //console.log(  res.data.data ) ; 
         setData(  res.data.data ) ;  
         
         
       //  //console.log(   res.data.data[1].name )  ;

      } ).catch(( err) => {  
          //console.log( "error") ;

       }  ) ; 

  } , [  popup])  




    
    const goToNext = () => {
  
       navigate(  "/home/manageadmin/addadminaccount"  ,     { state: {    typeId : "system_admin_admin"  ,  userInfo :  location.state.userInfo }}    ,  { replace : false}  ) ; 
       //console.log("ASJghshGHS") ;  

      }  

 



      const  handleStatusChange = ( cs  ) => {    
        
        setPopupInfo( cs) ;
      //  //console.log( cs) ; 
        setUserNameForPopup( cs.name) ;
         setPopup( true)  ;
        
   } 
 







   const onSearch  = () => {  


    console.log(  searchInput ) ;     
  
  
  
    axios({ 
   
     url : "https://learn-up.app/admin/aladmin"  ,   
  
     method : "POST"  , 
     data : {
       
      "search_key" : searchInput, 
      "page_no" :  1 ,
       "limit" : 10000 
  
  
     }
  
    }).then( ( res) => {   
  
  
      console.log( res  ) ;
       
       if(  res.data.message === "No data found") {
        alert("Data not found");
        setData([]);
      } else if(  res.data.message === "Information retrieve successfully" ) {
        console.log(  res ) ;
        setData( res.data.data);
      }else{
        alert("Data not found");
        setData([]);
      }
    
    }
           ).catch(( err) => {  
        //console.log( "error") ;
  
     }  ) ; 
   }  


    return(  
  
      <div className="clientview"   style = {{ backgroundColor : "#F8E5E9" }}  >  
  
              <div className="clientview_sidebar"    style={{ borderRadius : 25   }} >
                     <Sidebar      info = {  location.state.userInfo}/> 
              </div>  

  


              <div className="clientview_body" >  

                

              <Popup  trigger= { popup  } setTrigger={ setPopup }     data={ popupInfo}  >
              <h3>{userNameForPopup}</h3>
          </Popup>



               <div  className="clientview_body1"   style= {{ backgroundColor : '#F8E5E9'}}> 
                
                  <div className="clientview_body1_search_div"> 


       
       <i style={{ position : "absolute" }}>  
        <button className="clientview_body1_search_button"   onClick={() => { onSearch() }}>
        <SearchIcon sx={{   fontSize : 26    }}/> 
        </button>
         </i>
       <input   className="clientview_body1_search_input"   type="text" placeholder="Search by name..."    onChange={  ( e ) => {  setSearchInput( e.target.value )} }/>  
      

       </div>





               </div>
              
                <div className="clientview_table_outer_div_body2"     >   
      
  
                 <div className="clientview_table_inner_div_column_name"   style= {{ backgroundColor : '#F1F2F7'   , borderTop : "1px solid #5A6199"  ,  borderBottom : "1px solid #5A6199"}} >  

                 <div  className="clientview_table_row_box"   style= {{   width: "9%"  ,  height: "100%"   ,  borderRight : "1px solid #5A6199" }}> 
                 <p className="header_text">Sl No</p>
                 </div>   


                 <div  className="clientview_table_row_box" style= {{   width: "18%" , height: "100%"   , borderRight : "1px solid #5A6199" }}>
                   <p className="header_text">Name</p>
                 </div>  


                 <div className="clientview_table_row_box"  style= {{   width: "18%" ,  height: "100%" , borderRight : "1px solid #5A6199"}  }>
                   <p className="header_text">Email id</p>
                 </div>  


                 <div className="clientview_table_row_box"  style= {{  width: "18%"  ,  height: "100%"   , borderRight : "1px solid #5A6199"}}>
                   <p className="header_text">Type</p>
                 </div> 
  
                 <div  className="clientview_table_row_box" style= {{  width: "12%"  ,    height: "100%"  , borderRight : "1px solid #5A6199"}}> 
                  <p className="header_text">Account Status</p>
                 </div>  


                 <div  className="clientview_table_row_box" style= {{   width: "25%"  ,    height: "100%"}}> 
                  <p className="header_text">Account status</p>
                 </div>
  
                </div>  


                
                <div  className="clientview_table_inner_div_table_row"   style= {{ backgroundColor : "#F8E5E9"   }} >
                   
       
                     {
         data.map( (  el   , index )  => (
           
          <div  key = { index } style= {{ width : "100%" , height: "25%"    , display : "flex" , flexDirection : "row"  ,    borderBottom : "1px solid #5A6199"    }} >

          <div  className="clientview_table_row_box" style= {{   width: "9%"  ,  height: "100%"   ,  borderRight : "1px solid #5A6199" }}>
           <p>  { index+1 } </p>
           </div>  


           <div   className="clientview_table_row_box"  style= {{   width: "18%" , height: "100%"    , borderRight : "1px solid #5A6199" }}>
           <p> { el.name }</p> 
           </div> 



           <div className="clientview_table_row_box"  style= {{   width: "18%" ,  height: "100%"   , borderRight : "1px solid #5A6199"  , overflow : "hidden"}  }>
           <p> { el.email_id}</p>
          </div> 


           <div  className="clientview_table_row_box" style= {{  width: "18%"  ,  height: "100%"   , borderRight : "1px solid #5A6199"}}>
            <p>{ ( el.type_id === "content_admin") ? "Content Admin" : "Program Admin" } </p>
           </div> 

          <div  className="clientview_table_row_box"  style= {{  width: "12%"  ,    height: "100%"  , borderRight : "1px solid #5A6199"}}> 
           <p> { el.status } </p>
           </div> 
           <div className="clientview_table_row_box"  style= {{   width: "25%"  ,    height: "100%"  ,  display: "flex"  ,   flexDirection : "row"  , justifyContent : "space-around"}}>  

                     
                 <input  className="clientview_table_row_button"   style={{ height: "40%"  , width : "35%"  ,  border: "0px solid red"  , borderRadius : 25}}  type="button" value = "Status"   onClick= { () => {handleStatusChange( el) } }  /> 
                  
                     
                <input    className="clientview_table_row_button"     style={{ height: "40%"  , width : "35%"  ,  border: "0px solid red"  , borderRadius : 25}}  type="button" value = "Edit"  onClick={()  => {        navigate(  "/home/manageadmin/editadminaccount"    ,    {   state: {  typeId : "admin"   ,  userInfo :  location.state.userInfo    ,    data : el  } }   ,  { replace : false}  )  }  } /> 
                    
          </div>
        


        </div> 
          ) )}    

          </div>
                
                
      
                </div> 
  
                <div className="body3"   style= {{ backgroundColor : "#F8E5E9"}}> 
  
                <button onClick={ () => { goToNext() } } className="add_new_program_button"  style= { {  backgroundColor : "#FCC046"}} >
                  <p>Add new account</p>
                </button>
              
                </div>
              
              </div>
  
   



   
  
      </div>
    ) ;
    }
    
    export default AdminView;