import React from "react"
import socialLinks from "../../constants/social_links"

import "./footer.css"

const Footer = () => {
  return (
    <footer className="footer">
      <h4>
        copyright &copy; {new Date().getFullYear()}
        <span> Eanna Freeney</span> All Rights Reserved
      </h4>
    </footer>
  )
}

export default Footer
