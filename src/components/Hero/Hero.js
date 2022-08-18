import React from "react"
import { Link } from "gatsby"
// import heroImg from "../assets/images/hero.svg"
import { StaticImage } from "gatsby-plugin-image"

import "./hero.css"

const Hero = () => {
  return (
    <header className="hero">
      <div className="hero__box">
        <div className="hero__image-container">
          <StaticImage
            src="../../assets/images/profile.jpg"
            className="hero__image"
            alt="Eanna Freeney"
          />
        </div>
        <h1 className="heading-primary">
          <span className="heading-primary--main">I'm Éanna</span>
          <span className="heading-primary--sub">
            I like building things for the web
          </span>
        </h1>
      </div>
    </header>
  )
}

export default Hero
