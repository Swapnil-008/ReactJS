import { useState } from 'react'
import './App.css'
import AddTodo from "./components/AddTodo"
import TodoList from "./components/Todo"
function App() {
  return (
    <>
    <h1 className='text-4xl m-4'>Todo List</h1>
      <AddTodo/>
      <TodoList/>
    </>
  )
}

export default App