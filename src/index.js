import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter  , Route , Routes }  from "react-router-dom"  ; 
import './index.css';
import reportWebVitals from './reportWebVitals'; 

  



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
import Feedback  from './Pages/Feedback.js';
import StudentAnswer from './Pages/StudentAnswer.js';
import PrivacyPolicyAndTC from "./Pages/PrivacyPolicyAndTC.js"  ; 




const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
   <BrowserRouter> 


         
       {/* // real routes    
       // admin app  routes
 */}
   <Routes> 
      
 <Route path= "/"   >  
 <Route index element={<GettingStarted />} />   
 <Route path= "login"  element ={  <Login/>  } /> 
 <Route path= "forgotpassword"  element ={  <ForgotPassword/>  } />   
 <Route path= "password"  element ={  <Password/>  } />    
 <Route path= "policy"  element ={  <PrivacyPolicyAndTC/>  } />  
   


 <Route  element = {<RequireAuth /> }> 
 <Route path= "home"  > 
   <Route index element ={  <Home/> } />  
   <Route path= "resetpassword"  element ={  <Password/>  } />   
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
           <Route  path= "viewplan"  element ={  <Feedback /> }  />   
           <Route  path= "studentanswer"  element ={  <StudentAnswer /> }  />   
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
