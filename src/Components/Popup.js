


import React from 'react'; 
import "../Components/Popup.css" ; 
import { useState  , useEffect} from "react";



const Popup = (  props ) => {
  
  








    return( props.trigger) ?( 

            <div className="popup" >
              <div className="popup-inner" > 
                     <button className="close-btn" onClick={ () => {  props.setTrigger( false ) }  }>close</button>  
                    {  props.children }
              </div>
      
            </div> ): <div> </div> ; 


}

export default Popup  ;