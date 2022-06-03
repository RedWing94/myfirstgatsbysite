import * as React from 'react'
import Layout from '../components/layout'
import { StaticImage } from 'gatsby-plugin-image'

const IndexPage = () => {
  return (
    <Layout pageTitle="Sport Automotive Group">
      <StaticImage
        alt="Ford F-150"
        src="../images/ImagePlaceholderHero-01.jpg"
      />
    </Layout>
  )
}

export default IndexPage