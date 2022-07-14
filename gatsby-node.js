const path = require("path")

// create pages dynamically
exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
  const result = await graphql(`
    {
      projects: allMdx(filter: { frontmatter: { id: { eq: "project" } } }) {
        nodes {
          frontmatter {
            slug
          }
        }
      }
    }
  `)

  result.data.projects.nodes.forEach(({ frontmatter: { slug } }) => {
    createPage({
      path: `/projects/${slug}`,
      component: path.resolve(`src/templates/project-template.js`),
      context: {
        slug: slug,
      },
    })
  })
}
