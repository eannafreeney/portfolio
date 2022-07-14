import React from "react"
import { graphql } from "gatsby"

// comps
import Layout from "../components/layout"

const ProjectTemplate = ({ data }) => {
  const body = data.mdx.rawMarkdownBody
  return (
    <Layout>
      {body}
      <div>
        {data.mdx.frontmatter.stack.map(item => {
          return <p>{item}</p>
        })}
      </div>
    </Layout>
  )
}

export const query = graphql`
  query GetProject($slug: String!) {
    mdx(frontmatter: { slug: { eq: $slug } }) {
      frontmatter {
        stack
      }
      rawBody
    }
  }
`

export default ProjectTemplate
