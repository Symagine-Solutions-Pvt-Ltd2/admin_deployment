import Child from "./Child"  ;  
import { useState } from "react";

function   Parent(  ) {  
   
const  [ name1 , setName1 ] = useState("") ; 
  
   
 const  handleCallback = ( childdata ) => {
   
   setName1(  childdata)  ;  

   }

    return (

        <div>
            <Child parentCallback={ handleCallback} />
            <p>   {name1} </p> 
        </div>
    )
} 


export default  Parent;