
import {Link } from "react-router-dom"  ;  
import "./Style/Sidebar.css"  ;   
import Badge from '@mui/material/Badge';  



// import this component to  render  the sidebar in every page 
function SideBar( props ) {
 
   console.log( props.type) ;  


   return(
    <div  className= "Sidebar" >
      <div  className="Sidebar-description">    
           
         <div   className="Sidebar-Program-Name-div" >   
           
                    <div className="Sidebar-Program-Name-inner-div">
      
                            <div   style={{  backgroundColor : "white"}}> 
                               <p>logo</p> 
                            </div> 
                            <div style={{ color : "white"}}>
                                 <p>Future Founders</p> 
                            </div>  
      
                     </div>   
         </div>


         <div   className="Sidebar-profile-Name-div" > 
    
                     <div style= {{ height : "60%"  , width:"40%"  , backgroundColor : "white"  ,  borderRadius : "50%" }}>
                         <p> RM</p>
                       </div>
         </div>  
          

         < div  className="Sidebar-Admin-info-div" > 
                <div  style={{  height: "55%"  , backgroundColor : "#353B55"}}>
                 <p  style={{ color : "white"}}>Mike Hannigan</p>
                 </div> 

                 <div  style={{  height: "35%"  , backgroundColor : "#353B55"}}>
                <p style={{ color : "white"}}>{  props.type } </p>
                  </div>
         </div>  

          

         <div   className="Sidebar-Program-Home-Button-div" >  

               <div style={{ backgroundColor : "#B7B7D0" ,  width : "51.70%" , height : "45.88%"}}>
               <p>Home</p>
               </div>
                 
            </div>    



      </div>  


         <div className="Sidebar-logout-box">   

 
                      <div className="Sidebar-logout-button">   
                      <div style={{height : "100%" , width :"20%"}}>

                         <p  style={{ color : "red"}}>hgjh</p>
                      </div>
                      <div style={{height : "100%" , width :"80%"}}>

                         <p style={{ color : "red"}}>Log out</p>
                      </div>
                        
      
                      </div>  
         </div>
    </div>

   ) ; 
}

export default SideBar ;  





