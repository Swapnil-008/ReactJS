import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import authService from './appwrite/auth'
import { login, logout } from './store/authSlice'
import { useEffect } from 'react'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import './App.css'
function App() {
  //This state is used for maintaing the track of loading as during fetch the data from appwright sometime it requires time, so if loading is true show it is loading and if it is false then show fetched data
  const [loading, setLoading] = useState(true)
  const dispatch = useDispatch()
  //This useEffect is used for on loading the page find the user is logined or not
  useEffect(() => {
    const user = authService.getCurrentUser()
    user
      .then((userData) => {
        if (userData)
        {
          dispatch(login({ userData }))
        }
        else {
          dispatch(logout())
        }
      })
      .finally(() => setLoading(false))
  }, [])

  return loading ? null : (
    <div className="min-h-screen flex flex-wrap content-between bg-gray-400">
      <div className="w-full block">
        <Header/>
        <main>
        TODO:  {/* <Outlet/> */}
        </main>
        <Footer/>
      </div>
    </div>
  )
}

export default App
