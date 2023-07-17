import {  DragDropContext  , Draggable, Droppable  } from "react-beautiful-dnd"  ;  


function  Movablelist() {    
     
   let arr = [ 
        
      {  
          
          id  : "1"  ,
          nos : "jhhkjhkh"  ,
          con_per : "ele111111"  , 
          status : "active"
   } 
  , 

  { 
      
      id  : "2"  , 
      nos : "asaeaa"  ,
      con_per : "ele2222"  , 
      status : "active"
} 
, 

{   
       id  : "3"  ,
       nos : "jhhkjhkh"  ,
       con_per : "ele333333"  , 
       status : "active"
}   , 



{ 
         id  : "4"  ,
         nos : "asaeaa"  ,
         con_per : "ele444444"  , 
         status : "active"
}   , 

{  

       id  : "5"  ,
       nos : "jhhkjhkh"  ,
       con_per : "ele555555"  , 
       status : "active"
   }  , 

  
    


  ]  ;   

     return ( 


        <div style= {{ width: "100%"   , height : "100%" , padding : "20px"  , backgroundColor : "white"}}> 
        <DragDropContext  onDragEnd={(...props) => {
         console.log( props);
        }}>    
           <Droppable   droppableId="droppable-1" > 

           {(provided, _) => (

          <div   ref={ provided.innerRef } { ...provided.droppableProps}   style={{  width: "60%"   , height : "50%"   , backgroundColor : "green"}}>  
            {

               arr.map(( item , i ) => (
                      
                  <Draggable key={ item.id}   draggableId={ "draggable-" + item.id}   index= { i }>   

                   {(provided, snapshot ) => (
                   <div  ref={ provided.innerRef } { ...provided.draggableProps}  style={{
                     ...provided.draggableProps.style,
                     boxShadow: snapshot.isDragging
                       ? "0 0 .4rem #666"
                       : "none",
                   }}  > 
                 <p  { ...provided.dragHandleProps }> {item.con_per}</p>
                     </div>  
                   )} 
                  </Draggable> 
               ))}
                {provided.placeholder}
         </div>  
         )}  
         </Droppable>
         </DragDropContext>
        </div>
     )
}

/*  

<Draggable key="1" draggableId="drag-1"  index="1"> 
<div style= {{ width: "90%"   , height : "15%" ,  backgroundColor : "pink"  , margin : "1px" }}> 
   <p>ele1111</p>
</div>  
</Draggable> 

<Draggable  key="2">
<div style= {{ width: "90%"   , height : "15%" ,  backgroundColor : "pink"  ,  margin : "1px"}}> 
   <p>ele2222</p>
</div> 
</Draggable> 

<Draggable  key="3">
<div style= {{ width: "90%"   , height : "15%" ,  backgroundColor : "pink"  ,  margin : "1px"}}> 
   <p> ele333333 </p>
</div>
</Draggable>   


<Draggable key="4" >
<div style= {{ width: "90%"   , height : "15%" ,  backgroundColor : "pink"  ,  margin : "1px"}}> 
   <p> ele44444 </p>
</div>   
</Draggable> 
 


<Draggable  key="5">
<div style= {{ width: "90%"   , height : "15%" ,  backgroundColor : "pink"  ,  margin : "1px"}}> 
   <p> ele 555555 </p>
</div>  
</Draggable>  */  



export default    Movablelist ; 