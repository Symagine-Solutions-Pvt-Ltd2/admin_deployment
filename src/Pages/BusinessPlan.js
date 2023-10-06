import "../Style/BusinessPlan.css" ; 
import { useState  } from "react"; 
import Sidebar from "../Sidebar"  ; 
import {Link , useNavigate  , useLocation} from "react-router-dom" ; 

 

function BusinessPlan() {    
     
    const [ businessPlan  , setBusinessPlan ] =  useState( "bp" )  ;
    const [ typeOfPlan  , setTypeOfPlan  ] =  useState( "bp" )  ;
    const [ taskName   , setTaskName ] =  useState( "bp" )  ;
    const [ noOfCharacter  , setNoOfCharacter] =  useState( "bp" )  ;

    const  navigate = useNavigate() ;  
    const goToNext = () => {
  
        navigate(  "/home/dashboard/client/addclient"   ,  { replace : false}  ) ; 
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
             <p>hjxgajgj</p> 
             </div>



    <div className="clientview_table_outer_div_body2">   
    
      <div  className="clientview_table_inner_div_column_name"  style= {{    backgroundColor : "red"  , alignItems : "center"  , justifyContent : "center",   marginBottom : "1%"   }}>
      
      <input type="text" 
              placeholder="Enter Bussiness Plan Name"
              value= {businessPlan }    onChange={ handleChange1 }  
              /> 

      </div>



    <div className="clientview_table_inner_div_column_name"   style={{   marginBottom : "1%" }} >  
    <div  style= {{   width: "15%"  ,  height: "100%"  , backgroundColor : "pink"  ,  borderRight : "1px solid black" }}>
    <p>Sl No</p>
    </div> 
    <div style= {{   width: "20%" , height: "100%"  , backgroundColor : "pink"  , borderRight : "1px solid black" }}>
      <p>Type</p>
    </div>
    <div style= {{   width: "20%" ,  height: "100%"  , backgroundColor : "red" , borderRight : "1px solid black"}  }>
      <p>Name of task</p>
    </div>
    <div style= {{  width: "45%"  ,  height: "100%"  , backgroundColor : "pink"  , borderRight : "1px solid black"}}>
      <p>Number of Characters</p>
    </div> 
  
      

   </div>  
    

   <div className="clientview_table_inner_div_column_name">  
    <div  style= {{   width: "15%"  ,  height: "100%"  , backgroundColor : "pink"  ,  borderRight : "1px solid black" }}>
     <p> si no </p>
    </div> 
    <div style= {{   width: "20%" , height: "100%"  , backgroundColor : "pink"  , borderRight : "1px solid black" }}>
    <input type="text"  value= {  typeOfPlan }    onChange={ handleChange2 }  /> 
    </div>
    <div style= {{   width: "20%" ,  height: "100%"  , backgroundColor : "pink" , borderRight : "1px solid black"}  }>
    <input type="text"  value= { taskName }    onChange={ handleChange3 }     /> 
    </div>
    <div style= {{  width: "45%"  ,  height: "100%"  , backgroundColor : "pink"  , borderRight : "1px solid black"}}>
    <input type="text"   value= { noOfCharacter }    onChange={ handleChange4 }    /> 
    </div> 
  
    
   </div> 
   

   </div>   
   


   <div className="body3"> 

<div onClick={ () => { goToNext() } } className="add_new_program_button">
  <p>Submit</p>
</div>

</div>

    


    </div>

   </div>
    )
} 

export default BusinessPlan;