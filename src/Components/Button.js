

const Button = (  props ) => {
  


    console.log( props.name );   



    return ( 
    <div style= {{ width : props.width  ,  backgroundColor :props.color , height : props.height  , borderRadius: "18px", 
    
     display : "flex"  , alignItems : "center"  , justifyContent : "center"
    }}  >
        <p style= {{ color : "#FFF"   , fontWeight : "600"   }}>  {  props.name  } </p> 
    </div> ) ; 
}

export default Button ;