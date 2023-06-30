 
 import Cell from "./Cell.js"  ;   
 import "../Style/Row.css"  ;
 
 const Row = ( props) => {  
     
    console.log( "ihkh") ; 
     console.log( props.data ) ;  
     let data = props.data ;
  return(
    <div  className="Row"> 
      {/* <p> { data.nos} </p>  */}
       <Cell /> 
    </div>
  )  ;
} 


export default Row ;