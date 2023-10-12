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
  



    

    const [ data , setData ] = useState( []);
    const  navigate = useNavigate() ;   
    const location = useLocation();  
    const [  typeId  , setTypeId ]   = useState( location.state.typeId   ) ;  
    const [  schoolName   , setSchoolName   ]   = useState( location.state.school_name  ) ;  
    const [  schoolId  , setSchoolId  ]   = useState( location.state.school_id  ) ;  
    


    console.log( location.state.school_id  ) ; 
    console.log( location.state.program_name  ) ; 


     
    const goToNext = () => {
  
       navigate(  "/home/dashboard/client/addfacilitator"   ,   { state: {    typeId : "system_admin_facilitator"    ,   type : "facilitator_with_add_account"   ,   school_id: location.state.school_id    ,    school_name :   location.state.school_name   ,   program_name : location.state.program_name }}   ,  { replace : false}  ) ; 
       console.log("ASJghshGHS") ;  

      }  

    



      useEffect(() => { 
      

        console.log( schoolName) ; 
        axios({ 
  
         url : "http://localhost:8000/facilitator/a_facilitator"  ,  
         method : "POST"  , 
         data : {
           
                  "search_key" : schoolName , 
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
 
   




    
    const  handleStatusChange = ( cs  ) => {    
    
      setPopupInfo( cs) ;
      console.log( cs) ;
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



            <Popup  trigger= { popup  } setTrigger={ setPopup }   >
            <h3> {popupInfo } </h3>
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





                  
    <input  style={{  width :"40%"  , height:"50%" }}type="button" value = "Status"  onClick= { () => {handleStatusChange( el.facilitator_name) } }  /> 

    <input  style={{  width :"40%"  , height:"50%" }}type="button" value = "Edit"  onClick={()  => {     navigate(  "/home/dashboard/client/editfacilitator"   , {   state: {  typeId : "facilitator"   ,  type : "facilitator_with_add_account"   ,  data : el   } }  , { replace : false}  )  }  } /> 
                
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

         {/* <div   className="clientview_table_row_box"  style= {{   width: "25%"  ,  height: "100%"  , borderRight : "1px solid black"}}> 
          <p>Account status</p>
         </div>  */}


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


         {/* <div  className="clientview_table_row_box"   style= {{   width: "25%"  ,  height: "100%"  , borderRight : "1px solid black"  , display:"flex"  , flexDirection :"row"  , justifyContent: "space-around"}}> 
            <div  style= {{ backgroundColor :"yellow"  , width :"40%"  , height:"50%" }} >
                 <p>Status</p>
            </div> 

            <div    style= {{ backgroundColor :"yellow"  ,  width :"40%"  , height:"50%"  }}>
            <input type="button" value = "Edit"  onClick={()  => {     navigate(  "/home/dashboard/client/editfacilitator"   , {   state: {  typeId : "facilitator"   ,  type : "facilitator_with_add_account"    } }  , { replace : false}  )  }  } /> 
            </div>
         </div>  */}


        </div>  
      
        
        ) )

        }
      </div>
        </div> 

        <div className="body3"> 

        {/* <div onClick={ () => { goToNext() } } className="add_new_program_button">
          <p>Add new facilitator</p>
        </div> */}
      
        </div>
       
      </div>



</div> 
  
  
      ) ;   
      



  }
  
  
} 

export default FacilitatorView;