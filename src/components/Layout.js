import React from "react"
import Footer from "./Footer/Footer"

import "../assets/css/main.css"
const Layout = ({ children }) => {
  return (
    <>
      {children}
      <Footer />
    </>
  )
}

export default Layout
