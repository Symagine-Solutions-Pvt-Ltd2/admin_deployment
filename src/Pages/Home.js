import "../Style/Home.css" ; 
import Sidebar from "../Sidebar"  ;  

function  Home() {    
  
     return(
        <div className="home">  
            <div className="home-sidebar" >
                   <Sidebar /> 
            </div> 
            <div className="home-body">

            <div className="home-body1">
               
               <div className="home-body-inner-description1" > 

              <p>Hi, Mike</p> 

              <p>Ready to start your day with Future Founders?</p>
               </div>
            </div>
            <div className="home-body2">  
             
                <div  className="home-body2-button1" style={{ backgroundColor : "#353B55"}} >
                   <p style={{ color : "white"}}>Dashboard</p>
                </div> 
                <div className="home-body2-button1"  style={{ backgroundColor : "#5A6199"}}>
                <p style={{ color : "white"}}>Create Course</p>
                </div> 
                <div  className="home-body2-button1"  style={{ backgroundColor : "#B7B7D0"}} > 
                <p style={{ color : "white"}}>View Course</p>
                </div>
             
             </div>
              
              <div className="home-body3">
              <div  className="home-body2-button2"   style={{ backgroundColor : "#F06B6E" }}> 
                <p style={{ color : "white"}}>Manage Admin Accounts</p>
                </div>

             <div>
            </div>  



            </div>


            </div>
          
        </div>
     )
}

export default Home ; 