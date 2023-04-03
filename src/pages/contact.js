import * as React from 'react'
import useGetContactPage from '../hooks/useGetContactPage'
import { renderRichText } from 'gatsby-source-contentful/rich-text'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import { Layout } from '../components/templates'
import { Heading } from '../components/atoms'

const IndexPage = () => {
  const data = useGetContactPage()
  const banner = getImage(data.banner)
  const { title, subtitle, content } = data
  return (
    <Layout>
      <Heading
        level='1'
        id='testID'
      >
        {title}
      </Heading>
      <Heading
        level='2'
      >
        {subtitle}
      </Heading>
      <GatsbyImage image={banner} alt='test image' />
      {renderRichText(content)}
      <p>TODO: form goes here</p>
    </Layout>
  )
}

export default IndexPage

export const Head = () => <title>Contact Page</title>
