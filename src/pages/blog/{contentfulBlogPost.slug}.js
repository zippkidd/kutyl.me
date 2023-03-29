
import React from 'react'
import { graphql } from 'gatsby'
import { renderRichText } from 'gatsby-source-contentful/rich-text'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import { Layout } from '../../components/templates'
import { Heading } from '../../components/atoms'

const BlogPost = ({ data }) => {
  const { contentfulBlogPost } = data
  const banner = getImage(contentfulBlogPost.banner)
  const { title, subtitle, content } = contentfulBlogPost
  return (
    <Layout>
      <Heading
        level='1'
      >
        {title}
      </Heading>
      <p>{subtitle}</p>
      <GatsbyImage image={banner} alt='test image' />
      {renderRichText(content)}
    </Layout>
  )
}

export const data = graphql`
  query BlogPostQuery($id: String) {
    contentfulBlogPost(id: { eq: $id }) {
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

export default BlogPost
