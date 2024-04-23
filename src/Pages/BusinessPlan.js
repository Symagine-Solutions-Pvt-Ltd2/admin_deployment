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
    const [ selectedTaskType  , setSelectedTaskType  ] =  useState( "") ; 
    const  navigate = useNavigate() ;  
  








    const handleCheckboxChange = (  option  ) => {
            
      //console.log( "kjhk") ; 
         //console.log( option) ; 
         setSelectedTaskType( option)  ;

    }
 
    


     




    const submitBplan = () => {
  
        
      console.log ( businessPlan ) ;   
      console.log ( typeOfPlan ) ;  
      console.log ( taskName  ) ;   
      console.log ( noOfCharacter  ) ; 
    
        

      if( selectedTaskType !== ""){
       axios({ 
      
        url : "https://learn-up.app/admin/bp_registration"  ,   

        method : "POST"  , 
        data : {
          
          "task_name": taskName ,
          "bp_name": businessPlan , 
          "total_character": noOfCharacter, 
          "course_name": location.state.courseName  , 
          "sub_type" : selectedTaskType
        }
  
       }).then( ( res) => {   
  
            //console.log( res) ; 
            
            
            if(   res.data.message === "Registered Successfully."){
               
              alert(  "Registered Successfully" );
              navigate(  "/home/course/draftcourse/addcoursecontent"  ,    { state: {    courseName : location.state.courseName  ,  typeId : "addcoursecontent"  ,        userInfo :  location.state.userInfo }}   ,      { replace : false} ) ;
            } else{

              alert(  res.data.message) ;  
            }




       } ).catch(( err) => { 
           //console.log( "error") ;
  
        }  ) ;  
   
      }else{

        alert( "Please select the type of business plan !")
      }
 
 
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
     



      <div  className="clientview_table_inner_div_column_name"  style= {{    alignItems : "center"  , justifyContent : "center" ,  borderBottom : "1px solid #B6B7D0"  ,  borderTop  : "1px solid #B6B7D0"    }}>
       



      <input type="text" 
              placeholder="Enter Bussiness Plan Name"
              value= {businessPlan }    onChange={ (  e) => {  setBusinessPlan( e.target.value)} }   
       style = {{  height : "60%"   , width  : "60%" , border : "1px solid #5E82F4"  ,  borderRadius : 15}}
              /> 

      </div>


 


    <div className="clientview_table_inner_div_column_name"   style={{backgroundColor : "#FFF"}}   > 

    <div  className="BusinessPlan_inner_box"  style= {{   width: "8%"  ,  height: "100%"    ,  borderRight : "1px solid #B6B7D0" }}>
    <p>Sl No</p>
    </div> 
    <div   className="BusinessPlan_inner_box"  style= {{   width: "47%" , height: "100%"  , borderRight : "1px solid #B6B7D0" }}>
      <p>Type</p>
    </div>
    <div  className="BusinessPlan_inner_box"   style= {{   width: "30%" ,  height: "100%"  , borderRight : "1px solid #B6B7D0"}  }>
      <p>Name of task</p>
    </div>
    <div  className="BusinessPlan_inner_box"   style= {{  width: "15%"  ,  height: "100%" }}>
      <p  style={{ textAlign : "center"}} >Number of Characters</p>
    </div> 
  
      

   </div>  
    

   <div className="clientview_table_inner_div_column_name"   style={{   height : "30%"   , backgroundColor : "#FFF"  , borderBottom : "1px solid #B6B7D0"  , borderTop : "1px solid #B6B7D0"}}   >  


    <div  style= {{   width: "8%"  ,  height: "100%"   ,  borderRight : "1px solid #B6B7D0"  ,   display: "flex"  , alignItems: "center" , justifyContent : "center" }}>
     <p>1</p>
    </div> 
    <div style= {{   width: "47%" , height: "100%"   , borderRight : "1px solid #B6B7D0"  , display: "flex"  , alignItems: "center" , justifyContent : "space-around"        }}> 

  {/*   <input   style ={{ height: "60%"  , borderRadius : 15  }}   type="text"  value= {  typeOfPlan }    onChange={ (e) => {  setTypeOfPlan( e.target.value)} }  />   

 */}  
  
  <div  style= {{  width : "30%"   ,  height : "35%"  , backgroundColor : "#FCC046"   ,  display : "flex"   , alignItems : "center"  , justifyContent : "center"  , borderRadius : "20px"}}>  

  <div  style={{  height : "50%"  ,  width : "50%"   ,  display : "flex"   , alignItems : "flex-end"  , justifyContent : "center" }}  >
 <p style = {{ fontSize : 16   , textAlign : "center"  , fontWeight : "500"}} >Text</p>   
  </div> 
 

 <div  style={{  height : "50%"  ,   width : "50%"  , display : "flex"   , alignItems :  "flex-end"  , justifyContent : "center"  , paddingBottom : "2px"}}>
   <input  type="checkbox"  checked = { selectedTaskType === "text"  }    onChange={  () => handleCheckboxChange("text" ) }     />  
  </div> 

  </div>  
   

  <div  style= {{  width : "30%"   ,  height : "35%"  , backgroundColor : "#FCC046"   ,  display : "flex"   , alignItems : "center"  , justifyContent : "center"  ,  borderRadius : "20px"}}>  

<div  style={{ height : "50%"  , width : "50%"   ,  display : "flex"   , alignItems : "flex-end"  , justifyContent : "center" }}  >
<p style = {{ fontSize : 16   , textAlign : "center"  , fontWeight : "500"}} >Image</p>   
</div> 


<div  style={{ height : "50%"   , width : "50%"  , display : "flex"   , alignItems :  "flex-end"  , justifyContent : "center"  , paddingBottom : "2px"}}>
 <input  style={{ alignItems : "center"}}   type="checkbox"  checked = {  selectedTaskType === "image"  }    onChange={  () => handleCheckboxChange( "image") }     />  
</div> 

</div>   


<div  style= {{  width : "30%"   ,  height : "35%"  , backgroundColor : "#FCC046"   ,  display : "flex"   , alignItems : "center"  , justifyContent : "center"  ,  borderRadius : "20px"}}>  

  <div  style={{ height : "50%"  , width : "50%"   ,  display : "flex"   , alignItems : "flex-end"  , justifyContent : "center" }}  >
 <p style = {{ fontSize : 16   , textAlign : "center"  , fontWeight : "500"}} >Both</p>   
  </div> 
 

 <div  style={{ height : "50%"   , width : "50%"  , display : "flex"   , alignItems :  "flex-end"  , justifyContent : "center"  , paddingBottom : "2px"}}>
   <input  style={{ alignItems : "center"}}   type="checkbox" checked = {  selectedTaskType ===  "both" }    onChange={  () => handleCheckboxChange( "both") }    />  
  </div> 

  </div>  






    </div > 

    <div style= {{   width: "30%" ,  height: "100%"  , borderRight : "1px solid #B6B7D0"  ,   display: "flex"  , alignItems: "center" , justifyContent : "center"}  }>
    <input style ={{ height: "40%"  , borderRadius : 15  }}  type="text"  value= { taskName }    onChange={ (e) => {  setTaskName( e.target.value)} }     /> 
    </div>


    <div style= {{  width: "15%"  ,  height: "100%"   , display: "flex"  , alignItems: "center" , justifyContent : "center"}}>
    <input  style ={{ height: "40%"  , borderRadius : 15  ,  width :"85%" }}  type="number"   value= { noOfCharacter }    onChange = { (e) => {  setNoOfCharacter( e.target.value)} }   /> 
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