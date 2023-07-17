import Row from "./Row.js";  
import "../Style/Table.css"  ;



const Table = (  props ) => {
     
    let arr = [ 
        
        {  
            
            id  : "1"  ,
            nos : "jhhkjhkh"  ,
         con_per : "bhjhkjhkjh"  , 
         status : "active"
     } 
    , 

    { 
        
        id  : "2"  , 
        nos : "asaeaa"  ,
    con_per : "njkhkhk"  , 
    status : "active"
} 
  , 

  {   
    id  : "3"  ,
    nos : "jhhkjhkh"  ,
  con_per : "bhjhkjhkjh"  , 
  status : "active"
}   , 



{ 
    id  : "4"  ,
    nos : "asaeaa"  ,
con_per : "njkhkhk"  , 
status : "active"
}   , 

{  

    id  : "5"  ,
  nos : "jhhkjhkh"  ,
         con_per : "bhjhkjhkjh"  , 
         status : "active"
     }  , 

    
      
  

    ]  ; 
return( 
    <div className="Table"  style={{ height:props.height  , width: props.width  , backgroundColor : "pink" }} >
         {
         arr.map( (  el )  => (
          <Row />     
          
         ) )}   
</div>
); 
}

export default Table ;