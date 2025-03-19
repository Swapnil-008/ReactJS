import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// import './index.css'
import App from './App.jsx'
import Home from './components/Home/Home.jsx'
import About from './components/About/About.jsx'
import Contact from './components/Contact/Contact.jsx'
import User from './components/User/User.jsx'
import Github, { githubInfoLoader } from './components/Github/Github.jsx'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'

// const router = createBrowserRouter([
//   {
//     path: '/',
//     element: <App/>,
//     children: [
//       {
//         path: "",
//         element: <Home/>
//       },
//       {
//         path: "about",
//         element: <About/>
//       }
//       ,
//       {
//         path: "contact",
//         element: <Contact/>
//       }
//     ]
//   }
// ])

//Another way of creating router
const router = createBrowserRouter(
  createRoutesFromElements(    //This method helps to make a router in easy way
    //as we set outlet on App that's why we are able to do nesting for other paths
    //if we want to nesting further on any path then we have close that route with </Route> and between that we can nesting that path further Ex. about's nesting for /about/swapnil
    <Route path='/' element={<App />}>
      <Route path='' element={<Home />} />
      <Route path='about' element={<About />} >
        <Route path='swapnil' element={<Github />} /> 
      </Route >
      <Route path='contact' element={<Contact />} />
      <Route path='user/:userid' element={<User />} />
      <Route loader={githubInfoLoader} path='github' element={<Github />} />
    </Route>
  )
)
//RouterProvider is a wraper, who wants a router
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
