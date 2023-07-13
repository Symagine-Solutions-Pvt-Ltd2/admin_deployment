import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter  , Route , Routes }  from "react-router-dom"  ; 
import './index.css';
import App from './App';  
import Error from './Error' ; 
import AdminDashboard from './AdminDashboard';
import Login  from './Pages/Login' ; 
import PrivateRoutes  from './Utils/PrivateRoutes';
import Form from './Form.js' ; 
import About from './About';
import reportWebVitals from './reportWebVitals'; 
import GettingStarted from './Pages/GettingStarted'; 
import DraftCourses from './Pages/DraftCourses';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
   <BrowserRouter>
     <Routes>
       <Route path= "/"  element ={ <App />}>   
       {/* <Route index  element ={ <AdminDashboard /> } />  */}
       <Route path= "app"  element ={ <div>app</div>} />   
         <Route path="draftcourse"   element= { <DraftCourses /> } />   
      <Route path= "Dashboard"  element ={ <AdminDashboard /> }  />  
      <Route path= "getting"  element ={ <GettingStarted /> }  /> 
       <Route path= "login"  element ={ <Login /> }  />
       <Route path= "about"  element ={ <About /> }  /> 
       <Route path="*"   element= { <Error /> } />  
       </Route>
     </Routes>
  </BrowserRouter> 
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
