
import {Link } from "react-router-dom"  ;  
import "./Style/Sidebar.css"  ;   
import Badge from '@mui/material/Badge';  

import logo1 from "./Images/logo1.png"  ; 
import LogoutIcon from '@mui/icons-material/Logout';
import { useState  , useEffect  } from "react"; 





// import this component to  render  the sidebar in every page 
function SideBar( props ) {
   
  


 //     console.log( props.info) ;  
  
   const [  userInfo   , setUserInfo ]   = useState({ }  ) ;   
  
    
   useEffect(() => { 

       if(   props.info.type === "system_admin"){
           
          
         let  newUser = {
            name : props.info.name , 
            type : "System Admin"
         }
         setUserInfo( newUser ) ;
       }

       else  if(   props.info.type === "content_admin"){
           
          
         let  newUser = {
            name : props.info.name , 
            type : "Content Admin"
         }
         setUserInfo( newUser ) ;
       } 
     
       else  if(   props.info.type === "program_admin"){
           
          
         let  newUser = {
            name : props.info.name , 
            type : "Program Admin"
         }
         setUserInfo( newUser ) ;
       } 


         

  } , [ props.info.type])  ; 












   return(
    <div  className= "Sidebar"  style={{ borderTopRightRadius: 25  , borderBottomRightRadius : 25}} >
      <div  className="Sidebar-description"   style={{ borderRadius: 25}} >    
           
         <div   className="Sidebar-Program-Name-div"   style={{ borderRadius: 25}} >   
           
                    <div className="Sidebar-Program-Name-inner-div"   style={ { justifyContent : "center"}}>
             
             <img src={ logo1}  alt= { "ccv"}  height={"100%"}  /> 
                     </div>   
         </div>


         <div   className="Sidebar-profile-Name-div" > 
    
                     <div style= {{ height : "80%" , width: "37%"  , backgroundColor : "white"  ,  borderRadius : "50%"   , display : "flex"  , justifyContent : "center"  , alignItems : "center"}}> 

             <p style= {{ fontSize : "24px"  , color: "#5A6199" }} > RM</p>
                       </div>
         </div>  
          

         < div  className="Sidebar-Admin-info-div" > 
                <div  style={{  height: "55%"  , backgroundColor : "#353B55"}}>
                 <p  style={{   fontSize : 20  ,    color : "white"  , fontWeight : 700 }}>{  userInfo.name } </p>
                 </div> 

                 <div  style={{  height: "35%"  , backgroundColor : "#353B55"  , fontWeight : 300}}>
                <p style={{  fontSize : 16  ,  color : "#B7B7D0"  ,  fontWeight : 400  }}>{  userInfo.type } </p>
                  </div>
         </div>  

          

         <div   className="Sidebar-Program-Home-Button-div" >  

         <input style={{ backgroundColor : "#B7B7D0" ,  width : "56.70%" , height : "45.88%"  , borderRadius : 25   , border : "0px"}}  type= "button"   value = "Home" 
         onClick={ () => { }}  /> 

                 
            </div>    



      </div>  


         <div className="Sidebar-logout-box">   

 
                      <div className="Sidebar-logout-button">   


                       <div style={{height : "100%" , width :"30%"  , display : "flex"  , alignItems : "center"}}>
                  
                      <LogoutIcon  sx={{ color: "#F06B6D"  , fontSize : 22    }}/>
                    
                      </div> 

                      <div style={{height : "100%" , width :"60%"   ,  display : "flex"  , alignItems : "center" }}>

                         <p style={{ color : "#F06B6D"  , fontSize : 14  , textAlign : "end"  }}>Log out</p>
                      </div>
                        
                        
      
                      </div>  
         </div>
    </div>

   ) ; 
}

export default SideBar ;  





