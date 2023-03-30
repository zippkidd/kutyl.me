
import React from 'react'
import { graphql } from 'gatsby'
import { renderRichText } from 'gatsby-source-contentful/rich-text'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import { Layout } from '../../templates'
import { Heading } from '../../atoms'

const Page = ({ data }) => {
  const { contentfulPage } = data
  const banner = contentfulPage.banner && getImage(contentfulPage.banner)
  const { title, subtitle, content } = contentfulPage
  return (
    <Layout>
      <Heading
        level='1'
      >
        {title}
      </Heading>
      <p>{subtitle}</p>
      {banner && (
        <GatsbyImage image={banner} alt='test image' />
      )}
      {renderRichText(content)}
    </Layout>
  )
}

export const data = graphql`
  query($id: String) {
    contentfulPage(id: { eq: $id }) {
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
      subtitle,
      content {
        raw
      }
    }
  }
`

export default Page
