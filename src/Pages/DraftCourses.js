import "../Components/Button.js"  ; 
import axios from "axios"  ;  
import { useState  , useEffect  } from "react";
import Table from "../Components/Table.js";


function  DraftCourses() {
           
    const[ data , setData] = useState( []) ; 

    useEffect(() => { 

        axios({ 

         url : "http://3.123.37.47:5000/admin/draftcourse"  ,  
         method : "POST"  , 
         data : {
           
                  "search_key" : "" , 
                "page_no" :  1 ,
                 "limit" : 6   

         }

        }).then( ( res) => {   


           console.log(  res) ;
        } ).catch(( err) => { 
            console.log( "error") ;

         }  ) ; 

    } , [])  
      
    return( 
   <div>  
   <p>hjghjhj</p>   

   <Table /> 
   </div>

    )  ; 

   
}  


export default  DraftCourses ; 