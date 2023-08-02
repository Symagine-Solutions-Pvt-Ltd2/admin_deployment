import { useState } from "react"; 
import Sidebar  from "../Sidebar" ;   
import {Link , useNavigate  , useLocation} from "react-router-dom" ; 
import "../Style/AddAccount.css"





function AddAccount() {     
    
    // const [ name , setName ]   = useState( location.state.name  ) ; 
  
    const [ typeId , setTypeId ] =  useState( "system_admin_admin") ;  
    const  navigate = useNavigate() ; 

    const onTrigger = (  event  ) => { 
    

      console.log( typeId) ; 
      console.log("bhjgjgj") ; 
        
      navigate(  "/home/dashboard/client"   ,  { replace : false}  )   ;
  
  
      event.preventDefault();
    }
  
    
    const addFacilitator  = (  event  ) => { 
    

      console.log( typeId) ; 
      console.log("bhjgjgj") ; 
        
      navigate(  "/home/dashboard/client/facilitator"   ,  { replace : false}  )   ;
  
  
      event.preventDefault();
    }
  
  

    const addSchool = ( event)  => { 
    

        console.log( typeId) ; 
        console.log("bhjgjgj") ; 
          
        navigate(  "/home/dashboard/client/school"   ,  { replace : false}  )   ;
    
    
        event.preventDefault();
      } 


      const addAdmin = ( event)  => { 
    

        console.log( typeId) ; 
        console.log("bhjgjgj") ; 
          
        navigate(  "/home/manageadmin"   ,  { replace : false}  )   ;
    
    
        event.preventDefault();
      }
    
    

   

    switch( typeId )  { 


      case "system_admin_client" :   

      return( 
  
  
          <div className="form_outer_div">
     
          <div className="form_outer_div_sidebar" >
            <Sidebar /> 
          </div>   
  
  
          
           <div className="form_outer_div_body">  
        


           
           <form className="addaccount_form" onSubmit={onTrigger }    >    
      
               <div className="addaccount_form_row">
                           <div className="admin_Form-Description" >   
                          <p>Name of client</p> 
                          </div>        
                          <div className="admin_Form-Input" >         
                          <input type="text"
                                  name="myname"
                               
                                  className="admin_input-box"
                                  /> 
                          </div>  
                </div> 
       
                
                <div className="addaccount_form_row">
                           <div className="admin_Form-Description" >   
                          <p>Email id</p> 
                          </div>        
                          <div className="admin_Form-Input" >         
                          <input type="text"
                                  name="myname"
                               
                                  className="admin_input-box"
                                  /> 
                          </div>  
                </div> 
                 

                <div className="addaccount_form_row">
                           <div className="admin_Form-Description" >   
                          <p>Password</p> 
                          </div>        
                          <div className="admin_Form-Input" >         
                          <input type="text"
                                  name="myname"
                               
                                  className="admin_input-box"
                                  /> 
                          </div>  
                </div> 
             
                <div className="addaccount_form_row">
                           <div className="admin_Form-Description" >   
                          <p>Repeat Password</p> 
                          </div>        
                          <div className="admin_Form-Input" >         
                          <input type="text"
                                  name="myname"
                               
                                  className="admin_input-box"
                                  /> 
                          </div>  
                </div> 
                
                <div className="addaccount_form_row">
                           <div className="admin_Form-Description" >   
                          <p>Name of contact person</p> 
                          </div>        
                          <div className="admin_Form-Input" >         
                          <input type="text"
                                  name="myname"
                               
                                  className="admin_input-box"
                                  /> 
                          </div>  
                </div> 
                

                <div className="addaccount_form_row">
                <div className="admin_Form-Description" >   
                          <p>Program Assigned</p> 
                </div>     

                <div className="admin_Form-Input" >         
                        
                    <div  style={{  width : "87.46%" , height: "100%"  ,  display : "flex" , flexDirection :  "row" , justifyContent : "space-around" , alignItems : "center"  , backgroundColor : "yellow"}}>


                              <div style={ {  width : "25.87%"  , height : "50%" , backgroundColor : "pink" , borderRadius : "20px" ,  display: "flex"  , flexDirection : "row" ,  overflow : "hidden"}}>
  
                                        <div style = {{  backgroundColor : "red" ,  width : "70%"  , justifyContent : "center" , display : "flex"  , alignItems : "center"}}>
                                        <p >Content Admin</p>   
                                        </div>


                                         <div style={{ backgroundColor : "beige" , width : "30%" , display : "flex" ,   alignItems : "center" , justifyContent : "center"}}>
                                         <input   type="checkbox"
                                           name="vall" />   
                                          </div>

                                </div>   



                                <div style={ {  width : "25.87%"  , height : "50%" , backgroundColor : "pink" , borderRadius : "20px" ,  display: "flex"  ,   flexDirection : "row"  , overflow : "hidden"}}>
  
                                            <div style = {{  backgroundColor : "red" ,  width : "70%"  , justifyContent : "center" , display : "flex"  , alignItems : "center"}}>
                                            <p >Content Admin</p>   
                                            </div>


                                            <div style={{ backgroundColor : "beige" , width : "30%" , display : "flex" ,   alignItems : "center" , justifyContent : "center"}}>
                                            <input   type="checkbox"
                                            name="vall" />   
                                            </div>



                                </div> 


                                <div style={ {  width : "25.87%"  , height : "50%" , backgroundColor : "pink" , borderRadius : "20px" ,  display: "flex"  ,   flexDirection : "row"  , overflow : "hidden"}}>
  
                               <div style = {{  backgroundColor : "red" ,  width : "70%"  , justifyContent : "center" , display : "flex"  , alignItems : "center"}}>
                             <p >Content Admin</p>   
                              </div>


                              <div style={{ backgroundColor : "beige" , width : "30%" , display : "flex" ,   alignItems : "center" , justifyContent : "center"}}>
                              <input   type="checkbox"
                              name="vall" />   
                             </div>



                              </div> 





                  </div>    


                  <div style={{  width : "12.54%" , height: "100%"  ,  display : "flex" , flexDirection :  "row" , justifyContent : "space-around" , alignItems : "center"  , backgroundColor : "red"}}  >



                    </div>
          </div>  
    </div> 
               

                <div className="addaccount_form_row">
                           <div className="admin_Form-Description" >   
                          <p>No of students assigend</p> 
                          </div>        
                          <div className="admin_Form-Input" >         
                          <input type="text"
                                  name="myname"
                               
                                  className="admin_input-box"
                                  /> 
                          </div>  
                </div> 
       
      
      
  
           
           
  
                          <div  className="addaccount_form_row_btn_div"> 
                          <input className="addaccount_form_row_btn" type="submit" value="Submit" /> 
                          </div>
                        
                      </form>
  
                  <div > 

                  </div>
      
           </div>
          
            </div>
      )   ;  
       






      case "system_admin_facilitator" :   

      return( 
  
  
          <div className="form_outer_div">
     
          <div className="form_outer_div_sidebar" >
            <Sidebar /> 
          </div>   
  
  
          
           <div className="form_outer_div_body">  
        


           
           <form className="addaccount_form"   style= {{  height : "65.99%" }}   onSubmit={  addFacilitator }    >    
      
               <div className="addaccount_form_row"  style= {{  height : "20%" }}>
                           <div className="admin_Form-Description" >   
                          <p>Name of facilitator</p> 
                          </div>        
                          <div className="admin_Form-Input" >         
                          <input type="text"
                                  name="myname"
                               
                                  className="admin_input-box" 
                                  style={ { borderRadius : "16px"}}
                                  /> 
                          </div>  
                </div> 
       
                
                <div className="addaccount_form_row"  style= {{  height : "20%" }}>
                           <div className="admin_Form-Description" >   
                          <p>Email id</p> 
                          </div>        
                          <div className="admin_Form-Input" >         
                          <input type="text"
                                  name="myname"
                               
                                  className="admin_input-box"  
                                  style={ { borderRadius : "16px"}}
                                  /> 
                          </div>  
                </div> 
                 

                <div className="addaccount_form_row"  style= {{  height : "20%" }}>
                           <div className="admin_Form-Description" >   
                          <p>Password</p> 
                          </div>        
                          <div className="admin_Form-Input" >         
                          <input type="text"
                                  name="myname"
                               
                                  className="admin_input-box" 
                                  style={ { borderRadius : "16px"}}
                                  /> 
                          </div>  
                </div> 
            
               

                <div className="addaccount_form_row"  style= {{  height : "20%"  }}>
                           <div className="admin_Form-Description" >   
                          <p>Repeat Password</p> 
                          </div>        
                          <div className="admin_Form-Input" >         
                          <input type="text"
                                  name="myname"
                               
                                  className="admin_input-box" 
                                  style={ { borderRadius : "16px"}}
                                  /> 
                          </div>  
                </div> 
       
      
      
  
           
           
  
                          <div  className="addaccount_form_row_btn_div"  style= {{  height : "20%" }}> 
                          <input className="addaccount_form_row_btn"   style= {{  height : "60%" }}  type="submit" value="Submit" /> 
                          </div>
                        
                      </form>
  
                  <div > 

                  </div>
      
           </div>
          
            </div>
      )   ;  
 


       
      case "system_admin_school" :   

      return( 
  
  
          <div className="form_outer_div">
     
          <div className="form_outer_div_sidebar" >
            <Sidebar /> 
          </div>   
  
  
          
           <div className="form_outer_div_body">  
        


           
           <form className="addaccount_form" onSubmit={ addSchool }    >    
      
               <div className="addaccount_form_row">
                           <div className="admin_Form-Description" >   
                          <p>Name of school</p> 
                          </div>        
                          <div className="admin_Form-Input" >         
                          <input type="text"
                                  name="myname"
                               
                                  className="admin_input-box"
                                  /> 
                          </div>  
                </div> 
       
                
                <div className="addaccount_form_row">
                           <div className="admin_Form-Description" >   
                          <p>Email id</p> 
                          </div>        
                          <div className="admin_Form-Input" >         
                          <input type="text"
                                  name="myname"
                               
                                  className="admin_input-box"
                                  /> 
                          </div>  
                </div> 
                 

                <div className="addaccount_form_row">
                           <div className="admin_Form-Description" >   
                          <p>Password</p> 
                          </div>        
                          <div className="admin_Form-Input" >         
                          <input type="text"
                                  name="myname"
                               
                                  className="admin_input-box"
                                  /> 
                          </div>  
                </div> 
             
                <div className="addaccount_form_row">
                           <div className="admin_Form-Description" >   
                          <p>Repeat Password</p> 
                          </div>        
                          <div className="admin_Form-Input" >         
                          <input type="text"
                                  name="myname"
                               
                                  className="admin_input-box"
                                  /> 
                          </div>  
                </div> 
                
                <div className="addaccount_form_row">
                           <div className="admin_Form-Description" >   
                          <p>Name of contact person</p> 
                          </div>        
                          <div className="admin_Form-Input" >         
                          <input type="text"
                                  name="myname"
                               
                                  className="admin_input-box"
                                  /> 
                          </div>  
                </div> 
                

                <div className="addaccount_form_row">
                <div className="admin_Form-Description" >   
                          <p>Program Assigned</p> 
                </div>     

                <div className="admin_Form-Input" >         
                        
                    <div  style={{  width : "87.46%" , height: "100%"  ,  display : "flex" , flexDirection :  "row" , justifyContent : "space-around" , alignItems : "center"  , backgroundColor : "yellow"}}>


                              <div style={ {  width : "25.87%"  , height : "50%" , backgroundColor : "pink" , borderRadius : "20px" ,  display: "flex"  , flexDirection : "row" ,  overflow : "hidden"}}>
  
                                        <div style = {{  backgroundColor : "red" ,  width : "70%"  , justifyContent : "center" , display : "flex"  , alignItems : "center"}}>
                                        <p >Content Admin</p>   
                                        </div>


                                         <div style={{ backgroundColor : "beige" , width : "30%" , display : "flex" ,   alignItems : "center" , justifyContent : "center"}}>
                                         <input   type="checkbox"
                                           name="vall" />   
                                          </div>

                                </div>   



                                <div style={ {  width : "25.87%"  , height : "50%" , backgroundColor : "pink" , borderRadius : "20px" ,  display: "flex"  ,   flexDirection : "row"  , overflow : "hidden"}}>
  
                                            <div style = {{  backgroundColor : "red" ,  width : "70%"  , justifyContent : "center" , display : "flex"  , alignItems : "center"}}>
                                            <p >Content Admin</p>   
                                            </div>


                                            <div style={{ backgroundColor : "beige" , width : "30%" , display : "flex" ,   alignItems : "center" , justifyContent : "center"}}>
                                            <input   type="checkbox"
                                            name="vall" />   
                                            </div>



                                </div> 


                                <div style={ {  width : "25.87%"  , height : "50%" , backgroundColor : "pink" , borderRadius : "20px" ,  display: "flex"  ,   flexDirection : "row"  , overflow : "hidden"}}>
  
                               <div style = {{  backgroundColor : "red" ,  width : "70%"  , justifyContent : "center" , display : "flex"  , alignItems : "center"}}>
                             <p >Content Admin</p>   
                              </div>


                              <div style={{ backgroundColor : "beige" , width : "30%" , display : "flex" ,   alignItems : "center" , justifyContent : "center"}}>
                              <input   type="checkbox"
                              name="vall" />   
                             </div>



                              </div> 





                  </div>    


                  <div style={{  width : "12.54%" , height: "100%"  ,  display : "flex" , flexDirection :  "row" , justifyContent : "space-around" , alignItems : "center"  , backgroundColor : "red"}}  >



                    </div>
          </div>  
    </div> 
        
  
           
           
  
                          <div  className="addaccount_form_row_btn_div"> 
                          <input className="addaccount_form_row_btn" type="submit" value="Submit" /> 
                          </div>
                        
                      </form>
  
                  <div > 

                  </div>
      
           </div>
          
            </div>
      )   ;  
       
       
        
      case "system_admin_admin" :   

      return( 
  
  
          <div className="form_outer_div">
     
          <div className="form_outer_div_sidebar" >
            <Sidebar /> 
          </div>   
  
  
          
           <div className="form_outer_div_body">  
        


           
           <form className="addaccount_form" onSubmit={ addAdmin }   style = {{ height : "78.58%"}}  >    
      
               <div className="addaccount_form_row"  style = {{ height : "16.66%"}}  >
                           <div className="admin_Form-Description" >   
                          <p>Name</p> 
                          </div>        
                          <div className="admin_Form-Input" >         
                          <input type="text"
                                  name="myname"
                               
                                  className="admin_input-box"
                                  /> 
                          </div>  
                </div> 
       
                
                <div className="addaccount_form_row" style = {{ height : "16.66%"}} >
                           <div className="admin_Form-Description" >   
                          <p>Email id</p> 
                          </div>        
                          <div className="admin_Form-Input" >         
                          <input type="text"
                                  name="myname"
                               
                                  className="admin_input-box"
                                  /> 
                          </div>  
                </div> 
                 

                <div className="addaccount_form_row" style = {{ height : "16.66%"}} >
                           <div className="admin_Form-Description" >   
                          <p>Password</p> 
                          </div>        
                          <div className="admin_Form-Input" >         
                          <input type="text"
                                  name="myname"
                               
                                  className="admin_input-box"
                                  /> 
                          </div>  
                </div> 
             
                <div className="addaccount_form_row"  style = {{ height : "16.66%"}} >
                           <div className="admin_Form-Description" >   
                          <p>Repeat Password</p> 
                          </div>        
                          <div className="admin_Form-Input" >         
                          <input type="text"
                                  name="myname"
                               
                                  className="admin_input-box"
                                  /> 
                          </div>  
                </div> 
                
                

                <div className="addaccount_form_row"  style = {{ height : "16.66%"}} >
                <div className="admin_Form-Description" >   
                          <p>Program Assigned</p> 
                </div>     

                <div className="admin_Form-Input" >         
                        
                    <div  style={{  width : "80%" , height: "100%"  ,  display : "flex" , flexDirection :  "column" , justifyContent : "space-around" ,  backgroundColor : "yellow"}}>


                              <div style={ {  width : "25.87%"  , height : "32%" , backgroundColor : "pink" , borderRadius : "20px" ,  display: "flex"  , flexDirection : "row" ,  overflow : "hidden"}}>
  
                                        <div style = {{  backgroundColor : "red" ,  width : "70%"  , justifyContent : "center" , display : "flex"  , alignItems : "center"}}>
                                        <p >Content Admin</p>   
                                        </div>


                                         <div style={{ backgroundColor : "beige" , width : "30%" , display : "flex" ,   alignItems : "center" , justifyContent : "center"}}>
                                         <input   type="checkbox"
                                           name="vall" />   
                                          </div>

                                </div>   



                                <div style={ {  width : "25.87%"  , height : "32%" , backgroundColor : "pink" , borderRadius : "20px" ,  display: "flex"  ,   flexDirection : "row"  , overflow : "hidden"}}>
  
                                            <div style = {{  backgroundColor : "red" ,  width : "70%"  , justifyContent : "center" , display : "flex"  , alignItems : "center"}}>
                                            <p >Content Admin</p>   
                                            </div>


                                            <div style={{ backgroundColor : "beige" , width : "30%" , display : "flex" ,   alignItems : "center" , justifyContent : "center"}}>
                                            <input   type="checkbox"
                                            name="vall" />   
                                            </div>



                                </div> 


                          



                  </div>    


        
          </div>  
    </div> 
        
  
           
           
  
                          <div  className="addaccount_form_row_btn_div"  style={{ height : "16.66%"}}> 
                          <input className="addaccount_form_row_btn" type="submit" value="Submit" /> 
                          </div>
                        
                      </form>
  
                  <div > 

                  </div>
      
           </div>
          
            </div>
      )   ;  
       




      }
} 


export default AddAccount ; 