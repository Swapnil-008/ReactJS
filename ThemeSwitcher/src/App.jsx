import { useEffect, useState } from 'react'
import './App.css'
import { ThemeProvider } from './contexts/Theme'
import Card from './components/Card'
import ThemeBtn from './components/ThemeBtn'

function App() {
  const [theme, setTheme] = useState('light')

  const lightTheme = () => {
    setTheme('light')
  }

  const darkTheme = () => {
    setTheme('dark')
  }

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
  }, [theme]);  

  // Apply theme to the HTML element
  useEffect(() => {
    document.documentElement.classList.remove('light', 'dark')
    document.documentElement.classList.add(theme)
  }, [theme])

  return (
    <ThemeProvider value={{ theme, darkTheme, lightTheme }}>
      <div className="flex flex-wrap min-h-screen items-center">
        <div className="w-full">
          <div className="w-full max-w-sm mx-auto flex justify-end mb-4">
            <Card/>
          </div>
          <div className="w-full max-w-sm mx-auto">
            <ThemeBtn/>
          </div>
        </div>
      </div>
    </ThemeProvider>
  )
}

export default App
