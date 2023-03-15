import * as React from 'react'
import useGetProjects from '../hooks/useGetProjects'
import { renderRichText } from 'gatsby-source-contentful/rich-text'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import { Layout } from '../components/templates'
import { Heading } from '../components/atoms/'

const IndexPage = () => {
  const projects = useGetProjects()
  const cardImage = getImage(projects[0].card)
  // console.log(projects[0].slug)
  // console.log(projects[0])
  // console.log(cardImage)
  return (
    <Layout>
      <Heading
        level='1'
        id='testID'
      >
        {projects[0].title}
      </Heading>
      <GatsbyImage image={cardImage} alt='test image' />
      {renderRichText(projects[0].content)}
    </Layout>
  )
}

export default IndexPage

export const Head = () => <title>Home Page</title>
