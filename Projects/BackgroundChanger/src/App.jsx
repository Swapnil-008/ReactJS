import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
// import './App.css'

function App() {
  const [color, setColor] = useState("skyblue")
  return (
    <>
      <div className="w-full h-screen duration-200"
        style={{ backgroundColor: color }}>
        <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
          <div className='flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl'>
            <button onClick={() => setColor("red")} className='outline-none px-4 py-1 rounded-full text-white shadow-lg' style={{ background: "red" }}>Red</button>
            <button onClick={() => setColor("green")} className='outline-none px-4 py-1 rounded-full text-white shadow-lg' style={{ background: "green" }}>Green</button>
            <button onClick={() => setColor("blue")} className='outline-none px-4 py-1 rounded-full text-white shadow-lg' style={{ background: "blue" }}>Blue</button>
            <button onClick={() => setColor("olive")} className='outline-none px-4 py-1 rounded-full text-white shadow-lg' style={{ background: "olive" }}>Olive</button>
            <button onClick={() => setColor("gray")} className='outline-none px-4 py-1 rounded-full text-white shadow-lg' style={{ background: "gray" }}>Gray</button>
            <button onClick={() => setColor("yellow")} className='outline-none px-4 py-1 rounded-full text-black shadow-lg' style={{ background: "yellow" }}>Yellow</button>
            <button onClick={() => setColor("pink")} className='outline-none px-4 py-1 rounded-full text-black shadow-lg' style={{ background: "pink" }}>Pink</button>
            <button onClick={() => setColor("purple")} className='outline-none px-4 py-1 rounded-full text-white shadow-lg' style={{ background: "purple" }}>Purple</button>
            <button onClick={() => setColor("lavender")} className='outline-none px-4 py-1 rounded-full text-black shadow-lg' style={{ background: "lavender" }}>Lavender</button>
            <button onClick={() => setColor("white")} className='outline-none px-4 py-1 rounded-full text-black shadow-lg' style={{ background: "white" }}>White</button>
            <button onClick={() => setColor("black")} className='outline-none px-4 py-1 rounded-full text-white shadow-lg' style={{ background: "black" }}>Black</button>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
