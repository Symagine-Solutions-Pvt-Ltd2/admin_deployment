import {Link , useNavigate  , useLocation} from "react-router-dom" ; 
import { useState  ,  useEffect  } from "react"; 
import Sidebar from "../Sidebar"  ; 
import axios from "axios"  ; 



function  FacilitatorView() {    
    


    const [ data , setData ] = useState( []);
    const  navigate = useNavigate() ;   
    const location = useLocation();  
    const [  typeId  , setTypeId ]   = useState( location.state.typeId   ) ;  
    const [  schoolName   , setSchoolName   ]   = useState( location.state.schoolName  ) ;  

    console.log( location.state.schoolName  ) ; 

    const goToNext = () => {
  
       navigate(  "/home/dashboard/client/addclient"   ,   { state: {    typeId : "system_admin_facilitator" }}   ,  { replace : false}  ) ; 
       console.log("ASJghshGHS") ;  

      }  

    



      useEffect(() => { 

        axios({ 
  
         url : "http://localhost:8000/admin/a_facilitator"  ,  
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
 
  

 

      switch( typeId )  { 


        case "facilitator_with_add_account" :  


  return (
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
               <div  style= {{   width: "10%"  ,  height: "100%"  , backgroundColor : "pink"  ,  borderRight : "1px solid black" }}>
               <p>Sl No</p>
               </div> 
               <div style= {{   width: "25%" , height: "100%"  , backgroundColor : "pink"  , borderRight : "1px solid black" }}>
                 <p>Name of facilitator</p>
               </div>
               <div style= {{   width: "25%" ,  height: "100%"  , backgroundColor : "pink" , borderRight : "1px solid black"}  }>
                 <p>Email ID</p>
               </div>
               <div style= {{  width: "15%"  ,  height: "100%"  , backgroundColor : "pink"  , borderRight : "1px solid black"}}>
                 <p>Account Status</p>
               </div> 
               <div style= {{   width: "25%"  ,  height: "100%"  , backgroundColor : "pink" , borderRight : "1px solid black"}}> 
                <p>Account status</p>
               </div> 


              </div>  



              <div  className="clientview_table_inner_div_table_row">
                   
              {   
              
              data.map( (  el )  => ( 


                <div className="clientview_table_inner_div_column_name"    style={{ height: "25%"}}>  
               <div  style= {{   width: "10%"  ,  height: "100%"  , backgroundColor : "pink"  ,  borderRight : "1px solid black" }}>
               <p>  1 </p>
               </div> 
               <div style= {{   width: "25%" , height: "100%"  , backgroundColor : "pink"  , borderRight : "1px solid black" }}>
                 <p> { el.facilitator_name }  </p>
               </div>
               <div style= {{   width: "25%" ,  height: "100%"  , backgroundColor : "pink" , borderRight : "1px solid black"}  }>
                 <p> {  el.email_id}</p>
               </div>
               <div style= {{  width: "15%"  ,  height: "100%"  , backgroundColor : "pink"  , borderRight : "1px solid black"}}>
                 <p> {  el.status}</p>
               </div> 
               <div style= {{   width: "25%"  ,  height: "100%"  , backgroundColor : "pink" , borderRight : "1px solid black"  , display:"flex"  , flexDirection :"row"  , justifyContent: "space-around"}}> 
                  <div  style= {{ backgroundColor :"yellow"  , width :"40%"  , height:"50%" }} >
                       <p>Status</p>
                  </div> 

                  <div  style= {{ backgroundColor :"yellow"  ,  width :"40%"  , height:"50%"  }}>
                     <p>Edit</p>
                  </div>
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
               <p>hjxgajgj</p> 
               </div>
              
                <div className="clientview_table_outer_div_body2">   
      
  
                 <div className="clientview_table_inner_div_column_name">  
                 <div  style= {{   width: "10%"  ,  height: "100%"  , backgroundColor : "pink"  ,  borderRight : "1px solid black" }}>
                 <p>Sl No</p>
                 </div> 
                 <div style= {{   width: "25%" , height: "100%"  , backgroundColor : "pink"  , borderRight : "1px solid black" }}>
                   <p>Name of facilitator</p>
                 </div>
                 <div style= {{   width: "25%" ,  height: "100%"  , backgroundColor : "pink" , borderRight : "1px solid black"}  }>
                   <p>Email ID</p>
                 </div>
                 <div style= {{  width: "15%"  ,  height: "100%"  , backgroundColor : "pink"  , borderRight : "1px solid black"}}>
                   <p>Account Status</p>
                 </div> 
                 <div style= {{   width: "25%"  ,  height: "100%"  , backgroundColor : "pink" , borderRight : "1px solid black"}}> 
                  <p>Account status</p>
                 </div> 
  
  
                </div>  
  
  
  
                <div  className="clientview_table_inner_div_table_row">
                   
  
  
                  <div className="clientview_table_inner_div_column_name"    style={{ height: "25%"}}>  
                 <div  style= {{   width: "10%"  ,  height: "100%"  , backgroundColor : "pink"  ,  borderRight : "1px solid black" }}>
                 <p>Sl No</p>
                 </div> 
                 <div style= {{   width: "25%" , height: "100%"  , backgroundColor : "pink"  , borderRight : "1px solid black" }}>
                   <p>Name of facilitator</p>
                 </div>
                 <div style= {{   width: "25%" ,  height: "100%"  , backgroundColor : "pink" , borderRight : "1px solid black"}  }>
                   <p>Email ID</p>
                 </div>
                 <div style= {{  width: "15%"  ,  height: "100%"  , backgroundColor : "pink"  , borderRight : "1px solid black"}}>
                   <p>Account Status</p>
                 </div> 
                 <div style= {{   width: "25%"  ,  height: "100%"  , backgroundColor : "pink" , borderRight : "1px solid black"  , display:"flex"  , flexDirection :"row"  , justifyContent: "space-around"}}> 
                    <div  style= {{ backgroundColor :"yellow"  , width :"40%"  , height:"50%" }} >
                         <p>Status</p>
                    </div> 
  
                    <div  style= {{ backgroundColor :"yellow"  ,  width :"40%"  , height:"50%"  }}>
                       <p>Edit</p>
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

export default FacilitatorView;