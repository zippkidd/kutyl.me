import { useStaticQuery, graphql } from 'gatsby'

const useGetMainNav = () => {
  const { allContentfulPage } = useStaticQuery(graphql`
    query {
      allContentfulPage(
        filter: {parentMainMenuItem: {slug: {ne: null}}}
        sort: {title: ASC}
      ) {
        nodes {
          title
          slug
          parentMainMenuItem {
            slug
          }
        }
      }
    }
  `)
  return allContentfulPage.nodes
}

export default useGetMainNav
