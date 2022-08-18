import React from "react"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import { FaGithubSquare, FaShareSquare } from "react-icons/fa"

import "./project.css"

const Project = ({ data }) => {
  const { title, description, github, url, image, stack } = data

  return (
    <article className="project">
      {image && (
        <GatsbyImage
          image={getImage(image.localFiles[0])}
          className="project-img"
          alt={title}
        />
      )}
      <div className="project-info">
        <a href={url} target="_blank">
          <h3 className="project-title">{title}</h3>
        </a>
        <p className="project-desc">{description}</p>
        <div className="project-stack">
          {stack.map((item, index) => {
            return <span key={index}>{item}</span>
          })}
        </div>
        <div className="project-links">
          <a href={github} target="_blank">
            <FaGithubSquare className="project-icon" />
          </a>
          <a href={url} target="_blank">
            <FaShareSquare className="project-icon" />
          </a>
        </div>
      </div>
    </article>
  )
}

export default Project
