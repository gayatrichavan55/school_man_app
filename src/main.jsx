import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import PageLayout from './components/pages/PageLayout.jsx'
import Home from './components/pages/Home.jsx'
import About from './components/pages/About.jsx'
import Contact from './components/pages/Contact.jsx'
import Signup from './components/authentication/Signup.jsx'
import Login from './components/authentication/Login.jsx'


const route = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<PageLayout/>}>
      <Route index element={<Home/>} />
      <Route path='about' element={<About/>} />
      <Route path='contact' element={<Contact/>} />
      <Route path='signup' element={<Signup/>} />
      <Route path='login' element={<Login/>} />
    </Route>
  )
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={route}/>
  </React.StrictMode>,
)
