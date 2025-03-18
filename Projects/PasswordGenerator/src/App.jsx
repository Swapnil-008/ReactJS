import { useState, useCallback, useEffect, useRef } from "react";
import './assets/app.css'
function App() {
  const [length, setLength] = useState(8);
  const [numberAllowed, setNumberAllowed] = useState(false);
  const [characterAllowed, setCharacterAllowed] = useState(false);
  const [password, setPassword] = useState("");

  //Ref hook - Whenever we want to reference of anything, there we use ref hook
  const passwordRef = useRef(null);
//  useCallback does not automatically execute the function; it memoizes (remembers) the function definition and ensures that it is only re-created when dependencies change.
//  The function will only execute when you call it manually (like in useEffect).
//  In this case, useEffect triggers the function when dependencies change, ensuring the password updates correctly.
  const passwordGenerator = useCallback(() => {
    let password = "";
    let characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    let numbers = "0123456789";
    let specialCharacters = "!@#$%^&*()_+"
    if (numberAllowed)
    {
      characters += numbers;
    }
    if (characterAllowed)
    {
      characters += specialCharacters;
    }
    for (let i = 0; i < length; i++)
    {
      password += characters.charAt(Math.floor(Math.random() * characters.length + 1));
    }
    setPassword(password)
  }, [length, numberAllowed, characterAllowed, setPassword])
  //useEffect hook is used to run a piece of code on a specific condition

  //We are using ref hook to getting reference of password to select it
  const copyPasswordToClipboard = useCallback(() => {
    passwordRef.current?.select();   //if the passwordRef has some reference then only select the generated password from input field
    passwordRef.current?.setSelectionRange(0, 10); // selection range
    window.navigator.clipboard.writeText(passwordRef.current.value) // It will copy the password to clipboard of a window
  }, [password])

  // Whenever page loads this hook calls or if any change occur in dependencies of this hook then also it runs(run the passwordGenerator function called in this hook)
  useEffect(() => {
    passwordGenerator();
  }, [length, numberAllowed, characterAllowed, passwordGenerator])

  return (
    <>
      <div className="w-full max-w-md mx-auto shadow-md rounded-lg px-4 my-8 bg-gray-700  ">
        <h1 className="text-white text-center text-lg my-1 py-2">Password Generator</h1>
        <div className="flex shadow rounded-lg overflow-hidden mb-2 text-black-500">
          <input
            type="text"
            value={password}
            className="outline-none w-full py-1 px-3"
            placeholder="password"
            readOnly
            ref={passwordRef}
          />
          <button
          onClick={copyPasswordToClipboard}
           className="outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0">copy</button>
        </div>
        <div className="flex text-sm gap-x-2">
  <div id="range" className="flex items-center gap-x-1 mb-2">
            <input type="range"
              min={6}
              max={100}
              value={length}
              className="cursor-pointer"
              onChange={(e) => {
                setLength(e.target.value)
              }} />
            <label htmlFor="range" className="text-yellow-400">length: {length}</label>
          </div>
          <div className="flex items-center gap-x-1 mb-2">
            <input type="checkbox"
              id="numberAllowed"
              defaultChecked={numberAllowed}
              className="cursor-pointer"
              onChange={() => {
                setNumberAllowed((prev) => !prev);
              }} />
            <label htmlFor="numberAllowed" className="text-yellow-400">number</label>
          </div>
          <div className="flex items-center gap-x-1 mb-2">
            <input type="checkbox"
              id="characterAllowed"
              defaultChecked={characterAllowed}
              className="cursor-pointer"
              onChange={() => {
                setCharacterAllowed((prev) => !prev);
              }} />
            <label htmlFor="characterAllowed" className="text-yellow-400">character</label>
          </div>
        </div>
      </div>
    </>
  )
}

export default App