import React, { useState } from "react";

import TodoItem from "./Components/TodoItem";




function App(props) {

  function deleteItem(id){

    SetText(pre => {
     
      return pre.filter(
        (item, index)=>{
          
          return index !== id;
          

        }
      )
      
    })






  }

  const [Todo, SetTodo] = useState("");
  const [Text, SetText] = useState([]);

  function handeling(event) {
    const newValue = event.target.value;
    SetTodo(newValue);
  }
  
  function handelClick() {
    SetText((pre) => {      
      return[...pre , Todo];
    });
    SetTodo("")
  }


  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do list</h1>
      </div>
      <div className="form">
        <input name = "text" onChange={handeling} type="text" value = {Todo} />
        <button onClick={handelClick}>
          <span>add</span>
        </button>
        
      </div>
      <div>
      
        <ul>
        {Text.map((todoItem , index)=> (
          <TodoItem key = {index} id = {index} text = {todoItem} onChecked = {deleteItem} />

        ))}
         
     
        </ul>
      </div>
    </div>
  );
}

export default App;
