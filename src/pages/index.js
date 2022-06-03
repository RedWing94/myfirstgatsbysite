import * as React from 'react'
import Layout from '../components/layout'
import { StaticImage } from 'gatsby-plugin-image'

const IndexPage = () => {
  return (
    <Layout pageTitle="Sport Automotive Group">
      <center>
      <p>Florida's #1 Automotive Dealer Group</p>
      <StaticImage
        alt="Clifford, a reddish-brown pitbull, posing on a couch and looking stoically at the camera"
        src="../images/Truck Picture.jpg"
      /></center>
    </Layout>
  )
}

export default IndexPage