import React from "react"








const TodoItem = (props)=> {
     
     

return(
   
   <div onClick = {() => {
        props.onChecked(props.id)
   }}>
     <li className = "pointer">{props.text}</li>
   </div>
   
   )
}



      export default TodoItem