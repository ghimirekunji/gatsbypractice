

import React from "react"
import {Link} from 'gatsby'
import Layout from '../components/layout'

const About = () => {
  return (
      <div>
          <Layout>
          <h1>About</h1>
          <p>This is about</p>
          <p>For contacting us, please click here <Link to ="/contact">Contact</Link></p>
          </Layout>
      </div>
  )
}


export default About
