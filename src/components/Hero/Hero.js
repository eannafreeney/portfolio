import React from "react"
import { Link } from "gatsby"
// import heroImg from "../assets/images/hero.svg"
import { StaticImage } from "gatsby-plugin-image"

// styles
import "./hero.css"
import "./hero-animations.css"

const Hero = () => {
  return (
    <header className="hero">
      <div className="hero__box">
        <StaticImage
          src="../../assets/images/profile.jpg"
          className="hero__image"
          alt="Eanna Freeney"
        />
        <h1 className="heading-primary">
          <span className="heading-primary--main">I'm Éanna</span>
          <span className="heading-primary--sub">Building beautiful sites</span>
        </h1>
      </div>
    </header>
  )
}

export default Hero
