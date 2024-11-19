import { TodoInput } from "./components/TodoInput";
import { TodoList } from "./components/TodoList";
import { useState, useEffect } from "react";

function App() {
  const [todos, setTodos] = useState([])
  const [inputTodo, setInputTodo] = useState('')
  
  function persistData(newList) {
    localStorage.setItem('todos', JSON.stringify({ todos: newList }))
  }

  const handleAddTodo = (newTodo) => {
    const newTodos = [...todos, newTodo];
    persistData(newTodos);
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
    persistData(newTodos);
    setTodos(newTodos);
  }

  useEffect(() => {
    if (!localStorage) {
      return
    }

    let localTodos = localStorage.getItem('todos')
    if (!localTodos) {
      return
    }

    console.log(localTodos)
    localTodos = JSON.parse(localTodos).todos
    setTodos(localTodos)

  }, [])

  return (
    <>
      <TodoInput handleAddTodo = {handleAddTodo} inputTodo = {inputTodo} setInputTodo = {setInputTodo} />
      <TodoList todos = {todos} handleDeleteTodo = {handleDeleteTodo} handleUpdateTodo = {handleUpdateTodo}/>
    </>
  )
}

export default App
