import * as React from 'react'
import { Layout } from '../components/templates'
import { Heading } from '../components/atoms/'

const IndexPage = () => {
  return (
    <Layout>
      <Heading
        level='1'
        size='3'
        id='testID'
      >
        Cuddle Me
      </Heading>
      Hello, World!
    </Layout>
  )
}

export default IndexPage

export const Head = () => <title>Home Page</title>
