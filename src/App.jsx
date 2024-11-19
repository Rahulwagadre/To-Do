import { TodoInput } from "./components/TodoInput";
import { TodoList } from "./components/TodoList";
import { useState } from "react";

function App() {
  const [todos, setTodos] = useState([])
  const [inputTodo, setInputTodo] = useState('')
  
  const handleAddTodo = (newTodo) => {
    const newTodos = [...todos, newTodo];
    setTodos(newTodos);
  }

  const handleUpdateTodo = (index) => {
    const toBeEditedTodo = todos[index];
    setInputTodo(toBeEditedTodo);
    handleDeleteTodo(index);
  }

  const handleDeleteTodo = (deleteIndex) => {
    const newTodos = todos.filter((todo, index) => {
      return deleteIndex !== index;
    })
    setTodos(newTodos);
  }

  return (
    <>
      <TodoInput handleAddTodo = {handleAddTodo} inputTodo = {inputTodo} setInputTodo = {setInputTodo} />
      <TodoList todos = {todos} handleDeleteTodo = {handleDeleteTodo} handleUpdateTodo = {handleUpdateTodo}/>
    </>
  )
}

export default App
