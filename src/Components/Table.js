import Row from "./Row.js";  
import "../Style/Table.css"  ; 


const Table = (  props ) => {
     
    let arr = [ 
        
        { nos : "jhhkjhkh"  ,
         con_per : "bhjhkjhkjh"  , 
         status : "active"
     } 
    , 

    { nos : "asaeaa"  ,
    con_per : "njkhkhk"  , 
    status : "active"
} 
  , 

  { nos : "jhhkjhkh"  ,
  con_per : "bhjhkjhkjh"  , 
  status : "active"
}   , 



{ nos : "asaeaa"  ,
con_per : "njkhkhk"  , 
status : "active"
}   , 

{ 
  nos : "jhhkjhkh"  ,
         con_per : "bhjhkjhkjh"  , 
         status : "active"
     }  , 

    
      
  

    ]  ; 
return( 
    <div className="Table"  style={{ height:props.height  , width: props.width  , backgroundColor : "pink" }} >
       <p>trtyryyyyyyyyyyyyyyyyyyy</p>   
</div>
);
}

export default Table ;