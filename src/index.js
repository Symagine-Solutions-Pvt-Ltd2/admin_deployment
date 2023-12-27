import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter  , Route , Routes }  from "react-router-dom"  ; 
import './index.css';
import App from './App';  
import Error from './Error' ; 
import AdminDashboard from './AdminDashboard';

import PrivateRoutes  from './Utils/PrivateRoutes';
import Form from './Form.js' ; 
import About from './About';
import reportWebVitals from './reportWebVitals'; 

import DraftCourses from './Pages/DraftCourses'; 
import Movablelist from './Movablelist';

import Test from './Test'  ;  
import Parent from  "./Pages/Parent" ; 
import AddNewAdmin  from './Pages/AddNewAdmin'; 

  



// real page imports  


import AddAccount from "./Pages/AddAccount"  ; 
import AdminView from "./Pages/AdminView" ;
import BusinessPlan from "./Pages/BusinessPlan"  ; 
import ClientView   from   "./Pages/ClientView" ;  
import Course from './Pages/Course'; 
import SchoolView from './Pages/SchoolView';
import CourseDetails from './Pages/CourseDetails';  
import CreateContent from './Pages/CreateContent'; 
import FacilitatorView from './Pages/FacilitatorView'; 
import FirstView  from  "./Pages/FirstView" ; 
import GettingStarted from './Pages/GettingStarted' ;  
import Login from "./Pages/Login" ;  
import Home from "./Pages/Home" ;    
import Module from './Pages/Module';
import ModuleContentType  from './Pages/ModuleContentType';  
import SecondView from './Pages/SecondView';
import StudentView from './Pages/StudentView';  
import UploadContent from './Pages/UploadContent'; 
import EditAccount from "./Pages/EditAccount"  ; 
import ForgotPassword from "./Pages/ForgotPassword" ; 
import Password from "./Pages/Password" ;  
import  RequireAuth from "./Pages/RequireAuth.js"  ;  




const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
   <BrowserRouter> 


    {/* 
 ...............    experiment 



      <Routes>
       <Route path= "/"  element ={ <App />}>   
        <Route index  element ={ <AdminDashboard /> } />  

       <Route path= "dashboard"  element ={ <AdminDashboard /> }  />
       <Route path= "list"  element ={ <Movablelist /> }  /> 
       <Route path= "home"  element ={ <Home /> }  /> 
       <Route path= "form"  element ={ <Form /> }  /> 
       <Route path= "test"  element ={ <Test /> }  />  
       <Route path= "modulecontenttype"  element ={ <ModuleContentType /> }  />  
       <Route path= "manageadmin"  element ={ <ManageAdmin/> }  />  
       <Route path= "addnewadmin"  element ={ <AddNewAdmin /> }  /> 
       <Route path= "parent"  element ={ <Parent /> }  /> 
      <Route path= "app"  element ={ <div>app</div>} />   
         <Route path="draftcourse"   element= { <DraftCourses /> } /> 
      <Route path= "getting"  element ={ <GettingStarted /> }  /> 
       <Route path= "login"  element ={ <Login /> }  />
       <Route path= "about"  element ={ <About /> }  /> 
       <Route path="*"   element= { <Error /> } />    
       <Route path="upload"   element= { <Upload /> } />   
       <Route path="addprogram"   element= { <Add_Program  /> } />   
       </Route>   
         </Routes>  
 */}

   



         
       {/* // real routes    
       // admin app  routes
 */}
   <Routes> 
      
 <Route path= "/"   >  
 <Route index element={<GettingStarted />} />  
 <Route path= "login"  element ={  <Login/>  } /> 
 <Route path= "forgotpassword"  element ={  <ForgotPassword/>  } />   
 <Route path= "password"  element ={  <Password/>  } />    
   


 <Route  element = {<RequireAuth /> }> 
 <Route path= "home"  >
   <Route index element ={  <Home/> } />  

   <Route path= "dashboard" >
   <Route index  element ={  <FirstView />  } />   
   <Route path= "addprogram"   element ={  <CreateContent/>  }  />   
   <Route path= "editprogram"   element ={  <EditAccount />  }  />     



   
   <Route path= "client" >
     <Route index  element ={  <ClientView/> }  />  
     <Route  path= "addclient"  element ={  <AddAccount/> }  />
     <Route  path= "editclient"  element ={  <EditAccount/> }  />    
     <Route  path= "school"  element ={  <SchoolView/> }  /> 
     <Route  path= "editschool"  element ={  <EditAccount/> }  /> 
     <Route  path= "addschool"  element ={  <AddAccount/> }  /> 
     <Route  path= "facilitator"  element ={  <FacilitatorView/> }  />    
     <Route  path= "addfacilitator"  element ={  <AddAccount/> }  />   
     <Route  path= "editfacilitator"  element ={  <EditAccount/> }  />   



     <Route  path= "student"  >
           <Route index  element ={  <StudentView /> }  />  
           <Route  path= "addstudent"  element ={  <AddAccount/> }  />  
           <Route  path= "editstudent"  element ={  <EditAccount/> }  />    
           <Route  path= "viewplan"  element ={  <BusinessPlan /> }  />    
      </Route>  
   </Route>
   </Route>   


   <Route path= "course"   >  
      <Route index  element ={  <SecondView/>  }  />   
      <Route  path= "savecourse"  element ={  <CreateContent /> }  />    
      <Route  path= "draftcourse" >   
         <Route index  element ={   <Course /> } />  
         <Route  path= "draftcoursedetails"  element ={  <CourseDetails /> }  />  
         <Route  path= "addcoursecontent"  element ={  <SecondView/> }  />      
         <Route  path= "createnewmodule"  element ={  <CreateContent/> }  />
         <Route  path= "createnewworkshop"  element ={  <CreateContent/> }  />
         <Route  path= "createbussinessplan"  element ={  <BusinessPlan /> }  />
         
         <Route  path= "module"    >
            <Route index  element ={  <Module/> } />  
            <Route  path= "selectcontenttype"  element ={  <ModuleContentType /> } />   
            <Route  path= "uploadcontent"  element ={  <UploadContent  /> }  />  
         </Route>
      </Route>

   </Route>


   <Route path= "viewcourse"  >
       <Route index  element ={  <Course /> } />  
       <Route  path= "permanentcoursedetails"  element ={  <CourseDetails /> } />  
   </Route>



   <Route path= "manageadmin"  >  

   
        <Route index  element ={  <AdminView /> } />  
        <Route  path= "addadminaccount"  element ={  <AddAccount /> }  />   
        <Route  path= "editadminaccount"  element ={  <EditAccount /> }  />    
 


   </Route>
 </Route>     
 </Route>

  </Route>
  </Routes>     



       
  </BrowserRouter> 
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
