function App() {
  const username = "Chai aur code"
  return (
    <h1>Chai aur react with vite  | Swapnil Shingne {username}</h1>
  )
}
// we can't use javascript expressions in return block, there we can use only evaluated expression(final output -> username)
// if we want to use javascript expression, we can use inside function outside return block or outside function also
export default App 