import "./Style/AdminDashboard.css"
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
      <div className="Dashboard-body-inner"> 
        <Table  width = "100%"   height = "100%"   /> 
      </div>
     </div>
    </div>
  );
}

export default AdminDashboard; 