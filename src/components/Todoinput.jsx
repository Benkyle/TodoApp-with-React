import React from "react";

function Todoinput({
  setinput,
  currentTodoIdToEdit,

  addTodo,
  input
}) {

  return (
    <div className="todoinput">
      <input
        type="text"
        placeholder="Enter Todooo..."
        value={input}
        onChange={(e) => setinput(e.target.value)}
      />
      <button onClick={addTodo}>{currentTodoIdToEdit ? "update" : "Add"}</button>
    </div>
  );
}

export default Todoinput;
