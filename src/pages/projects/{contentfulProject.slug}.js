
import React from 'react'
import { graphql } from 'gatsby'
import { renderRichText } from 'gatsby-source-contentful/rich-text'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import { Layout } from '../../components/templates'
import { Heading } from '../../components/atoms'

const Project = ({ data }) => {
  const { contentfulProject } = data
  const banner = getImage(contentfulProject.banner)
  const { title, description, content } = contentfulProject
  return (
    <Layout>
      <Heading
        level='1'
      >
        {title}
      </Heading>
      <p>{description}</p>
      <GatsbyImage image={banner} alt='test image' />
      {renderRichText(content)}
    </Layout>
  )
}

export const data = graphql`
  query projectQuery($id: String) {
    contentfulProject(id: { eq: $id }) {
      banner {
        gatsbyImageData(
          jpegProgressive: true
          placeholder: DOMINANT_COLOR
          quality: 100
          resizingBehavior: FILL
          breakpoints: [400, 768, 1080, 1366, 1920]
        )
      }
      title,
      description,
      content {
        raw
      }
    }
  }
`

export default Project
