import React from "react"
import { graphql } from "gatsby"

import Projects from "../components/Projects/Projects"
import Seo from "../components/Seo/Seo"

const ProjectsPage = ({ data }) => {
  const projects = data.projects.nodes
  return (
    <>
      <Seo title="projects" />
      {/* <main> */}
      {/* <section className="projects-page"> */}
      <Projects title="all projects" projects={projects} />
      {/* </section> */}
      {/* </main> */}
    </>
  )
}

export const query = graphql`
  {
    projects: allAirtable(filter: { table: { eq: "sites" } }) {
      nodes {
        data {
          title
          url
          stack
          github
          featured
          description
          image {
            localFiles {
              childImageSharp {
                gatsbyImageData(placeholder: TRACED_SVG, layout: CONSTRAINED)
              }
            }
          }
        }
      }
    }
  }
`

export default ProjectsPage
