import "../Style/BusinessPlan.css" ; 
import { useState  } from "react"; 
import Sidebar from "../Sidebar"  ; 
import {Link , useNavigate  , useLocation} from "react-router-dom" ; 

 

function BusinessPlan() {    
     
    const [ businessPlan  , setBusinessPlan ] =  useState( "")  ;
    const [ typeOfPlan  , setTypeOfPlan  ] =  useState( "bp" )  ;
    const [ taskName   , setTaskName ] =  useState( "bp" )  ;
    const [ noOfCharacter  , setNoOfCharacter] =  useState( "bp" )  ;

    const  navigate = useNavigate() ;  
    const goToNext = () => {
  
      
        console.log("ASJghshGHS") ;  
 
 
 
 
       }  
  



       const handleChange1 = ( event  ) => {
            

        console.log( event.target.value) ;
        setBusinessPlan( event.target.value) ;
     
       }   ;

        
       const handleChange2 = ( event  ) => {
         
        
        console.log( event.target.value) ;
        setTypeOfPlan( event.target.value) ;

       }   ;

        
       
       const handleChange3 = ( event  ) => {
          
        
        console.log( event.target.value) ;
        setTaskName( event.target.value) ;

       }   ;


       
       const handleChange4  = ( event  ) => {
          
        
        console.log( event.target.value) ;
        setNoOfCharacter( event.target.value) ;

       }   ;


        


    return(
   <div className="BusinessPlan" > 

    <div className="BusinessPlan_Sidebar" >
       <Sidebar />
    </div> 
    <div className="BusinessPlan_Body" >   


    <div  className="clientview_body1"> 
    
             </div>



    <div className="clientview_table_outer_div_body2"  style={{backgroundColor : "#FFF"}}>   
     



      <div  className="clientview_table_inner_div_column_name"  style= {{    alignItems : "center"  , justifyContent : "center" ,  borderBottom : "1px solid black" }}>
       



      <input type="text" 
              placeholder="Enter Bussiness Plan Name"
              value= {businessPlan }    onChange={ handleChange1 }   
       style = {{  height : "60%"   , width  : "60%" , border : "1px solid red"  ,  borderRadius : 15}}
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
    <div style= {{   width: "20%" , height: "100%"   , borderRight : "1px solid black"  , display: "flex"  , alignItems: "center" , justifyContent : "center"   }}> 

    <input   style ={{ height: "60%"  , borderRadius : 15  }}   type="text"  value= {  typeOfPlan }    onChange={ handleChange2 }  /> 
    </div> 

    <div style= {{   width: "20%" ,  height: "100%"  , borderRight : "1px solid black"  ,   display: "flex"  , alignItems: "center" , justifyContent : "center"}  }>
    <input style ={{ height: "60%"  , borderRadius : 15  }}  type="text"  value= { taskName }    onChange={ handleChange3 }     /> 
    </div>


    <div style= {{  width: "45%"  ,  height: "100%"   , borderRight : "1px solid black" , display: "flex"  , alignItems: "center" , justifyContent : "center"}}>
    <input  style ={{ height: "60%"  , borderRadius : 15  ,  width :"85%" }}  type="text"   value= { noOfCharacter }    onChange={ handleChange4 }    /> 
    </div> 
  
    
   </div>  


   <div className="clientview_table_inner_div_column_name" style={{ justifyContent : "flex-end"  , backgroundColor : "#FFF" }}>    


   <button onClick={ () => { goToNext() } }  className="add_new_program_button"  style ={{  height : "50%"  , border : "0px solid black"}} >
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