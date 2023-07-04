import {Link } from "react-router-dom"  ;  
import "./Dashboard.css"  ;  
import Sidebar from "./Sidebar.js"  ;  
import Table from "./Components/Table";

  

// frame 24 
function   Form() {
  return (
    <div className="Form">  
    <div className="sidebar" >
      <Sidebar /> 
    </div> 
     <div className="Dashboard-body">
         <input   placeholder="iusiouo"/> 
     </div>
    </div>
  );
}

export default  Form; 