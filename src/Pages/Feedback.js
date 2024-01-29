import { useState  , useEffect } from "react"; 
import Sidebar from "../Sidebar"  ;
import "../Style/ClientView.css" ; 
import {Link , useNavigate  , useLocation} from "react-router-dom" ;



function Feedback() {    
     
    const location = useLocation();   
    const [ data , setData ] = useState( location.state.data.bp_answer);  
    const [ feedbackArray , setFeedbackArray ] = useState( []); 

   
    


    console.log(  location.state.data )  ; 
    console.log(  location.state.userInfo )  ; 


     

    return(  

    <div className="clientview" >  

            <div className="clientview_sidebar"  style={{ borderRadius : 25}} >
                   <Sidebar    info = {  location.state.userInfo}   /> 
            </div>  



            <div className="clientview_body"   style={ {  justifyContent : "flex-start"  , backgroundColor : "#fff" }}>   




             <div  className="clientview_body1" > 
          


             </div>
            
              <div className= "clientview_table_outer_div_body2" style={{  height : "60%"}}   >   
    

               <div className="clientview_table_inner_div_column_name"  style={ { height : "25%"}}>  
               
               <div    className="clientview_table_row_box"  style= {{   width: "25%" , height: "100%"   , borderRight : "1px solid black" }}>
                 <p className="header_text">Details</p>
               </div>
               <div   className="clientview_table_row_box"  style= {{   width: "25%" ,  height: "100%"  , borderRight : "1px solid black"}  }>
                 <p className="header_text">Student's answer</p>
               </div>
               <div  className="clientview_table_row_box"   style= {{  width: "30%"  ,  height: "100%"    , borderRight : "1px solid black"}}>
                 <p className="header_text">Feedback</p>
               </div> 
               <div   className="clientview_table_row_box"  style= {{   width: "20%"  ,  height: "100%"  , borderRight : "1px solid black"}}> 
               </div> 


              </div>  



              <div  className="clientview_table_inner_div_table_row">
                   
              {   
               


              data.map( (  el  , index   )  => ( 


                <div  key= { index }    style={ {  width : "100%" , height: "33.3%"   , display : "flex" , flexDirection : "row"   ,   borderBottom : "1px solid black" } }>  



               <div   className="clientview_table_row_box"  style= {{   width: "25%" , height: "100%", borderRight : "1px solid black" }}>
                 <p> hjhk </p>
               </div>
               <div  className="clientview_table_row_box"  style= {{   width: "25%" ,  height: "100%" , borderRight : "1px solid black"}  }>
                 <p> { data[index]  }</p>
               </div> 


               <div    className="clientview_table_row_box"  style= {{  width: "30%"  ,  height: "100%"   , borderRight : "1px solid black"}}>
                
               <input type="text"   style={{ width : "80%"  ,height : "60%"  , borderRadius : 15  ,   border : "1px solid #5E81F4" }}    name="feedback"  onChange={ ( e) => { }} /> 

               </div>  


               <div  className="clientview_table_row_box"   style= {{   width: "20%"  ,  height: "100%"  , borderRight : "1px solid black"  , display:"flex"  , flexDirection :"row"  , justifyContent: "space-around"}}>  
             
               <button  style = {{  height : "40%"  , width : "36%"   , backgroundColor : "#FCC046"  , border : "0px"  , borderRadius :  15 }}  onClick={() => {}}>Share</button>   
               </div> 


              </div>  
            
              
              ) )

              }
            </div>
              </div> 

              <div className="body3"> 

              <div  style = {{ width : "25%"  , height : "34%"  ,  padding : "2"}}   onClick={ () => {  } }  className="add_new_program_button">
                <p  style={ { textAlign : "center"}}>Approve Business Plan (to allow download of certificate)</p>
              </div>
            
              </div>
             
            </div>



    </div> 



      
    


    )  ;

}   



export default Feedback ; 