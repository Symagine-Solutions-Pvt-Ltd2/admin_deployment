import "../Style/BusinessPlan.css" ; 
import { useState  } from "react"; 
import Sidebar from "../Sidebar"  ; 
import {Link , useNavigate  , useLocation} from "react-router-dom" ;  
import axios from "axios"  ;  

 

function BusinessPlan() {    
      
  const location = useLocation();  


  
  console.log ( "business plan" ) ; 
  console.log ( location.state.courseName   ) ;

    const [ businessPlan  , setBusinessPlan ] =  useState( "")  ;
    const [ typeOfPlan  , setTypeOfPlan  ] =  useState( "" )  ;
    const [ taskName   , setTaskName ] =  useState( "" )  ;
    const [ noOfCharacter  , setNoOfCharacter] =  useState( "" )  ;

    const  navigate = useNavigate() ;  



    const submitBplan = () => {
  
        
      console.log ( businessPlan ) ;   
      console.log ( typeOfPlan ) ;  
      console.log ( taskName  ) ;   
      console.log ( noOfCharacter  ) ; 
    

       axios({ 
      
        url : "http://3.123.39.199:5000/admin/bp_registration"  ,   

        method : "POST"  , 
        data : {
          
          "task_name": taskName ,
          "bp_name": businessPlan , 
          "total_character": noOfCharacter, 
          "course_name": location.state.courseName 
        }
  
       }).then( ( res) => {   
  
            console.log( res) ; 
            
            
            if(   res.data.message === "Registered Successfully."){
               
              alert(  "Registered Successfully" );
              navigate(  "/home/course/draftcourse/addcoursecontent"  ,    { state: {    courseName : location.state.courseName  ,  typeId : "addcoursecontent"  ,        userInfo :  location.state.userInfo }}   ,      { replace : false} ) ;
            } else{

              alert(  res.data.message) ;  
            }




       } ).catch(( err) => { 
           console.log( "error") ;
  
        }  ) ;  
   
 
 
 
       }  
  


    

    return(
   <div className="BusinessPlan" > 

    <div className="BusinessPlan_Sidebar" >
       <Sidebar  info = {  location.state.userInfo} />
    </div> 
    <div className="BusinessPlan_Body" >   


    <div  className="clientview_body1"> 
    
             </div>



    <div className="clientview_table_outer_div_body2"  style={{backgroundColor : "#FFF"}}>   
     



      <div  className="clientview_table_inner_div_column_name"  style= {{    alignItems : "center"  , justifyContent : "center" ,  borderBottom : "1px solid black" }}>
       



      <input type="text" 
              placeholder="Enter Bussiness Plan Name"
              value= {businessPlan }    onChange={ (  e) => {  setBusinessPlan( e.target.value)} }   
       style = {{  height : "60%"   , width  : "60%" , border : "1px solid #5E82F4"  ,  borderRadius : 15}}
              /> 

      </div>


 


    <div className="clientview_table_inner_div_column_name"   style={{backgroundColor : "#FFF"}}   > 

    <div  className="BusinessPlan_inner_box"  style= {{   width: "15%"  ,  height: "100%"    ,  borderRight : "1px solid black" }}>
    <p>Sl No</p>
    </div> 
    <div   className="BusinessPlan_inner_box"  style= {{   width: "20%" , height: "100%"  , borderRight : "1px solid black" }}>
      <p>Type</p>
    </div>
    <div  className="BusinessPlan_inner_box"   style= {{   width: "20%" ,  height: "100%"  , borderRight : "1px solid black"}  }>
      <p>Name of task</p>
    </div>
    <div  className="BusinessPlan_inner_box"   style= {{  width: "45%"  ,  height: "100%"  , borderRight : "1px solid black"}}>
      <p>Number of Characters</p>
    </div> 
  
      

   </div>  
    

   <div className="clientview_table_inner_div_column_name"   style={{backgroundColor : "#FFF"  , borderBottom : "1px solid black"  , borderTop : "1px solid black"}}   >  
    <div  style= {{   width: "15%"  ,  height: "100%"   ,  borderRight : "1px solid black"  ,   display: "flex"  , alignItems: "center" , justifyContent : "center" }}>
     <p>1</p>
    </div> 
    <div style= {{   width: "20%" , height: "100%"   , borderRight : ""  , display: "flex"  , alignItems: "center" , justifyContent : "center"   }}> 

    <input   style ={{ height: "60%"  , borderRadius : 15  }}   type="text"  value= {  typeOfPlan }    onChange={ (e) => {  setTypeOfPlan( e.target.value)} }  /> 
    </div> 

    <div style= {{   width: "20%" ,  height: "100%"  , borderRight : "1px solid black"  ,   display: "flex"  , alignItems: "center" , justifyContent : "center"}  }>
    <input style ={{ height: "60%"  , borderRadius : 15  }}  type="text"  value= { taskName }    onChange={ (e) => {  setTaskName( e.target.value)} }     /> 
    </div>


    <div style= {{  width: "45%"  ,  height: "100%"   , borderRight : "1px solid black" , display: "flex"  , alignItems: "center" , justifyContent : "center"}}>
    <input  style ={{ height: "60%"  , borderRadius : 15  ,  width :"85%" }}  type="number"   value= { noOfCharacter }    onChange = { (e) => {  setNoOfCharacter( e.target.value)} }   /> 
    </div> 
  
    
   </div>  


   <div className="clientview_table_inner_div_column_name" style={{ justifyContent : "flex-end"  , backgroundColor : "#FFF" }}>    


   <button onClick={ () => {  submitBplan() } }  className="add_new_program_button"  style ={{  height : "50%"  , border : "0px solid black"}} >
   Submit
   </button>
   </div>

    

   </div>   
   


   <div className="body3"> 


</div>

    


    </div>

   </div>
    )
} 

export default BusinessPlan;