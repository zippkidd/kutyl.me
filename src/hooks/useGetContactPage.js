import { useStaticQuery, graphql } from 'gatsby'

const useGetContactPage = () => {
  const { allContentfulPage } = useStaticQuery(graphql`
    query {
      allContentfulPage(filter: {slug: {eq: "contact"}}) {
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
        }
      }
    }
  `)
  return allContentfulPage.nodes[0]
}

export default useGetContactPage
