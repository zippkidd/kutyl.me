
import React from 'react'
import { graphql } from 'gatsby'

const Project = ({ data }) => {
  return (
    <main>
      <h1>{data.contentfulProject.title}</h1>
    </main>
  )
}

// TODO: Make hook
export const data = graphql`
  query projectQuery($id: String) {
    contentfulProject(id: { eq: $id }) {
      title
    }
  }
`

export default Project
