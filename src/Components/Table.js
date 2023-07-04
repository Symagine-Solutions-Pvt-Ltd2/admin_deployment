import Row from "./Row.js";  
import "../Style/Table.css"  ; 


const Table = ( ) => {
     
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
    <div className="Table" >
{arr.map((e)=>{

        return (
        <Row data = { e} className="Row" />
  
      );})  
        } 
     
     <div  className="Footer"> 
      <p>ijikuku</p>
     </div>
</div>
);
}

export default Table ;