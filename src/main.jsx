import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import Navbar from './reusable/Navbar'
import Home from './pages/Home'
import About from './pages/About'
import Services from './pages/Services'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'

const router = createBrowserRouter([
  {
    path : '/',
    element : <Home/>
  },
  {
    path : 'about',
    element : <About/>
  },
  {
    path : 'services',
    element : <Services/>
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
