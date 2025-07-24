import React from 'react'
import Navbar from '../Components/Navbar'
import Footer from '../Components/Footer'
import Home from '../pages/Home'
import Portfolio from '../pages/Protofolio'
import Contact from '../pages/Contact'
import { Outlet } from 'react-router-dom'
export default function Layout() {
  return (
    <><Navbar/>
   <Outlet></Outlet>
    <Footer></Footer></>

  )
}
