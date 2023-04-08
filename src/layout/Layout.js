import React from 'react'
import Footer from '../components/Footer'
import TopNavbar from '../components/Navbar'

const Layout = ({children}) => {
  return (
    <>
    <TopNavbar/>
    {children}
    <Footer/>
    </>
  )
}

export default Layout