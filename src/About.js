import './App.css';  
import {Link, useNavigate } from "react-router-dom"  ;   
 
function About() {  
    
    const  navigate = useNavigate() ; 

  const goToApp  = () => {
    
   navigate("/app")  ; 

  }
      


  const goBack  = () => {
    
    navigate( -1 )  ; 
 
   }
     
  return (
    <div className="App">
        <nav>
            <ul>
                <li>  
                    <Link  to={"/"}  > home</Link>
                      </li> 
                <li>  <Link  to={"/dashboard"} > dashboard</Link></li>
                <li>  <Link to={"app"} > contacts </Link></li>
            </ul> 
            <button onClick={() => { goToApp() }}> click here </button>  
            <button onClick={() => { goBack() }}> back button  </button>
        </nav>
    </div>
  );
}

export default About;
