import {Link , useNavigate  , useLocation} from "react-router-dom" ; 
import { useState  ,  useEffect  } from "react"; 
import Sidebar from "../Sidebar"  ; 
import axios from "axios"  ;  
import "../Style/ClientView.css" ;  






// popup 
import Popup from "../Components/Popup";


function  FacilitatorView() {    
    
 
   
   // for popup 
   const[ popupInfo  , setPopupInfo ] = useState("") ;
   const[ popup  , setPopup ] = useState( false) ; 
   const[ userNameForPopup  , setUserNameForPopup ] = useState( "") ; 



    

    const [ data , setData ] = useState( []);
    const  navigate = useNavigate() ;   
    const location = useLocation();  
    const [  typeId  , setTypeId ]   = useState( location.state.typeId   ) ;    ;  
    
 

   /*  console.log( "facilitatorview" ) ; 
    console.log( location.state.typeId  ) ; 
    console.log( location.state.schoolId  ) ; 
    console.log( location.state.programId  ) ;  */


     
    const goToNext = () => {
  
       navigate(  "/home/dashboard/client/addfacilitator"   ,   { state: {    typeId : "system_admin_facilitator"    ,   type : "facilitator_with_add_account"   ,   schoolId : location.state.schoolId       ,   programId : location.state.programId }}   ,  { replace : false}  ) ; 
       console.log("ASJghshGHS") ;  

      }  

    



      useEffect(() => { 
      

        
        axios({ 
  
         url : "http://localhost:8000/facilitator/a_facilitator"  ,  
         method : "POST"  , 
         data : {
           
                  "search_key" : location.state.schoolId  , 
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
  
    } , [  popup])  ; 
 
   




    
    const  handleStatusChange = ( cs  ) => {    
    
      setPopupInfo( cs) ;
      // console.log( cs) ;
      setUserNameForPopup( cs.facilitator_name) ;
        setPopup( true)  ;
       
      
 } 

 

      switch( typeId )  { 


        case "facilitator_with_add_account" :  


  return (
    <div className="clientview">  

            <div className="clientview_sidebar" >
                   <Sidebar /> 
            </div>  



            <div className="clientview_body">   



            <Popup  trigger= { popup  } setTrigger={ setPopup }   data={ popupInfo}   >
            <h3>{userNameForPopup}</h3>
          </Popup> 



             <div  className="clientview_body1"> 
          


             </div>
            
              <div className="clientview_table_outer_div_body2">   
    

               <div className="clientview_table_inner_div_column_name">  
               <div    className="clientview_table_row_box"    style= {{   width: "10%"  ,  height: "100%"    ,  borderRight : "1px solid black" }}>
               <p>Sl No</p>
               </div> 
               <div    className="clientview_table_row_box"  style= {{   width: "25%" , height: "100%"   , borderRight : "1px solid black" }}>
                 <p>Name of facilitator</p>
               </div>
               <div   className="clientview_table_row_box"  style= {{   width: "25%" ,  height: "100%"  , borderRight : "1px solid black"}  }>
                 <p>Email ID</p>
               </div>
               <div  className="clientview_table_row_box"   style= {{  width: "15%"  ,  height: "100%"    , borderRight : "1px solid black"}}>
                 <p>Account Status</p>
               </div> 
               <div   className="clientview_table_row_box"  style= {{   width: "25%"  ,  height: "100%"  , borderRight : "1px solid black"}}> 
                <p>Account status</p>
               </div> 


              </div>  



              <div  className="clientview_table_inner_div_table_row">
                   
              {   
               


              data.map( (  el  , index   )  => ( 


                <div  key= { index }    style={ {  width : "100%" , height: "25%"   , display : "flex" , flexDirection : "row"   ,   borderBottom : "1px solid black" } }>  
               <div    className="clientview_table_row_box"  style= {{   width: "10%"  ,  height: "100%"    ,  borderRight : "1px solid black" }}>
               <p> { index+1} </p>
               </div>  


               <div   className="clientview_table_row_box"  style= {{   width: "25%" , height: "100%", borderRight : "1px solid black" }}>
                 <p> { el.facilitator_name }  </p>
               </div>
               <div  className="clientview_table_row_box"  style= {{   width: "25%" ,  height: "100%" , borderRight : "1px solid black"}  }>
                 <p> {  el.email_id}</p>
               </div> 


               <div    className="clientview_table_row_box"  style= {{  width: "15%"  ,  height: "100%"   , borderRight : "1px solid black"}}>
                 <p> {  el.status}</p>
               </div> 
               <div  className="clientview_table_row_box"   style= {{   width: "25%"  ,  height: "100%"  , borderRight : "1px solid black"  , display:"flex"  , flexDirection :"row"  , justifyContent: "space-around"}}>  





                  
    <input  style={{  width :"40%"  , height:"50%" }}type="button" value = "Status"  onClick= { () => {handleStatusChange( el) } }  /> 

    <input  style={{  width :"40%"  , height:"50%" }}type="button" value = "Edit"  onClick={()  => {     navigate(  "/home/dashboard/client/editfacilitator"   , {   state: {  typeId : "facilitator"   ,  type : "facilitator_with_add_account"   ,  data : el      } }  , { replace : false}  )  }  } /> 
                
               </div> 


              </div>  
            
              
              ) )

              }
            </div>
              </div> 

              <div className="body3"> 

              <div onClick={ () => { goToNext() } } className="add_new_program_button">
                <p>Add new facilitator</p>
              </div>
            
              </div>
             
            </div>



    </div> 



    ) ;   
    


    case "facilitator" :   
    
    return ( 


         
      <div className="clientview">  

      <div className="clientview_sidebar" >
             <Sidebar /> 
      </div> 
      <div className="clientview_body">  
       <div  className="clientview_body1"> 
    


       </div>
      
        <div className="clientview_table_outer_div_body2">   


         <div className="clientview_table_inner_div_column_name">  
         <div    className="clientview_table_row_box"    style= {{   width: "10%"  ,  height: "100%"    ,  borderRight : "1px solid black" }}>
         <p>Sl No</p>
         </div> 
         <div    className="clientview_table_row_box"  style= {{   width: "30%" , height: "100%"   , borderRight : "1px solid black" }}>
           <p>Name of facilitator</p>
         </div>
         <div   className="clientview_table_row_box"  style= {{   width: "40%" ,  height: "100%"  , borderRight : "1px solid black"}  }>
           <p>Email ID</p>
         </div>
         <div  className="clientview_table_row_box"   style= {{  width: "20%"  ,  height: "100%"    , borderRight : "1px solid black"}}>
           <p>Account Status</p>
         </div>  

       

        </div>  



        <div  className="clientview_table_inner_div_table_row">
             
        {   
         


        data.map( (  el  , index   )  => ( 


          <div  key= { index }    style={ {  width : "100%" , height: "25%"   , display : "flex" , flexDirection : "row"   ,   borderBottom : "1px solid black" } }>  
         <div    className="clientview_table_row_box"  style= {{   width: "10%"  ,  height: "100%"    ,  borderRight : "1px solid black" }}>
         <p>  { index +1} </p>
         </div>  


         <div   className="clientview_table_row_box"  style= {{   width: "30%" , height: "100%", borderRight : "1px solid black" }}>
           <p> { el.facilitator_name }  </p>
         </div>
         <div  className="clientview_table_row_box"  style= {{   width: "40%" ,  height: "100%" , borderRight : "1px solid black"}  }>
           <p> {  el.email_id}</p>
         </div> 


         <div    className="clientview_table_row_box"  style= {{  width: "20%"  ,  height: "100%"   , borderRight : "1px solid black"}}>
           <p> {  el.status}</p>
         </div>  


        

        </div>  
      
        
        ) )

        }
      </div>
        </div> 

        <div className="body3"> 

    
      
        </div>
       
      </div>



</div> 
  
  
      ) ;   
      



  }
  
  
} 

export default FacilitatorView;