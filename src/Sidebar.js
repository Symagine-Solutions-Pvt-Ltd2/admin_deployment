import {Link } from "react-router-dom"  ;  
import "./Style/Sidebar.css"  ;   
import Badge from '@mui/material/Badge';  

       


// frame 24 
function SideBar() {
  return (
    <div className= "Sidebar">  

     <div  className="Sidebar-description">    
        <div   className="Sidebar-Program-Name-div" >   
           
           {/* <div className="Sidebar-Program-Name-inner-div">
              
               <div> 
              <p>logo</p> 
               </div> 
                <div>
                <p>Future Founders</p> 
                </div>  
              
           </div> */}  

   <div style={{ height: "70%"  , width:"100%"  , backgroundColor : "red" , padding : "10px" }}>
                <Badge style={{ height: "70%"  , width:"50%" }}    badgeContent={4}  color="primary"  > 
                   <div  style={{ height: "100%"  , width:"100%"  , backgroundColor : "yellow" }}>  
                    <p>bavsgha</p>
                   </div>             
                </Badge> 
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