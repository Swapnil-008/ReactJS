import { useState } from 'react'
import './App.css'
import Card from './components/Card'
function App()
{
  let myObj = {
    username: " swapnil",
    age: 21,
    hobbies: ["playing", "coding", "gaming"]
  }
  let myArr = ["Amey", 20, ["singing", "travelling", "coding"]];
  return (
    <>
      <h1 className="bg-green-400 text-black p-4 rounded-xl">Tailwind Test</h1>
      <Card channel = "Chai aur Code" someObj = {myObj}/>
      {/* <Card channel = "Chai aur React" someArr = {myArr}/> */}
    </>
  );
}
export default App;