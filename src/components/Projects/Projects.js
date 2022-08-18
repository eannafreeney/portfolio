import React from "react"
import Title from "../Title/Title"
import Project from "./Project/Project"
import { Link } from "gatsby"

import "./projects.css"

const Projects = ({ title, projects, showLink }) => {
  return (
    <section className="section projects">
      <Title title={title} />
      <div className="section-center projects-center">
        {projects.map(project => {
          return <Project key={project.title} {...project} />
        })}
      </div>
      {showLink && (
        <Link to="/projects" className="btn center-btn">
          projects
        </Link>
      )}
    </section>
  )
}

export default Projects
