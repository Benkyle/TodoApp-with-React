import { useState } from "react";
import "./App.css";
import DIsplaytodo from "./components/DIsplaytodo";
import Todofooter from "./components/Todofooter";
import Todoinput from "./components/Todoinput";

function App() {
  // console.log(todos)
  //state
  const [todos, setTodos] = useState([]);
  const [currentTodoIdToEdit, setcurrentTodoIdToEdit] = useState(null);
  // const [currentTodoTextToEdit, setcurrentTodoTextToEdit] = useState(null);
  const [input, setinput] = useState("");

  const deleteTodo = (id) => {
    setTodos((prevTodos) => {
      const todos = prevTodos.filter((todo) => todo.id !== id);
      return todos;
    });
  };

  const editTodo = (id) => {
    const todo = todos.find((todo) => todo.id === id);
    if (todo) {
      setinput(todo.text);
      setcurrentTodoIdToEdit(id);
    }
  };

  const addTodo = () => {
    if (!input) return alert("Enter a valid text");
    setTodos((previousValues) => {
      if (currentTodoIdToEdit) {
        previousValues.find((todo) => todo.id === currentTodoIdToEdit).text =
          input;
      } else {
        previousValues = [
          {
            id: previousValues.length + 1,
            text: input,
            isCompleted: false,
          },
          ...previousValues,
        ];
      }
      setinput("");
      setcurrentTodoIdToEdit(null)
      return previousValues;
    });
  };

  return (
    <div className="App">
      <header>
        <h1>ToDo APP</h1>
      </header>
      <Todoinput
        input={input}
        setTodos={setTodos}
        addTodo={addTodo}
        setinput={setinput}
        currentTodoIdToEdit={currentTodoIdToEdit}
      />
      <DIsplaytodo todos={todos} deleteTodo={deleteTodo} editTodo={editTodo} />
      <Todofooter />
    </div>
  );
}

export default App;
