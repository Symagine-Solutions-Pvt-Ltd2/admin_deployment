
function   Child(  props  ) {  
  
    const onTrigger = (event) => {
        // Call the parent callback function
    props.parentCallback(event.target.myname.value);
        event.preventDefault();
    }
   
    return (
               <form onSubmit={ onTrigger}>
                    <input type="text"
                            name="myname"
                            placeholder="Enter Name"  
                            
                            />
                    <br></br><br></br>
                    <input type="submit" value="Submit" />
                    <br></br><br></br>
                </form>
    )
} 


export default Child ;