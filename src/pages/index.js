import * as React from 'react'
import useGetHomepage from '../hooks/useGetHomepage'
import { renderRichText } from 'gatsby-source-contentful/rich-text'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import { Layout } from '../components/templates'
import { Heading } from '../components/atoms/'

const IndexPage = () => {
  const data = useGetHomepage()
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
    </Layout>
  )
}

export default IndexPage

export const Head = () => <title>Home Page</title>
