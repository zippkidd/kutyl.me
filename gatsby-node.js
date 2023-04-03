const { homepageSlug, contactPageSlug } = require('./config')

const path = require('path')
exports.onPostBuild = ({ reporter }) => {
  reporter.info('Your Gatsby site has been built! :rocket:')
}
exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
  const pageTemplate = path.resolve('src/components/pages/Page/Page.js')
  const result = await graphql(`
    query {
      allContentfulPage {
        nodes {
          banner {
            gatsbyImageData(
              jpegProgressive: true
              placeholder: DOMINANT_COLOR
              quality: 100
              resizingBehavior: FILL
              breakpoints: [400, 768, 1080, 1366, 1920]
            )
          }
          title
          subtitle
          content {
            raw
          }
          slug
          id
        }
      }
    }
  `)
  result.data.allContentfulPage.nodes.forEach(node => {
    (node.slug !== homepageSlug && node.slug !== contactPageSlug) && createPage({
      path: `${node.slug}`,
      component: pageTemplate,
      context: {
        id: node.id
      }
    })
  })
}
