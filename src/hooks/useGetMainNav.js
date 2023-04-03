import { useStaticQuery, graphql } from 'gatsby'

const useGetMainNav = () => {
  const { allContentfulPage } = useStaticQuery(graphql`
    query {
      allContentfulPage(
        filter: {isInMainMenu: {eq: true}, isParentMainMenuItem: {ne: false}}
        sort: {title: ASC}
      ) {
        nodes {
          slug
          title
        }
      }
    }
  `)
  return allContentfulPage.nodes
}

export default useGetMainNav
