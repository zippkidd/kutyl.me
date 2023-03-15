import { useStaticQuery, graphql } from 'gatsby'

const useGetProjects = () => {
  const { allContentfulProject } = useStaticQuery(graphql`
    query {
      allContentfulProject(sort: {createdAt: DESC}) {
        nodes {
          card {
            gatsbyImageData(
              jpegProgressive: true
              placeholder: DOMINANT_COLOR
              quality: 100
              resizingBehavior: FILL
              breakpoints: [400, 768, 1080, 1366, 1920]
            )
          }
          content {
            raw
          }
          description
          linkToContent
          title
          slug
        }
      }
    }
  `)
  return allContentfulProject.nodes
}

export default useGetProjects
