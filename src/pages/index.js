import React from "react"
import { graphql } from "gatsby"
import Projects from "../components/Projects/Projects"
import Hero from "../components/Hero/Hero"
import Seo from "../components/Seo/Seo"

const IndexPage = ({ data }) => {
  const projects = data.projects.nodes
  return (
    <>
      <Seo title="Home" />
      <Hero />
      <Projects title="featured projects" projects={projects} />
    </>
  )
}

export const query = graphql`
  {
    projects: allAirtable(
      filter: { table: { eq: "portfolio" }, data: { status: { eq: "active" } } }
      sort: { fields: data___date, order: DESC }
    ) {
      nodes {
        data {
          title
          url
          stack
          github
          featured
          description
          status
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

export default IndexPage
