import {Link } from "react-router-dom"  ;  
import "./Style/Sidebar.css"  ; 

// frame 24 
function SideBar() {
  return (
    <div className= "Sidebar">  

     <div  className="Sidebar-description">    
        <div   className="Sidebar-Program-Name-div" >   
           
           <div className="Sidebar-Program-Name-inner-div">
               <div> 
              <p>logo</p> 
               </div> 
                <div>
                <p>Future Founders</p> 
                </div>

           </div>
        </div>
        <div   className="Sidebar-profile-Name-div" > 
         <p >ajaklsaklsk</p>
        </div>  

        < div  className="Sidebar-Admin-info-div" > 
         <p>ajjkakAHKJXJKXHAK</p>
        </div>
        <div   className="Sidebar-Program-Home-Button-div" > 
         <p> home button </p>
        </div>    



     </div> 
     <div className="Sidebar-logout-box">  
     <div className="Sidebar-logout-button">
     <p>  jkjkjkjkj</p> 
     </div>
     </div>
    </div>
  );
}

export default SideBar ; 