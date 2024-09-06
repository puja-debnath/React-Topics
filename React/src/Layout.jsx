import React from 'react'
import {createBrowserRouter, createRoutesFromElements, Outlet , Route} from "react-router-dom"
import Footer from "./components/Footer.jsx"
import Header from "./components/Header.jsx"



const Layout = () => {
  return (
   <>
   <Header />
   <Outlet 
   />
   <Footer/>
   </>
  )
}

export default Layout