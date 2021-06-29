import React, { useState } from "react";


// const array = [];

function App() {
  const [Todo, SetTodo] = useState("");
  const [Text, SetText] = useState(["Buy Milk" , "Buy Bread" , "Buy Eggs"]);

  function handeling(event) {
    const newValue = event.target.value;
    SetTodo(newValue);
  }

  function handelClick() {
    SetText((pre) => {
      
      return[...pre , Todo]



    })
  }

var bool = false;




  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do list</h1>
      </div>
      <div className="form">
        <input name = "text" onChange={handeling} type="text" />
        <button onClick={handelClick}>
          <span>add</span>
        </button>
        
      </div>
      <div>
      
        <ul>
          
      {Text.map((x) =>
        
   
      <li><input type ="checkbox"></input>{x}</li>
        )}
        </ul>
      </div>
    </div>
  );
}

export default App;
