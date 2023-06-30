import {Link } from "react-router-dom"  ;  
import "./Dashboard.css"  ;  
import Sidebar from "./Sidebar.js"  ;  
import Table from "./Components/Table";

  

// frame 24 
function AdminDashboard() {
  return (
    <div className="Dashboard">  
    <div className="Dashboard-sidebar" >
      <Sidebar /> 
    </div> 
     <div className="Dashboard-body">
       <Table  /> 
     </div>
    </div>
  );
}

export default AdminDashboard; 