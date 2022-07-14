import * as React from "react"
import { graphql } from "gatsby"

// comps
import Layout from "../components/layout"
import Hero from "../components/hero"
import Cards from "../components/Cards"

// const projects = [
//   {
//     id: 1,
//     title: "title1",
//     image: "../images/astro.png",
//   },
//   {
//     id: 2,
//     title: "title2",
//     image: "../images/astro.png",
//   },
// ]

const IndexPage = ({ data }) => {
  console.log(data)
  const projects = data.projects.nodes
  return (
    <Layout>
      <Hero />
      <Cards cards={projects} />
    </Layout>
  )
}

export const query = graphql`
  {
    projects: allMdx(
      filter: { frontmatter: { title: { ne: "I'm Éanna Freeney" } } }
      sort: { fields: frontmatter___order }
    ) {
      nodes {
        frontmatter {
          slug
          stack
          title
          order
          description
          github
          url
          image {
            childImageSharp {
              gatsbyImageData(placeholder: TRACED_SVG, height: 260)
            }
          }
        }
      }
    }
  }
`

export default IndexPage
