
import React from 'react'; 
import "../Components/ConfirmationBox.css" ; 
import { useState  , useEffect} from "react";
import axios from "axios"  ;  
import CloseIcon from '@mui/icons-material/Close'; 
import { Button } from '@mui/base';



const ConfirmationBox = (  props ) => {




  return( props.trigger) ?( 

          <div className="logout_popup" >
        <div   className="logout_popup_inner" >
         <div   className="logout_popup_inner_div1">
           <p>Do you want to logout ?</p> 
         </div> 
         <div>
             <button >
                Yes
             </button>
             <Button>
                No
             </Button>
         </div>

        </div>
       
          </div> ): <div> </div> ; 


}

export default ConfirmationBox  ;