import * as React from 'react'
import { Layout } from '../components/templates'
import { Button } from '../components/atoms'

const IndexPage = () => {
  return (
    <Layout>
      Hello, World!
      <Button />
    </Layout>
  )
}

export default IndexPage

export const Head = () => <title>Home Page</title>
