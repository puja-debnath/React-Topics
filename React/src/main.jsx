import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'


import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import Layout from './Layout.jsx'
import Home from './components/Home.jsx'
import About from './components/About.jsx'

const router = createBrowserRouter(
  createRoutesFromElements(
      <Route path="/"  element={<Layout />} >
      <Route path=""  element={<Home />} />
      <Route path="about/"  element={<About />} />

  </Route>
  )
)






createRoot(document.getElementById('root')).render(
  <StrictMode>
       <RouterProvider router={router} />
  </StrictMode>,
)
