import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import styled from "styled-components"

const StyledSection = styled.section`
  text-align: center;
  margin-top: 64px;
  margin-bottom: 64px;

  .title {
    margin-bottom: 16px;
  }
  .subtitle {
    margin-top: 0;
    width: 500px;
    margin: auto;
    line-height: 36px;
  }
  .highlighted {
    /* box-shadow: inset 0 -2.5rem 0 #cdf3e1; */
  }
  .hero-image {
    flex-grow: 0;
    border-radius: 50%;
    margin-bottom: 32px;
  }
`

const Hero = () => {
  const data = useStaticQuery(graphql`
    {
      hero: mdx(frontmatter: { id: { eq: "hero" } }) {
        frontmatter {
          emoji
          greetings
          subtitleHighlight
          subtitlePrefix
          title
          image {
            childImageSharp {
              gatsbyImageData(width: 200)
            }
          }
        }
      }
    }
  `)
  const image = data.hero.frontmatter.image
  return (
    <StyledSection>
      <GatsbyImage image={getImage(image)} className="hero-image" />
      <h1 className="title">
        Hi!{" "}
        <span role="img" aria-label="emoji">
          👋
        </span>
        <br />
        I'm Éanna Freeney
      </h1>
      <h2 className="subtitle">
        Building cool things in{" "}
        <span className="highlighted">
          JavaScript, CSS, Node.js, React, Gatsby, Wordpress & Shopify
        </span>
      </h2>
      <div className="description"></div>
    </StyledSection>
  )
}

// export const query = graphql`
//   {
//     hero: mdx(frontmatter: { id: { eq: "hero" } }) {
//       frontmatter {
//         emoji
//         greetings
//         subtitleHighlight
//         subtitlePrefix
//         title
//         image {
//           childImageSharp {
//             gatsbyImageData(width: 400)
//           }
//         }
//       }
//     }
//   }
// `

export default Hero
